export const pythonWeek12Cards = [
  // Card 1: What is a Module?
  {
    id: 'module-intro',
    title: {
      ht: 'Ki sa ki Modil yo?',
      fr: 'Qu\'est-ce qu\'un Module ?',
      en: 'What is a Module?'
    },
    content: {
      ht: 'Yon modil se yon fichye Python ki gen kòd (fonksyon, varyab, klas) ki ka itilize ankò.\n\nEgzanp fichye modil yo: math.py, game_utils.py, oswa nenpòt non ou vle.\n\nMoun itilize modil yo pou òganize kòd ak reyitilize fonksyon yo.',
      fr: 'Un module est un fichier Python contenant du code (fonctions, variables, classes) qui peut être réutilisé.\n\nExemples de fichiers modules : math.py, game_utils.py, ou tout nom que vous voulez.\n\nOn utilise les modules pour organiser le code et réutiliser des fonctions.',
      en: 'A module is a Python file containing code (functions, variables, classes) that can be reused.\n\nExample module files: math.py, game_utils.py, or any name you want.\n\nWe use modules to organize code and reuse functions.'
    },
    codeExample: `# Importing and using a module
import math

# Use functions from math module
print(f"Square root of 25: {math.sqrt(25)}")
print(f"Value of pi: {math.pi}")
print(f"Ceiling of 4.3: {math.ceil(4.3)}")`,
    quiz: {
      question: {
        ht: 'Ki sa ki yon modil nan Python?',
        fr: 'Qu\'est-ce qu\'un module en Python ?',
        en: 'What is a module in Python?'
      },
      options: [
        { ht: 'Yon fonksyon espesyal', fr: 'Une fonction spéciale', en: 'A special function' },
        { ht: 'Yon fichye ki gen kòd ki ka itilize ankò', fr: 'Un fichier contenant du code réutilisable', en: 'A file containing reusable code' },
        { ht: 'Yon varyab konplèks', fr: 'Une variable complexe', en: 'A complex variable' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Yon modil se yon fichye Python ki gen fonksyon, varyab, ak klas ki ka itilize nan lòt pwogram yo.',
        fr: 'Un module est un fichier Python contenant des fonctions, variables, et classes qui peuvent être utilisées dans d\'autres programmes.',
        en: 'A module is a Python file containing functions, variables, and classes that can be used in other programs.'
      }
    }
  },

  // Card 2: Types of Modules
  {
    id: 'module-types',
    title: {
      ht: 'Diferan Tip Modil yo',
      fr: 'Différents Types de Modules',
      en: 'Different Types of Modules'
    },
    content: {
      ht: 'Gen twa tip modil yo:\n\n1. **Built-in Modules** - Yo vin ak Python (math, random, datetime)\n2. **Custom Modules** - Ou kreye yo ou menm\n3. **External Modules** - Yo enstale ak pip (requests, pandas)',
      fr: 'Il y a trois types de modules :\n\n1. **Modules Intégrés** - Viennent avec Python (math, random, datetime)\n2. **Modules Personnalisés** - Créés par vous\n3. **Modules Externes** - Installés avec pip (requests, pandas)',
      en: 'There are three types of modules:\n\n1. **Built-in Modules** - Come with Python (math, random, datetime)\n2. **Custom Modules** - Created by you\n3. **External Modules** - Installed with pip (requests, pandas)'
    },
    codeExample: `# Examples of different module types

# 1. Built-in module
import math
print(f"Built-in: {math.sqrt(16)}")

# 2. Custom module (if you created mytools.py)
# import mytools
# print(mytools.greet("Alice"))

# 3. External module (if installed)
# import requests
# response = requests.get("https://api.github.com")`,
    exercise: {
      instruction: {
        ht: 'Enpòte modil math la ak itilize fonksyon pi ak sqrt.',
        fr: 'Importez le module math et utilisez les fonctions pi et sqrt.',
        en: 'Import the math module and use the pi and sqrt functions.'
      },
      startingCode: `# Import math module and use pi and sqrt
`,
      solution: `import math

# Use pi
print(f"Pi value: {math.pi}")

# Use sqrt
number = 25
print(f"Square root of {number}: {math.sqrt(number)}")

# Calculate area of circle with radius 5
radius = 5
area = math.pi * (radius ** 2)
print(f"Circle area (radius {radius}): {area:.2f}")`
    }
  },

  // Card 3: Different Ways to Import
  {
    id: 'import-methods',
    title: {
      ht: 'Diferan Fason pou Enpòte',
      fr: 'Différentes Façons d\'Importer',
      en: 'Different Ways to Import'
    },
    content: {
      ht: 'Gen plizyè fason pou enpòte modil yo:\n\n**1. Enpòte tout modil la:**\n`import math`\n\n**2. Enpòte fonksyon espesifik:**\n`from math import sqrt, pi`\n\n**3. Bay modil la yon ti non:**\n`import datetime as dt`',
      fr: 'Il y a plusieurs façons d\'importer des modules :\n\n**1. Importer tout le module :**\n`import math`\n\n**2. Importer des fonctions spécifiques :**\n`from math import sqrt, pi`\n\n**3. Donner un alias au module :**\n`import datetime as dt`',
      en: 'There are several ways to import modules:\n\n**1. Import the whole module:**\n`import math`\n\n**2. Import specific functions:**\n`from math import sqrt, pi`\n\n**3. Give the module an alias:**\n`import datetime as dt`'
    },
    codeExample: `# Different import methods demonstration

# Method 1: Import whole module
import math
print(f"Using math.pi: {math.pi}")

# Method 2: Import specific functions
from random import randint, choice
print(f"Random number: {randint(1, 10)}")
print(f"Random choice: {choice(['red', 'blue', 'green'])}")

# Method 3: Import with alias
import datetime as dt
print(f"Today: {dt.date.today()}")`,
    quiz: {
      question: {
        ht: 'Ki kòmandman ki enpòte sèlman fonksyon sqrt la nan modil math?',
        fr: 'Quelle commande importe seulement la fonction sqrt du module math ?',
        en: 'Which command imports only the sqrt function from the math module?'
      },
      options: [
        { ht: 'import math.sqrt', fr: 'import math.sqrt', en: 'import math.sqrt' },
        { ht: 'from math import sqrt', fr: 'from math import sqrt', en: 'from math import sqrt' },
        { ht: 'import sqrt from math', fr: 'import sqrt from math', en: 'import sqrt from math' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '"from math import sqrt" se fason an pou enpòte yon fonksyon espesifik nan yon modil.',
        fr: '"from math import sqrt" est la façon d\'importer une fonction spécifique d\'un module.',
        en: '"from math import sqrt" is the way to import a specific function from a module.'
      }
    }
  },

  // Card 4: Math Module
  {
    id: 'math-module',
    title: {
      ht: 'Modil Math la',
      fr: 'Le Module Math',
      en: 'The Math Module'
    },
    content: {
      ht: 'Modil math la gen anpil fonksyon matematik itil:\n\n• `sqrt()` - rasin kare\n• `ceil()` - wonn monte\n• `floor()` - wonn desann\n• `pi` - vale pi (3.14159...)\n• `pow()` - ekspoze (mete pouvwa)',
      fr: 'Le module math contient de nombreuses fonctions mathématiques utiles :\n\n• `sqrt()` - racine carrée\n• `ceil()` - arrondir vers le haut\n• `floor()` - arrondir vers le bas\n• `pi` - valeur de pi (3.14159...)\n• `pow()` - exponentiation (puissance)',
      en: 'The math module contains many useful mathematical functions:\n\n• `sqrt()` - square root\n• `ceil()` - round up\n• `floor()` - round down\n• `pi` - value of pi (3.14159...)\n• `pow()` - exponentiation (power)'
    },
    codeExample: `import math

# Square root
print(f"√16 = {math.sqrt(16)}")

# Rounding functions
print(f"Ceiling of 4.3: {math.ceil(4.3)}")   # 5
print(f"Floor of 4.8: {math.floor(4.8)}")    # 4

# Pi and calculations
print(f"Pi = {math.pi}")
radius = 3
area = math.pi * math.pow(radius, 2)
print(f"Circle area (r={radius}): {area:.2f}")`,
    exercise: {
      instruction: {
        ht: 'Kalkile sipèfisi yon sèk ak reyon 7. Sèvi ak math.pi ak math.pow.',
        fr: 'Calculez la surface d\'un cercle avec rayon 7. Utilisez math.pi et math.pow.',
        en: 'Calculate the area of a circle with radius 7. Use math.pi and math.pow.'
      },
      startingCode: `import math

# Calculate circle area with radius 7
radius = 7
# Your code here
`,
      solution: `import math

# Calculate circle area with radius 7
radius = 7
area = math.pi * math.pow(radius, 2)

print(f"Circle with radius {radius}:")
print(f"Area = π × r² = {math.pi:.3f} × {radius}² = {area:.2f}")

# Alternative using ** operator
area2 = math.pi * (radius ** 2)
print(f"Alternative calculation: {area2:.2f}")`
    }
  },

  // Card 5: Random Module
  {
    id: 'random-module',
    title: {
      ht: 'Modil Random la',
      fr: 'Le Module Random',
      en: 'The Random Module'
    },
    content: {
      ht: 'Modil random la itilize pou kreye nimewo ak bagay yo aleya:\n\n• `randint(a, b)` - nimewo aleya ant a ak b\n• `choice(list)` - chwazi yon eleman aleya\n• `shuffle(list)` - melanje yon lis\n• `random()` - nimewo aleya ant 0 ak 1',
      fr: 'Le module random est utilisé pour créer des nombres et éléments aléatoires :\n\n• `randint(a, b)` - nombre aléatoire entre a et b\n• `choice(list)` - choisir un élément aléatoire\n• `shuffle(list)` - mélanger une liste\n• `random()` - nombre aléatoire entre 0 et 1',
      en: 'The random module is used to create random numbers and elements:\n\n• `randint(a, b)` - random number between a and b\n• `choice(list)` - choose a random element\n• `shuffle(list)` - shuffle a list\n• `random()` - random number between 0 and 1'
    },
    codeExample: `import random

# Random integer between 1 and 6 (like a dice)
dice_roll = random.randint(1, 6)
print(f"Dice roll: {dice_roll}")

# Random choice from list
colors = ['red', 'blue', 'green', 'yellow']
random_color = random.choice(colors)
print(f"Random color: {random_color}")

# Shuffle a list
numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(f"Shuffled numbers: {numbers}")

# Random float between 0 and 1
random_float = random.random()
print(f"Random float: {random_float:.3f}")`,
    quiz: {
      question: {
        ht: 'Ki fonksyon ki bay yon nimewo aleya ant 1 ak 10?',
        fr: 'Quelle fonction donne un nombre aléatoire entre 1 et 10 ?',
        en: 'What function gives a random number between 1 and 10?'
      },
      options: [
        { ht: 'random.number(1, 10)', fr: 'random.number(1, 10)', en: 'random.number(1, 10)' },
        { ht: 'random.randint(1, 10)', fr: 'random.randint(1, 10)', en: 'random.randint(1, 10)' },
        { ht: 'random.choice(1, 10)', fr: 'random.choice(1, 10)', en: 'random.choice(1, 10)' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'random.randint(a, b) bay yon nimewo antye aleya ant a ak b (yo tou ladan).',
        fr: 'random.randint(a, b) donne un nombre entier aléatoire entre a et b (inclus).',
        en: 'random.randint(a, b) gives a random integer between a and b (inclusive).'
      }
    }
  },

  // Card 6: DateTime Module
  {
    id: 'datetime-module',
    title: {
      ht: 'Modil DateTime',
      fr: 'Le Module DateTime',
      en: 'The DateTime Module'
    },
    content: {
      ht: 'Modil datetime la sèvi ak dat ak lè:\n\n• `datetime.now()` - dat ak lè kounye a\n• `date.today()` - dat jòdi a\n• `strftime()` - fòmate dat ak lè\n• Kalkile diferans ant dat yo',
      fr: 'Le module datetime gère les dates et heures :\n\n• `datetime.now()` - date et heure actuelles\n• `date.today()` - date d\'aujourd\'hui\n• `strftime()` - formater date et heure\n• Calculer différences entre dates',
      en: 'The datetime module handles dates and times:\n\n• `datetime.now()` - current date and time\n• `date.today()` - today\'s date\n• `strftime()` - format date and time\n• Calculate differences between dates'
    },
    codeExample: `import datetime

# Current date and time
now = datetime.datetime.now()
print(f"Now: {now}")

# Today's date
today = datetime.date.today()
print(f"Today: {today}")

# Formatted date
formatted = now.strftime("%A, %B %d, %Y")
print(f"Formatted: {formatted}")

# Time components
print(f"Year: {now.year}")
print(f"Month: {now.month}")
print(f"Day: {now.day}")
print(f"Hour: {now.hour}")`,
    exercise: {
      instruction: {
        ht: 'Kreye yon pwogram ki montre dat ak lè kounye a nan fòma ki bèl.',
        fr: 'Créez un programme qui affiche la date et l\'heure actuelles dans un format élégant.',
        en: 'Create a program that displays the current date and time in a nice format.'
      },
      startingCode: `import datetime

# Display current date and time nicely
`,
      solution: `import datetime

# Get current date and time
now = datetime.datetime.now()

# Display in different formats
print("📅 Current Date & Time Information")
print("=" * 40)
print(f"Full: {now.strftime('%A, %B %d, %Y at %I:%M:%S %p')}")
print(f"Date: {now.strftime('%B %d, %Y')}")
print(f"Time: {now.strftime('%I:%M %p')}")
print(f"Day of week: {now.strftime('%A')}")
print(f"Year: {now.year}")

# Calculate days until New Year
new_year = datetime.date(now.year + 1, 1, 1)
today = datetime.date.today()
days_until = (new_year - today).days
print(f"Days until New Year: {days_until}")`
    }
  },

  // Card 7: Creating Custom Modules
  {
    id: 'custom-modules',
    title: {
      ht: 'Kreye Modil Pèsonèl',
      fr: 'Créer des Modules Personnalisés',
      en: 'Creating Custom Modules'
    },
    content: {
      ht: 'Ou ka kreye modil ou yo menm!\n\n1. Kreye yon fichye ak yon non (egzanp: `mytools.py`)\n2. Ekri fonksyon yo nan li\n3. Enpòte ak itilize nan lòt fichye yo\n\nSa a ede ou òganize kòd ak reyitilize fonksyon yo.',
      fr: 'Vous pouvez créer vos propres modules !\n\n1. Créer un fichier avec un nom (exemple : `mytools.py`)\n2. Écrire des fonctions dedans\n3. Importer et utiliser dans d\'autres fichiers\n\nCela aide à organiser le code et réutiliser les fonctions.',
      en: 'You can create your own modules!\n\n1. Create a file with a name (example: `mytools.py`)\n2. Write functions in it\n3. Import and use in other files\n\nThis helps organize code and reuse functions.'
    },
    codeExample: `# File: mytools.py
def greet(name):
    return f"Hello, {name}! Welcome!"

def calculate_age(birth_year):
    import datetime
    current_year = datetime.date.today().year
    return current_year - birth_year

def format_phone(number):
    # Simple phone formatting
    cleaned = str(number).replace("-", "").replace(" ", "")
    if len(cleaned) == 10:
        return f"({cleaned[:3]}) {cleaned[3:6]}-{cleaned[6:]}"
    return "Invalid phone number"

# File: main.py (using the custom module)
import mytools

print(mytools.greet("Alice"))
print(f"Age: {mytools.calculate_age(1995)}")
print(mytools.format_phone("1234567890"))`,
    quiz: {
      question: {
        ht: 'Ki sa ou bezwen pou kreye yon modil pèsonèl?',
        fr: 'De quoi avez-vous besoin pour créer un module personnalisé ?',
        en: 'What do you need to create a custom module?'
      },
      options: [
        { ht: 'Enstale yon pakè espesyal', fr: 'Installer un package spécial', en: 'Install a special package' },
        { ht: 'Kreye yon fichye .py ak fonksyon yo', fr: 'Créer un fichier .py avec des fonctions', en: 'Create a .py file with functions' },
        { ht: 'Achte yon lisans', fr: 'Acheter une licence', en: 'Buy a license' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Pou kreye yon modil pèsonèl, ou jis bezwen kreye yon fichye .py ak fonksyon yo ak lè sa a enpòte li.',
        fr: 'Pour créer un module personnalisé, vous devez juste créer un fichier .py avec des fonctions puis l\'importer.',
        en: 'To create a custom module, you just need to create a .py file with functions and then import it.'
      }
    }
  },

  // Card 8: What is a Package?
  {
    id: 'packages-intro',
    title: {
      ht: 'Ki sa ki Pakè yo?',
      fr: 'Qu\'est-ce que les Packages ?',
      en: 'What are Packages?'
    },
    content: {
      ht: 'Yon pakè se yon dosye ki gen plizyè modil ak yon fichye `__init__.py`.\n\nPakè yo ede nou òganize anpil modil yo ansanm.\n\nEgzanp: yon pakè "math_utils" ka gen "geometry.py", "algebra.py", ak lòt modil matematik.',
      fr: 'Un package est un dossier contenant plusieurs modules plus un fichier `__init__.py`.\n\nLes packages nous aident à organiser plusieurs modules ensemble.\n\nExemple : un package "math_utils" peut contenir "geometry.py", "algebra.py", et d\'autres modules mathématiques.',
      en: 'A package is a folder containing multiple modules plus an `__init__.py` file.\n\nPackages help us organize multiple modules together.\n\nExample: a "math_utils" package could contain "geometry.py", "algebra.py", and other math modules.'
    },
    codeExample: `# Package structure example:
# myproject/
# │
# ├── math_utils/          # Package folder
# │   ├── __init__.py      # Makes it a package
# │   ├── geometry.py      # Module 1
# │   └── algebra.py       # Module 2
# └── main.py              # Main program

# In geometry.py:
def circle_area(radius):
    import math
    return math.pi * radius ** 2

def rectangle_area(length, width):
    return length * width

# In main.py:
from math_utils.geometry import circle_area, rectangle_area

print(f"Circle area (r=5): {circle_area(5):.2f}")
print(f"Rectangle area (4x6): {rectangle_area(4, 6)}")`,
    quiz: {
      question: {
        ht: 'Ki fichye ki fè yon dosye vin rekonèt kòm pakè Python?',
        fr: 'Quel fichier fait qu\'un dossier est reconnu comme package Python ?',
        en: 'What file makes a folder recognized as a Python package?'
      },
      options: [
        { ht: '__package__.py', fr: '__package__.py', en: '__package__.py' },
        { ht: '__init__.py', fr: '__init__.py', en: '__init__.py' },
        { ht: '__main__.py', fr: '__main__.py', en: '__main__.py' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Fichye __init__.py fè yon dosye vin rekonèt kòm yon pakè Python, menm si li vid.',
        fr: 'Le fichier __init__.py fait qu\'un dossier est reconnu comme package Python, même s\'il est vide.',
        en: 'The __init__.py file makes a folder recognized as a Python package, even if it\'s empty.'
      }
    }
  },

  // Card 9: Practical Module Usage
  {
    id: 'practical-usage',
    title: {
      ht: 'Itilizasyon Pratik Modil yo',
      fr: 'Utilisation Pratique des Modules',
      en: 'Practical Module Usage'
    },
    content: {
      ht: 'Nan pwojè reyèl yo, modil yo ede nou:\n\n• Separe kòd la nan pati ki fè sans\n• Reyitilize fonksyon yo nan plizyè pwojè\n• Kolabore ak moun yo ki ap travay sou menm pwojè a\n• Teste ak debug pi fasil',
      fr: 'Dans les projets réels, les modules nous aident à :\n\n• Séparer le code en parties logiques\n• Réutiliser des fonctions dans plusieurs projets\n• Collaborer avec d\'autres sur le même projet\n• Tester et déboguer plus facilement',
      en: 'In real projects, modules help us to:\n\n• Separate code into logical parts\n• Reuse functions across multiple projects\n• Collaborate with others on the same project\n• Test and debug more easily'
    },
    codeExample: `# Example: Game utilities module
# File: game_utils.py

import random

def roll_dice(sides=6):
    """Roll a dice with specified number of sides"""
    return random.randint(1, sides)

def flip_coin():
    """Flip a coin and return heads or tails"""
    return random.choice(["Heads", "Tails"])

def get_player_choice(options):
    """Get valid player choice from options"""
    while True:
        print("\\nChoose an option:")
        for i, option in enumerate(options, 1):
            print(f"{i}. {option}")
        
        try:
            choice = int(input("Enter choice: ")) - 1
            if 0 <= choice < len(options):
                return options[choice]
            else:
                print("Invalid choice, try again!")
        except ValueError:
            print("Please enter a number!")

# File: dice_game.py (using the module)
import game_utils

print("🎲 Welcome to Dice Game!")
while True:
    input("\\nPress Enter to roll dice...")
    result = game_utils.roll_dice()
    print(f"You rolled: {result}")
    
    again = game_utils.get_player_choice(["Yes", "No"])
    if again == "No":
        break`,
    exercise: {
      instruction: {
        ht: 'Kreye yon modil "converter.py" ak fonksyon ki konvèti mil nan kilomèt.',
        fr: 'Créez un module "converter.py" avec une fonction qui convertit miles en kilomètres.',
        en: 'Create a "converter.py" module with a function that converts miles to kilometers.'
      },
      startingCode: `# File: converter.py
# Create conversion functions

# File: main.py
# Import and use your converter module
`,
      solution: `# File: converter.py
def miles_to_km(miles):
    """Convert miles to kilometers"""
    return miles * 1.60934

def km_to_miles(kilometers):
    """Convert kilometers to miles"""
    return kilometers / 1.60934

def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# File: main.py
import converter

# Test conversions
miles = 100
km = converter.miles_to_km(miles)
print(f"{miles} miles = {km:.2f} kilometers")

kilometers = 50
miles_back = converter.km_to_miles(kilometers)
print(f"{kilometers} km = {miles_back:.2f} miles")

# Temperature conversion
celsius = 25
fahrenheit = converter.celsius_to_fahrenheit(celsius)
print(f"{celsius}°C = {fahrenheit:.1f}°F")`
    }
  },

  // Card 10: Building a Dice Roller
  {
    id: 'dice-roller',
    title: {
      ht: 'Konstrui yon Dice Roller',
      fr: 'Construire un Lanceur de Dés',
      en: 'Building a Dice Roller'
    },
    content: {
      ht: 'Yon dice roller se yon pwogram ki gen fonksyon yo:\n\n• Woule yon oswa plizyè dice yo\n• Montre rezilta yo\n• Konte pwen yo\n• Itilize modil random pou kreye nimewo aleya',
      fr: 'Un lanceur de dés est un programme qui peut :\n\n• Lancer un ou plusieurs dés\n• Afficher les résultats\n• Compter les points\n• Utiliser le module random pour créer des nombres aléatoires',
      en: 'A dice roller is a program that can:\n\n• Roll one or multiple dice\n• Display the results\n• Count the points\n• Use the random module to create random numbers'
    },
    codeExample: `import random

class DiceRoller:
    def __init__(self):
        self.history = []
    
    def roll_dice(self, num_dice=1, sides=6):
        """Roll specified number of dice with given sides"""
        results = []
        for _ in range(num_dice):
            roll = random.randint(1, sides)
            results.append(roll)
        
        # Save to history
        self.history.append({
            'dice': num_dice,
            'sides': sides,
            'results': results,
            'total': sum(results)
        })
        
        return results
    
    def show_results(self, results):
        """Display dice roll results"""
        if len(results) == 1:
            print(f"🎲 You rolled: {results[0]}")
        else:
            print(f"🎲 You rolled: {results}")
            print(f"   Total: {sum(results)}")
    
    def show_history(self):
        """Show roll history"""
        if not self.history:
            print("No rolls yet!")
            return
        
        print("\\n📊 Roll History:")
        for i, roll in enumerate(self.history, 1):
            print(f"{i}. {roll['dice']}d{roll['sides']}: {roll['results']} = {roll['total']}")

# Simple dice roller program
def main():
    roller = DiceRoller()
    
    print("🎲 Welcome to Dice Roller!")
    
    while True:
        print("\\n" + "="*30)
        action = input("Roll dice? (y/n/h for history): ").lower()
        
        if action == 'n':
            break
        elif action == 'h':
            roller.show_history()
        elif action == 'y':
            results = roller.roll_dice()
            roller.show_results(results)
        else:
            print("Invalid choice!")
    
    print("Thanks for playing!")

if __name__ == "__main__":
    main()`,
    quiz: {
      question: {
        ht: 'Ki fonksyon nan modil random ki pi bon pou woule yon dice 6 kote?',
        fr: 'Quelle fonction du module random est la meilleure pour lancer un dé à 6 faces ?',
        en: 'Which function from the random module is best for rolling a 6-sided dice?'
      },
      options: [
        { ht: 'random.choice([1,2,3,4,5,6])', fr: 'random.choice([1,2,3,4,5,6])', en: 'random.choice([1,2,3,4,5,6])' },
        { ht: 'random.randint(1, 6)', fr: 'random.randint(1, 6)', en: 'random.randint(1, 6)' },
        { ht: 'random.random() * 6', fr: 'random.random() * 6', en: 'random.random() * 6' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'random.randint(1, 6) se pi senp ak pi klè pou yon nimewo ant 1 ak 6.',
        fr: 'random.randint(1, 6) est le plus simple et le plus clair pour un nombre entre 1 et 6.',
        en: 'random.randint(1, 6) is the simplest and clearest for a number between 1 and 6.'
      }
    }
  },

  // Card 11: Building a Timer App
  {
    id: 'timer-app',
    title: {
      ht: 'Konstrui yon Timer App',
      fr: 'Construire une App Timer',
      en: 'Building a Timer App'
    },
    content: {
      ht: 'Yon timer app ka:\n\n• Konte depi yon nimewo desann nan 0\n• Montre tan k ap pase a\n• Avèti lè tan an fini\n• Itilize modil time ak datetime',
      fr: 'Une app timer peut :\n\n• Compter à rebours depuis un nombre vers 0\n• Afficher le temps qui passe\n• Alerter quand le temps est fini\n• Utiliser les modules time et datetime',
      en: 'A timer app can:\n\n• Count down from a number to 0\n• Display the passing time\n• Alert when time is up\n• Use time and datetime modules'
    },
    codeExample: `import time
import datetime

class Timer:
    def __init__(self):
        self.is_running = False
        self.start_time = None
    
    def countdown(self, seconds):
        """Countdown timer from seconds to 0"""
        print(f"⏰ Starting countdown: {seconds} seconds")
        
        for i in range(seconds, 0, -1):
            mins, secs = divmod(i, 60)
            time_format = f"{mins:02d}:{secs:02d}"
            print(f"\\r⏱️  {time_format}", end="", flush=True)
            time.sleep(1)
        
        print("\\n🔔 Time's up!")
    
    def stopwatch_start(self):
        """Start a stopwatch"""
        self.start_time = time.time()
        self.is_running = True
        print("⏱️  Stopwatch started! Press Enter to stop...")
    
    def stopwatch_stop(self):
        """Stop the stopwatch and show elapsed time"""
        if not self.is_running:
            print("❌ Stopwatch is not running!")
            return
        
        elapsed = time.time() - self.start_time
        self.is_running = False
        
        mins, secs = divmod(int(elapsed), 60)
        print(f"⏹️  Stopped! Elapsed time: {mins:02d}:{secs:02d}")
        return elapsed
    
    def pomodoro_timer(self, work_minutes=25, break_minutes=5):
        """Pomodoro technique timer"""
        print(f"🍅 Pomodoro: {work_minutes} min work, {break_minutes} min break")
        
        # Work period
        print("💼 Work time started!")
        self.countdown(work_minutes * 60)
        
        # Break period
        print("☕ Break time!")
        self.countdown(break_minutes * 60)
        
        print("✅ Pomodoro session complete!")

def main():
    timer = Timer()
    
    print("⏰ TIMER APPLICATION")
    print("="*30)
    
    while True:
        print("\\nChoose an option:")
        print("1. ⏲️  Countdown timer")
        print("2. ⏱️  Stopwatch")
        print("3. 🍅 Pomodoro timer")
        print("4. 🚪 Exit")
        
        choice = input("\\nEnter choice (1-4): ").strip()
        
        if choice == '1':
            try:
                seconds = int(input("Enter seconds for countdown: "))
                timer.countdown(seconds)
            except ValueError:
                print("❌ Please enter a valid number!")
        
        elif choice == '2':
            timer.stopwatch_start()
            input()  # Wait for user to press Enter
            timer.stopwatch_stop()
        
        elif choice == '3':
            timer.pomodoro_timer()
        
        elif choice == '4':
            print("👋 Goodbye!")
            break
        
        else:
            print("❌ Invalid choice!")

if __name__ == "__main__":
    main()`,
    exercise: {
      instruction: {
        ht: 'Kreye yon timer senp ki konte depi 10 desann nan 0.',
        fr: 'Créez un timer simple qui compte de 10 à 0.',
        en: 'Create a simple timer that counts from 10 down to 0.'
      },
      startingCode: `import time

# Create a simple countdown timer from 10 to 0
`,
      solution: `import time

def simple_countdown(start_seconds=10):
    print(f"⏰ Countdown starting from {start_seconds}...")
    
    for i in range(start_seconds, 0, -1):
        print(f"⏱️  {i}")
        time.sleep(1)
    
    print("🔔 Time's up!")
    print("💥 BOOM!")

# Run the countdown
simple_countdown(10)

# Alternative with formatted display
def fancy_countdown(seconds=10):
    print("🚀 ROCKET LAUNCH COUNTDOWN")
    print("="*30)
    
    for i in range(seconds, 0, -1):
        if i <= 3:
            print(f"🔥 {i}!!!")
        else:
            print(f"⏱️  {i}")
        time.sleep(1)
    
    print("🚀 BLAST OFF! 🚀")

fancy_countdown(5)`
    }
  },

  // Card 12: Module Best Practices
  {
    id: 'module-best-practices',
    title: {
      ht: 'Bon Pratik pou Modil yo',
      fr: 'Bonnes Pratiques pour les Modules',
      en: 'Module Best Practices'
    },
    content: {
      ht: '**Règ yo pou itilize modil yo byen:**\n\n• Bay modil yo non ki klè ak deskriptif\n• Ekri docstring pou fonksyon yo\n• Enpòte sèlman sa ou bezwen\n• Pa re-enpòte modil yo ki deja enpòte\n• Teste fonksyon modil yo yo',
      fr: '**Règles pour bien utiliser les modules :**\n\n• Donner aux modules des noms clairs et descriptifs\n• Écrire des docstrings pour les fonctions\n• Importer seulement ce dont vous avez besoin\n• Ne pas ré-importer des modules déjà importés\n• Tester les fonctions des modules',
      en: '**Rules for using modules well:**\n\n• Give modules clear and descriptive names\n• Write docstrings for functions\n• Import only what you need\n• Don\'t re-import already imported modules\n• Test module functions'
    },
    codeExample: `# Good practices example

# File: math_helpers.py
"""
Math helper functions for common calculations.
This module provides utilities for geometry and basic math.
"""

import math

def circle_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius (float): The radius of the circle
    
    Returns:
        float: The area of the circle
    
    Example:
        >>> circle_area(5)
        78.54
    """
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return math.pi * radius ** 2

def triangle_area(base, height):
    """Calculate triangle area given base and height."""
    if base < 0 or height < 0:
        raise ValueError("Base and height must be positive")
    return 0.5 * base * height

def hypotenuse(a, b):
    """Calculate hypotenuse using Pythagorean theorem."""
    return math.sqrt(a**2 + b**2)

# File: main.py (using the module properly)
from math_helpers import circle_area, triangle_area
# Import only what we need

def main():
    # Test our functions
    print(f"Circle area (r=5): {circle_area(5):.2f}")
    print(f"Triangle area (3x4): {triangle_area(3, 4)}")

if __name__ == "__main__":
    main()`,
    quiz: {
      question: {
        ht: 'Ki sa ki pi bon: enpòte tout modil la oswa sèlman fonksyon ou bezwen yo?',
        fr: 'Qu\'est-ce qui est mieux : importer tout le module ou seulement les fonctions nécessaires ?',
        en: 'What\'s better: importing the whole module or only the functions you need?'
      },
      options: [
        { ht: 'Enpòte tout modil la toujou', fr: 'Importer tout le module toujours', en: 'Always import the whole module' },
        { ht: 'Enpòte sèlman sa ou bezwen', fr: 'Importer seulement ce dont vous avez besoin', en: 'Import only what you need' },
        { ht: 'Pa gen diferans', fr: 'Ça n\'a pas d\'importance', en: 'It doesn\'t matter' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Pi bon enpòte sèlman sa ou bezwen - sa fè kòd la pi klè ak pi vit, ak evite konfli yo.',
        fr: 'Il est préférable d\'importer seulement ce dont vous avez besoin - cela rend le code plus clair, plus rapide, et évite les conflits.',
        en: 'It\'s better to import only what you need - it makes code clearer, faster, and avoids conflicts.'
      }
    }
  },

  // Mini Project Card
  {
    id: 'dice-roller-timer',
    title: {
      ht: 'Mini Pwojè: Dice Roller oswa Timer',
      fr: 'Mini Projet: Lanceur de Dés ou Timer',
      en: 'Mini Project: Dice Roller or Timer'
    },
    content: {
      ht: 'Kreye yon aplikasyon ki ka woule dice yo oswa fè countdown timer!',
      fr: 'Créez une application qui peut lancer des dés ou faire un minuteur !',
      en: 'Create an application that can roll dice or make a countdown timer!'
    },
    miniProject: {
      title: {
        ht: 'Dice Roller ak Timer App',
        fr: 'App Lanceur de Dés et Timer',
        en: 'Dice Roller & Timer App'
      },
      description: {
        ht: 'Kreye yon aplikasyon ki gen de fonksyon: woule dice yo ak timer pou konte tan. Sèvi ak modil random ak time.',
        fr: 'Créez une application avec deux fonctions : lancer des dés et un timer pour compter le temps. Utilisez les modules random et time.',
        en: 'Create an application with two functions: rolling dice and a timer to count time. Use random and time modules.'
      },
      requirements: {
        ht: [
          'Dice Roller ak diferan kantite dice ak kote',
          'Countdown Timer ak notifikasyon',
          'Stopwatch pou mezire tan',
          'Menu pou navige ant fonksyon yo',
          'Istorik woule dice yo ak tan yo',
          'Interface itilizatè ki bèl ak emoji'
        ],
        fr: [
          'Lanceur de dés avec différents nombres de dés et faces',
          'Minuteur compte à rebours avec notification',
          'Chronomètre pour mesurer le temps',
          'Menu pour naviguer entre les fonctions',
          'Historique des lancers de dés et temps',
          'Interface utilisateur belle avec emojis'
        ],
        en: [
          'Dice roller with different numbers of dice and sides',
          'Countdown timer with notification',
          'Stopwatch to measure time',
          'Menu to navigate between functions',
          'History of dice rolls and times',
          'Beautiful user interface with emojis'
        ]
      },
      starterCode: `# Dice Roller & Timer Application
import random
import time
import datetime

class DiceRollerTimer:
    def __init__(self):
        self.roll_history = []
        self.timer_history = []
    
    def main_menu(self):
        """Display main menu and handle user choice"""
        print("\\n🎯 DICE ROLLER & TIMER APP")
        print("=" * 40)
        print("1. 🎲 Dice Roller")
        print("2. ⏰ Countdown Timer") 
        print("3. ⏱️  Stopwatch")
        print("4. 📊 Show History")
        print("5. 🚪 Exit")
        
        # TODO: Get user choice and call appropriate method
        pass
    
    def roll_dice(self):
        """Roll dice with user-specified options"""
        # TODO: Ask for number of dice and sides
        # TODO: Roll dice and show results
        # TODO: Save to history
        pass
    
    def countdown_timer(self):
        """Countdown timer functionality"""
        # TODO: Get seconds from user
        # TODO: Count down and display
        # TODO: Alert when finished
        pass
    
    def stopwatch(self):
        """Stopwatch functionality"""
        # TODO: Start timing when user presses enter
        # TODO: Stop when user presses enter again
        # TODO: Show elapsed time
        pass
    
    def show_history(self):
        """Display history of rolls and timers"""
        # TODO: Show roll history
        # TODO: Show timer history
        pass

# Start the application
app = DiceRollerTimer()
# TODO: Call main menu in a loop`,
      sampleSolution: `# Complete Dice Roller & Timer Application
import random
import time
import datetime

class DiceRollerTimer:
    def __init__(self):
        self.roll_history = []
        self.timer_history = []
    
    def main_menu(self):
        """Display main menu and handle user choice"""
        while True:
            print("\\n🎯 DICE ROLLER & TIMER APP")
            print("=" * 40)
            print("1. 🎲 Dice Roller")
            print("2. ⏰ Countdown Timer") 
            print("3. ⏱️  Stopwatch")
            print("4. 📊 Show History")
            print("5. 🚪 Exit")
            
            choice = input("\\nChoose option (1-5): ").strip()
            
            if choice == '1':
                self.roll_dice()
            elif choice == '2':
                self.countdown_timer()
            elif choice == '3':
                self.stopwatch()
            elif choice == '4':
                self.show_history()
            elif choice == '5':
                print("\\n👋 Thanks for using the app!")
                break
            else:
                print("❌ Invalid choice! Please enter 1-5.")
    
    def roll_dice(self):
        """Roll dice with user-specified options"""
        print("\\n🎲 DICE ROLLER")
        print("=" * 20)
        
        try:
            num_dice = int(input("How many dice? (1-10): "))
            if not 1 <= num_dice <= 10:
                print("❌ Please enter 1-10 dice")
                return
            
            sides = int(input("How many sides per die? (4,6,8,10,12,20): "))
            if sides not in [4, 6, 8, 10, 12, 20]:
                print("❌ Please choose 4,6,8,10,12, or 20 sides")
                return
            
            # Roll the dice
            results = []
            for i in range(num_dice):
                roll = random.randint(1, sides)
                results.append(roll)
            
            # Display results
            print(f"\\n🎲 Rolling {num_dice}d{sides}...")
            time.sleep(1)  # Dramatic pause
            
            if len(results) == 1:
                print(f"Result: {results[0]}")
            else:
                print(f"Results: {results}")
                print(f"Total: {sum(results)}")
            
            # Save to history
            timestamp = datetime.datetime.now().strftime("%H:%M:%S")
            self.roll_history.append({
                'time': timestamp,
                'dice': f"{num_dice}d{sides}",
                'results': results,
                'total': sum(results)
            })
            
            print(f"✅ Saved to history at {timestamp}")
            
        except ValueError:
            print("❌ Please enter valid numbers")
    
    def countdown_timer(self):
        """Countdown timer functionality"""
        print("\\n⏰ COUNTDOWN TIMER")
        print("=" * 20)
        
        try:
            seconds = int(input("Enter seconds for countdown: "))
            if seconds <= 0:
                print("❌ Please enter a positive number")
                return
            
            print(f"\\n⏰ Starting countdown: {seconds} seconds")
            start_time = datetime.datetime.now()
            
            for i in range(seconds, 0, -1):
                mins, secs = divmod(i, 60)
                time_format = f"{mins:02d}:{secs:02d}"
                
                if i <= 3:
                    print(f"\\r🔥 {time_format} 🔥", end="", flush=True)
                elif i <= 10:
                    print(f"\\r⚠️  {time_format} ⚠️ ", end="", flush=True)
                else:
                    print(f"\\r⏱️  {time_format}", end="", flush=True)
                
                time.sleep(1)
            
            print("\\n\\n🔔 TIME'S UP! 🔔")
            print("💥 DING DING DING! 💥")
            
            # Save to history
            end_time = datetime.datetime.now()
            self.timer_history.append({
                'type': 'countdown',
                'start': start_time.strftime("%H:%M:%S"),
                'duration': seconds,
                'end': end_time.strftime("%H:%M:%S")
            })
            
        except ValueError:
            print("❌ Please enter a valid number")
    
    def stopwatch(self):
        """Stopwatch functionality"""
        print("\\n⏱️  STOPWATCH")
        print("=" * 15)
        print("Press ENTER to start...")
        input()
        
        start_time = time.time()
        start_datetime = datetime.datetime.now()
        print("⏱️  Stopwatch started! Press ENTER to stop...")
        
        input()  # Wait for user to stop
        
        end_time = time.time()
        end_datetime = datetime.datetime.now()
        elapsed = end_time - start_time
        
        mins, secs = divmod(int(elapsed), 60)
        millisecs = int((elapsed % 1) * 1000)
        
        print(f"\\n⏹️  STOPPED!")
        print(f"Time: {mins:02d}:{secs:02d}.{millisecs:03d}")
        
        # Save to history
        self.timer_history.append({
            'type': 'stopwatch',
            'start': start_datetime.strftime("%H:%M:%S"),
            'elapsed': f"{mins:02d}:{secs:02d}.{millisecs:03d}",
            'end': end_datetime.strftime("%H:%M:%S")
        })
    
    def show_history(self):
        """Display history of rolls and timers"""
        print("\\n📊 HISTORY")
        print("=" * 30)
        
        if not self.roll_history and not self.timer_history:
            print("📭 No history yet! Use the app to create some.")
            return
        
        # Show dice roll history
        if self.roll_history:
            print("\\n🎲 DICE ROLLS:")
            print("-" * 25)
            for i, roll in enumerate(self.roll_history[-5:], 1):  # Last 5 rolls
                print(f"{i}. {roll['time']} - {roll['dice']}: {roll['results']} = {roll['total']}")
        
        # Show timer history  
        if self.timer_history:
            print("\\n⏰ TIMERS:")
            print("-" * 25)
            for i, timer in enumerate(self.timer_history[-5:], 1):  # Last 5 timers
                if timer['type'] == 'countdown':
                    print(f"{i}. {timer['start']} - Countdown: {timer['duration']}s")
                else:
                    print(f"{i}. {timer['start']} - Stopwatch: {timer['elapsed']}")
        
        if len(self.roll_history) > 5 or len(self.timer_history) > 5:
            print("\\n(Showing last 5 entries only)")

def main():
    """Main application entry point"""
    print("🎯 Welcome to Dice Roller & Timer!")
    print("Built with Python modules: random, time, datetime")
    
    app = DiceRollerTimer()
    app.main_menu()

if __name__ == "__main__":
    main()`
    }
  }
];

// Lesson object that matches the structure expected by PythonCardLessonPlayer
export const pythonWeek12Lesson = {
  title: {
    ht: 'Modil ak Pakè yo',
    fr: 'Modules et Packages',
    en: 'Modules & Packages'
  },
  cards: pythonWeek12Cards,
  miniProject: pythonWeek12Cards.find(card => card.id === 'dice-roller-timer')?.miniProject
};