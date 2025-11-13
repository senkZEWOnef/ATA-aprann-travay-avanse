'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import { useTranslations, useLocale } from '../../../../components/LocaleProvider';

interface Lesson {
  id: string;
  order: number;
  titleHt: string;
  titleFr: string;
  duration?: number;
  isPublished: boolean;
}

interface Course {
  id: string;
  slug: string;
  titleHt: string;
  titleFr: string;
  descriptionHt: string;
  descriptionFr: string;
  category: string;
  level: string;
  duration: number;
  price?: number;
  currency: string;
  thumbnail?: string;
  coverImage?: string;
  isPublished: boolean;
  lessons: Lesson[];
  _count: {
    enrollments: number;
  };
}

export default function CourseDetailPage() {
  const params = useParams();
  const { data: session } = useSession();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetchCourse();
    if (session) {
      checkEnrollment();
    } else {
      // TEMPORARILY SET AS ENROLLED FOR DEMO
      setIsEnrolled(true);
    }
  }, [session]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${params.slug}`);
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkEnrollment = async () => {
    // ALWAYS SET AS ENROLLED FOR TESTING
    setIsEnrolled(true);
    return;
    
    if (!session) return;
    try {
      const response = await fetch(`/api/courses/${params.slug}/enrollment`);
      const data = await response.json();
      setIsEnrolled(data.isEnrolled);
    } catch (error) {
      console.error('Error checking enrollment:', error);
    }
  };

  const handleEnroll = async () => {
    if (!session) {
      window.location.href = `/${locale}/auth/signin`;
      return;
    }

    try {
      const response = await fetch(`/api/courses/${params.slug}/enroll`, {
        method: 'POST',
      });
      
      if (response.ok) {
        setIsEnrolled(true);
        setShowEnrollModal(false);
        // Refresh course data to update enrollment count
        fetchCourse();
      }
    } catch (error) {
      console.error('Error enrolling:', error);
    }
  };

  const getCourseTitle = (course: Course) => {
    return locale === 'ht' ? course.titleHt : (course.titleFr || course.titleHt);
  };

  const getCourseDescription = (course: Course) => {
    return locale === 'ht' ? course.descriptionHt : (course.descriptionFr || course.descriptionFr);
  };

  const getLessonTitle = (lesson: Lesson) => {
    return locale === 'ht' ? lesson.titleHt : (lesson.titleFr || lesson.titleHt);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}${locale === 'ht' ? 'è' : 'h'} ${mins > 0 ? `${mins}min` : ''}`;
    }
    return `${mins}min`;
  };

  const formatPrice = (price?: number, currency: string = 'HTG') => {
    if (!price || price === 0) {
      return locale === 'ht' ? 'Gratis' : 'Gratuit';
    }
    return new Intl.NumberFormat('en-US').format(price) + ' ' + currency;
  };

  const getLevelLabel = (level: string) => {
    const levels: Record<string, { ht: string; fr: string }> = {
      beginner: { ht: 'Kòmanse', fr: 'Débutant' },
      intermediate: { ht: 'Entèmedyè', fr: 'Intermédiaire' },
      advanced: { ht: 'Avanse', fr: 'Avancé' },
    };
    return levels[level] ? (locale === 'ht' ? levels[level].ht : levels[level].fr) : level;
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      languages: '🌍',
      programming: '💻',
      marketing: '📈',
      business: '💼',
      health: '🏥',
      default: '📚'
    };
    return icons[category] || icons.default;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              {locale === 'ht' ? 'Ap chèche kou a...' : 'Chargement du cours...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'ht' ? 'Kou a pa jwenn' : 'Cours introuvable'}
            </h1>
            <p className="text-gray-600 mb-8">
              {locale === 'ht' 
                ? 'Kou a ka efase oswa li pa egziste'
                : 'Ce cours a peut-être été supprimé ou n\'existe pas'
              }
            </p>
            <Link href={`/${locale}/courses`} className="btn-primary">
              {locale === 'ht' ? 'Retounen nan kou yo' : 'Retour aux cours'}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="card overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Course Image */}
            <div className="lg:col-span-1 h-64 lg:h-auto relative">
              {(course.coverImage || course.thumbnail) ? (
                <>
                  <img 
                    src={course.coverImage || course.thumbnail} 
                    alt={getCourseTitle(course)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </>
              ) : (
                <>
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 via-purple-500 to-accent-500"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-80">
                      {getCategoryIcon(course.category)}
                    </span>
                  </div>
                </>
              )}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-sm font-semibold rounded-full">
                  {getLevelLabel(course.level)}
                </span>
              </div>
            </div>

            {/* Course Info */}
            <div className="lg:col-span-2 p-6 lg:p-8">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {getCourseTitle(course)}
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {getCourseDescription(course)}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{course._count.enrollments}</div>
                      <div className="text-sm text-gray-600">{locale === 'ht' ? 'Etidyan' : 'Étudiants'}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{course.lessons.length}</div>
                      <div className="text-sm text-gray-600">{locale === 'ht' ? 'Leson' : 'Leçons'}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent-600">{formatDuration(course.duration)}</div>
                      <div className="text-sm text-gray-600">{locale === 'ht' ? 'Dire' : 'Durée'}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{formatPrice(course.price, course.currency)}</div>
                      <div className="text-sm text-gray-600">{locale === 'ht' ? 'Pri' : 'Prix'}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {isEnrolled ? (
                    <Link 
                      href={`/${locale}/courses/${course.slug}/learn`}
                      className="flex-1 btn-primary text-center text-lg py-4"
                    >
                      {locale === 'ht' ? 'Kontinye Aprann' : 'Continuer l\'Apprentissage'}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowEnrollModal(true)}
                      className="flex-1 btn-primary text-lg py-4"
                    >
                      {locale === 'ht' ? 'Enskri nan Kou a' : 'S\'inscrire au Cours'}
                    </button>
                  )}
                  <button className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Lessons */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'ht' ? 'Konsa Kou a' : 'Contenu du Cours'}
              </h2>
              <div className="space-y-3">
                {course.lessons
                  .sort((a, b) => a.order - b.order)
                  .reduce((acc, lesson, index) => {
                    // Add the lesson
                    acc.push({ type: 'lesson', lesson, index });
                    
                    // Add midterm exam after lesson 7 for HTML/CSS course
                    if (lesson.order === 7 && course.slug === 'html-css-pou-komanse-yo') {
                      acc.push({ type: 'htmlcss-midterm-exam', lesson: null, index: -1 });
                    }
                    
                    // Add midterm exam after lesson 8 for Python course
                    if (lesson.order === 8 && course.slug === 'python-pou-komanse-yo') {
                      acc.push({ type: 'midterm-exam', lesson: null, index: -1 });
                    }
                    
                    // Add final exam after lesson 14 for Python course
                    if (lesson.order === 14 && course.slug === 'python-pou-komanse-yo') {
                      acc.push({ type: 'final-exam', lesson: null, index: -1 });
                    }
                    
                    // Add final exam after lesson 14 for HTML/CSS course
                    if (lesson.order === 14 && course.slug === 'html-css-pou-komanse-yo') {
                      acc.push({ type: 'htmlcss-final-exam', lesson: null, index: -1 });
                    }
                    
                    return acc;
                  }, [] as Array<{type: string, lesson: any, index: number}>)
                  .map(({ type, lesson, index }) => {
                    if (type === 'htmlcss-midterm-exam') {
                      if (isEnrolled) {
                        return (
                          <Link
                            key="htmlcss-midterm-exam"
                            href={`/${locale}/courses/${course.slug}/midterm-exam`}
                            className="flex items-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg transition-colors hover:border-blue-400 hover:bg-blue-100 cursor-pointer"
                          >
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                            🎓
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-blue-900">
                              {locale === 'ht' ? 'Egzamen Midterm HTML & CSS' : locale === 'fr' ? 'Examen de Mi-Session HTML & CSS' : 'HTML & CSS Midterm Exam'}
                            </h4>
                            <p className="text-sm text-blue-700 mt-1">
                              {locale === 'ht' ? '60 minit • 30 kesyon • 30 pwen' : 
                               locale === 'fr' ? '60 minutes • 30 questions • 30 points' :
                               '60 minutes • 30 questions • 30 points'}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {isEnrolled ? (
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                          </div>
                          </Link>
                        );
                      } else {
                        return (
                          <div
                            key="htmlcss-midterm-exam"
                            className="flex items-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg transition-colors hover:border-blue-400"
                          >
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                              🎓
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-blue-900">
                                {locale === 'ht' ? 'Egzamen Midterm HTML & CSS' : locale === 'fr' ? 'Examen de Mi-Session HTML & CSS' : 'HTML & CSS Midterm Exam'}
                              </h4>
                              <p className="text-sm text-blue-700 mt-1">
                                {locale === 'ht' ? '60 minit • 30 kesyon • 30 pwen' : 
                                 locale === 'fr' ? '60 minutes • 30 questions • 30 points' :
                                 '60 minutes • 30 questions • 30 points'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          </div>
                        );
                      }
                    }
                    
                    if (type === 'midterm-exam') {
                      if (isEnrolled) {
                        return (
                          <Link
                            key="midterm-exam"
                            href={`/${locale}/courses/${course.slug}/midterm-exam`}
                            className="flex items-center p-4 border-2 border-dashed border-orange-300 bg-orange-50 rounded-lg transition-colors hover:border-orange-400 hover:bg-orange-100 cursor-pointer"
                          >
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                            🎓
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-orange-900">
                              {locale === 'ht' ? 'Egzamen Midterm' : locale === 'fr' ? 'Examen de Mi-Session' : 'Midterm Exam'}
                            </h4>
                            <p className="text-sm text-orange-700 mt-1">
                              {locale === 'ht' ? '60 minit • 30 kesyon • 100 pwen' : 
                               locale === 'fr' ? '60 minutes • 30 questions • 100 points' :
                               '60 minutes • 30 questions • 100 points'}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {isEnrolled ? (
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                          </div>
                          </Link>
                        );
                      } else {
                        return (
                          <div
                            key="midterm-exam"
                            className="flex items-center p-4 border-2 border-dashed border-orange-300 bg-orange-50 rounded-lg transition-colors hover:border-orange-400"
                          >
                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                              🎓
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-orange-900">
                                {locale === 'ht' ? 'Egzamen Midterm' : locale === 'fr' ? 'Examen de Mi-Session' : 'Midterm Exam'}
                              </h4>
                              <p className="text-sm text-orange-700 mt-1">
                                {locale === 'ht' ? '60 minit • 30 kesyon • 100 pwen' : 
                                 locale === 'fr' ? '60 minutes • 30 questions • 100 points' :
                                 '60 minutes • 30 questions • 100 points'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          </div>
                        );
                      }
                    }
                    
                    if (type === 'final-exam') {
                      if (isEnrolled) {
                        return (
                          <Link
                            key="final-exam"
                            href={`/${locale}/courses/${course.slug}/final-exam`}
                            className="flex items-center p-4 border-2 border-dashed border-purple-300 bg-purple-50 rounded-lg transition-colors hover:border-purple-400 hover:bg-purple-100 cursor-pointer"
                          >
                          <div className="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-lg mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-800 text-lg">
                              🎓 {locale === 'ht' ? 'Egzamen Final' : locale === 'fr' ? 'Examen Final' : 'Final Exam'}
                            </h4>
                            <p className="text-sm text-purple-700 mt-1">
                              {locale === 'ht' ? '90 minit • 35 kesyon • 150 pwen' : 
                               locale === 'fr' ? '90 minutes • 35 questions • 150 points' :
                               '90 minutes • 35 questions • 150 points'}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {isEnrolled ? (
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                          </div>
                          </Link>
                        );
                      } else {
                        return (
                          <div
                            key="final-exam"
                            className="flex items-center p-4 border-2 border-dashed border-purple-300 bg-purple-50 rounded-lg transition-colors opacity-60"
                          >
                            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-lg mr-4">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-purple-800 text-lg">
                                🎓 {locale === 'ht' ? 'Egzamen Final' : locale === 'fr' ? 'Examen Final' : 'Final Exam'}
                              </h4>
                              <p className="text-sm text-purple-700 mt-1">
                                {locale === 'ht' ? '90 minit • 35 kesyon • 150 pwen' : 
                                 locale === 'fr' ? '90 minutes • 35 questions • 150 points' :
                                 '90 minutes • 35 questions • 150 points'}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          </div>
                        );
                      }
                    }
                    
                    if (type === 'htmlcss-final-exam') {
                      if (isEnrolled) {
                        return (
                          <Link
                            key="htmlcss-final-exam"
                            href={`/${locale}/courses/${course.slug}/final-exam`}
                            className="flex items-center p-4 border-2 border-dashed border-green-300 bg-green-50 rounded-lg transition-colors hover:border-green-400 hover:bg-green-100 cursor-pointer"
                          >
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                            🎓
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-green-900">
                              {locale === 'ht' ? 'Egzamen Final HTML & CSS' : locale === 'fr' ? 'Examen Final HTML & CSS' : 'HTML & CSS Final Exam'}
                            </h4>
                            <p className="text-sm text-green-700 mt-1">
                              {locale === 'ht' ? '90 minit • 30 kesyon • 30 pwen' : 
                               locale === 'fr' ? '90 minutes • 30 questions • 30 points' :
                               '90 minutes • 30 questions • 30 points'}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {isEnrolled ? (
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            ) : (
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                          </div>
                          </Link>
                        );
                      } else {
                        return (
                          <div
                            key="htmlcss-final-exam"
                            className="flex items-center p-4 border-2 border-dashed border-green-300 bg-green-50 rounded-lg transition-colors hover:border-green-400"
                          >
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                              🎓
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-green-900">
                                {locale === 'ht' ? 'Egzamen Final HTML & CSS' : locale === 'fr' ? 'Examen Final HTML & CSS' : 'HTML & CSS Final Exam'}
                              </h4>
                              <p className="text-sm text-green-700 mt-1">
                                {locale === 'ht' ? '90 minit • 30 kesyon • 30 pwen' : 
                                 locale === 'fr' ? '90 minutes • 30 questions • 30 points' :
                                 '90 minutes • 30 questions • 30 points'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          </div>
                        );
                      }
                    }
                    
                    // Regular lesson
                    if (isEnrolled) {
                      return (
                        <Link 
                          key={lesson.id}
                          href={`/${locale}/courses/${course.slug}/lesson/${lesson.id}`}
                          className="flex items-center p-4 border border-gray-200 rounded-lg transition-colors hover:border-primary-300 hover:bg-primary-50 cursor-pointer"
                        >
                        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                          {lesson.order}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {getLessonTitle(lesson)}
                          </h4>
                          {lesson.duration && (
                            <p className="text-sm text-gray-500 mt-1">
                              {formatDuration(lesson.duration)}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {isEnrolled ? (
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          ) : (
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          )}
                        </div>
                        </Link>
                      );
                    } else {
                      return (
                        <div 
                          key={lesson.id}
                          className="flex items-center p-4 border border-gray-200 rounded-lg transition-colors hover:border-gray-300"
                        >
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                            {lesson.order}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">
                              {getLessonTitle(lesson)}
                            </h4>
                            {lesson.duration && (
                              <p className="text-sm text-gray-500 mt-1">
                                {formatDuration(lesson.duration)}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>

            {/* Course Forum Preview */}
            {isEnrolled && (
              <div className="card p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'ht' ? 'Fowòm Kou a' : 'Forum du Cours'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {locale === 'ht'
                    ? 'Pataje ekspèans ou ak lòt etidyan yo ak mande kesyon'
                    : 'Partagez vos expériences avec d\'autres étudiants et posez vos questions'
                  }
                </p>
                <Link 
                  href={`/${locale}/courses/${course.slug}/forum`}
                  className="btn-secondary"
                >
                  {locale === 'ht' ? 'Ale nan Fowòm' : 'Aller au Forum'}
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Instructor */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Enstriktè' : 'Instructeur'}
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ATA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ATA Team</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'ht' ? 'Ekspè nan fòmasyon' : 'Expert en formation'}
                  </p>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Sa w ap jwenn' : 'Ce que vous obtiendrez'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {locale === 'ht' ? 'Aksè pou tout tan' : 'Accès à vie'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {locale === 'ht' ? 'Sètifika nan fen an' : 'Certificat de fin'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {locale === 'ht' ? 'Sipò kominotè' : 'Support communauté'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {locale === 'ht' ? 'Aksè sou mobil' : 'Accès mobile'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Enskri nan Kou a' : 'S\'inscrire au Cours'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'ht'
                  ? 'Ou vle enskri w nan kou sa a? Ou ap jwenn aksè nan tout leson yo ak fowòm nan.'
                  : 'Voulez-vous vous inscrire à ce cours ? Vous aurez accès à toutes les leçons et au forum.'
                }
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowEnrollModal(false)}
                  className="flex-1 btn-secondary"
                >
                  {locale === 'ht' ? 'Anile' : 'Annuler'}
                </button>
                <button 
                  onClick={handleEnroll}
                  className="flex-1 btn-primary"
                >
                  {locale === 'ht' ? 'Konfime' : 'Confirmer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}