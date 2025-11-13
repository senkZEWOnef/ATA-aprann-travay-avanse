'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { htmlCssFinalExam, type ExamQuestion } from '@/data/htmlCssFinalExam';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon, FireIcon } from '@heroicons/react/24/solid';

interface HtmlCssFinalExamProps {
  onComplete?: (score: number, totalPoints: number, timeSpent: number, answers: any) => void;
}

export default function HtmlCssFinalExam({ onComplete }: HtmlCssFinalExamProps) {
  const locale = useLocale();
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState(htmlCssFinalExam.duration * 60); // Convert to seconds
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = htmlCssFinalExam.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === htmlCssFinalExam.questions.length - 1;

  // Timer effect
  useEffect(() => {
    if (!hasStarted || hasSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit(); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, hasSubmitted, timeLeft]);

  // Format time display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Get localized text
  const getLocalizedText = (textObj: { ht: string; fr: string }) => {
    return textObj[locale] || textObj.fr;
  };

  // Handle multiple choice answer
  const handleMultipleChoiceAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  // Handle true/false answer
  const handleTrueFalseAnswer = (questionId: string, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Handle short answer
  const handleShortAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Calculate score
  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    htmlCssFinalExam.questions.forEach(question => {
      maxScore += question.points;
      const userAnswer = answers[question.id];

      if (question.type === 'multiple-choice') {
        if (userAnswer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === 'true-false') {
        // Convert user's boolean answer to index: true = 0, false = 1
        const userAnswerIndex = userAnswer === true ? 0 : 1;
        if (userAnswerIndex === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === 'short-answer') {
        // Basic text matching for short answer questions
        if (userAnswer && typeof userAnswer === 'string') {
          const userAnswerLower = userAnswer.toLowerCase().trim();
          const expectedAnswerLower = getLocalizedText(question.expectedAnswer!).toLowerCase().trim();
          
          // Exact match gets full points
          if (userAnswerLower === expectedAnswerLower) {
            totalScore += question.points;
          }
          // Check for partial matches with key terms
          else if (expectedAnswerLower.length > 3) {
            // For longer answers, check if user answer contains key parts
            const keyWords = expectedAnswerLower.split(/[\s-]+/).filter(word => word.length > 2);
            const matchedWords = keyWords.filter(word => userAnswerLower.includes(word));
            if (matchedWords.length >= keyWords.length * 0.6) { // 60% of key words matched
              totalScore += Math.ceil(question.points * 0.7); // 70% credit for partial match
            }
          }
        }
      }
    });

    return { score: totalScore, maxScore };
  };

  // Handle exam submission
  const handleSubmit = () => {
    setHasSubmitted(true);
    setShowResults(true);
    const { score, maxScore } = calculateScore();
    const timeSpent = Math.round((htmlCssFinalExam.duration * 60 - timeLeft) / 60); // Convert to minutes
    onComplete?.(score, maxScore, timeSpent, answers);
  };

  // Navigation
  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < htmlCssFinalExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Pre-exam screen
  if (!hasStarted) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
          <div className="flex items-center gap-4">
            <AcademicCapIcon className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold">
                {getLocalizedText(htmlCssFinalExam.title)}
              </h1>
              <p className="text-green-100 mt-2">
                {getLocalizedText(htmlCssFinalExam.description)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {locale === 'ht' ? 'Enstriksyon yo' : 'Instructions'}
            </h2>
            <ul className="space-y-2">
              {getLocalizedText(htmlCssFinalExam.instructions).map((instruction, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <ClockIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{htmlCssFinalExam.duration} {locale === 'ht' ? 'minit' : 'minutes'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Tan total' : 'Temps total'}
                </div>
              </div>
              <div className="text-center">
                <FireIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{htmlCssFinalExam.questions.length} {locale === 'ht' ? 'kesyon' : 'questions'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? '20 MC + 5 V/F + 5 kout repons' : '20 choix multiple + 5 vrai/faux + 5 courtes'}
                </div>
              </div>
              <div className="text-center">
                <AcademicCapIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{htmlCssFinalExam.totalPoints} {locale === 'ht' ? 'pwen' : 'points'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Maksimòm' : 'Maximum'}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              {locale === 'ht' ? 'Kòmanse Egzamen an' : 'Commencer l\'Examen'}
            </button>
            <p className="text-sm text-gray-600 mt-4">
              {locale === 'ht' ? 'Yon fwa ou kòmanse, ou pa ka rete egzamen an' : 
               'Une fois commencé, vous ne pouvez pas arrêter l\'examen'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const { score, maxScore } = calculateScore();
    const percentage = Math.round((score / maxScore) * 100);
    const passed = percentage >= htmlCssFinalExam.passingScore;

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className={`${passed ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-red-600 to-pink-600'} text-white p-8`}>
          <div className="text-center">
            {passed ? (
              <CheckCircleIcon className="w-16 h-16 mx-auto mb-4" />
            ) : (
              <XCircleIcon className="w-16 h-16 mx-auto mb-4" />
            )}
            <h1 className="text-3xl font-bold mb-2">
              {passed 
                ? (locale === 'ht' ? 'Felisitasyon!' : 'Félicitations!')
                : (locale === 'ht' ? 'Egzamen Fini' : 'Examen Terminé')
              }
            </h1>
            <p className="text-lg opacity-90">
              {locale === 'ht' ? 'Ou fini egzamen final HTML & CSS an' : 
               'Vous avez terminé l\'examen final HTML & CSS'}
            </p>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-2">{percentage}%</div>
            <div className="text-xl text-gray-600 mb-4">
              {score} / {maxScore} {locale === 'ht' ? 'pwen' : 'points'}
            </div>
            <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
              passed ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {passed 
                ? (locale === 'ht' ? 'Pase' : 'Réussi')
                : (locale === 'ht' ? 'Echwe' : 'Échoué')
              }
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'ht' ? 'Rezilta Detaye' : 'Résultats Détaillés'}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Kesyon Multiple Choice' : 'Questions à Choix Multiple'}
                </div>
                <div className="text-lg font-semibold">
                  {htmlCssFinalExam.questions.filter(q => q.type === 'multiple-choice' && answers[q.id] === q.correctAnswer).length} / {htmlCssFinalExam.questions.filter(q => q.type === 'multiple-choice').length}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Kesyon Vre/Fo' : 'Questions Vrai/Faux'}
                </div>
                <div className="text-lg font-semibold">
                  {htmlCssFinalExam.questions.filter(q => q.type === 'true-false' && answers[q.id] === q.correctAnswer).length} / {htmlCssFinalExam.questions.filter(q => q.type === 'true-false').length}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Kesyon Kout' : 'Questions Courtes'}
                </div>
                <div className="text-lg font-semibold">
                  {htmlCssFinalExam.questions.filter(q => q.type === 'short-answer' && answers[q.id]).length} / {htmlCssFinalExam.questions.filter(q => q.type === 'short-answer').length}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-600 mb-4">
              {passed 
                ? (locale === 'ht' ? 'Ou gen dwa kontinye ak leson yo ki vin apre yo' : 
                   'Vous pouvez continuer avec les leçons suivantes')
                : (locale === 'ht' ? 'Tanpri revize matye a ak reprann egzamen an' :
                   'Veuillez réviser le matériel et reprendre l\'examen')
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main exam interface
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header with timer and progress */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {getLocalizedText(htmlCssFinalExam.title)}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-green-100">
              <span>
                {locale === 'ht' ? 'Kesyon' : 'Question'} {currentQuestionIndex + 1} / {htmlCssFinalExam.questions.length}
              </span>
              <span>•</span>
              <span>{currentQuestion.points} {locale === 'ht' ? 'pwen' : 'points'}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <ClockIcon className="w-5 h-5" />
              <span className={`text-xl font-bold ${timeLeft < 300 ? 'text-yellow-300' : ''}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-sm opacity-80">
              {locale === 'ht' ? 'Tan ki rete' : 'Temps restant'}
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-green-800 bg-opacity-30 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / htmlCssFinalExam.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Question navigation sidebar */}
        <div className="w-64 bg-gray-50 p-4">
          <h3 className="font-semibold mb-3 text-gray-900">
            {locale === 'ht' ? 'Navigasyon' : 'Navigation'}
          </h3>
          <div className="space-y-1">
            {htmlCssFinalExam.questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(index)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  index === currentQuestionIndex
                    ? 'bg-green-100 text-green-800 font-semibold'
                    : answers[q.id] !== undefined
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'hover:bg-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{index + 1}</span>
                  {answers[q.id] !== undefined && (
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                  )}
                </div>
                <div className="text-xs opacity-75">
                  {q.type === 'multiple-choice' ? 'MC' : q.type === 'true-false' ? 'V/F' : 'SA'} • {q.points}pt
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main question area */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {getLocalizedText(currentQuestion.question)}
            </h2>
          </div>

          {/* Multiple choice question */}
          {currentQuestion.type === 'multiple-choice' && (
            <div className="space-y-3 mb-6">
              {currentQuestion.options?.map((option, index) => {
                const isSelected = answers[currentQuestion.id] === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleMultipleChoiceAnswer(currentQuestion.id, index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{getLocalizedText(option)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* True/False question */}
          {currentQuestion.type === 'true-false' && (
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleTrueFalseAnswer(currentQuestion.id, true)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestion.id] === true
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                    V
                  </span>
                  <span>{locale === 'ht' ? 'Vre' : 'Vrai'}</span>
                </div>
              </button>
              <button
                onClick={() => handleTrueFalseAnswer(currentQuestion.id, false)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestion.id] === false
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                    F
                  </span>
                  <span>{locale === 'ht' ? 'Fo' : 'Faux'}</span>
                </div>
              </button>
            </div>
          )}

          {/* Short answer question */}
          {currentQuestion.type === 'short-answer' && (
            <div className="mb-6">
              {currentQuestion.codeBlock && (
                <div className="mb-4 p-4 bg-gray-100 rounded-lg border">
                  <pre className="text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                    {currentQuestion.codeBlock}
                  </pre>
                </div>
              )}
              <textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleShortAnswer(currentQuestion.id, e.target.value)}
                placeholder={locale === 'ht' ? 'Ekri repons ou a...' : 'Écrivez votre réponse...'}
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none resize-none"
              />
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {locale === 'ht' ? 'Anvan' : 'Précédent'}
            </button>

            <div className="flex gap-4">
              {isLastQuestion ? (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  {locale === 'ht' ? 'Soumèt Egzamen an' : 'Soumettre l\'Examen'}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {locale === 'ht' ? 'Suivan' : 'Suivant'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}