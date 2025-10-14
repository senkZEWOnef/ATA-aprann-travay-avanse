'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navigation from '../../../../../components/Navigation';
import Footer from '../../../../../components/Footer';
import { useTranslations, useLocale } from '../../../../../components/LocaleProvider';

interface Author {
  id: string;
  name?: string;
  email: string;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  isSticky: boolean;
  isLocked: boolean;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  _count: {
    comments: number;
  };
}

interface Course {
  id: string;
  slug: string;
  titleHt: string;
  titleFr: string;
}

export default function CourseForumPage() {
  const params = useParams();
  const { data: session } = useSession();
  const [course, setCourse] = useState<Course | null>(null);
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetchCourse();
    fetchForumPosts();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${params.slug}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  };

  const fetchForumPosts = async () => {
    try {
      const response = await fetch(`/api/courses/${params.slug}/forum`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching forum posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/courses/${params.slug}/forum`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPostTitle,
          content: newPostContent,
        }),
      });

      if (response.ok) {
        setNewPostTitle('');
        setNewPostContent('');
        setShowCreatePost(false);
        fetchForumPosts(); // Refresh posts
      }
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCourseTitle = (course: Course) => {
    return locale === 'ht' ? course.titleHt : (course.titleFr || course.titleHt);
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return locale === 'ht' ? 'Kèk minit de sa' : 'Il y a quelques minutes';
    } else if (diffInHours < 24) {
      return locale === 'ht' ? `${diffInHours} è de sa` : `Il y a ${diffInHours} heures`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return locale === 'ht' ? `${diffInDays} jou de sa` : `Il y a ${diffInDays} jours`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              {locale === 'ht' ? 'Ap chèche fowòm nan...' : 'Chargement du forum...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href={`/${locale}/courses`} className="hover:text-primary-600">
              {locale === 'ht' ? 'Kou yo' : 'Cours'}
            </a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <a href={`/${locale}/courses/${params.slug}`} className="hover:text-primary-600">
              {course ? getCourseTitle(course) : 'Course'}
            </a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary-600 font-medium">
              {locale === 'ht' ? 'Fowòm' : 'Forum'}
            </span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {locale === 'ht' ? 'Fowòm Kou a' : 'Forum du Cours'}
              </h1>
              <p className="text-lg text-gray-600">
                {locale === 'ht' 
                  ? 'Diskite ak lòt etidyan yo, pataje ekspèans ou ak poze kesyon'
                  : 'Discutez avec d\'autres étudiants, partagez vos expériences et posez des questions'
                }
              </p>
            </div>
            
            {session && (
              <button
                onClick={() => setShowCreatePost(true)}
                className="btn-primary whitespace-nowrap"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {locale === 'ht' ? 'Nouvo Diskisyon' : 'Nouvelle Discussion'}
              </button>
            )}
          </div>
        </div>

        {/* Forum Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">{posts.length}</div>
            <p className="text-gray-600 text-sm">
              {locale === 'ht' ? 'Diskisyon' : 'Discussions'}
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {posts.reduce((sum, post) => sum + post._count.comments, 0)}
            </div>
            <p className="text-gray-600 text-sm">
              {locale === 'ht' ? 'Kòmantè' : 'Commentaires'}
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-accent-600 mb-1">
              {posts.reduce((sum, post) => sum + post.viewCount, 0)}
            </div>
            <p className="text-gray-600 text-sm">
              {locale === 'ht' ? 'Konsèltasyon' : 'Vues'}
            </p>
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {post.isSticky && (
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                          {locale === 'ht' ? 'Kole' : 'Épinglé'}
                        </span>
                      )}
                      {post.isLocked && (
                        <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          {locale === 'ht' ? 'Fèmen' : 'Verrouillé'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 cursor-pointer">
                      <a href={`/${locale}/courses/${params.slug}/forum/${post.id}`}>
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.content.length > 200 ? post.content.substring(0, 200) + '...' : post.content}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {post.author.name?.charAt(0).toUpperCase() || post.author.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span>{post.author.name || post.author.email}</span>
                      </div>
                      <span>•</span>
                      <span>{formatTimeAgo(post.createdAt)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post._count.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{post.viewCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{post.likeCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="card p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'ht' ? 'Pa gen diskisyon poko' : 'Aucune discussion pour l\'instant'}
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'ht' 
                ? 'Kòmanse premye diskisyon an ak pataje ekspèans ou sou kou a'
                : 'Lancez la première discussion en partageant vos expériences sur le cours'
              }
            </p>
            {session && (
              <button
                onClick={() => setShowCreatePost(true)}
                className="btn-primary"
              >
                {locale === 'ht' ? 'Kòmanse Diskisyon' : 'Commencer une Discussion'}
              </button>
            )}
          </div>
        )}

        {!session && (
          <div className="card p-8 text-center bg-primary-50 border-primary-200 mt-8">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              {locale === 'ht' ? 'Patisipe nan Diskisyon yo' : 'Participez aux Discussions'}
            </h3>
            <p className="text-primary-800 mb-6">
              {locale === 'ht'
                ? 'Konekte w pou w ka kominik ak lòt etidyan yo ak pataje ekspèans ou'
                : 'Connectez-vous pour communiquer avec d\'autres étudiants et partager vos expériences'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`/${locale}/auth/signin`} className="btn-primary">
                {locale === 'ht' ? 'Konekte' : 'Se Connecter'}
              </a>
              <a href={`/${locale}/auth/signup`} className="btn-outline">
                {locale === 'ht' ? 'Enskri' : 'S\'inscrire'}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {locale === 'ht' ? 'Nouvo Diskisyon' : 'Nouvelle Discussion'}
                </h3>
                <button
                  onClick={() => setShowCreatePost(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'ht' ? 'Tit Diskisyon an' : 'Titre de la Discussion'}
                  </label>
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={locale === 'ht' ? 'Antre tit la...' : 'Entrez le titre...'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'ht' ? 'Mesaj ou' : 'Votre Message'}
                  </label>
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={locale === 'ht' ? 'Pataje ide w yo, ekspèans ou oswa poze kesyon...' : 'Partagez vos idées, expériences ou posez une question...'}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreatePost(false)}
                    className="flex-1 btn-secondary"
                    disabled={isSubmitting}
                  >
                    {locale === 'ht' ? 'Anile' : 'Annuler'}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (locale === 'ht' ? 'Ap poste...' : 'Publication...')
                      : (locale === 'ht' ? 'Poste Diskisyon' : 'Publier la Discussion')
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}