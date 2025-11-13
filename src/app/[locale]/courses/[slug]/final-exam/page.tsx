import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { checkExamEligibility, submitExamResult } from '@/app/actions/exam';
import PythonFinalExam from '@/components/PythonFinalExam';
import HtmlCssFinalExam from '@/components/HtmlCssFinalExam';

interface FinalExamPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function FinalExamPage({ params }: FinalExamPageProps) {
  const { locale, slug } = await params;
  
  console.log('=== FINAL EXAM PAGE ===');
  console.log('Params:', { locale, slug });
  
  const session = await getServerSession(authOptions);
  
  console.log('Session check:', { hasSession: !!session, userId: session?.user?.id });

  // TEMPORARILY BYPASS AUTH FOR DEMO
  if (!session?.user?.id) {
    console.log('No session - DEMO MODE: continuing without auth');
  }

  // Get course data
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      lessons: {
        orderBy: { order: 'asc' }
      }
    }
  });

  console.log('Course found:', { courseId: course?.id, slug: course?.slug });

  if (!course) {
    console.log('Course not found, showing 404');
    notFound();
  }

  // Check if this course supports final exams
  if (course.slug !== 'python-pou-komanse-yo' && course.slug !== 'html-css-pou-komanse-yo') {
    console.log('Course does not support final exams, showing 404');
    notFound();
  }

  // Check exam eligibility - final exam requires completing all 15 lessons
  console.log('Checking eligibility for course:', course.id);
  const eligibility = await checkExamEligibility(course.id, course.slug, 'FINAL');
  
  console.log('Eligibility result:', eligibility);
  
  if (!eligibility.eligible) {
    console.log('Not eligible, reason:', eligibility.reason);
    if (eligibility.reason === 'not_enrolled') {
      console.log('Redirecting: not enrolled');
      redirect(`/${locale}/courses/${slug}`);
    } else if (eligibility.reason === 'insufficient_lessons') {
      console.log('Redirecting: insufficient lessons');
      redirect(`/${locale}/courses/${slug}?error=final_exam_not_available&completed=${eligibility.completed}&required=${eligibility.required}`);
    }
  }
  
  console.log('Eligibility passed, rendering final exam');

  const existingExamResult = eligibility.existingResult;

  async function handleExamComplete(score: number, totalPoints: number, timeSpent: number, answers: any) {
    'use server';
    
    try {
      // Check if user has session before submitting to database
      const currentSession = await getServerSession(authOptions);
      
      if (currentSession?.user?.id) {
        await submitExamResult(
          course.id,
          'FINAL',
          score,
          totalPoints,
          timeSpent,
          answers,
          locale,
          course.slug
        );
      } else {
        console.log('DEMO MODE: Exam completed but not saved to database');
      }
      
      // Redirect to course page with success message
      redirect(`/${locale}/courses/${course.slug}?exam_completed=true&score=${score}&total=${totalPoints}&type=final`);
    } catch (error) {
      console.error('Failed to submit final exam:', error);
      // Could redirect with error message
      redirect(`/${locale}/courses/${course.slug}?exam_error=true&type=final`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href={`/${locale}`} className="hover:text-gray-900">
            {locale === 'ht' ? 'Akèy' : locale === 'fr' ? 'Accueil' : 'Home'}
          </a>
          <span>→</span>
          <a href={`/${locale}/courses`} className="hover:text-gray-900">
            {locale === 'ht' ? 'Kou yo' : locale === 'fr' ? 'Cours' : 'Courses'}
          </a>
          <span>→</span>
          <a href={`/${locale}/courses/${slug}`} className="hover:text-gray-900">
            {course.titleHt}
          </a>
          <span>→</span>
          <span className="text-gray-900 font-medium">
            {locale === 'ht' ? 'Egzamen Final' : locale === 'fr' ? 'Examen Final' : 'Final Exam'}
          </span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {course.slug === 'python-pou-komanse-yo' 
              ? (locale === 'ht' ? 'Egzamen Final Python' : locale === 'fr' ? 'Examen Final Python' : 'Python Final Exam')
              : (locale === 'ht' ? 'Egzamen Final HTML & CSS' : locale === 'fr' ? 'Examen Final HTML & CSS' : 'HTML & CSS Final Exam')
            }
          </h1>
          <p className="text-gray-600">
            {course.slug === 'python-pou-komanse-yo' 
              ? (locale === 'ht' ? 'Teste konpetans kominote ou sou tout konsèp Python yo nou aprann nan 15 semèn yo.' : 
                 locale === 'fr' ? 'Testez vos compétences complètes sur tous les concepts Python appris dans les 15 semaines.' :
                 'Test your comprehensive skills on all Python concepts learned over 15 weeks.')
              : (locale === 'ht' ? 'Teste konpetans kominote ou sou tout konsèp HTML ak CSS yo nou aprann nan 14 semèn yo.' :
                 locale === 'fr' ? 'Testez vos compétences complètes sur tous les concepts HTML et CSS appris dans les 14 semaines.' :
                 'Test your comprehensive skills on all HTML and CSS concepts learned over 14 weeks.')
            }
          </p>
          
          {existingExamResult && (
            <div className={`mt-4 p-4 rounded-lg ${existingExamResult.passed ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
              <div className="flex items-center gap-2">
                {existingExamResult.passed ? (
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                )}
                <span className="font-medium">
                  {existingExamResult.passed 
                    ? (locale === 'ht' ? 'Egzamen Pase' : locale === 'fr' ? 'Examen Réussi' : 'Exam Passed')
                    : (locale === 'ht' ? 'Egzamen Echwe - Ka Reprann' : locale === 'fr' ? 'Examen Échoué - Peut Reprendre' : 'Exam Failed - Can Retake')
                  }
                </span>
                <span className="text-sm text-gray-600">
                  {existingExamResult.percentage}% ({existingExamResult.score}/{existingExamResult.totalPoints})
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Exam Component */}
      <div className="max-w-6xl mx-auto px-6">
        {course.slug === 'python-pou-komanse-yo' ? (
          <PythonFinalExam onComplete={handleExamComplete} />
        ) : (
          <HtmlCssFinalExam onComplete={handleExamComplete} />
        )}
      </div>
    </div>
  );
}