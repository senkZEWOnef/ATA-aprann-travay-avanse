import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { checkExamEligibility, submitExamResult } from '@/app/actions/exam';
import PythonMidtermExam from '@/components/PythonMidtermExam';

interface MidtermExamPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function MidtermExamPage({ params }: MidtermExamPageProps) {
  const { locale, slug } = await params;
  
  console.log('=== MIDTERM EXAM PAGE ===');
  console.log('Params:', { locale, slug });
  
  const session = await getServerSession(authOptions);
  
  console.log('Session check:', { hasSession: !!session, userId: session?.user?.id });

  if (!session?.user?.id) {
    console.log('No session, redirecting to signin');
    redirect(`/${locale}/auth/signin`);
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

  // Check if this is the Python course
  if (course.slug !== 'python-pou-komanse-yo') {
    console.log('Not Python course, showing 404');
    notFound();
  }

  // Check exam eligibility
  console.log('Checking eligibility for course:', course.id);
  const eligibility = await checkExamEligibility(course.id, course.slug);
  
  console.log('Eligibility result:', eligibility);
  
  if (!eligibility.eligible) {
    console.log('Not eligible, reason:', eligibility.reason);
    if (eligibility.reason === 'not_enrolled') {
      console.log('Redirecting: not enrolled');
      redirect(`/${locale}/courses/${slug}`);
    } else if (eligibility.reason === 'insufficient_lessons') {
      console.log('Redirecting: insufficient lessons');
      redirect(`/${locale}/courses/${slug}?error=midterm_not_available&completed=${eligibility.completed}&required=${eligibility.required}`);
    }
  }
  
  console.log('Eligibility passed, rendering exam');

  const existingExamResult = eligibility.existingResult;

  async function handleExamComplete(score: number, totalPoints: number, timeSpent: number, answers: any) {
    'use server';
    
    try {
      await submitExamResult(
        course.id,
        'MIDTERM',
        score,
        totalPoints,
        timeSpent,
        answers,
        locale,
        course.slug
      );
      
      // Redirect to course page with success message
      redirect(`/${locale}/courses/${course.slug}?exam_completed=true&score=${score}&total=${totalPoints}`);
    } catch (error) {
      console.error('Failed to submit exam:', error);
      // Could redirect with error message
      redirect(`/${locale}/courses/${course.slug}?exam_error=true`);
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
            {locale === 'ht' ? 'Egzamen Midterm' : locale === 'fr' ? 'Examen de Mi-Session' : 'Midterm Exam'}
          </span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {locale === 'ht' ? 'Egzamen Midterm Python' : locale === 'fr' ? 'Examen de Mi-Session Python' : 'Python Midterm Exam'}
          </h1>
          <p className="text-gray-600">
            {locale === 'ht' ? 'Teste konesans ou sou tout konsèp Python yo nou aprann nan premye 7 semèn yo.' : 
             locale === 'fr' ? 'Testez vos connaissances sur tous les concepts Python appris dans les 7 premières semaines.' :
             'Test your knowledge of all Python concepts learned in the first 7 weeks.'}
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
        <PythonMidtermExam onComplete={handleExamComplete} />
      </div>
    </div>
  );
}