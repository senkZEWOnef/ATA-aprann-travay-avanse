// Python Week 4: Lists & Tuples - Ultra-comprehensive Card-Based Lesson
// Building collection data structures and iteration patterns

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

export interface PythonWeekLesson {
  weekNumber: number;
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
  cards: LessonCard[];
  quiz: {
    questions: QuizQuestion[];
    passingScore: number;
  };
  miniProject: MiniProject;
}

export const pythonWeek4Lesson: PythonWeekLesson = {
  weekNumber: 4,
  title: {
    ht: "Lis ak Tuple yo - Koleksyon Done",
    fr: "Listes et Tuples - Collections de Données", 
    en: "Lists & Tuples - Data Collections"
  },
  description: {
    ht: "Aprann kijan pou kreye ak jere koleksyon done ak lis ak tuple yo nan Python",
    fr: "Apprenez à créer et gérer des collections de données avec les listes et tuples en Python",
    en: "Learn to create and manage data collections with lists and tuples in Python"
  },
  totalCards: 18,
  cards: [
    {
      id: "week4-intro",
      type: "intro",
      title: {
        ht: "🎯 Byenveni nan Semèn 4: Lis ak Tuple yo",
        fr: "🎯 Bienvenue à la Semaine 4: Listes et Tuples",
        en: "🎯 Welcome to Week 4: Lists & Tuples"
      },
      content: {
        ht: "Semèn sa a, nou pral aprann kijan pou travay ak koleksyon done. Lis ak tuple yo se zouti ki gen anpil pouvwa pou konsèvy ak manipile gwoup done nan Python.\n\nNou pral kouvri:\n• Kijan pou kreye ak modifye lis yo\n• Metòd lis ki enpòtan yo\n• Kijan pou itere sou lis yo\n• Konprann tuple ak unpacking\n• Konsèy lis pwojè makèt yo",
        fr: "Cette semaine, nous apprendrons à travailler avec des collections de données. Les listes et tuples sont des outils puissants pour stocker et manipuler des groupes de données en Python.\n\nNous couvrirons :\n• Comment créer et modifier des listes\n• Les méthodes de liste importantes\n• Comment itérer sur les listes\n• Comprendre les tuples et l'unpacking\n• Construire un projet d'application de liste de courses",
        en: "This week, we'll learn to work with data collections. Lists and tuples are powerful tools for storing and manipulating groups of data in Python.\n\nWe'll cover:\n• How to create and modify lists\n• Important list methods\n• How to iterate through lists\n• Understanding tuples and unpacking\n• Building a grocery list app project"
      },
      keyPoints: {
        ht: [
          "Lis yo se koleksyon done ki ka chanje",
          "Tuple yo se koleksyon done ki pa ka chanje",
          "Nou ka aksè eleman yo ak endeks",
          "Loop yo pèmèt nou itere sou koleksyon yo"
        ],
        fr: [
          "Les listes sont des collections de données modifiables",
          "Les tuples sont des collections de données non modifiables",
          "Nous pouvons accéder aux éléments par index",
          "Les boucles nous permettent d'itérer sur les collections"
        ],
        en: [
          "Lists are mutable data collections",
          "Tuples are immutable data collections", 
          "We can access elements by index",
          "Loops allow us to iterate through collections"
        ]
      }
    },
    {
      id: "week4-what-is-list",
      type: "concept",
      title: {
        ht: "📝 Kisa ki Lis?",
        fr: "📝 Qu'est-ce qu'une Liste?",
        en: "📝 What Is a List?"
      },
      content: {
        ht: "Lis se yon koleksyon eleman ki estoke nan yon sèl varyab. Imajine ou gen yon bwat ki ka gen anpil bagay anndan l - se konsa lis yo fonksyone!\n\nKarakteristik lis yo:\n• Lis yo gen yon òd (eleman yo rete nan pozisyon yo)\n• Yo ka chanje (nou ka ajoute, retire, ak modifye eleman)\n• Yo ka gen tip done diferan",
        fr: "Une liste est une collection d'éléments stockés dans une seule variable. Imaginez une boîte qui peut contenir plusieurs objets - c'est ainsi que fonctionnent les listes !\n\nCaractéristiques des listes :\n• Les listes sont ordonnées (les éléments gardent leur position)\n• Elles sont mutables (nous pouvons ajouter, supprimer et modifier des éléments)\n• Elles peuvent contenir différents types de données",
        en: "A list is a collection of items stored in a single variable. Think of it as a box that can hold multiple objects - that's how lists work!\n\nList characteristics:\n• Lists are ordered (elements keep their positions)\n• They are mutable (we can add, remove, and modify elements)\n• They can contain different data types"
      },
      example: {
        code: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]

print("Fruits:", fruits)
print("Numbers:", numbers)
print("Mixed:", mixed)
print("List length:", len(fruits))`,
        output: `Fruits: ['apple', 'banana', 'cherry']
Numbers: [1, 2, 3, 4, 5]
Mixed: ['hello', 42, True, 3.14]
List length: 3`,
        explanation: {
          ht: "Nan egzanp sa a, nou kreye twa lis diferan. Lis 'fruits' gen twa fwi, 'numbers' gen nimewo yo, ak 'mixed' gen tip done diferan. Fonksyon len() bay nou kantite eleman yo.",
          fr: "Dans cet exemple, nous créons trois listes différentes. La liste 'fruits' contient trois fruits, 'numbers' contient des nombres, et 'mixed' contient différents types de données. La fonction len() nous donne le nombre d'éléments.",
          en: "In this example, we create three different lists. The 'fruits' list contains three fruits, 'numbers' contains numbers, and 'mixed' contains different data types. The len() function gives us the number of elements."
        }
      },
      tips: {
        ht: [
          "Sèvi ak [] pou kreye lis vid yo",
          "Eleman lis yo komanse ak endeks 0",
          "Ou ka melanje tip done diferan nan menm lis la"
        ],
        fr: [
          "Utilisez [] pour créer des listes vides",
          "Les éléments de liste commencent à l'index 0", 
          "Vous pouvez mélanger différents types de données dans la même liste"
        ],
        en: [
          "Use [] to create empty lists",
          "List elements start at index 0",
          "You can mix different data types in the same list"
        ]
      }
    },
    {
      id: "week4-list-indexing",
      type: "code",
      title: {
        ht: "🔢 Aksè ak Modifikasyon Lis",
        fr: "🔢 Accès et Modification des Listes",
        en: "🔢 Accessing and Modifying Lists"
      },
      content: {
        ht: "Nou ka aksè eleman lis yo ak endeks (nimewo pozisyon). Python konte kòmanse ak 0, pa 1!\n\nEndeks negatif yo kòmanse nan fen an ak mache vè kòmanse a:",
        fr: "Nous pouvons accéder aux éléments des listes avec des index (numéros de position). Python compte en commençant par 0, pas 1 !\n\nLes index négatifs commencent à la fin et vont vers le début :",
        en: "We can access list elements using indexes (position numbers). Python counts starting from 0, not 1!\n\nNegative indexes start from the end and work backwards:"
      },
      example: {
        code: `fruits = ["apple", "banana", "cherry", "date"]

# Positive indexing
print("First fruit:", fruits[0])    # apple
print("Second fruit:", fruits[1])   # banana

# Negative indexing  
print("Last fruit:", fruits[-1])    # date
print("Second last:", fruits[-2])   # cherry

# Modifying elements
fruits[1] = "mango"  # Change banana to mango
print("Modified:", fruits)

# List slicing
print("First two:", fruits[0:2])    # First 2 elements
print("Last two:", fruits[-2:])     # Last 2 elements`,
        output: `First fruit: apple
Second fruit: banana
Last fruit: date
Second last: cherry
Modified: ['apple', 'mango', 'cherry', 'date']
First two: ['apple', 'mango']
Last two: ['cherry', 'date']`,
        explanation: {
          ht: "Nou ka aksè eleman yo ak endeks pozitif (0, 1, 2...) oswa negatif (-1, -2...). Nou ka tou modifye eleman yo ak asiyen nouvo valè yo. Slicing [start:end] pèmèt nou jwenn pòsyon lis yo.",
          fr: "Nous pouvons accéder aux éléments avec des index positifs (0, 1, 2...) ou négatifs (-1, -2...). Nous pouvons aussi modifier les éléments en assignant de nouvelles valeurs. Le slicing [début:fin] nous permet d'obtenir des portions de listes.",
          en: "We can access elements with positive indexes (0, 1, 2...) or negative indexes (-1, -2...). We can also modify elements by assigning new values. Slicing [start:end] allows us to get portions of lists."
        }
      },
      keyPoints: {
        ht: [
          "Endeks kòmanse ak 0, pa 1",
          "Endeks negatif yo kòmanse nan fen an",
          "fruits[1] = 'nouvo_valè' modifye eleman yo",
          "Slicing [start:end] ba nou pòsyon yo"
        ],
        fr: [
          "Les index commencent à 0, pas 1",
          "Les index négatifs commencent à la fin", 
          "fruits[1] = 'nouvelle_valeur' modifie les éléments",
          "Le slicing [début:fin] nous donne des portions"
        ],
        en: [
          "Indexes start at 0, not 1",
          "Negative indexes start from the end",
          "fruits[1] = 'new_value' modifies elements", 
          "Slicing [start:end] gives us portions"
        ]
      }
    },
    {
      id: "week4-list-methods",
      type: "concept",
      title: {
        ht: "⚙️ Metòd Lis Enpòtan yo",
        fr: "⚙️ Méthodes de Liste Importantes",
        en: "⚙️ Important List Methods"
      },
      content: {
        ht: "Python bay nou anpil metòd ki itil pou travay ak lis yo. Men metòd ki pi enpòtan yo:",
        fr: "Python nous fournit de nombreuses méthodes utiles pour travailler avec les listes. Voici les méthodes les plus importantes :",
        en: "Python provides us with many useful methods for working with lists. Here are the most important methods:"
      },
      example: {
        code: `shopping = ["milk", "bread"]

# Adding items
shopping.append("eggs")           # Add to end
shopping.insert(1, "butter")      # Add at position 1
print("After adding:", shopping)

# Removing items
shopping.remove("bread")          # Remove by value
last_item = shopping.pop()        # Remove and return last
print("Removed last item:", last_item)
print("After removing:", shopping)

# Other useful methods
numbers = [3, 1, 4, 1, 5]
numbers.sort()                    # Sort in place
print("Sorted:", numbers)

numbers.reverse()                 # Reverse in place
print("Reversed:", numbers)

print("Count of 1:", numbers.count(1))   # Count occurrences
print("Index of 4:", numbers.index(4))  # Find position`,
        output: `After adding: ['milk', 'butter', 'bread', 'eggs']
Removed last item: eggs
After removing: ['milk', 'butter']
Sorted: [1, 1, 3, 4, 5]
Reversed: [5, 4, 3, 1, 1]
Count of 1: 2
Index of 4: 1`,
        explanation: {
          ht: "Metòd append() ak insert() ajoute nouvo eleman. remove() ak pop() retire eleman yo. sort() ak reverse() ranje ak ranvèse lis yo. count() ak index() jwenn enfòmasyon sou eleman yo.",
          fr: "Les méthodes append() et insert() ajoutent de nouveaux éléments. remove() et pop() retirent des éléments. sort() et reverse() organisent et inversent les listes. count() et index() trouvent des informations sur les éléments.",
          en: "The append() and insert() methods add new elements. remove() and pop() remove elements. sort() and reverse() organize and reverse lists. count() and index() find information about elements."
        }
      },
      keyPoints: {
        ht: [
          "append(x) - ajoute nan fen an",
          "insert(i, x) - ajoute nan pozisyon i",
          "remove(x) - retire pa valè",
          "pop() - retire ak retounen dènye eleman an",
          "sort() - ranje nan òd",
          "reverse() - ranvèse òd la"
        ],
        fr: [
          "append(x) - ajoute à la fin",
          "insert(i, x) - ajoute à la position i", 
          "remove(x) - retire par valeur",
          "pop() - retire et retourne le dernier élément",
          "sort() - trie en ordre",
          "reverse() - inverse l'ordre"
        ],
        en: [
          "append(x) - add to end",
          "insert(i, x) - add at position i",
          "remove(x) - remove by value", 
          "pop() - remove and return last element",
          "sort() - sort in order",
          "reverse() - reverse the order"
        ]
      }
    },
    {
      id: "week4-list-loops",
      type: "code",
      title: {
        ht: "🔄 Itere sou Lis yo",
        fr: "🔄 Itérer sur les Listes", 
        en: "🔄 Looping Through Lists"
      },
      content: {
        ht: "Loop yo pèmèt nou aksè ak pwosese chak eleman nan lis la. Gen plizyè fason pou fè sa nan Python:",
        fr: "Les boucles nous permettent d'accéder et de traiter chaque élément de la liste. Il y a plusieurs façons de le faire en Python :",
        en: "Loops allow us to access and process each element in the list. There are several ways to do this in Python:"
      },
      example: {
        code: `fruits = ["apple", "banana", "cherry", "date"]

# Method 1: Direct iteration (most common)
print("=== Direct Iteration ===")
for fruit in fruits:
    print(f"I like {fruit}")

print("\\n=== With Index ===")
# Method 2: Using enumerate() to get index and value
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")

print("\\n=== Using range and len ===")    
# Method 3: Using range() and len()
for i in range(len(fruits)):
    print(f"Position {i}: {fruits[i]}")

print("\\n=== List Comprehension ===")
# Method 4: List comprehension (advanced)
uppercase_fruits = [fruit.upper() for fruit in fruits]
print("Uppercase fruits:", uppercase_fruits)`,
        output: `=== Direct Iteration ===
I like apple
I like banana
I like cherry
I like date

=== With Index ===
1. apple
2. banana
3. cherry
4. date

=== Using range and len ===
Position 0: apple
Position 1: banana
Position 2: cherry
Position 3: date

=== List Comprehension ===
Uppercase fruits: ['APPLE', 'BANANA', 'CHERRY', 'DATE']`,
        explanation: {
          ht: "Gen kat fason prensipal pou itere sou lis yo. Itèrasyon dirèk la (for fruit in fruits) se pi senp la. enumerate() ba nou endeks ak valè a. range(len()) ba nou kontwòl sou endeks la. List comprehension kreye nouvo lis yo nan yon sèl liy.",
          fr: "Il y a quatre façons principales d'itérer sur les listes. L'itération directe (for fruit in fruits) est la plus simple. enumerate() nous donne l'index et la valeur. range(len()) nous donne le contrôle sur l'index. La compréhension de liste crée de nouvelles listes en une seule ligne.",
          en: "There are four main ways to iterate through lists. Direct iteration (for fruit in fruits) is the simplest. enumerate() gives us both index and value. range(len()) gives us control over the index. List comprehension creates new lists in a single line."
        }
      },
      tips: {
        ht: [
          "Sèvi ak 'for item in list' pou ka senp yo",
          "Sèvi ak enumerate() lè ou bezwen endeks la",
          "List comprehension rapid pou transformasyon yo"
        ],
        fr: [
          "Utilisez 'for item in list' pour les cas simples",
          "Utilisez enumerate() quand vous avez besoin de l'index",
          "La compréhension de liste est rapide pour les transformations"
        ],
        en: [
          "Use 'for item in list' for simple cases",
          "Use enumerate() when you need the index",
          "List comprehension is fast for transformations"
        ]
      }
    },
    {
      id: "week4-list-practice",
      type: "practice",
      title: {
        ht: "💪 Egzèsis Pratik Lis",
        fr: "💪 Exercices Pratiques de Listes",
        en: "💪 List Practice Exercises"
      },
      content: {
        ht: "Tanpri kode solisyon yo pou egzèsis sa yo pou ou pratike travay ak lis yo:",
        fr: "Veuillez coder les solutions à ces exercices pour pratiquer le travail avec les listes :",
        en: "Please code solutions to these exercises to practice working with lists:"
      },
      example: {
        code: `# Exercise 1: Create and manipulate a movie list
movies = ["Inception", "Avatar", "Titanic", "The Matrix", "Pulp Fiction"]

print("=== Exercise 1: Movie List ===")
print("Second movie:", movies[1])
print("Last movie:", movies[-1])

# Add new movie and remove one
movies.append("Interstellar")
movies.remove("Titanic")
print("Updated movies:", movies)

# Sort alphabetically
movies.sort()
print("Sorted movies:", movies)

print("\\n=== Exercise 2: Fruit Input ===")
# Exercise 2: Get 3 fruits from user (simulated)
fruits_input = ["apple", "orange", "grape"]  # Simulated user input
for fruit in fruits_input:
    print(f"You entered: {fruit}")

print("\\n=== Exercise 3: Numbers Processing ===")    
# Exercise 3: Process a list of numbers
numbers = [10, 25, 5, 30, 15, 40]
print("Original numbers:", numbers)
print("Sum:", sum(numbers))
print("Maximum:", max(numbers))
print("Minimum:", min(numbers))

# Find numbers greater than 20
large_numbers = [num for num in numbers if num > 20]
print("Numbers > 20:", large_numbers)`,
        output: `=== Exercise 1: Movie List ===
Second movie: Avatar
Last movie: Pulp Fiction
Updated movies: ['Inception', 'Avatar', 'The Matrix', 'Pulp Fiction', 'Interstellar']
Sorted movies: ['Avatar', 'Inception', 'Interstellar', 'Pulp Fiction', 'The Matrix']

=== Exercise 2: Fruit Input ===
You entered: apple
You entered: orange
You entered: grape

=== Exercise 3: Numbers Processing ===
Original numbers: [10, 25, 5, 30, 15, 40]
Sum: 125
Maximum: 40
Minimum: 5
Numbers > 20: [25, 30, 40]`,
        explanation: {
          ht: "Egzèsis sa yo montre kijan pou manipile lis yo ak metòd diferan. Nou aksè eleman yo, modifye lis yo, ak pwosese done yo ak loop ak list comprehension.",
          fr: "Ces exercices montrent comment manipuler les listes avec différentes méthodes. Nous accédons aux éléments, modifions les listes, et traitons les données avec des boucles et la compréhension de liste.",
          en: "These exercises demonstrate how to manipulate lists with different methods. We access elements, modify lists, and process data with loops and list comprehension."
        }
      },
      keyPoints: {
        ht: [
          "Aksè eleman yo ak endeks pozitif ak negatif",
          "Sèvi ak append() ak remove() pou modifikasyon",
          "sort() ranje eleman yo nan òd alfabetik",
          "sum(), max(), min() fonksyon yo itil pou nimewo"
        ],
        fr: [
          "Accéder aux éléments avec des index positifs et négatifs",
          "Utiliser append() et remove() pour les modifications",
          "sort() range les éléments par ordre alphabétique", 
          "sum(), max(), min() sont des fonctions utiles pour les nombres"
        ],
        en: [
          "Access elements with positive and negative indexes",
          "Use append() and remove() for modifications",
          "sort() arranges elements alphabetically",
          "sum(), max(), min() are useful functions for numbers"
        ]
      }
    },
    {
      id: "week4-tuples-intro",
      type: "concept", 
      title: {
        ht: "🔒 Entwodiksyon nan Tuple yo",
        fr: "🔒 Introduction aux Tuples",
        en: "🔒 Introduction to Tuples"
      },
      content: {
        ht: "Tuple yo se koleksyon done ki sanble ak lis yo, men yo pa ka chanje (immutable). Yon fwa ou kreye yon tuple, ou pa ka modifye eleman yo.\n\nTuple yo itil pou:\n• Done ki pa ta dwe chanje (kòm koòdone)\n• Retounen plizyè valè nan fonksyon yo\n• Kle diksyonè yo",
        fr: "Les tuples sont des collections de données similaires aux listes, mais ils ne peuvent pas être modifiés (immutables). Une fois que vous créez un tuple, vous ne pouvez pas modifier ses éléments.\n\nLes tuples sont utiles pour :\n• Des données qui ne devraient pas changer (comme les coordonnées)\n• Retourner plusieurs valeurs des fonctions\n• Les clés de dictionnaire",
        en: "Tuples are data collections similar to lists, but they cannot be changed (immutable). Once you create a tuple, you cannot modify its elements.\n\nTuples are useful for:\n• Data that shouldn't change (like coordinates)\n• Returning multiple values from functions\n• Dictionary keys"
      },
      example: {
        code: `# Creating tuples
coordinates = (10.5, 20.7)
person = ("Alice", 28, "Engineer")
colors = ("red", "green", "blue")

print("Coordinates:", coordinates)
print("Person:", person)
print("Colors:", colors)

# Accessing tuple elements (same as lists)
print("X coordinate:", coordinates[0])
print("Y coordinate:", coordinates[1])
print("Person name:", person[0])

# Tuple with one element (note the comma!)
single = (42,)  # Comma is required!
not_tuple = (42)  # This is just parentheses around a number
print("Single tuple:", single, type(single))
print("Not a tuple:", not_tuple, type(not_tuple))

# Trying to modify a tuple (this will cause an error)
# coordinates[0] = 15  # TypeError: 'tuple' object does not support item assignment`,
        output: `Coordinates: (10.5, 20.7)
Person: ('Alice', 28, 'Engineer')
Colors: ('red', 'green', 'blue')
X coordinate: 10.5
Y coordinate: 20.7
Person name: Alice
Single tuple: (42,) <class 'tuple'>
Not a tuple: 42 <class 'int'>`,
        explanation: {
          ht: "Tuple yo kreye ak parantèz () ak eleman yo separe ak vigil. Nou ka aksè eleman yo menm jan ak lis yo, men nou pa ka chanje yo. Pou yon sèl eleman tuple, ou dwe mete yon vigil apre eleman an.",
          fr: "Les tuples se créent avec des parenthèses () et des éléments séparés par des virgules. Nous pouvons accéder aux éléments comme avec les listes, mais nous ne pouvons pas les modifier. Pour un tuple à un seul élément, vous devez mettre une virgule après l'élément.",
          en: "Tuples are created with parentheses () and elements separated by commas. We can access elements just like lists, but we cannot change them. For a single-element tuple, you must put a comma after the element."
        }
      },
      tips: {
        ht: [
          "Tuple yo pa ka chanje - yo immutable",
          "Sèvi ak (x,) pou yon sèl eleman tuple",
          "Tuple yo pi rapid pase lis yo pou aksè",
          "Itil pou done ki fixe tankou koòdone"
        ],
        fr: [
          "Les tuples ne peuvent pas changer - ils sont immutables",
          "Utilisez (x,) pour un tuple à un seul élément",
          "Les tuples sont plus rapides que les listes pour l'accès",
          "Utiles pour des données fixes comme les coordonnées"
        ],
        en: [
          "Tuples cannot change - they are immutable",
          "Use (x,) for single-element tuples", 
          "Tuples are faster than lists for access",
          "Useful for fixed data like coordinates"
        ]
      }
    },
    {
      id: "week4-tuple-unpacking",
      type: "code",
      title: {
        ht: "📦 Tuple Unpacking",
        fr: "📦 Déballage de Tuples",
        en: "📦 Tuple Unpacking"
      },
      content: {
        ht: "Tuple unpacking se yon karakteristik ki gen anpil pouvwa ki pèmèt nou asiyen eleman tuple yo bay varyab endividyèl yo nan yon sèl liy kòd.",
        fr: "Le déballage de tuples est une fonctionnalité puissante qui nous permet d'assigner les éléments d'un tuple à des variables individuelles en une seule ligne de code.",
        en: "Tuple unpacking is a powerful feature that allows us to assign tuple elements to individual variables in a single line of code."
      },
      example: {
        code: `# Basic tuple unpacking
person = ("Ralph", 30, "Puerto Rico")
name, age, country = person

print("Name:", name)
print("Age:", age) 
print("Country:", country)

print("\\n=== Coordinate Example ===")
# Coordinate unpacking
point = (15, 25)
x, y = point
print(f"Point is at ({x}, {y})")

print("\\n=== Swapping Variables ===")
# Swapping variables using tuple unpacking
a = 10
b = 20
print(f"Before swap: a={a}, b={b}")

a, b = b, a  # Swap in one line!
print(f"After swap: a={a}, b={b}")

print("\\n=== Function Returns ===")
# Functions can return tuples for unpacking
def get_name_age():
    return ("Maria", 25)

name, age = get_name_age()
print(f"Function returned: {name}, age {age}")

print("\\n=== Partial Unpacking ===")
# Unpacking with underscore for unused values
data = ("John", 35, "Manager", "New York")
name, age, _, city = data  # Skip job title with _
print(f"Name: {name}, Age: {age}, City: {city}")`,
        output: `Name: Ralph
Age: 30
Country: Puerto Rico

=== Coordinate Example ===
Point is at (15, 25)

=== Swapping Variables ===
Before swap: a=10, b=20
After swap: a=20, b=10

=== Function Returns ===
Function returned: Maria, age 25

=== Partial Unpacking ===
Name: John, Age: 35, City: New York`,
        explanation: {
          ht: "Tuple unpacking pèmèt nou pran eleman yo nan tuple la ak mete yo nan varyab separe yo. Nou ka sèvi ak li pou chanje valè varyab yo, travay ak retou fonksyon yo, ak inyore valè yo ak '_' lè nou pa bezwen yo.",
          fr: "Le déballage de tuples nous permet de prendre les éléments du tuple et de les mettre dans des variables séparées. Nous pouvons l'utiliser pour échanger des valeurs de variables, travailler avec des retours de fonctions, et ignorer des valeurs avec '_' quand nous n'en avons pas besoin.",
          en: "Tuple unpacking allows us to take elements from the tuple and put them into separate variables. We can use it to swap variable values, work with function returns, and ignore values with '_' when we don't need them."
        }
      },
      keyPoints: {
        ht: [
          "name, age = tuple asiyen eleman yo bay varyab yo",
          "a, b = b, a chanje valè yo rapidman",
          "Fonksyon yo ka retounen tuple yo pou unpacking",
          "Sèvi ak _ pou inyore valè yo ou pa bezwen"
        ],
        fr: [
          "name, age = tuple assigne les éléments aux variables",
          "a, b = b, a échange les valeurs rapidement",
          "Les fonctions peuvent retourner des tuples pour le déballage",
          "Utilisez _ pour ignorer les valeurs dont vous n'avez pas besoin"
        ],
        en: [
          "name, age = tuple assigns elements to variables",
          "a, b = b, a swaps values quickly",
          "Functions can return tuples for unpacking", 
          "Use _ to ignore values you don't need"
        ]
      }
    },
    {
      id: "week4-tuple-practice",
      type: "practice",
      title: {
        ht: "🎯 Pratik Tuple ak Unpacking",
        fr: "🎯 Pratique Tuples et Déballage",
        en: "🎯 Tuple and Unpacking Practice"
      },
      content: {
        ht: "Pratike sèvi ak tuple yo ak tuple unpacking ak egzèsis sa yo:",
        fr: "Pratiquez l'utilisation des tuples et du déballage de tuples avec ces exercices :",
        en: "Practice using tuples and tuple unpacking with these exercises:"
      },
      example: {
        code: `# Exercise 1: Student information
student = ("Ana", 22, "Computer Science", 3.8)
name, age, major, gpa = student

print("=== Student Information ===")
print(f"Student: {name}")
print(f"Age: {age}")
print(f"Major: {major}")
print(f"GPA: {gpa}")

# Exercise 2: Coordinates and distance
point1 = (0, 0)
point2 = (3, 4)

x1, y1 = point1
x2, y2 = point2

# Calculate distance using Pythagorean theorem
distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
print(f"\\n=== Distance Calculation ===")
print(f"Point 1: ({x1}, {y1})")
print(f"Point 2: ({x2}, {y2})")
print(f"Distance: {distance}")

# Exercise 3: Multiple assignment and swapping
print("\\n=== Variable Operations ===")
# Multiple assignment using tuple
a, b, c = 10, 20, 30
print(f"Initial values: a={a}, b={b}, c={c}")

# Rotate values (a gets b, b gets c, c gets a)
a, b, c = b, c, a
print(f"After rotation: a={a}, b={b}, c={c}")

# Exercise 4: Function with tuple return
def get_circle_info(radius):
    pi = 3.14159
    area = pi * radius ** 2
    circumference = 2 * pi * radius
    return area, circumference  # Return tuple

# Unpack the returned tuple
area, circumference = get_circle_info(5)
print(f"\\n=== Circle with radius 5 ===")
print(f"Area: {area:.2f}")
print(f"Circumference: {circumference:.2f}")`,
        output: `=== Student Information ===
Student: Ana
Age: 22
Major: Computer Science
GPA: 3.8

=== Distance Calculation ===
Point 1: (0, 0)
Point 2: (3, 4)
Distance: 5.0

=== Variable Operations ===
Initial values: a=10, b=20, c=30
After rotation: a=20, b=30, c=10

=== Circle with radius 5 ===
Area: 78.54
Circumference: 31.42`,
        explanation: {
          ht: "Egzèsis sa yo montre kijan tuple yo ak unpacking itil nan aplikasyon yo nan lavi reyèl. Nou ka estoke enfòmasyon moun yo, travay ak koòdone matematik yo, ak jere retou fonksyon yo ak plizyè valè yo.",
          fr: "Ces exercices montrent comment les tuples et le déballage sont utiles dans les applications de la vie réelle. Nous pouvons stocker des informations de personnes, travailler avec des coordonnées mathématiques, et gérer des retours de fonctions avec plusieurs valeurs.",
          en: "These exercises show how tuples and unpacking are useful in real-world applications. We can store person information, work with mathematical coordinates, and handle function returns with multiple values."
        }
      }
    },
    {
      id: "week4-list-vs-tuple",
      type: "tip",
      title: {
        ht: "⚖️ Lis vs Tuple: Kilè pou sèvi ak yo",
        fr: "⚖️ Listes vs Tuples: Quand les utiliser",
        en: "⚖️ Lists vs Tuples: When to Use Each"
      },
      content: {
        ht: "Konprann diferans ant lis ak tuple yo ak kè yo pi apwopriye pou travay yo:",
        fr: "Comprendre les différences entre les listes et les tuples et lesquels sont les plus appropriés pour quels travaux :",
        en: "Understanding the differences between lists and tuples and which are most appropriate for which jobs:"
      },
      keyPoints: {
        ht: [
          "LIS: Sèvi ak yo lè done yo ka chanje",
          "LIS: Pi bon pou koleksyon ki grandi oswa diminye", 
          "TUPLE: Sèvi ak yo pou done ki fixe",
          "TUPLE: Pi rapid ak sètèn, bon pou kle diksyonè",
          "TUPLE: Ideyal pou koòdone, koulè RGB, konfigirasyon"
        ],
        fr: [
          "LISTES: Utilisez-les quand les données peuvent changer",
          "LISTES: Meilleures pour les collections qui grandissent ou diminuent",
          "TUPLES: Utilisez-les pour des données fixes",
          "TUPLES: Plus rapides et sûrs, bons pour les clés de dictionnaire", 
          "TUPLES: Idéaux pour les coordonnées, couleurs RGB, configurations"
        ],
        en: [
          "LISTS: Use when data can change",
          "LISTS: Better for collections that grow or shrink",
          "TUPLES: Use for fixed data",
          "TUPLES: Faster and safer, good for dictionary keys",
          "TUPLES: Ideal for coordinates, RGB colors, configurations"
        ]
      },
      tips: {
        ht: [
          "Kòmanse ak lis si ou pa sètèn",
          "Sèvi ak tuple pou done ki gen òganizasyon ak ki fixe",
          "Tuple yo itil pou retounen plizyè valè nan fonksyon yo"
        ],
        fr: [
          "Commencez avec des listes si vous n'êtes pas sûr",
          "Utilisez des tuples pour des données structurées et fixes",
          "Les tuples sont utiles pour retourner plusieurs valeurs des fonctions"
        ],
        en: [
          "Start with lists if you're unsure",
          "Use tuples for structured, fixed data",
          "Tuples are useful for returning multiple values from functions"
        ]
      }
    }
  ],
  quiz: {
    questions: [
      {
        id: "q1",
        question: {
          ht: "Kisa endeks premye eleman nan yon lis nan Python?",
          fr: "Quel est l'index du premier élément d'une liste en Python ?",
          en: "What is the index of the first element in a Python list?"
        },
        options: {
          ht: ["1", "0", "-1", "Ka va selon lis la"],
          fr: ["1", "0", "-1", "Ça dépend de la liste"],
          en: ["1", "0", "-1", "It depends on the list"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Nan Python, endeks kòmanse ak 0, pa 1. Se konsa, premye eleman toujou nan endeks 0, dezyèm nan endeks 1, ak konsa de suite.",
          fr: "En Python, l'indexation commence à 0, pas 1. Ainsi, le premier élément est toujours à l'index 0, le deuxième à l'index 1, et ainsi de suite.",
          en: "In Python, indexing starts at 0, not 1. So the first element is always at index 0, the second at index 1, and so on."
        }
      },
      {
        id: "q2", 
        question: {
          ht: "Ki metòd ki ajoute yon eleman nan fen yon lis?",
          fr: "Quelle méthode ajoute un élément à la fin d'une liste ?",
          en: "Which method adds an element to the end of a list?"
        },
        options: {
          ht: ["add()", "append()", "insert()", "push()"],
          fr: ["add()", "append()", "insert()", "push()"],
          en: ["add()", "append()", "insert()", "push()"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Metòd append() ajoute yon nouvo eleman nan fen lis la. Egzanp: list.append('nouvo_eleman') va ajoute 'nouvo_eleman' nan fen an.",
          fr: "La méthode append() ajoute un nouvel élément à la fin de la liste. Exemple : list.append('nouvel_element') ajoutera 'nouvel_element' à la fin.",
          en: "The append() method adds a new element to the end of the list. Example: list.append('new_item') will add 'new_item' to the end."
        }
      },
      {
        id: "q3",
        question: {
          ht: "Ki stwikti done ki pa ka chanje?",
          fr: "Quelle structure de données est immutable ?",
          en: "Which data structure is immutable?"
        },
        options: {
          ht: ["Lis", "Tuple", "Diksyonè", "Set"],
          fr: ["Liste", "Tuple", "Dictionnaire", "Ensemble"],
          en: ["List", "Tuple", "Dictionary", "Set"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Tuple yo se immutable, sa vle di yo pa ka chanje apre yo kreye. Lis yo, diksyonè yo, ak set yo ka chanje (mutable).",
          fr: "Les tuples sont immutables, ce qui signifie qu'ils ne peuvent pas être modifiés après leur création. Les listes, dictionnaires et ensembles sont mutables.",
          en: "Tuples are immutable, meaning they cannot be changed after creation. Lists, dictionaries, and sets are mutable (changeable)."
        }
      },
      {
        id: "q4",
        question: {
          ht: "Kisa kòd sa a ap enprime?\n\nnums = [10, 20, 30]\nnums.pop()\nprint(nums)",
          fr: "Qu'est-ce que ce code va imprimer ?\n\nnums = [10, 20, 30]\nnums.pop()\nprint(nums)",
          en: "What will this code print?\n\nnums = [10, 20, 30]\nnums.pop()\nprint(nums)"
        },
        options: {
          ht: ["[10, 20, 30]", "[10, 20]", "[20, 30]", "30"],
          fr: ["[10, 20, 30]", "[10, 20]", "[20, 30]", "30"],
          en: ["[10, 20, 30]", "[10, 20]", "[20, 30]", "30"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Metòd pop() retire ak retounen dènye eleman nan lis la. Nan ka sa a, li retire 30, ak lis la rete ak [10, 20].",
          fr: "La méthode pop() supprime et retourne le dernier élément de la liste. Dans ce cas, elle supprime 30, et la liste reste avec [10, 20].",
          en: "The pop() method removes and returns the last element from the list. In this case, it removes 30, leaving the list with [10, 20]."
        }
      },
      {
        id: "q5",
        question: {
          ht: "Kisa rezilta kòd sa a?\n\nperson = ('Bob', 40)\nname, age = person\nprint(age)",
          fr: "Quel est le résultat de ce code ?\n\nperson = ('Bob', 40)\nname, age = person\nprint(age)",
          en: "What is the output of this code?\n\nperson = ('Bob', 40)\nname, age = person\nprint(age)"
        },
        options: {
          ht: ["Bob", "40", "('Bob', 40)", "Erè"],
          fr: ["Bob", "40", "('Bob', 40)", "Erreur"],
          en: ["Bob", "40", "('Bob', 40)", "Error"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Sa a se tuple unpacking. Tuple 'person' gen de eleman: 'Bob' ak 40. Yo asiyen bay varyab 'name' ak 'age'. Konsa print(age) ap montre 40.",
          fr: "Ceci est du déballage de tuple. Le tuple 'person' a deux éléments : 'Bob' et 40. Ils sont assignés aux variables 'name' et 'age'. Donc print(age) affichera 40.",
          en: "This is tuple unpacking. The tuple 'person' has two elements: 'Bob' and 40. They are assigned to variables 'name' and 'age'. So print(age) will display 40."
        }
      }
    ],
    passingScore: 3
  },
  miniProject: {
    title: {
      ht: "🛒 Aplikasyon Lis Makèt",
      fr: "🛒 Application Liste de Courses",
      en: "🛒 Grocery List App"
    },
    description: {
      ht: "Konsèy yon aplikasyon entèaktif ki pèmèt itilizatè yo jere lis makèt yo. Yo ka ajoute atik yo, wè lis la, ak retire bagay yo nan lis la.",
      fr: "Construisez une application interactive qui permet aux utilisateurs de gérer leur liste de courses. Ils peuvent ajouter des articles, voir la liste, et retirer des éléments de la liste.",
      en: "Build an interactive application that allows users to manage their grocery list. They can add items, view the list, and remove items from the list."
    },
    requirements: {
      ht: [
        "Kreye yon lis vid pou estoke atik makèt yo",
        "Mande itilizatè a pou ajoute atik yo jiskaske yo tape 'fini'",
        "Montre lis aktyèl la chak fwa yo ajoute yon atik", 
        "Nan fen an, montre lis final la ak nimewo yo",
        "Sèvi ak loop ak kondisyon yo pou kontwole aplikasyon an"
      ],
      fr: [
        "Créer une liste vide pour stocker les articles de courses",
        "Demander à l'utilisateur d'ajouter des articles jusqu'à ce qu'il tape 'fini'",
        "Afficher la liste actuelle chaque fois qu'un article est ajouté",
        "À la fin, afficher la liste finale avec des numéros",
        "Utiliser des boucles et des conditions pour contrôler l'application"
      ],
      en: [
        "Create an empty list to store grocery items",
        "Ask user to add items until they type 'done'",
        "Display current list each time an item is added",
        "At the end, display final list with numbers", 
        "Use loops and conditions to control the application"
      ]
    },
    starterCode: `# Grocery List App - Week 4 Project
print("🛒 Welcome to your Grocery List App!")
print("=" * 40)

# Create empty list to store grocery items
grocery_list = []

# TODO: Create a loop that continues until user types 'done'
# TODO: Ask user for grocery items
# TODO: Add items to the list
# TODO: Display current list after each addition

# TODO: Display final numbered list`,
    sampleSolution: `# Grocery List App - Week 4 Project
print("🛒 Welcome to your Grocery List App!")
print("=" * 40)

# Create empty list to store grocery items
grocery_list = []

# Main loop for adding items
while True:
    item = input("Add an item (or type 'done' to finish): ")
    
    # Check if user wants to quit
    if item.lower() == "done":
        break
    
    # Add item to list
    grocery_list.append(item)
    print(f"✓ Added '{item}' to your list")
    print("Current list:", grocery_list)
    print()

# Display final list with numbers
print("\\n" + "=" * 40)
print("🛒 YOUR FINAL GROCERY LIST:")
print("=" * 40)

if grocery_list:
    for i, item in enumerate(grocery_list, start=1):
        print(f"{i}. {item}")
    print(f"\\nTotal items: {len(grocery_list)}")
else:
    print("Your list is empty!")
    
print("\\nHappy shopping! 🛍️")`,
    challenges: {
      ht: [
        "Ajoute yon opsyon pou retire atik yo nan lis la",
        "Pèmèt itilizatè a klase lis la alfabètikman anvan yo montre li",
        "Ajoute yon fonksyonalite pou kontwole si yon atik deja nan lis la",
        "Kreye yon meni ak opsyon diferan (ajoute, retire, montre, soti)",
        "Ajoute kapasite pou sovgade ak chaje lis yo nan yon fichye"
      ],
      fr: [
        "Ajouter une option pour supprimer des articles de la liste",
        "Permettre à l'utilisateur de trier la liste alphabétiquement avant l'affichage",
        "Ajouter une fonctionnalité pour vérifier si un article est déjà dans la liste",
        "Créer un menu avec différentes options (ajouter, supprimer, afficher, quitter)",
        "Ajouter la capacité de sauvegarder et charger des listes depuis un fichier"
      ],
      en: [
        "Add an option to remove items from the list",
        "Allow user to sort the list alphabetically before displaying",
        "Add functionality to check if an item is already in the list",
        "Create a menu with different options (add, remove, display, quit)",
        "Add ability to save and load lists from a file"
      ]
    }
  }
};