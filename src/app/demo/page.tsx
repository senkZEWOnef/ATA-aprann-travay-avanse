import Link from 'next/link';
import { englishInterpretationCourse } from '@/data/courseContent';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          🎨 ATA Course Demo - Canvas Animations
        </h1>
        
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            Available Interactive Lessons
          </h2>
          <p className="text-gray-600 mb-6">
            Experience the full interactive learning experience with Canvas-based animations, 
            interactive quizzes, pronunciation practice, and progress tracking!
          </p>
          
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                English for Interpretation (Beginner)
              </h3>
              <p className="text-gray-600 mb-4">
                Aprann kòmanse ak entèpretasyon pwofesyonèl nan Anglè ak Kreyòl
              </p>
              <p className="text-sm text-primary-600 mb-4">
                {englishInterpretationCourse.length} lessons • Beginner
              </p>
              
              <div className="space-y-2">
                {englishInterpretationCourse.map((lesson, index) => (
                  <Link
                    key={index}
                    href={`/ht/courses/angle-pou-entepretasyon-1/lesson/${index + 1}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {lesson.titleHt}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {lesson.duration} min • Beginner
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎯 Interactive Features to Explore
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h4 className="font-semibold">Greeting Animation</h4>
                  <p className="text-gray-600 text-sm">Animated characters showing professional interactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold">Vocabulary Practice</h4>
                  <p className="text-gray-600 text-sm">Interactive word learning with particle effects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗣️</span>
                <div>
                  <h4 className="font-semibold">Pronunciation Practice</h4>
                  <p className="text-gray-600 text-sm">Visual pronunciation feedback with waveforms</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❓</span>
                <div>
                  <h4 className="font-semibold">Interactive Quiz</h4>
                  <p className="text-gray-600 text-sm">Animated quiz system with visual feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold">Progress Tracking</h4>
                  <p className="text-gray-600 text-sm">Detailed analytics and certificate generation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold">Canvas Animations</h4>
                  <p className="text-gray-600 text-sm">Rich visual feedback and interactive elements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/ht" 
            className="btn-primary text-lg px-8 py-4"
          >
            ← Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}