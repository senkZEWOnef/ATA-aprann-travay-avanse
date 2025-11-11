'use server';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function submitExamResult(
  courseId: string,
  examType: string,
  score: number,
  totalPoints: number,
  timeSpent: number,
  answers: any,
  locale: string,
  courseSlug: string
) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  try {
    // Save exam result to database
    const examResult = await prisma.examResult.create({
      data: {
        userId: session.user.id,
        courseId: courseId,
        examType: examType,
        score: score,
        totalPoints: totalPoints,
        percentage: Math.round((score / totalPoints) * 100),
        passed: (score / totalPoints) >= 0.7, // 70% passing
        timeSpent: timeSpent,
        answers: answers
      }
    });

    // If passed, mark midterm as completed in user progress
    if ((score / totalPoints) >= 0.7) {
      // Get current completed lessons count
      const completedLessons = await prisma.lessonProgress.count({
        where: {
          userId: session.user.id,
          lesson: {
            courseId: courseId
          },
          completed: true
        }
      });

      // Update or create user progress
      await prisma.userProgress.upsert({
        where: {
          userId_courseId: {
            userId: session.user.id,
            courseId: courseId
          }
        },
        update: {
          midtermCompleted: true,
          midtermScore: Math.round((score / totalPoints) * 100)
        },
        create: {
          userId: session.user.id,
          courseId: courseId,
          midtermCompleted: true,
          midtermScore: Math.round((score / totalPoints) * 100),
          lessonsCompleted: completedLessons
        }
      });
    }

    return {
      success: true,
      examResult: {
        id: examResult.id,
        score: examResult.score,
        totalPoints: examResult.totalPoints,
        percentage: examResult.percentage,
        passed: examResult.passed
      }
    };
  } catch (error) {
    console.error('Failed to submit exam result:', error);
    throw new Error('Failed to submit exam result');
  }
}

export async function checkExamEligibility(courseId: string, courseSlug: string) {
  const session = await getServerSession(authOptions);
  
  console.log('Session:', { userId: session?.user?.id, email: session?.user?.email });
  
  if (!session?.user?.id) {
    console.log('No session or user ID');
    return { eligible: false, reason: 'not_authenticated' };
  }

  // Check if enrolled
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId: courseId
      }
    }
  });

  console.log('Enrollment check:', { courseId, userId: session.user.id, enrollment: !!enrollment });

  if (!enrollment) {
    console.log('User not enrolled');
    return { eligible: false, reason: 'not_enrolled' };
  }

  // Check completed lessons
  const completedLessons = await prisma.lessonProgress.count({
    where: {
      userId: session.user.id,
      lesson: {
        courseId: courseId
      },
      completed: true
    }
  });

  console.log('Completed lessons check:', { completedLessons, courseSlug });

  // For Python course, need 8 completed lessons
  const requiredLessons = courseSlug === 'python-pou-komanse-yo' ? 8 : 7;
  
  console.log('Lesson requirement:', { required: requiredLessons, completed: completedLessons });
  
  if (completedLessons < requiredLessons) {
    console.log('Insufficient lessons, blocking access');
    return { 
      eligible: false, 
      reason: 'insufficient_lessons',
      completed: completedLessons,
      required: requiredLessons
    };
  }

  // Check if already taken
  const existingExamResult = await prisma.examResult.findFirst({
    where: {
      userId: session.user.id,
      examType: 'MIDTERM',
      courseId: courseId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return {
    eligible: true,
    existingResult: existingExamResult ? {
      id: existingExamResult.id,
      score: existingExamResult.score,
      totalPoints: existingExamResult.totalPoints,
      percentage: existingExamResult.percentage,
      passed: existingExamResult.passed,
      createdAt: existingExamResult.createdAt
    } : null
  };
}