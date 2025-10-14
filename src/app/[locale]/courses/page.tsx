'use client';
import { useState, useEffect } from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { useTranslations, useLocale } from '../../../components/LocaleProvider';

interface Course {
  id: string;
  slug: string;
  titleHt: string;
  titleFr: string;
  descriptionHt: string;
  descriptionFr: string;
  category: string;
  level: string;
  duration: number; // in minutes
  price?: number;
  currency: string;
  thumbnail?: string;
  isPublished: boolean;
  _count: {
    enrollments: number;
    lessons: number;
  };
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data.courses || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { key: 'all', labelHt: 'Tout', labelFr: 'Tous' },
    { key: 'languages', labelHt: 'Lang', labelFr: 'Langues' },
    { key: 'programming', labelHt: 'Pwogramasyon', labelFr: 'Programmation' },
    { key: 'marketing', labelHt: 'Maketing', labelFr: 'Marketing' },
    { key: 'business', labelHt: 'Biznis', labelFr: 'Business' },
    { key: 'health', labelHt: 'Sante', labelFr: 'Santé' },
  ];

  const levels = [
    { key: 'all', labelHt: 'Tout nivo', labelFr: 'Tous niveaux' },
    { key: 'beginner', labelHt: 'Kòmanse', labelFr: 'Débutant' },
    { key: 'intermediate', labelHt: 'Entèmedyè', labelFr: 'Intermédiaire' },
    { key: 'advanced', labelHt: 'Avanse', labelFr: 'Avancé' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch = searchTerm === '' || 
      course.titleHt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.titleFr && course.titleFr.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getCourseTitle = (course: Course) => {
    return locale === 'ht' ? course.titleHt : (course.titleFr || course.titleHt);
  };

  const getCourseDescription = (course: Course) => {
    const desc = locale === 'ht' ? course.descriptionHt : (course.descriptionFr || course.descriptionHt);
    return desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
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
    const levelObj = levels.find(l => l.key === level);
    return levelObj ? (locale === 'ht' ? levelObj.labelHt : levelObj.labelFr) : level;
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
              {locale === 'ht' ? 'Ap chèche kou yo...' : 'Chargement des cours...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {locale === 'ht' ? 'Kou ak Fòmasyon' : 'Cours et Formations'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {locale === 'ht' 
              ? 'Aprann konpetans nouvo ki ka ede w jwenn travay ak avanse nan karyè w'
              : 'Apprenez de nouvelles compétences qui peuvent vous aider à trouver du travail et avancer dans votre carrière'
            }
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">{courses.length}+</div>
            <p className="text-gray-600 text-sm sm:text-base">
              {locale === 'ht' ? 'Kou Disponib' : 'Cours Disponibles'}
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-gray-600 text-sm sm:text-base">
              {locale === 'ht' ? 'Etidyan Aktif' : 'Étudiants Actifs'}
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent-600 mb-2">85%</div>
            <p className="text-gray-600 text-sm sm:text-base">
              {locale === 'ht' ? 'To Siksè' : 'Taux de Réussite'}
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder={locale === 'ht' ? 'Chèche kou yo...' : 'Rechercher des cours...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'ht' ? 'Kategori' : 'Catégorie'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                        selectedCategory === category.key
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {locale === 'ht' ? category.labelHt : category.labelFr}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'ht' ? 'Nivo' : 'Niveau'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map(level => (
                    <button
                      key={level.key}
                      onClick={() => setSelectedLevel(level.key)}
                      className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                        selectedLevel === level.key
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {locale === 'ht' ? level.labelHt : level.labelFr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-center sm:text-left">
            {locale === 'ht' 
              ? `${filteredCourses.length} kou yo jwenn`
              : `${filteredCourses.length} cours trouvés`
            }
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map(course => (
            <div key={course.id} className="card overflow-hidden group">
              {/* Course Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-primary-400 via-purple-500 to-accent-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-80">
                    {getCategoryIcon(course.category)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-semibold rounded-full">
                    {getLevelLabel(course.level)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {formatPrice(course.price, course.currency)}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  <a href={`/${locale}/courses/${course.slug}`}>
                    {getCourseTitle(course)}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {getCourseDescription(course)}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{formatDuration(course.duration)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{course._count.lessons} {locale === 'ht' ? 'leson' : 'leçons'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course._count.enrollments} {locale === 'ht' ? 'etidyan' : 'étudiants'}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`/${locale}/courses/${course.slug}`}
                    className="flex-1 btn-primary text-center text-sm py-3"
                  >
                    {locale === 'ht' ? 'Wè Detay' : 'Voir Détails'}
                  </a>
                  <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'ht' ? 'Pa gen kou ki jwenn' : 'Aucun cours trouvé'}
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'ht' 
                ? 'Eseye chanje filtre ou yo oswa rechèche ak mo kle diferan'
                : 'Essayez de modifier vos filtres ou de rechercher avec des mots-clés différents'
              }
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSearchTerm('');
              }}
              className="btn-primary"
            >
              {locale === 'ht' ? 'Efase Filtre yo' : 'Effacer les Filtres'}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="card p-8 text-center bg-gradient-to-r from-primary-50 to-purple-50 border-primary-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {locale === 'ht' ? 'Kòmanse Aprann Jodi a!' : 'Commencez à Apprendre Aujourd\'hui !'}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {locale === 'ht'
              ? 'Enskri w kounye a pou aksè nan tout kou yo ak kòmanse devlope kapasite w yo'
              : 'Inscrivez-vous maintenant pour accéder à tous les cours et commencer à développer vos compétences'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`/${locale}/auth/signup`} className="btn-primary text-lg px-8 py-4">
              {locale === 'ht' ? 'Enskri Gratis' : 'Inscription Gratuite'}
            </a>
            <a href={`/${locale}/auth/signin`} className="btn-outline text-lg px-8 py-4">
              {locale === 'ht' ? 'Konekte' : 'Se Connecter'}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}