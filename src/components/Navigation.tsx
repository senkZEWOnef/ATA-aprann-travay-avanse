'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations, useLocale } from './LocaleProvider';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const t = useTranslations();
  const locale = useLocale();

  const switchLocale = () => {
    const newLocale = locale === 'ht' ? 'fr' : 'ht';
    window.location.href = `/${newLocale}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ATA</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Aprann Travay Avanse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${locale}`} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href={`/${locale}/hire`} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.hire')}
            </Link>
            <Link 
              href={`/${locale}/courses`} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Kou / Cours
            </Link>
            <Link 
              href={`/${locale}/jobs`} 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {locale === 'ht' ? 'Travay' : 'Emplois'}
            </Link>
            
            {/* Language Switcher */}
            <button
              onClick={switchLocale}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border border-gray-300 rounded-lg hover:border-primary-300 transition-colors"
            >
              {locale === 'ht' ? 'FR' : 'KR'}
            </button>
            
            {/* Authentication Buttons */}
            {status === 'loading' ? (
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            ) : session ? (
              <div className="flex items-center gap-3">
                <Link 
                  href={`/${locale}/dashboard`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {locale === 'ht' ? 'Tablo Bò' : 'Dashboard'}
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {session.user?.name?.charAt(0).toUpperCase() || session.user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="p-3 border-b border-gray-100">
                      <p className="font-medium text-gray-900">{session.user?.name || 'User'}</p>
                      <p className="text-sm text-gray-500">{session.user?.email}</p>
                    </div>
                    <div className="py-2">
                      <Link 
                        href={`/${locale}/profile`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {locale === 'ht' ? 'Pwofil mwen' : 'Mon profil'}
                      </Link>
                      <Link 
                        href={`/${locale}/settings`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {locale === 'ht' ? 'Paramèt yo' : 'Paramètres'}
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        {locale === 'ht' ? 'Soti' : 'Se déconnecter'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href={`/${locale}/auth/signin`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {locale === 'ht' ? 'Konekte' : 'Se connecter'}
                </Link>
                <Link 
                  href={`/${locale}/auth/signup`}
                  className="btn-primary"
                >
                  {locale === 'ht' ? 'Enskri' : 'S\'inscrire'}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link 
                href={`/${locale}`}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href={`/${locale}/hire`}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.hire')}
              </Link>
              <Link 
                href={`/${locale}/courses`}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kou / Cours
              </Link>
              <Link 
                href={`/${locale}/jobs`}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {locale === 'ht' ? 'Travay' : 'Emplois'}
              </Link>
              <button
                onClick={() => { switchLocale(); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                {locale === 'ht' ? 'Français' : 'Kreyòl'}
              </button>

              {/* Mobile Authentication */}
              {session ? (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="px-3 py-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {session.user?.name?.charAt(0).toUpperCase() || session.user?.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{session.user?.name || 'User'}</p>
                        <p className="text-sm text-gray-500">{session.user?.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href={`/${locale}/dashboard`}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {locale === 'ht' ? 'Tablo Bò' : 'Dashboard'}
                  </Link>
                  <Link 
                    href={`/${locale}/profile`}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {locale === 'ht' ? 'Pwofil mwen' : 'Mon profil'}
                  </Link>
                  <button
                    onClick={() => { signOut(); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    {locale === 'ht' ? 'Soti' : 'Se déconnecter'}
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2 px-3">
                  <Link 
                    href={`/${locale}/auth/signin`}
                    className="block w-full text-center py-2 text-gray-700 hover:text-primary-600 font-medium border border-gray-300 rounded-lg hover:border-primary-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {locale === 'ht' ? 'Konekte' : 'Se connecter'}
                  </Link>
                  <Link 
                    href={`/${locale}/auth/signup`}
                    className="block w-full btn-primary text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {locale === 'ht' ? 'Enskri' : 'S\'inscrire'}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}