'use client';
import { useState, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import type { ComprehensiveLessonContent } from '@/data/comprehensiveLessons';
import { useAudio } from '@/hooks/useAudio';

interface ComprehensiveLessonPlayerProps {
  lesson: ComprehensiveLessonContent;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

type LessonSection = 'intro' | 'preparation' | 'reading' | 'vocabulary' | 'listening' | 'roleplay' | 'grammar' | 'speaking' | 'writing' | 'interactive' | 'quiz' | 'practical' | 'homework' | 'complete';

export default function ComprehensiveLessonPlayer({ lesson, onComplete, onProgress }: ComprehensiveLessonPlayerProps) {
  const [currentSection, setCurrentSection] = useState<LessonSection>('intro');
  const [currentVocabIndex, setCurrentVocabIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<(number | string)[]>([]);
  const [progress, setProgress] = useState(0);
  const [readingCompleted, setReadingCompleted] = useState(false);
  const locale = useLocale();
  const { playText, isPlaying: audioPlaying } = useAudio();

  const sections: LessonSection[] = ['intro', 'preparation', 'reading', 'vocabulary', 'listening', 'roleplay', 'grammar', 'speaking', 'writing', 'interactive', 'quiz', 'practical', 'homework', 'complete'];

  useEffect(() => {
    const currentIndex = sections.indexOf(currentSection);
    const progressPercent = ((currentIndex + 1) / sections.length) * 100;
    setProgress(progressPercent);
    onProgress?.(progressPercent);
  }, [currentSection, onProgress]);

  const nextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    } else {
      onComplete?.();
    }
  };

  const prevSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  const renderIntro = () => (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {locale === 'ht' ? lesson.titleHt : lesson.titleFr}
      </h1>
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <p className="text-lg text-gray-700 mb-4">
          {locale === 'ht' ? lesson.description.ht : lesson.description.fr}
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span>⏱️ {lesson.estimatedDuration} minit</span>
          <span>📚 Nivo: Entèmèd</span>
        </div>
      </div>
    </div>
  );

  const renderReading = () => (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">
        📖 {locale === 'ht' ? 'Lektè Preparasyon' : 'Lecture de Préparation'}
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          {locale === 'ht' ? lesson.preparation.readingPassage.titleHt : lesson.preparation.readingPassage.titleFr}
        </h3>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {locale === 'ht' ? lesson.preparation.readingPassage.contentHt : lesson.preparation.readingPassage.contentFr}
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              const text = locale === 'ht' ? lesson.preparation.readingPassage.contentHt : lesson.preparation.readingPassage.contentFr;
              playText(text);
            }}
            disabled={audioPlaying}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {audioPlaying ? '🔊 K ap jwe...' : '🔊 Tande nan angle'}
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => setReadingCompleted(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            ✓ {locale === 'ht' ? 'Mwen fini li' : 'J\'ai terminé la lecture'}
          </button>
        </div>
      </div>
    </div>
  );

  const renderVocabulary = () => {
    const vocab = lesson.preparation.vocabulary[currentVocabIndex];
    if (!vocab) return null;

    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          📝 {locale === 'ht' ? 'Vokabilè Nouvo' : 'Nouveau Vocabulaire'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              {currentVocabIndex + 1} / {lesson.preparation.vocabulary.length}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${ 
              vocab.difficulty === 'basic' ? 'bg-green-100 text-green-800' :
              vocab.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {vocab.difficulty}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{vocab.english}</h3>
              <p className="text-gray-600 mb-2">🗣️ {vocab.pronunciation}</p>
              <p className="text-lg mb-4">
                <strong>{locale === 'ht' ? 'Kreyòl:' : 'Créole:'}</strong> {vocab.ht}<br/>
                <strong>{locale === 'ht' ? 'Fransè:' : 'Français:'}</strong> {vocab.fr}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Definisyon:' : 'Définition:'}</h4>
              <p className="text-gray-700 mb-4">
                {locale === 'ht' ? vocab.definition.ht : vocab.definition.fr}
              </p>
              
              <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Egzanp:' : 'Exemple:'}</h4>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium">{vocab.exampleSentence.english}</p>
                <p className="text-sm text-gray-600">
                  {locale === 'ht' ? vocab.exampleSentence.ht : vocab.exampleSentence.fr}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => playText(vocab.english)}
              disabled={audioPlaying}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              🔊 {audioPlaying ? 'K ap jwe...' : 'Tande'}
            </button>
            
            {currentVocabIndex > 0 && (
              <button
                onClick={() => setCurrentVocabIndex(currentVocabIndex - 1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                ← {locale === 'ht' ? 'Anvan' : 'Précédent'}
              </button>
            )}
            
            {currentVocabIndex < lesson.preparation.vocabulary.length - 1 ? (
              <button
                onClick={() => setCurrentVocabIndex(currentVocabIndex + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {locale === 'ht' ? 'Pwochen' : 'Suivant'} →
              </button>
            ) : (
              <button
                onClick={nextSection}
                className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
              >
                {locale === 'ht' ? 'Kontinye ak egzèsis yo' : 'Continuer aux exercices'} →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!lesson.assessment.quiz.length) return null;
    
    const quiz = lesson.assessment.quiz[currentQuizIndex];
    
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🧠 {locale === 'ht' ? 'Quiz ak Evalyasyon' : 'Quiz et Évaluation'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              {locale === 'ht' ? 'Kesyon' : 'Question'} {currentQuizIndex + 1} / {lesson.assessment.quiz.length}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-6">
            {locale === 'ht' ? quiz.questionHt : quiz.questionFr}
          </h3>
          
          {quiz.type === 'multiple-choice' && quiz.options && (
            <div className="space-y-3 mb-6">
              {quiz.options.map((option, index) => (
                <label key={index} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={`quiz-${currentQuizIndex}`}
                    value={index}
                    onChange={(e) => handleQuizAnswer(currentQuizIndex, parseInt(e.target.value))}
                    className="mr-3"
                  />
                  <span>{locale === 'ht' ? option.ht : option.fr}</span>
                </label>
              ))}
            </div>
          )}
          
          {quiz.type === 'fill-blank' && (
            <div className="mb-6">
              <input
                type="text"
                placeholder={locale === 'ht' ? 'Ekri reponn ou...' : 'Écrivez votre réponse...'}
                onChange={(e) => handleQuizAnswer(currentQuizIndex, e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}
          
          <div className="flex gap-4">
            {currentQuizIndex > 0 && (
              <button
                onClick={() => setCurrentQuizIndex(currentQuizIndex - 1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                ← {locale === 'ht' ? 'Anvan' : 'Précédent'}
              </button>
            )}
            
            {currentQuizIndex < lesson.assessment.quiz.length - 1 ? (
              <button
                onClick={() => setCurrentQuizIndex(currentQuizIndex + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {locale === 'ht' ? 'Pwochen' : 'Suivant'} →
              </button>
            ) : (
              <button
                onClick={nextSection}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                {locale === 'ht' ? 'Fini Quiz la' : 'Terminer le Quiz'} ✓
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleQuizAnswer = (questionIndex: number, answer: number | string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const renderListening = () => {
    if (!lesson.mainContent.listeningExercises.length) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">
            {locale === 'ht' ? 'Pa gen egzèsis koute pou leson sa a.' : 'Pas d\'exercices d\'écoute pour cette leçon.'}
          </p>
          <button
            onClick={nextSection}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {locale === 'ht' ? 'Kontinye' : 'Continuer'} →
          </button>
        </div>
      );
    }

    const exercise = lesson.mainContent.listeningExercises[0];
    
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🎧 {locale === 'ht' ? 'Egzèsis Koute' : 'Exercices d\'Écoute'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <button
              onClick={() => {
                const text = locale === 'ht' ? exercise.transcriptHt : exercise.transcriptFr;
                playText(text);
              }}
              disabled={audioPlaying}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 text-lg"
            >
              {audioPlaying ? '🔊 K ap jwe...' : '🔊 Koute konvèsasyon an'}
            </button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">{locale === 'ht' ? 'Transkripsyon:' : 'Transcription:'}</h3>
            <p className="text-gray-700">
              {locale === 'ht' ? exercise.transcriptHt : exercise.transcriptFr}
            </p>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            {locale === 'ht' ? 'Kontinye ak wòl yo' : 'Continuer aux jeux de rôle'} →
          </button>
        </div>
      </div>
    );
  };

  const renderRoleplay = () => {
    if (!lesson.mainContent.roleplayScenarios.length) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">
            {locale === 'ht' ? 'Pa gen senaryo wòl pou leson sa a.' : 'Pas de scénarios de jeu de rôle pour cette leçon.'}
          </p>
          <button
            onClick={nextSection}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {locale === 'ht' ? 'Kontinye' : 'Continuer'} →
          </button>
        </div>
      );
    }

    const scenario = lesson.mainContent.roleplayScenarios[0];
    
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🎭 {locale === 'ht' ? 'Jwe Wòl' : 'Jeu de Rôle'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">
            {locale === 'ht' ? scenario.title.ht : scenario.title.fr}
          </h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Kontèks:' : 'Contexte:'}</h4>
            <p className="text-gray-700">
              {locale === 'ht' ? scenario.context.ht : scenario.context.fr}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{locale === 'ht' ? 'Patisipan yo:' : 'Participants:'}</h4>
            <div className="flex gap-4">
              {scenario.participants.map((participant, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {participant}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            {scenario.dialogue.map((line, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  {line.speaker === scenario.participants[0] ? '👨‍💼' : '👩‍💼'}
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="font-semibold text-sm text-gray-600 mb-1">{line.speaker}</div>
                    <div className="text-lg mb-2">{line.english}</div>
                    <div className="text-gray-600">
                      {locale === 'ht' ? line.ht : line.fr}
                    </div>
                  </div>
                  <button
                    onClick={() => playText(line.english)}
                    className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
                  >
                    🔊 {locale === 'ht' ? 'Koute' : 'Écouter'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={nextSection}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
          >
            {locale === 'ht' ? 'Kontinye ak gramè' : 'Continuer à la grammaire'} →
          </button>
        </div>
      </div>
    );
  };

  const renderGrammar = () => {
    const grammar = lesson.mainContent.grammarFocus;
    
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          📝 {locale === 'ht' ? 'Konsè Gramè' : 'Focus Grammaire'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            {locale === 'ht' ? grammar.topic.ht : grammar.topic.fr}
          </h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Eksplikasyon:' : 'Explication:'}</h4>
            <p className="text-gray-700">
              {locale === 'ht' ? grammar.explanation.ht : grammar.explanation.fr}
            </p>
          </div>
          
          {grammar.examples && grammar.examples.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3">{locale === 'ht' ? 'Egzanp yo:' : 'Exemples:'}</h4>
              <div className="space-y-3">
                {grammar.examples.map((example, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-4">
                    <div className="font-medium text-lg">{example.english}</div>
                    <div className="text-gray-600">
                      {locale === 'ht' ? example.ht : example.fr}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {locale === 'ht' ? example.explanation.ht : example.explanation.fr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button
            onClick={nextSection}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            {locale === 'ht' ? 'Kontinye ak pratik' : 'Continuer à la pratique'} →
          </button>
        </div>
      </div>
    );
  };

  const renderSpeaking = () => {
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🗣️ {locale === 'ht' ? 'Pratik Pale' : 'Pratique Orale'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-4">
              {locale === 'ht' ? 'Pratike Pwononsyasyon' : 'Pratiquez la Prononciation'}
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'ht' ? 'Repete fraz yo ak konfi ak konfyans.' : 'Répétez les phrases avec confiance.'}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-medium mb-2">Good morning! How can I help you today?</p>
              <p className="text-gray-600">
                {locale === 'ht' ? 'Bon maten! Kijan m ka ede w jodi a?' : 'Bonjour! Comment puis-je vous aider aujourd\'hui?'}
              </p>
            </div>
            
            <button
              onClick={() => playText("Good morning! How can I help you today?")}
              disabled={audioPlaying}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 mb-4"
            >
              {audioPlaying ? '🔊 K ap jwe...' : '🔊 Koute egzanp lan'}
            </button>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            {locale === 'ht' ? 'Kontinye ak ekri' : 'Continuer à l\'écriture'} →
          </button>
        </div>
      </div>
    );
  };

  const renderWriting = () => {
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          ✍️ {locale === 'ht' ? 'Egzèsis Ekri' : 'Exercices d\'Écriture'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            {locale === 'ht' ? 'Ekri yon konvèsasyon pwofesyonèl' : 'Rédigez une conversation professionnelle'}
          </h3>
          
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              {locale === 'ht' ? 'Imajine ou ap aksèy yon kliyan nouvo nan biwo a. Ekri yon konvèsasyon kout.' : 'Imaginez que vous accueillez un nouveau client au bureau. Rédigez une courte conversation.'}
            </p>
          </div>
          
          <textarea
            className="w-full h-32 p-4 border rounded-lg mb-4"
            placeholder={locale === 'ht' ? 'Ekri konvèsasyon ou a isit la...' : 'Rédigez votre conversation ici...'}
          />
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Egzanp:' : 'Exemple:'}</h4>
            <p className="text-sm text-gray-700">
              <strong>You:</strong> Good morning! Welcome to our office.<br/>
              <strong>Client:</strong> Thank you. I have an appointment at 10 AM.<br/>
              <strong>You:</strong> Perfect! May I have your name please?
            </p>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
          >
            {locale === 'ht' ? 'Kontinye ak aktivite yo' : 'Continuer aux activités'} →
          </button>
        </div>
      </div>
    );
  };

  const renderInteractive = () => {
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🎮 {locale === 'ht' ? 'Aktivite Entèraktif' : 'Activités Interactives'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-pink-600">
            {locale === 'ht' ? 'Matche Mo yo' : 'Associez les Mots'}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {locale === 'ht' ? 'Konekte mo angle yo ak tradiksyon kreyòl yo.' : 'Connectez les mots anglais avec leurs traductions créoles.'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3">{locale === 'ht' ? 'Angle:' : 'Anglais:'}</h4>
              <div className="space-y-2">
                {['Good morning', 'Welcome', 'Please', 'Thank you'].map((word, index) => (
                  <div key={index} className="bg-blue-100 p-3 rounded-lg cursor-pointer hover:bg-blue-200">
                    {word}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">{locale === 'ht' ? 'Kreyòl:' : 'Créole:'}</h4>
              <div className="space-y-2">
                {['Mèsi', 'Byenvni', 'Bon maten', 'Tanpri'].map((word, index) => (
                  <div key={index} className="bg-green-100 p-3 rounded-lg cursor-pointer hover:bg-green-200">
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              {locale === 'ht' ? 'Klike sou mo yo pou konekte yo.' : 'Cliquez sur les mots pour les connecter.'}
            </p>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
          >
            {locale === 'ht' ? 'Kontinye ak quiz la' : 'Continuer au quiz'} →
          </button>
        </div>
      </div>
    );
  };

  const renderPractical = () => {
    const task = lesson.assessment.practicalTask;
    
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          🎯 {locale === 'ht' ? 'Travay Pratik' : 'Tâche Pratique'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-600">
            {locale === 'ht' ? 'Senaryo Reyèl' : 'Scénario Réel'}
          </h3>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Enstriksyon:' : 'Instructions:'}</h4>
            <p className="text-gray-700">
              {locale === 'ht' ? task.instructionHt : task.instructionFr}
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{locale === 'ht' ? 'Senaryo:' : 'Scénario:'}</h4>
            <p className="text-gray-700">
              {locale === 'ht' ? task.scenario.ht : task.scenario.fr}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{locale === 'ht' ? 'Kritè Evalyasyon:' : 'Critères d\'Évaluation:'}</h4>
            <div className="space-y-2">
              {task.evaluation.criteria.map((criterion, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span>{locale === 'ht' ? criterion.ht : criterion.fr}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {criterion.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            {locale === 'ht' ? 'Kontinye ak devwa a' : 'Continuer aux devoirs'} →
          </button>
        </div>
      </div>
    );
  };

  const renderHomework = () => {
    return (
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-4">
          📚 {locale === 'ht' ? 'Devwa ak Aplikasyon' : 'Devoirs et Applications'}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-teal-600">
              {locale === 'ht' ? 'Pratik Chak Jou' : 'Pratique Quotidienne'}
            </h3>
            
            <div className="space-y-4">
              {lesson.homework.dailyPractice.map((practice, index) => (
                <div key={index} className="border-l-4 border-teal-400 pl-4 bg-teal-50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">
                      {locale === 'ht' ? 'Jou' : 'Jour'} {practice.day}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {practice.estimatedTime} min
                    </span>
                  </div>
                  <p className="text-gray-700">
                    {locale === 'ht' ? practice.taskHt : practice.taskFr}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2 text-amber-800">
              {locale === 'ht' ? 'Aplikasyon nan Mond Reyèl:' : 'Application dans le Monde Réel:'}
            </h4>
            <p className="text-amber-700">
              {locale === 'ht' ? lesson.homework.realWorldApplication.taskHt : lesson.homework.realWorldApplication.taskFr}
            </p>
            <p className="text-sm text-amber-600 mt-2">
              Format: {lesson.homework.realWorldApplication.submissionFormat}
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2 text-blue-800">
              {locale === 'ht' ? 'Nòt Kiltirèl:' : 'Notes Culturelles:'}
            </h4>
            <p className="text-blue-700">
              {locale === 'ht' ? lesson.resources.culturalNotes.ht : lesson.resources.culturalNotes.fr}
            </p>
          </div>
          
          <button
            onClick={nextSection}
            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
          >
            {locale === 'ht' ? 'Fini leson an' : 'Terminer la leçon'} ✅
          </button>
        </div>
      </div>
    );
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 'intro':
        return renderIntro();
      case 'preparation':
        return (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'ht' ? 'Preparasyon' : 'Préparation'}
            </h2>
            <p className="text-gray-600 mb-6">
              {locale === 'ht' ? 'Ann nou prepare pou leson an ak li yon pasaj.' : 'Préparons-nous pour la leçon en lisant un passage.'}
            </p>
            <button
              onClick={nextSection}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              {locale === 'ht' ? 'Kòmanse li' : 'Commencer la lecture'} →
            </button>
          </div>
        );
      case 'reading':
        return renderReading();
      case 'vocabulary':
        return renderVocabulary();
      case 'listening':
        return renderListening();
      case 'roleplay':
        return renderRoleplay();
      case 'grammar':
        return renderGrammar();
      case 'speaking':
        return renderSpeaking();
      case 'writing':
        return renderWriting();
      case 'interactive':
        return renderInteractive();
      case 'quiz':
        return renderQuiz();
      case 'practical':
        return renderPractical();
      case 'homework':
        return renderHomework();
      case 'complete':
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              {locale === 'ht' ? 'Félisitasyon!' : 'Félicitations!'}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {locale === 'ht' ? 'Ou fini leson sa a ak siksè! Ou te aprann anpil bagay nouvo.' : 'Vous avez terminé cette leçon avec succès! Vous avez appris beaucoup de choses nouvelles.'}
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">{locale === 'ht' ? 'Rezime Leson:' : 'Résumé de la Leçon:'}</h3>
              <p className="text-gray-700">
                {locale === 'ht' ? lesson.description.ht : lesson.description.fr}
              </p>
            </div>
            <button
              onClick={onComplete}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:opacity-90"
            >
              {locale === 'ht' ? 'Ale nan pwochen leson' : 'Aller à la leçon suivante'} →
            </button>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'ht' ? 'Seksyon sa a ap devlope...' : 'Section en développement...'}
            </h2>
            <p className="text-gray-600 mb-6">
              {locale === 'ht' ? 'Nou ap travay sou kontni sa a.' : 'Nous travaillons sur ce contenu.'}
            </p>
            <button
              onClick={nextSection}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              {locale === 'ht' ? 'Kontinye' : 'Continuer'} →
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {renderProgressBar()}
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          {renderSectionContent()}
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <button
            onClick={prevSection}
            disabled={currentSection === 'intro'}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← {locale === 'ht' ? 'Retounen' : 'Retour'}
          </button>
          
          <div className="text-sm text-gray-600">
            {locale === 'ht' ? 'Seksyon' : 'Section'}: {sections.indexOf(currentSection) + 1} / {sections.length}
          </div>
          
          <button
            onClick={nextSection}
            disabled={currentSection === 'complete'}
            className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {locale === 'ht' ? 'Swiv' : 'Suivant'} →
          </button>
        </div>
      </div>
    </div>
  );
}