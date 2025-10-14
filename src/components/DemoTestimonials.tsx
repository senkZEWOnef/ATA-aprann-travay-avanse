'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from './LocaleProvider';

export default function DemoTestimonials() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const testimonials = [
    {
      id: 1,
      nameHt: 'Marie Jean-Baptiste',
      nameFr: 'Marie Jean-Baptiste',
      roleHt: 'Entèprèt Pwofesyonèl',
      roleFr: 'Interprète Professionnelle',
      cityHt: 'Pòtoprens',
      cityFr: 'Port-au-Prince',
      testimonialHt: 'Depi mwen kòmanse ak ATA, mwen aprann Anglè ak Panyòl. Kounye a mwen gen travay kòm entèprèt ak konpani entènasyonal yo. Platfòm nan te ede m jwenn kapasite ak konfyans mwen bezwen an.',
      testimonialFr: 'Depuis que j\'ai commencé avec ATA, j\'ai appris l\'anglais et l\'espagnol. Maintenant j\'ai un emploi comme interprète avec des entreprises internationales. La plateforme m\'a aidé à acquérir les compétences et la confiance dont j\'avais besoin.',
      rating: 5,
      image: '/api/placeholder/64/64',
      course: 'Anglè pou Entèpretasyon',
      courseFr: 'Anglais pour Interprétation'
    },
    {
      id: 2,
      nameHt: 'Jean-Claude Pierre',
      nameFr: 'Jean-Claude Pierre',
      roleHt: 'Depo Pwogramè',
      roleFr: 'Développeur Junior',
      cityHt: 'Jakmèl',
      cityFr: 'Jacmel',
      testimonialHt: 'Mwen te kòmanse san ekspèans nan pwogramasyon. Ak kou yo sou ATA ak fowòm kominotè a, mwen aprann rapidman. Kounye a mwen travay nan yon konpani teknoloji ak mwen ap devlope aplikasyon pou Ayiti.',
      testimonialFr: 'J\'ai commencé sans expérience en programmation. Avec les cours sur ATA et le forum communautaire, j\'ai appris rapidement. Maintenant je travaille dans une entreprise technologique et je développe des applications pour Haïti.',
      rating: 5,
      image: '/api/placeholder/64/64',
      course: 'Pwogramasyon Debaz',
      courseFr: 'Programmation de Base'
    },
    {
      id: 3,
      nameHt: 'Carla Augustin',
      nameFr: 'Carla Augustin',
      roleHt: 'Jesyon Rezo Sosyal',
      roleFr: 'Gestionnaire Réseaux Sociaux',
      cityHt: 'Okap',
      cityFr: 'Cap-Haïtien',
      testimonialHt: 'ATA ban mwen chans pou mwen aprann jesyon biznis ak marketing dijital. Kou yo klè, ak yo gen anpil pratik. Kounye a mwen gen pwòp konpani mwen ak mwen ap ede lòt biznis yo grandi.',
      testimonialFr: 'ATA m\'a donné l\'opportunité d\'apprendre la gestion d\'entreprise et le marketing digital. Les cours sont clairs avec beaucoup de pratique. Maintenant j\'ai ma propre entreprise et j\'aide d\'autres business à grandir.',
      rating: 5,
      image: '/api/placeholder/64/64',
      course: 'Marketing Dijital',
      courseFr: 'Marketing Digital'
    },
    {
      id: 4,
      nameHt: 'Peterson Louis',
      nameFr: 'Peterson Louis',
      roleHt: 'Asistan Medikal',
      roleFr: 'Assistant Médical',
      cityHt: 'Gonayiv',
      cityFr: 'Gonaïves',
      testimonialHt: 'Nan fowòm yo, mwen jwenn anpil sipò ak konsèy ki gen valè. Lòt etidyan yo ak enstriktè yo toujou la pou reponn kesyon yo. Se yon kominotè ki vrèman ap ede youn ak lòt.',
      testimonialFr: 'Dans les forums, j\'ai trouvé beaucoup de support et de conseils précieux. Les autres étudiants et instructeurs sont toujours là pour répondre aux questions. C\'est vraiment une communauté d\'entraide.',
      rating: 5,
      image: '/api/placeholder/64/64',
      course: 'Pwemye Sèkous',
      courseFr: 'Premiers Secours'
    }
  ];

  const stats = [
    {
      numberHt: '500+',
      numberFr: '500+',
      labelHt: 'Etidyan Aktif',
      labelFr: 'Étudiants Actifs',
      icon: '👥'
    },
    {
      numberHt: '85%',
      numberFr: '85%',
      labelHt: 'To Siksè',
      labelFr: 'Taux de Réussite',
      icon: '🎯'
    },
    {
      numberHt: '200+',
      numberFr: '200+',
      labelHt: 'Travay ki Jwenn',
      labelFr: 'Emplois Trouvés',
      icon: '💼'
    },
    {
      numberHt: '50+',
      numberFr: '50+',
      labelHt: 'Kou Disponib',
      labelFr: 'Cours Disponibles',
      icon: '📚'
    }
  ];

  const platformFeatures = [
    {
      titleHt: 'Aprann Konpetans Nouvo',
      titleFr: 'Apprendre de Nouvelles Compétences',
      descHt: 'Kou pwofesyonèl nan langaj, pwogramasyon, ak biznis',
      descFr: 'Cours professionnels en langues, programmation et business',
      icon: '🎓'
    },
    {
      titleHt: 'Jwenn Travay',
      titleFr: 'Trouver du Travail',
      descHt: 'Platfòm travay ak konpani nan Ayiti ak lèt bò',
      descFr: 'Plateforme d\'emploi avec entreprises en Haïti et à l\'étranger',
      icon: '🔍'
    },
    {
      titleHt: 'Kominotè Aktif',
      titleFr: 'Communauté Active',
      descHt: 'Fowòm ak chat pou pataje ekspèans ak lòt etidyan yo',
      descFr: 'Forums et chat pour partager expériences avec d\'autres étudiants',
      icon: '💬'
    },
    {
      titleHt: 'Suivi ak Sètifika',
      titleFr: 'Suivi et Certificats',
      descHt: 'Suivi pwogrè w ak resevwa sètifika nan fen kou yo',
      descFr: 'Suivez vos progrès et recevez des certificats de fin de cours',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Demo Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            {locale === 'ht' ? '🎥 Gade kijan platfòm nan fonksyone' : '🎥 Découvrez comment fonctionne la plateforme'}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {locale === 'ht' 
              ? 'Dekouvri Tout Sa W Ka Fè' 
              : 'Découvrez Tout Ce Que Vous Pouvez Faire'
            }
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {locale === 'ht'
              ? 'Nan 45 segonn, wè kijan ATA ka ede w aprann, jwenn travay ak konekte ak kominotè a'
              : 'En 45 secondes, voyez comment ATA peut vous aider à apprendre, trouver du travail et vous connecter avec la communauté'
            }
          </p>

          {/* Video Demo */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Video Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-primary-900 via-purple-900 to-accent-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Platform Preview */}
                <div className="relative z-10 text-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-80">
                    {platformFeatures.map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="text-white text-sm font-semibold mb-1">
                          {locale === 'ht' ? feature.titleHt : feature.titleFr}
                        </h4>
                        <p className="text-white text-xs opacity-80">
                          {locale === 'ht' ? feature.descHt : feature.descFr}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setShowVideoModal(true)}
                    className="group inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
                  >
                    <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  
                  <div className="mt-4">
                    <p className="text-white text-lg font-semibold">
                      {locale === 'ht' ? 'Wè Demo 45s' : 'Voir la Démo 45s'}
                    </p>
                    <p className="text-white text-sm opacity-80">
                      {locale === 'ht' ? 'Aprann kijan platfòm nan fonksyone' : 'Apprenez comment fonctionne la plateforme'}
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ✓ {locale === 'ht' ? 'Gratis' : 'Gratuit'}
                </div>
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  🌍 {locale === 'ht' ? 'Kreyòl + Fransè' : 'Créole + Français'}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {locale === 'ht' ? stat.numberHt : stat.numberFr}
                </div>
                <p className="text-gray-600 font-medium">
                  {locale === 'ht' ? stat.labelHt : stat.labelFr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ht' 
              ? 'Sa Etidyan yo Di' 
              : 'Ce Que Disent Nos Étudiants'
            }
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'ht'
              ? 'Tande ki jan ATA te chanje lavi jèn yo nan Ayiti'
              : 'Découvrez comment ATA a transformé la vie des jeunes en Haïti'
            }
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{locale === 'ht' ? testimonial.testimonialHt : testimonial.testimonialFr}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {(locale === 'ht' ? testimonial.nameHt : testimonial.nameFr).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {locale === 'ht' ? testimonial.nameHt : testimonial.nameFr}
                    </h4>
                    <p className="text-primary-600 text-sm font-medium">
                      {locale === 'ht' ? testimonial.roleHt : testimonial.roleFr}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{locale === 'ht' ? testimonial.cityHt : testimonial.cityFr}</span>
                      <span>•</span>
                      <span>{locale === 'ht' ? testimonial.course : testimonial.courseFr}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card p-8 sm:p-12 bg-gradient-to-r from-primary-50 via-purple-50 to-accent-50 border-primary-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {locale === 'ht' 
                ? 'Pare Pou Kòmanse Vwayaj Ou?'
                : 'Prêt à Commencer Votre Parcours ?'
              }
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {locale === 'ht'
                ? 'Enskri w jodi a ak kòmanse devlope kapasite ki ka chanje lavi w'
                : 'Inscrivez-vous aujourd\'hui et commencez à développer des compétences qui transformeront votre vie'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`/${locale}/auth/signup`} className="btn-primary text-lg px-8 py-4">
                {locale === 'ht' ? 'Kòmanse Gratis' : 'Commencer Gratuitement'}
              </a>
              <a href={`/${locale}/courses`} className="btn-outline text-lg px-8 py-4">
                {locale === 'ht' ? 'Eksplore Kou yo' : 'Explorer les Cours'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              {/* Placeholder for video - you would replace this with actual video */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg">
                    {locale === 'ht' 
                      ? 'Video demo ap vini nan yon lòt vèsyon'
                      : 'Vidéo démo à venir dans une prochaine version'
                    }
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {locale === 'ht'
                      ? 'Pou kounye a, eksplore platfòm nan dirèkteman!'
                      : 'Pour l\'instant, explorez la plateforme directement !'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}