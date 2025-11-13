'use client';

import { useState, useEffect } from 'react';
import { HtmlCssCard } from '@/data/htmlCssWeek1Cards';
import htmlCssWeek1Cards from '@/data/htmlCssWeek1Cards';
import htmlCssWeek2Cards from '@/data/htmlCssWeek2Cards';
import htmlCssWeek3Cards from '@/data/htmlCssWeek3Cards';
import htmlCssWeek4Cards from '@/data/htmlCssWeek4Cards';
import htmlCssWeek5Cards from '@/data/htmlCssWeek5Cards';
import htmlCssWeek6Cards from '@/data/htmlCssWeek6Cards';
import htmlCssWeek7Cards from '@/data/htmlCssWeek7Cards';
import htmlCssWeek9Cards from '@/data/htmlCssWeek9Cards';
import htmlCssWeek10Cards from '@/data/htmlCssWeek10Cards';
import htmlCssWeek11Cards from '@/data/htmlCssWeek11Cards';
import htmlCssWeek12Cards from '@/data/htmlCssWeek12Cards';
import htmlCssWeek13Cards from '@/data/htmlCssWeek13Cards';
import htmlCssWeek14Cards from '@/data/htmlCssWeek14Cards';
import htmlCssWeek15Cards from '@/data/htmlCssWeek15Cards';

interface HtmlCssCardLessonPlayerProps {
  weekNumber: number;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export default function HtmlCssCardLessonPlayer({ 
  weekNumber, 
  onComplete, 
  onProgress 
}: HtmlCssCardLessonPlayerProps) {
  // Get cards for the specific week
  const getCardsForWeek = (week: number) => {
    switch (week) {
      case 1: return htmlCssWeek1Cards;
      case 2: return htmlCssWeek2Cards;
      case 3: return htmlCssWeek3Cards;
      case 4: return htmlCssWeek4Cards;
      case 5: return htmlCssWeek5Cards;
      case 6: return htmlCssWeek6Cards;
      case 7: return htmlCssWeek7Cards;
      case 8: return [];
      case 9: return htmlCssWeek9Cards;
      case 10: return htmlCssWeek10Cards;
      case 11: return htmlCssWeek11Cards;
      case 12: return htmlCssWeek12Cards;
      case 13: return htmlCssWeek13Cards;
      case 14: return htmlCssWeek14Cards;
      case 15: return htmlCssWeek15Cards;
      default: return [];
    }
  };
  
  const cards = getCardsForWeek(weekNumber);
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showAnswers, setShowAnswers] = useState<{[key: number]: boolean}>({});
  const [locale, setLocale] = useState<'ht' | 'fr'>('ht');

  const currentCard = cards[currentCardIndex];
  const totalCards = cards.length;

  useEffect(() => {
    // Load saved progress
    const saved = localStorage.getItem(`htmlcss-week-${weekNumber}-progress`);
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentCardIndex(data.currentCard || 0);
      setCompletedCards(new Set(data.completed || []));
      setSelectedAnswers(data.answers || {});
    }
  }, [weekNumber]);

  useEffect(() => {
    // Save progress
    const progress = {
      currentCard: currentCardIndex,
      completed: Array.from(completedCards),
      answers: selectedAnswers
    };
    localStorage.setItem(`htmlcss-week-${weekNumber}-progress`, JSON.stringify(progress));
    
    // Notify parent of progress
    onProgress?.(completedCards.size / totalCards);
    
    // Check if all cards completed
    if (completedCards.size === totalCards) {
      onComplete?.();
    }
  }, [currentCardIndex, completedCards, selectedAnswers, totalCards, weekNumber, onComplete, onProgress]);

  const markCardComplete = () => {
    setCompletedCards(prev => new Set([...prev, currentCard.id]));
  };

  const nextCard = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleQuizAnswer = (cardId: number, questionId: number, answerIndex: number) => {
    const key = `${cardId}-${questionId}`;
    setSelectedAnswers(prev => ({
      ...prev,
      [key]: answerIndex
    }));
  };

  const showQuizAnswers = (cardId: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [cardId]: true
    }));
  };

  const getContent = (contentHt: string, contentFr: string) => {
    return locale === 'ht' ? contentHt : contentFr;
  };

  if (!currentCard) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-bold text-gray-600 mb-4">
          {locale === 'ht' ? `Semèn ${weekNumber} pa disponib ankò` : `Semaine ${weekNumber} pas encore disponible`}
        </h3>
        <p className="text-gray-500">
          {locale === 'ht' ? 'Kontni an ap prepare...' : 'Contenu en préparation...'}
        </p>
      </div>
    );
  }

  const renderCard = () => {
    switch (currentCard.type) {
      case 'lesson':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  📚
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  {getContent(currentCard.titleHt, currentCard.titleFr)}
                </h3>
              </div>
              <button
                onClick={() => setLocale(locale === 'ht' ? 'fr' : 'ht')}
                className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm font-medium text-blue-700"
              >
                {locale === 'ht' ? 'Français' : 'Kreyòl'}
              </button>
            </div>
            
            <div className="prose prose-blue max-w-none">
              <div className="whitespace-pre-wrap">
                {getContent(currentCard.contentHt, currentCard.contentFr)}
              </div>
              
              {currentCard.codeExample && (
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {locale === 'ht' ? 'Egzanp Kòd:' : 'Exemple de Code:'}
                  </h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{currentCard.codeExample}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        );

      case 'practice':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                🧩
              </div>
              <h3 className="text-xl font-bold text-green-900">
                {getContent(currentCard.titleHt, currentCard.titleFr)}
              </h3>
            </div>

            <div className="space-y-6">
              {currentCard.exercises?.map((exercise) => (
                <div key={exercise.id} className="bg-white border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {locale === 'ht' ? 'Egzèsis' : 'Exercice'} {exercise.id}
                  </h4>
                  <p className="text-green-700 mb-3">
                    {getContent(exercise.instructionHt, exercise.instructionFr)}
                  </p>
                  
                  {exercise.starterCode && (
                    <div className="mb-3">
                      <h5 className="font-medium text-green-800 mb-1">
                        {locale === 'ht' ? 'Kòd Kòmanse:' : 'Code de Départ:'}
                      </h5>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                        <code>{exercise.starterCode}</code>
                      </pre>
                    </div>
                  )}

                  {exercise.hint && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-3">
                      <p className="text-yellow-800 text-sm">
                        💡 <strong>{locale === 'ht' ? 'Konsèy:' : 'Conseil:'}</strong> {exercise.hint}
                      </p>
                    </div>
                  )}

                  <details className="mt-3">
                    <summary className="cursor-pointer text-green-600 hover:text-green-700 font-medium">
                      {locale === 'ht' ? '👁️ Gade Solisyon' : '👁️ Voir Solution'}
                    </summary>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto mt-2">
                      <code>{exercise.solution}</code>
                    </pre>
                  </details>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                🧪
              </div>
              <h3 className="text-xl font-bold text-purple-900">
                {getContent(currentCard.titleHt, currentCard.titleFr)}
              </h3>
            </div>

            <div className="space-y-6">
              {currentCard.quiz?.map((question) => (
                <div key={question.id} className="bg-white border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-3">
                    {locale === 'ht' ? 'Kesyon' : 'Question'} {question.id}: {' '}
                    {getContent(question.questionHt, question.questionFr)}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswers[`${currentCard.id}-${question.id}`] === index;
                      const isCorrect = index === question.correctAnswer;
                      const showResult = showAnswers[currentCard.id];
                      
                      return (
                        <label 
                          key={index}
                          className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${
                            showResult 
                              ? isCorrect 
                                ? 'bg-green-50 border-green-300' 
                                : isSelected 
                                  ? 'bg-red-50 border-red-300' 
                                  : 'bg-gray-50 border-gray-200'
                              : isSelected
                                ? 'bg-purple-50 border-purple-300'
                                : 'hover:bg-purple-25 border-gray-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentCard.id}-${question.id}`}
                            checked={isSelected}
                            onChange={() => handleQuizAnswer(currentCard.id, question.id, index)}
                            disabled={showResult}
                            className="mr-3"
                          />
                          <span className="flex-1">
                            {String.fromCharCode(97 + index)}) {getContent(option.ht, option.fr)}
                          </span>
                          {showResult && isCorrect && <span className="text-green-600 font-bold">✓</span>}
                          {showResult && !isCorrect && isSelected && <span className="text-red-600 font-bold">✗</span>}
                        </label>
                      );
                    })}
                  </div>

                  {!showAnswers[currentCard.id] ? (
                    <button
                      onClick={() => showQuizAnswers(currentCard.id)}
                      disabled={!selectedAnswers[`${currentCard.id}-${question.id}`]}
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {locale === 'ht' ? 'Verifye Repons' : 'Vérifier Réponse'}
                    </button>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="text-blue-800">
                        <strong>{locale === 'ht' ? 'Eksplikasyon:' : 'Explication:'}</strong> {' '}
                        {getContent(question.explanationHt, question.explanationFr)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'mini-project':
        return (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                💬
              </div>
              <h3 className="text-xl font-bold text-orange-900">
                {getContent(currentCard.titleHt, currentCard.titleFr)}
              </h3>
            </div>
            
            <div className="prose prose-orange max-w-none">
              <div className="whitespace-pre-wrap">
                {getContent(currentCard.contentHt, currentCard.contentFr)}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${((currentCardIndex + 1) / totalCards) * 100}%` }}
        ></div>
      </div>
      
      {/* Card Counter */}
      <div className="text-center">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-600">
          {locale === 'ht' ? 'Kat' : 'Carte'} {currentCardIndex + 1} {locale === 'ht' ? 'nan' : 'sur'} {totalCards}
        </span>
      </div>

      {/* Card Content */}
      {renderCard()}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={previousCard}
          disabled={currentCardIndex === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          ← {locale === 'ht' ? 'Anvan' : 'Précédent'}
        </button>

        <div className="flex items-center gap-4">
          {!completedCards.has(currentCard.id) && (
            <button
              onClick={markCardComplete}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {locale === 'ht' ? '✓ Make Konplè' : '✓ Marquer Terminé'}
            </button>
          )}
          
          {completedCards.has(currentCard.id) && (
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded font-medium">
              ✅ {locale === 'ht' ? 'Konplè' : 'Terminé'}
            </span>
          )}
        </div>

        <button
          onClick={nextCard}
          disabled={currentCardIndex === totalCards - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {locale === 'ht' ? 'Swiv' : 'Suivant'} →
        </button>
      </div>
    </div>
  );
}