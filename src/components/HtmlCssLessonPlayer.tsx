'use client';

import { useState } from 'react';
import HtmlCssEditor from './HtmlCssEditor';
import { htmlCssProgressiveProject, ProjectStep } from '@/data/htmlCssProgressiveProject';

interface HtmlCssLessonPlayerProps {
  lessonOrder: number;
  locale: string;
}

export default function HtmlCssLessonPlayer({ lessonOrder, locale }: HtmlCssLessonPlayerProps) {
  const projectStep = htmlCssProgressiveProject.find(step => step.week === lessonOrder);
  
  if (!projectStep) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          {locale === 'ht' ? 'Pwojè pou semèn sa a pa disponib ankò' : 'Projet pour cette semaine pas encore disponible'}
        </p>
      </div>
    );
  }

  const [studentHtml, setStudentHtml] = useState(projectStep.starterHtml);
  const [studentCss, setStudentCss] = useState(projectStep.starterCss);

  const handleCodeChange = (html: string, css: string) => {
    setStudentHtml(html);
    setStudentCss(css);
    // Here we could save to localStorage or send to backend
    localStorage.setItem(`html-css-week-${lessonOrder}-html`, html);
    localStorage.setItem(`html-css-week-${lessonOrder}-css`, css);
  };

  // Load saved progress on mount
  useState(() => {
    const savedHtml = localStorage.getItem(`html-css-week-${lessonOrder}-html`);
    const savedCss = localStorage.getItem(`html-css-week-${lessonOrder}-css`);
    
    if (savedHtml) setStudentHtml(savedHtml);
    if (savedCss) setStudentCss(savedCss);
  });

  return (
    <div className="space-y-6">
      {/* Project Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          {locale === 'ht' ? projectStep.titleHt : projectStep.titleFr}
        </h3>
        
        <p className="text-blue-800 mb-4">
          <strong>{locale === 'ht' ? 'Objektif:' : 'Objectif:'}</strong> {' '}
          {locale === 'ht' ? projectStep.objectiveHt : projectStep.objectiveFr}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">
            {locale === 'ht' ? 'Enstriksyon yo:' : 'Instructions:'}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            {(locale === 'ht' ? projectStep.instructionsHt : projectStep.instructionsFr).map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">
            {locale === 'ht' ? 'Rezilta ki Atann:' : 'Résultat Attendu:'}
          </h4>
          <p className="text-blue-800">
            {locale === 'ht' ? projectStep.expectedResultHt : projectStep.expectedResultFr}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-900 mb-2">
            {locale === 'ht' ? 'Konsèy yo:' : 'Conseils:'}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            {(locale === 'ht' ? projectStep.tipsHt : projectStep.tipsFr).map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-50 border rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {locale === 'ht' ? 'Progression Pwojè a:' : 'Progression du Projet:'}
          </span>
          <span className="text-sm text-gray-600">
            {locale === 'ht' ? `Semèn ${lessonOrder} soti nan 15` : `Semaine ${lessonOrder} sur 15`}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(lessonOrder / 15) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 border-b">
          <h3 className="font-semibold text-gray-800">
            {locale === 'ht' ? 'Editè Kòd ak Preview' : 'Éditeur de Code et Aperçu'}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {locale === 'ht' 
              ? 'Ekri kòd ou a nan kote gòch la ak gade preview a nan kote dwat la'
              : 'Écrivez votre code à gauche et voyez l\'aperçu à droite'
            }
          </p>
        </div>
        
        <div className="p-4">
          <HtmlCssEditor
            initialHtml={studentHtml}
            initialCss={studentCss}
            onCodeChange={handleCodeChange}
          />
        </div>
      </div>

      {/* Save Progress Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            // Save progress
            handleCodeChange(studentHtml, studentCss);
            alert(locale === 'ht' ? 'Progression an sove!' : 'Progression sauvegardée!');
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {locale === 'ht' ? 'Sove Progression' : 'Sauvegarder la Progression'}
        </button>
      </div>
    </div>
  );
}