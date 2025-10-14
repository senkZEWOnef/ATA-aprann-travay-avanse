'use client';
import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import { useTranslations, useLocale } from '../../../../components/LocaleProvider';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(locale === 'ht' ? 'Imèl oswa modpas la pa bon' : 'Email ou mot de passe incorrect');
      } else {
        router.push(`/${locale}/dashboard`);
      }
    } catch (error) {
      setError(locale === 'ht' ? 'Yon erè rive' : 'Une erreur s\'est produite');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ATA</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {locale === 'ht' ? 'Konekte' : 'Se connecter'}
              </h2>
              <p className="mt-2 text-gray-600">
                {locale === 'ht' 
                  ? 'Konekte nan kont ou pou aksè nan platfòm nan'
                  : 'Connectez-vous à votre compte pour accéder à la plateforme'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'ht' ? 'Imèl' : 'Email'}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder={locale === 'ht' ? 'Antre imèl ou' : 'Entrez votre email'}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'ht' ? 'Modpas' : 'Mot de passe'}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder={locale === 'ht' ? 'Antre modpas ou' : 'Entrez votre mot de passe'}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    {locale === 'ht' ? 'Sonje mwen' : 'Se souvenir de moi'}
                  </label>
                </div>

                <Link
                  href={`/${locale}/auth/forgot-password`}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  {locale === 'ht' ? 'Bliye modpas?' : 'Mot de passe oublié ?'}
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading 
                  ? (locale === 'ht' ? 'Ap konekte...' : 'Connexion...')
                  : (locale === 'ht' ? 'Konekte' : 'Se connecter')
                }
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {locale === 'ht' ? 'Pa gen kont?' : 'Pas de compte ?'}{' '}
                <Link
                  href={`/${locale}/auth/signup`}
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  {locale === 'ht' ? 'Kreye youn' : 'Créer un compte'}
                </Link>
              </p>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-accent-50 rounded-lg">
              <p className="text-sm text-accent-800 font-medium mb-2">
                {locale === 'ht' ? 'Pou test:' : 'Pour tester :'}
              </p>
              <p className="text-xs text-accent-700">
                Email: demo@ata.ht<br />
                {locale === 'ht' ? 'Modpas' : 'Mot de passe'}: password123
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}