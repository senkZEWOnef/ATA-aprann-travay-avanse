'use client';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useLocale } from '@/components/LocaleProvider';
import PythonCardLessonPlayer from '@/components/PythonCardLessonPlayer';
import PythonMiniProject from '@/components/PythonMiniProject';
import HtmlCssLessonPlayer from '@/components/HtmlCssLessonPlayer';
import HtmlCssCardLessonPlayer from '@/components/HtmlCssCardLessonPlayer';

export default function LessonPage() {
  const params = useParams();
  const { data: session } = useSession();
  const locale = useLocale();
  const [course, setCourse] = useState<{
    id: string;
    titleHt: string;
    titleFr: string;
    slug: string;
    lessons: Array<{
      id: string;
      order: number;
      titleHt: string;
      titleFr: string;
    }>;
  } | null>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const { slug, lessonId } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching course:', slug);
        console.log('Fetching lesson:', lessonId);
        
        // Fetch course data
        const courseResponse = await fetch(`/api/courses/${slug}`);
        console.log('Course response status:', courseResponse.status);
        if (!courseResponse.ok) {
          throw new Error(`Course fetch failed: ${courseResponse.status}`);
        }
        const courseData = await courseResponse.json();
        console.log('Course data:', courseData);
        setCourse(courseData);

        // Fetch lesson data
        const lessonResponse = await fetch(`/api/lessons/${lessonId}`);
        console.log('Lesson response status:', lessonResponse.status);
        if (!lessonResponse.ok) {
          throw new Error(`Lesson fetch failed: ${lessonResponse.status}`);
        }
        const lessonData = await lessonResponse.json();
        console.log('Lesson data:', lessonData);
        setLesson(lessonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug && lessonId) {
      fetchData();
    }
  }, [slug, lessonId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {!course ? 'Course Not Found' : 'Lesson Not Found'}
          </h1>
        </div>
      </div>
    );
  }

  const handleLessonComplete = () => {
    // For demo purposes, just log
    console.log('Lesson completed!');
  };

  const handleProgress = (progress: number) => {
    // For demo purposes, just log
    console.log('Progress:', progress);
  };

  // Check if this is a Python course lesson
  const isPythonCourse = course?.slug === 'python-pou-komanse-yo';
  const pythonWeekNumber = isPythonCourse ? lesson?.order : null;
  const isPythonCardLesson = isPythonCourse && pythonWeekNumber && pythonWeekNumber <= 15;

  // Check if this is an HTML/CSS course lesson
  const isHtmlCssCourse = course?.slug === 'html-css-pou-komanse-yo';
  const htmlCssWeekNumber = isHtmlCssCourse ? lesson?.order : null;
  const isHtmlCssLesson = isHtmlCssCourse && htmlCssWeekNumber && htmlCssWeekNumber <= 15;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a 
                href={`/${locale}/courses/${slug}`}
                className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {locale === 'ht' ? 'Retounen nan Kou' : 'Retour au Cours'}
              </a>
              <span className="text-gray-400">•</span>
              <h1 className="text-xl font-semibold text-gray-900">
                {locale === 'ht' ? course.titleHt : course.titleFr}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Lesson Navigation */}
              <div className="flex items-center gap-2">
                {lesson && lesson.order > 1 && (
                  <a
                    href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order - 1)?.id}`}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                  >
                    {locale === 'ht' ? 'Leson Anvan' : 'Leçon Précédente'}
                  </a>
                )}
                
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">
                  {locale === 'ht' ? 'Leson' : 'Leçon'} {lesson?.order || '...'}
                </span>
                
                {lesson && lesson.order < course.lessons.length && (
                  <a
                    href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order + 1)?.id}`}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                  >
                    {locale === 'ht' ? 'Leson Pwochen' : 'Leçon Suivante'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPythonCardLesson ? (
          // Use card-based lesson player for Python lessons (Weeks 1-2)
          <div className="space-y-8">
            <PythonCardLessonPlayer 
              weekNumber={pythonWeekNumber!}
              onComplete={handleLessonComplete}
              onProgress={handleProgress}
            />
            
            <PythonMiniProject 
              weekNumber={pythonWeekNumber!}
              onComplete={handleLessonComplete}
            />
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {lesson && lesson.order > 1 && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order - 1)?.id}`}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2"
                >
                  ← {locale === 'ht' ? 'Leson Anvan' : 'Leçon Précédente'}
                </a>
              )}
              
              {lesson && lesson.order < course.lessons.length && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order + 1)?.id}`}
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2 ml-auto"
                >
                  {locale === 'ht' ? 'Leson Pwochen' : 'Leçon Suivante'} →
                </a>
              )}
            </div>
          </div>
        ) : isHtmlCssLesson ? (
          // Use HTML/CSS card lessons + progressive project editor
          <div className="space-y-8">
            {/* Card-based Learning Content - Skip for Week 8 (Midterm Project Week) */}
            {htmlCssWeekNumber !== 8 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  📚 {locale === 'ht' ? 'Materyèl Leson' : 'Matériel de Leçon'}
                </h2>
                <HtmlCssCardLessonPlayer 
                  weekNumber={htmlCssWeekNumber!}
                  onComplete={handleLessonComplete}
                  onProgress={handleProgress}
                />
              </div>
            )}

            {/* Progressive Project Editor */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                🎨 {htmlCssWeekNumber === 8 ? 
                  (locale === 'ht' ? 'Pwojè Midterm' : 'Projet Midterm') : 
                  (locale === 'ht' ? 'Pwojè Pwogresif' : 'Projet Progressif')
                }
              </h2>
              <HtmlCssLessonPlayer 
                lessonOrder={htmlCssWeekNumber!}
                locale={locale}
              />
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {lesson && lesson.order > 1 && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order - 1)?.id}`}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2"
                >
                  ← {locale === 'ht' ? 'Leson Anvan' : 'Leçon Précédente'}
                </a>
              )}
              
              {lesson && lesson.order < course.lessons.length && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order + 1)?.id}`}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 ml-auto"
                >
                  {locale === 'ht' ? 'Leson Pwochen' : 'Leçon Suivante'} →
                </a>
              )}
            </div>
          </div>
        ) : (
          // Default lesson display for other lessons
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {lesson ? (locale === 'ht' ? lesson.titleHt : lesson.titleFr) : 'Loading...'}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {lesson && (locale === 'ht' ? lesson.contentHt : lesson.contentFr || lesson.contentHt) ? (
                <div className="lesson-content whitespace-pre-wrap">
                  {(locale === 'ht' ? lesson.contentHt : lesson.contentFr || lesson.contentHt).substring(0, 500)}...
                </div>
              ) : (
                <div className="text-gray-500">Loading content...</div>
              )}
            </div>
            
            <div className="mt-8 flex justify-between">
              {lesson && lesson.order > 1 && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order - 1)?.id}`}
                  className="btn-outline"
                >
                  ← {locale === 'ht' ? 'Leson Anvan' : 'Leçon Précédente'}
                </a>
              )}
              
              {lesson && lesson.order < course.lessons.length && (
                <a
                  href={`/${locale}/courses/${slug}/lesson/${course.lessons.find(l => l.order === lesson.order + 1)?.id}`}
                  className="btn-primary ml-auto"
                >
                  {locale === 'ht' ? 'Leson Pwochen' : 'Leçon Suivante'} →
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}