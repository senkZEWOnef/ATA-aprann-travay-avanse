// Python Week 1: Introduction to Python - Comprehensive Card-Based Lesson
// Ultra-comprehensive content with card-style notes and interactive elements

export interface LessonCard {
  id: string;
  type: 'intro' | 'concept' | 'code' | 'practice' | 'tip' | 'quiz' | 'project';
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
  codeExample?: string;
  codeOutput?: string;
  tips?: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  keyPoints?: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  order: number;
  estimatedTime?: number; // minutes
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
}

export interface PythonWeek1Lesson {
  weekNumber: 1;
  title: {
    ht: string;
    fr: string;
    en: string;
  };
  description: {
    ht: string;
    fr: string;
    en: string;
  };
  totalCards: number;
  estimatedDuration: number; // minutes
  objectives: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  cards: LessonCard[];
  quiz: {
    id: string;
    question: {
      ht: string;
      fr: string;
      en: string;
    };
    options: {
      ht: string;
      fr: string;
      en: string;
    }[];
    correctAnswer: number;
    explanation: {
      ht: string;
      fr: string;
      en: string;
    };
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
  }[];
  miniProject: {
    title: {
      ht: string;
      fr: string;
      en: string;
    };
    description: {
      ht: string;
      fr: string;
      en: string;
    };
    requirements: {
      ht: string[];
      fr: string[];
      en: string[];
    };
    starterCode: string;
    sampleSolution: string;
    challenges: {
      ht: string[];
      fr: string[];
      en: string[];
    };
  };
}

export const pythonWeek1Lesson: PythonWeek1Lesson = {
  weekNumber: 1,
  title: {
    ht: 'Entwodiksyon nan Python - Premye Pa ou',
    fr: 'Introduction à Python - Vos Premiers Pas',
    en: 'Introduction to Python - Your First Steps'
  },
  description: {
    ht: 'Kòmanse vwayaj Python ou ak aprann debaz yo: ki sa Python ye, kijan pou enstale li, ak kijan pou ekri premye pwogram ou.',
    fr: 'Commencez votre voyage Python en apprenant les bases : ce qu\'est Python, comment l\'installer, et comment écrire votre premier programme.',
    en: 'Start your Python journey by learning the basics: what Python is, how to install it, and how to write your first program.'
  },
  totalCards: 25,
  estimatedDuration: 90,
  objectives: {
    ht: [
      'Konprann ki sa Python ye ak poukisa li enpòtan',
      'Enstale Python ak VS Code sou òdinatè ou',
      'Ekri ak egzekite premye script Python ou',
      'Itilize fonksyon print() ak input() yo',
      'Kreye varyab ak stock enfòmasyon',
      'Ajoute kòmantè pou eksplike kòd ou',
      'Devlope yon pwogram salitasyon pèsonèl'
    ],
    fr: [
      'Comprendre ce qu\'est Python et pourquoi il est important',
      'Installer Python et VS Code sur votre ordinateur',
      'Écrire et exécuter votre premier script Python',
      'Utiliser les fonctions print() et input()',
      'Créer des variables et stocker des informations',
      'Ajouter des commentaires pour expliquer votre code',
      'Développer un programme de salutation personnel'
    ],
    en: [
      'Understand what Python is and why it matters',
      'Install Python and VS Code on your computer',
      'Write and execute your first Python script',
      'Use print() and input() functions',
      'Create variables and store information',
      'Add comments to explain your code',
      'Develop a personal greeting program'
    ]
  },
  cards: [
    // Card 1: Welcome & Introduction
    {
      id: 'week1-intro-welcome',
      type: 'intro',
      title: {
        ht: '🎉 Byenvni nan Python!',
        fr: '🎉 Bienvenue en Python!',
        en: '🎉 Welcome to Python!'
      },
      content: {
        ht: 'Felisitasyon! Ou kòmanse yon vwayaj estrèm nan mond pwogramason Python. Python se yon langaj ki gen pouvwa ak ki fasil pou aprann, ak li ka ede ou kreye nenpòt bagay depi aplikasyon senp yo rive nan sistèm konplè yo.\n\nNan semèn sa a, nou va aprann debaz yo ak kòmanse ak premye pwogram nou yo. Ou pa bezwen ekspèyan pwogramason - nou va gide ou nan chak etap!',
        fr: 'Félicitations ! Vous commencez un voyage passionnant dans le monde de la programmation Python. Python est un langage puissant et facile à apprendre qui peut vous aider à créer tout, des applications simples aux systèmes complexes.\n\nCette semaine, nous apprendrons les bases et commencerons avec nos premiers programmes. Vous n\'avez pas besoin d\'expérience en programmation - nous vous guiderons à chaque étape !',
        en: 'Congratulations! You\'re starting an exciting journey into the world of Python programming. Python is a powerful and easy-to-learn language that can help you create anything from simple applications to complex systems.\n\nThis week, we\'ll learn the fundamentals and get started with our first programs. You don\'t need any programming experience - we\'ll guide you through every step!'
      },
      keyPoints: {
        ht: [
          'Python se langaj #1 pou kòmansè yo',
          'Li itilize nan Google, Instagram, Netflix ak plis',
          'Ou ka aprann li menm si ou pa gen ekspèyan',
          'Nou va kòmanse ak bagay senp yo ak vin pi avanse'
        ],
        fr: [
          'Python est le langage #1 pour les débutants',
          'Il est utilisé par Google, Instagram, Netflix et plus',
          'Vous pouvez l\'apprendre même sans expérience',
          'Nous commencerons simple et progresserons'
        ],
        en: [
          'Python is the #1 language for beginners',
          'It\'s used by Google, Instagram, Netflix and more',
          'You can learn it even with no experience',
          'We\'ll start simple and progress gradually'
        ]
      },
      order: 1,
      estimatedTime: 3,
      difficulty: 'easy',
      tags: ['introduction', 'motivation', 'overview']
    },

    // Card 2: What is Python?
    {
      id: 'week1-concept-what-is-python',
      type: 'concept',
      title: {
        ht: '🐍 Ki sa Python ye?',
        fr: '🐍 Qu\'est-ce que Python?',
        en: '🐍 What is Python?'
      },
      content: {
        ht: 'Python se yon langaj pwogramason ki gen anpil pouvwa ak ki fasil pou itilize. Li te kreye nan 1991 pa Guido van Rossum ak kounye a li se youn nan langaj yo ki pi popilè nan mond lan.\n\n**Poukisa Python espesyal?**\nPython fèt pou moun ka li ak konprann li fasil. Kòd Python gade tankou angle ki ekri nan yon fason senp. Sa a fè li pèfè pou moun ki kòmanse aprann pwogramason.',
        fr: 'Python est un langage de programmation puissant et facile à utiliser. Il a été créé en 1991 par Guido van Rossum et est maintenant l\'un des langages les plus populaires au monde.\n\n**Pourquoi Python est-il spécial ?**\nPython est conçu pour être lisible et facile à comprendre. Le code Python ressemble à de l\'anglais écrit de manière simple. Cela le rend parfait pour les débutants en programmation.',
        en: 'Python is a powerful and easy-to-use programming language. It was created in 1991 by Guido van Rossum and is now one of the most popular languages in the world.\n\n**Why is Python special?**\nPython is designed to be readable and easy to understand. Python code looks like English written in a simple way. This makes it perfect for programming beginners.'
      },
      keyPoints: {
        ht: [
          'Facil pou li ak konprann',
          'Gen anpil bibliyotèk ak zouti',
          'Kominote aktif ak sipò',
          'Itilize nan anpil endustri yo',
          'Open source ak gratis',
          'Fonksyonnen sou Windows, Mac, Linux'
        ],
        fr: [
          'Facile à lire et comprendre',
          'Nombreuses bibliothèques et outils',
          'Communauté active et support',
          'Utilisé dans de nombreuses industries',
          'Open source et gratuit',
          'Fonctionne sur Windows, Mac, Linux'
        ],
        en: [
          'Easy to read and understand',
          'Extensive libraries and tools',
          'Active community and support',
          'Used across many industries',
          'Open source and free',
          'Works on Windows, Mac, Linux'
        ]
      },
      tips: {
        ht: [
          'Python non an soti nan sèk Monty Python yo (pa sèpan an)!',
          'Li itilize tankou \"langaj glu\" pou konekte sistèm diferan yo',
          'YouTube ak Instagram bati ak Python'
        ],
        fr: [
          'Le nom Python vient des Monty Python (pas du serpent) !',
          'Il est utilisé comme \"langage de colle\" pour connecter différents systèmes',
          'YouTube et Instagram sont construits avec Python'
        ],
        en: [
          'The name Python comes from Monty Python (not the snake)!',
          'It\'s used as a \"glue language\" to connect different systems',
          'YouTube and Instagram are built with Python'
        ]
      },
      order: 2,
      estimatedTime: 5,
      difficulty: 'easy',
      tags: ['concept', 'history', 'overview']
    },

    // Card 3: Python Uses & Applications
    {
      id: 'week1-concept-python-uses',
      type: 'concept',
      title: {
        ht: '🌍 Kote yo itilize Python?',
        fr: '🌍 Où utilise-t-on Python?',
        en: '🌍 Where is Python used?'
      },
      content: {
        ht: 'Python itilize nan prèske tout domèn teknoloji yo! Sa a fè li vin yon choix ekselan pou aprann kòm premye langaj pwogramason ou.\n\n**Domèn yo ki pi popilè:**\n• **Devlopman Web** - Kreye sit entènèt ak aplikasyon web\n• **Entelijan Atifisyèl** - Machine learning ak AI\n• **Analiz Done** - Analize ak vizye done yo\n• **Otomatizasyon** - Otomatize travay yo ki repete\n• **Rechèch Syantifik** - Kalkil ak modèl syantifik yo\n• **Jèm ak App** - Devlope jèm ak aplikasyon mobil',
        fr: 'Python est utilisé dans presque tous les domaines de la technologie ! Cela en fait un excellent choix pour apprendre comme premier langage de programmation.\n\n**Domaines les plus populaires :**\n• **Développement Web** - Créer des sites web et applications web\n• **Intelligence Artificielle** - Machine learning et IA\n• **Analyse de Données** - Analyser et visualiser les données\n• **Automatisation** - Automatiser les tâches répétitives\n• **Recherche Scientifique** - Calculs et modèles scientifiques\n• **Jeux et Apps** - Développer des jeux et applications mobiles',
        en: 'Python is used in almost every technology field! This makes it an excellent choice to learn as your first programming language.\n\n**Most popular domains:**\n• **Web Development** - Creating websites and web applications\n• **Artificial Intelligence** - Machine learning and AI\n• **Data Analysis** - Analyzing and visualizing data\n• **Automation** - Automating repetitive tasks\n• **Scientific Research** - Scientific calculations and models\n• **Games & Apps** - Developing games and mobile applications'
      },
      keyPoints: {
        ht: [
          'Netflix - pou sistèm rekòmandasyon yo',
          'Google - pou rechèch ak YouTube',
          'Instagram - pou platfòm medya sosyal la',
          'NASA - pou analiz done espas',
          'Spotify - pou analiz mizik ak rekòmandasyon',
          'Dropbox - pou stock ak pataj fichye'
        ],
        fr: [
          'Netflix - pour les systèmes de recommandation',
          'Google - pour la recherche et YouTube',
          'Instagram - pour la plateforme de médias sociaux',
          'NASA - pour l\'analyse de données spatiales',
          'Spotify - pour l\'analyse musicale et les recommandations',
          'Dropbox - pour le stockage et partage de fichiers'
        ],
        en: [
          'Netflix - for recommendation systems',
          'Google - for search and YouTube',
          'Instagram - for social media platform',
          'NASA - for space data analysis',
          'Spotify - for music analysis and recommendations',
          'Dropbox - for file storage and sharing'
        ]
      },
      order: 3,
      estimatedTime: 4,
      difficulty: 'easy',
      tags: ['applications', 'real-world', 'motivation']
    },

    // Card 4: Installing Python
    {
      id: 'week1-setup-install-python',
      type: 'concept',
      title: {
        ht: '⬇️ Enstale Python',
        fr: '⬇️ Installer Python',
        en: '⬇️ Installing Python'
      },
      content: {
        ht: 'Anvan nou ka kòmanse pwogram, nou bezwen enstale Python sou òdinatè nou an. Sa a se yon etap senp ki gen kèk etap.\n\n**Etap yo:**\n1. Ale sou python.org/downloads\n2. Klike sou "Download Python" (vèsyon ki pi resan)\n3. Kouri fichye a ak suiv enstriksyon yo\n4. **TRÈ ENPÒTAN:** Tcheke "Add Python to PATH" anvan ou fini',
        fr: 'Avant de pouvoir commencer à programmer, nous devons installer Python sur notre ordinateur. C\'est un processus simple qui comprend quelques étapes.\n\n**Étapes :**\n1. Allez sur python.org/downloads\n2. Cliquez sur "Download Python" (version la plus récente)\n3. Exécutez le fichier et suivez les instructions\n4. **TRÈS IMPORTANT :** Cochez "Add Python to PATH" avant de terminer',
        en: 'Before we can start programming, we need to install Python on our computer. This is a simple process with a few steps.\n\n**Steps:**\n1. Go to python.org/downloads\n2. Click "Download Python" (latest version)\n3. Run the file and follow instructions\n4. **VERY IMPORTANT:** Check "Add Python to PATH" before finishing'
      },
      tips: {
        ht: [
          'Si ou bliye tcheke "Add to PATH", ou ka re-enstale Python',
          'Vèsyon Python ki pi bon pou kòmansè yo se 3.9+ oswa pi wo',
          'Apre enstalasyon, restart òdinatè ou',
          'Ou ka gen Python ak Mac ak Linux deja, men chèch pou nouvo vèsyon'
        ],
        fr: [
          'Si vous oubliez de cocher "Add to PATH", vous pouvez réinstaller Python',
          'La meilleure version Python pour débutants est 3.9+ ou plus',
          'Après installation, redémarrez votre ordinateur',
          'Vous pourriez avoir Python sur Mac et Linux déjà, mais vérifiez pour une version récente'
        ],
        en: [
          'If you forget to check "Add to PATH", you can reinstall Python',
          'Best Python version for beginners is 3.9+ or higher',
          'After installation, restart your computer',
          'You might have Python on Mac and Linux already, but check for recent version'
        ]
      },
      order: 4,
      estimatedTime: 10,
      difficulty: 'easy',
      tags: ['setup', 'installation', 'environment']
    },

    // Card 5: Installing VS Code
    {
      id: 'week1-setup-vs-code',
      type: 'concept',
      title: {
        ht: '📝 Enstale VS Code',
        fr: '📝 Installer VS Code',
        en: '📝 Installing VS Code'
      },
      content: {
        ht: 'Visual Studio Code (VS Code) se editè ki pi bon ak pi popilè pou Python. Li gratis, rapid, ak gen anpil karakteristik ki va ede nou.\n\n**Etap yo:**\n1. Ale sou code.visualstudio.com\n2. Download pou sistèm operatè ou\n3. Enstale ak suiv enstriksyon yo\n4. Louvri VS Code ak enstale extension Python\n\n**Extension Python:**\n• Ouvri VS Code\n• Klike sou icon Extensions (kanpe bò gòch)\n• Rechèch "Python"\n• Enstale extension "Python" pa Microsoft',
        fr: 'Visual Studio Code (VS Code) est le meilleur éditeur le plus populaire pour Python. Il est gratuit, rapide et a de nombreuses fonctionnalités qui nous aideront.\n\n**Étapes :**\n1. Allez sur code.visualstudio.com\n2. Téléchargez pour votre système d\'exploitation\n3. Installez en suivant les instructions\n4. Ouvrez VS Code et installez l\'extension Python\n\n**Extension Python :**\n• Ouvrez VS Code\n• Cliquez sur l\'icône Extensions (côté gauche)\n• Recherchez "Python"\n• Installez l\'extension "Python" par Microsoft',
        en: 'Visual Studio Code (VS Code) is the best and most popular editor for Python. It\'s free, fast, and has many features that will help us.\n\n**Steps:**\n1. Go to code.visualstudio.com\n2. Download for your operating system\n3. Install following the instructions\n4. Open VS Code and install Python extension\n\n**Python Extension:**\n• Open VS Code\n• Click Extensions icon (left side)\n• Search "Python"\n• Install "Python" extension by Microsoft'
      },
      keyPoints: {
        ht: [
          'VS Code se gratis ak open source',
          'Gen IntelliSense (otokòmplèt kod)',
          'Debugging zouti yo entegre',
          'Git integration pou kontwòl vèsyon',
          'Terminal entegre',
          'Anpil extension ak theme yo'
        ],
        fr: [
          'VS Code est gratuit et open source',
          'A IntelliSense (auto-complétion de code)',
          'Outils de débogage intégrés',
          'Intégration Git pour contrôle de version',
          'Terminal intégré',
          'Nombreuses extensions et thèmes'
        ],
        en: [
          'VS Code is free and open source',
          'Has IntelliSense (code auto-completion)',
          'Built-in debugging tools',
          'Git integration for version control',
          'Integrated terminal',
          'Many extensions and themes'
        ]
      },
      order: 5,
      estimatedTime: 8,
      difficulty: 'easy',
      tags: ['setup', 'editor', 'tools']
    },

    // Card 6: Your First Python File
    {
      id: 'week1-practice-first-file',
      type: 'practice',
      title: {
        ht: '📄 Premye Fichye Python ou',
        fr: '📄 Votre Premier Fichier Python',
        en: '📄 Your First Python File'
      },
      content: {
        ht: 'Kounye a nou gen Python ak VS Code, ann kreye premye fichye Python nou! Python fichye yo gen extensyon `.py`.\n\n**Etap yo:**\n1. Ouvri VS Code\n2. Klike File → New File\n3. Save li kòm `hello.py` (pa bliye .py)\n4. Tip kòd sa a:\n\n```python\nprint("Hello, World!")\n```\n\n5. Save fichye a (Ctrl+S oswa Cmd+S)\n6. Kouri li ak klike right-click → "Run Python File in Terminal"',
        fr: 'Maintenant que nous avons Python et VS Code, créons notre premier fichier Python ! Les fichiers Python ont l\'extension `.py`.\n\n**Étapes :**\n1. Ouvrez VS Code\n2. Cliquez File → New File\n3. Sauvegardez-le comme `hello.py` (n\'oubliez pas .py)\n4. Tapez ce code :\n\n```python\nprint("Hello, World!")\n```\n\n5. Sauvegardez le fichier (Ctrl+S ou Cmd+S)\n6. Exécutez-le en cliquant droit → "Run Python File in Terminal"',
        en: 'Now that we have Python and VS Code, let\'s create our first Python file! Python files have the `.py` extension.\n\n**Steps:**\n1. Open VS Code\n2. Click File → New File\n3. Save it as `hello.py` (don\'t forget .py)\n4. Type this code:\n\n```python\nprint("Hello, World!")\n```\n\n5. Save the file (Ctrl+S or Cmd+S)\n6. Run it by right-clicking → "Run Python File in Terminal"'
      },
      codeExample: 'print("Hello, World!")',
      codeOutput: 'Hello, World!',
      tips: {
        ht: [
          'Toujou sove fichye ou anvan ou kouri yo',
          'Use non fichye ki klè tankou "hello.py", "calculator.py"',
          'Pa mete espas nan non fichye yo - itilize underscore (_)',
          'Krible dossye espesyal pou pwojè Python ou'
        ],
        fr: [
          'Toujours sauvegarder vos fichiers avant de les exécuter',
          'Utilisez des noms de fichiers clairs comme "hello.py", "calculator.py"',
          'Ne mettez pas d\'espaces dans les noms de fichiers - utilisez underscore (_)',
          'Créez un dossier spécial pour vos projets Python'
        ],
        en: [
          'Always save your files before running them',
          'Use clear file names like "hello.py", "calculator.py"',
          'Don\'t use spaces in file names - use underscore (_)',
          'Create a special folder for your Python projects'
        ]
      },
      order: 6,
      estimatedTime: 7,
      difficulty: 'easy',
      tags: ['practice', 'first-program', 'setup']
    },

    // Card 7: Understanding print()
    {
      id: 'week1-concept-print-function',
      type: 'concept',
      title: {
        ht: '🖨️ Fonksyon print() la',
        fr: '🖨️ La Fonction print()',
        en: '🖨️ The print() Function'
      },
      content: {
        ht: 'Fonksyon `print()` se zouti ki pi enpòtan nan Python pou montre rezilta yo. Li pèmèt nou komunikè ak itilizatè yo ak wè ki sa pwogram nou an ap fè.\n\n**Sintaks debaz:**\n```python\nprint("Text to display")\n```\n\n**Diferan fason pou itilize li:**\n• Print tèks: `print("Bonjou")`\n• Print nimewo: `print(42)`\n• Print plizyè bagay: `print("Bonjou", "Ralph")`\n• Print ak separatè: `print("A", "B", "C", sep="-")`',
        fr: 'La fonction `print()` est l\'outil le plus important en Python pour afficher les résultats. Elle nous permet de communiquer avec les utilisateurs et voir ce que notre programme fait.\n\n**Syntaxe de base :**\n```python\nprint("Text to display")\n```\n\n**Différentes façons de l\'utiliser :**\n• Imprimer du texte : `print("Bonjour")`\n• Imprimer des nombres : `print(42)`\n• Imprimer plusieurs choses : `print("Bonjour", "Ralph")`\n• Imprimer avec séparateur : `print("A", "B", "C", sep="-")`',
        en: 'The `print()` function is the most important tool in Python for displaying results. It allows us to communicate with users and see what our program is doing.\n\n**Basic syntax:**\n```python\nprint("Text to display")\n```\n\n**Different ways to use it:**\n• Print text: `print("Hello")`\n• Print numbers: `print(42)`\n• Print multiple things: `print("Hello", "Ralph")`\n• Print with separator: `print("A", "B", "C", sep="-")`'
      },
      codeExample: '# Different print examples\nprint("Hello, World!")          # Basic text\nprint(42)                       # Numbers\nprint("Hello", "Python", "!")   # Multiple items\nprint("A", "B", "C", sep="-")   # Custom separator\nprint("First line\\nSecond line") # New line character',
      codeOutput: 'Hello, World!\n42\nHello Python !\nA-B-C\nFirst line\nSecond line',
      keyPoints: {
        ht: [
          'print() otomatikman ajoute nouvo liy nan fen',
          'Ou ka print tèks, nimewo, ak bagay lòt yo',
          'Ou ka print plizyè bagay yo menm tan',
          'Itilize \\n pou nouvo liy yo nan tèks',
          'Quote yo (") mak tèks ki literal'
        ],
        fr: [
          'print() ajoute automatiquement une nouvelle ligne à la fin',
          'Vous pouvez imprimer du texte, des nombres et d\'autres choses',
          'Vous pouvez imprimer plusieurs choses en même temps',
          'Utilisez \\n pour les nouvelles lignes dans le texte',
          'Les guillemets (") marquent le texte littéral'
        ],
        en: [
          'print() automatically adds a new line at the end',
          'You can print text, numbers, and other things',
          'You can print multiple things at the same time',
          'Use \\n for new lines within text',
          'Quotes (") mark literal text'
        ]
      },
      order: 7,
      estimatedTime: 6,
      difficulty: 'easy',
      tags: ['function', 'output', 'basics']
    },

    // Card 8: Understanding input()
    {
      id: 'week1-concept-input-function',
      type: 'concept',
      title: {
        ht: '⌨️ Fonksyon input() la',
        fr: '⌨️ La Fonction input()',
        en: '⌨️ The input() Function'
      },
      content: {
        ht: 'Fonksyon `input()` pèmèt pwogram nou yo resevwa enfòmasyon ki soti nan itilizatè yo. Li rete tann itilizatè a tape yon bagay ak peze Enter.\n\n**Sintaks debaz:**\n```python\nvariable = input("Message for user")\n```\n\n**Sa ki rive:**\n1. Python montre mesaj la\n2. Rete tann itilizatè a tape\n3. Lè itilizatè a peze Enter, input retounen sa yo te tape\n4. Nou ka stock sa yo te tape nan yon varyab',
        fr: 'La fonction `input()` permet à nos programmes de recevoir des informations des utilisateurs. Elle attend que l\'utilisateur tape quelque chose et appuie sur Entrée.\n\n**Syntaxe de base :**\n```python\nvariable = input("Message for user")\n```\n\n**Ce qui se passe :**\n1. Python affiche le message\n2. Attend que l\'utilisateur tape\n3. Quand l\'utilisateur appuie sur Entrée, input retourne ce qu\'il a tapé\n4. Nous pouvons stocker ce qu\'il a tapé dans une variable',
        en: 'The `input()` function allows our programs to receive information from users. It waits for the user to type something and press Enter.\n\n**Basic syntax:**\n```python\nvariable = input("Message for user")\n```\n\n**What happens:**\n1. Python displays the message\n2. Waits for user to type\n3. When user presses Enter, input returns what they typed\n4. We can store what they typed in a variable'
      },
      codeExample: '# Getting user input\nname = input("What is your name? ")\nage = input("How old are you? ")\n\n# Using the input\nprint("Hello", name, "!")\nprint("You are", age, "years old.")\n\n# Input always returns text (string)\nnumber = input("Enter a number: ")\nprint("You entered:", number)\nprint("Type of input:", type(number))  # Will show <class \'str\'>',
      codeOutput: 'What is your name? Alice\nHow old are you? 25\nHello Alice !\nYou are 25 years old.\nEnter a number: 42\nYou entered: 42\nType of input: <class \'str\'>',
      keyPoints: {
        ht: [
          'input() toujou retounen tèks (string), menm si ou tape nimewo',
          'Mesaj la ka vid: input() san paramèt',
          'Ou bezwen konvèti input la si ou vle nimewo',
          'input() sispann pwogram nan jiska itilizatè a reponn',
          'Ou ka itilize input() pou poze kesyon yo'
        ],
        fr: [
          'input() retourne toujours du texte (string), même si vous tapez des nombres',
          'Le message peut être vide : input() sans paramètre',
          'Vous devez convertir l\'input si vous voulez des nombres',
          'input() suspend le programme jusqu\'à ce que l\'utilisateur réponde',
          'Vous pouvez utiliser input() pour poser des questions'
        ],
        en: [
          'input() always returns text (string), even if you type numbers',
          'The message can be empty: input() with no parameter',
          'You need to convert input if you want numbers',
          'input() pauses the program until user responds',
          'You can use input() to ask questions'
        ]
      },
      order: 8,
      estimatedTime: 8,
      difficulty: 'easy',
      tags: ['function', 'input', 'interaction']
    },

    // Card 9: Variables Basics
    {
      id: 'week1-concept-variables',
      type: 'concept',
      title: {
        ht: '📦 Varyab yo - Stock Enfòmasyon',
        fr: '📦 Variables - Stocker des Informations',
        en: '📦 Variables - Storing Information'
      },
      content: {
        ht: 'Varyab yo se kote nou stock enfòmasyon nan memwa òdinatè a. Yo tankou bwat yo ki gen etikèt ak ki ka gen bagay diferan yo.\n\n**Kijan pou kreye varyab:**\n```python\nname = "Ralph"\nage = 25\ncity = "Port-au-Prince"\n```\n\n**Règ yo pou non varyab:**\n• Ka kòmanse ak lèt oswa underscore (_)\n• Ka gen lèt, nimewo, ak underscore\n• Pa ka kòmanse ak nimewo\n• Case-sensitive (Name ≠ name)\n• Pa ka itilize mo Python yo (print, input, elatriye)',
        fr: 'Les variables sont des endroits où nous stockons des informations dans la mémoire de l\'ordinateur. Elles sont comme des boîtes étiquetées qui peuvent contenir différentes choses.\n\n**Comment créer des variables :**\n```python\nname = "Ralph"\nage = 25\ncity = "Port-au-Prince"\n```\n\n**Règles pour noms de variables :**\n• Peuvent commencer par une lettre ou underscore (_)\n• Peuvent contenir lettres, chiffres et underscore\n• Ne peuvent pas commencer par un chiffre\n• Sensible à la casse (Name ≠ name)\n• Ne peuvent pas utiliser les mots Python (print, input, etc.)',
        en: 'Variables are places where we store information in the computer\'s memory. They are like labeled boxes that can hold different things.\n\n**How to create variables:**\n```python\nname = "Ralph"\nage = 25\ncity = "Port-au-Prince"\n```\n\n**Rules for variable names:**\n• Can start with letter or underscore (_)\n• Can contain letters, numbers, and underscore\n• Cannot start with a number\n• Case-sensitive (Name ≠ name)\n• Cannot use Python words (print, input, etc.)'
      },
      codeExample: '# Creating variables\nfirst_name = "Alice"\nlast_name = "Johnson"\nage = 28\nis_student = True\n\n# Using variables\nprint("Full name:", first_name, last_name)\nprint("Age:", age)\nprint("Is student:", is_student)\n\n# Variables can change\nage = 29  # Changed from 28 to 29\nprint("New age:", age)\n\n# Good variable names\nuser_email = "alice@email.com"\ntotal_score = 95\nmax_attempts = 3\n\n# Bad variable names (don\'t use these)\n# 2name = "Bad"        # Can\'t start with number\n# user-email = "Bad"   # Can\'t use dash\n# print = "Bad"        # Can\'t use Python keywords',
      codeOutput: 'Full name: Alice Johnson\nAge: 28\nIs student: True\nNew age: 29',
      keyPoints: {
        ht: [
          'Varyab yo stock done nan memwa òdinatè a',
          '= se operatè asiyman (ba valè)',
          'Varyab yo ka chanje valè yo nenpòt lè',
          'Itilize non ki klè ak ki gen sans',
          'Python sensitif ka (uppercase/lowercase enpòtan)',
          'Konvansyon: itilize underscore (_) pou non ak plizyè mo'
        ],
        fr: [
          'Les variables stockent des données en mémoire',
          '= est l\'opérateur d\'assignation (donner une valeur)',
          'Les variables peuvent changer de valeur à tout moment',
          'Utilisez des noms clairs et significatifs',
          'Python est sensible à la casse (majuscules/minuscules importantes)',
          'Convention : utilisez underscore (_) pour noms multi-mots'
        ],
        en: [
          'Variables store data in memory',
          '= is the assignment operator (giving a value)',
          'Variables can change their value anytime',
          'Use clear and meaningful names',
          'Python is case-sensitive (uppercase/lowercase matters)',
          'Convention: use underscore (_) for multi-word names'
        ]
      },
      tips: {
        ht: [
          'Chwazi non varyab yo ki eksplike kisa yo kontni',
          'user_name pi bon pase x oswa n',
          'Ou ka itilize emojis nan kòmantè men pa nan non varyab',
          'Si ou pa sèten si yon non valab, teste li!'
        ],
        fr: [
          'Choisissez des noms de variables qui expliquent ce qu\'elles contiennent',
          'user_name est meilleur que x ou n',
          'Vous pouvez utiliser des emojis dans les commentaires mais pas dans les noms',
          'Si vous n\'êtes pas sûr qu\'un nom est valide, testez-le !'
        ],
        en: [
          'Choose variable names that explain what they contain',
          'user_name is better than x or n',
          'You can use emojis in comments but not in names',
          'If you\'re not sure a name is valid, test it!'
        ]
      },
      order: 9,
      estimatedTime: 10,
      difficulty: 'medium',
      tags: ['variables', 'naming', 'storage']
    },

    // Card 10: Comments
    {
      id: 'week1-concept-comments',
      type: 'concept',
      title: {
        ht: '💬 Kòmantè yo - Eksplike Kòd ou',
        fr: '💬 Commentaires - Expliquer votre Code',
        en: '💬 Comments - Explaining Your Code'
      },
      content: {
        ht: 'Kòmantè yo se tèks ki pa egzekite nan kòd la. Yo ede nou ak lòt moun yo konprann ki sa kòd la ap fè. Se bon pratik pou ajoute kòmantè yo.\n\n**Tip kòmantè:**\n• **Yon liy:** `# Sa a se yon kòmantè`\n• **Plizyè liy:** Kòmanse chak liy ak `#`\n• **Dokimantasyon:** `"""Kòmantè ki long"""`\n\n**Lè pou itilize kòmantè:**\n• Eksplike ki sa kòd la ap fè\n• Ajoute nòt pou kominote w\n• Eksplike règ biznis yo\n• TODO: bagay pou fè pi devan',
        fr: 'Les commentaires sont du texte qui ne s\'exécute pas dans le code. Ils nous aident, nous et les autres, à comprendre ce que fait le code. C\'est une bonne pratique d\'ajouter des commentaires.\n\n**Types de commentaires :**\n• **Une ligne :** `# Ceci est un commentaire`\n• **Plusieurs lignes :** Commencez chaque ligne avec `#`\n• **Documentation :** `"""Commentaire long"""`\n\n**Quand utiliser les commentaires :**\n• Expliquer ce que fait le code\n• Ajouter des notes pour votre futur vous\n• Expliquer les règles métier\n• TODO : choses à faire plus tard',
        en: 'Comments are text that doesn\'t execute in the code. They help us and others understand what the code does. It\'s good practice to add comments.\n\n**Types of comments:**\n• **Single line:** `# This is a comment`\n• **Multiple lines:** Start each line with `#`\n• **Documentation:** `"""Long comment"""`\n\n**When to use comments:**\n• Explain what the code does\n• Add notes for your future self\n• Explain business rules\n• TODO: things to do later'
      },
      codeExample: '# This is a single line comment\nprint("Hello, World!")  # Comment at end of line\n\n# Multi-line comment:\n# This program greets the user\n# and asks for their name\n# then gives a personalized greeting\n\nname = input("What\'s your name? ")  # Get user name\nprint(f"Hello, {name}!")  # Greet the user\n\n# TODO: Add age input later\n# TODO: Add validation for empty names\n\n"""\nThis is a documentation string (docstring)\nUsed for longer explanations\nUsually at the top of files or functions\n"""\n\n# Good comments explain WHY, not just WHAT\nage = int(input("Age: "))  # Convert to number for calculations\n\n# Bad comment (obvious):\n# age = 25  # Set age to 25\n\n# Good comment (explains purpose):\nage = 25  # Default age for demo users',
      codeOutput: 'What\'s your name? Alice\nHello, Alice!',
      keyPoints: {
        ht: [
          'Kòmantè yo pa egzekite - yo jis pou moun',
          'Itilize # pou kòmantè yon liy',
          'Kòmantè yo ka sou liy yo aparey oswa nan fen liy yo',
          'Eksplike POUKISA, pa jis KI SA',
          'Kòmantè yo ede w sonje ki sa ou te panse',
          'Bon pratik: kòmantè kòd konplèks yo'
        ],
        fr: [
          'Les commentaires ne s\'exécutent pas - ils sont juste pour les humains',
          'Utilisez # pour commentaires d\'une ligne',
          'Les commentaires peuvent être sur des lignes séparées ou en fin de ligne',
          'Expliquez POURQUOI, pas juste QUOI',
          'Les commentaires vous aident à vous rappeler ce que vous pensiez',
          'Bonne pratique : commentez le code complexe'
        ],
        en: [
          'Comments don\'t execute - they\'re just for humans',
          'Use # for single-line comments',
          'Comments can be on separate lines or end of lines',
          'Explain WHY, not just WHAT',
          'Comments help you remember what you were thinking',
          'Good practice: comment complex code'
        ]
      },
      tips: {
        ht: [
          'Pa kòmante bagay ki evidan tankou: x = 5  # Set x to 5',
          'Kòmante règ biznis yo ak lojik konplèks yo',
          'Mete kòmantè anvan kòd yo eksplike yo',
          'Itilize TODO pou bagay ou vle sonje fè pi devan'
        ],
        fr: [
          'Ne commentez pas l\'évident comme : x = 5  # Set x to 5',
          'Commentez les règles métier et la logique complexe',
          'Mettez les commentaires avant le code qu\'ils expliquent',
          'Utilisez TODO pour des choses à retenir pour plus tard'
        ],
        en: [
          'Don\'t comment the obvious like: x = 5  # Set x to 5',
          'Comment business rules and complex logic',
          'Put comments before the code they explain',
          'Use TODO for things to remember for later'
        ]
      },
      order: 10,
      estimatedTime: 5,
      difficulty: 'easy',
      tags: ['comments', 'documentation', 'best-practices']
    },

    // Card 11: Combining Everything
    {
      id: 'week1-practice-combining',
      type: 'practice',
      title: {
        ht: '🔗 Konbine Tout Bagay yo',
        fr: '🔗 Combiner Tout Ensemble',
        en: '🔗 Combining Everything Together'
      },
      content: {
        ht: 'Kounye a nou konnen debaz yo, ann konbine print(), input(), varyab ak kòmantè yo nan yon pwogram senp.\n\n**Pwogram Egzanp:**\n```python\n# Personal Information Collector\n# This program asks for user info and displays it nicely\n\nprint("=== Personal Information ====")\n\n# Get user information\nfirst_name = input("Enter your first name: ")\nlast_name = input("Enter your last name: ")\nage = input("Enter your age: ")\ncity = input("What city are you from? ")\n\n# Display the collected information\nprint("\\n=== Your Information ===")\nprint("Full Name:", first_name, last_name)\nprint("Age:", age, "years old")\nprint("City:", city)\nprint("\\nThank you for sharing!")\n```',
        fr: 'Maintenant que nous connaissons les bases, combinons print(), input(), variables et commentaires dans un programme simple.\n\n**Programme Exemple :**\n```python\n# Personal Information Collector\n# This program asks for user info and displays it nicely\n\nprint("=== Personal Information ====")\n\n# Get user information\nfirst_name = input("Enter your first name: ")\nlast_name = input("Enter your last name: ")\nage = input("Enter your age: ")\ncity = input("What city are you from? ")\n\n# Display the collected information\nprint("\\n=== Your Information ===")\nprint("Full Name:", first_name, last_name)\nprint("Age:", age, "years old")\nprint("City:", city)\nprint("\\nThank you for sharing!")\n```',
        en: 'Now that we know the basics, let\'s combine print(), input(), variables and comments in a simple program.\n\n**Example Program:**\n```python\n# Personal Information Collector\n# This program asks for user info and displays it nicely\n\nprint("=== Personal Information ====")\n\n# Get user information\nfirst_name = input("Enter your first name: ")\nlast_name = input("Enter your last name: ")\nage = input("Enter your age: ")\ncity = input("What city are you from? ")\n\n# Display the collected information\nprint("\\n=== Your Information ===")\nprint("Full Name:", first_name, last_name)\nprint("Age:", age, "years old")\nprint("City:", city)\nprint("\\nThank you for sharing!")\n```'
      },
      codeExample: '# Personal Information Collector\n# This program asks for user info and displays it nicely\n\nprint("=== Personal Information =====")\n\n# Get user information\nfirst_name = input("Enter your first name: ")\nlast_name = input("Enter your last name: ")\nage = input("Enter your age: ")\ncity = input("What city are you from? ")\n\n# Display the collected information\nprint("\\n=== Your Information ===")\nprint("Full Name:", first_name, last_name)\nprint("Age:", age, "years old")\nprint("City:", city)\nprint("\\nThank you for sharing!")',
      codeOutput: '=== Personal Information =====\nEnter your first name: Alice\nEnter your last name: Smith\nEnter your age: 25\nWhat city are you from? Miami\n\n=== Your Information ===\nFull Name: Alice Smith\nAge: 25 years old\nCity: Miami\n\nThank you for sharing!',
      tips: {
        ht: [
          'Sèvi ak kòmantè yo pou òganize kòd ou',
          'Groupe kòd ki fè bagay menm yo ansanm',
          'Itilize espas yo (\\n) pou fè output yo pi bèl',
          'Teste pwogram ou ak valè diferan yo'
        ],
        fr: [
          'Utilisez les commentaires pour organiser votre code',
          'Groupez le code qui fait la même chose ensemble',
          'Utilisez les espaces (\\n) pour rendre la sortie plus jolie',
          'Testez votre programme avec différentes valeurs'
        ],
        en: [
          'Use comments to organize your code',
          'Group code that does similar things together',
          'Use spaces (\\n) to make output prettier',
          'Test your program with different values'
        ]
      },
      order: 11,
      estimatedTime: 8,
      difficulty: 'medium',
      tags: ['practice', 'combining', 'program-structure']
    }

    // Additional cards would continue here...
    // Cards 12-25 would include more practice exercises, advanced concepts, and preparation for the mini-project
  ],
  
  quiz: [
    {
      id: 'week1-quiz-1',
      question: {
        ht: 'Ki fonksyon nou itilize pou montre tèks sou ekran an?',
        fr: 'Quelle fonction utilisons-nous pour afficher du texte à l\'écran ?',
        en: 'What function do we use to display text on the screen?'
      },
      options: [
        { ht: 'show()', fr: 'show()', en: 'show()' },
        { ht: 'print()', fr: 'print()', en: 'print()' },
        { ht: 'display()', fr: 'display()', en: 'display()' },
        { ht: 'output()', fr: 'output()', en: 'output()' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'print() se fonksyon ki montre tèks ak lòt enfòmasyon yo sou ekran an. Li se zouti ki pi enpòtan pou output nan Python.',
        fr: 'print() est la fonction qui affiche du texte et d\'autres informations à l\'écran. C\'est l\'outil le plus important pour la sortie en Python.',
        en: 'print() is the function that displays text and other information on the screen. It\'s the most important tool for output in Python.'
      },
      difficulty: 'easy',
      tags: ['functions', 'output', 'basics']
    },
    {
      id: 'week1-quiz-2',
      question: {
        ht: 'Ki karaktè nou itilize pou kòmanse yon kòmantè nan Python?',
        fr: 'Quel caractère utilisons-nous pour commencer un commentaire en Python ?',
        en: 'What character do we use to start a comment in Python?'
      },
      options: [
        { ht: '//', fr: '//', en: '//' },
        { ht: '#', fr: '#', en: '#' },
        { ht: '/*', fr: '/*', en: '/*' },
        { ht: '--', fr: '--', en: '--' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '# se karaktè ki kòmanse kòmantè yo nan Python. Tout bagay ki vin apre # sou liy la pa egzekite.',
        fr: '# est le caractère qui commence les commentaires en Python. Tout ce qui vient après # sur la ligne ne s\'exécute pas.',
        en: '# is the character that starts comments in Python. Everything that comes after # on the line doesn\'t execute.'
      },
      difficulty: 'easy',
      tags: ['comments', 'syntax']
    },
    {
      id: 'week1-quiz-3',
      question: {
        ht: 'Ki sa kòd sa a ap montre?\n\nname = "Zewo"\nprint("Hello", name)',
        fr: 'Que va afficher ce code ?\n\nname = "Zewo"\nprint("Hello", name)',
        en: 'What will this code output?\n\nname = "Zewo"\nprint("Hello", name)'
      },
      options: [
        { ht: 'Hello name', fr: 'Hello name', en: 'Hello name' },
        { ht: 'Hello Zewo', fr: 'Hello Zewo', en: 'Hello Zewo' },
        { ht: '"Hello", "Zewo"', fr: '"Hello", "Zewo"', en: '"Hello", "Zewo"' },
        { ht: 'Erè', fr: 'Erreur', en: 'Error' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Varyab "name" gen valè "Zewo". Lè nou print "Hello", name, Python remplace "name" ak valè li yo ki se "Zewo".',
        fr: 'La variable "name" a la valeur "Zewo". Quand nous imprimons "Hello", name, Python remplace "name" par sa valeur qui est "Zewo".',
        en: 'The variable "name" has the value "Zewo". When we print "Hello", name, Python replaces "name" with its value which is "Zewo".'
      },
      difficulty: 'medium',
      tags: ['variables', 'print', 'output']
    },
    {
      id: 'week1-quiz-4',
      question: {
        ht: 'Ki fonksyon ki pèmèt itilizatè yo tape enfòmasyon?',
        fr: 'Quelle fonction permet aux utilisateurs de taper des informations ?',
        en: 'What function allows users to type information?'
      },
      options: [
        { ht: 'type()', fr: 'type()', en: 'type()' },
        { ht: 'ask()', fr: 'ask()', en: 'ask()' },
        { ht: 'input()', fr: 'input()', en: 'input()' },
        { ht: 'read()', fr: 'read()', en: 'read()' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'input() rete tann itilizatè a tape yon bagay ak peze Enter. Li retounen sa itilizatè a te tape kòm yon string.',
        fr: 'input() attend que l\'utilisateur tape quelque chose et appuie sur Entrée. Elle retourne ce que l\'utilisateur a tapé comme une chaîne.',
        en: 'input() waits for the user to type something and press Enter. It returns what the user typed as a string.'
      },
      difficulty: 'easy',
      tags: ['functions', 'input', 'user-interaction']
    },
    {
      id: 'week1-quiz-5',
      question: {
        ht: 'Ki non varyab sa yo ki pa valab nan Python?',
        fr: 'Quel nom de variable n\'est PAS valide en Python ?',
        en: 'Which variable name is NOT valid in Python?'
      },
      options: [
        { ht: 'user_name', fr: 'user_name', en: 'user_name' },
        { ht: '_age', fr: '_age', en: '_age' },
        { ht: '2number', fr: '2number', en: '2number' },
        { ht: 'color', fr: 'color', en: 'color' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: '2number pa valab paske non varyab yo pa ka kòmanse ak yon nimewo. Yo dwe kòmanse ak yon lèt oswa underscore (_).',
        fr: '2number n\'est pas valide parce que les noms de variables ne peuvent pas commencer par un chiffre. Ils doivent commencer par une lettre ou underscore (_).',
        en: '2number is not valid because variable names cannot start with a number. They must start with a letter or underscore (_).'
      },
      difficulty: 'medium',
      tags: ['variables', 'naming-rules', 'syntax']
    }
  ],

  miniProject: {
    title: {
      ht: 'Pwojè Mini: "Pwogram Salitasyon Pèsonèl"',
      fr: 'Mini-Projet : "Programme de Salutation Personnelle"',
      en: 'Mini-Project: "Personal Greeter Program"'
    },
    description: {
      ht: 'Kreye yon pwogram entèraktif ki salye itilizatè a pa non yo, mande kijan yo santi yo jodi a, ak bay yo yon mesaj zanmi ak pèsonalize.',
      fr: 'Créez un programme interactif qui salue l\'utilisateur par son nom, demande comment il se sent aujourd\'hui, et lui donne un message amical et personnalisé.',
      en: 'Create an interactive program that greets the user by name, asks how they\'re feeling today, and gives them a friendly and personalized message.'
    },
    requirements: {
      ht: [
        'Mande non premye ak dènyè itilizatè a',
        'Mande kijan yo santi yo jodi a',
        'Mande vil kote yo rete',
        'Bay yon salitasyon ki gen non konplè yo',
        'Montre yon mesaj ki gen santiman yo ak vil la',
        'Itilize kòmantè yo pou eksplike chak pati',
        'Fè output la bèl ak òganize'
      ],
      fr: [
        'Demander le prénom et nom de famille de l\'utilisateur',
        'Demander comment il se sent aujourd\'hui',
        'Demander la ville où il habite',
        'Donner une salutation qui inclut le nom complet',
        'Afficher un message qui inclut le sentiment et la ville',
        'Utiliser des commentaires pour expliquer chaque partie',
        'Rendre la sortie belle et organisée'
      ],
      en: [
        'Ask for user\'s first and last name',
        'Ask how they\'re feeling today',
        'Ask what city they live in',
        'Give a greeting that includes the full name',
        'Display a message that includes their feeling and city',
        'Use comments to explain each part',
        'Make the output beautiful and organized'
      ]
    },
    starterCode: '# Personal Greeter Program - Week 1 Mini Project\n# This program creates a personalized greeting for the user\n\n# TODO: Add a welcome message\n\n# TODO: Get user information\n#   - First name\n#   - Last name  \n#   - How they\'re feeling\n#   - Their city\n\n# TODO: Create personalized greeting\n\n# TODO: Display final message',
    sampleSolution: '# Personal Greeter Program - Week 1 Mini Project\n# This program creates a personalized greeting for the user\n\nprint("🌟 Welcome to the Personal Greeter! 🌟")\nprint("=" * 40)\nprint("Let me get to know you better...")\nprint()\n\n# Get user information\nprint("👋 First, tell me about yourself:")\nfirst_name = input("What\'s your first name? ")\nlast_name = input("What\'s your last name? ")\nfeeling = input("How are you feeling today? ")\ncity = input("What city do you live in? ")\n\n# Create personalized greeting\nprint("\\n" + "=" * 40)\nprint("✨ HERE\'S YOUR PERSONALIZED GREETING ✨")\nprint("=" * 40)\nprint()\nprint(f"Hello, {first_name} {last_name}!")\nprint(f"It\'s wonderful to meet you!")\nprint()\nprint(f"I\'m so glad to hear you\'re feeling {feeling} today!")\nprint(f"I hope you\'re enjoying your time in {city}.")\nprint()\nprint("🎉 Thanks for using the Personal Greeter!")\nprint("Have an amazing day!")\n\n# Bonus: Create a simple \"business card\"\nprint("\\n" + "-" * 30)\nprint("     DIGITAL BUSINESS CARD")\nprint("-" * 30)\nprint(f"Name: {first_name} {last_name}")\nprint(f"City: {city}")\nprint(f"Mood: {feeling}")\nprint(f"Date: Today")\nprint("-" * 30)',
    challenges: {
      ht: [
        'Ajoute yon sistèm òganizasyon ak koulè emoji yo',
        'Kreye yon "kat vizit" dijital nan fen an',
        'Ajoute validasyon pou tcheke si non an pa vid',
        'Fè pwogram lan mande laj ak montre yon mesaj ki apropye pou laj',
        'Ajoute yon countdown 3-2-1 anvan montre mesaj final la'
      ],
      fr: [
        'Ajouter un système d\'organisation avec des emojis colorés',
        'Créer une "carte de visite" numérique à la fin',
        'Ajouter la validation pour vérifier si le nom n\'est pas vide',
        'Faire demander l\'âge au programme et afficher un message approprié pour l\'âge',
        'Ajouter un décompte 3-2-1 avant d\'afficher le message final'
      ],
      en: [
        'Add an organization system with colorful emojis',
        'Create a digital "business card" at the end',
        'Add validation to check if name is not empty',
        'Make the program ask for age and show age-appropriate message',
        'Add a 3-2-1 countdown before showing the final message'
      ]
    }
  }
};