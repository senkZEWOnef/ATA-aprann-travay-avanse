// Comprehensive course implementation with substantial content
import { lesson1Comprehensive, lesson2Comprehensive } from './comprehensiveLessons';
import { lesson3Comprehensive, lesson4Comprehensive, lesson5Comprehensive, lesson6Comprehensive, lesson7Comprehensive, lesson8Comprehensive } from './remainingLessons';
import type { ComprehensiveLessonContent } from './comprehensiveLessons';

// Export all comprehensive lessons as an array
export const comprehensiveCourse: ComprehensiveLessonContent[] = [
  lesson1Comprehensive,
  lesson2Comprehensive,
  lesson3Comprehensive, 
  lesson4Comprehensive,
  lesson5Comprehensive,
  lesson6Comprehensive,
  lesson7Comprehensive,
  lesson8Comprehensive
];

// Helper function to get a specific lesson by ID
export function getLessonById(id: string): ComprehensiveLessonContent | undefined {
  return comprehensiveCourse.find(lesson => lesson.id === id);
}

// Helper function to get lesson by order
export function getLessonByOrder(order: number): ComprehensiveLessonContent | undefined {
  return comprehensiveCourse.find(lesson => lesson.order === order);
}

// Course metadata
export const courseMetadata = {
  title: {
    ht: 'Entèpretasyon Pwofesyonèl nan Travay',
    fr: 'Interprétation Professionnelle au Travail',
    en: 'Professional Work Interpretation'
  },
  description: {
    ht: 'Yon kou konplè pou aprann entèpretasyon pwofesyonèl nan anviwonman travay yo ak sèvis yo. Chak leson gen anpil materyèl ak aktivite ki pral pran 30-60 minit pou konplè.',
    fr: 'Un cours complet pour apprendre l\'interprétation professionnelle dans les environnements de travail et services. Chaque leçon contient beaucoup de matériel et d\'activités qui prendront 30-60 minutes à compléter.',
    en: 'A comprehensive course for learning professional interpretation in work and service environments. Each lesson contains substantial material and activities that will take 30-60 minutes to complete.'
  },
  totalLessons: 8,
  estimatedTotalDuration: 420, // 7 hours total
  difficultyLevel: 'Beginner to Intermediate',
  targetAudience: {
    ht: 'Jèn nan Ayiti ki vle aprann travay kòm entèprèt',
    fr: 'Jeunes d\'Haïti qui veulent apprendre à travailler comme interprètes',
    en: 'Young people in Haiti who want to learn to work as interpreters'
  }
};