// Python Week 2: Variables & Data Types - Ultra-comprehensive Card-Based Lesson
// Building on Week 1's foundation with deep dive into data storage and manipulation

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
  code?: string;
  keyPoints?: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  tips?: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  example?: {
    code: string;
    output: string;
    explanation: {
      ht: string;
      fr: string;
      en: string;
    };
  };
}

export interface QuizQuestion {
  id: string;
  question: {
    ht: string;
    fr: string;
    en: string;
  };
  options: {
    ht: string[];
    fr: string[];
    en: string[];
  };
  correctAnswer: number;
  explanation: {
    ht: string;
    fr: string;
    en: string;
  };
  code?: string;
}

export interface MiniProject {
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
}

export const pythonWeek2Lesson = {
  weekNumber: 2,
  title: {
    ht: 'Varyab ak Tip Done yo - Kenbe ak Manipile Done',
    fr: 'Variables et Types de Données - Stocker et Manipuler les Données',
    en: 'Variables & Data Types - Storing and Manipulating Data'
  },
  description: {
    ht: 'Aprann kijan pou kreye ak itilize varyab yo, konprann tip done Python yo, ak kijan pou chanje ant yo.',
    fr: 'Apprenez comment créer et utiliser des variables, comprendre les types de données Python, et comment convertir entre eux.',
    en: 'Learn how to create and use variables, understand Python data types, and how to convert between them.'
  },
  totalCards: 13,
  cards: [
    // Card 1: Welcome & Introduction
    {
      id: 'week2-intro-1',
      type: 'intro' as const,
      title: {
        ht: '🎉 Byenveni nan Semèn 2: Varyab ak Tip Done yo!',
        fr: '🎉 Bienvenue à la Semaine 2: Variables et Types de Données!',
        en: '🎉 Welcome to Week 2: Variables & Data Types!'
      },
      content: {
        ht: 'Kounye a ou konnen kijan pou fè Python pale! Semèn sa a, nou ap aprann kijan pou kenbe ak manipile done nan kòd nou an. Varyab yo se tankou kèk bwat ki make yo ki kapab kenbe tout kalite enfòmasyon.',
        fr: 'Maintenant que vous savez faire parler Python! Cette semaine, nous apprenons comment stocker et manipuler des données dans notre code. Les variables sont comme des boîtes étiquetées qui peuvent contenir toutes sortes d\'informations.',
        en: 'Now that you know how to make Python talk! This week, we\'re learning how to store and manipulate data in our code. Variables are like labeled boxes that can hold all kinds of information.'
      },
      keyPoints: {
        ht: [
          'Varyab yo se kote nou ka kenbe done',
          'Gen plizyè tip done nan Python',
          'Nou ka chanje done yo nan tip diferan',
          'Non varyab yo gen règleman yo'
        ],
        fr: [
          'Les variables sont où nous stockons les données',
          'Il y a plusieurs types de données en Python',
          'Nous pouvons convertir les données en différents types',
          'Les noms de variables ont leurs règles'
        ],
        en: [
          'Variables are where we store data',
          'There are several data types in Python',
          'We can convert data to different types',
          'Variable names have their rules'
        ]
      }
    },

    // Card 2: What is a Variable?
    {
      id: 'week2-concept-1',
      type: 'concept' as const,
      title: {
        ht: '📦 Kisa yon Varyab ye?',
        fr: '📦 Qu\'est-ce qu\'une Variable?',
        en: '📦 What is a Variable?'
      },
      content: {
        ht: 'Yon varyab se tankou yon bwat ki gen yon etikèt sou li. Ou ka mete tout bagay nan bwat la, ak ou ka wè ki sa ki ladan l nan tout moman.',
        fr: 'Une variable est comme une boîte avec une étiquette dessus. Vous pouvez mettre n\'importe quoi dans la boîte, et vous pouvez voir ce qu\'il y a dedans à tout moment.',
        en: 'A variable is like a box with a label on it. You can put anything in the box, and you can see what\'s inside it at any time.'
      },
      code: `# Creating variables - like putting items in labeled boxes
name = "Ralph"      # String box
age = 25           # Number box
is_student = True  # True/False box

# You can check what's in each box
print(name)        # Shows: Ralph
print(age)         # Shows: 25
print(is_student)  # Shows: True`,
      keyPoints: {
        ht: [
          'Varyab yo gen non yo ak valè yo',
          'Ou ka chanje valè yo nenpòt ki lè',
          'Python sonje valè a ki nan varyab la',
          'Nou itilize siy = pou mete valè nan varyab'
        ],
        fr: [
          'Les variables ont des noms et des valeurs',
          'Vous pouvez changer les valeurs à tout moment',
          'Python se souvient de la valeur dans la variable',
          'Nous utilisons le signe = pour mettre une valeur dans une variable'
        ],
        en: [
          'Variables have names and values',
          'You can change values anytime',
          'Python remembers the value in the variable',
          'We use the = sign to put a value in a variable'
        ]
      },
      example: {
        code: `# Variables can be updated
score = 10
print("Initial score:", score)

score = 15  # Update the value
print("New score:", score)`,
        output: `Initial score: 10
New score: 15`,
        explanation: {
          ht: 'Nou ka chanje valè varyab yo nan nenpòt moman. Python ap sonje nouvo valè a.',
          fr: 'Nous pouvons changer la valeur des variables à tout moment. Python se souviendra de la nouvelle valeur.',
          en: 'We can change variable values at any time. Python will remember the new value.'
        }
      }
    },

    // Card 3: Integer Data Type
    {
      id: 'week2-concept-2',
      type: 'concept' as const,
      title: {
        ht: '🔢 Nonm Antye yo (Integers)',
        fr: '🔢 Les Nombres Entiers (Integers)',
        en: '🔢 Whole Numbers (Integers)'
      },
      content: {
        ht: 'Integers (int) se nonm ki pa gen pòsyon desimal. Yo se nonm antye tankou 1, 5, 100, oswa negatif tankou -10.',
        fr: 'Les integers (int) sont des nombres sans partie décimale. Ce sont des nombres entiers comme 1, 5, 100, ou négatifs comme -10.',
        en: 'Integers (int) are numbers without decimal parts. They are whole numbers like 1, 5, 100, or negative like -10.'
      },
      code: `# Integer examples
age = 25
temperature = -5
score = 100
year = 2024

# Math with integers
total = age + score
print("Total:", total)  # Shows: 125

# Check the type
print(type(age))  # Shows: <class 'int'>`,
      keyPoints: {
        ht: [
          'Integers pa gen pwen desimal',
          'Yo ka pozitif, negatif, oswa zewo',
          'Python otomatikman rekonèt yo kòm int',
          'Ou ka fè matematik ak integers yo'
        ],
        fr: [
          'Les integers n\'ont pas de point décimal',
          'Ils peuvent être positifs, négatifs, ou zéro',
          'Python les reconnaît automatiquement comme int',
          'Vous pouvez faire des mathématiques avec les integers'
        ],
        en: [
          'Integers have no decimal point',
          'They can be positive, negative, or zero',
          'Python automatically recognizes them as int',
          'You can do math with integers'
        ]
      },
      tips: {
        ht: [
          'Python pa gen limit sou gwosè integers yo',
          'Ou ka itilize siy _ pou fè gwo nonm yo pi klè: 1_000_000',
          'Operasyon matematik yo: +, -, *, /, //, %, **'
        ],
        fr: [
          'Python n\'a pas de limite sur la taille des integers',
          'Vous pouvez utiliser _ pour clarifier les gros nombres: 1_000_000',
          'Opérations mathématiques: +, -, *, /, //, %, **'
        ],
        en: [
          'Python has no limit on integer size',
          'You can use _ to clarify big numbers: 1_000_000',
          'Math operations: +, -, *, /, //, %, **'
        ]
      }
    },

    // Card 4: Float Data Type
    {
      id: 'week2-concept-3',
      type: 'concept' as const,
      title: {
        ht: '💧 Nonm Desimal yo (Floats)',
        fr: '💧 Les Nombres Décimaux (Floats)',
        en: '💧 Decimal Numbers (Floats)'
      },
      content: {
        ht: 'Floats se nonm ki gen pòsyon desimal. Yo enpòtan pou mezire bagay ki pa antye, tankou pwa, wotè, oswa pri yo.',
        fr: 'Les floats sont des nombres avec une partie décimale. Ils sont importants pour mesurer des choses qui ne sont pas entières, comme le poids, la hauteur, ou les prix.',
        en: 'Floats are numbers with decimal parts. They\'re important for measuring things that aren\'t whole, like weight, height, or prices.'
      },
      code: `# Float examples
height = 1.75
price = 19.99
pi = 3.14159
temperature = 98.6

# Math with floats
total_cost = price * 2
print("Total cost:", total_cost)  # Shows: 39.98

# Check the type
print(type(height))  # Shows: <class 'float'>`,
      keyPoints: {
        ht: [
          'Floats gen pwen desimal ak nonm apre li',
          'Yo pi presi pou kalkilasyon yo',
          'Python otomatikman kreye float yo ak pwen desimal',
          'Ou ka konvèti int nan float ak visvèsa'
        ],
        fr: [
          'Les floats ont un point décimal et des nombres après',
          'Ils sont plus précis pour les calculs',
          'Python crée automatiquement des floats avec un point décimal',
          'Vous pouvez convertir int en float et vice versa'
        ],
        en: [
          'Floats have a decimal point and numbers after it',
          'They\'re more precise for calculations',
          'Python automatically creates floats with decimal points',
          'You can convert int to float and vice versa'
        ]
      },
      example: {
        code: `# Division always creates floats
result1 = 10 / 2    # Float division
result2 = 10 // 2   # Integer division
print(result1)      # Shows: 5.0 (float)
print(result2)      # Shows: 5 (int)`,
        output: `5.0
5`,
        explanation: {
          ht: 'Divizyon ak / toujou ba nou float, menm si rezilta a ta ka yon nonm antye.',
          fr: 'La division avec / donne toujours un float, même si le résultat pourrait être un nombre entier.',
          en: 'Division with / always gives a float, even if the result could be a whole number.'
        }
      }
    },

    // Card 5: String Data Type
    {
      id: 'week2-concept-4',
      type: 'concept' as const,
      title: {
        ht: '📝 Tèks yo (Strings)',
        fr: '📝 Le Texte (Strings)',
        en: '📝 Text (Strings)'
      },
      content: {
        ht: 'Strings se tèks - lèt, mo, fraz yo. Nou mete yo nan quote marks ("") oswa apostrophe (\'\') pou montre Python se tèks yo ye.',
        fr: 'Les strings sont du texte - lettres, mots, phrases. Nous les mettons dans des guillemets ("") ou des apostrophes (\'\') pour montrer à Python que c\'est du texte.',
        en: 'Strings are text - letters, words, sentences. We put them in quote marks ("") or apostrophes (\'\') to show Python they\'re text.'
      },
      code: `# String examples
name = "Ralph"
greeting = 'Hello there!'
message = "Welcome to Python programming"
empty = ""

# Combining strings
full_greeting = greeting + " " + name
print(full_greeting)  # Shows: Hello there! Ralph

# Check the type
print(type(name))  # Shows: <class 'str'>`,
      keyPoints: {
        ht: [
          'Strings yo toujou nan quote marks oswa apostrophe',
          'Ou ka itilize swa "" oswa \'\' - menm bagay la',
          'Strings yo ka vid (pa gen anyen ladan yo)',
          'Ou ka konekte strings yo ak siy +'
        ],
        fr: [
          'Les strings sont toujours dans des guillemets ou apostrophes',
          'Vous pouvez utiliser soit "" soit \'\' - même chose',
          'Les strings peuvent être vides (rien dedans)',
          'Vous pouvez connecter les strings avec le signe +'
        ],
        en: [
          'Strings are always in quotes or apostrophes',
          'You can use either "" or \'\' - same thing',
          'Strings can be empty (nothing inside)',
          'You can connect strings with the + sign'
        ]
      },
      tips: {
        ht: [
          'Pou quote nan string ou an: "Li te di \'Bonjou\' mwen."',
          'Triple quotes pou tèks long: """Tèks long..."""',
          'String yo ka gen espas, nonm, ak karakterè espesyal yo'
        ],
        fr: [
          'Pour des guillemets dans votre string: "Il a dit \'Bonjour\' moi."',
          'Triple guillemets pour long texte: """Texte long..."""',
          'Les strings peuvent avoir espaces, nombres, et caractères spéciaux'
        ],
        en: [
          'For quotes in your string: "He said \'Hello\' to me."',
          'Triple quotes for long text: """Long text..."""',
          'Strings can have spaces, numbers, and special characters'
        ]
      }
    },

    // Card 6: Boolean Data Type
    {
      id: 'week2-concept-5',
      type: 'concept' as const,
      title: {
        ht: '✅ True oswa False (Booleans)',
        fr: '✅ Vrai ou Faux (Booleans)',
        en: '✅ True or False (Booleans)'
      },
      content: {
        ht: 'Booleans se tip done ki pi senp yo - yo jis ka True (vè) oswa False (fo). Yo enpòtan pou pran desizyon nan kòd nou an.',
        fr: 'Les booleans sont les types de données les plus simples - ils peuvent seulement être True (vrai) ou False (faux). Ils sont importants pour prendre des décisions dans notre code.',
        en: 'Booleans are the simplest data type - they can only be True or False. They\'re important for making decisions in our code.'
      },
      code: `# Boolean examples
is_sunny = True
is_raining = False
has_homework = True
is_weekend = False

# Using booleans in decisions
if is_sunny:
    print("Great day for a walk!")

# Boolean from comparisons
age = 18
is_adult = age >= 18
print(is_adult)  # Shows: True`,
      keyPoints: {
        ht: [
          'Gen sèlman 2 valè boolean: True ak False',
          'Yo enpòtan pou konparezón ak desizyon',
          'True ak False yo gen lèt majiskil yo',
          'Konparezón yo otomatikman kreye boolean yo'
        ],
        fr: [
          'Il n\'y a que 2 valeurs boolean: True et False',
          'Ils sont importants pour les comparaisons et décisions',
          'True et False ont leurs premières lettres en majuscule',
          'Les comparaisons créent automatiquement des booleans'
        ],
        en: [
          'There are only 2 boolean values: True and False',
          'They\'re important for comparisons and decisions',
          'True and False have capital first letters',
          'Comparisons automatically create booleans'
        ]
      },
      example: {
        code: `# Boolean operations
a = 10
b = 5

print(a > b)    # Greater than
print(a < b)    # Less than  
print(a == b)   # Equal to
print(a != b)   # Not equal to`,
        output: `True
False
False
True`,
        explanation: {
          ht: 'Konparezón yo ba nou boolean yo. Python evalye yo ak ba nou True oswa False.',
          fr: 'Les comparaisons nous donnent des booleans. Python les évalue et nous donne True ou False.',
          en: 'Comparisons give us booleans. Python evaluates them and gives us True or False.'
        }
      }
    },

    // Card 7: Checking Data Types
    {
      id: 'week2-concept-6',
      type: 'concept' as const,
      title: {
        ht: '🔍 Kontwole Ki Tip Done Nou Gen',
        fr: '🔍 Vérifier Quel Type de Données Nous Avons',
        en: '🔍 Checking What Data Type We Have'
      },
      content: {
        ht: 'Pafwa nou pa konnen ki tip done nou gen nan yon varyab. Python gen fonksyon type() ki ka di nou sa.',
        fr: 'Parfois nous ne savons pas quel type de données nous avons dans une variable. Python a la fonction type() qui peut nous le dire.',
        en: 'Sometimes we don\'t know what data type we have in a variable. Python has the type() function that can tell us.'
      },
      code: `# Checking types with type() function
name = "Ralph"
age = 25
height = 1.75
is_student = True

print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>  
print(type(height))     # <class 'float'>
print(type(is_student)) # <class 'bool'>

# More readable format
print(f"name is a {type(name).__name__}")
print(f"age is a {type(age).__name__}")`,
      keyPoints: {
        ht: [
          'type() montre nou ki tip done nou gen',
          'Li ba nou enfòmasyon detaye ak <class \'...\'>',
          'type().__name__ ba nou non tip yo pi klè',
          'Sa ede nou konprann ak debug kòd nou an'
        ],
        fr: [
          'type() nous montre quel type de données nous avons',
          'Il nous donne des informations détaillées avec <class \'...\'>',
          'type().__name__ nous donne les noms de types plus clairement',
          'Cela aide à comprendre et déboguer notre code'
        ],
        en: [
          'type() shows us what data type we have',
          'It gives detailed info with <class \'...\'>',
          'type().__name__ gives us type names more clearly',
          'This helps understand and debug our code'
        ]
      },
      tips: {
        ht: [
          'Toujou verifye tip done yo lè ou gen erè',
          'type() ak isinstance() yo diferan - aprann diferans lan',
          'Chak bagay nan Python gen yon tip, menm fonksyon yo'
        ],
        fr: [
          'Vérifiez toujours les types de données quand vous avez des erreurs',
          'type() et isinstance() sont différents - apprenez la différence',
          'Tout en Python a un type, même les fonctions'
        ],
        en: [
          'Always check data types when you have errors',
          'type() and isinstance() are different - learn the difference',
          'Everything in Python has a type, even functions'
        ]
      }
    },

    // Card 8: Type Conversion
    {
      id: 'week2-concept-7',
      type: 'concept' as const,
      title: {
        ht: '🔄 Chanje Tip Done yo (Type Conversion)',
        fr: '🔄 Changer les Types de Données (Conversion de Type)',
        en: '🔄 Changing Data Types (Type Conversion)'
      },
      content: {
        ht: 'Pafwa nou bezwen chanje done yo nan yon tip diferan. Python gen fonksyon yo ki ka fè sa: int(), float(), str(), bool().',
        fr: 'Parfois nous devons changer les données en un type différent. Python a des fonctions qui peuvent le faire: int(), float(), str(), bool().',
        en: 'Sometimes we need to change data to a different type. Python has functions that can do this: int(), float(), str(), bool().'
      },
      code: `# Converting between types
# String to number
age_text = "25"
age_number = int(age_text)
print(age_number + 5)  # Now we can do math: 30

# Number to string  
score = 100
score_text = str(score)
message = "Your score is: " + score_text

# Float to int (loses decimal part)
price = 19.99
price_whole = int(price)  # Becomes 19

# Any type to boolean
print(bool(1))     # True
print(bool(0))     # False  
print(bool("hi"))  # True
print(bool(""))    # False`,
      keyPoints: {
        ht: [
          'int() fè bagay yo vin nonm antye',
          'float() fè bagay yo vin nonm desimal',
          'str() fè bagay yo vin tèks',
          'bool() fè bagay yo vin True oswa False'
        ],
        fr: [
          'int() fait devenir les choses des nombres entiers',
          'float() fait devenir les choses des nombres décimaux',
          'str() fait devenir les choses du texte',
          'bool() fait devenir les choses True ou False'
        ],
        en: [
          'int() makes things become whole numbers',
          'float() makes things become decimal numbers',
          'str() makes things become text',
          'bool() makes things become True or False'
        ]
      },
      example: {
        code: `# Common conversion pattern with input
user_input = input("Enter your age: ")  # Always string
age = int(user_input)  # Convert to number
next_year = age + 1    # Now we can do math
print(f"Next year you'll be {next_year}")`,
        output: `Enter your age: 25
Next year you'll be 26`,
        explanation: {
          ht: 'input() toujou ba nou string yo, donk nou bezwen konvèti yo nan nonm yo pou fè matematik.',
          fr: 'input() nous donne toujours des strings, donc nous devons les convertir en nombres pour faire des mathématiques.',
          en: 'input() always gives us strings, so we need to convert them to numbers to do math.'
        }
      }
    },

    // Card 9: Variable Naming Rules
    {
      id: 'week2-concept-8',
      type: 'concept' as const,
      title: {
        ht: '📝 Règ pou Non Varyab yo',
        fr: '📝 Règles pour les Noms de Variables',
        en: '📝 Rules for Variable Names'
      },
      content: {
        ht: 'Python gen règ pou kijan nou ka rele varyab nou yo. Si nou pa swiv règ yo, kòd nou an pa ap mache.',
        fr: 'Python a des règles pour comment nous pouvons nommer nos variables. Si nous ne suivons pas les règles, notre code ne fonctionnera pas.',
        en: 'Python has rules for how we can name our variables. If we don\'t follow the rules, our code won\'t work.'
      },
      code: `# ✅ GOOD variable names
name = "Ralph"
age = 25
first_name = "Marie"
user_score = 100
is_valid = True
number_2 = 42

# ❌ BAD variable names (these cause errors!)
# 2name = "Bad"      # Can't start with number
# first-name = "Bad" # Can't use hyphens
# my name = "Bad"    # Can't have spaces
# class = "Bad"      # Can't use Python keywords`,
      keyPoints: {
        ht: [
          'Non yo ka gen lèt, nonm, ak underscore (_)',
          'Yo pa ka kòmanse ak yon nonm',
          'Pa gen espas oswa karakterè espesyal yo',
          'Case-sensitive: Age ≠ age'
        ],
        fr: [
          'Les noms peuvent avoir lettres, nombres, et underscores (_)',
          'Ils ne peuvent pas commencer par un nombre',
          'Pas d\'espaces ou caractères spéciaux',
          'Sensible à la casse: Age ≠ age'
        ],
        en: [
          'Names can have letters, numbers, and underscores (_)',
          'They can\'t start with a number',
          'No spaces or special characters',
          'Case-sensitive: Age ≠ age'
        ]
      },
      tips: {
        ht: [
          'Itilize non yo ki klè ak ki di kisa varyab la ye',
          'snake_case se style ki pi bon: user_name',
          'Evite mo yo ki Python deja itilize yo: class, def, if'
        ],
        fr: [
          'Utilisez des noms clairs qui disent ce qu\'est la variable',
          'snake_case est le meilleur style: user_name',
          'Évitez les mots que Python utilise déjà: class, def, if'
        ],
        en: [
          'Use clear names that tell what the variable is',
          'snake_case is the best style: user_name',
          'Avoid words Python already uses: class, def, if'
        ]
      }
    },

    // Card 10: Working with Input
    {
      id: 'week2-practice-1',
      type: 'practice' as const,
      title: {
        ht: '⌨️ Travay ak Input Itilizatè a',
        fr: '⌨️ Travailler avec l\'Input Utilisateur',
        en: '⌨️ Working with User Input'
      },
      content: {
        ht: 'Fonksyon input() ede nou jwenn done nan moun k ap itilize pwogram nan. Men atansyon - li toujou ba nou strings!',
        fr: 'La fonction input() nous aide à obtenir des données de la personne qui utilise le programme. Mais attention - elle nous donne toujours des strings!',
        en: 'The input() function helps us get data from the person using the program. But careful - it always gives us strings!'
      },
      code: `# Getting user input
name = input("What's your name? ")
print(f"Hello, {name}!")

# Getting numbers (need conversion!)
age_text = input("How old are you? ")
age = int(age_text)  # Convert to number
print(f"In 5 years, you'll be {age + 5}")

# Shortcut - convert directly
height = float(input("Enter your height in meters: "))
print(f"Your height is {height} meters")

# Getting yes/no answers
answer = input("Do you like Python? (yes/no): ")
likes_python = answer.lower() == "yes"
print(f"Likes Python: {likes_python}")`,
      keyPoints: {
        ht: [
          'input() toujou retounen string yo',
          'Ou bezwen konvèti nan nonm yo pou matematik',
          'Mete yon mesaj klè nan input() yo',
          'Valide input yo pou evite erè yo'
        ],
        fr: [
          'input() retourne toujours des strings',
          'Vous devez convertir en nombres pour les mathématiques',
          'Mettez un message clair dans input()',
          'Validez les inputs pour éviter les erreurs'
        ],
        en: [
          'input() always returns strings',
          'You need to convert to numbers for math',
          'Put a clear message in input()',
          'Validate inputs to avoid errors'
        ]
      }
    },

    // Card 11: Math Operations Deep Dive
    {
      id: 'week2-practice-2',
      type: 'practice' as const,
      title: {
        ht: '🧮 Operasyon Matematik Avanse yo',
        fr: '🧮 Opérations Mathématiques Avancées',
        en: '🧮 Advanced Math Operations'
      },
      content: {
        ht: 'Python gen anpil operasyon matematik. Ann aprann yo tout ak egzanp yo.',
        fr: 'Python a beaucoup d\'opérations mathématiques. Apprenons-les toutes avec des exemples.',
        en: 'Python has many math operations. Let\'s learn them all with examples.'
      },
      code: `# Basic operations
a = 10
b = 3

print(f"{a} + {b} = {a + b}")    # Addition: 13
print(f"{a} - {b} = {a - b}")    # Subtraction: 7  
print(f"{a} * {b} = {a * b}")    # Multiplication: 30
print(f"{a} / {b} = {a / b}")    # Division: 3.333...

# Special operations
print(f"{a} // {b} = {a // b}")  # Floor division: 3
print(f"{a} % {b} = {a % b}")    # Modulus (remainder): 1
print(f"{a} ** {b} = {a ** b}")  # Exponentiation: 1000

# Order of operations (PEMDAS)
result = 2 + 3 * 4  # Multiplication first: 2 + 12 = 14
print(f"2 + 3 * 4 = {result}")

result2 = (2 + 3) * 4  # Parentheses first: 5 * 4 = 20
print(f"(2 + 3) * 4 = {result2}")`,
      keyPoints: {
        ht: [
          '/ toujou ba float yo, // ba int yo',
          '% ba nou rès divizyon an',
          '** se pou eksponan (pa ^)',
          'Itilize parantèz yo pou chanje òdre operasyon yo'
        ],
        fr: [
          '/ donne toujours des floats, // donne des ints',
          '% nous donne le reste de la division',
          '** est pour l\'exponentiation (pas ^)',
          'Utilisez des parenthèses pour changer l\'ordre des opérations'
        ],
        en: [
          '/ always gives floats, // gives ints',
          '% gives us the remainder of division',
          '** is for exponentiation (not ^)',
          'Use parentheses to change order of operations'
        ]
      }
    },

    // Card 12: String Operations
    {
      id: 'week2-practice-3',
      type: 'practice' as const,
      title: {
        ht: '🔤 Operasyon ak String yo',
        fr: '🔤 Opérations avec les Strings',
        en: '🔤 Operations with Strings'
      },
      content: {
        ht: 'String yo pa jis pou kenbe tèks. Nou ka fè operasyon yo ak yo tou!',
        fr: 'Les strings ne sont pas juste pour stocker du texte. Nous pouvons faire des opérations avec eux aussi!',
        en: 'Strings aren\'t just for storing text. We can do operations with them too!'
      },
      code: `# String concatenation (joining)
first_name = "Marie"
last_name = "Joseph"
full_name = first_name + " " + last_name
print(full_name)  # Marie Joseph

# String repetition
laugh = "Ha" * 3
print(laugh)  # HaHaHa

# String formatting with f-strings (modern way!)
age = 25
message = f"Hello, my name is {first_name} and I'm {age} years old"
print(message)

# String methods
text = "python programming"
print(text.upper())     # PYTHON PROGRAMMING
print(text.title())     # Python Programming  
print(text.replace("python", "Python"))  # Python programming`,
      keyPoints: {
        ht: [
          'Itilize + pou konekte string yo',
          'Itilize * pou repete string yo',
          'f-strings se metòd ki pi bon pou format',
          'String methods ka chanje fòm ak kontni yo'
        ],
        fr: [
          'Utilisez + pour connecter les strings',
          'Utilisez * pour répéter les strings',
          'f-strings est la meilleure méthode pour formater',
          'Les méthodes de string peuvent changer forme et contenu'
        ],
        en: [
          'Use + to connect strings',
          'Use * to repeat strings',
          'f-strings is the best method for formatting',
          'String methods can change form and content'
        ]
      }
    },

    // Card 13: Common Type Conversion Errors
    {
      id: 'week2-tip-1',
      type: 'tip' as const,
      title: {
        ht: '⚠️ Erè Kominé yo ak Konvèsyon Tip',
        fr: '⚠️ Erreurs Communes avec Conversion de Types',
        en: '⚠️ Common Type Conversion Errors'
      },
      content: {
        ht: 'Aprann erè kominé yo ak kijan pou evite yo. Sa ap fè ou vin yon pwogramè ki pi bon!',
        fr: 'Apprenez les erreurs communes et comment les éviter. Cela vous rendra un meilleur programmeur!',
        en: 'Learn the common errors and how to avoid them. This will make you a better programmer!'
      },
      code: `# ❌ Common errors and ✅ how to fix them

# Error 1: Can't convert invalid strings to numbers
# age = int("hello")  # ValueError!
# ✅ Fix: Validate before converting
user_input = "25"
if user_input.isdigit():
    age = int(user_input)
else:
    print("Please enter a valid number!")

# Error 2: Mixing types without conversion
# result = "Age: " + 25  # TypeError!
# ✅ Fix: Convert to same type
age = 25
result = "Age: " + str(age)  # or f"Age: {age}"

# Error 3: Lost precision with int()
price = 19.99
# whole_price = int(price)  # Becomes 19, lost .99!
# ✅ Fix: Use round() if you want rounding
whole_price = round(price)  # Becomes 20`,
      tips: {
        ht: [
          'Toujou teste input yo anvan konvèsyon',
          'Konprann diferans ant int() ak round()',
          'Itilize try/except pou gere erè yo (nou ap aprann sa pi devan)',
          'f-strings evite anpil erè konvèsyon yo'
        ],
        fr: [
          'Testez toujours les inputs avant conversion',
          'Comprenez la différence entre int() et round()',
          'Utilisez try/except pour gérer les erreurs (nous apprendrons ça plus tard)',
          'f-strings évitent beaucoup d\'erreurs de conversion'
        ],
        en: [
          'Always test inputs before conversion',
          'Understand the difference between int() and round()',
          'Use try/except to handle errors (we\'ll learn this later)',
          'f-strings avoid many conversion errors'
        ]
      }
    }
  ],

  quiz: [
    {
      id: 'week2-quiz-1',
      question: {
        ht: 'Ki nan sa yo ki se yon non varyab ki valid?',
        fr: 'Lequel de ceux-ci est un nom de variable valide?',
        en: 'Which of these is a valid variable name?'
      },
      options: {
        ht: ['2name', 'first_name', 'my name', 'first-name'],
        fr: ['2nom', 'premier_nom', 'mon nom', 'premier-nom'],
        en: ['2name', 'first_name', 'my name', 'first-name']
      },
      correctAnswer: 1,
      explanation: {
        ht: 'first_name se bon paske li kòmanse ak yon lèt, itilize underscore (pa espas oswa tiret), ak pa kòmanse ak yon nonm.',
        fr: 'premier_nom est bon car il commence par une lettre, utilise underscore (pas espaces ou tirets), et ne commence pas par un nombre.',
        en: 'first_name is correct because it starts with a letter, uses underscore (not spaces or hyphens), and doesn\'t start with a number.'
      }
    },
    {
      id: 'week2-quiz-2',
      question: {
        ht: 'Ki tip done 3.14 ye?',
        fr: 'Quel type de données est 3.14?',
        en: 'What data type is 3.14?'
      },
      options: {
        ht: ['int', 'float', 'str', 'bool'],
        fr: ['int', 'float', 'str', 'bool'],
        en: ['int', 'float', 'str', 'bool']
      },
      correctAnswer: 1,
      explanation: {
        ht: '3.14 se yon float paske li gen yon pwen desimal ak nonm apre li.',
        fr: '3.14 est un float car il a un point décimal avec des nombres après.',
        en: '3.14 is a float because it has a decimal point with numbers after it.'
      }
    },
    {
      id: 'week2-quiz-3',
      question: {
        ht: 'Ki sa type("True") ap retounen?',
        fr: 'Que retournera type("True")?',
        en: 'What will type("True") return?'
      },
      options: {
        ht: ['<class \'bool\'>', '<class \'str\'>', '<class \'int\'>', 'True'],
        fr: ['<class \'bool\'>', '<class \'str\'>', '<class \'int\'>', 'True'],
        en: ['<class \'bool\'>', '<class \'str\'>', '<class \'int\'>', 'True']
      },
      correctAnswer: 1,
      explanation: {
        ht: '"True" ak quote yo se yon string, pa boolean an. Li se tèks ki di "True".',
        fr: '"True" avec des guillemets est un string, pas le boolean. C\'est du texte qui dit "True".',
        en: '"True" with quotes is a string, not the boolean. It\'s text that says "True".'
      }
    },
    {
      id: 'week2-quiz-4',
      question: {
        ht: 'Ki sa kòd sa a ap fè? x = "5", y = 2, print(x * y)',
        fr: 'Que fera ce code? x = "5", y = 2, print(x * y)',
        en: 'What will this code do? x = "5", y = 2, print(x * y)'
      },
      options: {
        ht: ['Montre 10', 'Montre 55', 'Ba yon erè', 'Montre 7'],
        fr: ['Affiche 10', 'Affiche 55', 'Donne une erreur', 'Affiche 7'],
        en: ['Shows 10', 'Shows 55', 'Gives an error', 'Shows 7']
      },
      correctAnswer: 1,
      explanation: {
        ht: 'Paske "5" se yon string, * ap repete string lan 2 fwa, ki bay "55".',
        fr: 'Puisque "5" est un string, * répétera le string 2 fois, donnant "55".',
        en: 'Since "5" is a string, * will repeat the string 2 times, giving "55".'
      },
      code: 'x = "5"\ny = 2\nprint(x * y)'
    },
    {
      id: 'week2-quiz-5',
      question: {
        ht: 'Kijan pou konvèti "25" nan yon integer?',
        fr: 'Comment convertir "25" en integer?',
        en: 'How to convert "25" to an integer?'
      },
      options: {
        ht: ['str("25")', 'int("25")', 'float("25")', 'bool("25")'],
        fr: ['str("25")', 'int("25")', 'float("25")', 'bool("25")'],
        en: ['str("25")', 'int("25")', 'float("25")', 'bool("25")']
      },
      correctAnswer: 1,
      explanation: {
        ht: 'int() se fonksyon ki konvèti string yo ak lòt tip yo nan integer yo.',
        fr: 'int() est la fonction qui convertit les strings et autres types en integers.',
        en: 'int() is the function that converts strings and other types to integers.'
      }
    }
  ],

  miniProject: {
    title: {
      ht: '🧮 Kalkilatè Tip (Tip Calculator)',
      fr: '🧮 Calculateur de Pourboire',
      en: '🧮 Tip Calculator'
    },
    description: {
      ht: 'Kreye yon pwogram ki kalkilè tip ak total yo. Itilizatè a va antre montan bèl la ak pousantaj tip la, epi pwogram nan va montre yo konbyen yo dwe peye nan total.',
      fr: 'Créez un programme qui calcule les pourboires et totaux. L\'utilisateur entrera le montant de l\'addition et le pourcentage de pourboire, et le programme montrera combien ils doivent payer au total.',
      en: 'Create a program that calculates tips and totals. The user will enter the bill amount and tip percentage, and the program will show how much they should pay in total.'
    },
    requirements: {
      ht: [
        'Mande itilizatè a pou montan bèl la',
        'Mande pou pousantaj tip la',
        'Kalkile montan tip la',
        'Kalkile total yo dwe peye a',
        'Montre rezilta yo nan yon fòm ki klè'
      ],
      fr: [
        'Demander à l\'utilisateur le montant de l\'addition',
        'Demander le pourcentage de pourboire',
        'Calculer le montant du pourboire',
        'Calculer le total à payer',
        'Afficher les résultats dans un format clair'
      ],
      en: [
        'Ask user for the bill amount',
        'Ask for the tip percentage',
        'Calculate the tip amount',
        'Calculate the total to pay',
        'Display results in a clear format'
      ]
    },
    starterCode: `# Tip Calculator - Week 2 Project
print("🧮 Welcome to the Tip Calculator!")
print("=" * 35)

# Get user input
# TODO: Ask for bill amount
# TODO: Ask for tip percentage

# Calculate tip and total
# TODO: Calculate tip amount
# TODO: Calculate total amount

# Display results
# TODO: Show bill, tip, and total in a nice format`,
    sampleSolution: `# Tip Calculator - Week 2 Project
print("🧮 Welcome to the Tip Calculator!")
print("=" * 35)

# Get user input
bill_amount = float(input("Enter the bill amount: $"))
tip_percentage = float(input("Enter tip percentage (e.g., 15 for 15%): "))

# Calculate tip and total
tip_amount = bill_amount * (tip_percentage / 100)
total_amount = bill_amount + tip_amount

# Display results
print("\\n" + "=" * 35)
print("📊 BILL BREAKDOWN")
print("=" * 35)
print(f"Bill amount:    $\\{bill_amount:.2f}")
print(f"Tip (\\{tip_percentage}%):        $\\{tip_amount:.2f}")
print(f"Total to pay:   $\\{total_amount:.2f}")
print("=" * 35)
print("Thank you! 💰")`,
    challenges: {
      ht: [
        'Ajoute validasyon pou asire ke nonm yo pozitif',
        'Pèmèt itilizatè a chwa tip ki pre-kalkile yo (15%, 18%, 20%)',
        'Kalkile konbyen chak moun dwe peye si yo separe bèl la',
        'Ajoute kapasite pou kalkile taks (tax) tou'
      ],
      fr: [
        'Ajoutez validation pour s\'assurer que les nombres sont positifs',
        'Permettez à l\'utilisateur de choisir des tips pré-calculés (15%, 18%, 20%)',
        'Calculez combien chaque personne doit payer s\'ils partagent l\'addition',
        'Ajoutez la capacité de calculer les taxes aussi'
      ],
      en: [
        'Add validation to ensure numbers are positive',
        'Allow user to choose from pre-calculated tips (15%, 18%, 20%)',
        'Calculate how much each person pays if splitting the bill',
        'Add ability to calculate tax as well'
      ]
    }
  }
};