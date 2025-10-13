'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from './LocaleProvider';

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
            🇭🇹 Platfòm nan pou jèn yo nan Ayiti / Pour les jeunes d'Haïti
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">{t('hero.title')}</span>
            <span className="block bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
              {locale === 'ht' ? 'Nan yon sèl kote' : 'En un seul endroit'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href={`/${locale}/courses`} 
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                📚 {t('hero.ctaLearn')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link 
              href={`/${locale}/hire`} 
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                🔍 {t('hero.ctaHire')}
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">{locale === 'ht' ? 'Kou disponib' : 'Cours disponibles'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">{locale === 'ht' ? 'Travayè ki enskri' : 'Prestataires inscrits'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">{locale === 'ht' ? 'Aksè nan platfòm nan' : 'Accès à la plateforme'}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}