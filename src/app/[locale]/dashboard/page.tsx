'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { useTranslations, useLocale } from '../../../components/LocaleProvider';

interface Course {
  id: string;
  slug: string;
  titleHt: string;
  titleFr: string;
  category: string;
  level: string;
  progress: number;
  completedAt?: string;
  enrolledAt: string;
}

interface JobApplication {
  id: string;
  status: string;
  appliedAt: string;
  job: {
    id: string;
    titleHt: string;
    titleFr: string;
    company: {
      name: string;
    };
  };
}

interface DashboardData {
  courses: Course[];
  jobApplications: JobApplication[];
  stats: {
    coursesEnrolled: number;
    coursesCompleted: number;
    jobsApplied: number;
    badgesEarned: number;
  };
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect(`/${locale}/auth/signin`);
    }
    if (status === 'authenticated') {
      fetchDashboardData();
    }
  }, [status, locale]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    {
      key: 'overview',
      labelHt: 'Apèsi',
      labelFr: 'Aperçu',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      key: 'courses',
      labelHt: 'Kou yo',
      labelFr: 'Mes Cours',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      key: 'jobs',
      labelHt: 'Travay yo',
      labelFr: 'Mes Candidatures',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
        </svg>
      ),
    },
    {
      key: 'forum',
      labelHt: 'Fowòm',
      labelFr: 'Forum',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
        </svg>
      ),
    },
    {
      key: 'profile',
      labelHt: 'Pwofil',
      labelFr: 'Profil',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  const getCourseTitle = (course: Course) => {
    return locale === 'ht' ? course.titleHt : (course.titleFr || course.titleHt);
  };

  const getJobTitle = (job: JobApplication['job']) => {
    return locale === 'ht' ? job.titleHt : (job.titleFr || job.titleHt);
  };

  const getStatusLabel = (status: string) => {
    const statusLabels: Record<string, { ht: string; fr: string }> = {
      pending: { ht: 'Ap Tann', fr: 'En Attente' },
      reviewing: { ht: 'Ap Revize', fr: 'En Révision' },
      shortlisted: { ht: 'Seleksyone', fr: 'Présélectionné' },
      rejected: { ht: 'Refize', fr: 'Rejeté' },
      hired: { ht: 'Aksepte', fr: 'Embauché' },
    };
    return statusLabels[status] ? (locale === 'ht' ? statusLabels[status].ht : statusLabels[status].fr) : status;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'text-yellow-600 bg-yellow-100',
      reviewing: 'text-blue-600 bg-blue-100',
      shortlisted: 'text-purple-600 bg-purple-100',
      rejected: 'text-red-600 bg-red-100',
      hired: 'text-green-600 bg-green-100',
    };
    return colors[status] || 'text-gray-600 bg-gray-100';
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              {locale === 'ht' ? 'Ap chèche done yo...' : 'Chargement des données...'}
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
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {locale === 'ht' ? 'Byenveni,' : 'Bienvenue,'} {session?.user?.name || 'User'}! 👋
          </h1>
          <p className="text-lg text-gray-600">
            {locale === 'ht' 
              ? 'Sa w te fè nan jounen an?'
              : 'Qu\'avez-vous fait aujourd\'hui ?'
            }
          </p>
        </div>

        {/* Stats Cards */}
        {dashboardData && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                {dashboardData.stats.coursesEnrolled}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {locale === 'ht' ? 'Kou Enskri' : 'Cours Inscrits'}
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                {dashboardData.stats.coursesCompleted}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {locale === 'ht' ? 'Kou Fini' : 'Cours Terminés'}
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                {dashboardData.stats.jobsApplied}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {locale === 'ht' ? 'Aplike Travay' : 'Candidatures'}
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-600 mb-2">
                {dashboardData.stats.badgesEarned}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {locale === 'ht' ? 'Badge Genyen' : 'Badges Gagnés'}
              </p>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="card mb-8 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-primary-500 text-primary-600 bg-primary-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">
                    {locale === 'ht' ? tab.labelHt : tab.labelFr}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && dashboardData && (
              <div className="space-y-8">
                {/* Recent Activity */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'ht' ? 'Aktivite Resan' : 'Activité Récente'}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {locale === 'ht' 
                            ? 'Ou enskri w nan yon nouvo kou'
                            : 'Vous vous êtes inscrit à un nouveau cours'
                          }
                        </p>
                        <p className="text-sm text-gray-600">
                          {locale === 'ht' ? 'Depi 2 jou' : 'Il y a 2 jours'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'ht' ? 'Aksyon Rapid' : 'Actions Rapides'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a
                      href={`/${locale}/courses`}
                      className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors group"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200">
                          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {locale === 'ht' ? 'Jwenn Kou Nouvo' : 'Découvrir Nouveaux Cours'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {locale === 'ht' ? 'Eksplore kou yo' : 'Explorer les cours'}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`/${locale}/jobs`}
                      className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {locale === 'ht' ? 'Chèche Travay' : 'Chercher Emploi'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {locale === 'ht' ? 'Jwenn opòtinite yo' : 'Trouver des opportunités'}
                        </p>
                      </div>
                    </a>

                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-accent-500 hover:bg-accent-50 transition-colors group">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-accent-100 rounded-lg flex items-center justify-center group-hover:bg-accent-200">
                          <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {locale === 'ht' ? 'Kominikasyon' : 'Messagerie'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {locale === 'ht' ? 'Kominotè ak lòt yo' : 'Communiquer avec les autres'}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && dashboardData && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {locale === 'ht' ? 'Kou Mwen yo' : 'Mes Cours'}
                  </h2>
                  <a href={`/${locale}/courses`} className="btn-primary">
                    {locale === 'ht' ? 'Jwenn Kou Nouvo' : 'Découvrir Plus'}
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dashboardData.courses.map((course) => (
                    <div key={course.id} className="card p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {getCourseTitle(course)}
                          </h3>
                          <p className="text-sm text-gray-600 capitalize">
                            {course.level} • {course.category}
                          </p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          course.completedAt ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {course.completedAt 
                            ? (locale === 'ht' ? 'Fini' : 'Terminé')
                            : (locale === 'ht' ? 'Ap kontinye' : 'En cours')
                          }
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{locale === 'ht' ? 'Pwogrè' : 'Progrès'}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={`/${locale}/courses/${course.slug}/learn`}
                          className="flex-1 btn-primary text-center text-sm py-2"
                        >
                          {locale === 'ht' ? 'Kontinye' : 'Continuer'}
                        </a>
                        <a
                          href={`/${locale}/courses/${course.slug}/forum`}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm"
                        >
                          {locale === 'ht' ? 'Fowòm' : 'Forum'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {dashboardData.courses.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {locale === 'ht' ? 'Pa gen kou poko' : 'Pas encore de cours'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {locale === 'ht' 
                        ? 'Kòmanse aprann kounye a ak kou premye ou'
                        : 'Commencez dès maintenant avec votre premier cours'
                      }
                    </p>
                    <a href={`/${locale}/courses`} className="btn-primary">
                      {locale === 'ht' ? 'Eksplore Kou yo' : 'Explorer les Cours'}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Jobs Tab */}
            {activeTab === 'jobs' && dashboardData && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {locale === 'ht' ? 'Aplike Travay Mwen yo' : 'Mes Candidatures'}
                  </h2>
                  <a href={`/${locale}/jobs`} className="btn-primary">
                    {locale === 'ht' ? 'Chèche Travay' : 'Chercher Emplois'}
                  </a>
                </div>

                <div className="space-y-4">
                  {dashboardData.jobApplications.map((application) => (
                    <div key={application.id} className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {getJobTitle(application.job)}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {application.job.company.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {locale === 'ht' ? 'Aplike nan' : 'Candidature le'} {new Date(application.appliedAt).toLocaleDateString(locale === 'ht' ? 'fr-HT' : 'fr-FR')}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {getStatusLabel(application.status)}
                          </span>
                          <a
                            href={`/${locale}/jobs/${application.job.id}`}
                            className="btn-secondary text-sm px-4 py-2"
                          >
                            {locale === 'ht' ? 'Wè' : 'Voir'}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {dashboardData.jobApplications.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl">💼</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {locale === 'ht' ? 'Pa gen aplike poko' : 'Pas encore de candidatures'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {locale === 'ht' 
                        ? 'Kòmanse chèche travay ki pi bon pou w'
                        : 'Commencez à chercher l\'emploi parfait pour vous'
                      }
                    </p>
                    <a href={`/${locale}/jobs`} className="btn-primary">
                      {locale === 'ht' ? 'Chèche Travay' : 'Chercher Emplois'}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Forum Tab */}
            {activeTab === 'forum' && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'ht' ? 'Fowòm nan ap vini!' : 'Le Forum arrive bientôt !'}
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {locale === 'ht'
                    ? 'Nou ap travay sou yon sistèm fowòm ki ka ede w kominik ak lòt etidyan yo, pataje ekspèans ou ak poze kesyon.'
                    : 'Nous travaillons sur un système de forum qui vous permettra de communiquer avec d\'autres étudiants, partager vos expériences et poser des questions.'
                  }
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-8 rounded-2xl max-w-2xl mx-auto">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {locale === 'ht' ? 'Sa w ap jwenn nan fowòm nan:' : 'Ce que vous trouverez dans le forum :'}
                  </h4>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {locale === 'ht' ? 'Diskisyon sou kou yo' : 'Discussions sur les cours'}
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {locale === 'ht' ? 'Pataj ekspèans travay' : 'Partage d\'expériences de travail'}
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {locale === 'ht' ? 'Sipò ant etidyan yo' : 'Entraide entre étudiants'}
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {locale === 'ht' ? 'Konsèy pou karyè' : 'Conseils de carrière'}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {locale === 'ht' ? 'Pwofil Mwen' : 'Mon Profil'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">
                        {session?.user?.name?.charAt(0).toUpperCase() || session?.user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{session?.user?.name || 'User'}</h3>
                      <p className="text-gray-600">{session?.user?.email}</p>
                      <button className="mt-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                        {locale === 'ht' ? 'Chanje foto' : 'Changer la photo'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'ht' ? 'Non' : 'Nom'}
                      </label>
                      <input
                        type="text"
                        defaultValue={session?.user?.name || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'ht' ? 'Imèl' : 'Email'}
                      </label>
                      <input
                        type="email"
                        defaultValue={session?.user?.email || ''}
                        disabled
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'ht' ? 'Bio' : 'Bio'}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder={locale === 'ht' ? 'Pale sou w...' : 'Parlez-vous de vous...'}
                    ></textarea>
                  </div>

                  <div className="flex gap-3">
                    <button className="btn-primary">
                      {locale === 'ht' ? 'Sove Chanjman' : 'Sauvegarder'}
                    </button>
                    <button className="btn-secondary">
                      {locale === 'ht' ? 'Anile' : 'Annuler'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}