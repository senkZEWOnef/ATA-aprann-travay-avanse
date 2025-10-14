'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import CertificateGenerator from './CertificateGenerator';

interface LessonProgress {
  id: string;
  lessonId: string;
  progressPercentage: number;
  completed: boolean;
  completedAt?: Date;
  timeSpent: number;
  quizScore?: number;
  lesson: {
    titleHt: string;
    titleFr: string;
    order: number;
    duration?: number;
  };
}

interface CourseProgress {
  id: string;
  progress: number;
  completedAt?: Date;
  course: {
    id: string;
    slug: string;
    titleHt: string;
    titleFr: string;
    lessons: {
      id: string;
      order: number;
      titleHt: string;
      titleFr: string;
      duration?: number;
    }[];
  };
  lessonProgress: LessonProgress[];
}

interface ProgressTrackerProps {
  userId: string;
  courseSlug?: string;
  showCertificate?: boolean;
  userName?: string;
}

export default function ProgressTracker({ 
  userId, 
  courseSlug, 
  showCertificate = true,
  userName = "Student"
}: ProgressTrackerProps) {
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseProgress | null>(null);
  const locale = useLocale();

  useEffect(() => {
    fetchProgress();
  }, [userId, courseSlug]);

  const fetchProgress = async () => {
    try {
      const url = courseSlug 
        ? `/api/progress/${courseSlug}` 
        : `/api/progress`;
      
      const response = await fetch(url);
      const data = await response.json();
      setCourseProgress(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateOverallProgress = (course: CourseProgress) => {
    if (course.lessonProgress.length === 0) return 0;
    
    const totalProgress = course.lessonProgress.reduce(
      (sum, lesson) => sum + lesson.progressPercentage, 0
    );
    
    return Math.round(totalProgress / course.lessonProgress.length);
  };

  const getTotalTimeSpent = (course: CourseProgress) => {
    return course.lessonProgress.reduce(
      (total, lesson) => total + lesson.timeSpent, 0
    );
  };

  const getCompletedLessons = (course: CourseProgress) => {
    return course.lessonProgress.filter(lesson => lesson.completed).length;
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}${locale === 'ht' ? 'è' : 'h'} ${minutes}min`;
    }
    return `${minutes}min`;
  };

  const generateCertificate = (course: CourseProgress) => {
    setSelectedCourse(course);
    setShowCertificateModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {courseProgress.map((course) => {
        const overallProgress = calculateOverallProgress(course);
        const completedLessons = getCompletedLessons(course);
        const totalLessons = course.course.lessons.length;
        const timeSpent = getTotalTimeSpent(course);
        const isCompleted = overallProgress === 100 && completedLessons === totalLessons;

        return (
          <div key={course.id} className="card p-6">
            {/* Course Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'ht' ? course.course.titleHt : course.course.titleFr}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>
                    {completedLessons} / {totalLessons} {locale === 'ht' ? 'leson konplè' : 'leçons terminées'}
                  </span>
                  <span>•</span>
                  <span>
                    {formatTime(timeSpent)} {locale === 'ht' ? 'tan pase' : 'temps passé'}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {overallProgress}%
                </div>
                {isCompleted && showCertificate && (
                  <button
                    onClick={() => generateCertificate(course)}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {locale === 'ht' ? 'Sètifika' : 'Certificat'}
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {locale === 'ht' ? 'Pwogrè Global' : 'Progrès Global'}
                </span>
                <span className="text-sm text-gray-500">{overallProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {completedLessons}
                </div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Leson Fini' : 'Leçons Terminées'}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {formatTime(timeSpent)}
                </div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Tan Etid' : 'Temps d\'Étude'}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {course.lessonProgress.filter(l => l.quizScore && l.quizScore >= 80).length}
                </div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Quiz Reyisi' : 'Quiz Réussis'}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {Math.round((completedLessons / totalLessons) * 100)}%
                </div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Konpletasyon' : 'Complétion'}
                </div>
              </div>
            </div>

            {/* Lesson Progress Details */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {locale === 'ht' ? 'Detay Leson yo' : 'Détails des Leçons'}
              </h4>
              <div className="space-y-3">
                {course.course.lessons
                  .sort((a, b) => a.order - b.order)
                  .map((lesson) => {
                    const progress = course.lessonProgress.find(p => p.lessonId === lesson.id);
                    const isCompleted = progress?.completed || false;
                    const progressPercent = progress?.progressPercentage || 0;
                    
                    return (
                      <div 
                        key={lesson.id}
                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-500 text-white' 
                            : progressPercent > 0 
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                        }`}>
                          {isCompleted ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            lesson.order
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">
                            {locale === 'ht' ? lesson.titleHt : lesson.titleFr}
                          </h5>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex-1">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full transition-all duration-300 ${
                                    isCompleted ? 'bg-green-500' : 'bg-primary-500'
                                  }`}
                                  style={{ width: `${progressPercent}%` }}
                                />
                              </div>
                            </div>
                            <span className="text-sm text-gray-500 min-w-[40px]">
                              {progressPercent}%
                            </span>
                          </div>
                        </div>
                        
                        {progress?.quizScore && (
                          <div className="text-right">
                            <div className={`text-sm font-semibold ${
                              progress.quizScore >= 80 ? 'text-green-600' : 'text-orange-600'
                            }`}>
                              Quiz: {progress.quizScore}%
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Completion Badge */}
            {isCompleted && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-800">
                      {locale === 'ht' ? 'Felisitasyon! Kou Konplè!' : 'Félicitations! Cours Terminé!'}
                    </h5>
                    <p className="text-green-600">
                      {course.completedAt && (
                        locale === 'ht' 
                          ? `Fini nan ${new Date(course.completedAt).toLocaleDateString('ht-HT')}`
                          : `Terminé le ${new Date(course.completedAt).toLocaleDateString('fr-FR')}`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Certificate Modal */}
      {showCertificateModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {locale === 'ht' ? 'Sètifika Konpetans Ou' : 'Votre Certificat de Compétence'}
                </h3>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <CertificateGenerator
                studentName={userName}
                courseName={selectedCourse.course.titleHt}
                courseNameFr={selectedCourse.course.titleFr}
                completionDate={selectedCourse.completedAt ? new Date(selectedCourse.completedAt) : new Date()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}