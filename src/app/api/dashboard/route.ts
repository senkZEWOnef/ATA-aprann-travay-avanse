import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Fetch user's enrolled courses with progress
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        course: {
          select: {
            id: true,
            slug: true,
            titleHt: true,
            titleFr: true,
            category: true,
            level: true,
          },
        },
      },
      orderBy: {
        enrolledAt: 'desc',
      },
    });

    // Transform enrollments to courses with progress
    const courses = enrollments.map(enrollment => ({
      id: enrollment.course.id,
      slug: enrollment.course.slug,
      titleHt: enrollment.course.titleHt,
      titleFr: enrollment.course.titleFr,
      category: enrollment.course.category,
      level: enrollment.course.level,
      progress: enrollment.progress,
      completedAt: enrollment.completedAt?.toISOString(),
      enrolledAt: enrollment.enrolledAt.toISOString(),
    }));

    // Fetch user's job applications
    const jobApplications = await prisma.jobApplication.findMany({
      where: {
        applicantId: session.user.id,
      },
      include: {
        job: {
          select: {
            id: true,
            titleHt: true,
            titleFr: true,
            company: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        appliedAt: 'desc',
      },
      take: 10, // Limit to recent applications
    });

    // Calculate stats
    const coursesEnrolled = enrollments.length;
    const coursesCompleted = enrollments.filter(e => e.completedAt).length;
    const jobsApplied = jobApplications.length;
    
    // Fetch badges (for future implementation)
    const badgesEarned = 0; // TODO: Implement badge counting

    const dashboardData = {
      courses,
      jobApplications: jobApplications.map(app => ({
        id: app.id,
        status: app.status,
        appliedAt: app.appliedAt.toISOString(),
        job: app.job,
      })),
      stats: {
        coursesEnrolled,
        coursesCompleted,
        jobsApplied,
        badgesEarned,
      },
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}