'use client';
import { useState, useEffect, useRef } from 'react';
import { useLocale } from './LocaleProvider';
import { pythonFinalExam, type ExamQuestion } from '@/data/pythonFinalExam';
import { ClockIcon, CheckCircleIcon, XCircleIcon, LightBulbIcon, PlayIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon, FireIcon } from '@heroicons/react/24/solid';
import Editor from '@monaco-editor/react';
import PythonExecutor from './PythonExecutor';

interface PythonFinalExamProps {
  onComplete?: (score: number, totalPoints: number, timeSpent: number, answers: any) => void;
}

export default function PythonFinalExam({ onComplete }: PythonFinalExamProps) {
  const locale = useLocale();
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState(pythonFinalExam.duration * 60); // Convert to seconds
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [codeOutputs, setCodeOutputs] = useState<Record<string, string>>({});
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const pythonExecutorRef = useRef<any>(null);

  const currentQuestion = pythonFinalExam.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === pythonFinalExam.questions.length - 1;

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
  const getLocalizedText = (textObj: { ht: string; fr: string; en: string }) => {
    return textObj[locale] || textObj.en;
  };

  // Handle multiple choice answer
  const handleMultipleChoiceAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  // Handle code answer
  const handleCodeAnswer = (questionId: string, code: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: code
    }));
  };

  // Run code
  const handleRunCode = async (code: string) => {
    if (!pythonExecutorRef.current || isRunning) return;
    
    setIsRunning(true);
    try {
      const output = await pythonExecutorRef.current.executeCode(code);
      setCodeOutputs(prev => ({
        ...prev,
        [currentQuestion.id]: output
      }));
    } catch (error) {
      console.error('Code execution error:', error);
      setCodeOutputs(prev => ({
        ...prev,
        [currentQuestion.id]: `Error: ${error}`
      }));
    }
    setIsRunning(false);
  };

  // Calculate score
  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    pythonFinalExam.questions.forEach(question => {
      maxScore += question.points;
      const userAnswer = answers[question.id];

      if (question.type === 'multiple-choice') {
        if (userAnswer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === 'code') {
        // Simplified code grading - in real implementation, you'd run test cases
        if (userAnswer && userAnswer.trim().length > 10) {
          // Give partial credit for attempting the code
          totalScore += Math.floor(question.points * 0.6);
          
          // Check if code contains key elements
          const code = userAnswer.toLowerCase();
          let hasKeyElements = 0;
          let requiredElements = 0;

          // Basic checks based on question
          if (question.id === 'final-code-001') {
            if (code.includes('def add_numbers')) hasKeyElements++;
            if (code.includes('return')) hasKeyElements++;
            if (code.includes('a + b') || code.includes('b + a')) hasKeyElements++;
            requiredElements = 3;
          } else if (question.id === 'final-code-002') {
            if (code.includes('append(6)') && code.includes('append(7)')) hasKeyElements++;
            if (code.includes('len(')) hasKeyElements++;
            requiredElements = 2;
          }
          // Add more checks for other questions...

          if (hasKeyElements >= requiredElements) {
            totalScore += Math.floor(question.points * 0.4); // Full credit
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
    const timeSpent = Math.round((pythonFinalExam.duration * 60 - timeLeft) / 60); // Convert to minutes
    onComplete?.(score, maxScore, timeSpent, answers);
  };

  // Navigation
  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < pythonFinalExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Show hints
  const toggleHints = (questionId: string) => {
    setShowHints(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Handle Python executor ready callback
  const handlePythonReady = (executorInstance: any) => {
    pythonExecutorRef.current = executorInstance;
  };

  const handlePythonOutput = (output: string, isError: boolean) => {
    // Handle output if needed
  };

  // Pre-exam screen
  if (!hasStarted) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8">
          <div className="flex items-center gap-4">
            <AcademicCapIcon className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold">
                {getLocalizedText(pythonFinalExam.title)}
              </h1>
              <p className="text-purple-100 mt-2">
                {getLocalizedText(pythonFinalExam.description)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {locale === 'ht' ? 'Enstriksyon yo' : locale === 'fr' ? 'Instructions' : 'Instructions'}
            </h2>
            <ul className="space-y-2">
              {getLocalizedText(pythonFinalExam.instructions).map((instruction, index) => (
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
                <ClockIcon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{pythonFinalExam.duration} {locale === 'ht' ? 'minit' : locale === 'fr' ? 'minutes' : 'minutes'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Tan total' : locale === 'fr' ? 'Temps total' : 'Total time'}
                </div>
              </div>
              <div className="text-center">
                <FireIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{pythonFinalExam.questions.length} {locale === 'ht' ? 'kesyon' : locale === 'fr' ? 'questions' : 'questions'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? '20 multiple choice + 15 kod' : locale === 'fr' ? '20 choix multiple + 15 code' : '20 multiple choice + 15 code'}
                </div>
              </div>
              <div className="text-center">
                <AcademicCapIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900">{pythonFinalExam.totalPoints} {locale === 'ht' ? 'pwen' : locale === 'fr' ? 'points' : 'points'}</div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Maksimòm' : locale === 'fr' ? 'Maximum' : 'Maximum'}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setHasStarted(true)}
              className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              {locale === 'ht' ? 'Kòmanse Egzamen an' : locale === 'fr' ? 'Commencer l\'Examen' : 'Start Exam'}
            </button>
            <p className="text-sm text-gray-600 mt-4">
              {locale === 'ht' ? 'Yon fwa ou kòmanse, ou pa ka rete egzamen an' : 
               locale === 'fr' ? 'Une fois commencé, vous ne pouvez pas arrêter l\'examen' :
               'Once started, you cannot pause the exam'}
            </p>
          </div>
        </div>
        {/* Hidden Python Executor */}
        <div style={{ display: 'none' }}>
          <PythonExecutor
            onReady={handlePythonReady}
            onOutput={handlePythonOutput}
          />
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const { score, maxScore } = calculateScore();
    const percentage = Math.round((score / maxScore) * 100);
    const passed = percentage >= pythonFinalExam.passingScore;

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
                ? (locale === 'ht' ? 'Felisitasyon!' : locale === 'fr' ? 'Félicitations!' : 'Congratulations!')
                : (locale === 'ht' ? 'Egzamen Final Fini' : locale === 'fr' ? 'Examen Final Terminé' : 'Final Exam Complete')
              }
            </h1>
            <p className="text-lg opacity-90">
              {locale === 'ht' ? 'Ou fini egzamen final Python an' : 
               locale === 'fr' ? 'Vous avez terminé l\'examen final Python' :
               'You have completed the Python final exam'}
            </p>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-2">{percentage}%</div>
            <div className="text-xl text-gray-600 mb-4">
              {score} / {maxScore} {locale === 'ht' ? 'pwen' : locale === 'fr' ? 'points' : 'points'}
            </div>
            <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
              passed ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {passed 
                ? (locale === 'ht' ? 'Pase' : locale === 'fr' ? 'Réussi' : 'Passed')
                : (locale === 'ht' ? 'Echwe' : locale === 'fr' ? 'Échoué' : 'Failed')
              }
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              {locale === 'ht' ? 'Rezilta Detaye' : locale === 'fr' ? 'Résultats Détaillés' : 'Detailed Results'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Kesyon Multiple Choice' : locale === 'fr' ? 'Questions à Choix Multiple' : 'Multiple Choice Questions'}
                </div>
                <div className="text-lg font-semibold">
                  {pythonFinalExam.questions.filter(q => q.type === 'multiple-choice' && answers[q.id] === q.correctAnswer).length} / {pythonFinalExam.questions.filter(q => q.type === 'multiple-choice').length}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  {locale === 'ht' ? 'Kesyon Kod yo' : locale === 'fr' ? 'Questions de Code' : 'Code Questions'}
                </div>
                <div className="text-lg font-semibold">
                  {pythonFinalExam.questions.filter(q => q.type === 'code' && answers[q.id]).length} / {pythonFinalExam.questions.filter(q => q.type === 'code').length}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-600 mb-4">
              {passed 
                ? (locale === 'ht' ? 'Ou gen dwa kontinye ak pwojè yo ki vin apre yo' : 
                   locale === 'fr' ? 'Vous pouvez continuer avec les projets suivants' :
                   'You may continue with the next projects')
                : (locale === 'ht' ? 'Tanpri revize matye a ak reprann egzamen an' :
                   locale === 'fr' ? 'Veuillez réviser le matériel et reprendre l\'examen' :
                   'Please review the material and retake the exam')
              }
            </div>
          </div>
        </div>
        {/* Hidden Python Executor */}
        <div style={{ display: 'none' }}>
          <PythonExecutor
            onReady={handlePythonReady}
            onOutput={handlePythonOutput}
          />
        </div>
      </div>
    );
  }

  // Main exam interface
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header with timer and progress */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {getLocalizedText(pythonFinalExam.title)}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-purple-100">
              <span>
                {locale === 'ht' ? 'Kesyon' : locale === 'fr' ? 'Question' : 'Question'} {currentQuestionIndex + 1} / {pythonFinalExam.questions.length}
              </span>
              <span>•</span>
              <span>{currentQuestion.points} {locale === 'ht' ? 'pwen' : locale === 'fr' ? 'points' : 'points'}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <ClockIcon className="w-5 h-5" />
              <span className={`text-xl font-bold ${timeLeft < 600 ? 'text-yellow-300' : ''}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-sm opacity-80">
              {locale === 'ht' ? 'Tan ki rete' : locale === 'fr' ? 'Temps restant' : 'Time remaining'}
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-purple-800 bg-opacity-30 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / pythonFinalExam.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Question navigation sidebar */}
        <div className="w-64 bg-gray-50 p-4">
          <h3 className="font-semibold mb-3 text-gray-900">
            {locale === 'ht' ? 'Navigasyon' : locale === 'fr' ? 'Navigation' : 'Navigation'}
          </h3>
          <div className="space-y-1">
            {pythonFinalExam.questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(index)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  index === currentQuestionIndex
                    ? 'bg-purple-100 text-purple-800 font-semibold'
                    : answers[q.id] !== undefined
                    ? 'bg-green-100 text-green-800'
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
                  {q.type === 'multiple-choice' ? 'MC' : 'Code'} • {q.points}pt
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main question area */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {getLocalizedText(currentQuestion.title)}
            </h2>
            <div className="prose max-w-none text-gray-700">
              {getLocalizedText(currentQuestion.question)}
            </div>
          </div>

          {/* Multiple choice question */}
          {currentQuestion.type === 'multiple-choice' && (
            <>
              <div className="space-y-3 mb-6">
                {currentQuestion.options?.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === index;
                  const hasAnswered = answers[currentQuestion.id] !== undefined;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  
                  let buttonStyles = 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50';
                  
                  if (hasAnswered) {
                    if (isSelected) {
                      // Show user's selected answer
                      if (isCorrect) {
                        buttonStyles = 'border-green-500 bg-green-50 text-green-800'; // Correct answer
                      } else {
                        buttonStyles = 'border-red-500 bg-red-50 text-red-800'; // Incorrect answer
                      }
                    } else if (isCorrect) {
                      // Show correct answer if user selected wrong
                      buttonStyles = 'border-green-400 bg-green-25 text-green-700 opacity-75'; // Highlight correct answer
                    }
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !hasAnswered && handleMultipleChoiceAnswer(currentQuestion.id, index)}
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
              {answers[currentQuestion.id] !== undefined && currentQuestion.explanation && (
                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    {locale === 'ht' ? '💡 Eksplikasyon:' : locale === 'fr' ? '💡 Explication :' : '💡 Explanation:'}
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {getLocalizedText(currentQuestion.explanation)}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Code question */}
          {currentQuestion.type === 'code' && (
            <div className="space-y-4 mb-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Python Editor</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRunCode(answers[currentQuestion.id] || currentQuestion.starterCode || '')}
                      disabled={isRunning}
                      className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm font-medium disabled:opacity-50"
                    >
                      <PlayIcon className="w-4 h-4" />
                      {isRunning ? 'Running...' : 'Run'}
                    </button>
                    <button
                      onClick={() => toggleHints(currentQuestion.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium"
                    >
                      <LightBulbIcon className="w-4 h-4" />
                      Hints
                    </button>
                  </div>
                </div>
                <Editor
                  height="300px"
                  defaultLanguage="python"
                  value={answers[currentQuestion.id] || currentQuestion.starterCode || ''}
                  onChange={(value) => handleCodeAnswer(currentQuestion.id, value || '')}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    wordWrap: 'on'
                  }}
                  theme="vs-dark"
                />
              </div>

              {/* Code output */}
              {codeOutputs[currentQuestion.id] && (
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="font-semibold mb-2">Output:</div>
                  <pre className="whitespace-pre-wrap">{codeOutputs[currentQuestion.id]}</pre>
                </div>
              )}

              {/* Expected output */}
              {currentQuestion.expectedOutput && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-2">Expected Output:</div>
                  <pre className="text-blue-700 font-mono text-sm whitespace-pre-wrap">
                    {currentQuestion.expectedOutput}
                  </pre>
                </div>
              )}

              {/* Hints */}
              {showHints[currentQuestion.id] && currentQuestion.hints && (
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="font-semibold text-yellow-800 mb-2">
                    {locale === 'ht' ? 'Konsèy yo:' : locale === 'fr' ? 'Conseils:' : 'Hints:'}
                  </div>
                  <ul className="space-y-1">
                    {getLocalizedText(currentQuestion.hints).map((hint, index) => (
                      <li key={index} className="flex items-start gap-2 text-yellow-700">
                        <LightBulbIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {locale === 'ht' ? 'Anvan' : locale === 'fr' ? 'Précédent' : 'Previous'}
            </button>

            <div className="flex gap-4">
              {isLastQuestion ? (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  {locale === 'ht' ? 'Soumèt Egzamen an' : locale === 'fr' ? 'Soumettre l\'Examen' : 'Submit Exam'}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {locale === 'ht' ? 'Suivan' : locale === 'fr' ? 'Suivant' : 'Next'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Hidden Python Executor */}
      <div style={{ display: 'none' }}>
        <PythonExecutor
          onReady={handlePythonReady}
          onOutput={handlePythonOutput}
        />
      </div>
    </div>
  );
}