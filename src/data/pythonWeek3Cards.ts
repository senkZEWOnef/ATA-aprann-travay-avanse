// Python Week 3: Strings & String Operations - Ultra-comprehensive Card-Based Lesson
// Deep dive into text manipulation, formatting, and string processing

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

export const pythonWeek3Lesson = {
  weekNumber: 3,
  title: {
    ht: 'Strings ak Operasyon yo - Manipile Tèks ak Abilite',
    fr: 'Strings et Opérations - Manipuler le Texte avec Habileté',
    en: 'Strings & String Operations - Manipulating Text with Skill'
  },
  description: {
    ht: 'Aprann kijan pou travay ak tèks nan Python: kijan pou kreye, chanje, ak manipile strings yo ak metòd ak teknik ki pwisan yo.',
    fr: 'Apprenez comment travailler avec le texte en Python: comment créer, modifier, et manipuler les strings avec des méthodes et techniques puissantes.',
    en: 'Learn how to work with text in Python: how to create, modify, and manipulate strings with powerful methods and techniques.'
  },
  totalCards: 16,
  cards: [
    // Card 1: Welcome & Introduction
    {
      id: 'week3-intro-1',
      type: 'intro' as const,
      title: {
        ht: '🎉 Byenveni nan Semèn 3: Strings ak Operasyon yo!',
        fr: '🎉 Bienvenue à la Semaine 3: Strings et Opérations!',
        en: '🎉 Welcome to Week 3: Strings & String Operations!'
      },
      content: {
        ht: 'Kounye a ou gen kapasite ak variables ak data types yo! Semèn sa a, nou ap fè yon diving pwofon nan mond tèks yo. Strings yo se youn nan bagay ki pi enpòtan nan pwogramasyon - yo toupatou, soti nan non itilizatè yo rive nan mesaj ak done yo.',
        fr: 'Maintenant que vous maîtrisez les variables et types de données! Cette semaine, nous plongeons profondément dans le monde du texte. Les strings sont l\'un des éléments les plus importants en programmation - elles sont partout, des noms d\'utilisateurs aux messages et données.',
        en: 'Now that you\'ve mastered variables and data types! This week, we\'re diving deep into the world of text. Strings are one of the most important elements in programming - they\'re everywhere, from usernames to messages and data.'
      },
      keyPoints: {
        ht: [
          'Strings yo se sekans karakterè yo',
          'Nou ka manipile ak chanje yo ak metòd yo',
          'String formatting ede nou kreye mesaj dinamik yo',
          'Slicing pèmèt nou jwenn pati nan tèks yo'
        ],
        fr: [
          'Les strings sont des séquences de caractères',
          'Nous pouvons les manipuler et modifier avec des méthodes',
          'Le formatage de string nous aide à créer des messages dynamiques',
          'Le slicing nous permet d\'obtenir des parties de texte'
        ],
        en: [
          'Strings are sequences of characters',
          'We can manipulate and modify them with methods',
          'String formatting helps us create dynamic messages',
          'Slicing allows us to get parts of text'
        ]
      }
    },

    // Card 2: What is a String?
    {
      id: 'week3-concept-1',
      type: 'concept' as const,
      title: {
        ht: '📝 Kisa yon String ye?',
        fr: '📝 Qu\'est-ce qu\'un String?',
        en: '📝 What is a String?'
      },
      content: {
        ht: 'Yon string se yon sekans karakterè yo ki nan quote marks. Li ka gen lèt, nonm, espas, ak karakterè espesyal yo. Panse sou li kòm yon kolye pèl yo - chak pèl se yon karakterè.',
        fr: 'Un string est une séquence de caractères dans des guillemets. Il peut contenir des lettres, nombres, espaces, et caractères spéciaux. Pensez-y comme un collier de perles - chaque perle est un caractère.',
        en: 'A string is a sequence of characters in quote marks. It can contain letters, numbers, spaces, and special characters. Think of it like a pearl necklace - each pearl is a character.'
      },
      code: `# Different ways to create strings
greeting = "Hello, World!"    # Double quotes
name = 'Ralph'                # Single quotes  
message = """This is a
multi-line string
that spans several lines"""   # Triple quotes

# Strings can contain anything
mixed = "I have 3 cats and 2 dogs!"
symbols = "Special chars: @#$%^&*()"
empty = ""                    # Empty string

print(greeting)
print(f"Name: {name}")
print(f"Message length: {len(message)}")`,
      keyPoints: {
        ht: [
          'Strings yo gen quote marks (simple oswa double)',
          'Yo ka gen nenpòt karakterè: lèt, nonm, espas',
          'Triple quotes pou multi-line strings',
          'String vid yo ("") gen longè zewo'
        ],
        fr: [
          'Les strings ont des guillemets (simples ou doubles)',
          'Ils peuvent contenir n\'importe quels caractères: lettres, nombres, espaces',
          'Triple guillemets pour les strings multi-lignes',
          'Les strings vides ("") ont une longueur zéro'
        ],
        en: [
          'Strings have quote marks (single or double)',
          'They can contain any characters: letters, numbers, spaces',
          'Triple quotes for multi-line strings',
          'Empty strings ("") have zero length'
        ]
      },
      example: {
        code: `# Checking string types and properties
text = "Python Programming"
print(f"Text: '{text}'")
print(f"Type: {type(text)}")
print(f"Length: {len(text)}")
print(f"Is it a string? {isinstance(text, str)}")`,
        output: `Text: 'Python Programming'
Type: <class 'str'>
Length: 18
Is it a string? True`,
        explanation: {
          ht: 'Python otomatikman rekonèt tèks nan quote marks kòm strings ak gen metòd yo pou kontwole yo.',
          fr: 'Python reconnaît automatiquement le texte dans les guillemets comme des strings et a des méthodes pour les vérifier.',
          en: 'Python automatically recognizes text in quote marks as strings and has methods to verify them.'
        }
      }
    },

    // Card 3: String Indexing
    {
      id: 'week3-concept-2',
      type: 'concept' as const,
      title: {
        ht: '🔢 Indexing - Jwenn Karakterè Endividyèl yo',
        fr: '🔢 Indexing - Obtenir des Caractères Individuels',
        en: '🔢 Indexing - Getting Individual Characters'
      },
      content: {
        ht: 'Chak karakterè nan yon string gen yon pozisyon (index). Nou ka jwenn nenpòt karakterè pa pozisyon li a. Python kòmanse konte nan 0!',
        fr: 'Chaque caractère dans un string a une position (index). Nous pouvons obtenir n\'importe quel caractère par sa position. Python commence à compter à 0!',
        en: 'Each character in a string has a position (index). We can get any character by its position. Python starts counting at 0!'
      },
      code: `# String indexing examples
word = "Python"

# Positive indexing (left to right)
print(f"First character: {word[0]}")    # P
print(f"Second character: {word[1]}")   # y  
print(f"Last character: {word[5]}")     # n

# Negative indexing (right to left)
print(f"Last character: {word[-1]}")    # n
print(f"Second to last: {word[-2]}")    # o
print(f"First character: {word[-6]}")   # P

# Getting length to avoid errors
length = len(word)
print(f"String length: {length}")
print(f"Last index: {length - 1}")`,
      keyPoints: {
        ht: [
          'Index pozitif kòmanse nan 0 ak ale dwat',
          'Index negatif kòmanse nan -1 ak ale gòch',
          'Index ki pi gwo se len(string) - 1',
          'Index ki paspropout gro ap bay yon IndexError'
        ],
        fr: [
          'Index positif commence à 0 et va à droite',
          'Index négatif commence à -1 et va à gauche',
          'L\'index le plus grand est len(string) - 1',
          'Un index hors limites donne une IndexError'
        ],
        en: [
          'Positive index starts at 0 and goes right',
          'Negative index starts at -1 and goes left',
          'Highest index is len(string) - 1',
          'Out of bounds index gives IndexError'
        ]
      },
      example: {
        code: `# Practical indexing example
email = "user@example.com"
print(f"Email: {email}")
print(f"First character: {email[0]}")
print(f"@ symbol at: {email.find('@')}")
print(f"Last character: {email[-1]}")
print(f"Domain starts at: {email[email.find('@')+1:]}")`,
        output: `Email: user@example.com
First character: u
@ symbol at: 4
Last character: m
Domain starts at: example.com`,
        explanation: {
          ht: 'Indexing ede nou jwenn pati espesifik nan strings yo, tankou jwenn kote @ la ye nan yon email.',
          fr: 'L\'indexing nous aide à trouver des parties spécifiques des strings, comme trouver où est le @ dans un email.',
          en: 'Indexing helps us find specific parts of strings, like finding where the @ is in an email.'
        }
      }
    },

    // Card 4: String Slicing
    {
      id: 'week3-concept-3',
      type: 'concept' as const,
      title: {
        ht: '✂️ Slicing - Koupe Pòsyon nan Strings yo',
        fr: '✂️ Slicing - Couper des Portions de Strings',
        en: '✂️ Slicing - Cutting Portions of Strings'
      },
      content: {
        ht: 'Slicing pèmèt nou jwenn yon pòsyon nan string la olye karakterè endividyèl yo. Li tankou koupe yon moso nan yon fisèl.',
        fr: 'Le slicing nous permet d\'obtenir une portion du string plutôt que des caractères individuels. C\'est comme couper un morceau d\'une ficelle.',
        en: 'Slicing lets us get a portion of the string rather than individual characters. It\'s like cutting a piece from a string.'
      },
      code: `# String slicing syntax: string[start:end:step]
text = "Programming"

# Basic slicing
print(f"First 4 chars: {text[0:4]}")      # Prog
print(f"From index 3: {text[3:]}")        # gramming
print(f"Up to index 7: {text[:7]}")       # Program
print(f"Middle section: {text[2:8]}")     # ogram

# Advanced slicing
print(f"Every 2nd char: {text[::2]}")     # Pormig
print(f"Reversed: {text[::-1]}")          # gnimmargorP
print(f"Last 3 chars: {text[-3:]}")       # ing

# Slicing with variables
start = 2
end = 6
print(f"Custom slice: {text[start:end]}")  # ogra`,
      keyPoints: {
        ht: [
          'Syntax: string[start:end:step]',
          'start: kote pou kòmanse (inklizyon)',
          'end: kote pou fini (eksklizyon)',
          'step: konbyen pou saute (default: 1)'
        ],
        fr: [
          'Syntax: string[start:end:step]',
          'start: où commencer (inclus)',
          'end: où finir (exclu)',
          'step: combien sauter (défaut: 1)'
        ],
        en: [
          'Syntax: string[start:end:step]',
          'start: where to begin (inclusive)',
          'end: where to stop (exclusive)',
          'step: how many to skip (default: 1)'
        ]
      },
      tips: {
        ht: [
          'Slicing pa janm bay erè - li jis retounen ki sa ki disponib',
          'Itilize [::-1] pou reverse yon string rapidman',
          'Omèt start oswa end yo pou default nan kòmansman/fen',
          'Step negatif pou ale nan direksyon opoze a'
        ],
        fr: [
          'Le slicing ne donne jamais d\'erreur - il retourne juste ce qui est disponible',
          'Utilisez [::-1] pour inverser un string rapidement',
          'Omettez start ou end pour défaut au début/fin',
          'Step négatif pour aller dans la direction opposée'
        ],
        en: [
          'Slicing never gives errors - just returns what\'s available',
          'Use [::-1] to reverse a string quickly',
          'Omit start or end to default to beginning/end',
          'Negative step to go in opposite direction'
        ]
      }
    },

    // Card 5: String Concatenation & Repetition
    {
      id: 'week3-concept-4',
      type: 'concept' as const,
      title: {
        ht: '🔗 Konekte ak Repete Strings yo',
        fr: '🔗 Concaténer et Répéter les Strings',
        en: '🔗 Concatenating & Repeating Strings'
      },
      content: {
        ht: 'Nou ka konbine plizyè strings yo ansanm (concatenation) ak repete yo plizyè fwa. Sa yo se operasyon debaz yo nou itilize souvan.',
        fr: 'Nous pouvons combiner plusieurs strings ensemble (concaténation) et les répéter plusieurs fois. Ce sont des opérations de base que nous utilisons souvent.',
        en: 'We can combine multiple strings together (concatenation) and repeat them multiple times. These are basic operations we use frequently.'
      },
      code: `# String concatenation with +
first_name = "Marie"
last_name = "Joseph"
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# String repetition with *
laugh = "Ha" * 5
separator = "-" * 20
exclamation = "Wow! " * 3
print(f"Laugh: {laugh}")
print(f"Separator: {separator}")
print(f"Excitement: {exclamation}")

# Combining concatenation and repetition
border = "=" * 30
title = "PYTHON STRINGS"
header = border + "\\n" + title + "\\n" + border
print(header)

# Building complex strings
greeting = "Hello " + "there! " * 2 + "Welcome!"
print(greeting)`,
      keyPoints: {
        ht: [
          'Itilize + pou konekte strings yo',
          'Itilize * ak yon nonm pou repete',
          'Nou ka konbine + ak * nan menm ekspresyon an',
          'Sonje mete espas yo lè nou bezwen yo'
        ],
        fr: [
          'Utilisez + pour connecter les strings',
          'Utilisez * avec un nombre pour répéter',
          'Nous pouvons combiner + et * dans la même expression',
          'N\'oubliez pas d\'ajouter les espaces quand nécessaire'
        ],
        en: [
          'Use + to connect strings',
          'Use * with a number to repeat',
          'We can combine + and * in the same expression',
          'Remember to add spaces when needed'
        ]
      },
      example: {
        code: `# Practical example: Creating a receipt
item = "Coffee"
price = 4.50
quantity = 2

line = "=" * 25
receipt = line + "\\n"
receipt += "COFFEE SHOP RECEIPT\\n"
receipt += line + "\\n"
receipt += f"\\{quantity}x \\{item}: $\\{price * quantity:.2f}\\n"
receipt += line
print(receipt)`,
        output: `=========================
COFFEE SHOP RECEIPT
=========================
2x Coffee: $9.00
=========================`,
        explanation: {
          ht: 'Nou ka bati dokiman ak rapò yo pa konekte ak repete strings yo ak done dinamik yo.',
          fr: 'Nous pouvons construire des documents et rapports en concaténant et répétant des strings avec des données dynamiques.',
          en: 'We can build documents and reports by concatenating and repeating strings with dynamic data.'
        }
      }
    },

    // Card 6: String Length & Checking
    {
      id: 'week3-concept-5',
      type: 'concept' as const,
      title: {
        ht: '📏 Longè String ak Verificasyon yo',
        fr: '📏 Longueur de String et Vérifications',
        en: '📏 String Length & Checking'
      },
      content: {
        ht: 'Python gen anpil fason pou mezire ak kontwole strings yo. Nou ka jwenn longè yo, gade si yo gen karakterè yo, ak anpil lòt bagay.',
        fr: 'Python a de nombreuses façons de mesurer et vérifier les strings. Nous pouvons obtenir leur longueur, voir s\'ils contiennent des caractères, et bien plus.',
        en: 'Python has many ways to measure and check strings. We can get their length, see if they contain characters, and much more.'
      },
      code: `# String length
password = "MySecurePass123"
print(f"Password length: {len(password)}")

# Checking string content
text = "Hello Python World"

# Check if string contains something
print(f"Contains 'Python': {'Python' in text}")
print(f"Contains 'Java': {'Java' in text}")

# Check string properties
print(f"Is all letters: {text.isalpha()}")
print(f"Is all digits: {text.isdigit()}")
print(f"Is alphanumeric: {text.isalnum()}")
print(f"Is all lowercase: {text.islower()}")
print(f"Is all uppercase: {text.isupper()}")

# Practical validation
username = "user123"
if len(username) >= 5 and username.isalnum():
    print("Valid username!")
else:
    print("Invalid username!")`,
      keyPoints: {
        ht: [
          'len() bay longè string lan',
          'Itilize "in" pou gade si yon bagay nan string lan',
          'String methods pou kontwole karakterè yo',
          'Kouple kondisyon yo pou validation'
        ],
        fr: [
          'len() donne la longueur du string',
          'Utilisez "in" pour voir si quelque chose est dans le string',
          'Méthodes de string pour vérifier les caractères',
          'Combinez les conditions pour la validation'
        ],
        en: [
          'len() gives the string length',
          'Use "in" to see if something is in the string',
          'String methods to check character types',
          'Combine conditions for validation'
        ]
      },
      tips: {
        ht: [
          'Toujou valide longè anvan aksede index yo',
          'Itilize is methods yo pou validation rapid',
          'Konbine plizyè kondisyon ak "and" ak "or"',
          'Sonje espas yo konte nan longè a'
        ],
        fr: [
          'Validez toujours la longueur avant d\'accéder aux index',
          'Utilisez les méthodes is pour validation rapide',
          'Combinez plusieurs conditions avec "and" et "or"',
          'Rappelez-vous que les espaces comptent dans la longueur'
        ],
        en: [
          'Always validate length before accessing indexes',
          'Use is methods for quick validation',
          'Combine multiple conditions with "and" and "or"',
          'Remember spaces count in the length'
        ]
      }
    },

    // Card 7: Essential String Methods - Case
    {
      id: 'week3-concept-6',
      type: 'concept' as const,
      title: {
        ht: '🔄 Metòd Case yo - Chanje Lèt Majiskil ak Miniskil',
        fr: '🔄 Méthodes de Casse - Changer Majuscules et Minuscules',
        en: '🔄 Case Methods - Changing Upper & Lower Case'
      },
      content: {
        ht: 'Nou souvan bezwen chanje kijan lèt yo parèt - yo majiskil, miniskil, oswa title case. Python gen metòd ki fè sa yo fasil.',
        fr: 'Nous devons souvent changer comment les lettres apparaissent - en majuscules, minuscules, ou title case. Python a des méthodes qui rendent cela facile.',
        en: 'We often need to change how letters appear - uppercase, lowercase, or title case. Python has methods that make this easy.'
      },
      code: `# Case conversion methods
text = "hello PYTHON world"

# Basic case methods
print(f"Original: {text}")
print(f"Upper: {text.upper()}")
print(f"Lower: {text.lower()}")
print(f"Title: {text.title()}")
print(f"Capitalize: {text.capitalize()}")
print(f"Swapcase: {text.swapcase()}")

# Practical examples
name = "marie joseph"
print(f"Proper name: {name.title()}")

email = "USER@EXAMPLE.COM"
print(f"Clean email: {email.lower()}")

# Case checking
word = "Python"
print(f"Is uppercase: {word.isupper()}")
print(f"Is lowercase: {word.islower()}")
print(f"Is title case: {word.istitle()}")

# User input normalization
user_input = "YES"
if user_input.lower() == "yes":
    print("User said yes!")`,
      keyPoints: {
        ht: [
          'upper() - tout bagay vin majiskil',
          'lower() - tout bagay vin miniskil',
          'title() - premye lèt chak mo vin majiskil',
          'capitalize() - sèlman premye lèt yo vin majiskil'
        ],
        fr: [
          'upper() - tout devient majuscule',
          'lower() - tout devient minuscule',
          'title() - première lettre de chaque mot devient majuscule',
          'capitalize() - seulement la première lettre devient majuscule'
        ],
        en: [
          'upper() - everything becomes uppercase',
          'lower() - everything becomes lowercase',
          'title() - first letter of each word becomes uppercase',
          'capitalize() - only the first letter becomes uppercase'
        ]
      },
      example: {
        code: `# Real-world case handling
def format_name(first, last):
    return f"{first.title()} {last.title()}"

def check_password_strength(password):
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    
    return has_upper and has_lower and has_digit

print(format_name("marie", "JOSEPH"))
print(f"Password strong: {check_password_strength('MyPass123')}")`,
        output: `Marie Joseph
Password strong: True`,
        explanation: {
          ht: 'Case methods yo ede nou trete done nan moun ak valide yo kòrèkteman.',
          fr: 'Les méthodes de casse nous aident à traiter les données utilisateur et les valider correctement.',
          en: 'Case methods help us process user data and validate it correctly.'
        }
      }
    },

    // Card 8: Essential String Methods - Cleaning
    {
      id: 'week3-concept-7',
      type: 'concept' as const,
      title: {
        ht: '🧽 Metòd Netwayaj yo - Retire Espas ak Bagay Yo',
        fr: '🧽 Méthodes de Nettoyage - Retirer Espaces et Éléments',
        en: '🧽 Cleaning Methods - Removing Spaces & Elements'
      },
      content: {
        ht: 'Done nan moun yo souvan gen espas ki pa nesesè yo ak karakterè nou pa vle yo. Python gen metòd ki ka netwaye yo otomatikman.',
        fr: 'Les données utilisateur ont souvent des espaces inutiles et des caractères indésirables. Python a des méthodes qui peuvent les nettoyer automatiquement.',
        en: 'User data often has unnecessary spaces and unwanted characters. Python has methods that can clean them automatically.'
      },
      code: `# String cleaning methods
messy_text = "   Hello Python World!!!   "

# Removing whitespace
print(f"Original: '{messy_text}'")
print(f"Strip both: '{messy_text.strip()}'")
print(f"Strip left: '{messy_text.lstrip()}'")
print(f"Strip right: '{messy_text.rstrip()}'")

# Removing specific characters
text_with_punctuation = "!!!Hello Python!!!"
print(f"Strip !: '{text_with_punctuation.strip('!')}'")

# Replace method for cleaning
dirty_data = "Hello...World...Python"
clean_data = dirty_data.replace("...", " ")
print(f"Cleaned: {clean_data}")

# Multiple replacements
user_input = "My phone is: (123) 456-7890"
clean_phone = user_input.replace("My phone is: ", "").replace("(", "").replace(")", "").replace("-", "").replace(" ", "")
print(f"Clean phone: {clean_phone}")

# Practical user input cleaning
def clean_username(username):
    return username.strip().lower().replace(" ", "_")

print(clean_username("  Marie Joseph  "))  # marie_joseph`,
      keyPoints: {
        ht: [
          'strip() retire espas yo nan kòmansman ak fen',
          'lstrip() retire sèlman nan gòch',
          'rstrip() retire sèlman nan dwat',
          'replace() chanje bagay yo ak lòt bagay yo'
        ],
        fr: [
          'strip() enlève les espaces au début et à la fin',
          'lstrip() enlève seulement à gauche',
          'rstrip() enlève seulement à droite',
          'replace() change des éléments par d\'autres'
        ],
        en: [
          'strip() removes spaces from start and end',
          'lstrip() removes only from left',
          'rstrip() removes only from right',
          'replace() changes things with other things'
        ]
      },
      tips: {
        ht: [
          'Toujou netwaye input nan itilizatè yo anvan ou trete yo',
          'Chain plizyè metòd yo ansanm pou netwayaj konplè',
          'Itilize replace() ak string vid ("") pou eliminate bagay yo',
          'Konbine ak case methods yo pou normalization konplè'
        ],
        fr: [
          'Nettoyez toujours les inputs utilisateur avant de les traiter',
          'Chaînez plusieurs méthodes ensemble pour un nettoyage complet',
          'Utilisez replace() avec string vide ("") pour éliminer des éléments',
          'Combinez avec les méthodes de casse pour normalisation complète'
        ],
        en: [
          'Always clean user inputs before processing them',
          'Chain multiple methods together for complete cleaning',
          'Use replace() with empty string ("") to eliminate things',
          'Combine with case methods for complete normalization'
        ]
      }
    },

    // Card 9: String Searching & Finding
    {
      id: 'week3-concept-8',
      type: 'concept' as const,
      title: {
        ht: '🔍 Chèche ak Jwenn nan Strings yo',
        fr: '🔍 Rechercher et Trouver dans les Strings',
        en: '🔍 Searching & Finding in Strings'
      },
      content: {
        ht: 'Nou souvan bezwen chèche bagay espesifik nan strings yo - mo, fraz, oswa pattern yo. Python gen anpil metòd ki pwisan pou sa.',
        fr: 'Nous devons souvent chercher des éléments spécifiques dans les strings - mots, phrases, ou patterns. Python a plusieurs méthodes puissantes pour cela.',
        en: 'We often need to search for specific things in strings - words, phrases, or patterns. Python has several powerful methods for this.'
      },
      code: `# String searching methods
text = "Python is awesome for programming"

# Basic searching
print(f"Contains 'Python': {'Python' in text}")
print(f"Contains 'Java': {'Java' in text}")

# Find methods
print(f"Find 'is': {text.find('is')}")           # Returns index
print(f"Find 'Java': {text.find('Java')}")       # Returns -1 if not found
print(f"Index 'Python': {text.index('Python')}")  # Like find but raises error

# Count occurrences
banana = "banana"
print(f"Count 'a' in banana: {banana.count('a')}")
print(f"Count 'an' in banana: {banana.count('an')}")

# Check start and end
email = "user@python.org"
print(f"Starts with 'user': {email.startswith('user')}")
print(f"Ends with '.org': {email.endswith('.org')}")
print(f"Ends with '.com': {email.endswith('.com')}")

# Case-insensitive searching
def contains_ignore_case(text, search):
    return search.lower() in text.lower()

print(contains_ignore_case("HELLO WORLD", "hello"))  # True`,
      keyPoints: {
        ht: [
          'find() retounen index yo, -1 si pa jwenn',
          'index() tankou find() men li bay erè',
          'count() konte konbyen fwa yon bagay parèt',
          'startswith() ak endswith() kontwole kòmansman ak fen'
        ],
        fr: [
          'find() retourne l\'index, -1 si pas trouvé',
          'index() comme find() mais donne erreur',
          'count() compte combien de fois quelque chose apparaît',
          'startswith() et endswith() vérifient début et fin'
        ],
        en: [
          'find() returns index, -1 if not found',
          'index() like find() but gives error',
          'count() counts how many times something appears',
          'startswith() and endswith() check beginning and end'
        ]
      },
      example: {
        code: `# Practical searching example
def analyze_email(email):
    if '@' not in email:
        return "Invalid email: no @ symbol"
    
    parts = email.split('@')
    if len(parts) != 2:
        return "Invalid email: multiple @ symbols"
    
    username, domain = parts
    
    return {
        'valid': True,
        'username': username,
        'domain': domain,
        'is_gmail': domain.endswith('gmail.com'),
        'username_length': len(username)
    }

result = analyze_email("marie@gmail.com")
print(result)`,
        output: `{'valid': True, 'username': 'marie', 'domain': 'gmail.com', 'is_gmail': True, 'username_length': 5}`,
        explanation: {
          ht: 'Nou ka konbine metòd chèche yo pou analize ak valide done konplèks yo.',
          fr: 'Nous pouvons combiner les méthodes de recherche pour analyser et valider des données complexes.',
          en: 'We can combine searching methods to analyze and validate complex data.'
        }
      }
    },

    // Card 10: String Formatting - f-strings
    {
      id: 'week3-concept-9',
      type: 'concept' as const,
      title: {
        ht: '✨ F-strings - Formatting ki pi Modern',
        fr: '✨ F-strings - Formatage le plus Moderne',
        en: '✨ F-strings - The Most Modern Formatting'
      },
      content: {
        ht: 'F-strings se metòd ki pi bon ak ki pi senp pou kreye strings ak valè dinamik yo. Yo rapid, klè, ak fasil pou li.',
        fr: 'Les F-strings sont la meilleure et plus simple méthode pour créer des strings avec des valeurs dynamiques. Elles sont rapides, claires, et faciles à lire.',
        en: 'F-strings are the best and simplest method to create strings with dynamic values. They\'re fast, clear, and easy to read.'
      },
      code: `# Basic f-string usage
name = "Marie"
age = 25
height = 1.65

# Simple variable insertion
greeting = f"Hello, my name is {name}"
print(greeting)

# Multiple variables
info = f"I'm {name}, {age} years old, and {height}m tall"
print(info)

# Expressions inside f-strings
next_year = f"Next year I'll be {age + 1} years old"
print(next_year)

# Formatting numbers
price = 19.99
print(f"Price: $\\{price:.2f}")           # 2 decimal places
print(f"Price (rounded): $\\{price:.0f}") # No decimals

percentage = 0.847
print(f"Success rate: {percentage:.1%}")  # As percentage

# Multi-line f-strings
report = f"""
Name: {name}
Age: {age}
Status: {'Adult' if age >= 18 else 'Minor'}
BMI: {70 / (height ** 2):.1f}
"""
print(report)`,
      keyPoints: {
        ht: [
          'Kòmanse ak f ak mete expression yo nan {}',
          'Ou ka mete nenpòt expression Python yo',
          'Itilize :.2f pou decimal places',
          'Itilize :% pou percentages'
        ],
        fr: [
          'Commencez par f et mettez les expressions dans {}',
          'Vous pouvez mettre n\'importe quelle expression Python',
          'Utilisez :.2f pour les décimales',
          'Utilisez :% pour les pourcentages'
        ],
        en: [
          'Start with f and put expressions in {}',
          'You can put any Python expressions',
          'Use :.2f for decimal places',
          'Use :% for percentages'
        ]
      },
      tips: {
        ht: [
          'F-strings pi rapid pase lòt metòd yo',
          'Ou ka mete function calls ak calculations',
          'Itilize {} ak : pou formatting options',
          'Evite logic konplèks nan f-strings yo'
        ],
        fr: [
          'Les F-strings sont plus rapides que les autres méthodes',
          'Vous pouvez mettre des appels de fonction et calculs',
          'Utilisez {} avec : pour les options de formatage',
          'Évitez la logique complexe dans les f-strings'
        ],
        en: [
          'F-strings are faster than other methods',
          'You can put function calls and calculations',
          'Use {} with : for formatting options',
          'Avoid complex logic in f-strings'
        ]
      }
    },

    // Card 11: Splitting & Joining Strings
    {
      id: 'week3-concept-10',
      type: 'concept' as const,
      title: {
        ht: '✂️➕ Separe ak Konekte Strings yo',
        fr: '✂️➕ Séparer et Joindre les Strings',
        en: '✂️➕ Splitting & Joining Strings'
      },
      content: {
        ht: 'Nou souvan bezwen separe yon gwo string nan moso yo oswa konekte plizyè moso yo nan yon sèl string. Sa yo se operasyon ki enpòtan anpil.',
        fr: 'Nous devons souvent séparer un grand string en morceaux ou joindre plusieurs morceaux en un seul string. Ce sont des opérations très importantes.',
        en: 'We often need to split a large string into pieces or join multiple pieces into one string. These are very important operations.'
      },
      code: `# String splitting
sentence = "Python is awesome for programming"
words = sentence.split()  # Split by whitespace (default)
print(f"Words: {words}")

# Split by specific delimiter
csv_data = "apple,banana,orange,grape"
fruits = csv_data.split(',')
print(f"Fruits: {fruits}")

# Split with limit
text = "one-two-three-four-five"
limited = text.split('-', 2)  # Only split first 2
print(f"Limited split: {limited}")

# Splitting lines
multiline = """Line 1
Line 2
Line 3"""
lines = multiline.split('\\n')
print(f"Lines: {lines}")

# Joining strings
words_list = ['Python', 'is', 'amazing']
joined = ' '.join(words_list)
print(f"Joined: {joined}")

# Join with different separators
numbers = ['1', '2', '3', '4', '5']
print(f"Comma separated: {', '.join(numbers)}")
print(f"Dash separated: {'-'.join(numbers)}")
print(f"No separator: {''.join(numbers)}")`,
      keyPoints: {
        ht: [
          'split() separe strings yo nan list yo',
          'Default split se pa espas yo',
          'Ou ka spesifye delimiter ak limit',
          'join() konekte list yo nan yon string'
        ],
        fr: [
          'split() sépare les strings en listes',
          'Split par défaut est par espaces',
          'Vous pouvez spécifier délimiteur et limite',
          'join() joint les listes en un string'
        ],
        en: [
          'split() separates strings into lists',
          'Default split is by spaces',
          'You can specify delimiter and limit',
          'join() joins lists into one string'
        ]
      },
      example: {
        code: `# Processing CSV data
def process_student_data(csv_line):
    # Input: "Marie,23,Computer Science,3.8"
    parts = csv_line.split(',')
    
    if len(parts) != 4:
        return "Invalid data format"
    
    name, age, major, gpa = parts
    
    # Clean and format
    name = name.strip().title()
    age = int(age.strip())
    major = major.strip().title()
    gpa = float(gpa.strip())
    
    return f"\\{name} (\\{age}) studies \\{major} with GPA \\{gpa:.2f}"

result = process_student_data("marie,23,computer science,3.8")
print(result)`,
        output: `Marie (23) studies Computer Science with GPA 3.80`,
        explanation: {
          ht: 'Split ak join yo ede nou trete done ki structured tankou CSV ak tèks ki separe.',
          fr: 'Split et join nous aident à traiter des données structurées comme CSV et texte séparé.',
          en: 'Split and join help us process structured data like CSV and separated text.'
        }
      }
    },

    // Card 12: Advanced String Techniques
    {
      id: 'week3-practice-1',
      type: 'practice' as const,
      title: {
        ht: '🎯 Teknik Avanse yo pou Strings',
        fr: '🎯 Techniques Avancées pour Strings',
        en: '🎯 Advanced String Techniques'
      },
      content: {
        ht: 'Kounye a nou gen konnen debaz yo, ann aprann kèk teknik avanse ki ka fè travay nou an pi efikas ak elegan.',
        fr: 'Maintenant que nous connaissons les bases, apprenons quelques techniques avancées qui peuvent rendre notre travail plus efficace et élégant.',
        en: 'Now that we know the basics, let\'s learn some advanced techniques that can make our work more efficient and elegant.'
      },
      code: `# String comprehensions and advanced techniques
text = "Hello Python World"

# Remove vowels using comprehension
consonants = ''.join([char for char in text if char.lower() not in 'aeiou'])
print(f"Without vowels: {consonants}")

# Create acronyms
phrase = "Python Programming Language"
acronym = ''.join([word[0].upper() for word in phrase.split()])
print(f"Acronym: {acronym}")

# Reversing words in a sentence
sentence = "Hello Python World"
reversed_words = ' '.join(word[::-1] for word in sentence.split())
print(f"Reversed words: {reversed_words}")

# Count characters (excluding spaces)
def char_frequency(text):
    text = text.lower().replace(' ', '')
    freq = {}
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    return freq

frequencies = char_frequency("hello world")
print(f"Character frequencies: {frequencies}")

# Password generator pattern
import random
def generate_pattern(length=8):
    chars = "abcdefghijklmnopqrstuvwxyz"
    return ''.join(random.choice(chars) for _ in range(length))

print(f"Random pattern: {generate_pattern()}")`,
      tips: {
        ht: [
          'Itilize list comprehensions pou string processing rapid',
          'Konbine plizyè metòd nan yon sèl liy pou efikasite',
          'Kreye fonksyon ki reutilizable pou operasyon repete yo',
          'Sonje performance lè w ap trete gwo strings yo'
        ],
        fr: [
          'Utilisez les list comprehensions pour traitement rapide de strings',
          'Combinez plusieurs méthodes en une ligne pour efficacité',
          'Créez des fonctions réutilisables pour opérations répétées',
          'Pensez performance quand vous traitez de gros strings'
        ],
        en: [
          'Use list comprehensions for fast string processing',
          'Combine multiple methods in one line for efficiency',
          'Create reusable functions for repeated operations',
          'Think about performance when processing large strings'
        ]
      }
    },

    // Card 13: Input Validation & Sanitization
    {
      id: 'week3-practice-2',
      type: 'practice' as const,
      title: {
        ht: '🛡️ Validation ak Sanitization Input yo',
        fr: '🛡️ Validation et Sanitisation des Inputs',
        en: '🛡️ Input Validation & Sanitization'
      },
      content: {
        ht: 'Nan aplikasyon reyèl yo, nou toujou dwe valide ak netwaye input nan itilizatè yo. Sa pwoteje pwogram nou an ak ba nou done ki relyab.',
        fr: 'Dans les applications réelles, nous devons toujours valider et nettoyer les inputs utilisateur. Cela protège notre programme et nous donne des données fiables.',
        en: 'In real applications, we must always validate and clean user inputs. This protects our program and gives us reliable data.'
      },
      code: `# Input validation and sanitization functions

def validate_email(email):
    """Validate email format"""
    email = email.strip().lower()
    
    if '@' not in email:
        return False, "Email must contain @ symbol"
    
    if email.count('@') != 1:
        return False, "Email must contain exactly one @ symbol"
    
    username, domain = email.split('@')
    
    if not username or not domain:
        return False, "Email must have username and domain"
    
    if '.' not in domain:
        return False, "Domain must contain at least one dot"
    
    return True, "Valid email"

def sanitize_username(username):
    """Clean and validate username"""
    # Remove spaces and convert to lowercase
    clean = username.strip().lower()
    
    # Remove special characters except underscore and hyphen
    allowed = "abcdefghijklmnopqrstuvwxyz0123456789_-"
    clean = ''.join(char for char in clean if char in allowed)
    
    # Check length
    if len(clean) < 3:
        return None, "Username too short (minimum 3 characters)"
    
    if len(clean) > 20:
        return None, "Username too long (maximum 20 characters)"
    
    return clean, "Valid username"

def validate_phone(phone):
    """Validate and format phone number"""
    # Remove all non-digit characters
    digits = ''.join(char for char in phone if char.isdigit())
    
    if len(digits) == 10:
        # Format as (xxx) xxx-xxxx
        formatted = f"(\\{digits[:3]}) \\{digits[3:6]}-\\{digits[6:]}"
        return True, formatted
    
    return False, "Phone must be 10 digits"

# Test the functions
print(validate_email("  Marie@Gmail.COM  "))
print(sanitize_username("  Marie Joseph!@#  "))
print(validate_phone("(123) 456-7890"))`,
      example: {
        code: `# Complete user registration validator
def register_user():
    print("User Registration")
    print("-" * 20)
    
    # Get and validate email
    email = input("Email: ")
    is_valid, message = validate_email(email)
    if not is_valid:
        return f"Registration failed: {message}"
    clean_email = email.strip().lower()
    
    # Get and validate username  
    username = input("Username: ")
    clean_username, message = sanitize_username(username)
    if clean_username is None:
        return f"Registration failed: {message}"
    
    return f"Success! Registered {clean_username} with {clean_email}"

# Simulated test
print("Example registration result:")
print("Email: marie@gmail.com, Username: marie_j")`,
        output: `Example registration result:
Email: marie@gmail.com, Username: marie_j`,
        explanation: {
          ht: 'Validation ak sanitization pwoteje aplicasyon nou yo ak asire done yo pwòp ak relyab.',
          fr: 'La validation et sanitisation protègent nos applications et assurent que les données sont propres et fiables.',
          en: 'Validation and sanitization protect our applications and ensure data is clean and reliable.'
        }
      }
    },

    // Card 14: Text Processing Patterns
    {
      id: 'week3-practice-3',
      type: 'practice' as const,
      title: {
        ht: '📊 Pattern yo pou Trete Tèks',
        fr: '📊 Patterns pour Traitement de Texte',
        en: '📊 Text Processing Patterns'
      },
      content: {
        ht: 'Ann aprann kèk pattern kominé yo pou trete tèks yo - bagay nou ap itilize souvan nan aplikasyon reyèl yo.',
        fr: 'Apprenons quelques patterns communs pour traiter le texte - des choses que nous utiliserons souvent dans les applications réelles.',
        en: 'Let\'s learn some common patterns for processing text - things we\'ll use often in real applications.'
      },
      code: `# Common text processing patterns

def word_count(text):
    """Count words in text"""
    words = text.strip().split()
    return len(words)

def sentence_count(text):
    """Count sentences (by periods, !, ?)"""
    endings = '.!?'
    count = sum(1 for char in text if char in endings)
    return count

def reading_time(text, wpm=200):
    """Estimate reading time in minutes"""
    words = word_count(text)
    minutes = words / wpm
    return max(1, round(minutes))

def extract_hashtags(text):
    """Extract hashtags from social media text"""
    words = text.split()
    hashtags = [word for word in words if word.startswith('#')]
    return hashtags

def extract_mentions(text):
    """Extract @mentions from social media text"""
    words = text.split()
    mentions = [word for word in words if word.startswith('@')]
    return mentions

def title_case_proper(text):
    """Smart title case that handles articles"""
    small_words = {'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 
                   'if', 'in', 'of', 'on', 'or', 'the', 'to', 'up'}
    
    words = text.lower().split()
    result = []
    
    for i, word in enumerate(words):
        if i == 0 or word not in small_words:
            result.append(word.capitalize())
        else:
            result.append(word)
    
    return ' '.join(result)

# Test the functions
sample_text = "Hello world! This is a great day. How are you?"
print(f"Word count: {word_count(sample_text)}")
print(f"Sentence count: {sentence_count(sample_text)}")
print(f"Reading time: {reading_time(sample_text)} minutes")

social_text = "Learning #Python is fun! Thanks @teacher for the help #coding"
print(f"Hashtags: {extract_hashtags(social_text)}")
print(f"Mentions: {extract_mentions(social_text)}")

title = "the lord of the rings"
print(f"Smart title: {title_case_proper(title)}")`,
      tips: {
        ht: [
          'Kreye fonksyon reutilizable pou operasyon kominé yo',
          'Konsidere edge cases tankou string vid yo',
          'Teste ak done reyèl yo, pa sèlman egzanp yo',
          'Dokimante fonksyon yo ak ekspètasyon yo klè'
        ],
        fr: [
          'Créez des fonctions réutilisables pour opérations communes',
          'Considérez les cas limites comme les strings vides',
          'Testez avec des données réelles, pas seulement des exemples',
          'Documentez les fonctions avec des attentes claires'
        ],
        en: [
          'Create reusable functions for common operations',
          'Consider edge cases like empty strings',
          'Test with real data, not just examples',
          'Document functions with clear expectations'
        ]
      }
    },

    // Card 15: String Performance & Best Practices
    {
      id: 'week3-tip-1',
      type: 'tip' as const,
      title: {
        ht: '⚡ Performance ak Best Practices',
        fr: '⚡ Performance et Bonnes Pratiques',
        en: '⚡ Performance & Best Practices'
      },
      content: {
        ht: 'Aprann kijan pou itilize strings yo efikasman ak evite erè kominé yo. Sa yo se konsèy ki ka fè ou vin yon pwogramè pi bon.',
        fr: 'Apprenez comment utiliser les strings efficacement et éviter les erreurs communes. Ce sont des conseils qui peuvent vous rendre meilleur programmeur.',
        en: 'Learn how to use strings efficiently and avoid common mistakes. These are tips that can make you a better programmer.'
      },
      code: `# String performance and best practices

# ❌ SLOW: String concatenation in loops
def slow_join():
    result = ""
    for i in range(1000):
        result += f"Item {i} "
    return result

# ✅ FAST: Use join for multiple concatenations
def fast_join():
    items = [f"Item {i}" for i in range(1000)]
    return " ".join(items)

# ❌ AVOID: Multiple replace calls
text = "Hello World Python World"
# slow_way = text.replace("World", "Universe").replace("Hello", "Hi")

# ✅ BETTER: Use translate for multiple replacements
translation_table = str.maketrans({
    'H': 'h',
    'W': 'w',
    'P': 'p'
})
better_way = text.translate(translation_table)

# String memory and immutability
original = "Python"
modified = original.upper()  # Creates new string
print(f"Original: {original}")    # Still "Python"
print(f"Modified: {modified}")    # "PYTHON"

# Best practices for string checking
def check_string_safely(text):
    # ✅ Always check if string exists first
    if not text:
        return "Empty or None"
    
    # ✅ Use strip() before checking content
    text = text.strip()
    if not text:
        return "Only whitespace"
    
    # ✅ Use lower() for case-insensitive comparisons
    if text.lower() in ['yes', 'true', '1']:
        return "Positive"
    
    return "Unknown"

# Memory-efficient string operations
def process_large_text(text):
    # ✅ Process line by line for large files
    lines = text.split('\\n')
    processed_lines = []
    
    for line in lines:
        # Process each line individually
        clean_line = line.strip().title()
        if clean_line:  # Only keep non-empty lines
            processed_lines.append(clean_line)
    
    return '\\n'.join(processed_lines)

print("String performance tips demonstrated!")`,
      tips: {
        ht: [
          'Itilize join() olye concatenation nan loops yo',
          'Strings yo immutable - chak modifikasyon kreye nouvo string',
          'Toujou valide string yo anvan ou aksede yo',
          'Itilize lower() pou comparison ki pa case-sensitive'
        ],
        fr: [
          'Utilisez join() plutôt que concaténation dans les boucles',
          'Les strings sont immutables - chaque modification crée un nouveau string',
          'Validez toujours les strings avant de les accéder',
          'Utilisez lower() pour comparaisons insensibles à la casse'
        ],
        en: [
          'Use join() rather than concatenation in loops',
          'Strings are immutable - each modification creates new string',
          'Always validate strings before accessing them',
          'Use lower() for case-insensitive comparisons'
        ]
      }
    }
  ],

  quiz: [
    {
      id: 'week3-quiz-1',
      question: {
        ht: 'Ki sa rezilta nan "Hi" + "There" yo?',
        fr: 'Quel est le résultat de "Hi" + "There"?',
        en: 'What is the result of "Hi" + "There"?'
      },
      options: {
        ht: ['"Hi There"', '"HiThere"', '"Hi"+"There"', 'Yon erè'],
        fr: ['"Hi There"', '"HiThere"', '"Hi"+"There"', 'Une erreur'],
        en: ['"Hi There"', '"HiThere"', '"Hi"+"There"', 'An error']
      },
      correctAnswer: 1,
      explanation: {
        ht: 'String concatenation ak + konekte strings yo dirèkteman san espas. Pou gen espas, ou ta bezwen mete li: "Hi" + " " + "There"',
        fr: 'La concaténation de string avec + joint les strings directement sans espace. Pour avoir un espace, il faut l\'ajouter: "Hi" + " " + "There"',
        en: 'String concatenation with + joins strings directly without space. To have a space, you need to add it: "Hi" + " " + "There"'
      }
    },
    {
      id: 'week3-quiz-2',
      question: {
        ht: 'Ki sa "Python"[2] ap montre?',
        fr: 'Que va afficher "Python"[2]?',
        en: 'What will "Python"[2] print?'
      },
      options: {
        ht: ['"P"', '"y"', '"t"', '"h"'],
        fr: ['"P"', '"y"', '"t"', '"h"'],
        en: ['"P"', '"y"', '"t"', '"h"']
      },
      correctAnswer: 2,
      explanation: {
        ht: 'String indexing kòmanse nan 0. "Python" gen karakterè yo: P(0), y(1), t(2), h(3), o(4), n(5). Donk index 2 se "t".',
        fr: 'L\'indexing de string commence à 0. "Python" a les caractères: P(0), y(1), t(2), h(3), o(4), n(5). Donc index 2 est "t".',
        en: 'String indexing starts at 0. "Python" has characters: P(0), y(1), t(2), h(3), o(4), n(5). So index 2 is "t".'
      },
      code: 'word = "Python"\nprint(word[2])'
    },
    {
      id: 'week3-quiz-3',
      question: {
        ht: 'Ki sa "hello".upper() retounen?',
        fr: 'Que retourne "hello".upper()?',
        en: 'What does "hello".upper() return?'
      },
      options: {
        ht: ['"hello"', '"Hello"', '"HELLO"', '"HeLLo"'],
        fr: ['"hello"', '"Hello"', '"HELLO"', '"HeLLo"'],
        en: ['"hello"', '"Hello"', '"HELLO"', '"HeLLo"']
      },
      correctAnswer: 2,
      explanation: {
        ht: 'Metòd upper() konvèti tout karakterè yo nan majiskil (uppercase). "hello" vin "HELLO".',
        fr: 'La méthode upper() convertit tous les caractères en majuscules. "hello" devient "HELLO".',
        en: 'The upper() method converts all characters to uppercase. "hello" becomes "HELLO".'
      }
    },
    {
      id: 'week3-quiz-4',
      question: {
        ht: 'Ki metòd ki retire espas ekstra yo nan de kote nan string lan?',
        fr: 'Quelle méthode retire les espaces extra des deux côtés du string?',
        en: 'Which method removes extra spaces from both sides of a string?'
      },
      options: {
        ht: ['.clean()', '.strip()', '.remove()', '.trim()'],
        fr: ['.clean()', '.strip()', '.remove()', '.trim()'],
        en: ['.clean()', '.strip()', '.remove()', '.trim()']
      },
      correctAnswer: 1,
      explanation: {
        ht: 'Metòd strip() retire whitespace (espas, tabs, newlines) nan kòmansman ak fen string lan. lstrip() ak rstrip() pou yon sèl kote.',
        fr: 'La méthode strip() enlève les whitespace (espaces, tabs, newlines) du début et fin du string. lstrip() et rstrip() pour un seul côté.',
        en: 'The strip() method removes whitespace (spaces, tabs, newlines) from beginning and end of string. lstrip() and rstrip() for one side.'
      }
    },
    {
      id: 'week3-quiz-5',
      question: {
        ht: 'Ki pwoblèm ki gen nan kòd sa a? word = "Hello"; print(word[5])',
        fr: 'Quel problème y a-t-il dans ce code? word = "Hello"; print(word[5])',
        en: 'What\'s wrong with this code? word = "Hello"; print(word[5])'
      },
      options: {
        ht: ['Pa gen pwoblèm', 'Index out of range', 'Syntax error', 'Type error'],
        fr: ['Pas de problème', 'Index out of range', 'Erreur de syntaxe', 'Erreur de type'],
        en: ['No problem', 'Index out of range', 'Syntax error', 'Type error']
      },
      correctAnswer: 1,
      explanation: {
        ht: '"Hello" gen 5 karakterè ak index yo ale soti nan 0 rive nan 4: H(0), e(1), l(2), l(3), o(4). Index 5 pa egziste, sa bay IndexError.',
        fr: '"Hello" a 5 caractères avec des index allant de 0 à 4: H(0), e(1), l(2), l(3), o(4). L\'index 5 n\'existe pas, donnant IndexError.',
        en: '"Hello" has 5 characters with indexes from 0 to 4: H(0), e(1), l(2), l(3), o(4). Index 5 doesn\'t exist, giving IndexError.'
      },
      code: 'word = "Hello"\nprint(word[5])  # Error!'
    }
  ],

  miniProject: {
    title: {
      ht: '📊 Analizè Tèks (Text Analyzer)',
      fr: '📊 Analyseur de Texte',
      en: '📊 Text Analyzer'
    },
    description: {
      ht: 'Kreye yon pwogram ki analize fraz yo ak bay enfòmasyon detaye yo sou yo. Pwogram nan ap konte karakterè yo, mo yo, ak fè operasyon formatting yo.',
      fr: 'Créez un programme qui analyse les phrases et donne des informations détaillées sur elles. Le programme comptera les caractères, mots, et fera des opérations de formatage.',
      en: 'Create a program that analyzes sentences and gives detailed information about them. The program will count characters, words, and perform formatting operations.'
    },
    requirements: {
      ht: [
        'Mande itilizatè a pou yon fraz',
        'Konte konbyen karakterè ak mo ki gen',
        'Montre fraz la nan title case',
        'Gade si li gen mo "Python" ladan l',
        'Montre fraz la nan uppercase ak lowercase',
        'Konte konbyen fwa lèt "a" ap parèt',
        'Montre premye ak dènye mo yo'
      ],
      fr: [
        'Demander à l\'utilisateur une phrase',
        'Compter combien de caractères et mots il y a',
        'Afficher la phrase en title case',
        'Vérifier si elle contient le mot "Python"',
        'Afficher la phrase en uppercase et lowercase',
        'Compter combien de fois la lettre "a" apparaît',
        'Afficher le premier et dernier mot'
      ],
      en: [
        'Ask user for a sentence',
        'Count how many characters and words there are',
        'Display the sentence in title case',
        'Check if it contains the word "Python"',
        'Display the sentence in uppercase and lowercase',
        'Count how many times the letter "a" appears',
        'Display the first and last word'
      ]
    },
    starterCode: `# Text Analyzer - Week 3 Project
print("📊 Welcome to the Text Analyzer!")
print("=" * 40)

# Get user input
# TODO: Ask user for a sentence

# Basic analysis
# TODO: Count characters (including spaces)
# TODO: Count words
# TODO: Display title case version

# Content analysis  
# TODO: Check if contains "Python"
# TODO: Count letter "a" (case insensitive)

# Formatting examples
# TODO: Show uppercase version
# TODO: Show lowercase version
# TODO: Show first and last word

# Display results in a nice format
print("=" * 40)
print("Analysis complete! 📈")`,
    sampleSolution: `# Text Analyzer - Week 3 Project
print("📊 Welcome to the Text Analyzer!")
print("=" * 40)

# Get user input
sentence = input("Enter a sentence to analyze: ").strip()

if not sentence:
    print("❌ Please enter a valid sentence!")
else:
    # Basic analysis
    char_count = len(sentence)
    word_count = len(sentence.split())
    title_case = sentence.title()
    
    # Content analysis
    contains_python = "python" in sentence.lower()
    a_count = sentence.lower().count('a')
    
    # Word analysis
    words = sentence.split()
    first_word = words[0] if words else "N/A"
    last_word = words[-1] if words else "N/A"
    
    # Formatting examples
    uppercase = sentence.upper()
    lowercase = sentence.lower()
    reversed_sentence = sentence[::-1]
    
    # Display results
    print("\\n" + "=" * 40)
    print("📈 ANALYSIS RESULTS")
    print("=" * 40)
    print(f"Original sentence: \\{sentence}")
    print(f"Character count: \\{char_count}")
    print(f"Word count: \\{word_count}")
    print(f"Title case: \\{title_case}")
    print(f"Contains 'Python': \\{contains_python}")
    print(f"Letter 'a' count: \\{a_count}")
    print()
    print("📝 FORMATTING EXAMPLES:")
    print(f"Uppercase: \\{uppercase}")
    print(f"Lowercase: \\{lowercase}")
    print(f"First word: \\{first_word}")
    print(f"Last word: \\{last_word}")
    print(f"Reversed: \\{reversed_sentence}")
    print("=" * 40)
    print("Analysis complete! 📈")`,
    challenges: {
      ht: [
        'Konte konbyen fwa chak lèt nan alfabet la parèt',
        'Jwenn mo ki pi long ak ki pi kout yo',
        'Konte konbyen fwa chak mo ap parèt (word frequency)',
        'Detekte ak konte ponctuation marks yo',
        'Kreye yon acronym nan premye lèt chak mo yo'
      ],
      fr: [
        'Compter combien de fois chaque lettre de l\'alphabet apparaît',
        'Trouver les mots les plus longs et plus courts',
        'Compter combien de fois chaque mot apparaît (fréquence des mots)',
        'Détecter et compter les marques de ponctuation',
        'Créer un acronyme des premières lettres de chaque mot'
      ],
      en: [
        'Count how many times each letter of alphabet appears',
        'Find the longest and shortest words',
        'Count how many times each word appears (word frequency)',
        'Detect and count punctuation marks',
        'Create an acronym from first letters of each word'
      ]
    }
  }
};