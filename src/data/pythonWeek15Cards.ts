// Python Week 15: Final Project & Review
export interface LessonCard {
  id: string;
  type: 'intro' | 'concept' | 'code' | 'practice' | 'tip' | 'quiz' | 'project' | 'review' | 'exam';
  title: {
    ht: string;
    fr: string;
    en: string;
  };
  content: {
    ht: string;
    fr: string;
    en: string;
  };
  code?: {
    initial: string;
    solution?: string;
    output?: string;
  };
  quiz?: {
    question: {
      ht: string;
      fr: string;
      en: string;
    };
    options: Array<{
      ht: string;
      fr: string;
      en: string;
    }>;
    correctAnswer: number;
    explanation: {
      ht: string;
      fr: string;
      en: string;
    };
  };
}

export const pythonWeek15Cards: LessonCard[] = [
  // Card 1: Course Review Introduction
  {
    id: "week15-intro",
    type: "intro",
    title: {
      ht: "Byenvini nan Semèn 15: Pwojè Final ak Review",
      fr: "Bienvenue à la Semaine 15: Projet Final et Révision", 
      en: "Welcome to Week 15: Final Project & Review"
    },
    content: {
      ht: `🎓 **FELISITASYON! Ou rive nan dènye semèn an!**

Semèn sa a nou pral:
• ✨ Revize **TOU SA** nou aprann yo depi kòmanse a
• 🚀 Konstwi yon **Personal Assistant CLI App** ki konbine tout konsèp yo
• 🎁 Gen yon **bonus quiz** pou amelyore nòt ou a

**Sa ou deja konnen:**
- Variables, data types, ak expressions
- Strings, lists, tuples, dictionaries, sets  
- Conditionals ak loops
- Functions ak modules
- File handling ak error handling
- OOP (classes, methods, inheritance basics)
- JSON ak APIs

Ou prèt pou montre tout sa ou aprann yo!`,
      fr: `🎓 **FÉLICITATIONS! Vous avez atteint la dernière semaine!**

Cette semaine nous allons:
• ✨ Réviser **TOUT** ce que nous avons appris depuis le début
• 🚀 Construire une **Application Assistant Personnel CLI** qui combine tous les concepts
• 🎁 Avoir un **quiz bonus** pour améliorer votre note

**Ce que vous savez déjà:**
- Variables, types de données, et expressions
- Strings, listes, tuples, dictionnaires, sets
- Conditions et boucles
- Fonctions et modules
- Gestion de fichiers et gestion d'erreurs
- POO (classes, méthodes, bases d'héritage)
- JSON et APIs

Vous êtes prêt à montrer tout ce que vous avez appris!`,
      en: `🎓 **CONGRATULATIONS! You've reached the final week!**

This week we will:
• ✨ Review **EVERYTHING** we've learned from the beginning
• 🚀 Build a **Personal Assistant CLI App** that combines all concepts
• 🎁 Have a **bonus quiz** to improve your grade

**What you already know:**
- Variables, data types, and expressions
- Strings, lists, tuples, dictionaries, sets
- Conditionals and loops
- Functions and modules
- File handling and error handling
- OOP (classes, methods, inheritance basics)  
- JSON and APIs

You're ready to show everything you've learned!`
    }
  },

  // Card 2: Complete Course Review
  {
    id: "complete-course-review",
    type: "review",
    title: {
      ht: "Rezime Konplè Kou a",
      fr: "Résumé Complet du Cours",
      en: "Complete Course Summary"
    },
    content: {
      ht: `📚 **14 SEMÈN SA YO: YON VWAYAJ INKREYAB!**

**🌟 Semèn 1-3: Fondasyon yo**
- Variables ak data types (int, float, str, bool)
- Input/output ak print()
- Conditionals (if/elif/else)
- Basic loops ak range()

**🌟 Semèn 4-6: Estrikti Done ak Fonksyon**
- Lists: append(), extend(), remove()
- Tuples ak dictionaries  
- Sets ak their operations
- Function definition ak parameters

**🌟 Semèn 7-9: Advanced Concepts**
- Modules ak imports
- File handling (read/write/append)
- Error handling (try/except)
- String methods ak formatting

**🌟 Semèn 10-12: Aplikasyon Reyèl**
- Advanced file operations
- Text processing ak analysis
- Data management
- Project organization

**🌟 Semèn 13-14: Professional Programming**
- Object-Oriented Programming
- Classes ak methods
- JSON ak external APIs
- Real-world integrations

**🎯 Ou kounye a ka:**
✅ Ekri pwogram ki ka rezoud pwoblèm konplèks yo
✅ Jesyone done ak fichye yo
✅ Kreye klas ak objè yo  
✅ Konekte ak API ekstèn yo
✅ Jesyone erè yo ak sekirite
✅ Konstwi aplikasyon konplè yo!`,
      fr: `📚 **CES 14 SEMAINES: UN VOYAGE INCROYABLE!**

**🌟 Semaines 1-3: Fondations**
- Variables et types de données (int, float, str, bool)
- Entrée/sortie avec print()
- Conditions (if/elif/else)
- Boucles de base avec range()

**🌟 Semaines 4-6: Structures de Données et Fonctions**
- Listes: append(), extend(), remove()
- Tuples et dictionnaires
- Sets et leurs opérations
- Définition de fonctions et paramètres

**🌟 Semaines 7-9: Concepts Avancés**
- Modules et imports
- Gestion de fichiers (lecture/écriture/ajout)
- Gestion d'erreurs (try/except)
- Méthodes de chaînes et formatage

**🌟 Semaines 10-12: Applications Réelles**
- Opérations de fichiers avancées
- Traitement et analyse de texte
- Gestion de données
- Organisation de projets

**🌟 Semaines 13-14: Programmation Professionnelle**
- Programmation Orientée Objet
- Classes et méthodes
- JSON et APIs externes
- Intégrations du monde réel

**🎯 Vous pouvez maintenant:**
✅ Écrire des programmes qui résolvent des problèmes complexes
✅ Gérer des données et des fichiers
✅ Créer des classes et des objets
✅ Vous connecter à des APIs externes
✅ Gérer les erreurs et la sécurité
✅ Construire des applications complètes!`,
      en: `📚 **THESE 14 WEEKS: AN INCREDIBLE JOURNEY!**

**🌟 Weeks 1-3: Foundations**
- Variables and data types (int, float, str, bool)
- Input/output with print()
- Conditionals (if/elif/else)
- Basic loops with range()

**🌟 Weeks 4-6: Data Structures & Functions**
- Lists: append(), extend(), remove()
- Tuples and dictionaries
- Sets and their operations
- Function definition and parameters

**🌟 Weeks 7-9: Advanced Concepts**
- Modules and imports
- File handling (read/write/append)
- Error handling (try/except)
- String methods and formatting

**🌟 Weeks 10-12: Real Applications**
- Advanced file operations
- Text processing and analysis
- Data management
- Project organization

**🌟 Weeks 13-14: Professional Programming**
- Object-Oriented Programming
- Classes and methods
- JSON and external APIs
- Real-world integrations

**🎯 You can now:**
✅ Write programs that solve complex problems
✅ Manage data and files
✅ Create classes and objects
✅ Connect to external APIs
✅ Handle errors and security
✅ Build complete applications!`
    }
  },

  // Bonus Quiz Section
  {
    id: "bonus-quiz-intro",
    type: "review",
    title: {
      ht: "Quiz Bonus - Chans pou Amelyore Nòt ou",
      fr: "Quiz Bonus - Chance d'Améliorer votre Note",
      en: "Bonus Quiz - Chance to Improve Your Grade"
    },
    content: {
      ht: `🎁 **BONUS QUIZ SPECIAL!**

Quiz sa a ka **ranplase pi move nòt quiz ou yo** nan kou a!

**Kijan li travay:**
- 5 kesyon bonus ki kouvri tout materyèl la
- Si ou fè pi bon pase pi move quiz ou yo, nou ap ranplase nòt la
- Ou gen 2 chans pou pran li
- Pa gen risk - li ka sèlman ede ou!

**Subjè yo ki kouvri:**
✅ Variables ak data types
✅ Loops ak conditionals  
✅ Functions ak parameters
✅ Lists ak dictionaries
✅ File handling ak OOP

Ou prèt pou amelyore nòt ou a?`,
      fr: `🎁 **QUIZ BONUS SPÉCIAL!**

Ce quiz peut **remplacer votre plus mauvaise note de quiz** du cours!

**Comment ça marche:**
- 5 questions bonus couvrant tout le matériel
- Si vous faites mieux que votre plus mauvais quiz, nous remplacerons la note
- Vous avez 2 chances de le prendre
- Aucun risque - cela ne peut que vous aider!

**Sujets couverts:**
✅ Variables et types de données
✅ Boucles et conditions
✅ Fonctions et paramètres
✅ Listes et dictionnaires
✅ Gestion de fichiers et POO

Êtes-vous prêt à améliorer votre note?`,
      en: `🎁 **SPECIAL BONUS QUIZ!**

This quiz can **replace your worst quiz grade** from the course!

**How it works:**
- 5 bonus questions covering all material
- If you do better than your worst quiz, we'll replace that grade
- You get 2 chances to take it
- No risk - it can only help you!

**Topics covered:**
✅ Variables and data types
✅ Loops and conditionals
✅ Functions and parameters
✅ Lists and dictionaries
✅ File handling and OOP

Ready to improve your grade?`
    }
  },

  // Bonus Quiz Questions
  {
    id: "bonus-q1",
    type: "quiz",
    title: {
      ht: "Quiz Bonus - Kesyon 1",
      fr: "Quiz Bonus - Question 1",
      en: "Bonus Quiz - Question 1"
    },
    content: {
      ht: "Kesyon Bonus 1 nan 5",
      fr: "Question Bonus 1 de 5", 
      en: "Bonus Question 1 of 5"
    },
    quiz: {
      question: {
        ht: "Sa kòd sa a pral retounen?\\ndef multiply(a, b=2):\\n    return a * b\\nprint(multiply(5))",
        fr: "Que va retourner ce code ?\\ndef multiply(a, b=2):\\n    return a * b\\nprint(multiply(5))",
        en: "What will this code return?\\ndef multiply(a, b=2):\\n    return a * b\\nprint(multiply(5))"
      },
      options: [
        { ht: "5", fr: "5", en: "5" },
        { ht: "10", fr: "10", en: "10" },
        { ht: "Erè", fr: "Erreur", en: "Error" },
        { ht: "2", fr: "2", en: "2" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fonksyon an gen yon default value b=2. Lè nou rele multiply(5), li fè 5 * 2 = 10.",
        fr: "La fonction a une valeur par défaut b=2. Quand nous appelons multiply(5), elle fait 5 * 2 = 10.",
        en: "The function has a default value b=2. When we call multiply(5), it does 5 * 2 = 10."
      }
    }
  },

  {
    id: "bonus-q2",
    type: "quiz", 
    title: {
      ht: "Quiz Bonus - Kesyon 2",
      fr: "Quiz Bonus - Question 2",
      en: "Bonus Quiz - Question 2"
    },
    content: {
      ht: "Kesyon Bonus 2 nan 5",
      fr: "Question Bonus 2 de 5",
      en: "Bonus Question 2 of 5"
    },
    quiz: {
      question: {
        ht: "Ki sa ki gen nan my_list apre kòd sa a?\\nmy_list = [1, 2, 3]\\nmy_list.extend([4, 5])",
        fr: "Que contient my_list après ce code ?\\nmy_list = [1, 2, 3]\\nmy_list.extend([4, 5])",
        en: "What does my_list contain after this code?\\nmy_list = [1, 2, 3]\\nmy_list.extend([4, 5])"
      },
      options: [
        { ht: "[1, 2, 3, [4, 5]]", fr: "[1, 2, 3, [4, 5]]", en: "[1, 2, 3, [4, 5]]" },
        { ht: "[1, 2, 3, 4, 5]", fr: "[1, 2, 3, 4, 5]", en: "[1, 2, 3, 4, 5]" },
        { ht: "[[1, 2, 3], [4, 5]]", fr: "[[1, 2, 3], [4, 5]]", en: "[[1, 2, 3], [4, 5]]" },
        { ht: "[4, 5]", fr: "[4, 5]", en: "[4, 5]" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "extend() ajoute chak eleman nan lis nouvo a nan fen lis orijinal la.",
        fr: "extend() ajoute chaque élément de la nouvelle liste à la fin de la liste originale.",
        en: "extend() adds each element from the new list to the end of the original list."
      }
    }
  },

  // Final Project Introduction
  {
    id: "final-project-intro",
    type: "project",
    title: {
      ht: "Pwojè Final: Personal Assistant CLI",
      fr: "Projet Final: Assistant Personnel CLI",
      en: "Final Project: Personal Assistant CLI"
    },
    content: {
      ht: `🚀 **PWOJÈ FINAL: LI YE TAN POU BRIYE!**

Ou pral konstwi yon **Personal Assistant CLI Application** ki konbine tout sa ou aprann yo!

**🎯 Sa aplikasyon an ap fè:**
- 📝 Jesyone tâches ak notes
- 📊 Kalkile ak konte
- 🌤️ Tcheke weather (ak API)
- 📁 Jesyone fichye yo
- 💾 Sove ak load done yo

**🛠️ Teknoloji ki itilize:**
- Classes ak OOP
- File handling ak JSON
- API integration ak requests
- Error handling ak try/except
- User interface ak menus

**📋 Fonksyonalite yo:**
1. **Task Manager**: Add, view, complete, delete tasks
2. **Notes System**: Create, edit, search notes  
3. **Calculator**: Basic ak scientific calculations
4. **Weather**: Real-time weather ak forecast
5. **File Manager**: Organize ak manage files

**🏆 Kritè evalyasyon:**
- Code quality ak organization
- Proper OOP implementation
- Error handling ak user experience
- Feature completeness
- Documentation ak comments

Ou prèt pou konstwi bagay sa a?`,
      fr: `🚀 **PROJET FINAL: IL EST TEMPS DE BRILLER!**

Vous allez construire une **Application Assistant Personnel CLI** qui combine tout ce que vous avez appris!

**🎯 Ce que l'application fera:**
- 📝 Gérer des tâches et notes
- 📊 Calculer et compter
- 🌤️ Vérifier la météo (avec API)
- 📁 Gérer des fichiers
- 💾 Sauvegarder et charger des données

**🛠️ Technologies utilisées:**
- Classes et POO
- Gestion de fichiers et JSON
- Intégration API avec requests
- Gestion d'erreurs avec try/except
- Interface utilisateur avec menus

**📋 Fonctionnalités:**
1. **Gestionnaire de Tâches**: Ajouter, voir, terminer, supprimer tâches
2. **Système de Notes**: Créer, éditer, rechercher notes
3. **Calculatrice**: Calculs de base et scientifiques
4. **Météo**: Météo en temps réel et prévisions
5. **Gestionnaire de Fichiers**: Organiser et gérer fichiers

**🏆 Critères d'évaluation:**
- Qualité et organisation du code
- Implémentation POO appropriée
- Gestion d'erreurs et expérience utilisateur
- Complétude des fonctionnalités
- Documentation et commentaires

Êtes-vous prêt à construire ceci?`,
      en: `🚀 **FINAL PROJECT: TIME TO SHINE!**

You'll build a **Personal Assistant CLI Application** that combines everything you've learned!

**🎯 What the application will do:**
- 📝 Manage tasks and notes
- 📊 Calculate and compute
- 🌤️ Check weather (with API)
- 📁 Manage files
- 💾 Save and load data

**🛠️ Technologies used:**
- Classes and OOP
- File handling and JSON
- API integration with requests
- Error handling with try/except
- User interface with menus

**📋 Features:**
1. **Task Manager**: Add, view, complete, delete tasks
2. **Notes System**: Create, edit, search notes
3. **Calculator**: Basic and scientific calculations
4. **Weather**: Real-time weather and forecast
5. **File Manager**: Organize and manage files

**🏆 Evaluation criteria:**
- Code quality and organization
- Proper OOP implementation
- Error handling and user experience
- Feature completeness
- Documentation and comments

Are you ready to build this?`
    },
    code: {
      initial: `# Personal Assistant CLI - Final Project Template
# Complete this template to build your own personal assistant!

import json
import os
import requests
from datetime import datetime

class PersonalAssistant:
    def __init__(self):
        self.tasks = []
        self.notes = []
        self.data_file = "assistant_data.json"
        self.load_data()
    
    def load_data(self):
        """Load saved data from file"""
        try:
            if os.path.exists(self.data_file):
                with open(self.data_file, 'r') as file:
                    data = json.load(file)
                    self.tasks = data.get('tasks', [])
                    self.notes = data.get('notes', [])
        except Exception as e:
            print(f"Error loading data: {e}")
    
    def save_data(self):
        """Save data to file"""
        try:
            data = {
                'tasks': self.tasks,
                'notes': self.notes
            }
            with open(self.data_file, 'w') as file:
                json.dump(data, file, indent=2)
            print("✅ Data saved successfully!")
        except Exception as e:
            print(f"❌ Error saving data: {e}")
    
    def show_menu(self):
        """Display main menu"""
        print("\\n" + "="*50)
        print("🤖 PERSONAL ASSISTANT CLI")
        print("="*50)
        print("1. 📝 Task Manager")
        print("2. 📓 Notes System")
        print("3. 🧮 Calculator")
        print("4. 🌤️ Weather Check")
        print("5. 📁 File Manager")
        print("6. 💾 Save Data")
        print("0. 🚪 Exit")
        print("="*50)
    
    def task_manager(self):
        """Handle task management"""
        # TODO: Implement task management
        print("📝 Task Manager - Coming soon!")
        
    def notes_system(self):
        """Handle notes system"""
        # TODO: Implement notes system
        print("📓 Notes System - Coming soon!")
        
    def calculator(self):
        """Handle calculations"""
        # TODO: Implement calculator
        print("🧮 Calculator - Coming soon!")
        
    def weather_check(self):
        """Check weather using API"""
        # TODO: Implement weather check
        print("🌤️ Weather Check - Coming soon!")
        
    def file_manager(self):
        """Handle file management"""
        # TODO: Implement file manager
        print("📁 File Manager - Coming soon!")
    
    def run(self):
        """Main application loop"""
        print("🎉 Welcome to your Personal Assistant!")
        
        while True:
            self.show_menu()
            try:
                choice = input("\\nChoose an option: ").strip()
                
                if choice == '1':
                    self.task_manager()
                elif choice == '2':
                    self.notes_system()
                elif choice == '3':
                    self.calculator()
                elif choice == '4':
                    self.weather_check()
                elif choice == '5':
                    self.file_manager()
                elif choice == '6':
                    self.save_data()
                elif choice == '0':
                    self.save_data()
                    print("👋 Goodbye! Thanks for using Personal Assistant!")
                    break
                else:
                    print("❌ Invalid choice! Please try again.")
                    
            except KeyboardInterrupt:
                self.save_data()
                print("\\n\\n👋 Goodbye! Data saved.")
                break
            except Exception as e:
                print(f"❌ An error occurred: {e}")

# Run the application
if __name__ == "__main__":
    assistant = PersonalAssistant()
    assistant.run()
`,
      solution: `# Complete implementation would go here - students build their own!`
    }
  },

  // Course Completion
  {
    id: "course-completion",
    type: "review",
    title: {
      ht: "Felisitasyon - Ou Fini Kou Python an!",
      fr: "Félicitations - Vous avez Terminé le Cours Python!",
      en: "Congratulations - You Completed the Python Course!"
    },
    content: {
      ht: `🎉 **BRAVO! OU FÈ LI!** 🎉

**Sa ou akonpli:**
✅ Ou aprann Python nan 15 semèn
✅ Ou konstwi aplikasyon reyèl yo
✅ Ou gen labase pou vini yon Python developer
✅ Ou ka kontinye ak frameworks tankou Django, Flask
✅ Ou prèt pou travay ak projè ki pi konplèks yo

**Sa ou kapab fè kounye a:**
- 🏗️ Konstwi web applications ak Django/Flask
- 🤖 Devlope automation scripts
- 📊 Fè data analysis ak pandas
- 🧠 Aprann machine learning ak scikit-learn
- 🌐 Kreye APIs ak REST services

**Pwochen etap yo:**
1. **Practice**: Kontinye kod chak jou
2. **Projects**: Konstwi plis aplikasyon
3. **Community**: Patisipe nan Python community
4. **Specialization**: Chwazi yon domèn (web, data, AI)
5. **Contribution**: Kontribye nan open source

**Ou se yon Python programmer kounye a!** 🐍

Sonje: "Kominote an ap la pou ede ou, ak ou ka toujou kontinye aprann!"

📧 **Kenbe kontak ak nou:**
- Join nou sou GitHub
- Suiv nou sou sosyal medya
- Patisipe nan local Python meetups
- Kontinye devlope pwojè ou yo!

**MÈSI POU TE FÈ VWAYAJ SA A AK NOU!** ❤️`,
      fr: `🎉 **BRAVO! VOUS L'AVEZ FAIT!** 🎉

**Ce que vous avez accompli:**
✅ Vous avez appris Python en 15 semaines
✅ Vous avez construit des applications réelles
✅ Vous avez les bases pour devenir développeur Python
✅ Vous pouvez continuer avec des frameworks comme Django, Flask
✅ Vous êtes prêt pour des projets plus complexes

**Ce que vous pouvez faire maintenant:**
- 🏗️ Construire des applications web avec Django/Flask
- 🤖 Développer des scripts d'automatisation
- 📊 Faire de l'analyse de données avec pandas
- 🧠 Apprendre le machine learning avec scikit-learn
- 🌐 Créer des APIs et des services REST

**Prochaines étapes:**
1. **Pratique**: Continuez à coder chaque jour
2. **Projets**: Construisez plus d'applications
3. **Communauté**: Participez à la communauté Python
4. **Spécialisation**: Choisissez un domaine (web, data, AI)
5. **Contribution**: Contribuez à l'open source

**Vous êtes maintenant un programmeur Python!** 🐍

Rappelez-vous: "La communauté est là pour vous aider, et vous pouvez toujours continuer à apprendre!"

📧 **Restez en contact avec nous:**
- Rejoignez-nous sur GitHub
- Suivez-nous sur les réseaux sociaux
- Participez aux meetups Python locaux
- Continuez à développer vos projets!

**MERCI D'AVOIR FAIT CE VOYAGE AVEC NOUS!** ❤️`,
      en: `🎉 **CONGRATULATIONS! YOU DID IT!** 🎉

**What you've accomplished:**
✅ You learned Python in 15 weeks
✅ You built real applications
✅ You have the foundation to become a Python developer
✅ You can continue with frameworks like Django, Flask
✅ You're ready for more complex projects

**What you can do now:**
- 🏗️ Build web applications with Django/Flask
- 🤖 Develop automation scripts
- 📊 Do data analysis with pandas
- 🧠 Learn machine learning with scikit-learn
- 🌐 Create APIs and REST services

**Next steps:**
1. **Practice**: Continue coding every day
2. **Projects**: Build more applications
3. **Community**: Participate in the Python community
4. **Specialization**: Choose a domain (web, data, AI)
5. **Contribution**: Contribute to open source

**You are now a Python programmer!** 🐍

Remember: "The community is here to help you, and you can always keep learning!"

📧 **Stay in touch with us:**
- Join us on GitHub
- Follow us on social media
- Participate in local Python meetups
- Keep developing your projects!

**THANK YOU FOR TAKING THIS JOURNEY WITH US!** ❤️`
    }
  }
];

// Mini project for Week 15
export const pythonWeek15Lesson = {
  id: "week15-complete",
  title: {
    ht: "Semèn 15: Pwojè Final ak Review Konplè", 
    fr: "Semaine 15: Projet Final et Révision Complète",
    en: "Week 15: Final Project and Complete Review"
  },
  description: {
    ht: "Konplete kou a ak yon pwojè final ak review konplè nan materyèl la.",
    fr: "Complétez le cours avec un projet final et une révision complète du matériel.",
    en: "Complete the course with a final project and comprehensive review of all material."
  },
  cards: pythonWeek15Cards
};