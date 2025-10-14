'use client';
import { useRef, useEffect, useState } from 'react';
import { useLocale } from '../LocaleProvider';
import { useAudio } from '@/hooks/useAudio';

interface QuizQuestion {
  id: string;
  questionHt: string;
  questionFr: string;
  optionsHt: string[];
  optionsFr: string[];
  correctAnswerIndex: number;
  explanation?: string;
  explanationHt?: string;
  explanationFr?: string;
  points: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  type: 'success' | 'error' | 'star';
}

interface FloatingText {
  text: string;
  x: number;
  y: number;
  vy: number;
  life: number;
  color: string;
}

export default function InteractiveQuiz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const locale = useLocale();
  const { playText, isPlaying: audioPlaying } = useAudio();

  // Helper function to draw rounded rectangles
  const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  const questions: QuizQuestion[] = [
    {
      id: '1',
      questionHt: 'Ki jan ou di "Bonjou" an Anglè?',
      questionFr: 'Comment dit-on "Bonjour" en anglais?',
      optionsHt: ['Good morning', 'Good night', 'Good afternoon', 'Hello'],
      optionsFr: ['Good morning', 'Good night', 'Good afternoon', 'Hello'],
      correctAnswerIndex: 0,
      explanationHt: '"Good morning" se fason yo di bonjou nan maten an.',
      explanationFr: '"Good morning" est la façon de dire bonjour le matin.',
      points: 10
    },
    {
      id: '2',
      questionHt: 'Ki mo sa a vle di: "Please"?',
      questionFr: 'Que signifie ce mot: "Please"?',
      optionsHt: ['Mèsi', 'Souplè', 'Eskize m', 'Orevwa'],
      optionsFr: ['Merci', 'S\'il vous plaît', 'Excusez-moi', 'Au revoir'],
      correctAnswerIndex: 1,
      explanationHt: '"Please" vle di "souplè" - yo itilize li pou mande bagay ak politès.',
      explanationFr: '"Please" signifie "s\'il vous plaît" - on l\'utilise pour demander poliment.',
      points: 10
    },
    {
      id: '3',
      questionHt: 'Nan ki sitiyasyon ou ta itilize "Excuse me"?',
      questionFr: 'Dans quelle situation utiliseriez-vous "Excuse me"?',
      optionsHt: [
        'Lè w ap reponn telefòn',
        'Lè w bezwen pase ak moun ap bloke w',
        'Lè w ap manje',
        'Lè w ap dòmi'
      ],
      optionsFr: [
        'Quand on répond au téléphone',
        'Quand on a besoin de passer et quelqu\'un bloque',
        'Quand on mange',
        'Quand on dort'
      ],
      correctAnswerIndex: 1,
      explanationHt: '"Excuse me" yo itilize li pou atire atansyon moun yo oswa pou mande otorizasyon pase.',
      explanationFr: '"Excuse me" s\'utilise pour attirer l\'attention ou demander la permission de passer.',
      points: 15
    },
    {
      id: '4',
      questionHt: 'Ki repons ki pi bon pou "How are you?"',
      questionFr: 'Quelle est la meilleure réponse à "How are you?"',
      optionsHt: [
        'Yes, please',
        'I\'m fine, thank you',
        'Good morning',
        'You\'re welcome'
      ],
      optionsFr: [
        'Yes, please',
        'I\'m fine, thank you',
        'Good morning',
        'You\'re welcome'
      ],
      correctAnswerIndex: 1,
      explanationHt: '"I\'m fine, thank you" se repons estanda pou "How are you?" ki vle di "Kijan ou ye?"',
      explanationFr: '"I\'m fine, thank you" est la réponse standard à "How are you?" qui signifie "Comment allez-vous?"',
      points: 15
    }
  ];

  const createParticles = (x: number, y: number, type: 'success' | 'error', count: number = 10) => {
    const newParticles: Particle[] = [];
    const colors = type === 'success' ? ['#10B981', '#34D399', '#6EE7B7'] : ['#EF4444', '#F87171', '#FCA5A5'];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3,
        life: 1.0,
        type: type === 'success' ? 'star' : 'error'
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  };

  const createFloatingText = (text: string, x: number, y: number, color: string) => {
    const newText: FloatingText = {
      text,
      x,
      y,
      vy: -2,
      life: 1.0,
      color
    };
    
    setFloatingTexts(prev => [...prev, newText]);
  };

  const drawQuestion = (ctx: CanvasRenderingContext2D) => {
    const question = questions[currentQuestion];
    const canvas = ctx.canvas;
    
    // Question background
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    drawRoundedRect(ctx, 20, 20, canvas.width - 40, 120, 15);
    ctx.fill();
    
    // Question text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    
    const questionText = locale === 'ht' ? question.questionHt : question.questionFr;
    const maxWidth = canvas.width - 60;
    const words = questionText.split(' ');
    let line = '';
    let y = 60;
    
    for (const word of words) {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line.trim(), 40, y);
        line = word + ' ';
        y += 25;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), 40, y);
    
    // Progress indicator
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    drawRoundedRect(ctx, 40, 100, canvas.width - 80, 8, 4);
    ctx.fill();
    
    ctx.fillStyle = '#FFFFFF';
    const progressWidth = ((currentQuestion + 1) / questions.length) * (canvas.width - 80);
    drawRoundedRect(ctx, 40, 100, progressWidth, 8, 4);
    ctx.fill();
    
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${currentQuestion + 1} / ${questions.length}`,
      canvas.width / 2,
      125
    );
  };

  const drawOptions = (ctx: CanvasRenderingContext2D) => {
    const question = questions[currentQuestion];
    const options = locale === 'ht' ? question.optionsHt : question.optionsFr;
    const startY = 180;
    const optionHeight = 50;
    const spacing = 10;
    
    options.forEach((option, index) => {
      const y = startY + index * (optionHeight + spacing);
      const isSelected = selectedAnswer === index;
      const isCorrect = index === question.correctAnswerIndex;
      
      // Option background
      let bgColor = '#F3F4F6';
      let borderColor = '#D1D5DB';
      let textColor = '#374151';
      
      if (showResult) {
        if (isCorrect) {
          bgColor = '#D1FAE5';
          borderColor = '#10B981';
          textColor = '#065F46';
        } else if (isSelected && !isCorrect) {
          bgColor = '#FEE2E2';
          borderColor = '#EF4444';
          textColor = '#991B1B';
        }
      } else if (isSelected) {
        bgColor = '#DBEAFE';
        borderColor = '#3B82F6';
        textColor = '#1E40AF';
      }
      
      ctx.fillStyle = bgColor;
      drawRoundedRect(ctx, 30, y, ctx.canvas.width - 60, optionHeight, 8);
      ctx.fill();
      
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 2;
      drawRoundedRect(ctx, 30, y, ctx.canvas.width - 60, optionHeight, 8);
      ctx.stroke();
      
      // Option letter
      ctx.fillStyle = borderColor;
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      const letter = String.fromCharCode(65 + index); // A, B, C, D
      ctx.fillText(letter, 60, y + optionHeight / 2 + 5);
      
      // Option text
      ctx.fillStyle = textColor;
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(option, 85, y + optionHeight / 2 + 5);
      
      // Correct/incorrect indicators
      if (showResult) {
        const iconX = ctx.canvas.width - 60;
        const iconY = y + optionHeight / 2;
        
        if (isCorrect) {
          // Checkmark
          ctx.strokeStyle = '#10B981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(iconX - 8, iconY);
          ctx.lineTo(iconX - 3, iconY + 5);
          ctx.lineTo(iconX + 8, iconY - 5);
          ctx.stroke();
        } else if (isSelected) {
          // X mark
          ctx.strokeStyle = '#EF4444';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(iconX - 6, iconY - 6);
          ctx.lineTo(iconX + 6, iconY + 6);
          ctx.moveTo(iconX + 6, iconY - 6);
          ctx.lineTo(iconX - 6, iconY + 6);
          ctx.stroke();
        }
      }
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particles.forEach(particle => {
      if (particle.life <= 0) return;

      ctx.save();
      ctx.globalAlpha = particle.life;
      ctx.fillStyle = particle.color;
      
      if (particle.type === 'star') {
        // Draw star
        const spikes = 5;
        const outerRadius = particle.size;
        const innerRadius = particle.size / 2;
        
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const angle = (i * Math.PI) / spikes;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = particle.x + Math.cos(angle) * radius;
          const y = particle.y + Math.sin(angle) * radius;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw circle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      ctx.restore();

      // Update particle
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy += 0.3; // Gravity
      particle.life -= 0.02;
    });

    setParticles(prev => prev.filter(p => p.life > 0));
  };

  const drawFloatingTexts = (ctx: CanvasRenderingContext2D) => {
    floatingTexts.forEach(text => {
      if (text.life <= 0) return;

      ctx.save();
      ctx.globalAlpha = text.life;
      ctx.fillStyle = text.color;
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(text.text, text.x, text.y);
      ctx.restore();

      // Update text
      text.y += text.vy;
      text.life -= 0.02;
    });

    setFloatingTexts(prev => prev.filter(t => t.life > 0));
  };

  const drawScore = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`${locale === 'ht' ? 'Pwen' : 'Score'}: ${score}`, ctx.canvas.width - 20, 30);
  };

  const drawCompletionScreen = (ctx: CanvasRenderingContext2D) => {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Background overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Completion card
    const cardWidth = 400;
    const cardHeight = 300;
    const cardX = centerX - cardWidth / 2;
    const cardY = centerY - cardHeight / 2;
    
    ctx.fillStyle = '#FFFFFF';
    drawRoundedRect(ctx, cardX, cardY, cardWidth, cardHeight, 20);
    ctx.fill();
    
    // Title
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      locale === 'ht' ? 'Quiz Konplè!' : 'Quiz Terminé!',
      centerX,
      cardY + 60
    );
    
    // Score
    const finalScore = Math.round((score / (questions.reduce((sum, q) => sum + q.points, 0))) * 100);
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(`${finalScore}%`, centerX, cardY + 120);
    
    // Score description
    ctx.fillStyle = '#6B7280';
    ctx.font = '16px Arial';
    let scoreText = '';
    if (finalScore >= 90) {
      scoreText = locale === 'ht' ? 'Egselan!' : 'Excellent!';
    } else if (finalScore >= 70) {
      scoreText = locale === 'ht' ? 'Bon travay!' : 'Bon travail!';
    } else {
      scoreText = locale === 'ht' ? 'Kontinye pratike!' : 'Continuez à pratiquer!';
    }
    ctx.fillText(scoreText, centerX, cardY + 150);
    
    // Points breakdown
    ctx.fillText(
      `${score} / ${questions.reduce((sum, q) => sum + q.points, 0)} ${locale === 'ht' ? 'pwen' : 'points'}`,
      centerX,
      cardY + 180
    );
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#F8FAFC');
    gradient.addColorStop(1, '#E2E8F0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (quizCompleted) {
      drawCompletionScreen(ctx);
    } else {
      drawQuestion(ctx);
      drawOptions(ctx);
      drawScore(ctx);
    }

    drawParticles(ctx);
    drawFloatingTexts(ctx);

    requestAnimationFrame(animate);
  };

  const handleOptionClick = (optionIndex: number) => {
    if (showResult || quizCompleted) return;
    
    setSelectedAnswer(optionIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestion];
    const correct = selectedAnswer === question.correctAnswerIndex;
    
    setIsCorrect(correct);
    setShowResult(true);
    
    // Play audio feedback
    const feedbackText = correct 
      ? (locale === 'ht' ? 'Kòrèk!' : 'Correct!') 
      : (locale === 'ht' ? 'Pa kòrèk' : 'Incorrect');
    playText(feedbackText, locale === 'ht' ? 'fr-FR' : 'fr-FR');
    console.log('InteractiveQuiz: Playing feedback:', feedbackText);
    
    const canvas = canvasRef.current;
    if (canvas) {
      if (correct) {
        createParticles(canvas.width / 2, canvas.height / 2, 'success', 20);
        createFloatingText(
          `+${question.points}`,
          canvas.width / 2,
          canvas.height / 2,
          '#10B981'
        );
        setScore(prev => prev + question.points);
      } else {
        createParticles(canvas.width / 2, canvas.height / 2, 'error', 15);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(null);
    } else {
      // Quiz completed
      setQuizCompleted(true);
      
      // Play completion audio
      const completionText = locale === 'ht' ? 'Quiz la fini! Bravo!' : 'Quiz terminé! Bravo!';
      playText(completionText, locale === 'ht' ? 'fr-FR' : 'fr-FR');
      console.log('InteractiveQuiz: Quiz completed:', completionText);
      
      const canvas = canvasRef.current;
      if (canvas) {
        createParticles(canvas.width / 2, canvas.height / 2, 'success', 30);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(null);
    setScore(0);
    setQuizCompleted(false);
    setParticles([]);
    setFloatingTexts([]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 500;
      
      // Add click handler
      const handleClick = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left) * (canvas.width / rect.width);
        const y = (event.clientY - rect.top) * (canvas.height / rect.height);
        
        // Check if click is on an option
        if (!showResult && !quizCompleted) {
          const optionHeight = 50;
          const spacing = 10;
          const startY = 180;
          
          for (let i = 0; i < questions[currentQuestion].optionsHt.length; i++) {
            const optionY = startY + i * (optionHeight + spacing);
            if (y >= optionY && y <= optionY + optionHeight && x >= 30 && x <= canvas.width - 30) {
              handleOptionClick(i);
              break;
            }
          }
        }
      };
      
      canvas.addEventListener('click', handleClick);
      animate();
      
      return () => {
        canvas.removeEventListener('click', handleClick);
      };
    }
  }, [currentQuestion, showResult, quizCompleted]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {locale === 'ht' ? 'Quiz Entèaktif ak Animasyon' : 'Quiz Interactif avec Animations'}
        </h3>
        
        <div className="relative">
          <canvas 
            ref={canvasRef}
            className="w-full border-2 border-gray-200 rounded-lg cursor-pointer"
            style={{ maxWidth: '600px', height: 'auto' }}
          />
          
          {/* Controls */}
          <div className="flex gap-3 mt-4">
            {!showResult && !quizCompleted && (
              <button
                onClick={submitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50"
              >
                {locale === 'ht' ? 'Voye Repons' : 'Soumettre Réponse'}
              </button>
            )}
            
            {showResult && !quizCompleted && (
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                {currentQuestion < questions.length - 1 
                  ? (locale === 'ht' ? 'Kesyon Pwochen' : 'Question Suivante')
                  : (locale === 'ht' ? 'Wè Rezilta yo' : 'Voir Résultats')
                }
              </button>
            )}
            
            {quizCompleted && (
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {locale === 'ht' ? 'Kòmanse Ankò' : 'Recommencer'}
              </button>
            )}
          </div>
        </div>
        
        {/* Explanation */}
        {showResult && isCorrect !== null && (
          <div className={`mt-4 p-4 rounded-lg ${
            isCorrect 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isCorrect ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {isCorrect ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`font-semibold ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrect 
                    ? (locale === 'ht' ? 'Korrèk!' : 'Correct!')
                    : (locale === 'ht' ? 'Enkorèk' : 'Incorrect')
                  }
                </p>
                <p className="text-gray-700 mt-1">
                  {locale === 'ht' 
                    ? questions[currentQuestion].explanationHt 
                    : questions[currentQuestion].explanationFr
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}