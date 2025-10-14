'use client';
import { useRef, useEffect, useState } from 'react';
import { useLocale } from '../LocaleProvider';
import { useAudio } from '@/hooks/useAudio';

interface SoundWave {
  x: number;
  y: number;
  width: number;
  height: number;
  frequency: number;
  amplitude: number;
  phase: number;
  color: string;
}

interface PhonemeData {
  symbol: string;
  example: string;
  exampleHt: string;
  exampleFr: string;
  description: string;
  descriptionHt: string;
  descriptionFr: string;
  color: string;
  wavePattern: 'sine' | 'sawtooth' | 'square';
}

export default function PronunciationPractice() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPhoneme, setCurrentPhoneme] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [soundWaves, setSoundWaves] = useState<SoundWave[]>([]);
  const locale = useLocale();
  const { playText, isPlaying: audioPlaying } = useAudio();

  const phonemes: PhonemeData[] = [
    {
      symbol: '/ɔ/',
      example: 'law',
      exampleHt: 'lwa',
      exampleFr: 'loi',
      description: 'Open back rounded vowel',
      descriptionHt: 'Vokèl ki ouvè nan dèyè ak bouch ki won',
      descriptionFr: 'Voyelle postérieure ouverte arrondie',
      color: '#EF4444',
      wavePattern: 'sine'
    },
    {
      symbol: '/θ/',
      example: 'think',
      exampleHt: 'panse',
      exampleFr: 'penser',
      description: 'Voiceless dental fricative',
      descriptionHt: 'Son san vwa yo fè ak dan yo',
      descriptionFr: 'Fricative dentale sourde',
      color: '#3B82F6',
      wavePattern: 'sawtooth'
    },
    {
      symbol: '/r/',
      example: 'red',
      exampleHt: 'wouj',
      exampleFr: 'rouge',
      description: 'Alveolar approximant',
      descriptionHt: 'Son yo fè ak bout lang lan',
      descriptionFr: 'Approximante alvéolaire',
      color: '#10B981',
      wavePattern: 'square'
    },
    {
      symbol: '/aɪ/',
      example: 'my',
      exampleHt: 'pa m',
      exampleFr: 'mon/ma',
      description: 'Diphthong - vowel glide',
      descriptionHt: 'Dèy son vokèl yo melanje',
      descriptionFr: 'Diphtongue - glissement vocalique',
      color: '#8B5CF6',
      wavePattern: 'sine'
    }
  ];

  const createSoundWave = (phoneme: PhonemeData, index: number): SoundWave => ({
    x: 50,
    y: 150 + index * 60,
    width: 500,
    height: 40,
    frequency: 0.02 + index * 0.01,
    amplitude: 15 + Math.random() * 10,
    phase: 0,
    color: phoneme.color
  });

  const drawMouth = (ctx: CanvasRenderingContext2D, phoneme: PhonemeData, isActive: boolean) => {
    const centerX = 150;
    const centerY = 100;
    const size = isActive ? 80 : 70;
    
    // Face outline
    ctx.strokeStyle = '#D1D5DB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Mouth shape based on phoneme
    ctx.strokeStyle = phoneme.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    
    const mouthY = centerY + 20;
    
    switch (phoneme.symbol) {
      case '/ɔ/':
        // Open rounded mouth
        ctx.arc(centerX, mouthY, 15, 0, Math.PI);
        break;
      case '/θ/':
        // Tongue between teeth
        ctx.moveTo(centerX - 10, mouthY);
        ctx.lineTo(centerX + 10, mouthY);
        ctx.moveTo(centerX, mouthY - 5);
        ctx.lineTo(centerX, mouthY + 5);
        break;
      case '/r/':
        // Slightly open, lips not rounded
        ctx.moveTo(centerX - 12, mouthY);
        ctx.quadraticCurveTo(centerX, mouthY + 8, centerX + 12, mouthY);
        break;
      case '/aɪ/':
        // Starting wide, ending narrow
        ctx.moveTo(centerX - 15, mouthY);
        ctx.quadraticCurveTo(centerX, mouthY + 10, centerX + 5, mouthY - 2);
        break;
      default:
        ctx.arc(centerX, mouthY, 8, 0, Math.PI);
    }
    ctx.stroke();
    
    // Phoneme symbol
    ctx.fillStyle = phoneme.color;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(phoneme.symbol, centerX, centerY - size - 20);
  };

  const drawWaveform = (ctx: CanvasRenderingContext2D, wave: SoundWave, time: number) => {
    ctx.strokeStyle = wave.color + (isPlaying ? 'FF' : '80');
    ctx.lineWidth = isPlaying ? 3 : 2;
    ctx.beginPath();
    
    const points = 200;
    for (let i = 0; i < points; i++) {
      const x = wave.x + (i / points) * wave.width;
      let y = wave.y;
      
      switch (wave.wavePattern) {
        case 'sine':
          y += Math.sin(i * wave.frequency + time * 0.05 + wave.phase) * wave.amplitude;
          break;
        case 'sawtooth':
          y += ((i * wave.frequency + time * 0.05) % (2 * Math.PI) - Math.PI) / Math.PI * wave.amplitude;
          break;
        case 'square':
          y += Math.sign(Math.sin(i * wave.frequency + time * 0.05)) * wave.amplitude;
          break;
      }
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Wave label
    ctx.fillStyle = wave.color;
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(phonemes[currentPhoneme].symbol, wave.x, wave.y - 10);
  };

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

  const drawAccuracyMeter = (ctx: CanvasRenderingContext2D) => {
    if (accuracy === null) return;
    
    const meterX = 400;
    const meterY = 50;
    const meterWidth = 150;
    const meterHeight = 20;
    
    // Background
    ctx.fillStyle = '#E5E7EB';
    drawRoundedRect(ctx, meterX, meterY, meterWidth, meterHeight, 10);
    ctx.fill();
    
    // Accuracy bar
    const accuracyWidth = (accuracy / 100) * meterWidth;
    let color = '#EF4444'; // Red for low accuracy
    if (accuracy > 70) color = '#F59E0B'; // Yellow for medium
    if (accuracy > 85) color = '#10B981'; // Green for high
    
    ctx.fillStyle = color;
    drawRoundedRect(ctx, meterX, meterY, accuracyWidth, meterHeight, 10);
    ctx.fill();
    
    // Text
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${locale === 'ht' ? 'Presis' : 'Précision'}: ${accuracy}%`,
      meterX + meterWidth / 2,
      meterY + meterHeight + 20
    );
  };

  const drawInstructions = (ctx: CanvasRenderingContext2D) => {
    const phoneme = phonemes[currentPhoneme];
    
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    
    const instructions = [
      `${locale === 'ht' ? 'Egzanp' : 'Exemple'}: "${locale === 'ht' ? phoneme.exampleHt : phoneme.exampleFr}"`,
      locale === 'ht' ? phoneme.descriptionHt : phoneme.descriptionFr
    ];
    
    instructions.forEach((instruction, index) => {
      ctx.fillText(instruction, 50, 350 + index * 25);
    });
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

    const time = Date.now();
    const phoneme = phonemes[currentPhoneme];

    // Draw mouth diagram
    drawMouth(ctx, phoneme, isPlaying || isRecording);

    // Draw waveform
    if (soundWaves.length > 0) {
      soundWaves.forEach(wave => drawWaveform(ctx, wave, time));
    }

    // Draw accuracy meter
    drawAccuracyMeter(ctx);

    // Draw instructions
    drawInstructions(ctx);

    // Recording indicator
    if (isRecording) {
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(canvas.width - 30, 30, 8, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#374151';
      ctx.font = '12px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(
        locale === 'ht' ? 'K ap anrejistre...' : 'Enregistrement...',
        canvas.width - 45,
        35
      );
    }

    requestAnimationFrame(animate);
  };

  const startRecording = () => {
    setIsRecording(true);
    setAccuracy(null);
    
    // Create wave visualization
    const wave = createSoundWave(phonemes[currentPhoneme], 0);
    setSoundWaves([wave]);
    
    // Simulate recording for 3 seconds
    setTimeout(() => {
      stopRecording();
    }, 3000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    
    // Simulate pronunciation accuracy analysis
    const randomAccuracy = Math.floor(Math.random() * 40) + 60; // 60-100%
    setTimeout(() => {
      setAccuracy(randomAccuracy);
    }, 500);
  };

  const playExample = () => {
    const phoneme = phonemes[currentPhoneme];
    const textToPlay = phoneme.example;
    
    // Play text-to-speech
    playText(textToPlay, 'en-US');
    console.log('PronunciationPractice: Playing example:', textToPlay);
    
    setIsPlaying(true);
    
    // Create example wave
    const wave = createSoundWave(phonemes[currentPhoneme], 0);
    setSoundWaves([wave]);
    
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  const nextPhoneme = () => {
    if (currentPhoneme < phonemes.length - 1) {
      setCurrentPhoneme(prev => prev + 1);
      setSoundWaves([]);
      setAccuracy(null);
    }
  };

  const previousPhoneme = () => {
    if (currentPhoneme > 0) {
      setCurrentPhoneme(prev => prev - 1);
      setSoundWaves([]);
      setAccuracy(null);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 450;
      animate();
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {locale === 'ht' ? 'Pratik Pwononsyasyon ak Vizyèl' : 'Pratique Prononciation avec Visualisation'}
        </h3>
        
        <div className="relative">
          <canvas 
            ref={canvasRef}
            className="w-full border-2 border-gray-200 rounded-lg"
            style={{ maxWidth: '600px', height: 'auto' }}
          />
          
          {/* Controls */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={playExample}
              disabled={isPlaying || audioPlaying}
              className={`px-4 py-2 text-white rounded-lg flex items-center gap-2 transition-colors ${
                audioPlaying ? 'bg-orange-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
              } disabled:opacity-50`}
            >
              {audioPlaying ? (
                <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
              {audioPlaying ? (locale === 'ht' ? 'K ap jwe...' : 'Lecture...') : (locale === 'ht' ? 'Konte Egzanp' : 'Écouter Exemple')}
            </button>
            
            <button
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isPlaying}
              className={`px-4 py-2 rounded-lg text-white flex items-center gap-2 ${
                isRecording 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } disabled:opacity-50`}
            >
              {isRecording ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z"/>
                  </svg>
                  {locale === 'ht' ? 'Rete' : 'Arrêter'}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a3 3 0 003 3v6a3 3 0 01-6 0V5a3 3 0 013-3zM19 10v1a7 7 0 11-14 0v-1"/>
                  </svg>
                  {locale === 'ht' ? 'Anrejistre' : 'Enregistrer'}
                </>
              )}
            </button>
            
            <button
              onClick={previousPhoneme}
              disabled={currentPhoneme === 0}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
              {locale === 'ht' ? '← Anvan' : '← Précédent'}
            </button>
            
            <button
              onClick={nextPhoneme}
              disabled={currentPhoneme === phonemes.length - 1}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            >
              {locale === 'ht' ? 'Suivan →' : 'Suivant →'}
            </button>
          </div>
        </div>
        
        {/* Phoneme details */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {locale === 'ht' ? 'Senbòl Fonetik' : 'Symbole Phonétique'}
              </h5>
              <p className="text-2xl font-mono text-blue-600 mb-2">
                {phonemes[currentPhoneme].symbol}
              </p>
              <p className="text-gray-600">
                {locale === 'ht' ? phonemes[currentPhoneme].descriptionHt : phonemes[currentPhoneme].descriptionFr}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {locale === 'ht' ? 'Egzanp' : 'Exemple'}
              </h5>
              <div className="space-y-1">
                <p><span className="font-medium">English:</span> {phonemes[currentPhoneme].example}</p>
                <p><span className="font-medium">Kreyòl:</span> {phonemes[currentPhoneme].exampleHt}</p>
                <p><span className="font-medium">Français:</span> {phonemes[currentPhoneme].exampleFr}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feedback */}
        {accuracy !== null && (
          <div className={`mt-4 p-4 rounded-lg ${
            accuracy >= 85 
              ? 'bg-green-50 border border-green-200' 
              : accuracy >= 70 
                ? 'bg-yellow-50 border border-yellow-200'
                : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                accuracy >= 85 ? 'bg-green-500' : accuracy >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                <span className="text-white font-bold">{accuracy}</span>
              </div>
              <div>
                <p className={`font-semibold ${
                  accuracy >= 85 ? 'text-green-800' : accuracy >= 70 ? 'text-yellow-800' : 'text-red-800'
                }`}>
                  {accuracy >= 85 
                    ? (locale === 'ht' ? 'Egselan!' : 'Excellent!')
                    : accuracy >= 70 
                      ? (locale === 'ht' ? 'Bon!' : 'Bien!')
                      : (locale === 'ht' ? 'Kontinye pratike!' : 'Continuez à pratiquer!')
                  }
                </p>
                <p className="text-sm text-gray-600">
                  {locale === 'ht' 
                    ? 'Pwononsyasyon ou gen ' + accuracy + '% presizyon'
                    : 'Votre prononciation a ' + accuracy + '% de précision'
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