'use client';
import { useState, useRef, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { pythonWeek1Lesson } from '@/data/pythonWeek1Cards';
import { pythonWeek2Lesson } from '@/data/pythonWeek2Cards';
import { pythonWeek3Lesson } from '@/data/pythonWeek3Cards';
import { pythonWeek4Lesson } from '@/data/pythonWeek4Cards';
import { pythonWeek5Lesson } from '@/data/pythonWeek5Cards';
import { pythonWeek6Lesson } from '@/data/pythonWeek6Cards';
import { pythonWeek7Lesson } from '@/data/pythonWeek7Cards';
import { pythonWeek8Lesson } from '@/data/pythonWeek8Cards';
import { PlayIcon, CheckCircleIcon, LightBulbIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import Editor from '@monaco-editor/react';
import PythonExecutor from './PythonExecutor';

interface PythonMiniProjectProps {
  weekNumber: number;
  onComplete?: () => void;
}

export default function PythonMiniProject({ weekNumber, onComplete }: PythonMiniProjectProps) {
  const [currentTab, setCurrentTab] = useState<'instructions' | 'code' | 'challenges'>('instructions');
  const [userCode, setUserCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [isExecutorReady, setIsExecutorReady] = useState(false);
  const locale = useLocale();
  const outputRef = useRef<string>('');
  const pythonExecutorRef = useRef<any>(null);

  // Get project data based on week number
  const getProjectData = (week: number) => {
    switch (week) {
      case 1:
        return pythonWeek1Lesson.miniProject;
      case 2:
        return pythonWeek2Lesson.miniProject;
      case 3:
        return pythonWeek3Lesson.miniProject;
      case 4:
        return pythonWeek4Lesson.miniProject;
      case 5:
        return pythonWeek5Lesson.miniProject;
      case 6:
        return pythonWeek6Lesson.miniProject;
      case 7:
        return pythonWeek7Lesson.miniProject;
      case 8:
        return pythonWeek8Lesson.miniProject;
      default:
        return pythonWeek1Lesson.miniProject;
    }
  };

  const projectData = getProjectData(weekNumber);

  const getLocalizedText = (textObj: { ht: string; fr: string; en: string }) => {
    if (locale === 'ht') return textObj.ht;
    if (locale === 'fr') return textObj.fr;
    return textObj.en;
  };

  const handlePythonOutput = (outputText: string, isError = false) => {
    outputRef.current += outputText;
    setOutput(outputRef.current);
  };

  const handleExecutionStart = () => {
    setIsRunning(true);
    outputRef.current = '';
    setOutput('');
  };

  const handleExecutionEnd = () => {
    setIsRunning(false);
  };

  const runCode = async () => {
    if (!pythonExecutorRef.current?.isInitialized || !userCode.trim()) return;
    
    try {
      await pythonExecutorRef.current.executeCode(userCode);
    } catch (error) {
      console.error('Execution error:', error);
      handlePythonOutput(`❌ Error: ${error}`, true);
      setIsRunning(false);
    }
  };

  const loadStarterCode = () => {
    setUserCode(projectData.starterCode);
  };

  const loadSampleSolution = () => {
    setUserCode(projectData.sampleSolution);
    setShowSolution(true);
  };

  // Initialize Python executor (hook)
  const pythonExecutor = PythonExecutor({
    onOutput: handlePythonOutput,
    onExecutionStart: handleExecutionStart,
    onExecutionEnd: handleExecutionEnd,
  });

  // Store executor reference and update ready status
  pythonExecutorRef.current = pythonExecutor;
  
  // Use effect to update ready status when executor state changes
  useEffect(() => {
    if (pythonExecutor.isInitialized !== isExecutorReady) {
      setIsExecutorReady(pythonExecutor.isInitialized);
    }
  }, [pythonExecutor.isInitialized, isExecutorReady]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RocketLaunchIcon className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">{getLocalizedText(projectData.title)}</h1>
              <p className="opacity-90 mt-1">{getLocalizedText(projectData.description)}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80">
              {locale === 'ht' ? `Semèn ${weekNumber} Pwojè` : locale === 'fr' ? `Projet Semaine ${weekNumber}` : `Week ${weekNumber} Project`}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setCurrentTab('instructions')}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              currentTab === 'instructions'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            📋 {locale === 'ht' ? 'Enstriksyon' : locale === 'fr' ? 'Instructions' : 'Instructions'}
          </button>
          <button
            onClick={() => setCurrentTab('code')}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              currentTab === 'code'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            💻 {locale === 'ht' ? 'Kòd' : locale === 'fr' ? 'Code' : 'Code'}
          </button>
          <button
            onClick={() => setCurrentTab('challenges')}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              currentTab === 'challenges'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            🏆 {locale === 'ht' ? 'Defi yo' : locale === 'fr' ? 'Défis' : 'Challenges'}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {currentTab === 'instructions' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ClipboardDocumentIcon className="w-6 h-6" />
                {locale === 'ht' ? 'Ki sa ou bezwen fè' : locale === 'fr' ? 'Ce que vous devez faire' : 'What you need to do'}
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {getLocalizedText(projectData.description)}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6" />
                {locale === 'ht' ? 'Egzijans yo' : locale === 'fr' ? 'Exigences' : 'Requirements'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(projectData.requirements?.[locale as keyof typeof projectData.requirements] || projectData.requirements?.en || []).map((requirement: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </span>
                    <span className="text-green-800">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={loadStarterCode}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
              >
                <CodeBracketIcon className="w-5 h-5" />
                {locale === 'ht' ? 'Chaje Kòd Kòmansman' : locale === 'fr' ? 'Charger Code de Départ' : 'Load Starter Code'}
              </button>
              <button
                onClick={() => setCurrentTab('code')}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                {locale === 'ht' ? 'Ale nan Kòd' : locale === 'fr' ? 'Aller au Code' : 'Go to Code'}
              </button>
            </div>
          </div>
        )}

        {currentTab === 'code' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <CodeBracketIcon className="w-6 h-6" />
                    {locale === 'ht' ? 'Editè Kòd' : locale === 'fr' ? 'Éditeur de Code' : 'Code Editor'}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={loadStarterCode}
                      className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      {locale === 'ht' ? 'Starter' : locale === 'fr' ? 'Départ' : 'Starter'}
                    </button>
                    <button
                      onClick={loadSampleSolution}
                      className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                      {locale === 'ht' ? 'Solisyon' : locale === 'fr' ? 'Solution' : 'Solution'}
                    </button>
                    <button
                      onClick={runCode}
                      disabled={isRunning || !userCode.trim() || !isExecutorReady}
                      className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 flex items-center gap-1"
                    >
                      {isRunning ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {locale === 'ht' ? 'K ap kouri...' : locale === 'fr' ? 'Exécution...' : 'Running...'}
                        </>
                      ) : (
                        <>
                          <PlayIcon className="w-4 h-4" />
                          {locale === 'ht' ? 'Kouri' : locale === 'fr' ? 'Exécuter' : 'Run'}
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent">
                  <Editor
                    height="400px"
                    defaultLanguage="python"
                    value={userCode}
                    onChange={(value) => setUserCode(value || '')}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: 'on',
                      wordWrap: 'on',
                      automaticLayout: true,
                      scrollBeyondLastLine: false,
                      renderWhitespace: 'selection',
                      bracketPairColorization: { enabled: true },
                      suggestOnTriggerCharacters: true,
                      quickSuggestions: true,
                      folding: true,
                      foldingHighlight: true,
                      showFoldingControls: 'always',
                      tabSize: 4,
                      insertSpaces: true,
                    }}
                  />
                  
                  {/* Execution Status Indicator */}
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${isExecutorReady ? 'bg-green-400' : 'bg-yellow-400'}`} />
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                      {isExecutorReady ? 'Python Ready' : 'Loading Python...'}
                    </span>
                  </div>
                </div>
                
                {showSolution && (
                  <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-orange-800 text-sm">
                      💡 {locale === 'ht' ? 'Solisyon an chaje. Gade ak aprann!' : locale === 'fr' ? 'Solution chargée. Regardez et apprenez!' : 'Solution loaded. Study and learn!'}
                    </p>
                  </div>
                )}
              </div>

              {/* Output */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <ClipboardDocumentIcon className="w-6 h-6" />
                  {locale === 'ht' ? 'Rezilta' : locale === 'fr' ? 'Résultat' : 'Output'}
                </h3>
                <div className="bg-gray-100 border rounded-lg p-4 h-96 overflow-y-auto">
                  {output ? (
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                      {output}
                    </pre>
                  ) : (
                    <div className="text-gray-500 italic text-center flex items-center justify-center h-full">
                      {locale === 'ht' ? 'Kouri kòd la pou wè rezilta...' : locale === 'fr' ? 'Exécutez le code pour voir le résultat...' : 'Run the code to see output...'}
                    </div>
                  )}
                </div>

                {output && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">
                      🎉 {locale === 'ht' ? 'Gwo travay!' : locale === 'fr' ? 'Excellent travail!' : 'Great work!'}
                    </h4>
                    <p className="text-green-700 text-sm">
                      {locale === 'ht' ? 'Pwogram ou kouri ak siksè! Kontinye ak defi yo.' : locale === 'fr' ? 'Votre programme fonctionne avec succès ! Continuez avec les défis.' : 'Your program runs successfully! Continue with the challenges.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentTab === 'challenges' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <LightBulbIcon className="w-7 h-7" />
              {locale === 'ht' ? 'Defi Ekstè yo' : locale === 'fr' ? 'Défis Supplémentaires' : 'Extra Challenges'}
            </h2>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {locale === 'ht' ? 'Ou fini pwojè debaz la? Gwo bagay! Kounye a, ann pousse kapasite nou yo ak defi sa yo ki pi difisil.' 
                  : locale === 'fr' ? 'Vous avez terminé le projet de base ? Excellent ! Maintenant, poussons vos compétences avec ces défis plus difficiles.'
                  : 'Finished the basic project? Excellent! Now let\'s push your skills with these more challenging tasks.'}
              </p>
            </div>

            <div className="space-y-6">
              {(projectData.challenges?.[locale as keyof typeof projectData.challenges] || projectData.challenges?.en || []).map((challenge: string, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {locale === 'ht' ? 'Defi' : locale === 'fr' ? 'Défi' : 'Challenge'} {index + 1}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {locale === 'ht' ? 'Opsyon' : locale === 'fr' ? 'Optionnel' : 'Optional'}
                      </span>
                      <span>
                        ⭐ {index + 1} {locale === 'ht' ? 'zetwal' : locale === 'fr' ? 'étoiles' : 'stars'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={onComplete}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 text-lg font-semibold flex items-center gap-2 mx-auto"
              >
                <CheckCircleIcon className="w-6 h-6" />
                {locale === 'ht' ? 'Fini Pwojè a' : locale === 'fr' ? 'Terminer le Projet' : 'Complete Project'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}