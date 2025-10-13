'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from './LocaleProvider';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            
            {/* Language Switcher */}
            <button
              onClick={switchLocale}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border border-gray-300 rounded-lg hover:border-primary-300 transition-colors"
            >
              {locale === 'ht' ? 'FR' : 'KR'}
            </button>
            
            {/* CTA Button */}
            <Link href={`/${locale}/get-started`} className="btn-primary">
              {t('hero.ctaLearn')}
            </Link>
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
              <button
                onClick={() => { switchLocale(); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                {locale === 'ht' ? 'Français' : 'Kreyòl'}
              </button>
              <Link 
                href={`/${locale}/get-started`}
                className="block mx-3 mt-4 btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('hero.ctaLearn')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}