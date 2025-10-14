'use client';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import ComprehensiveLessonPlayer from '@/components/ComprehensiveLessonPlayer';
import { comprehensiveCourse } from '@/data/comprehensiveCourse';
import { useLocale } from '@/components/LocaleProvider';

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
  const [loading, setLoading] = useState(true);
  
  const { slug, lessonId } = params;

  useEffect(() => {
    // For demo purposes, create a mock course using comprehensive lessons
    const mockCourse = {
      id: '1',
      titleHt: 'Anglè pou Entèpretasyon',
      titleFr: 'Anglais pour Interprétation',
      slug: 'angle-pou-entepretasyon-1',
      lessons: comprehensiveCourse.map((lesson, index) => ({
        id: lesson.id,
        order: index + 1,
        titleHt: lesson.titleHt,
        titleFr: lesson.titleFr
      }))
    };
    
    setCourse(mockCourse);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        </div>
      </div>
    );
  }

  // Get lesson content from comprehensiveCourse data
  const lessonIndex = parseInt(lessonId as string) - 1;
  const lessonContent = comprehensiveCourse[lessonIndex];

  if (!lessonContent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
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
                {parseInt(lessonId as string) > 1 && (
                  <a
                    href={`/${locale}/courses/${slug}/lesson/${parseInt(lessonId as string) - 1}`}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                  >
                    {locale === 'ht' ? 'Leson Anvan' : 'Leçon Précédente'}
                  </a>
                )}
                
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">
                  {locale === 'ht' ? 'Leson' : 'Leçon'} {lessonId}
                </span>
                
                {parseInt(lessonId as string) < comprehensiveCourse.length && (
                  <a
                    href={`/${locale}/courses/${slug}/lesson/${parseInt(lessonId as string) + 1}`}
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

      {/* Lesson Player */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ComprehensiveLessonPlayer 
          lesson={lessonContent}
          onComplete={handleLessonComplete}
          onProgress={handleProgress}
        />
      </div>
    </div>
  );
}