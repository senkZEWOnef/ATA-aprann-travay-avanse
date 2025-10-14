'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { LessonContent } from '@/data/courseContent';
import { GreetingAnimation, VocabularyPractice, PronunciationPractice, InteractiveQuiz } from './CanvasAnimations';
import { useAudio } from '@/hooks/useAudio';

interface LessonPlayerProps {
  lesson: LessonContent;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

interface AnimationScene {
  id: string;
  type: 'character' | 'dialogue' | 'highlight' | 'transition';
  duration: number;
  content: {
    speaker?: string;
    text?: string;
    emotion?: 'neutral' | 'happy' | 'professional' | 'confused';
    position?: 'left' | 'right' | 'center';
  };
}

export default function LessonPlayer({ lesson, onComplete, onProgress }: LessonPlayerProps) {
  const [currentSection, setCurrentSection] = useState<'intro' | 'objectives' | 'vocabulary' | 'roleplay' | 'pronunciation' | 'practice' | 'quiz' | 'homework'>('intro');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRoleplayScene, setCurrentRoleplayScene] = useState(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const locale = useLocale();
  const { playText, isPlaying: audioPlaying } = useAudio();

  const sections = ['intro', 'objectives', 'vocabulary', 'roleplay', 'pronunciation', 'practice', 'quiz', 'homework'];

  useEffect(() => {
    const currentIndex = sections.indexOf(currentSection);
    const progressPercent = ((currentIndex + 1) / sections.length) * 100;
    setProgress(progressPercent);
    onProgress?.(progressPercent);
  }, [currentSection, onProgress]);

  const playRoleplayScene = (sceneIndex: number) => {
    setIsPlaying(true);
    // Simulate scene playing
    setTimeout(() => {
      setIsPlaying(false);
      if (sceneIndex < lesson.roleplayScenes.length - 1) {
        setCurrentRoleplayScene(sceneIndex + 1);
      }
    }, 3000);
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const nextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1] as any);
    } else {
      onComplete?.();
    }
  };

  const prevSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1] as any);
    }
  };

  const renderCharacter = (character: string, emotion: string = 'neutral', position: string = 'center') => {
    const emotions = {
      neutral: '😊',
      happy: '😄',
      professional: '👔',
      confused: '🤔'
    };

    const positions = {
      left: 'justify-start',
      right: 'justify-end',
      center: 'justify-center'
    };

    return (
      <div className={`flex ${positions[position as keyof typeof positions]} mb-4`}>
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-3xl mb-2 shadow-lg animate-pulse">
            {emotions[emotion as keyof typeof emotions]}
          </div>
          <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm">
            {character}
          </span>
        </div>
      </div>
    );
  };

  const renderDialogueBox = (text: string, speaker: string) => {
    const handlePlayText = () => {
      const lang = locale === 'ht' ? 'fr-FR' : 'fr-FR'; // Use French for both locales as TTS
      playText(text, lang);
      console.log('Playing text:', text);
    };

    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-100 mb-4 relative">
        <div className="absolute -top-2 left-6 bg-primary-100 px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-primary-700">{speaker}</span>
        </div>
        <p className="text-lg text-gray-800 mt-2">{text}</p>
        <div className="absolute bottom-4 right-4">
          <button 
            onClick={handlePlayText}
            disabled={audioPlaying}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${
              audioPlaying ? 'bg-orange-500 animate-pulse' : 'bg-primary-500 hover:bg-primary-600'
            }`}
          >
            {audioPlaying ? (
              <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {locale === 'ht' ? lesson.titleHt : lesson.titleFr}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-80">
              {Math.round(progress)}% {locale === 'ht' ? 'Konplè' : 'Complété'}
            </span>
            <div className="w-24 bg-white bg-opacity-20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                currentSection === section
                  ? 'bg-white text-primary-600'
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
            >
              {index + 1}. {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 min-h-[500px]">
        {currentSection === 'intro' && (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">🎓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'ht' ? lesson.titleHt : lesson.titleFr}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {locale === 'ht' ? lesson.descriptionHt : lesson.descriptionFr}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⏱️</span>
                  <h3 className="font-semibold text-gray-900">
                    {locale === 'ht' ? 'Dire' : 'Durée'}
                  </h3>
                </div>
                <p className="text-gray-600">{lesson.duration}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="font-semibold text-gray-900">
                    {locale === 'ht' ? 'Nivo' : 'Niveau'}
                  </h3>
                </div>
                <p className="text-gray-600">{lesson.difficulty}</p>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'objectives' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              {locale === 'ht' ? 'Objektif yo' : 'Objectifs'}
            </h2>
            <div className="space-y-4">
              {(locale === 'ht' ? lesson.objectives.ht : lesson.objectives.fr).map((objective, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'vocabulary' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">📚</span>
              {locale === 'ht' ? 'Mo yo' : 'Vocabulaire'}
            </h2>
            
            {/* Interactive Vocabulary Practice */}
            <div className="mb-8">
              <VocabularyPractice />
            </div>
            
            {/* Traditional vocabulary cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {lesson.keyPhrases.map((phrase, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-200 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-primary-600 text-lg">
                      {locale === 'ht' ? phrase.english : phrase.french}
                    </h3>
                    <button 
                      onClick={() => {
                        const textToPlay = locale === 'ht' ? phrase.english : phrase.french;
                        playText(textToPlay, 'en-US');
                        console.log('Playing phrase:', textToPlay);
                      }}
                      disabled={audioPlaying}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        audioPlaying ? 'bg-orange-200 text-orange-600 animate-pulse' : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                      }`}
                    >
                      {audioPlaying ? (
                        <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {locale === 'ht' ? phrase.ht : phrase.fr}
                  </p>
                  {phrase.pronunciation && (
                    <p className="text-sm text-gray-500 italic">
                      "{phrase.pronunciation}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'roleplay' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎭</span>
              {locale === 'ht' ? 'Jwè Wòl' : 'Jeu de Rôle'}
            </h2>
            
            {/* Interactive Greeting Animation */}
            <div className="mb-8">
              <GreetingAnimation />
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-6">
              {currentRoleplayScene < lesson.roleplayScenes.length ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {locale === 'ht' ? 'Senaryo ak ' + lesson.roleplayScenes[currentRoleplayScene].characterA + ' ak ' + lesson.roleplayScenes[currentRoleplayScene].characterB : 'Scénario avec ' + lesson.roleplayScenes[currentRoleplayScene].characterA + ' et ' + lesson.roleplayScenes[currentRoleplayScene].characterB}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Sèn {currentRoleplayScene + 1} nan {lesson.roleplayScenes.length}</span>
                    </div>
                  </div>

                  {/* Characters */}
                  <div className="flex justify-around mb-8">
                    {renderCharacter('Student', 'happy', 'left')}
                    {renderCharacter('Professional', 'professional', 'right')}
                  </div>

                  {/* Dialogue */}
                  <div className="space-y-4">
                    {lesson.roleplayScenes[currentRoleplayScene].dialogue.map((line, index) => (
                      <div key={index}>
                        {renderDialogueBox(
                          locale === 'ht' ? line.ht : line.fr,
                          line.speaker === 'A' ? lesson.roleplayScenes[currentRoleplayScene].characterA : lesson.roleplayScenes[currentRoleplayScene].characterB
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Scene Controls */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={() => playRoleplayScene(currentRoleplayScene)}
                      disabled={isPlaying}
                      className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 disabled:opacity-50 flex items-center gap-2"
                    >
                      {isPlaying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {locale === 'ht' ? 'K ap jwe...' : 'En cours...'}
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          {locale === 'ht' ? 'Jwe Sèn nan' : 'Jouer la Scène'}
                        </>
                      )}
                    </button>
                    
                    {currentRoleplayScene < lesson.roleplayScenes.length - 1 && (
                      <button
                        onClick={() => setCurrentRoleplayScene(currentRoleplayScene + 1)}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                      >
                        {locale === 'ht' ? 'Sèn Pwochen' : 'Scène Suivante'}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {locale === 'ht' ? 'Ou fini ak tout sèn yo!' : 'Vous avez terminé toutes les scènes!'}
                  </h3>
                  <button
                    onClick={() => setCurrentRoleplayScene(0)}
                    className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600"
                  >
                    {locale === 'ht' ? 'Reprann depi kòmansman' : 'Recommencer'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {currentSection === 'pronunciation' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🗣️</span>
              {locale === 'ht' ? 'Pwononsyasyon' : 'Prononciation'}
            </h2>
            
            {/* Interactive Pronunciation Practice */}
            <div className="mb-8">
              <PronunciationPractice />
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'ht' ? 'Konsèy pou Pwononsyasyon' : 'Conseils de Prononciation'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>
                    {locale === 'ht' 
                      ? 'Konte ak repete mo yo yon pa yon'
                      : 'Écoutez et répétez les mots un par un'
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>
                    {locale === 'ht' 
                      ? 'Konsantre sou pozisyon bouch ak lang ou'
                      : 'Concentrez-vous sur la position de votre bouche et langue'
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>
                    {locale === 'ht' 
                      ? 'Pratike chak jou pou 10-15 minit'
                      : 'Pratiquez quotidiennement pendant 10-15 minutes'
                    }
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>
                    {locale === 'ht' 
                      ? 'Anrejistre tèt ou ak konpare ak egzanp yo'
                      : 'Enregistrez-vous et comparez avec les exemples'
                    }
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {currentSection === 'practice' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🏃</span>
              {locale === 'ht' ? 'Pratik' : 'Pratique'}
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {locale === 'ht' ? 'Egzèsis Pratik' : 'Exercices de Pratique'}
                </h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-gray-700 font-medium">
                    {locale === 'ht' 
                      ? 'Repete fraz yo ak pwononsye yo kòrèkteman'
                      : 'Répétez les phrases avec la bonne prononciation'
                    }
                  </p>
                </div>
                
                <div className="space-y-3">
                  {lesson.drillExercises.map((drill, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {drill.english}
                        </p>
                        <p className="text-purple-600">
                          {locale === 'ht' ? drill.ht : drill.fr}
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          const textToPlay = drill.english;
                          playText(textToPlay, 'en-US');
                          console.log('Playing drill:', textToPlay);
                        }}
                        disabled={audioPlaying}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          audioPlaying ? 'bg-orange-200 text-orange-600 animate-pulse' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                        }`}
                      >
                        {audioPlaying ? (
                          <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'quiz' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">❓</span>
              {locale === 'ht' ? 'Quiz Entèaktif' : 'Quiz Interactif'}
            </h2>
            
            {/* Interactive Canvas Quiz */}
            <InteractiveQuiz />
          </div>
        )}

        {currentSection === 'homework' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              {locale === 'ht' ? 'Devwa Kay' : 'Devoirs'}
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">
                      {locale === 'ht' ? lesson.homework.ht : lesson.homework.fr}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>💡</span>
                  {locale === 'ht' ? 'Konsèy' : 'Conseils'}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• {locale === 'ht' ? 'Pratike yo chak jou pou 15-20 minit' : 'Pratiquez quotidiennement pendant 15-20 minutes'}</li>
                  <li>• {locale === 'ht' ? 'Anrejistre tèt ou ak konte jan ou pwononse' : 'Enregistrez-vous et écoutez votre prononciation'}</li>
                  <li>• {locale === 'ht' ? 'Itilize fowòm nan pou poze kesyon' : 'Utilisez le forum pour poser des questions'}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <button
          onClick={prevSection}
          disabled={currentSection === 'intro'}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'ht' ? 'Anvan' : 'Précédent'}
        </button>

        <div className="flex items-center gap-2">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`w-3 h-3 rounded-full ${
                sections.indexOf(currentSection) >= index
                  ? 'bg-primary-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSection}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 flex items-center gap-2"
        >
          {currentSection === 'homework' 
            ? (locale === 'ht' ? 'Konplè Leson' : 'Terminer Leçon')
            : (locale === 'ht' ? 'Suivan' : 'Suivant')
          }
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}