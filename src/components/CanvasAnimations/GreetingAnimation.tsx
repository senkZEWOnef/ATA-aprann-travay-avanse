'use client';
import { useRef, useEffect, useState } from 'react';
import { useLocale } from '../LocaleProvider';
import { useAudio } from '@/hooks/useAudio';

interface Character {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  expression: 'neutral' | 'happy' | 'talking';
  name: string;
}

interface AnimationStep {
  type: 'move' | 'speak' | 'expression' | 'highlight';
  character?: string;
  text?: string;
  textHt?: string;
  textFr?: string;
  duration: number;
  expression?: 'neutral' | 'happy' | 'talking';
}

export default function GreetingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const locale = useLocale();
  const { playText, isPlaying: audioPlaying } = useAudio();

  const characters: Record<string, Character> = {
    client: {
      x: 150,
      y: 200,
      width: 80,
      height: 120,
      color: '#4F46E5',
      expression: 'neutral',
      name: locale === 'ht' ? 'Kliyèn' : 'Client'
    },
    interpreter: {
      x: 450,
      y: 200,
      width: 80,
      height: 120,
      color: '#059669',
      expression: 'neutral',
      name: locale === 'ht' ? 'Entèprèt' : 'Interprète'
    }
  };

  const animationSteps: AnimationStep[] = [
    {
      type: 'expression',
      character: 'client',
      expression: 'happy',
      duration: 500
    },
    {
      type: 'speak',
      character: 'client',
      text: 'Good morning!',
      textHt: 'Bonjou!',
      textFr: 'Bonjour!',
      duration: 2000,
      expression: 'talking'
    },
    {
      type: 'expression',
      character: 'interpreter',
      expression: 'happy',
      duration: 500
    },
    {
      type: 'speak',
      character: 'interpreter',
      text: 'Good morning! How can I help you today?',
      textHt: 'Bonjou! Kijan m ka ede w jodi a?',
      textFr: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
      duration: 3000,
      expression: 'talking'
    },
    {
      type: 'speak',
      character: 'client',
      text: 'I need help with my appointment.',
      textHt: 'Mwen bezwen èd ak randevou m nan.',
      textFr: 'J\'ai besoin d\'aide avec mon rendez-vous.',
      duration: 3000,
      expression: 'talking'
    },
    {
      type: 'highlight',
      text: 'Professional greeting establishes trust',
      textHt: 'Salitasyon pwofesyonèl etabli konfyans',
      textFr: 'La salutation professionnelle établit la confiance',
      duration: 2000
    }
  ];

  const drawCharacter = (ctx: CanvasRenderingContext2D, character: Character) => {
    // Body
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x, character.y + 40, character.width, character.height - 40);
    
    // Head
    ctx.beginPath();
    ctx.arc(character.x + character.width / 2, character.y + 20, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#F3E8AB'; // Skin color
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    const eyeY = character.y + 15;
    ctx.beginPath();
    ctx.arc(character.x + character.width / 2 - 6, eyeY, 2, 0, 2 * Math.PI);
    ctx.arc(character.x + character.width / 2 + 6, eyeY, 2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Mouth based on expression
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const mouthX = character.x + character.width / 2;
    const mouthY = character.y + 25;
    
    switch (character.expression) {
      case 'happy':
        ctx.arc(mouthX, mouthY - 2, 4, 0, Math.PI);
        break;
      case 'talking':
        ctx.ellipse(mouthX, mouthY, 3, 2, 0, 0, 2 * Math.PI);
        break;
      default:
        ctx.moveTo(mouthX - 4, mouthY);
        ctx.lineTo(mouthX + 4, mouthY);
    }
    ctx.stroke();
    
    // Arms
    ctx.strokeStyle = character.color;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(character.x + 10, character.y + 60);
    ctx.lineTo(character.x - 10, character.y + 80);
    ctx.moveTo(character.x + character.width - 10, character.y + 60);
    ctx.lineTo(character.x + character.width + 10, character.y + 80);
    ctx.stroke();
    
    // Name label
    ctx.fillStyle = '#374151';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(character.name, character.x + character.width / 2, character.y + character.height + 20);
  };

  const drawSpeechBubble = (
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    text: string, 
    width: number = 200
  ) => {
    const padding = 15;
    const lines = text.split('\n');
    const lineHeight = 16;
    const bubbleHeight = lines.length * lineHeight + padding * 2;
    
    // Bubble background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.strokeStyle = '#D1D5DB';
    ctx.lineWidth = 2;
    
    // Rounded rectangle
    ctx.beginPath();
    ctx.roundRect(x, y, width, bubbleHeight, 8);
    ctx.fill();
    ctx.stroke();
    
    // Bubble tail
    ctx.beginPath();
    ctx.moveTo(x + 30, y + bubbleHeight);
    ctx.lineTo(x + 40, y + bubbleHeight + 10);
    ctx.lineTo(x + 50, y + bubbleHeight);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Text
    ctx.fillStyle = '#374151';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    
    lines.forEach((line, index) => {
      ctx.fillText(line, x + padding, y + padding + 14 + index * lineHeight);
    });
  };

  const drawHighlight = (ctx: CanvasRenderingContext2D, text: string) => {
    const canvas = ctx.canvas;
    ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
    ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height - 30);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#F0F9FF');
    gradient.addColorStop(1, '#E0F2FE');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw setting (office environment)
    ctx.fillStyle = '#8B5CF6';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50); // Floor
    
    // Desk
    ctx.fillStyle = '#92400E';
    ctx.fillRect(200, canvas.height - 80, 200, 10);
    
    // Draw characters
    Object.values(characters).forEach(character => {
      drawCharacter(ctx, character);
    });
    
    // Draw current step animation
    if (isPlaying && currentStep < animationSteps.length) {
      const step = animationSteps[currentStep];
      
      if (step.type === 'speak' && step.character) {
        const character = characters[step.character];
        const displayText = locale === 'ht' ? 
          (step.textHt || step.text) : 
          (step.textFr || step.text);
        
        if (displayText) {
          drawSpeechBubble(
            ctx,
            character.x - 50,
            character.y - 80,
            displayText
          );
        }
        
        // Update character expression
        character.expression = step.expression || 'talking';
      } else if (step.type === 'highlight') {
        const displayText = locale === 'ht' ? 
          (step.textHt || step.text) : 
          (step.textFr || step.text);
        
        if (displayText) {
          drawHighlight(ctx, displayText);
        }
      }
    }
    
    requestAnimationFrame(animate);
  };

  const playAnimation = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const playStep = (stepIndex: number) => {
      if (stepIndex >= animationSteps.length) {
        setIsPlaying(false);
        return;
      }
      
      const step = animationSteps[stepIndex];
      setCurrentStep(stepIndex);
      
      // Reset character expressions
      Object.values(characters).forEach(char => {
        char.expression = 'neutral';
      });
      
      // Apply step changes
      if (step.character && step.expression) {
        characters[step.character].expression = step.expression;
      }
      
      // Play text-to-speech for dialogue
      if (step.type === 'speak' && step.text) {
        const textToPlay = locale === 'ht' ? (step.textHt || step.text) : (step.textFr || step.text);
        playText(textToPlay, 'en-US');
        console.log('GreetingAnimation: Playing dialogue:', textToPlay);
      }
      
      setTimeout(() => {
        playStep(stepIndex + 1);
      }, step.duration);
    };
    
    playStep(0);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    Object.values(characters).forEach(char => {
      char.expression = 'neutral';
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 400;
      console.log('GreetingAnimation: Canvas initialized and animation started');
      animate();
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      console.log('GreetingAnimation: Animation playing, current step:', currentStep);
    }
  }, [isPlaying, currentStep]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {locale === 'ht' ? 'Animasyon: Salitasyon Pwofesyonèl' : 'Animation: Salutation Professionnelle'}
        </h3>
        
        <div className="relative">
          <canvas 
            ref={canvasRef}
            className="w-full border-2 border-gray-200 rounded-lg"
            style={{ maxWidth: '600px', height: 'auto' }}
          />
          
          {/* Controls */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={playAnimation}
              disabled={isPlaying || audioPlaying}
              className={`px-6 py-2 text-white rounded-lg flex items-center gap-2 transition-colors ${
                audioPlaying ? 'bg-orange-500 animate-pulse' : 'bg-primary-500 hover:bg-primary-600'
              } disabled:opacity-50`}
            >
              {audioPlaying ? (
                <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
              {audioPlaying ? (locale === 'ht' ? 'K ap jwe...' : 'Lecture...') : (locale === 'ht' ? 'Jwe Animasyon' : 'Jouer Animation')}
            </button>
            
            <button
              onClick={resetAnimation}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              {locale === 'ht' ? 'Reset' : 'Réinitialiser'}
            </button>
            
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showSubtitles 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {locale === 'ht' ? 'Soutit' : 'Sous-titres'}
            </button>
          </div>
        </div>
        
        {/* Learning Points */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">
            {locale === 'ht' ? 'Pwen Enpòtan yo:' : 'Points Clés:'}
          </h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• {locale === 'ht' 
              ? 'Kòmanse ak yon salitasyon ki gen respè' 
              : 'Commencez par une salutation respectueuse'
            }</li>
            <li>• {locale === 'ht' 
              ? 'Montre ou disponib pou ede' 
              : 'Montrez votre disponibilité à aider'
            }</li>
            <li>• {locale === 'ht' 
              ? 'Kenbe yon ton pwofesyonèl ak byen vale' 
              : 'Maintenez un ton professionnel et bienveillant'
            }</li>
          </ul>
        </div>
      </div>
    </div>
  );
}