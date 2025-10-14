'use client';
import { useRef, useEffect, useState } from 'react';
import { useLocale } from '../LocaleProvider';
import { useAudio } from '@/hooks/useAudio';

interface VocabWord {
  english: string;
  creole: string;
  french: string;
  pronunciation: string;
  category: string;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

export default function VocabularyPractice() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentWord, setCurrentWord] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [score, setScore] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const vocabularyWords: VocabWord[] = [
    {
      english: "Good morning",
      creole: "Bonjou",
      french: "Bonjour",
      pronunciation: "BON-joo",
      category: "greetings",
      color: "#10B981"
    },
    {
      english: "Please",
      creole: "Souplè",
      french: "S'il vous plaît",
      pronunciation: "SOO-pleh",
      category: "courtesy",
      color: "#3B82F6"
    },
    {
      english: "Thank you",
      creole: "Mèsi",
      french: "Merci",
      pronunciation: "mer-SEE",
      category: "courtesy",
      color: "#8B5CF6"
    },
    {
      english: "Excuse me",
      creole: "Eskize m",
      french: "Excusez-moi",
      pronunciation: "es-KEE-ze m",
      category: "courtesy",
      color: "#F59E0B"
    },
    {
      english: "How are you?",
      creole: "Kijan ou ye?",
      french: "Comment allez-vous?",
      pronunciation: "KEE-jan oo yeh",
      category: "questions",
      color: "#EF4444"
    },
    {
      english: "My name is...",
      creole: "Non m se...",
      french: "Je m'appelle...",
      pronunciation: "NON m seh",
      category: "introductions",
      color: "#06B6D4"
    }
  ];

  const createParticles = (x: number, y: number, color: string) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        color: color,
        size: Math.random() * 4 + 2,
        life: 1.0
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  const drawWord = (ctx: CanvasRenderingContext2D, word: VocabWord, animate = false) => {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Background circle with pulsing animation
    const time = Date.now() * 0.003;
    const pulseScale = animate ? 1 + Math.sin(time) * 0.05 : 1;
    const radius = 120 * pulseScale;

    ctx.save();
    
    // Outer glow
    const gradient = ctx.createRadialGradient(centerX, centerY, radius - 20, centerX, centerY, radius + 20);
    gradient.addColorStop(0, word.color + '40');
    gradient.addColorStop(1, word.color + '00');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Main circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = word.color + '20';
    ctx.fill();
    ctx.strokeStyle = word.color;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Category badge
    ctx.fillStyle = word.color;
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    const categoryText = word.category.charAt(0).toUpperCase() + word.category.slice(1);
    const badgeWidth = ctx.measureText(categoryText).width + 20;
    drawRoundedRect(ctx, centerX - badgeWidth/2, centerY - radius - 20, badgeWidth, 20, 10);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(categoryText, centerX, centerY - radius - 8);

    // Main word (English)
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(word.english, centerX, centerY - 20);

    if (showTranslation) {
      // Translation
      ctx.fillStyle = word.color;
      ctx.font = 'bold 24px Arial';
      const translation = locale === 'ht' ? word.creole : word.french;
      ctx.fillText(translation, centerX, centerY + 15);

      // Pronunciation guide
      ctx.fillStyle = '#6B7280';
      ctx.font = 'italic 16px Arial';
      ctx.fillText(`[${word.pronunciation}]`, centerX, centerY + 45);
    }

    ctx.restore();
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particles.forEach(particle => {
      if (particle.life <= 0) return;

      ctx.save();
      ctx.globalAlpha = particle.life;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();

      // Update particle
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.life -= 0.02;
    });

    // Remove dead particles
    setParticles(prev => prev.filter(p => p.life > 0));
  };

  const drawProgress = (ctx: CanvasRenderingContext2D) => {
    const progressWidth = 200;
    const progressHeight = 8;
    const x = (ctx.canvas.width - progressWidth) / 2;
    const y = 50;

    // Background
    ctx.fillStyle = '#E5E7EB';
    drawRoundedRect(ctx, x, y, progressWidth, progressHeight, 4);
    ctx.fill();

    // Progress
    const progress = ((currentWord + 1) / vocabularyWords.length) * progressWidth;
    ctx.fillStyle = '#10B981';
    drawRoundedRect(ctx, x, y, progress, progressHeight, 4);
    ctx.fill();

    // Progress text
    ctx.fillStyle = '#374151';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${currentWord + 1} / ${vocabularyWords.length}`,
      ctx.canvas.width / 2,
      y + progressHeight + 20
    );
  };

  const drawScore = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`${locale === 'ht' ? 'Pwen' : 'Score'}: ${score}`, ctx.canvas.width - 20, 30);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#F8FAFC');
    gradient.addColorStop(1, '#F1F5F9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw current word
    if (currentWord < vocabularyWords.length) {
      drawWord(ctx, vocabularyWords[currentWord], isAnimating);
    }

    // Draw UI elements
    drawProgress(ctx);
    drawScore(ctx);
    drawParticles(ctx);

    requestAnimationFrame(animate);
  };

  const handleWordClick = () => {
    if (!showTranslation) {
      setShowTranslation(true);
      setIsAnimating(true);
      
      // Create success particles
      const canvas = canvasRef.current;
      if (canvas) {
        createParticles(
          canvas.width / 2,
          canvas.height / 2,
          vocabularyWords[currentWord].color
        );
      }
      
      // Add score
      setScore(prev => prev + 10);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  const nextWord = () => {
    if (currentWord < vocabularyWords.length - 1) {
      setCurrentWord(prev => prev + 1);
      setShowTranslation(false);
      setIsAnimating(false);
    }
  };

  const previousWord = () => {
    if (currentWord > 0) {
      setCurrentWord(prev => prev - 1);
      setShowTranslation(false);
      setIsAnimating(false);
    }
  };

  const reset = () => {
    setCurrentWord(0);
    setShowTranslation(false);
    setScore(0);
    setParticles([]);
    setIsAnimating(false);
  };

  const playPronunciation = () => {
    const currentWordData = vocabularyWords[currentWord];
    const textToPlay = currentWordData.english;
    
    // Play text-to-speech
    playText(textToPlay, 'en-US');
    console.log('VocabularyPractice: Playing pronunciation:', textToPlay);
    
    // Visual feedback
    setIsAnimating(true);
    const canvas = canvasRef.current;
    if (canvas) {
      createParticles(
        canvas.width / 2,
        canvas.height / 2 + 60,
        '#3B82F6'
      );
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 500;
      animate();
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {locale === 'ht' ? 'Pratik Vokabilè Entèaktif' : 'Pratique Vocabulaire Interactif'}
        </h3>
        
        <div className="relative">
          <canvas 
            ref={canvasRef}
            onClick={handleWordClick}
            className="w-full border-2 border-gray-200 rounded-lg cursor-pointer"
            style={{ maxWidth: '600px', height: 'auto' }}
          />
          
          {/* Click instruction */}
          {!showTranslation && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
              {locale === 'ht' ? 'Klike pou wè tradiksyon an' : 'Cliquez pour voir la traduction'}
            </div>
          )}
          
          {/* Controls */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={previousWord}
              disabled={currentWord === 0}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'ht' ? 'Anvan' : 'Précédent'}
            </button>
            
            <button
              onClick={nextWord}
              disabled={currentWord === vocabularyWords.length - 1}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 flex items-center gap-2"
            >
              {locale === 'ht' ? 'Suivan' : 'Suivant'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button
              onClick={playPronunciation}
              disabled={audioPlaying}
              className={`px-4 py-2 text-white rounded-lg flex items-center gap-2 transition-colors ${
                audioPlaying ? 'bg-orange-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {audioPlaying ? (
                <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              )}
              {audioPlaying ? (locale === 'ht' ? 'K ap jwe...' : 'Lecture...') : (locale === 'ht' ? 'Pwononsye' : 'Prononcer')}
            </button>
            
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              {locale === 'ht' ? 'Reset' : 'Recommencer'}
            </button>
          </div>
        </div>
        
        {/* Word details */}
        {showTranslation && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">English</h5>
                <p className="text-lg">{vocabularyWords[currentWord].english}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Kreyòl</h5>
                <p className="text-lg">{vocabularyWords[currentWord].creole}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Français</h5>
                <p className="text-lg">{vocabularyWords[currentWord].french}</p>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="font-semibold text-gray-900 mb-1">
                {locale === 'ht' ? 'Pwononsyasyon' : 'Pronunciation'}
              </h5>
              <p className="text-gray-600 italic">[{vocabularyWords[currentWord].pronunciation}]</p>
            </div>
          </div>
        )}
        
        {/* Progress summary */}
        <div className="mt-4 text-center text-gray-600">
          {locale === 'ht' 
            ? `Ou gen ${score} pwen nan ${vocabularyWords.length} mo yo`
            : `Vous avez ${score} points sur ${vocabularyWords.length} mots`
          }
        </div>
      </div>
    </div>
  );
}