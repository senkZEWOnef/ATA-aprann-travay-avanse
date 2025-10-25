// Python for Beginners - 15 Week Comprehensive Course
export interface PythonLessonContent {
  id: string;
  order: number;
  titleHt: string;
  titleFr: string;
  titleEn: string;
  duration: number; // in minutes
  weekNumber: number;
  objectives: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  keyConceptsCode: {
    concept: string;
    codeExample: string;
    explanation: {
      ht: string;
      fr: string;
      en: string;
    };
  }[];
  practiceExercises: {
    title: {
      ht: string;
      fr: string;
      en: string;
    };
    instruction: {
      ht: string;
      fr: string;
      en: string;
    };
    starterCode?: string;
    expectedOutput?: string;
    solution: string;
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
    starterCode?: string;
    sampleSolution: string;
  };
  quiz: {
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
  }[];
  homework: {
    ht: string;
    fr: string;
    en: string;
  };
  nextWeekPreview: {
    ht: string;
    fr: string;
    en: string;
  };
}

export const pythonBeginnersCourse: PythonLessonContent[] = [
  // Week 1: Introduction to Python
  {
    id: 'python-week-1',
    order: 1,
    weekNumber: 1,
    titleHt: 'Entwodiksyon nan Python',
    titleFr: 'Introduction à Python',
    titleEn: 'Introduction to Python',
    duration: 90,
    objectives: {
      ht: [
        'Konprann ki sa Python ye ak kijan li fonksyone',
        'Enstale Python ak VS Code sou òdinatè w',
        'Ekri ak egzekite premye script ou',
        'Itilize deklarasyon print ak kòmantè yo',
        'Kreye yon pwogram senp ki salye itilizatè a'
      ],
      fr: [
        'Comprendre ce qu\'est Python et comment il fonctionne',
        'Installer Python et VS Code sur votre ordinateur',
        'Écrire et exécuter votre premier script',
        'Utiliser les instructions print et les commentaires',
        'Créer un programme simple qui salue l\'utilisateur'
      ],
      en: [
        'Understand what Python is and how it works',
        'Install Python and VS Code on your computer',
        'Write and execute your first script',
        'Use print statements and comments',
        'Create a simple program that greets the user'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'What is Python?',
        codeExample: '# Python se yon langaj pwogramason ki lisib ak fleksib\n# Python est un langage de programmation lisible et flexible\n# Python is a readable and flexible programming language\n\nprint("Welcome to Python!")\nprint("Byenvni nan Python!")\nprint("Bienvenue en Python!")',
        explanation: {
          ht: 'Python se yon langaj pwogram ki wo-nivo ak jimnastik-pwòp ki fasil pou li ak konprann. Li itilize nan plizyè domèn tankou devlopman wèb, entelijan atifisyèl, ak analiz done.',
          fr: 'Python est un langage de programmation de haut niveau et polyvalent qui est facile à lire et comprendre. Il est utilisé dans de nombreux domaines comme le développement web, l\'intelligence artificielle, et l\'analyse de données.',
          en: 'Python is a high-level, versatile programming language that is easy to read and understand. It is used in many areas like web development, artificial intelligence, and data analysis.'
        }
      },
      {
        concept: 'print() function',
        codeExample: '# Fonksyon print() la montre tèks sou ekran an\nprint("Hello, World!")\nprint("Bonjou, Monn lan!")\nprint("Bonjour, le Monde!")\n\n# Ou ka print plizyè bagay yo menm tan an\nprint("Bonjou", "Ralph", "!")',
        explanation: {
          ht: 'Fonksyon print() la se zouti ki pi enpòtan pou montre rezilta yo. Li ka montre tèks, nimewo, ak lòt enfòmasyon yo sou ekran an.',
          fr: 'La fonction print() est l\'outil le plus important pour afficher les résultats. Elle peut afficher du texte, des nombres, et d\'autres informations à l\'écran.',
          en: 'The print() function is the most important tool for displaying results. It can display text, numbers, and other information on the screen.'
        }
      },
      {
        concept: 'input() function',
        codeExample: '# Fonksyon input() la pèmèt nou resevwa enfòmasyon ki soti nan itilizatè a\nname = input("What is your name? ")\nprint("Nice to meet you,", name, "!")\n\n# Nan Kreyòl ak Français\nnom = input("Ki jan yo rele w? ")\nprint("Mwen kontan rankontre w,", nom, "!")\n\nnom_fr = input("Comment vous appelez-vous? ")\nprint("Ravi de vous rencontrer,", nom_fr, "!")',
        explanation: {
          ht: 'Fonksyon input() la rete tann itilizatè a tape yon bagay epi li retounen sa yo te tape a kòm yon string (tèks).',
          fr: 'La fonction input() attend que l\'utilisateur tape quelque chose puis elle retourne ce qui a été tapé comme une chaîne de caractères (texte).',
          en: 'The input() function waits for the user to type something and then returns what was typed as a string (text).'
        }
      },
      {
        concept: 'Variables',
        codeExample: '# Varyab yo se kote nou stock enfòmasyon yo\nname = "Ralph"\nage = 25\ncity = "Port-au-Prince"\n\n# Variables sont des endroits où nous stockons les informations\nnom = "Marie"\nlaj = 30\nvil = "Cap-Haïtien"\n\nprint("Bonjou", name, ", ou gen", age, "an ak ou rete nan", city)',
        explanation: {
          ht: 'Varyab yo se kote nou stock done yo nan memwa òdinatè a. Yo gen yon non ak yon valè.',
          fr: 'Les variables sont des endroits où nous stockons les données dans la mémoire de l\'ordinateur. Elles ont un nom et une valeur.',
          en: 'Variables are places where we store data in the computer\'s memory. They have a name and a value.'
        }
      },
      {
        concept: 'Comments',
        codeExample: '# Sa a se yon kòmantè nan Kreyòl\n# Ceci est un commentaire en français\n# This is a comment in English\n\nprint("Hello!")  # Kòmantè yo ka sou menm liy ak kòd la\n\n# Kòmantè yo ede nou eksplike kòd la\n# Les commentaires nous aident à expliquer le code\n# Comments help us explain the code',
        explanation: {
          ht: 'Kòmantè yo kòmanse ak # ak yo pa egzekite. Yo ede nou eksplike ki sa kòd la ap fè.',
          fr: 'Les commentaires commencent par # et ne s\'exécutent pas. Ils nous aident à expliquer ce que fait le code.',
          en: 'Comments start with # and are not executed. They help us explain what the code does.'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Premye Pwogram ou',
          fr: 'Votre Premier Programme',
          en: 'Your First Program'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki montre: "Bonjou, mwen ap aprann Python!" ak ajoute kòmantè yo.',
          fr: 'Écrivez un programme qui affiche: "Bonjour, j\'apprends Python!" et ajoutez des commentaires.',
          en: 'Write a program that displays: "Hello, I am learning Python!" and add comments.'
        },
        expectedOutput: 'Hello, I am learning Python!\nBonjou, mwen ap aprann Python!\nBonjour, j\'apprends Python!',
        solution: '# Sa a se premye pwogram mwen\n# Ceci est mon premier programme\n# This is my first program\n\nprint("Hello, I am learning Python!")\nprint("Bonjou, mwen ap aprann Python!")\nprint("Bonjour, j\'apprends Python!")'
      },
      {
        title: {
          ht: 'Prezantasyon Pèsonèl',
          fr: 'Présentation Personnelle',
          en: 'Personal Introduction'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki montre non w ak laj ou, ak kote w rete sou liy diferan yo.',
          fr: 'Écrivez un programme qui affiche votre nom et votre âge, et où vous habitez sur des lignes différentes.',
          en: 'Write a program that displays your name and age, and where you live on different lines.'
        },
        expectedOutput: 'My name is [Your Name]\nI am [Your Age] years old\nI live in [Your City]',
        solution: '# Enfòmasyon sou mwen\nprint("My name is Ralph")\nprint("I am 25 years old")\nprint("I live in Port-au-Prince")\n\n# Men enfòmasyon sou mwen\nprint("Non mwen se Ralph")\nprint("Mwen gen 25 an")\nprint("Mwen rete nan Pòtoprens")'
      },
      {
        title: {
          ht: 'Kalkilatè Senp',
          fr: 'Calculatrice Simple',
          en: 'Simple Calculator'
        },
        instruction: {
          ht: 'Mande itilizatè a de nimewo ak montre sòm yo.',
          fr: 'Demandez à l\'utilisateur deux nombres et affichez leur somme.',
          en: 'Ask the user for two numbers and display their sum.'
        },
        expectedOutput: 'Enter first number: 5\nEnter second number: 3\nThe sum is: 8',
        solution: '# Kalkilatè senp ki ajoute de nimewo\nprint("Simple Calculator - Addition")\n\n# Mande premye nimewo a\nnum1 = input("Enter first number: ")\n# Mande dezyèm nimewo a\nnum2 = input("Enter second number: ")\n\n# Konvèti yo nan nimewo ak kalkile sòm nan\nresult = int(num1) + int(num2)\n\n# Montre rezilta a\nprint("The sum is:", result)'
      }
    ],
    miniProject: {
      title: {
        ht: 'Pwogram Salitasyon Pèsonèl',
        fr: 'Programme de Salutation Personnelle',
        en: 'Personal Greeter Program'
      },
      description: {
        ht: 'Kreye yon pwogram ki salye itilizatè a pa non yo, mande l kijan li santi l jodi a, ak di l yon mesaj zanmi.',
        fr: 'Créez un programme qui salue l\'utilisateur par son nom, lui demande comment il se sent aujourd\'hui, et lui dit un message amical.',
        en: 'Create a program that greets the user by name, asks how they\'re feeling today, and gives them a friendly message.'
      },
      requirements: {
        ht: [
          'Salye itilizatè a ak mande non yo',
          'Mande l kijan li santi l jodi a',
          'Montre yon mesaj zanmi ki gen non yo ak santiman yo',
          'Itilize kòmantè yo pou eksplike chak etap',
          'Montre yon mesaj akèy ak bon jan kalite'
        ],
        fr: [
          'Saluer l\'utilisateur et demander son nom',
          'Lui demander comment il se sent aujourd\'hui',
          'Afficher un message amical qui inclut leur nom et leur sentiment',
          'Utiliser des commentaires pour expliquer chaque étape',
          'Afficher un message d\'accueil de qualité'
        ],
        en: [
          'Greet the user and ask for their name',
          'Ask how they\'re feeling today',
          'Display a friendly message that includes their name and feeling',
          'Use comments to explain each step',
          'Display a quality welcome message'
        ]
      },
      starterCode: '# Pwogram Salitasyon Pèsonèl\n# Programme de Salutation Personnelle\n# Personal Greeter Program\n\n# Etap 1: Salye ak mande non an\n# Étape 1: Saluer et demander le nom\n# Step 1: Greet and ask for name\n\n# Etap 2: Mande kijan yo santi yo\n# Étape 2: Demander comment ils se sentent\n# Step 2: Ask how they feel\n\n# Etap 3: Montre mesaj zanmi an\n# Étape 3: Afficher le message amical\n# Step 3: Display friendly message',
      sampleSolution: '# Pwogram Salitasyon Pèsonèl\n# Programme de Salutation Personnelle\n# Personal Greeter Program\n\nprint("=== Byenvni nan Pwogram Salitasyon an ===")\nprint("=== Bienvenue au Programme de Salutation ===")\nprint("=== Welcome to the Greeting Program ===")\nprint()\n\n# Etap 1: Salye ak mande non an\nprint("Bonjou! / Bonjour! / Hello!")\nname = input("Ki jan yo rele w? / Comment vous appelez-vous? / What is your name? ")\nprint()\n\n# Etap 2: Mande kijan yo santi yo\nprint(f"Bonjou {name}! / Bonjour {name}! / Hello {name}!")\nfeeling = input("Kijan ou santi w jodi a? / Comment vous sentez-vous aujourd\'hui? / How are you feeling today? ")\nprint()\n\n# Etap 3: Montre mesaj zanmi an\nprint(f"Mwen kontan tande {name} santi l {feeling} jodi a!")\nprint(f"Je suis content d\'entendre que {name} se sent {feeling} aujourd\'hui!")\nprint(f"I\'m glad to hear that {name} is feeling {feeling} today!")\nprint()\nprint("Mèsi pou itilize pwogram nan! / Merci d\'utiliser le programme! / Thanks for using the program!")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki fonksyon nou itilize pou montre tèks sou ekran an?',
          fr: 'Quelle fonction utilisons-nous pour afficher du texte à l\'écran ?',
          en: 'What function do we use to display text on the screen?'
        },
        options: [
          { ht: 'show()', fr: 'show()', en: 'show()' },
          { ht: 'print()', fr: 'print()', en: 'print()' },
          { ht: 'display()', fr: 'display()', en: 'display()' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'print() se fonksyon ki montre tèks ak lòt enfòmasyon yo sou ekran an',
          fr: 'print() est la fonction qui affiche du texte et d\'autres informations à l\'écran',
          en: 'print() is the function that displays text and other information on the screen'
        }
      },
      {
        question: {
          ht: 'Ki karaktè nou itilize pou kòmanse yon kòmantè nan Python?',
          fr: 'Quel caractère utilisons-nous pour commencer un commentaire en Python ?',
          en: 'What character do we use to start a comment in Python?'
        },
        options: [
          { ht: '//', fr: '//', en: '//' },
          { ht: '#', fr: '#', en: '#' },
          { ht: '/*', fr: '/*', en: '/*' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '# se karaktè ki kòmanse kòmantè yo nan Python. Yo pa egzekite nan pwogram nan.',
          fr: '# est le caractère qui commence les commentaires en Python. Ils ne s\'exécutent pas dans le programme.',
          en: '# is the character that starts comments in Python. They do not execute in the program.'
        }
      },
      {
        question: {
          ht: 'Ki sa kòd sa a ap fè?\nname = "Ralph"\nprint("Bonjou", name)',
          fr: 'Que fait ce code ?\nname = "Ralph"\nprint("Bonjour", name)',
          en: 'What does this code do?\nname = "Ralph"\nprint("Hello", name)'
        },
        options: [
          { ht: 'Li montre "Bonjou name"', fr: 'Il affiche "Bonjour name"', en: 'It displays "Hello name"' },
          { ht: 'Li montre "Bonjou Ralph"', fr: 'Il affiche "Bonjour Ralph"', en: 'It displays "Hello Ralph"' },
          { ht: 'Li bay erè', fr: 'Il donne une erreur', en: 'It gives an error' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'Varyab "name" gen valè "Ralph", donk print() ap montre "Bonjou Ralph"',
          fr: 'La variable "name" a la valeur "Ralph", donc print() affichera "Bonjour Ralph"',
          en: 'The variable "name" has the value "Ralph", so print() will display "Hello Ralph"'
        }
      },
      {
        question: {
          ht: 'Ki fonksyon ki pèmèt itilizatè a tape yon bagay?',
          fr: 'Quelle fonction permet à l\'utilisateur de taper quelque chose ?',
          en: 'What function allows the user to type something?'
        },
        options: [
          { ht: 'type()', fr: 'type()', en: 'type()' },
          { ht: 'ask()', fr: 'ask()', en: 'ask()' },
          { ht: 'input()', fr: 'input()', en: 'input()' }
        ],
        correctAnswer: 2,
        explanation: {
          ht: 'input() se fonksyon ki rete tann itilizatè a tape yon bagay ak retounen li kòm yon string',
          fr: 'input() est la fonction qui attend que l\'utilisateur tape quelque chose et le retourne comme une chaîne',
          en: 'input() is the function that waits for the user to type something and returns it as a string'
        }
      },
      {
        question: {
          ht: 'Ki nan sa yo ki pa yon non varyab valab?',
          fr: 'Lequel de ceux-ci n\'est PAS un nom de variable valide ?',
          en: 'Which of these is NOT a valid variable name?'
        },
        options: [
          { ht: 'user_name', fr: 'user_name', en: 'user_name' },
          { ht: '_age', fr: '_age', en: '_age' },
          { ht: '2number', fr: '2number', en: '2number' }
        ],
        correctAnswer: 2,
        explanation: {
          ht: 'Non varyab yo pa ka kòmanse ak yon chif. Yo dwe kòmanse ak yon lèt oswa _',
          fr: 'Les noms de variables ne peuvent pas commencer par un chiffre. Ils doivent commencer par une lettre ou _',
          en: 'Variable names cannot start with a number. They must start with a letter or _'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon pwogram ki mande itilizatè a enfòmasyon sou tèt yo (non, laj, koulè yo pi renmen) ak montre yon pòtrè konplè ak kòmantè yo nan de lang yo.',
      fr: 'Créez un programme qui demande à l\'utilisateur des informations sur eux-mêmes (nom, âge, couleur préférée) et affiche un profil complet avec des commentaires dans les deux langues.',
      en: 'Create a program that asks the user for information about themselves (name, age, favorite color) and displays a complete profile with comments in both languages.'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: N ap aprann sou varyab ak tip done yo (int, float, str, bool) ak kijan pou konvèti yo',
      fr: 'Semaine prochaine : Nous apprendrons les variables et les types de données (int, float, str, bool) et comment les convertir',
      en: 'Next week: We will learn about variables and data types (int, float, str, bool) and how to convert them'
    }
  },

  // Week 2: Variables & Data Types
  {
    id: 'python-week-2',
    order: 2,
    weekNumber: 2,
    titleHt: 'Varyab ak Tip Done yo',
    titleFr: 'Variables et Types de Données',
    titleEn: 'Variables & Data Types',
    duration: 90,
    objectives: {
      ht: [
        'Konprann ki sa varyab yo ye ak kijan pou stock enfòmasyon yo',
        'Aprann tip done debaz yo: int, float, str, bool',
        'Idantifye ak manipile diferan kalite done yo',
        'Fè konvèsyon ant tip done yo ak fonksyon yo',
        'Itilize fonksyon input() ak jere done itilizatè a'
      ],
      fr: [
        'Comprendre ce que sont les variables et comment stocker les informations',
        'Apprendre les types de données de base : int, float, str, bool',
        'Identifier et manipuler différents types de données',
        'Effectuer des conversions entre types de données avec les fonctions',
        'Utiliser la fonction input() et gérer les données utilisateur'
      ],
      en: [
        'Understand what variables are and how to store information',
        'Learn basic data types: int, float, str, bool',
        'Identify and manipulate different kinds of data',
        'Perform type conversions between data types with functions',
        'Use the input() function and handle user data'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'What is a Variable?',
        codeExample: '# Varyab yo tankou bwat ki gen etikèt ki stock enfòmasyon nan memwa\n# Les variables sont comme des boîtes étiquetées qui stockent des informations en mémoire\n# Variables are like labeled boxes that store information in memory\n\nname = "Ralph"    # Yon bwat ak etikèt "name" ki gen "Ralph" ladan l\nage = 30          # Yon bwat ak etikèt "age" ki gen 30 ladan l\nheight = 1.75     # Yon bwat ak etikèt "height" ki gen 1.75 ladan l\n\n# Ou ka chanje sa ki nan bwat la\nage = 31  # Kounye a bwat "age" gen 31\nprint("Laj la kounye a:", age)',
        explanation: {
          ht: 'Yon varyab se tankou yon bwat ak yon etikèt ki stock enfòmasyon nan memwa òdinatè a. Ou ka chanje sa ki nan bwat la nenpòt lè.',
          fr: 'Une variable est comme une boîte avec une étiquette qui stocke des informations dans la mémoire de l\'ordinateur. Vous pouvez changer ce qui est dans la boîte à tout moment.',
          en: 'A variable is like a box with a label that stores information in the computer\'s memory. You can change what\'s inside the box at any time.'
        }
      },
      {
        concept: 'Data Types',
        codeExample: '# Tip done yo nan Python\n# Types de données en Python\n# Data types in Python\n\n# int - nimewo antye (nombres entiers / whole numbers)\nage = 25\nscore = -10\nyear = 2024\n\n# float - nimewo ak kòm (nombres décimaux / decimal numbers)\nheight = 1.75\ntemperature = 98.6\nprice = 19.99\n\n# str - tèks (texte / text)\nname = "Marie"\ncity = "Port-au-Prince"\nmessage = \'Bonjou!\'\n\n# bool - valè lojik (valeurs logiques / logical values)\nis_student = True\nis_working = False\nhas_car = True\n\n# Tcheke tip yon varyab\nprint("Tip non an:", type(name))      # <class \'str\'>\nprint("Tip laj la:", type(age))       # <class \'int\'>\nprint("Tip pwi a:", type(height))     # <class \'float\'>\nprint("Tip etidyan an:", type(is_student)) # <class \'bool\'>',
        explanation: {
          ht: 'Chak done nan Python gen yon tip espesifik. Kat tip debaz yo se: int (nimewo antye), float (nimewo ak kòm), str (tèks), ak bool (True oswa False).',
          fr: 'Chaque donnée en Python a un type spécifique. Les quatre types de base sont : int (nombres entiers), float (nombres décimaux), str (texte), et bool (True ou False).',
          en: 'Each piece of data in Python has a specific type. The four basic types are: int (whole numbers), float (decimal numbers), str (text), and bool (True or False).'
        }
      },
      {
        concept: 'Type Conversion',
        codeExample: '# Konvèsyon tip done\n# Conversion de types de données\n# Type conversion\n\n# Konvèti string nan nimewo\nage_text = "25"\nage_number = int(age_text)  # "25" vin 25\nprint("Laj kòm nimewo:", age_number)\n\n# Konvèti nimewo nan string\nscore = 95\nscore_text = str(score)     # 95 vin "95"\nprint("Nòt kòm tèks:", score_text)\n\n# Konvèti nan float\nprice_text = "19.99"\nprice_number = float(price_text)  # "19.99" vin 19.99\nprint("Pri a:", price_number)\n\n# Konvèsyon ak input() - TRÈ ENPÒTAN!\nuser_age = input("Ki laj ou? ")     # Retounen yon string toujou\nage_int = int(user_age)             # Konvèti nan int\nprint("Lè w ap gen 10 an ankò:", age_int + 10)\n\n# Egzanp ak kalkilatè\nnum1 = float(input("Premye nimewo: "))\nnum2 = float(input("Dezyèm nimewo: "))\nresult = num1 + num2\nprint("Rezilta a:", result)',
        explanation: {
          ht: 'Python ka chanje yon tip done nan yon lòt ak fonksyon yo: int() pou entye, float() pou desimal, str() pou tèks, ak bool() pou True/False. Sa trè enpòtan lè w ap itilize input().',
          fr: 'Python peut changer un type de données en un autre avec les fonctions : int() pour entier, float() pour décimal, str() pour texte, et bool() pour True/False. C\'est très important quand vous utilisez input().',
          en: 'Python can change one data type to another with functions: int() for integer, float() for decimal, str() for text, and bool() for True/False. This is very important when using input().'
        }
      },
      {
        concept: 'Variable Naming Rules',
        codeExample: '# Règ pou bay non varyab yo\n# Règles pour nommer les variables\n# Variable naming rules\n\n# ✅ Bon non yo (Good names)\nfirst_name = "Jean"\nuser_age = 25\n_private_data = "secret"\nCONSTANT_VALUE = 100\nmyVariable = "camelCase"  # Style konnen yo\n\n# ❌ Non ki pa bon yo (Bad names)\n# 2name = "error"        # Pa ka kòmanse ak chif\n# first-name = "error"   # Pa gen tiret\n# my name = "error"      # Pa gen espas\n# class = "error"        # Mo Python rezève\n\n# ⚠️ Atansyon: Python ka wè diferans ant majiskil ak miniskil\nName = "Pierre"\nname = "Marie"\nNAME = "Paul"\nprint(Name, name, NAME)  # Twa varyab diferan!\n\n# Konsèy pou bon non\nstudent_count = 25      # Klè ak deskriktif\ntotal_price = 150.50    # Itilize underscore\nis_valid = True         # Kòmanse ak "is_" pou boolean',
        explanation: {
          ht: 'Non varyab yo dwe kòmanse ak yon lèt oswa _, ka gen lèt, chif ak _, men pa gen espas oswa karaktè espesyal. Python ka wè diferans ant majiskil ak miniskil.',
          fr: 'Les noms de variables doivent commencer par une lettre ou _, peuvent contenir des lettres, chiffres et _, mais pas d\'espaces ou caractères spéciaux. Python fait la différence entre majuscules et minuscules.',
          en: 'Variable names must start with a letter or _, can contain letters, numbers and _, but no spaces or special characters. Python is case-sensitive.'
        }
      },
      {
        concept: 'Working with input()',
        codeExample: '# Travay ak input() - ENPÒTAN POU KONPRANN!\n# Travailler avec input() - IMPORTANT À COMPRENDRE!\n# Working with input() - IMPORTANT TO UNDERSTAND!\n\n# input() TOUJOU retounen yon string\nname = input("Ki jan yo rele w? ")  # Retounen string\nprint("Tip la:", type(name))        # <class \'str\'>\n\n# Konvèsyon nesesè pou nimewo\nage_str = input("Ki laj ou? ")      # "25" (string)\nage_int = int(age_str)              # 25 (int)\nprint("Lè w ap gen 5 an ankò:", age_int + 5)\n\n# Amelyore ak mesaj pi klè\nprint("=== Kalkilatè Senp ===")\nnum1 = float(input("Bay premye nimewo a: "))\noperator = input("Ki operasyon ou vle (+, -, *, /)? ")\nnum2 = float(input("Bay dezyèm nimewo a: "))\n\nif operator == "+":\n    result = num1 + num2\nelif operator == "-":\n    result = num1 - num2\nelif operator == "*":\n    result = num1 * num2\nelif operator == "/":\n    result = num1 / num2\nelse:\n    result = "Operasyon pa valab"\n\nprint(f"Rezilta: {num1} {operator} {num2} = {result}")',
        explanation: {
          ht: 'Fonksyon input() toujou retounen yon string, menm si itilizatè a tape yon nimewo. Ou dwe itilize int() oswa float() pou konvèti li nan nimewo si ou vle fè matematik.',
          fr: 'La fonction input() retourne toujours une chaîne, même si l\'utilisateur tape un nombre. Vous devez utiliser int() ou float() pour le convertir en nombre si vous voulez faire des mathématiques.',
          en: 'The input() function always returns a string, even if the user types a number. You must use int() or float() to convert it to a number if you want to do math.'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Enfòmasyon Pèsonèl',
          fr: 'Informations Personnelles',
          en: 'Personal Information'
        },
        instruction: {
          ht: 'Kreye twa varyab: non w, laj w, ak koulè w pi renmen. Montre yo tout nan yon fraz.',
          fr: 'Créez trois variables : votre nom, votre âge, et votre couleur préférée. Affichez-les toutes dans une phrase.',
          en: 'Create three variables: your name, age, and favorite color. Display them all in one sentence.'
        },
        expectedOutput: 'My name is Alice, I am 20 years old, and my favorite color is blue.',
        solution: '# Kreye varyab yo\nname = "Alice"\nage = 20\nfavorite_color = "blue"\n\n# Montre yo nan yon fraz\nprint(f"My name is {name}, I am {age} years old, and my favorite color is {favorite_color}.")\n\n# Oswa nan Kreyòl\nprint(f"Non mwen se {name}, mwen gen {age} an, ak koulè mwen pi renmen an se {favorite_color}.")'
      },
      {
        title: {
          ht: 'Kalkilatè Miltiplikasyon',
          fr: 'Calculatrice de Multiplication',
          en: 'Multiplication Calculator'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki pran de nimewo ak montre pwodwi yo (résultat multiplication).',
          fr: 'Écrivez un programme qui prend deux nombres et affiche leur produit (résultat de la multiplication).',
          en: 'Write a program that takes two numbers and prints their product (multiplication result).'
        },
        expectedOutput: 'Enter first number: 6\nEnter second number: 7\nThe product is: 42.0',
        solution: '# Mande de nimewo\nnum1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\n\n# Kalkile pwodwi a\nproduct = num1 * num2\n\n# Montre rezilta a\nprint("The product is:", product)\n\n# Ak pi bon fòmataj\nprint(f"{num1} × {num2} = {product}")'
      },
      {
        title: {
          ht: 'Prediksyon Laj',
          fr: 'Prédiction d\'Âge',
          en: 'Age Prediction'
        },
        instruction: {
          ht: 'Mande laj itilizatè a, konvèti li nan yon entye, ak di l ki laj li ap genyen ane ki ap vini an.',
          fr: 'Demandez l\'âge de l\'utilisateur, convertissez-le en entier, et dites-lui quel âge il aura l\'année prochaine.',
          en: 'Ask for the user\'s age, convert it to an integer, and tell them what age they will be next year.'
        },
        expectedOutput: 'What is your age? 25\nNext year you will be 26 years old.',
        solution: '# Mande laj itilizatè a\nage_input = input("What is your age? ")\n\n# Konvèti nan entye\ncurrent_age = int(age_input)\n\n# Kalkile laj ane ki ap vini an\nnext_year_age = current_age + 1\n\n# Montre rezilta a\nprint(f"Next year you will be {next_year_age} years old.")\n\n# Ak verifikasyon tip la\nprint(f"Current age type: {type(current_age)}")  # <class \'int\'>'
      },
      {
        title: {
          ht: 'Konvèsyon Tanperati',
          fr: 'Conversion de Température',
          en: 'Temperature Conversion'
        },
        instruction: {
          ht: 'Kreye yon varyab temperature = 98.6 (Fahrenheit). Konvèti li nan entye ak nan Celsius.',
          fr: 'Créez une variable temperature = 98.6 (Fahrenheit). Convertissez-la en entier et en Celsius.',
          en: 'Create a variable temperature = 98.6 (Fahrenheit). Convert it to integer and to Celsius.'
        },
        expectedOutput: 'Original: 98.6°F\nAs integer: 98°F\nIn Celsius: 37.0°C',
        solution: '# Kreye varyab tanperati a\ntemperature = 98.6  # Fahrenheit\n\n# Konvèti nan entye\ntemp_int = int(temperature)\n\n# Konvèti nan Celsius (C = (F - 32) * 5/9)\ntemp_celsius = (temperature - 32) * 5/9\n\n# Montre rezilta yo\nprint(f"Original: {temperature}°F")\nprint(f"As integer: {temp_int}°F")\nprint(f"In Celsius: {temp_celsius:.1f}°C")\n\n# Montre tip yo\nprint(f"Original type: {type(temperature)}")\nprint(f"Integer type: {type(temp_int)}")\nprint(f"Celsius type: {type(temp_celsius)}")'
      },
      {
        title: {
          ht: 'Chanje Valè yo (Bonus)',
          fr: 'Échange de Valeurs (Bonus)',
          en: 'Variable Swap (Bonus)'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki chanje valè de varyab yo san itilize yon varyab temporè.',
          fr: 'Écrivez un programme qui échange les valeurs de deux variables sans utiliser une variable temporaire.',
          en: 'Write a program that swaps the values of two variables without using a temporary variable.'
        },
        expectedOutput: 'Before swap: a = 5, b = 10\nAfter swap: a = 10, b = 5',
        solution: '# Metòd 1: Ak varyab temporè (pi fasil pou konprann)\na = 5\nb = 10\nprint(f"Before swap: a = {a}, b = {b}")\n\n# Chanje yo ak varyab temporè\ntemp = a\na = b\nb = temp\nprint(f"After swap: a = {a}, b = {b}")\n\n# Metòd 2: Python style (pi kout)\na = 5\nb = 10\nprint(f"Before swap: a = {a}, b = {b}")\n\n# Chanje yo ak tuple unpacking\na, b = b, a\nprint(f"After swap: a = {a}, b = {b}")\n\n# Metòd 3: Ak matematik (jis pou montre)\na = 5\nb = 10\nprint(f"Before swap: a = {a}, b = {b}")\n\na = a + b  # a = 15\nb = a - b  # b = 15 - 10 = 5\na = a - b  # a = 15 - 5 = 10\nprint(f"After swap: a = {a}, b = {b}")'
      }
    ],
    miniProject: {
      title: {
        ht: 'Kalkilatè Tip ak Poubwa',
        fr: 'Calculatrice de Pourboire et Total',
        en: 'Tip Calculator'
      },
      description: {
        ht: 'Kreye yon pwogram senp ki kalkile poubwa ak total ou dwe peye nan yon restoran.',
        fr: 'Créez un programme simple qui calcule le pourboire et le total à payer dans un restaurant.',
        en: 'Create a simple program that calculates tip and total amount to pay at a restaurant.'
      },
      requirements: {
        ht: [
          'Mande itilizatè a kantite kòb bill la',
          'Mande pousantaj poubwa a',
          'Kalkile kantite poubwa a',
          'Kalkile total ou dwe peye a',
          'Montre yon résumé ak tout enfòmasyon yo'
        ],
        fr: [
          'Demander à l\'utilisateur le montant de l\'addition',
          'Demander le pourcentage de pourboire',
          'Calculer le montant du pourboire',
          'Calculer le total à payer',
          'Afficher un résumé avec toutes les informations'
        ],
        en: [
          'Ask the user for the bill amount',
          'Ask for the tip percentage',
          'Calculate the tip amount',
          'Calculate the total amount to pay',
          'Display a summary with all information'
        ]
      },
      starterCode: '# Kalkilatè Tip ak Total\n# Calculatrice de Pourboire\n# Tip Calculator\n\nprint("=== Byenvni nan Kalkilatè Tip la ===")\nprint("=== Bienvenue au Calculateur de Pourboire ===")\nprint("=== Welcome to the Tip Calculator ===")\n\n# Mande enfòmasyon yo\n# Demander les informations\n# Get information\n\n# Kalkile yo\n# Calculer\n# Calculate\n\n# Montre rezilta yo\n# Afficher les résultats\n# Display results',
      sampleSolution: '# Kalkilatè Tip ak Total\nprint("=== Byenvni nan Kalkilatè Tip la ===")\nprint("=== Bienvenue au Calculateur de Pourboire ===")\nprint("=== Welcome to the Tip Calculator ===")\nprint()\n\n# Mande enfòmasyon yo\nbill_amount = float(input("Kantite bill la / Montant de l\'addition / Bill amount: $"))\ntip_percentage = float(input("Pousantaj tip la / Pourcentage pourboire / Tip percentage: "))\n\n# Kalkile kantite tip la\ntip_amount = bill_amount * (tip_percentage / 100)\n\n# Kalkile total la\ntotal_amount = bill_amount + tip_amount\n\n# Montre rezilta yo ak bon fòmataj\nprint("\\n" + "="*40)\nprint("📋 REZIME KALKIL / RÉSUMÉ CALCUL / CALCULATION SUMMARY")\nprint("="*40)\nprint(f"Bill orijinal / Addition originale / Original bill: ${bill_amount:.2f}")\nprint(f"Tip ({tip_percentage}%): ${tip_amount:.2f}")\nprint("-" * 40)\nprint(f"TOTAL POU PEYE / TOTAL À PAYER / TOTAL TO PAY: ${total_amount:.2f}")\nprint("="*40)\n\n# Enfòmasyon adisyonèl\nif tip_percentage >= 20:\n    print("🌟 Poubwa ekselan! / Excellent pourboire! / Excellent tip!")\nelif tip_percentage >= 15:\n    print("👍 Poubwa bon! / Bon pourboire! / Good tip!")\nelse:\n    print("💭 Konsidere poubwa pi wo / Considérez un pourboire plus élevé / Consider a higher tip")\n\nprint("\\nMèsi pou itilize kalkilatè a! / Merci d\'utiliser le calculateur! / Thanks for using the calculator!")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki nan sa yo ki se yon non varyab valab?',
          fr: 'Lequel de ceux-ci est un nom de variable valide ?',
          en: 'Which of these is a valid variable name?'
        },
        options: [
          { ht: '2name', fr: '2name', en: '2name' },
          { ht: 'first_name', fr: 'first_name', en: 'first_name' },
          { ht: 'my name', fr: 'my name', en: 'my name' },
          { ht: 'first-name', fr: 'first-name', en: 'first-name' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'first_name se yon non valab paske li kòmanse ak yon lèt ak itilize underscore. 2name kòmanse ak yon chif, "my name" gen espas, ak "first-name" gen tiret.',
          fr: 'first_name est un nom valide car il commence par une lettre et utilise un underscore. 2name commence par un chiffre, "my name" a des espaces, et "first-name" a un trait d\'union.',
          en: 'first_name is a valid name because it starts with a letter and uses underscore. 2name starts with a number, "my name" has spaces, and "first-name" has a hyphen.'
        }
      },
      {
        question: {
          ht: 'Ki tip done 3.14 ye?',
          fr: 'Quel est le type de données de 3.14 ?',
          en: 'What data type is 3.14?'
        },
        options: [
          { ht: 'int', fr: 'int', en: 'int' },
          { ht: 'float', fr: 'float', en: 'float' },
          { ht: 'str', fr: 'str', en: 'str' },
          { ht: 'bool', fr: 'bool', en: 'bool' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '3.14 se yon float paske li gen yon kòm desimal. Int se pou nimewo antye, str se pou tèks, ak bool se pou True/False.',
          fr: '3.14 est un float car il a une virgule décimale. Int est pour les nombres entiers, str pour le texte, et bool pour True/False.',
          en: '3.14 is a float because it has a decimal point. Int is for whole numbers, str is for text, and bool is for True/False.'
        }
      },
      {
        question: {
          ht: 'Ki sa type("True") ap retounen?',
          fr: 'Que retournera type("True") ?',
          en: 'What will type("True") return?'
        },
        options: [
          { ht: '<class \'bool\'>', fr: '<class \'bool\'>', en: '<class \'bool\'>' },
          { ht: '<class \'str\'>', fr: '<class \'str\'>', en: '<class \'str\'>' },
          { ht: 'True', fr: 'True', en: 'True' },
          { ht: 'Error', fr: 'Erreur', en: 'Error' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"True" ak tiret yo se yon string, pa yon boolean. Pou fè yon boolean, ou pa dwe mete tiret: True (san tiret).',
          fr: '"True" avec des guillemets est une chaîne, pas un booléen. Pour faire un booléen, vous ne devez pas mettre de guillemets : True (sans guillemets).',
          en: '"True" with quotes is a string, not a boolean. To make a boolean, you should not use quotes: True (without quotes).'
        }
      },
      {
        question: {
          ht: 'Ki sa ki ap rive nan kòd sa a?\nx = "5"\ny = 2\nprint(x * y)',
          fr: 'Que se passera-t-il avec ce code ?\nx = "5"\ny = 2\nprint(x * y)',
          en: 'What will happen with this code?\nx = "5"\ny = 2\nprint(x * y)'
        },
        options: [
          { ht: 'Li ap montre 10', fr: 'Il affichera 10', en: 'It will display 10' },
          { ht: 'Li ap montre 55', fr: 'Il affichera 55', en: 'It will display 55' },
          { ht: 'Li ap bay yon erè', fr: 'Il donnera une erreur', en: 'It will give an error' },
          { ht: 'Li ap montre 7', fr: 'Il affichera 7', en: 'It will display 7' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'Lè ou miltipliye yon string ak yon nimewo, Python repete string lan. "5" * 2 = "55". Pou fè matematik, ou ta dwe itilize: int("5") * 2 = 10.',
          fr: 'Quand vous multipliez une chaîne par un nombre, Python répète la chaîne. "5" * 2 = "55". Pour faire des mathématiques, vous devriez utiliser : int("5") * 2 = 10.',
          en: 'When you multiply a string by a number, Python repeats the string. "5" * 2 = "55". To do math, you should use: int("5") * 2 = 10.'
        }
      },
      {
        question: {
          ht: 'Ki jan ou konvèti "25" nan yon entye?',
          fr: 'Comment convertir "25" en entier ?',
          en: 'How do you convert "25" to an integer?'
        },
        options: [
          { ht: 'str("25")', fr: 'str("25")', en: 'str("25")' },
          { ht: 'int("25")', fr: 'int("25")', en: 'int("25")' },
          { ht: 'float("25")', fr: 'float("25")', en: 'float("25")' },
          { ht: 'bool("25")', fr: 'bool("25")', en: 'bool("25")' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'int("25") konvèti string "25" nan entye 25. str() konvèti nan string, float() nan desimal, ak bool() nan True/False.',
          fr: 'int("25") convertit la chaîne "25" en entier 25. str() convertit en chaîne, float() en décimal, et bool() en True/False.',
          en: 'int("25") converts the string "25" to integer 25. str() converts to string, float() to decimal, and bool() to True/False.'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon pwogram konplè ki kalkile ak klase IMC (Body Mass Index) yon moun. Pwogram nan dwe mande pwi ak wotè, kalkile IMC la, ak di si moun nan gen yon pwi ki bon oswa pa bon selon estanda IMC yo.',
      fr: 'Créez un programme complet qui calcule et classe l\'IMC (Indice de Masse Corporelle) d\'une personne. Le programme doit demander le poids et la taille, calculer l\'IMC, et dire si la personne a un poids sain selon les standards IMC.',
      en: 'Create a complete program that calculates and classifies a person\'s BMI (Body Mass Index). The program should ask for weight and height, calculate BMI, and tell if the person has a healthy weight according to BMI standards.'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: N ap aprann kijan pou travay ak tèks (strings) - fòmataj, découpage, ak netwoyaj. Sa se fondasyon pou jesyon input nan mond reyèl la.',
      fr: 'Semaine prochaine : Nous apprendrons comment travailler avec le texte (chaînes) - formatage, découpage, et nettoyage. C\'est la fondation pour la gestion d\'input dans le monde réel.',
      en: 'Next week: We will learn how to work with text (strings) - formatting, slicing, and cleaning. This is the foundation for real-world input handling.'
    }
  },

  // Week 3: Strings & String Operations
  {
    id: 'python-week-3',
    order: 3,
    weekNumber: 3,
    titleHt: 'String ak Operasyon sou String yo',
    titleFr: 'Chaînes et Opérations sur les Chaînes',
    titleEn: 'Strings & String Operations',
    duration: 90,
    objectives: {
      ht: [
        'Kreye ak manipile string yo ak konprann yo se sekans karaktè',
        'Itilize metòd string yo ak fòmataj pou tèks',
        'Retire, dekoupe ak konbine tèks yo ak slicing',
        'Jere input itilizatè a ak netwoyaj tèks',
        'Konstwi yon aplikasyon Text Formatter ki fonksyonèl'
      ],
      fr: [
        'Créer et manipuler les chaînes en comprenant qu\'elles sont des séquences de caractères',
        'Utiliser les méthodes de chaînes et le formatage pour le texte',
        'Extraire, découper et combiner les textes avec le slicing',
        'Gérer l\'input utilisateur avec le nettoyage de texte',
        'Construire une application Text Formatter fonctionnelle'
      ],
      en: [
        'Create and manipulate strings understanding they are sequences of characters',
        'Use string methods and formatting for text',
        'Extract, slice and combine text with slicing',
        'Handle user input cleanly with text cleaning',
        'Build a functional Text Formatter application'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'What is a String?',
        codeExample: '# String yo se sekans karaktè yo ki nan tiret yo\n# Les chaînes sont des séquences de caractères entre guillemets\n# Strings are sequences of characters enclosed in quotes\n\n# De fason pou kreye string yo\ngreeting = "Bonjou"     # Ak tiret double\nname = \'Ralph\'          # Ak tiret senp\ncity = "Port-au-Prince" # Ak tiret double\n\n# Ou ka itilize youn nan de yo\nmessage1 = "Mwen rele Marie"\nmessage2 = \'Mwen rele Jean\'\n\n# Mèlanje yo - fè atansyon ak tiret yo!\nquote = "Li te di: \'Bonjou!\'"\nother_quote = \'Li te di: "Kijan ou ye?"\'\n\nprint(greeting)  # Bonjou\nprint(name)      # Ralph\nprint(quote)     # Li te di: \'Bonjou!\'',
        explanation: {
          ht: 'Yon string se yon sekans karaktè yo ki nan tiret yo. Ou ka itilize tiret senp (\') oswa tiret double (") - de yo ap travay menm jan an.',
          fr: 'Une chaîne est une séquence de caractères entre guillemets. Vous pouvez utiliser des guillemets simples (\') ou doubles (") - les deux fonctionnent de la même façon.',
          en: 'A string is a sequence of characters enclosed in quotes. You can use single (\') or double (") quotes - both work the same way.'
        }
      },
      {
        concept: 'String Operations',
        codeExample: '# Operasyon debaz sou string yo\n# Opérations de base sur les chaînes\n# Basic string operations\n\n# Concatenation (konbine)\nfirst = "Bonjou"\nsecond = "Bonswa"\nfull = first + " ak " + second  # "Bonjou ak Bonswa"\n\n# Repetition (repete)\necho = "Ha! " * 3               # "Ha! Ha! Ha! "\nline = "-" * 20                 # "--------------------"\n\n# Length (longè)\nword = "Python"\nlength = len(word)              # 6\nname = "Marie-Claire"\nname_length = len(name)         # 12\n\n# Indexing (jwenn yon karaktè)\nword = "Programming"\nfirst_char = word[0]            # "P"\nlast_char = word[-1]            # "g"\nmiddle_char = word[5]           # "a"\n\nprint(f"Mo a: {word}")\nprint(f"Premye karaktè: {first_char}")\nprint(f"Dènye karaktè: {last_char}")\nprint(f"Karaktè nan pozisyon 5: {middle_char}")',
        explanation: {
          ht: 'String yo gen operasyon debaz yo: + pou konbine, * pou repete, len() pou longè, ak [] pou jwenn yon karaktè nan yon pozisyon.',
          fr: 'Les chaînes ont des opérations de base : + pour combiner, * pour répéter, len() pour la longueur, et [] pour obtenir un caractère à une position.',
          en: 'Strings have basic operations: + to combine, * to repeat, len() for length, and [] to get a character at a position.'
        }
      },
      {
        concept: 'String Slicing',
        codeExample: '# String Slicing - retire pati yo nan yon string\n# String Slicing - extraire des parties d\'une chaîne\n# String Slicing - extract parts of a string\n\nword = "Programming"\nprint(f"Mo konplè a: {word}")\n\n# Slicing debaz\nprint(f"Premye 4 karaktè: {word[0:4]}")    # "Prog"\nprint(f"Soti nan pozisyon 3: {word[3:]}")     # "gramming"\nprint(f"Jiska pozisyon 5: {word[:5]}")        # "Progr"\nprint(f"Dènye 4 karaktè: {word[-4:]}")        # "ming"\n\n# Slicing avanse\nprint(f"Nan mitan: {word[2:8]}")              # "ogram"\nprint(f"Chak 2yèm karaktè: {word[::2]}")      # "Pormig"\nprint(f"Mo a nan envers: {word[::-1]}")       # "gnimmargorP"\n\n# Egzanp pratik\nsentence = "Mwen renmen aprann Python"\nwords_part = sentence[12:18]                   # "aprann"\nprint(f"Pati mo yo: {words_part}")\n\n# Ak varyab\nstart = 2\nend = 7\nsliced = word[start:end]                       # "ogram"\nprint(f"Soti nan {start} rive {end}: {sliced}")',
        explanation: {
          ht: 'Slicing pèmèt nou retire pati yo nan yon string ak [start:end]. Start enkli, end pa enkli. Ou ka itilize pozisyon negatif tou.',
          fr: 'Le slicing permet d\'extraire des parties d\'une chaîne avec [start:end]. Start est inclus, end n\'est pas inclus. Vous pouvez aussi utiliser des positions négatives.',
          en: 'Slicing allows extracting parts of a string with [start:end]. Start is included, end is not included. You can also use negative positions.'
        }
      },
      {
        concept: 'String Methods',
        codeExample: '# Metòd string yo ki pi enpòtan yo\n# Méthodes de chaînes les plus importantes\n# Most important string methods\n\ntext = "  Bonjou Python Ayiti  "\nprint(f"Orijinal: \'{text}\'")\n\n# Metòd pou chanje ka yo\nprint(f"Majiskil: {text.upper()}")           # "  BONJOU PYTHON AYITI  "\nprint(f"Miniskil: {text.lower()}")           # "  bonjou python ayiti  "\nprint(f"Title case: {text.title()}")         # "  Bonjou Python Ayiti  "\nprint(f"Swapcase: {text.swapcase()}")        # "  bONJOU pYTHON aYITI  "\n\n# Metòd pou netwoyaj\nprint(f"Strip (retire espas): \'{text.strip()}\'")    # "Bonjou Python Ayiti"\nprint(f"Lstrip (goch): \'{text.lstrip()}\'")          # "Bonjou Python Ayiti  "\nprint(f"Rstrip (dwat): \'{text.rstrip()}\'")          # "  Bonjou Python Ayiti"\n\n# Metòd pou chèche ak konte\nsentence = "Python se yon langaj ki bon pou aprann Python"\nprint(f"Pozisyon \'Python\': {sentence.find(\'Python\')}")      # 0\nprint(f"Konbyen fwa \'Python\': {sentence.count(\'Python\')}")   # 2\nprint(f"Kòmanse ak \'Python\': {sentence.startswith(\'Python\')}")  # True\nprint(f"Fini ak \'Python\': {sentence.endswith(\'Python\')}")      # True\n\n# Metòd pou ranplase\noriginal = "Mwen renmen Java"\nnew_text = original.replace("Java", "Python")\nprint(f"Avant: {original}")\nprint(f"Apre: {new_text}")                   # "Mwen renmen Python"',
        explanation: {
          ht: 'String yo gen anpil metòd ki itil: .upper()/.lower() pou chanje ka, .strip() pou retire espas, .replace() pou chanje mo, .find() pou chèche, ak .count() pou konte.',
          fr: 'Les chaînes ont de nombreuses méthodes utiles : .upper()/.lower() pour changer la casse, .strip() pour enlever les espaces, .replace() pour changer les mots, .find() pour chercher, et .count() pour compter.',
          en: 'Strings have many useful methods: .upper()/.lower() to change case, .strip() to remove spaces, .replace() to change words, .find() to search, and .count() to count.'
        }
      },
      {
        concept: 'String Formatting',
        codeExample: '# Fòmataj String - fason yo pou mele varyab ak tèks\n# Formatage de Chaînes - façons de mélanger variables et texte\n# String Formatting - ways to mix variables and text\n\nname = "Marie"\nage = 25\ncity = "Pòtoprens"\nsalary = 45000.50\n\n# F-strings (pi bon metòd la - Python 3.6+)\ninfo1 = f"Non mwen se {name} ak mwen gen {age} an"\ninfo2 = f"Mwen rete nan {city} ak mwen travay pou ${salary:.2f}"\nprint(info1)\nprint(info2)\n\n# Ak ekspresyon yo nan f-strings\nprint(f"Ane pwòchen, {name} ap gen {age + 1} an")\nprint(f"Non {name} gen {len(name)} karaktè")\nprint(f"Salè {name} chak mwa: ${salary/12:.2f}")\n\n# .format() metòd (ansyen metòd la)\ninfo3 = "Bonjou {}, ou gen {} an ak ou rete nan {}".format(name, age, city)\nprint(info3)\n\n# Ak pozisyon yo\ninfo4 = "Nan {2} gen yon moun ki rele {0} ak li gen {1} an".format(name, age, city)\nprint(info4)\n\n# % formatting (pi ansyen an - evite li)\ninfo5 = "Non: %s, Laj: %d, Salè: %.2f" % (name, age, salary)\nprint(info5)\n\n# Fòmataj espesyal yo\npi = 3.14159\nprint(f"Pi ak 2 desimal: {pi:.2f}")        # 3.14\nprint(f"Pi ak 4 desimal: {pi:.4f}")        # 3.1416\nprint(f"Nimewo ak vèji: {age:>10}")        # "       25"\nprint(f"Nimewo ak zero: {age:04d}")        # "0025"',
        explanation: {
          ht: 'F-strings se fason ki pi bon pou mele varyab ak tèks. Ou mete f anvan string la ak mete varyab yo nan {}. Ou ka fè ekspresyon ak fòmataj nan {} yo tou.',
          fr: 'Les f-strings sont la meilleure façon de mélanger variables et texte. Vous mettez f avant la chaîne et les variables dans {}. Vous pouvez aussi faire des expressions et du formatage dans les {}.',
          en: 'F-strings are the best way to mix variables and text. You put f before the string and variables in {}. You can also do expressions and formatting inside the {}.'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Fòmatè Non ak Ka',
          fr: 'Formateur de Nom et Casse',
          en: 'Name and Case Formatter'
        },
        instruction: {
          ht: 'Mande non yon moun ak montre li nan majiskil, miniskil, ak title case.',
          fr: 'Demandez le nom d\'une personne et affichez-le en majuscules, minuscules, et title case.',
          en: 'Ask for a person\'s name and display it in uppercase, lowercase, and title case.'
        },
        expectedOutput: 'Enter your name: marie claire\nUppercase: MARIE CLAIRE\nLowercase: marie claire\nTitle Case: Marie Claire',
        solution: '# Mande non itilizatè a\nname = input("Enter your name: ")\n\n# Montre nan diferan fòmat yo\nprint(f"Uppercase: {name.upper()}")\nprint(f"Lowercase: {name.lower()}")\nprint(f"Title Case: {name.title()}")\n\n# Ak kòmantè nan Kreyòl\nprint("\\n--- Nan Kreyòl ---")\nprint(f"Ak majiskil: {name.upper()}")\nprint(f"Ak miniskil: {name.lower()}")\nprint(f"Ak premye lèt majiskil: {name.title()}")'
      },
      {
        title: {
          ht: 'Premye ak Dènye Lèt',
          fr: 'Première et Dernière Lettre',
          en: 'First and Last Letter'
        },
        instruction: {
          ht: 'Mande yon mo ak montre premye ak dènye lèt yo.',
          fr: 'Demandez un mot et affichez les première et dernière lettres.',
          en: 'Ask for a word and display the first and last letters.'
        },
        expectedOutput: 'Enter a word: Python\nFirst letter: P\nLast letter: n\nWord length: 6',
        solution: '# Mande mo a\nword = input("Enter a word: ")\n\n# Tcheke si mo a pa vid\nif len(word) > 0:\n    first_letter = word[0]\n    last_letter = word[-1]\n    \n    print(f"First letter: {first_letter}")\n    print(f"Last letter: {last_letter}")\n    print(f"Word length: {len(word)}")\n    \n    # Enfòmasyon adisyonèl\n    if len(word) >= 3:\n        middle = word[1:-1]\n        print(f"Middle part: {middle}")\nelse:\n    print("Mo a vid!")'
      },
      {
        title: {
          ht: 'Ranvèse Fraz',
          fr: 'Inverser une Phrase',
          en: 'Reverse Sentence'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki ranvèse yon fraz ki itilizatè a bay.',
          fr: 'Écrivez un programme qui inverse une phrase donnée par l\'utilisateur.',
          en: 'Write a program that reverses a sentence entered by the user.'
        },
        expectedOutput: 'Enter a sentence: Hello World\nReversed: dlroW olleH\nWord by word reverse: World Hello',
        solution: '# Mande fraz la\nsentence = input("Enter a sentence: ")\n\n# Ranvèse karaktè yo\nreversed_chars = sentence[::-1]\nprint(f"Reversed: {reversed_chars}")\n\n# Ranvèse mo yo (bonus)\nwords = sentence.split()\nreversed_words = " ".join(words[::-1])\nprint(f"Word by word reverse: {reversed_words}")\n\n# Ak kòmantè nan Kreyòl\nprint("\\n--- Ak enfòmasyon yo ---")\nprint(f"Fraz orijinal: {sentence}")\nprint(f"Lonè: {len(sentence)} karaktè")\nprint(f"Nimewo mo: {len(words)} mo")'
      },
      {
        title: {
          ht: 'Konte Lèt "a"',
          fr: 'Compter la Lettre "a"',
          en: 'Count Letter "a"'
        },
        instruction: {
          ht: 'Mande yon fraz ak konte konbyen fwa lèt "a" parèt.',
          fr: 'Demandez une phrase et comptez combien de fois la lettre "a" apparaît.',
          en: 'Ask for a phrase and count how many times the letter "a" appears.'
        },
        expectedOutput: 'Enter a phrase: banana and apple\nLetter "a" appears: 5 times\nPositions: [1, 3, 5, 8, 12]',
        solution: '# Mande fraz la\nphrase = input("Enter a phrase: ")\n\n# Konte "a" yo (miniskil ak majiskil)\ncount_a = phrase.lower().count("a")\nprint(f\'Letter "a" appears: {count_a} times\')\n\n# Jwenn pozisyon yo (bonus)\npositions = []\nfor i, char in enumerate(phrase.lower()):\n    if char == "a":\n        positions.append(i)\n\nif positions:\n    print(f"Positions: {positions}")\nelse:\n    print("No letter \'a\' found")\n\n# Estatistik adisyonèl\nprint(f"\\nPhrase analysis:")\nprint(f"Total characters: {len(phrase)}")\nprint(f"Characters without spaces: {len(phrase.replace(\' \', \'\'))}")\nprint(f"Percentage of \'a\': {(count_a/len(phrase)*100):.1f}%")'
      },
      {
        title: {
          ht: 'Netwoyè Mo (Bonus)',
          fr: 'Nettoyeur de Mots (Bonus)',
          en: 'Word Cleaner (Bonus)'
        },
        instruction: {
          ht: 'Konstwi yon "word cleaner" ki retire espas sipèflè yo ak ranplase plizyè espas ak yon sèl.',
          fr: 'Construisez un "nettoyeur de mots" qui enlève les espaces superflus et remplace plusieurs espaces par un seul.',
          en: 'Build a "word cleaner" that removes extra spaces and replaces multiple spaces with single spaces.'
        },
        expectedOutput: 'Enter messy text:    hello   world   python   \nCleaned text: hello world python\nSpaces removed: 12',
        solution: '# Mande tèks la ki gen pwoblèm\nmessy_text = input("Enter messy text: ")\nprint(f"Original: \'{messy_text}\'")\n\n# Netwoyaj etap pa etap\n# 1. Retire espas nan kòmansman ak fen\nstep1 = messy_text.strip()\nprint(f"After strip: \'{step1}\'")\n\n# 2. Ranplase plizyè espas ak yon sèl\nimport re\nstep2 = re.sub(r\' +\', \' \', step1)  # Ranplase yon oswa plis espas ak yon sèl\n\n# Oswa san regex (pi senp pou kòmansè yo)\nwords = step1.split()  # Split elimine espas otomatikman\ncleaned = " ".join(words)  # Join ak yon sèl espas\n\nprint(f"Cleaned text: {cleaned}")\n\n# Kalkile konbyen espas nou retire\noriginal_spaces = messy_text.count(\' \')\ncleaned_spaces = cleaned.count(\' \')\nspaces_removed = original_spaces - cleaned_spaces\n\nprint(f"\\nStatistics:")\nprint(f"Original spaces: {original_spaces}")\nprint(f"Final spaces: {cleaned_spaces}")\nprint(f"Spaces removed: {spaces_removed}")\nprint(f"Character reduction: {len(messy_text) - len(cleaned)}")'
      }
    ],
    miniProject: {
      title: {
        ht: 'Analizè Tèks Konplè',
        fr: 'Analyseur de Texte Complet',
        en: 'Complete Text Analyzer'
      },
      description: {
        ht: 'Kreye yon pwogram ki analize yon fraz ak montre enfòmasyon konplè sou li, tankou kantite karaktè, mo, ak si li gen mo Python.',
        fr: 'Créez un programme qui analyse une phrase et affiche des informations complètes à son sujet, comme le nombre de caractères, mots, et s\'il contient le mot Python.',
        en: 'Create a program that analyzes a sentence and displays complete information about it, like character count, words, and whether it contains the word Python.'
      },
      requirements: {
        ht: [
          'Mande itilizatè a yon fraz',
          'Montre kantite karaktè yo (ak ak san espas)',
          'Konte ak montre kantite mo yo',
          'Fraz la nan title case',
          'Tcheke si li gen mo "Python"',
          'Montre voyèl yo ak konsonèn yo',
          'Bay estatistik adisyonèl yo'
        ],
        fr: [
          'Demander à l\'utilisateur une phrase',
          'Afficher le nombre de caractères (avec et sans espaces)',
          'Compter et afficher le nombre de mots',
          'La phrase en title case',
          'Vérifier si elle contient le mot "Python"',
          'Afficher les voyelles et consonnes',
          'Donner des statistiques supplémentaires'
        ],
        en: [
          'Ask the user for a sentence',
          'Display character count (with and without spaces)',
          'Count and display word count',
          'The sentence in title case',
          'Check if it contains the word "Python"',
          'Display vowels and consonants',
          'Provide additional statistics'
        ]
      },
      starterCode: '# Analizè Tèks Konplè\n# Analyseur de Texte Complet\n# Complete Text Analyzer\n\nprint("=== Text Analyzer / Analizè Tèks ===")\nprint()\n\n# Mande fraz la\n# Demander la phrase\n# Get sentence\n\n# Analize enfòmasyon debaz yo\n# Analyser les informations de base\n# Analyze basic information\n\n# Tcheke mo espesyal yo\n# Vérifier les mots spéciaux\n# Check special words\n\n# Montre rezilta yo\n# Afficher les résultats\n# Display results',
      sampleSolution: '# Analizè Tèks Konplè\nprint("=== 📝 TEXT ANALYZER / ANALIZÈ TÈKS 📝 ===")\nprint("Analyze any sentence in detail!")\nprint("Analize nenpòt fraz ak detay!")\nprint()\n\n# Mande fraz la\nsentence = input("Enter a sentence: ").strip()\n\nif not sentence:\n    print("❌ No sentence entered! / Okenn fraz!")\nelse:\n    print("\\n" + "="*50)\n    print("📊 ANALYSIS RESULTS / REZILTA ANALIZ")\n    print("="*50)\n    \n    # Enfòmasyon debaz\n    char_count = len(sentence)\n    char_no_spaces = len(sentence.replace(\' \', \'\'))\n    words = sentence.split()\n    word_count = len(words)\n    \n    print(f"📄 Original sentence: {sentence}")\n    print(f"📏 Characters (total): {char_count}")\n    print(f"📏 Characters (no spaces): {char_no_spaces}")\n    print(f"📝 Word count: {word_count}")\n    print(f"✨ Title case: {sentence.title()}")\n    \n    # Tcheke mo Python\n    has_python = "python" in sentence.lower()\n    print(f"🐍 Contains \\"Python\\": {has_python}")\n    \n    # Analize voyèl ak konsonèn\n    vowels = "aeiouAEIOU"\n    vowel_count = sum(1 for char in sentence if char in vowels)\n    consonant_count = sum(1 for char in sentence if char.isalpha() and char not in vowels)\n    \n    print(f"\\n🔤 Letter Analysis:")\n    print(f"   Vowels: {vowel_count}")\n    print(f"   Consonants: {consonant_count}")\n    \n    # Estatistik adisyonèl\n    if word_count > 0:\n        avg_word_length = char_no_spaces / word_count\n        print(f"📊 Average word length: {avg_word_length:.1f} characters")\n    \n    # Mo ki pi long yo\n    if words:\n        longest_word = max(words, key=len)\n        shortest_word = min(words, key=len)\n        print(f"📏 Longest word: \\"{longest_word}\\" ({len(longest_word)} chars)")\n        print(f"📏 Shortest word: \\"{shortest_word}\\" ({len(shortest_word)} chars)")\n    \n    # Konte karaktè espesyal yo\n    spaces = sentence.count(\' \')\n    punctuation = sum(1 for char in sentence if not char.isalnum() and char != \' \')\n    \n    print(f"\\n🔢 Character breakdown:")\n    print(f"   Letters: {vowel_count + consonant_count}")\n    print(f"   Spaces: {spaces}")\n    print(f"   Punctuation: {punctuation}")\n    \n    print("\\n" + "="*50)\n    print("✅ Analysis complete! / Analiz fini!")\n    print("Mèsi pou itilize pwogram nan! 🎉")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki rezilta "Hi" + "There" ap bay?',
          fr: 'Quel est le résultat de "Hi" + "There" ?',
          en: 'What is the result of "Hi" + "There"?'
        },
        options: [
          { ht: '"Hi There"', fr: '"Hi There"', en: '"Hi There"' },
          { ht: '"HiThere"', fr: '"HiThere"', en: '"HiThere"' },
          { ht: '"Hi" "There"', fr: '"Hi" "There"', en: '"Hi" "There"' },
          { ht: 'Error / Erè', fr: 'Erreur', en: 'Error' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'Lè ou ajoute de string yo ak +, yo konbine san espas. Pou gen espas, ou dwe ajoute li: "Hi" + " " + "There"',
          fr: 'Quand vous ajoutez deux chaînes avec +, elles se combinent sans espaces. Pour avoir un espace, vous devez l\'ajouter : "Hi" + " " + "There"',
          en: 'When you add two strings with +, they combine without spaces. To have a space, you must add it: "Hi" + " " + "There"'
        }
      },
      {
        question: {
          ht: 'Ki sa "Python"[2] ap montre?',
          fr: 'Que va afficher "Python"[2] ?',
          en: 'What will "Python"[2] print?'
        },
        options: [
          { ht: '"P"', fr: '"P"', en: '"P"' },
          { ht: '"y"', fr: '"y"', en: '"y"' },
          { ht: '"t"', fr: '"t"', en: '"t"' },
          { ht: '"h"', fr: '"h"', en: '"h"' }
        ],
        correctAnswer: 2,
        explanation: {
          ht: 'Indexing kòmanse nan 0. "Python" gen: P[0], y[1], t[2], h[3], o[4], n[5]. Donk [2] se "t".',
          fr: 'L\'indexation commence à 0. "Python" a : P[0], y[1], t[2], h[3], o[4], n[5]. Donc [2] est "t".',
          en: 'Indexing starts at 0. "Python" has: P[0], y[1], t[2], h[3], o[4], n[5]. So [2] is "t".'
        }
      },
      {
        question: {
          ht: 'Ki sa "hello".upper() retounen?',
          fr: 'Que retourne "hello".upper() ?',
          en: 'What does "hello".upper() return?'
        },
        options: [
          { ht: '"hello"', fr: '"hello"', en: '"hello"' },
          { ht: '"HELLO"', fr: '"HELLO"', en: '"HELLO"' },
          { ht: '"Hello"', fr: '"Hello"', en: '"Hello"' },
          { ht: 'Error / Erè', fr: 'Erreur', en: 'Error' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '.upper() konvèti tout lèt yo nan majiskil. "hello" vin "HELLO". Metòd la pa modifye string orijinal la.',
          fr: '.upper() convertit toutes les lettres en majuscules. "hello" devient "HELLO". La méthode ne modifie pas la chaîne originale.',
          en: '.upper() converts all letters to uppercase. "hello" becomes "HELLO". The method does not modify the original string.'
        }
      },
      {
        question: {
          ht: 'Ki metòd ki retire espas sipèflè yo nan de bo yon string?',
          fr: 'Quelle méthode enlève les espaces superflus des deux côtés d\'une chaîne ?',
          en: 'Which method removes extra spaces from both sides of a string?'
        },
        options: [
          { ht: '.remove()', fr: '.remove()', en: '.remove()' },
          { ht: '.strip()', fr: '.strip()', en: '.strip()' },
          { ht: '.clean()', fr: '.clean()', en: '.clean()' },
          { ht: '.trim()', fr: '.trim()', en: '.trim()' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '.strip() retire espas yo (ak lòt whitespace) nan kòmansman ak fen string la. Gen .lstrip() pou gòch ak .rstrip() pou dwat tou.',
          fr: '.strip() enlève les espaces (et autres whitespace) au début et à la fin de la chaîne. Il y a aussi .lstrip() pour la gauche et .rstrip() pour la droite.',
          en: '.strip() removes spaces (and other whitespace) from the beginning and end of the string. There are also .lstrip() for left and .rstrip() for right.'
        }
      },
      {
        question: {
          ht: 'Ki sa ki mal nan kòd sa a?\nword = \'Hello\'\nprint(word[5])',
          fr: 'Qu\'est-ce qui ne va pas avec ce code ?\nword = \'Hello\'\nprint(word[5])',
          en: 'What\'s wrong with this code?\nword = \'Hello\'\nprint(word[5])'
        },
        options: [
          { ht: 'Tiret yo mal', fr: 'Mauvais guillemets', en: 'Wrong quotes' },
          { ht: 'Index out of range', fr: 'Index hors limites', en: 'Index out of range' },
          { ht: 'word pa defini', fr: 'word pas défini', en: 'word not defined' },
          { ht: 'Anyen pa mal', fr: 'Rien de mal', en: 'Nothing wrong' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"Hello" gen 5 karaktè ak index 0-4: H[0], e[1], l[2], l[3], o[4]. Index 5 pa egziste, donk li ap bay IndexError.',
          fr: '"Hello" a 5 caractères avec des index 0-4 : H[0], e[1], l[2], l[3], o[4]. L\'index 5 n\'existe pas, donc il donnera IndexError.',
          en: '"Hello" has 5 characters with indexes 0-4: H[0], e[1], l[2], l[3], o[4]. Index 5 doesn\'t exist, so it will give IndexError.'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon pwogram konplè "Password Strength Checker" ki analize yon modpas ak di si li solid. Tcheke longè, majiskil/miniskil, chif yo, ak karaktè espesyal yo. Bay yon nòt ak sijesyon pou amelyore modpas la.',
      fr: 'Créez un programme complet "Password Strength Checker" qui analyse un mot de passe et dit s\'il est fort. Vérifiez la longueur, majuscules/minuscules, chiffres, et caractères spéciaux. Donnez une note et des suggestions pour améliorer le mot de passe.',
      en: 'Create a complete "Password Strength Checker" program that analyzes a password and tells if it\'s strong. Check length, upper/lowercase, digits, and special characters. Give a score and suggestions to improve the password.'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: N ap aprann sou lis ak tupl yo pou stock plizyè done ansanm. N ap kreye koleksyon yo tankou lis achats ak aksè yo fasilman.',
      fr: 'Semaine prochaine : Nous apprendrons les listes et tuples pour stocker plusieurs données ensemble. Nous créerons des collections comme des listes de courses et y accéderons facilement.',
      en: 'Next week: We will learn about lists and tuples for storing multiple data together. We will create collections like grocery lists and access them easily.'
    }
  },

  // Week 4: Lists & Tuples
  {
    id: 'python-week-4',
    order: 4,
    weekNumber: 4,
    titleHt: 'Lis ak Tupl yo',
    titleFr: 'Listes et Tuples',
    titleEn: 'Lists & Tuples',
    duration: 90,
    objectives: {
      ht: [
        'Kreye ak manipile lis yo',
        'Itilize metòd lis yo kòm append(), remove(), sort()',
        'Konprann diferans ant lis ak tupl yo',
        'Itilize loop yo ak lis yo'
      ],
      fr: [
        'Créer et manipuler les listes',
        'Utiliser les méthodes de listes comme append(), remove(), sort()',
        'Comprendre la différence entre listes et tuples',
        'Utiliser les boucles avec les listes'
      ],
      en: [
        'Create and manipulate lists',
        'Use list methods like append(), remove(), sort()',
        'Understand the difference between lists and tuples',
        'Use loops with lists'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'Creating Lists',
        codeExample: 'fruits = ["apple", "banana", "orange"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = ["hello", 42, True, 3.14]',
        explanation: {
          ht: 'Lis yo ka kenbe diferan tip done yo nan menm kote a',
          fr: 'Les listes peuvent contenir différents types de données au même endroit',
          en: 'Lists can hold different data types in the same place'
        }
      },
      {
        concept: 'List Methods',
        codeExample: 'groceries = ["milk", "bread"]\ngroceries.append("eggs")     # Add item\ngroceries.remove("bread")   # Remove item\ngroceries.sort()            # Sort alphabetically',
        explanation: {
          ht: 'Lis yo gen metòd ki pèmèt nou ajoute, retire ak òganize eleman yo',
          fr: 'Les listes ont des méthodes qui permettent d\'ajouter, retirer et organiser les éléments',
          en: 'Lists have methods that allow us to add, remove and organize elements'
        }
      },
      {
        concept: 'Tuples',
        codeExample: 'coordinates = (10, 20)\ncolors = ("red", "green", "blue")\n# coordinates[0] = 15  # This would cause an error!',
        explanation: {
          ht: 'Tupl yo tankou lis yo men yo pa ka chanje',
          fr: 'Les tuples sont comme les listes mais ils ne peuvent pas être modifiés',
          en: 'Tuples are like lists but they cannot be changed'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Jere Lis Achats',
          fr: 'Gérer une Liste de Courses',
          en: 'Managing Shopping List'
        },
        instruction: {
          ht: 'Kreye yon lis achats, ajoute 3 bagay, retire youn, ak montre li',
          fr: 'Créez une liste de courses, ajoutez 3 articles, retirez-en un, et affichez-la',
          en: 'Create a shopping list, add 3 items, remove one, and display it'
        },
        solution: 'shopping_list = []\nshopping_list.append("milk")\nshopping_list.append("bread")\nshopping_list.append("eggs")\nprint("Before:", shopping_list)\nshopping_list.remove("bread")\nprint("After:", shopping_list)'
      },
      {
        title: {
          ht: 'Òganize Nòt yo',
          fr: 'Organiser les Notes',
          en: 'Organizing Grades'
        },
        instruction: {
          ht: 'Pran yon lis nòt yo ak klase yo soti nan pi gwo a rive nan pi piti a',
          fr: 'Prenez une liste de notes et classez-les du plus grand au plus petit',
          en: 'Take a list of grades and sort them from highest to lowest'
        },
        solution: 'grades = [85, 92, 78, 96, 88]\nprint("Original:", grades)\ngrades.sort(reverse=True)\nprint("Sorted:", grades)\nprint(f"Highest: {grades[0]}, Lowest: {grades[-1]}")'
        }
    ],
    miniProject: {
      title: {
        ht: 'App Lis Achats',
        fr: 'Application Liste de Courses',
        en: 'Grocery List App'
      },
      description: {
        ht: 'Kreye yon pwogram ki pèmèt itilizatè a jere lis achats li yo',
        fr: 'Créez un programme qui permet à l\'utilisateur de gérer sa liste de courses',
        en: 'Create a program that allows the user to manage their grocery list'
      },
      requirements: {
        ht: [
          'Montre meni ak opsyon yo: ajoute, retire, montre, sòti',
          'Pèmèt itilizatè a ajoute ak retire bagay yo',
          'Montre lis la ak nimewo yo',
          'Valide si bagay yo egziste anvan yo retire yo'
        ],
        fr: [
          'Afficher un menu avec les options : ajouter, retirer, afficher, quitter',
          'Permettre à l\'utilisateur d\'ajouter et retirer des articles',
          'Afficher la liste avec des numéros',
          'Valider si les articles existent avant de les retirer'
        ],
        en: [
          'Display a menu with options: add, remove, display, quit',
          'Allow user to add and remove items',
          'Display the list with numbers',
          'Validate if items exist before removing them'
        ]
      },
      starterCode: '# Initialize empty grocery list\n# Create menu loop\n# Handle user choices',
      sampleSolution: '# Initialize empty grocery list\ngrocery_list = []\n\nwhile True:\n    print("\\n=== Grocery List Manager ===")\n    print("1. Add item")\n    print("2. Remove item")\n    print("3. Display list")\n    print("4. Quit")\n    \n    choice = input("Choose an option (1-4): ")\n    \n    if choice == "1":\n        item = input("Enter item to add: ")\n        grocery_list.append(item)\n        print(f"Added {item} to the list")\n    \n    elif choice == "2":\n        if grocery_list:\n            item = input("Enter item to remove: ")\n            if item in grocery_list:\n                grocery_list.remove(item)\n                print(f"Removed {item} from the list")\n            else:\n                print("Item not found in the list")\n        else:\n            print("List is empty")\n    \n    elif choice == "3":\n        if grocery_list:\n            print("\\nYour grocery list:")\n            for i, item in enumerate(grocery_list, 1):\n                print(f"{i}. {item}")\n        else:\n            print("Your list is empty")\n    \n    elif choice == "4":\n        print("Goodbye!")\n        break\n    \n    else:\n        print("Invalid choice. Please try again.")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki metòd ki ajoute yon eleman nan fen yon lis?',
          fr: 'Quelle méthode ajoute un élément à la fin d\'une liste ?',
          en: 'Which method adds an element to the end of a list?'
        },
        options: [
          { ht: '.add()', fr: '.add()', en: '.add()' },
          { ht: '.append()', fr: '.append()', en: '.append()' },
          { ht: '.insert()', fr: '.insert()', en: '.insert()' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '.append() ajoute yon eleman nan fen lis la',
          fr: '.append() ajoute un élément à la fin de la liste',
          en: '.append() adds an element to the end of the list'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon pwogram ki jere yon lis etidyan yo ak nòt yo',
      fr: 'Créez un programme qui gère une liste d\'étudiants et leurs notes',
      en: 'Create a program that manages a list of students and their grades'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: Kondisyon ak depo yo (if/elif/else)',
      fr: 'Semaine prochaine : Conditions et embranchements (if/elif/else)',
      en: 'Next week: Conditional statements (if/elif/else)'
    }
  },

  // Week 5: Conditional Statements
  {
    id: 'python-week-5',
    order: 5,
    weekNumber: 5,
    titleHt: 'Deklarasyon Kondisyonèl yo',
    titleFr: 'Instructions Conditionnelles',
    titleEn: 'Conditional Statements',
    duration: 90,
    objectives: {
      ht: [
        'Itilize if, elif, ak else',
        'Konprann operatè konparezon yo (==, !=, <, >, <=, >=)',
        'Konbine kondisyon yo ak operatè lojik (and, or, not)',
        'Kreye pwogram ki pran desizyon yo'
      ],
      fr: [
        'Utiliser if, elif, et else',
        'Comprendre les opérateurs de comparaison (==, !=, <, >, <=, >=)',
        'Combiner les conditions avec les opérateurs logiques (and, or, not)',
        'Créer des programmes qui prennent des décisions'
      ],
      en: [
        'Use if, elif, and else',
        'Understand comparison operators (==, !=, <, >, <=, >=)',
        'Combine conditions with logical operators (and, or, not)',
        'Create programs that make decisions'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'If Statements',
        codeExample: 'age = 18\nif age >= 18:\n    print("You can vote")\nelse:\n    print("You cannot vote yet")',
        explanation: {
          ht: 'If statements pèmèt nou egzekite kòd selon kondisyon yo',
          fr: 'Les instructions if nous permettent d\'exécuter du code selon des conditions',
          en: 'If statements allow us to execute code based on conditions'
        }
      },
      {
        concept: 'Multiple Conditions',
        codeExample: 'score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"',
        explanation: {
          ht: 'Elif pèmèt nou teste plizyè kondisyon yo',
          fr: 'Elif nous permet de tester plusieurs conditions',
          en: 'Elif allows us to test multiple conditions'
        }
      },
      {
        concept: 'Logical Operators',
        codeExample: 'age = 25\nincome = 30000\nif age >= 18 and income > 25000:\n    print("Loan approved")\nelif age >= 18 or income > 50000:\n    print("Loan under review")\nelse:\n    print("Loan denied")',
        explanation: {
          ht: 'and, or, ak not pèmèt nou konbine kondisyon yo',
          fr: 'and, or, et not nous permettent de combiner les conditions',
          en: 'and, or, and not allow us to combine conditions'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Klasifikasyon Laj',
          fr: 'Classification d\'Âge',
          en: 'Age Classification'
        },
        instruction: {
          ht: 'Ekri yon pwogram ki klase moun yo selon laj yo: timoun (0-12), adolèsan (13-17), granmoun (18+)',
          fr: 'Écrivez un programme qui classe les personnes selon leur âge : enfant (0-12), adolescent (13-17), adulte (18+)',
          en: 'Write a program that classifies people by age: child (0-12), teenager (13-17), adult (18+)'
        },
        solution: 'age = int(input("Enter your age: "))\n\nif age < 0:\n    print("Invalid age")\nelif age <= 12:\n    print("You are a child")\nelif age <= 17:\n    print("You are a teenager")\nelse:\n    print("You are an adult")'
      },
      {
        title: {
          ht: 'Sistèm Nòt yo',
          fr: 'Système de Notes',
          en: 'Grading System'
        },
        instruction: {
          ht: 'Kreye yon pwogram ki bay nòt lèt selon pousantaj la',
          fr: 'Créez un programme qui attribue une note lettre selon le pourcentage',
          en: 'Create a program that assigns letter grades based on percentage'
        },
        solution: 'score = float(input("Enter your score (0-100): "))\n\nif score < 0 or score > 100:\n    print("Invalid score")\nelif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelif score >= 60:\n    print("Grade: D")\nelse:\n    print("Grade: F")'
      }
    ],
    miniProject: {
      title: {
        ht: 'Validatè Modpas',
        fr: 'Validateur de Mot de Passe',
        en: 'Password Validator'
      },
      description: {
        ht: 'Kreye yon pwogram ki tcheke si yon modpas solid ak bay sijesyon yo',
        fr: 'Créez un programme qui vérifie si un mot de passe est fort et donne des suggestions',
        en: 'Create a program that checks if a password is strong and gives suggestions'
      },
      requirements: {
        ht: [
          'Tcheke si modpas la gen omwen 8 karaktè',
          'Verifye si li gen omwen yon lèt majiskil ak yon miniskil',
          'Tcheke pou omwen yon chif ak yon karaktè espesyal',
          'Bay nòt ak sijesyon pou amelyore li'
        ],
        fr: [
          'Vérifier si le mot de passe a au moins 8 caractères',
          'Vérifier s\'il a au moins une majuscule et une minuscule',
          'Vérifier au moins un chiffre et un caractère spécial',
          'Donner une note et des suggestions d\'amélioration'
        ],
        en: [
          'Check if password has at least 8 characters',
          'Verify it has at least one uppercase and lowercase letter',
          'Check for at least one digit and special character',
          'Give a score and improvement suggestions'
        ]
      },
      starterCode: '# Get password from user\n# Check various criteria\n# Calculate strength score\n# Provide feedback',
      sampleSolution: '# Get password from user\npassword = input("Enter a password to check: ")\n\n# Initialize strength score\nstrength_score = 0\nsuggestions = []\n\n# Check length\nif len(password) >= 8:\n    strength_score += 1\nelse:\n    suggestions.append("Use at least 8 characters")\n\n# Check for uppercase\nif any(c.isupper() for c in password):\n    strength_score += 1\nelse:\n    suggestions.append("Add at least one uppercase letter")\n\n# Check for lowercase\nif any(c.islower() for c in password):\n    strength_score += 1\nelse:\n    suggestions.append("Add at least one lowercase letter")\n\n# Check for digits\nif any(c.isdigit() for c in password):\n    strength_score += 1\nelse:\n    suggestions.append("Add at least one number")\n\n# Check for special characters\nspecial_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"\nif any(c in special_chars for c in password):\n    strength_score += 1\nelse:\n    suggestions.append("Add at least one special character")\n\n# Evaluate strength\nif strength_score == 5:\n    print("Password strength: VERY STRONG ✓")\nelif strength_score >= 3:\n    print("Password strength: GOOD")\nelif strength_score >= 2:\n    print("Password strength: WEAK")\nelse:\n    print("Password strength: VERY WEAK")\n\n# Show suggestions\nif suggestions:\n    print("\\nSuggestions for improvement:")\n    for suggestion in suggestions:\n        print(f"- {suggestion}")\nelse:\n    print("\\nYour password meets all security criteria!")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki operatè ki tcheke si de valè yo egal?',
          fr: 'Quel opérateur vérifie si deux valeurs sont égales ?',
          en: 'Which operator checks if two values are equal?'
        },
        options: [
          { ht: '=', fr: '=', en: '=' },
          { ht: '==', fr: '==', en: '==' },
          { ht: '!=', fr: '!=', en: '!=' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '== tcheke egalite pandan = asiye valè',
          fr: '== vérifie l\'égalité tandis que = assigne des valeurs',
          en: '== checks equality while = assigns values'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon jwèt ki devine si yon nimewo nan antre 1 ak 10 ak bay endikasyon yo',
      fr: 'Créez un jeu qui devine si un nombre entre 1 et 10 avec des indices',
      en: 'Create a guessing game for a number between 1 and 10 with hints'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: Loop yo (for ak while) pou repete aksyon yo',
      fr: 'Semaine prochaine : Les boucles (for et while) pour répéter les actions',
      en: 'Next week: Loops (for and while) for repeating actions'
    }
  },

  // Week 6: Loops
  {
    id: 'python-week-6',
    order: 6,
    weekNumber: 6,
    titleHt: 'Loop yo (For ak While)',
    titleFr: 'Boucles (For et While)',
    titleEn: 'Loops (For & While)',
    duration: 90,
    objectives: {
      ht: [
        'Itilize for loop yo pou itere sou lis ak strings',
        'Konprann ak itilize while loop yo',
        'Itilize range() pou kreye sekans nimewo yo',
        'Kontrole loop yo ak break ak continue'
      ],
      fr: [
        'Utiliser les boucles for pour itérer sur les listes et chaînes',
        'Comprendre et utiliser les boucles while',
        'Utiliser range() pour créer des séquences de nombres',
        'Contrôler les boucles avec break et continue'
      ],
      en: [
        'Use for loops to iterate over lists and strings',
        'Understand and use while loops',
        'Use range() to create number sequences',
        'Control loops with break and continue'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'For Loops',
        codeExample: 'fruits = ["apple", "banana", "orange"]\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\nfor i in range(5):\n    print(f"Count: {i}")',
        explanation: {
          ht: 'For loop yo pèmèt nou repete aksyon yo sou chak eleman',
          fr: 'Les boucles for nous permettent de répéter des actions sur chaque élément',
          en: 'For loops allow us to repeat actions on each element'
        }
      },
      {
        concept: 'While Loops',
        codeExample: 'count = 0\nwhile count < 5:\n    print(f"Count is {count}")\n    count += 1\nprint("Loop finished")',
        explanation: {
          ht: 'While loop yo kontinye jiskaske yon kondisyon vin fo',
          fr: 'Les boucles while continuent jusqu\'à ce qu\'une condition devienne fausse',
          en: 'While loops continue until a condition becomes false'
        }
      },
      {
        concept: 'Break and Continue',
        codeExample: 'for i in range(10):\n    if i == 3:\n        continue  # Skip 3\n    if i == 7:\n        break     # Stop at 7\n    print(i)',
        explanation: {
          ht: 'break sispann loop la, continue sote iterasyon aktyèl la',
          fr: 'break arrête la boucle, continue saute l\'itération actuelle',
          en: 'break stops the loop, continue skips the current iteration'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Konte ak For',
          fr: 'Compter avec For',
          en: 'Counting with For'
        },
        instruction: {
          ht: 'Itilize yon for loop pou konte soti nan 1 rive 10 ak montre chak nimewo',
          fr: 'Utilisez une boucle for pour compter de 1 à 10 et afficher chaque nombre',
          en: 'Use a for loop to count from 1 to 10 and display each number'
        },
        solution: 'for i in range(1, 11):\n    print(f"Number: {i}")\nprint("Counting complete!")'
      },
      {
        title: {
          ht: 'Rechèch nan Lis',
          fr: 'Recherche dans une Liste',
          en: 'List Search'
        },
        instruction: {
          ht: 'Chèche yon mo nan yon lis ak di si ou jwenn li',
          fr: 'Cherchez un mot dans une liste et dites si vous l\'avez trouvé',
          en: 'Search for a word in a list and say if you found it'
        },
        solution: 'words = ["python", "programming", "computer", "code"]\nsearch_word = input("Enter word to search: ").lower()\nfound = False\n\nfor word in words:\n    if word == search_word:\n        found = True\n        break\n\nif found:\n    print(f"Found \'{search_word}\' in the list!")\nelse:\n    print(f"\'{search_word}\' not found in the list.")'
      }
    ],
    miniProject: {
      title: {
        ht: 'Jwèt Devine Nimewo',
        fr: 'Jeu de Devinette de Nombre',
        en: 'Number Guessing Game'
      },
      description: {
        ht: 'Kreye yon jwèt kote òdinatè a chwazi yon nimewo ak itilizatè a devine li',
        fr: 'Créez un jeu où l\'ordinateur choisit un nombre et l\'utilisateur le devine',
        en: 'Create a game where the computer picks a number and the user guesses it'
      },
      requirements: {
        ht: [
          'Òdinatè a chwazi yon nimewo alelatwa ant 1 ak 100',
          'Itilizatè a gen 7 chans pou devine',
          'Bay endikasyon "twò wo" oswa "twò ba"',
          'Konte ak montre nimewo tantativ yo'
        ],
        fr: [
          'L\'ordinateur choisit un nombre aléatoire entre 1 et 100',
          'L\'utilisateur a 7 chances pour deviner',
          'Donner des indices "trop haut" ou "trop bas"',
          'Compter et afficher le nombre de tentatives'
        ],
        en: [
          'Computer picks a random number between 1 and 100',
          'User has 7 chances to guess',
          'Give hints "too high" or "too low"',
          'Count and display number of attempts'
        ]
      },
      starterCode: 'import random\n# Pick random number\n# Start guessing loop\n# Give feedback\n# Track attempts',
      sampleSolution: 'import random\n\n# Pick random number\nsecret_number = random.randint(1, 100)\nmax_attempts = 7\nattempts = 0\n\nprint("Welcome to the Number Guessing Game!")\nprint(f"I\'m thinking of a number between 1 and 100.")\nprint(f"You have {max_attempts} attempts to guess it.")\n\nwhile attempts < max_attempts:\n    try:\n        guess = int(input(f"\\nAttempt {attempts + 1}: Enter your guess: "))\n        attempts += 1\n        \n        if guess == secret_number:\n            print(f"🎉 Congratulations! You guessed it in {attempts} attempts!")\n            break\n        elif guess < secret_number:\n            print("Too low! Try a higher number.")\n        else:\n            print("Too high! Try a lower number.")\n        \n        remaining = max_attempts - attempts\n        if remaining > 0:\n            print(f"You have {remaining} attempts left.")\n    \n    except ValueError:\n        print("Please enter a valid number.")\n        attempts -= 1  # Don\'t count invalid input\n\nif attempts == max_attempts and guess != secret_number:\n    print(f"\\n😞 Game over! The number was {secret_number}.")\n    print("Better luck next time!")'
    },
    quiz: [
      {
        question: {
          ht: 'Ki kòmand ki sispann yon loop konplètman?',
          fr: 'Quelle commande arrête complètement une boucle ?',
          en: 'Which command stops a loop completely?'
        },
        options: [
          { ht: 'continue', fr: 'continue', en: 'continue' },
          { ht: 'break', fr: 'break', en: 'break' },
          { ht: 'stop', fr: 'stop', en: 'stop' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'break sispann loop la konplètman, continue jis sote iterasyon aktyèl la',
          fr: 'break arrête complètement la boucle, continue saute juste l\'itération actuelle',
          en: 'break stops the loop completely, continue just skips the current iteration'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon pwogram ki kalkile faktoryèl yon nimewo ak itilize yon loop',
      fr: 'Créez un programme qui calcule la factorielle d\'un nombre en utilisant une boucle',
      en: 'Create a program that calculates the factorial of a number using a loop'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: Fonksyon yo pou òganize ak reutilize kòd',
      fr: 'Semaine prochaine : Les fonctions pour organiser et réutiliser le code',
      en: 'Next week: Functions for organizing and reusing code'
    }
  },

  // Week 7: Functions
  {
    id: 'python-week-7',
    order: 7,
    weekNumber: 7,
    titleHt: 'Fonksyon yo',
    titleFr: 'Fonctions',
    titleEn: 'Functions',
    duration: 90,
    objectives: {
      ht: [
        'Defini ak rele fonksyon yo',
        'Itilize paramèt ak agiman yo',
        'Konprann return values ak scope',
        'Kreye fonksyon reutilizab yo'
      ],
      fr: [
        'Définir et appeler des fonctions',
        'Utiliser les paramètres et arguments',
        'Comprendre les valeurs de retour et la portée',
        'Créer des fonctions réutilisables'
      ],
      en: [
        'Define and call functions',
        'Use parameters and arguments',
        'Understand return values and scope',
        'Create reusable functions'
      ]
    },
    keyConceptsCode: [
      {
        concept: 'Basic Functions',
        codeExample: 'def greet():\n    print("Hello, World!")\n\n# Call the function\ngreet()',
        explanation: {
          ht: 'Fonksyon yo se blòk kòd ki ka rele plizyè fwa',
          fr: 'Les fonctions sont des blocs de code qui peuvent être appelés plusieurs fois',
          en: 'Functions are blocks of code that can be called multiple times'
        }
      },
      {
        concept: 'Functions with Parameters',
        codeExample: 'def greet_person(name, age):\n    print(f"Hello {name}, you are {age} years old")\n\ngreet_person("Alice", 25)',
        explanation: {
          ht: 'Paramèt yo pèmèt nou pase enfòmasyon nan fonksyon yo',
          fr: 'Les paramètres nous permettent de passer des informations aux fonctions',
          en: 'Parameters allow us to pass information to functions'
        }
      },
      {
        concept: 'Return Values',
        codeExample: 'def add_numbers(x, y):\n    result = x + y\n    return result\n\nsum_result = add_numbers(5, 3)\nprint(f"Sum: {sum_result}")',
        explanation: {
          ht: 'return pèmèt fonksyon yo bay rezilta yo tounen',
          fr: 'return permet aux fonctions de renvoyer leurs résultats',
          en: 'return allows functions to send back their results'
        }
      }
    ],
    practiceExercises: [
      {
        title: {
          ht: 'Fonksyon Kalkilatè',
          fr: 'Fonction Calculatrice',
          en: 'Calculator Function'
        },
        instruction: {
          ht: 'Kreye fonksyon ki fè operasyon matematik ak return rezilta a',
          fr: 'Créez des fonctions qui font des opérations mathématiques et retournent le résultat',
          en: 'Create functions that do mathematical operations and return the result'
        },
        solution: 'def add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b != 0:\n        return a / b\n    else:\n        return "Error: Cannot divide by zero"\n\n# Test the functions\nprint(f"5 + 3 = {add(5, 3)}")\nprint(f"4 * 6 = {multiply(4, 6)}")\nprint(f"10 / 2 = {divide(10, 2)}")'
      },
      {
        title: {
          ht: 'Validasyon Entrada',
          fr: 'Validation d\'Entrée',
          en: 'Input Validation'
        },
        instruction: {
          ht: 'Kreye yon fonksyon ki valide si yon nimewo nan yon sèten echèl',
          fr: 'Créez une fonction qui valide si un nombre est dans une certaine plage',
          en: 'Create a function that validates if a number is in a certain range'
        },
        solution: 'def is_in_range(number, min_val, max_val):\n    return min_val <= number <= max_val\n\ndef get_valid_number(prompt, min_val, max_val):\n    while True:\n        try:\n            num = float(input(prompt))\n            if is_in_range(num, min_val, max_val):\n                return num\n            else:\n                print(f"Please enter a number between {min_val} and {max_val}")\n        except ValueError:\n            print("Please enter a valid number")\n\n# Test the function\nage = get_valid_number("Enter your age (0-120): ", 0, 120)\nprint(f"Valid age entered: {age}")'
      }
    ],
    miniProject: {
      title: {
        ht: 'Konvètè Tanperati',
        fr: 'Convertisseur de Température',
        en: 'Temperature Converter'
      },
      description: {
        ht: 'Kreye yon pwogram ki konvèti tanperati ant Celsius, Fahrenheit ak Kelvin',
        fr: 'Créez un programme qui convertit les températures entre Celsius, Fahrenheit et Kelvin',
        en: 'Create a program that converts temperatures between Celsius, Fahrenheit and Kelvin'
      },
      requirements: {
        ht: [
          'Kreye fonksyon pou konvèti ant chak tip tanperati',
          'Ajoute yon meni pou itilizatè a chwazi konvèsyon an',
          'Valide entrada ak jere erè yo',
          'Montre rezilta yo ak 2 desimal'
        ],
        fr: [
          'Créer des fonctions pour convertir entre chaque type de température',
          'Ajouter un menu pour que l\'utilisateur choisisse la conversion',
          'Valider l\'entrée et gérer les erreurs',
          'Afficher les résultats avec 2 décimales'
        ],
        en: [
          'Create functions to convert between each temperature type',
          'Add a menu for user to choose conversion',
          'Validate input and handle errors',
          'Display results with 2 decimal places'
        ]
      },
      starterCode: '# Define conversion functions\n# Create menu system\n# Handle user input\n# Display results',
      sampleSolution: '# Define conversion functions\ndef celsius_to_fahrenheit(celsius):\n    return (celsius * 9/5) + 32\n\ndef celsius_to_kelvin(celsius):\n    return celsius + 273.15\n\ndef fahrenheit_to_celsius(fahrenheit):\n    return (fahrenheit - 32) * 5/9\n\ndef fahrenheit_to_kelvin(fahrenheit):\n    celsius = fahrenheit_to_celsius(fahrenheit)\n    return celsius_to_kelvin(celsius)\n\ndef kelvin_to_celsius(kelvin):\n    return kelvin - 273.15\n\ndef kelvin_to_fahrenheit(kelvin):\n    celsius = kelvin_to_celsius(kelvin)\n    return celsius_to_fahrenheit(celsius)\n\ndef get_temperature():\n    while True:\n        try:\n            temp = float(input("Enter temperature: "))\n            return temp\n        except ValueError:\n            print("Please enter a valid number")\n\ndef main():\n    print("=== Temperature Converter ===")\n    print("1. Celsius to Fahrenheit")\n    print("2. Celsius to Kelvin")\n    print("3. Fahrenheit to Celsius")\n    print("4. Fahrenheit to Kelvin")\n    print("5. Kelvin to Celsius")\n    print("6. Kelvin to Fahrenheit")\n    \n    choice = input("Choose conversion (1-6): ")\n    temp = get_temperature()\n    \n    if choice == "1":\n        result = celsius_to_fahrenheit(temp)\n        print(f"{temp}°C = {result:.2f}°F")\n    elif choice == "2":\n        result = celsius_to_kelvin(temp)\n        print(f"{temp}°C = {result:.2f}K")\n    elif choice == "3":\n        result = fahrenheit_to_celsius(temp)\n        print(f"{temp}°F = {result:.2f}°C")\n    elif choice == "4":\n        result = fahrenheit_to_kelvin(temp)\n        print(f"{temp}°F = {result:.2f}K")\n    elif choice == "5":\n        result = kelvin_to_celsius(temp)\n        print(f"{temp}K = {result:.2f}°C")\n    elif choice == "6":\n        result = kelvin_to_fahrenheit(temp)\n        print(f"{temp}K = {result:.2f}°F")\n    else:\n        print("Invalid choice")\n\nmain()'
    },
    quiz: [
      {
        question: {
          ht: 'Ki mo kle ki itilize pou retounen yon valè nan yon fonksyon?',
          fr: 'Quel mot-clé est utilisé pour retourner une valeur dans une fonction ?',
          en: 'Which keyword is used to return a value from a function?'
        },
        options: [
          { ht: 'give', fr: 'give', en: 'give' },
          { ht: 'return', fr: 'return', en: 'return' },
          { ht: 'send', fr: 'send', en: 'send' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'return itilize pou retounen yon valè soti nan yon fonksyon',
          fr: 'return est utilisé pour retourner une valeur d\'une fonction',
          en: 'return is used to return a value from a function'
        }
      }
    ],
    homework: {
      ht: 'Kreye yon fonksyon ki kalkile ak retounen IMC ak yon fonksyon ki klase rezilta a',
      fr: 'Créez une fonction qui calcule et retourne l\'IMC et une fonction qui classe le résultat',
      en: 'Create a function that calculates and returns BMI and a function that classifies the result'
    },
    nextWeekPreview: {
      ht: 'Semèn k ap vini an: Pwojè nan mitan an - konbine tout konpetans yo',
      fr: 'Semaine prochaine : Projet de mi-parcours - combiner toutes les compétences',
      en: 'Next week: Midterm project - combining all skills'
    }
  }
];

// Course metadata
export const pythonCourseMetadata = {
  title: {
    ht: 'Python pou Kòmansè yo - 15 Semèn',
    fr: 'Python pour Débutants - 15 Semaines',
    en: 'Python for Beginners - 15 Weeks'
  },
  description: {
    ht: 'Yon kou konplè pou aprann pwogram Python soti nan debaz yo rive nan pwojè avanse yo. Chak semèn gen leson pratik ak pwojè mini yo.',
    fr: 'Un cours complet pour apprendre la programmation Python des bases aux projets avancés. Chaque semaine comprend des leçons pratiques et des mini-projets.',
    en: 'A comprehensive course to learn Python programming from basics to advanced projects. Each week includes practical lessons and mini-projects.'
  },
  totalWeeks: 15,
  estimatedTotalDuration: 1350, // 90 minutes × 15 weeks
  difficultyLevel: 'Beginner',
  targetAudience: {
    ht: 'Moun ki vle aprann pwogram Python pou premye fwa',
    fr: 'Personnes qui veulent apprendre la programmation Python pour la première fois',
    en: 'People who want to learn Python programming for the first time'
  },
  prerequisites: {
    ht: 'Pa gen kondisyon. Jis bezwen yon òdinatè ak entènèt.',
    fr: 'Aucun prérequis. Juste besoin d\'un ordinateur et d\'internet.',
    en: 'No prerequisites. Just need a computer and internet.'
  }
};

// Helper functions
export function getPythonLessonById(id: string): PythonLessonContent | undefined {
  return pythonBeginnersCourse.find(lesson => lesson.id === id);
}

export function getPythonLessonByWeek(weekNumber: number): PythonLessonContent | undefined {
  return pythonBeginnersCourse.find(lesson => lesson.weekNumber === weekNumber);
}