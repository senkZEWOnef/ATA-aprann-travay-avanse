'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { pythonWeek1Lesson, type LessonCard } from '@/data/pythonWeek1Cards';
import { pythonWeek2Lesson } from '@/data/pythonWeek2Cards';
import { pythonWeek3Lesson } from '@/data/pythonWeek3Cards';
import { pythonWeek4Lesson } from '@/data/pythonWeek4Cards';
import { pythonWeek5Lesson } from '@/data/pythonWeek5Cards';
import { pythonWeek6Lesson } from '@/data/pythonWeek6Cards';
import { pythonWeek7Lesson } from '@/data/pythonWeek7Cards';
import { pythonWeek8Lesson } from '@/data/pythonWeek8Cards';
import { pythonWeek9Lesson } from '@/data/pythonWeek9Cards';
import { pythonWeek10Lesson } from '@/data/pythonWeek10Cards';
import { pythonWeek11Lesson } from '@/data/pythonWeek11Cards';
import { pythonWeek12Lesson } from '@/data/pythonWeek12Cards';
import { pythonWeek13Lesson } from '@/data/pythonWeek13Cards';
import { pythonWeek14Lesson } from '@/data/pythonWeek14Cards';
import { pythonWeek15Lesson } from '@/data/pythonWeek15Cards';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, CheckCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { ClipboardDocumentIcon, AcademicCapIcon, LightBulbIcon } from '@heroicons/react/24/solid';

interface PythonCardLessonPlayerProps {
  weekNumber: number;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export default function PythonCardLessonPlayer({ weekNumber, onComplete, onProgress }: PythonCardLessonPlayerProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<number, boolean>>({});
  const [isQuizMode, setIsQuizMode] = useState(false);
  const locale = useLocale();

  // Get lesson data based on week number
  const getLessonData = (week: number) => {
    switch (week) {
      case 1:
        return pythonWeek1Lesson;
      case 2:
        return pythonWeek2Lesson;
      case 3:
        return pythonWeek3Lesson;
      case 4:
        return pythonWeek4Lesson;
      case 5:
        return pythonWeek5Lesson;
      case 6:
        return pythonWeek6Lesson;
      case 7:
        return pythonWeek7Lesson;
      case 8:
        return pythonWeek8Lesson;
      case 9:
        return pythonWeek9Lesson;
      case 10:
        return pythonWeek10Lesson;
      case 11:
        return pythonWeek11Lesson;
      case 12:
        return pythonWeek12Lesson;
      case 13:
        return pythonWeek13Lesson;
      case 14:
        return pythonWeek14Lesson;
      case 15:
        return pythonWeek15Lesson;
      default:
        return pythonWeek1Lesson;
    }
  };

  const lessonData = getLessonData(weekNumber);
  const currentCard = lessonData?.cards?.[currentCardIndex];

  // Helper function to get quiz data consistently
  const getQuizData = () => {
    // First check for legacy quiz property (Week 7, 8)
    if (lessonData?.quiz) {
      if (Array.isArray(lessonData.quiz)) {
        return lessonData.quiz; // Week 1, 2, 3, 7, 8 format
      } else if (lessonData.quiz.questions) {
        return lessonData.quiz.questions; // Week 4, 5 format
      }
    }
    
    // For card-based lessons (Week 9+), extract quiz cards
    if (lessonData?.cards) {
      return lessonData.cards
        .filter((card: any) => card.quiz)
        .map((card: any) => card.quiz);
    }
    
    return [];
  };

  const quizData = getQuizData();

  useEffect(() => {
    if (lessonData?.totalCards) {
      const progress = (completedCards.size / lessonData.totalCards) * 100;
      onProgress?.(progress);
    }
  }, [completedCards, lessonData?.totalCards, onProgress]);

  const getLocalizedText = (textObj: { ht: string; fr: string; en: string } | undefined) => {
    if (!textObj) return '';
    if (locale === 'ht') return textObj.ht;
    if (locale === 'fr') return textObj.fr;
    return textObj.en;
  };

  const markCardCompleted = (cardIndex: number) => {
    setCompletedCards(prev => new Set([...prev, cardIndex]));
  };

  const nextCard = () => {
    markCardCompleted(currentCardIndex);
    if (currentCardIndex < (lessonData?.cards?.length || 0) - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setIsQuizMode(true);
    }
  };

  // Early return if no data is available
  if (!lessonData || !currentCard) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsQuizMode(false);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    setShowQuizResults(prev => ({
      ...prev,
      [questionIndex]: true
    }));
  };

  const nextQuizQuestion = () => {
    if (currentQuizIndex < (quizData.length || 0) - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      onComplete?.();
    }
  };

  const prevQuizQuestion = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    }
  };

  const getCardIcon = (type: LessonCard['type']) => {
    switch (type) {
      case 'intro':
        return <PlayIcon className="w-6 h-6" />;
      case 'concept':
        return <BookOpenIcon className="w-6 h-6" />;
      case 'code':
        return <ClipboardDocumentIcon className="w-6 h-6" />;
      case 'practice':
        return <AcademicCapIcon className="w-6 h-6" />;
      case 'tip':
        return <LightBulbIcon className="w-6 h-6" />;
      default:
        return <BookOpenIcon className="w-6 h-6" />;
    }
  };

  const getCardColor = (type: LessonCard['type']) => {
    switch (type) {
      case 'intro':
        return 'from-blue-500 to-purple-600';
      case 'concept':
        return 'from-green-500 to-blue-500';
      case 'code':
        return 'from-gray-700 to-gray-900';
      case 'practice':
        return 'from-orange-500 to-red-500';
      case 'tip':
        return 'from-yellow-400 to-orange-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  if (isQuizMode) {
    const currentQuestion = quizData[currentQuizIndex];
    const userAnswer = quizAnswers[currentQuizIndex];
    const showResult = showQuizResults[currentQuizIndex];

    // If no quiz data or question, show completion message
    if (!currentQuestion || quizData.length === 0) {
      return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'ht' ? 'Félicitasyon! Ou fini leson an!' : locale === 'fr' ? 'Félicitations! Vous avez terminé la leçon!' : 'Congratulations! You completed the lesson!'}
            </h2>
            <button
              onClick={onComplete}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              {locale === 'ht' ? 'Kontinye' : locale === 'fr' ? 'Continuer' : 'Continue'}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                🧠 {locale === 'ht' ? 'Quiz Semèn' : locale === 'fr' ? 'Quiz Semaine' : 'Week Quiz'} {lessonData.weekNumber}
              </h1>
              <p className="opacity-90 mt-1">
                {locale === 'ht' ? 'Teste konesans ou' : locale === 'fr' ? 'Testez vos connaissances' : 'Test your knowledge'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-80">
                {locale === 'ht' ? 'Kesyon' : locale === 'fr' ? 'Question' : 'Question'} {currentQuizIndex + 1} / {quizData.length || 0}
              </div>
              <div className="w-32 bg-white bg-opacity-20 rounded-full h-2 mt-1">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuizIndex + 1) / (quizData.length || 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="p-8">
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {getLocalizedText(currentQuestion.question)}
            </h2>
            
            <div className="space-y-3">
              {(() => {
                // Handle different option structures
                if (Array.isArray(currentQuestion.options)) {
                  // Week 1, 2, 3, 7, 8 format: [{ ht: '...', fr: '...', en: '...' }, ...]
                  return currentQuestion.options.map((optionObj: any, index: number) => {
                    const optionText = optionObj[locale] || optionObj.en || optionObj.ht;
                    return { text: optionText, index };
                  });
                } else {
                  // Week 4, 5 format: { ht: [...], fr: [...], en: [...] }
                  const optionArray = (currentQuestion.options as any)[locale] || (currentQuestion.options as any).en;
                  return optionArray ? optionArray.map((text: string, index: number) => ({ text, index })) : [];
                }
              })().map(({ text, index }) => {
                const isSelected = userAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showColors = showResult;
                
                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
                
                if (showColors) {
                  if (isCorrect) {
                    buttonClass += 'border-green-500 bg-green-50 text-green-800';
                  } else if (isSelected && !isCorrect) {
                    buttonClass += 'border-red-500 bg-red-50 text-red-800';
                  } else {
                    buttonClass += 'border-gray-200 bg-gray-50 text-gray-600';
                  }
                } else {
                  if (isSelected) {
                    buttonClass += 'border-blue-500 bg-blue-50 text-blue-800';
                  } else {
                    buttonClass += 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleQuizAnswer(currentQuizIndex, index)}
                    disabled={showResult}
                    className={buttonClass}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-3 text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{text}</span>
                      {showColors && isCorrect && (
                        <CheckCircleIcon className="w-6 h-6 ml-auto text-green-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  {locale === 'ht' ? 'Eksplikasyon:' : locale === 'fr' ? 'Explication:' : 'Explanation:'}
                </h3>
                <p className="text-blue-800">{getLocalizedText(currentQuestion.explanation)}</p>
              </div>
            )}
          </div>
        </div>

        {/* Quiz Navigation */}
        <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
          <button
            onClick={prevQuizQuestion}
            disabled={currentQuizIndex === 0}
            className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            {locale === 'ht' ? 'Anvan' : locale === 'fr' ? 'Précédent' : 'Previous'}
          </button>

          <div className="flex items-center gap-2">
            {quizData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index <= currentQuizIndex ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {showResult ? (
            <button
              onClick={nextQuizQuestion}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2"
            >
              {currentQuizIndex === (quizData.length || 1) - 1 
                ? (locale === 'ht' ? 'Fini' : locale === 'fr' ? 'Terminer' : 'Complete')
                : (locale === 'ht' ? 'Suivan' : locale === 'fr' ? 'Suivant' : 'Next')
              }
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          ) : (
            <div className="w-24"></div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getCardColor(currentCard.type)} text-white p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getCardIcon(currentCard.type)}
            <div>
              <h1 className="text-2xl font-bold">{getLocalizedText(lessonData.title)}</h1>
              <p className="opacity-90">{getLocalizedText(lessonData.description)}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80">
              {locale === 'ht' ? 'Kat' : locale === 'fr' ? 'Carte' : 'Card'} {currentCardIndex + 1} / {lessonData?.cards?.length || 0}
            </div>
            <div className="w-32 bg-white bg-opacity-20 rounded-full h-2 mt-1">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentCardIndex + 1) / (lessonData?.cards?.length || 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${getCardColor(currentCard.type)} text-white`}>
              {getCardIcon(currentCard.type)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {getLocalizedText(currentCard.title)}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  ⏱️ {(currentCard as any).estimatedTime || 5} {locale === 'ht' ? 'minit' : locale === 'fr' ? 'minutes' : 'minutes'}
                </span>
                <span className="flex items-center gap-1">
                  📊 {(currentCard as any).difficulty === 'easy' ? (locale === 'ht' ? 'Fasil' : locale === 'fr' ? 'Facile' : 'Easy') 
                      : (currentCard as any).difficulty === 'medium' ? (locale === 'ht' ? 'Mwayen' : locale === 'fr' ? 'Moyen' : 'Medium')
                      : (locale === 'ht' ? 'Difisil' : locale === 'fr' ? 'Difficile' : 'Hard')}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose max-w-none">
            <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-6">
              {getLocalizedText(currentCard.content)}
            </div>

            {/* Code Example - handle both Week 1 and Week 2 structures */}
            {((currentCard as any).codeExample || (currentCard as any).code || (currentCard as any).example) && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  {locale === 'ht' ? 'Egzanp Kòd:' : locale === 'fr' ? 'Exemple de Code:' : 'Code Example:'}
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 font-mono text-sm">
                    <code>{(currentCard as any).codeExample || (typeof (currentCard as any).code === 'string' ? (currentCard as any).code : (currentCard as any).code?.initial) || (currentCard as any).example?.code}</code>
                  </pre>
                </div>
                {((currentCard as any).codeOutput || (currentCard as any).code?.output || (currentCard as any).example?.output) && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      {locale === 'ht' ? 'Rezilta:' : locale === 'fr' ? 'Résultat:' : 'Output:'}
                    </h4>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <pre className="text-gray-800 font-mono text-sm whitespace-pre-wrap">
                        {(currentCard as any).codeOutput || (currentCard as any).code?.output || (currentCard as any).example?.output}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Example Explanation for Week 2 */}
                {(currentCard as any).example?.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-900 text-sm">
                      💡 {getLocalizedText((currentCard as any).example.explanation)}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Points */}
            {currentCard.keyPoints && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5" />
                  {locale === 'ht' ? 'Pwen Kle yo:' : locale === 'fr' ? 'Points Clés:' : 'Key Points:'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(currentCard.keyPoints[locale as keyof typeof currentCard.keyPoints] || currentCard.keyPoints.en).map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span className="text-blue-900">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            {currentCard.tips && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <LightBulbIcon className="w-5 h-5" />
                  {locale === 'ht' ? 'Konsèy yo:' : locale === 'fr' ? 'Conseils:' : 'Tips:'}
                </h3>
                <div className="space-y-2">
                  {(currentCard.tips[locale as keyof typeof currentCard.tips] || currentCard.tips.en).map((tip: string, index: number) => (
                    <div key={index} className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                      <span className="text-yellow-800">💡 {tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Quiz Card Rendering */}
          {currentCard.type === 'quiz' && (currentCard as any).quiz && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                {getLocalizedText((currentCard as any).quiz.question)}
              </h3>
              
              <div className="space-y-3">
                {(currentCard as any).quiz.options?.map((option: any, index: number) => {
                  const isSelected = quizAnswers[currentCardIndex] === index;
                  const hasAnswered = quizAnswers[currentCardIndex] !== undefined;
                  const isCorrect = index === (currentCard as any).quiz.correctAnswer;
                  
                  let buttonStyles = 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50';
                  
                  if (hasAnswered) {
                    if (isSelected) {
                      if (isCorrect) {
                        buttonStyles = 'border-green-500 bg-green-50 text-green-800';
                      } else {
                        buttonStyles = 'border-red-500 bg-red-50 text-red-800';
                      }
                    } else if (isCorrect) {
                      buttonStyles = 'border-green-400 bg-green-25 text-green-700 opacity-75';
                    }
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !hasAnswered && handleQuizAnswer(currentCardIndex, index)}
                      disabled={hasAnswered}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonStyles} ${
                        hasAnswered ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{getLocalizedText(option)}</span>
                        </div>
                        {hasAnswered && (
                          <div className="flex items-center gap-2">
                            {isSelected && (
                              <span className="text-sm font-medium">
                                {locale === 'ht' ? 'Ou chwazi' : locale === 'fr' ? 'Votre choix' : 'Your choice'}
                              </span>
                            )}
                            {isCorrect ? (
                              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                            ) : isSelected ? (
                              <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">✗</span>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Show explanation after answering */}
              {quizAnswers[currentCardIndex] !== undefined && (currentCard as any).quiz.explanation && (
                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    {locale === 'ht' ? '💡 Eksplikasyon:' : locale === 'fr' ? '💡 Explication :' : '💡 Explanation:'}
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {getLocalizedText((currentCard as any).quiz.explanation)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Completion */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => markCardCompleted(currentCardIndex)}
            disabled={completedCards.has(currentCardIndex)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              completedCards.has(currentCardIndex)
                ? 'bg-green-100 text-green-800 border-2 border-green-300'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {completedCards.has(currentCardIndex) ? (
              <>
                <CheckCircleIcon className="w-5 h-5 inline mr-2" />
                {locale === 'ht' ? 'Konplè' : locale === 'fr' ? 'Complété' : 'Completed'}
              </>
            ) : (
              <>
                {locale === 'ht' ? 'Mak Kòm Konplè' : locale === 'fr' ? 'Marquer Complet' : 'Mark as Complete'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
        <button
          onClick={prevCard}
          disabled={currentCardIndex === 0}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          {locale === 'ht' ? 'Anvan' : locale === 'fr' ? 'Précédent' : 'Previous'}
        </button>

        <div className="flex items-center gap-2">
          {lessonData.cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                completedCards.has(index) ? 'bg-green-500' :
                index === currentCardIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          {currentCardIndex === lessonData.cards.length - 1 
            ? (locale === 'ht' ? 'Quiz' : 'Quiz')
            : (locale === 'ht' ? 'Suivan' : locale === 'fr' ? 'Suivant' : 'Next')
          }
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}