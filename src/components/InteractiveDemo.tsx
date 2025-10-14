'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const locale = useLocale();

  const demoSteps = [
    {
      titleHt: '1. Enskri ak Konekte',
      titleFr: '1. Inscription et Connexion',
      descHt: 'Kreye kont ou rapidman ak kòmanse aprann',
      descFr: 'Créez votre compte rapidement et commencez à apprendre',
      screen: 'auth',
      duration: 3000
    },
    {
      titleHt: '2. Eksplore Kou yo',
      titleFr: '2. Explorer les Cours',
      descHt: 'Jwenn kou nan domèn ou enteresan nan yo',
      descFr: 'Trouvez des cours dans vos domaines d\'intérêt',
      screen: 'courses',
      duration: 4000
    },
    {
      titleHt: '3. Aprann ak Kominotè',
      titleFr: '3. Apprendre avec la Communauté',
      descHt: 'Patisipe nan fowòm ak pataje ekspèans ou',
      descFr: 'Participez aux forums et partagez vos expériences',
      screen: 'forum',
      duration: 4000
    },
    {
      titleHt: '4. Chèche Travay',
      titleFr: '4. Rechercher un Emploi',
      descHt: 'Jwenn opòtinite travay ki matche ak kapasite ou yo',
      descFr: 'Trouvez des opportunités d\'emploi qui correspondent à vos compétences',
      screen: 'jobs',
      duration: 4000
    },
    {
      titleHt: '5. Suivi Pwogrè W',
      titleFr: '5. Suivre vos Progrès',
      descHt: 'Wè pwogrè w ak jwenn sètifika yo',
      descFr: 'Suivez vos progrès et obtenez des certificats',
      screen: 'dashboard',
      duration: 3000
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < demoSteps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, demoSteps[currentStep]?.duration || 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentStep, demoSteps]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const renderScreen = (screen: string) => {
    const baseClasses = "w-full h-full rounded-lg transition-all duration-500";
    
    switch (screen) {
      case 'auth':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center`}>
            <div className="bg-white rounded-xl p-8 shadow-2xl max-w-sm w-full mx-4">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">ATA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{locale === 'ht' ? 'Enskri' : 'Inscription'}</h3>
              </div>
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-10 bg-primary-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      
      case 'courses':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-50 to-white p-6`}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                  <div className="h-24 bg-gradient-to-br from-primary-200 to-purple-200 rounded-lg mb-3 flex items-center justify-center text-2xl">
                    {i === 1 && '🌍'}
                    {i === 2 && '💻'}
                    {i === 3 && '📈'}
                    {i === 4 && '🏥'}
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'forum':
        return (
          <div className={`${baseClasses} bg-gray-50 p-4`}>
            <div className="space-y-3 h-full overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-3/5"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'jobs':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-blue-50 to-indigo-50 p-4`}>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary-500">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded-full w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-1/3"></div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 rounded-full">
                      <div className="h-2 bg-green-400 rounded-full w-12"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-primary-100 rounded-full w-16"></div>
                    <div className="h-6 bg-purple-100 rounded-full w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-green-50 to-blue-50 p-4`}>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-lg font-bold text-primary-600 mb-1">
                    {i === 1 && '5'}
                    {i === 2 && '3'}
                    {i === 3 && '12'}
                    {i === 4 && '85%'}
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg p-3 flex items-center gap-3">
                  <div className="w-3 bg-primary-500 rounded-full h-8"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div className={`${baseClasses} bg-gray-200`}></div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Demo Screen */}
        <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative">
          {/* Browser Frame */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4 h-4 bg-gray-700 rounded text-center text-xs text-gray-400 flex items-center justify-center">
              ata-haiti.com
            </div>
          </div>

          {/* Screen Content */}
          <div className="absolute top-8 left-0 right-0 bottom-0">
            {renderScreen(demoSteps[currentStep]?.screen || 'auth')}
          </div>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button
                onClick={startDemo}
                className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group"
              >
                <svg className="w-8 h-8 text-primary-600 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          )}

          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-50 rounded-full p-2">
                <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-500 transition-all duration-300"
                    style={{ 
                      width: `${((currentStep + 1) / demoSteps.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Stop Button */}
          {isPlaying && (
            <button
              onClick={stopDemo}
              className="absolute top-12 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h12v12H6z"/>
              </svg>
            </button>
          )}
        </div>

        {/* Step Indicator */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {locale === 'ht' ? demoSteps[currentStep]?.titleHt : demoSteps[currentStep]?.titleFr}
          </h3>
          <p className="text-gray-600">
            {locale === 'ht' ? demoSteps[currentStep]?.descHt : demoSteps[currentStep]?.descFr}
          </p>
          
          {/* Step Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {demoSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStep 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                disabled={isPlaying}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}