// Python Week 8: Midterm Project & Review - Comprehensive Assessment
export interface LessonCard {
  id: string;
  type: 'intro' | 'concept' | 'code' | 'practice' | 'tip' | 'quiz' | 'project' | 'review';
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
}

export const pythonWeek8Lesson = {
  weekNumber: 8,
  title: {
    ht: "Semèn 8: Midterm Project ak Review",
    fr: "Semaine 8: Projet de Mi-Session et Révision",
    en: "Week 8: Midterm Project & Review"
  },
  description: {
    ht: "Revize tout sa nou aprann ak konstwi yon Student Grade Tracker.",
    fr: "Révisez tout ce que nous avons appris et construisez un Tracker de Notes d'Étudiants.",
    en: "Review everything we've learned and build a Student Grade Tracker."
  },
  totalCards: 12,
  cards: [
    {
      id: "week8-intro",
      type: "intro" as const,
      title: {
        ht: "Byenvini nan Semèn 8: Midterm Review",
        fr: "Bienvenue à la Semaine 8: Révision de Mi-Session",
        en: "Welcome to Week 8: Midterm Review"
      },
      content: {
        ht: "Semèn sa a nou pral revize tout konsèp yo nou aprann yo depi kòmanse man. Nou pral konbine variables, conditionals, loops, fonksyon ak lists pou konstwi yon Student Grade Tracker ki konplè.",
        fr: "Cette semaine, nous réviserons tous les concepts que nous avons appris depuis le début. Nous combinerons variables, conditions, boucles, fonctions et listes pour construire un Tracker de Notes d'Étudiants complet.",
        en: "This week we'll review all the concepts we've learned from the beginning. We'll combine variables, conditionals, loops, functions, and lists to build a complete Student Grade Tracker."
      }
    },
    {
      id: "what-weve-learned",
      type: "review" as const,
      title: {
        ht: "Sa nou aprann yo",
        fr: "Ce que nous avons appris",
        en: "What We've Learned"
      },
      content: {
        ht: "Gade sou tout konsèp yo nou kouvri yo: Variables ak Data Types (depo ak itilize nimewo, strings, booleans), Conditionals (itilize if, elif, ak else pou fè desizyon), Loops (repete aksyon yo ak for ak while), Fonksyon yo (blòk logik ki ka itilize plizyè fwa ak def), Lists ak Tuples (depo plizyè valè ak fè boucles sou yo), String Methods (.upper(), .lower(), .title(), elatriye).",
        fr: "Regardons tous les concepts que nous avons couverts: Variables et Types de Données (stocker et utiliser nombres, chaînes, booléens), Conditions (utiliser if, elif, et else pour prendre des décisions), Boucles (répéter des actions avec for et while), Fonctions (blocs de logique réutilisables avec def), Listes et Tuples (stocker plusieurs valeurs et boucler dessus), Méthodes de Chaînes (.upper(), .lower(), .title(), etc.).",
        en: "Let's look at all the concepts we've covered: Variables & Data Types (store and use numbers, strings, booleans), Conditionals (use if, elif, and else to make decisions), Loops (repeat actions with for and while), Functions (reusable blocks of logic using def), Lists & Tuples (store multiple values and loop through them), String Methods (.upper(), .lower(), .title(), etc.)."
      },
      code: {
        initial: `# Review: All core concepts together
name = "Alice"                    # Variables
grades = [85, 90, 88]            # Lists

def calculate_average(scores):   # Functions
    return sum(scores) / len(scores)

avg = calculate_average(grades)

if avg >= 90:                    # Conditionals
    letter = "A"
elif avg >= 80:
    letter = "B"
else:
    letter = "C"

print(f"Student: {name.title()}")  # String methods
print(f"Average: {avg:.2f}")
print(f"Grade: {letter}")`,
        output: `Student: Alice
Average: 87.67
Grade: B`
      }
    },
    {
      id: "grade-tracker-overview",
      type: "project" as const,
      title: {
        ht: "Student Grade Tracker: Vue d'ensemble",
        fr: "Tracker de Notes: Vue d'ensemble",
        en: "Student Grade Tracker: Overview"
      },
      content: {
        ht: "Nou pral konstwi yon sistèm pratik ki kolekte non ak nòt yo nan elèv yo, kalkile mwayèn yo, ak detèmine nòt lèt yo. Pwogram nan ap itilize fonksyon yo, loops, conditionals, ak lists yo.",
        fr: "Nous allons construire un système pratique qui collecte les noms et notes des étudiants, calcule leurs moyennes, et détermine les notes en lettres. Le programme utilisera les fonctions, boucles, conditions, et listes.",
        en: "We'll build a practical system that collects student names and grades, calculates their averages, and determines letter grades. The program will use functions, loops, conditionals, and lists."
      },
      code: {
        initial: `# Student Grade Tracker - Core Functions

def calculate_average(grades):
    """Calculate the average of a list of grades."""
    return sum(grades) / len(grades)

def get_letter_grade(avg):
    """Convert numeric average to letter grade."""
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"

# Test the functions
test_grades = [85, 90, 88]
avg = calculate_average(test_grades)
letter = get_letter_grade(avg)

print(f"Test grades: {test_grades}")
print(f"Average: {avg:.2f}")
print(f"Letter grade: {letter}")`,
        output: `Test grades: [85, 90, 88]
Average: 87.67
Letter grade: B`
      }
    },
    {
      id: "input-validation",
      type: "concept" as const,
      title: {
        ht: "Input Validation",
        fr: "Validation des Entrées",
        en: "Input Validation"
      },
      content: {
        ht: "Lè nou aksepte input nan itilizatè yo, nou toujou dwe valide yo pou evite erè yo. Nou ka itilize try/except pou jesyon erè yo ak loops pou mande ankò lè input la pa bon.",
        fr: "Quand nous acceptons des entrées des utilisateurs, nous devons toujours les valider pour éviter les erreurs. Nous pouvons utiliser try/except pour la gestion d'erreurs et des boucles pour redemander quand l'entrée n'est pas valide.",
        en: "When we accept user input, we should always validate it to prevent errors. We can use try/except for error handling and loops to ask again when input is invalid."
      },
      code: {
        initial: `def get_valid_grade():
    """Get a valid grade between 0 and 100."""
    while True:
        try:
            grade = float(input("Enter grade (0-100): "))
            if 0 <= grade <= 100:
                return grade
            else:
                print("Grade must be between 0 and 100!")
        except ValueError:
            print("Please enter a valid number!")

def get_student_name():
    """Get a non-empty student name."""
    while True:
        name = input("Enter student name: ").strip()
        if name:
            return name.title()
        else:
            print("Name cannot be empty!")

# Test input validation
print("Testing input validation:")
name = get_student_name()
grade = get_valid_grade()
print(f"Valid input: {name}, {grade}")`,
        output: `Testing input validation:
Enter student name: alice
Enter grade (0-100): 85
Valid input: Alice, 85.0`
      }
    },
    {
      id: "complete-grade-tracker",
      type: "project" as const,
      title: {
        ht: "Grade Tracker Konplè",
        fr: "Tracker de Notes Complet",
        en: "Complete Grade Tracker"
      },
      content: {
        ht: "Isit la se yon egzanp konplè nan Student Grade Tracker ki konbine tout konsèp yo nou aprann yo. Li aksepte plizyè elèv, kalkile mwayèn yo, ak montre yon rapò ki fòmate.",
        fr: "Voici un exemple complet du Student Grade Tracker qui combine tous les concepts que nous avons appris. Il accepte plusieurs étudiants, calcule les moyennes, et affiche un rapport formaté.",
        en: "Here's a complete example of the Student Grade Tracker that combines all the concepts we've learned. It accepts multiple students, calculates averages, and displays a formatted report."
      },
      code: {
        initial: `def calculate_average(grades):
    return sum(grades) / len(grades)

def get_letter_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"

# Main program
students = []
print("Welcome to the Student Grade Tracker!")
num_students = int(input("How many students? "))

for _ in range(num_students):
    name = input("Enter student name: ")
    grades = []

    for i in range(3):  # 3 grades per student
        grade = float(input(f"Enter grade #{i+1} for {name}: "))
        grades.append(grade)

    avg = calculate_average(grades)
    letter = get_letter_grade(avg)

    students.append((name, avg, letter))
    print(f"{name}'s average: {avg:.2f} → Grade: {letter}")
    print("-" * 30)

print("\\nFinal Report:")
for name, avg, letter in students:
    print(f"{name:<10} | Avg: {avg:.2f} | Grade: {letter}")`,
        output: `Welcome to the Student Grade Tracker!
How many students? 2
Enter student name: Ana
Enter grade #1 for Ana: 85
Enter grade #2 for Ana: 90
Enter grade #3 for Ana: 88
Ana's average: 87.67 → Grade: B
------------------------------
Enter student name: Ralph
Enter grade #1 for Ralph: 92
Enter grade #2 for Ralph: 95
Enter grade #3 for Ralph: 91
Ralph's average: 92.67 → Grade: A
------------------------------

Final Report:
Ana        | Avg: 87.67 | Grade: B
Ralph      | Avg: 92.67 | Grade: A`
      }
    },
    {
      id: "data-structures-review",
      type: "review" as const,
      title: {
        ht: "Review: Data Structures",
        fr: "Révision: Structures de Données",
        en: "Review: Data Structures"
      },
      content: {
        ht: "Nou aprann kijan pou itilize Lists (pou depo ak modifye koleksyon yo), Tuples (pou depo done ki pa chanje), ak Strings (pou manipile tèks). Yo chak gen metòd ak operasyon ki diferan.",
        fr: "Nous avons appris comment utiliser les Listes (pour stocker et modifier des collections), les Tuples (pour stocker des données immuables), et les Chaînes (pour manipuler du texte). Chacune a des méthodes et opérations différentes.",
        en: "We learned how to use Lists (for storing and modifying collections), Tuples (for storing immutable data), and Strings (for manipulating text). Each has different methods and operations."
      },
      code: {
        initial: `# Data structures comparison
student_list = ["Ana", "Ralph", "Maria"]  # List - mutable
student_tuple = ("Ana", "Ralph", "Maria")  # Tuple - immutable
student_string = "Ana Ralph Maria"         # String - immutable

print("List operations:")
student_list.append("John")
print("After append:", student_list)

print("\\nTuple operations:")
print("First student:", student_tuple[0])
print("All students:", student_tuple)

print("\\nString operations:")
names = student_string.split()
print("Split names:", names)
print("Upper case:", student_string.upper())
print("Title case:", student_string.title())

# List comprehension (advanced)
grades = [85, 90, 78, 92, 88]
passing_grades = [g for g in grades if g >= 80]
print("\\nPassing grades:", passing_grades)`,
        output: `List operations:
After append: ['Ana', 'Ralph', 'Maria', 'John']

Tuple operations:
First student: Ana
All students: ('Ana', 'Ralph', 'Maria')

String operations:
Split names: ['Ana', 'Ralph', 'Maria']
Upper case: ANA RALPH MARIA
Title case: Ana Ralph Maria

Passing grades: [85, 90, 92, 88]`
      }
    },
    {
      id: "control-flow-review",
      type: "review" as const,
      title: {
        ht: "Review: Control Flow",
        fr: "Révision: Flux de Contrôle",
        en: "Review: Control Flow"
      },
      content: {
        ht: "Control flow se kijan pwogram an deside kisa pou l fè ak nan ki òd. Nou aprann if/elif/else pou desizyon yo, for loops pou repete yon kantite konnen, ak while loops pou repete jiskaske yon kondisyon rive.",
        fr: "Le flux de contrôle est comment le programme décide quoi faire et dans quel ordre. Nous avons appris if/elif/else pour les décisions, les boucles for pour répéter un nombre connu de fois, et les boucles while pour répéter jusqu'à ce qu'une condition soit remplie.",
        en: "Control flow is how the program decides what to do and in what order. We learned if/elif/else for decisions, for loops to repeat a known number of times, and while loops to repeat until a condition is met."
      },
      code: {
        initial: `# Control flow examples
grades = [95, 82, 67, 91, 74]

print("Grade Analysis:")
print("=" * 20)

# Conditionals for each grade
for i, grade in enumerate(grades, 1):
    print(f"Student {i}: {grade} - ", end="")
    
    if grade >= 90:
        print("Excellent!")
    elif grade >= 80:
        print("Good")
    elif grade >= 70:
        print("Satisfactory")
    else:
        print("Needs improvement")

# Count statistics
excellent = sum(1 for g in grades if g >= 90)
good = sum(1 for g in grades if 80 <= g < 90)
satisfactory = sum(1 for g in grades if 70 <= g < 80)
needs_work = sum(1 for g in grades if g < 70)

print(f"\\nStatistics:")
print(f"Excellent: {excellent}")
print(f"Good: {good}")
print(f"Satisfactory: {satisfactory}")
print(f"Needs improvement: {needs_work}")

# While loop example
total = 0
i = 0
while i < len(grades):
    total += grades[i]
    i += 1

average = total / len(grades)
print(f"\\nClass average: {average:.2f}")`,
        output: `Grade Analysis:
====================
Student 1: 95 - Excellent!
Student 2: 82 - Good
Student 3: 67 - Needs improvement
Student 4: 91 - Excellent!
Student 5: 74 - Satisfactory

Statistics:
Excellent: 2
Good: 1
Satisfactory: 1
Needs improvement: 1

Class average: 81.80`
      }
    },
    {
      id: "practice-exercises",
      type: "practice" as const,
      title: {
        ht: "Egzèsis Pratik",
        fr: "Exercices Pratiques",
        en: "Practice Exercises"
      },
      content: {
        ht: "Pratike ak egzèsis sa yo pou konsòlide konesans ou: 1) Modifye pwogram nan pou l aksepte 5 nòt pou chak elèv, 2) Ajoute logik pou konte konbyen elèv ki pase (mwayèn ≥ 70), 3) Klase lis elèv yo selon mwayèn yo anvan w enprime rapò a, 4) Kreye yon fonksyon ki kalkile nòt pi wo ak pi ba nan klas la.",
        fr: "Pratiquez avec ces exercices pour consolider vos connaissances: 1) Modifiez le programme pour accepter 5 notes par étudiant, 2) Ajoutez une logique pour compter combien d'étudiants passent (moyenne ≥ 70), 3) Triez la liste des étudiants par moyenne avant d'imprimer le rapport, 4) Créez une fonction qui calcule la note la plus haute et la plus basse de la classe.",
        en: "Practice with these exercises to consolidate your knowledge: 1) Modify the program to accept 5 grades per student, 2) Add logic to count how many students pass (average ≥ 70), 3) Sort the list of students by average before printing the report, 4) Create a function that calculates the highest and lowest grade in the class."
      },
      code: {
        initial: `# Exercise 1: Enhanced Grade Tracker
def calculate_class_stats(students):
    """Calculate class statistics."""
    if not students:
        return None
    
    averages = [avg for _, avg, _ in students]
    highest = max(averages)
    lowest = min(averages)
    class_avg = sum(averages) / len(averages)
    passed = sum(1 for avg in averages if avg >= 70)
    
    return {
        'highest': highest,
        'lowest': lowest,
        'class_average': class_avg,
        'students_passed': passed,
        'total_students': len(students)
    }

# Exercise 2: Sort students by grade
def sort_students_by_grade(students):
    """Sort students by average grade (highest first)."""
    return sorted(students, key=lambda student: student[1], reverse=True)

# Test with sample data
students = [
    ("Ana", 87.67, "B"),
    ("Ralph", 92.67, "A"),
    ("Maria", 76.50, "C"),
    ("John", 68.33, "D")
]

stats = calculate_class_stats(students)
sorted_students = sort_students_by_grade(students)

print("Class Statistics:")
print(f"Highest average: {stats['highest']:.2f}")
print(f"Lowest average: {stats['lowest']:.2f}")
print(f"Class average: {stats['class_average']:.2f}")
print(f"Students passed: {stats['students_passed']}/{stats['total_students']}")

print("\\nRanked Students:")
for i, (name, avg, letter) in enumerate(sorted_students, 1):
    print(f"{i}. {name:<8} | {avg:.2f} | {letter}")`,
        output: `Class Statistics:
Highest average: 92.67
Lowest average: 68.33
Class average: 81.29
Students passed: 3/4

Ranked Students:
1. Ralph    | 92.67 | A
2. Ana      | 87.67 | B
3. Maria    | 76.50 | C
4. John     | 68.33 | D`
      }
    },
    {
      id: "debugging-tips",
      type: "tip" as const,
      title: {
        ht: "Konsèy pou Debugging",
        fr: "Conseils de Débogage",
        en: "Debugging Tips"
      },
      content: {
        ht: "Lè ou gen pwoblèm nan kòd ou a, swiv etap sa yo: 1) Li mesaj erè a ak atansyon, 2) Tcheke sintaks ou (parantèz, virgil, colon), 3) Itilize print() pou gade valè variables yo, 4) Teste pati yo nan kòd ou a yon pa yon, 5) Verifye si ou rele fonksyon yo ak bon paramèt yo.",
        fr: "Quand vous avez des problèmes dans votre code, suivez ces étapes: 1) Lisez le message d'erreur attentivement, 2) Vérifiez votre syntaxe (parenthèses, virgules, deux-points), 3) Utilisez print() pour voir les valeurs des variables, 4) Testez les parties de votre code une par une, 5) Vérifiez si vous appelez les fonctions avec les bons paramètres.",
        en: "When you have problems in your code, follow these steps: 1) Read the error message carefully, 2) Check your syntax (parentheses, commas, colons), 3) Use print() to see variable values, 4) Test parts of your code one by one, 5) Verify you're calling functions with correct parameters."
      },
      code: {
        initial: `# Common debugging techniques

def debug_example():
    """Example showing debugging techniques."""
    print("=== DEBUGGING EXAMPLE ===")
    
    # 1. Use print statements to track execution
    print("Starting calculation...")
    
    grades = [85, 90, 88, 76]
    print(f"Grades list: {grades}")
    print(f"Number of grades: {len(grades)}")
    
    # 2. Check intermediate results
    total = sum(grades)
    print(f"Sum of grades: {total}")
    
    average = total / len(grades)
    print(f"Calculated average: {average}")
    
    # 3. Validate assumptions
    if len(grades) > 0:
        print("✓ Grades list is not empty")
    else:
        print("✗ ERROR: Empty grades list!")
        return None
    
    # 4. Test edge cases
    test_cases = [
        ([100], 100.0),    # Single grade
        ([0], 0.0),        # Minimum grade
        ([50, 60], 55.0)   # Two grades
    ]
    
    print("\\nTesting edge cases:")
    for test_grades, expected in test_cases:
        result = sum(test_grades) / len(test_grades)
        status = "✓" if result == expected else "✗"
        print(f"{status} {test_grades} → {result} (expected {expected})")
    
    return average

# Run the debug example
result = debug_example()
print(f"\\nFinal result: {result}")`,
        output: `=== DEBUGGING EXAMPLE ===
Starting calculation...
Grades list: [85, 90, 88, 76]
Number of grades: 4
Sum of grades: 339
Calculated average: 84.75
✓ Grades list is not empty

Testing edge cases:
✓ [100] → 100.0 (expected 100.0)
✓ [0] → 0.0 (expected 0.0)
✓ [50, 60] → 55.0 (expected 55.0)

Final result: 84.75`
      }
    },
    {
      id: "advanced-features",
      type: "concept" as const,
      title: {
        ht: "Karakteristik Avanse",
        fr: "Fonctionnalités Avancées",
        en: "Advanced Features"
      },
      content: {
        ht: "Pou elèv yo ki pi avanse, nou ka ajoute karakteristik sa yo: File I/O pou sove ak chaje done yo, Error handling ak try/except, List comprehensions pou kòd ki pi kort, ak lambda functions pou operasyon senp yo.",
        fr: "Pour les étudiants plus avancés, nous pouvons ajouter ces fonctionnalités: Lecture/écriture de fichiers pour sauver et charger des données, Gestion d'erreurs avec try/except, Compréhensions de listes pour un code plus court, et fonctions lambda pour des opérations simples.",
        en: "For more advanced students, we can add these features: File I/O for saving and loading data, Error handling with try/except, List comprehensions for shorter code, and lambda functions for simple operations."
      },
      code: {
        initial: `# Advanced features preview

# 1. List comprehensions
grades = [85, 90, 88, 76, 92, 78, 85]
high_grades = [g for g in grades if g >= 85]
grade_letters = ['A' if g >= 90 else 'B' if g >= 80 else 'C' for g in grades]

print("List comprehensions:")
print(f"High grades: {high_grades}")
print(f"Letter grades: {grade_letters}")

# 2. Lambda functions and built-ins
students = [("Ana", 87), ("Ralph", 92), ("Maria", 76)]

# Sort by grade using lambda
by_grade = sorted(students, key=lambda x: x[1], reverse=True)
print(f"\\nSorted by grade: {by_grade}")

# Find max and min using key
highest_student = max(students, key=lambda x: x[1])
lowest_student = min(students, key=lambda x: x[1])
print(f"Highest: {highest_student}")
print(f"Lowest: {lowest_student}")

# 3. Dictionary for more complex data
student_records = {
    'Ana': {'grades': [85, 90, 88], 'email': 'ana@school.com'},
    'Ralph': {'grades': [92, 95, 91], 'email': 'ralph@school.com'}
}

print("\\nDictionary structure:")
for name, info in student_records.items():
    avg = sum(info['grades']) / len(info['grades'])
    print(f"{name}: {avg:.1f} average - {info['email']}")

# 4. Error handling preview
try:
    result = 10 / 0  # This will cause an error
except ZeroDivisionError:
    print("\\nCaught division by zero error!")
    result = "undefined"

print(f"Division result: {result}")`,
        output: `List comprehensions:
High grades: [85, 90, 88, 92, 85]
Letter grades: ['B', 'A', 'B', 'C', 'A', 'C', 'B']

Sorted by grade: [('Ralph', 92), ('Ana', 87), ('Maria', 76)]
Highest: ('Ralph', 92)
Lowest: ('Maria', 76)

Dictionary structure:
Ana: 87.7 average - ana@school.com
Ralph: 92.7 average - ralph@school.com

Caught division by zero error!
Division result: undefined`
      }
    },
    {
      id: "midterm-quiz",
      type: "quiz" as const,
      title: {
        ht: "Midterm Quiz",
        fr: "Quiz de Mi-Session",
        en: "Midterm Quiz"
      },
      content: {
        ht: "Tès tout konesans ou sou Python ak quiz konplè sa a. Li kouvri variables, conditionals, loops, fonksyon yo, ak lists.",
        fr: "Testez toutes vos connaissances Python avec ce quiz complet. Il couvre les variables, conditions, boucles, fonctions, et listes.",
        en: "Test all your Python knowledge with this comprehensive quiz. It covers variables, conditionals, loops, functions, and lists."
      },
      code: {
        initial: `# MIDTERM QUIZ - Answer each question

# Q1: What keyword defines a function?
# A) function  B) def  C) define  D) create
# Answer: B) def

# Q2: What does this code print?
x = [1, 2, 3]
result = sum(x) / len(x)
# A) 6  B) 2.0  C) 3  D) Error
# Answer: B) 2.0

# Q3: What does this condition check?
if avg >= 90:
    grade = "A"
# Answer: If average is greater than or equal to 90

# Q4: Which creates an empty list?
# A) my_list = {}  B) my_list = []  C) my_list = ()  D) my_list = ""
# Answer: B) my_list = []

# Q5: What does range(3) produce?
for i in range(3):
    print(i)
# Answer: 0, 1, 2 (each on a new line)

# Q6: What's the output?
def greet(name="World"):
    return f"Hello, {name}!"

print(greet())
print(greet("Python"))
# Answer: "Hello, World!" and "Hello, Python!"

# Q7: What happens to x inside the function?
x = 10
def change_x():
    x = 5
    print("Inside:", x)

change_x()
print("Outside:", x)
# Answer: Inside: 5, Outside: 10 (local vs global scope)

# Q8: Complete this function
def find_max_grade(grades):
    # TODO: return the highest grade
    return max(grades)

# Q9: What's wrong with this code?
# def calculate_average(grades)  # Missing colon
#     return sum(grades) / len(grades)

# Q10: How do you add an item to a list?
my_list = [1, 2, 3]
# Answer: my_list.append(4) or my_list.insert(index, value)

print("Quiz completed! Check your answers above.")`,
        output: `Quiz completed! Check your answers above.`
      }
    }
  ],

  miniProject: {
    title: {
      ht: "Mini Pwojè: Student Grade Tracker Konplè",
      fr: "Mini Projet: Tracker de Notes Complet",
      en: "Mini Project: Complete Student Grade Tracker"
    },
    description: {
      ht: "Konstwi yon sistèm konplè pou jere nòt elèv yo ak fonksyon avanse.",
      fr: "Construisez un système complet pour gérer les notes des étudiants avec des fonctionnalités avancées.",
      en: "Build a complete system to manage student grades with advanced features."
    },
    requirements: {
      ht: [
        "Aksepte plizyè elèv ak nòt yo",
        "Kalkile mwayèn ak bay nòt lèt",
        "Montre rapò ki klase ak estatistik",
        "Valide tout input yo",
        "Ajoute karakteristik avanse (opsyonèl)"
      ],
      fr: [
        "Accepter plusieurs étudiants avec leurs notes",
        "Calculer les moyennes et attribuer des notes en lettres",
        "Afficher un rapport classé avec des statistiques",
        "Valider toutes les entrées",
        "Ajouter des fonctionnalités avancées (optionnel)"
      ],
      en: [
        "Accept multiple students with their grades",
        "Calculate averages and assign letter grades",
        "Display ranked report with statistics",
        "Validate all inputs",
        "Add advanced features (optional)"
      ]
    },
    starterCode: `# Student Grade Tracker - Midterm Project

def calculate_average(grades):
    """Calculate average of grades."""
    # TODO: Implement this function
    pass

def get_letter_grade(avg):
    """Convert numeric average to letter grade."""
    # TODO: Implement grading scale
    pass

def get_valid_grade():
    """Get a valid grade with input validation."""
    # TODO: Add input validation
    pass

def calculate_class_stats(students):
    """Calculate class statistics."""
    # TODO: Calculate highest, lowest, class average
    pass

def main():
    """Main program function."""
    students = []
    
    print("Welcome to Student Grade Tracker!")
    # TODO: Get number of students
    # TODO: For each student, get name and grades
    # TODO: Calculate averages and letter grades
    # TODO: Display formatted report
    # TODO: Show class statistics
    
    pass

if __name__ == "__main__":
    main()`,
    sampleSolution: `# Complete Student Grade Tracker Solution

def calculate_average(grades):
    """Calculate average of grades."""
    return sum(grades) / len(grades) if grades else 0

def get_letter_grade(avg):
    """Convert numeric average to letter grade."""
    if avg >= 90: return "A"
    elif avg >= 80: return "B"
    elif avg >= 70: return "C"
    elif avg >= 60: return "D"
    else: return "F"

def get_valid_grade():
    """Get a valid grade with input validation."""
    while True:
        try:
            grade = float(input("Enter grade (0-100): "))
            if 0 <= grade <= 100:
                return grade
            print("Grade must be between 0 and 100!")
        except ValueError:
            print("Please enter a valid number!")

def get_valid_name():
    """Get a valid student name."""
    while True:
        name = input("Enter student name: ").strip()
        if name:
            return name.title()
        print("Name cannot be empty!")

def calculate_class_stats(students):
    """Calculate class statistics."""
    if not students:
        return None
    
    averages = [avg for _, avg, _ in students]
    return {
        'highest': max(averages),
        'lowest': min(averages),
        'class_average': sum(averages) / len(averages),
        'students_passed': sum(1 for avg in averages if avg >= 70)
    }

def main():
    """Main program function."""
    students = []
    
    print("=== Student Grade Tracker ===")
    
    while True:
        try:
            num_students = int(input("How many students? "))
            if num_students > 0:
                break
            print("Must be a positive number!")
        except ValueError:
            print("Please enter a valid number!")
    
    # Collect student data
    for i in range(num_students):
        print(f"\\nStudent {i+1}:")
        name = get_valid_name()
        grades = []
        
        for j in range(3):
            print(f"Grade {j+1} for {name}:")
            grade = get_valid_grade()
            grades.append(grade)
        
        avg = calculate_average(grades)
        letter = get_letter_grade(avg)
        students.append((name, avg, letter))
        
        print(f"{name}: {avg:.2f} → {letter}")
        print("-" * 30)
    
    # Sort by grade (highest first)
    students.sort(key=lambda x: x[1], reverse=True)
    
    # Display final report
    print("\\n" + "="*40)
    print("FINAL GRADE REPORT")
    print("="*40)
    print(f"{'Rank':<5} {'Name':<15} {'Average':<8} {'Grade'}")
    print("-"*40)
    
    for i, (name, avg, letter) in enumerate(students, 1):
        print(f"{i:<5} {name:<15} {avg:<8.2f} {letter}")
    
    # Display statistics
    stats = calculate_class_stats(students)
    if stats:
        print("\\n" + "="*40)
        print("CLASS STATISTICS")
        print("="*40)
        print(f"Highest Average: {stats['highest']:.2f}")
        print(f"Lowest Average: {stats['lowest']:.2f}")
        print(f"Class Average: {stats['class_average']:.2f}")
        print(f"Students Passed: {stats['students_passed']}/{len(students)}")

if __name__ == "__main__":
    main()`,
    challenges: {
      ht: [
        "Ajoute aksè pou chanje nimewo nòt yo pa elèv",
        "Kreye rapò ki ka sove nan yon fichye tèks",
        "Ajoute kategori yo pou matye yo (Math, Science, elatriye)",
        "Enplemante yon sistèm GPA ak pwa kous yo"
      ],
      fr: [
        "Ajouter la possibilité de changer le nombre de notes par étudiant",
        "Créer un rapport qui peut être sauvé dans un fichier texte",
        "Ajouter des catégories pour les matières (Math, Science, etc.)",
        "Implémenter un système GPA avec pondération des cours"
      ],
      en: [
        "Add ability to change number of grades per student",
        "Create report that can be saved to a text file",
        "Add subject categories (Math, Science, etc.)",
        "Implement GPA system with course weights"
      ]
    }
  },

  quiz: [
    {
      id: 'week8-quiz-1',
      question: {
        ht: 'Ki mo kle nou itilize pou defini yon fonksyon?',
        fr: 'Quel mot-clé utilisons-nous pour définir une fonction ?',
        en: 'What keyword do we use to define a function?'
      },
      options: [
        { ht: 'function', fr: 'function', en: 'function' },
        { ht: 'def', fr: 'def', en: 'def' },
        { ht: 'define', fr: 'define', en: 'define' },
        { ht: 'create', fr: 'create', en: 'create' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'def se mo kle pou defini fonksyon yo nan Python.',
        fr: 'def est le mot-clé pour définir les fonctions en Python.',
        en: 'def is the keyword for defining functions in Python.'
      },
      difficulty: 'easy',
      tags: ['functions', 'syntax']
    },
    {
      id: 'week8-quiz-2',
      question: {
        ht: 'Sa kòd sa a ap enprime?\\nx = [1, 2, 3]\\nresult = sum(x) / len(x)',
        fr: 'Que va imprimer ce code ?\\nx = [1, 2, 3]\\nresult = sum(x) / len(x)',
        en: 'What will this code print?\\nx = [1, 2, 3]\\nresult = sum(x) / len(x)'
      },
      options: [
        { ht: '6', fr: '6', en: '6' },
        { ht: '2.0', fr: '2.0', en: '2.0' },
        { ht: '3', fr: '3', en: '3' },
        { ht: 'Erè', fr: 'Erreur', en: 'Error' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'sum([1,2,3]) = 6, len([1,2,3]) = 3, kidonk 6/3 = 2.0',
        fr: 'sum([1,2,3]) = 6, len([1,2,3]) = 3, donc 6/3 = 2.0',
        en: 'sum([1,2,3]) = 6, len([1,2,3]) = 3, so 6/3 = 2.0'
      },
      difficulty: 'medium',
      tags: ['lists', 'functions', 'math']
    },
    {
      id: 'week8-quiz-3',
      question: {
        ht: 'Ki kondisyon sa a ap tcheke?\\nif avg >= 90:',
        fr: 'Que vérifie cette condition ?\\nif avg >= 90:',
        en: 'What does this condition check?\\nif avg >= 90:'
      },
      options: [
        { ht: 'Si avg pi piti pase 90', fr: 'Si avg est plus petit que 90', en: 'If avg is less than 90' },
        { ht: 'Si avg pi gwo pase 90', fr: 'Si avg est plus grand que 90', en: 'If avg is greater than 90' },
        { ht: 'Si avg pi gwo pase oswa egal ak 90', fr: 'Si avg est plus grand ou égal à 90', en: 'If avg is greater than or equal to 90' },
        { ht: 'Si avg egal ak 90', fr: 'Si avg est égal à 90', en: 'If avg equals 90' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: '>= vle di "pi gwo pase oswa egal ak", kidonk li tcheke si avg pi gwo pase oswa egal ak 90.',
        fr: '>= signifie "plus grand ou égal à", donc il vérifie si avg est plus grand ou égal à 90.',
        en: '>= means "greater than or equal to", so it checks if avg is greater than or equal to 90.'
      },
      difficulty: 'easy',
      tags: ['conditionals', 'operators']
    },
    {
      id: 'week8-quiz-4',
      question: {
        ht: 'Ki sa ki kreye yon lis vid?',
        fr: 'Qu\'est-ce qui crée une liste vide ?',
        en: 'What creates an empty list?'
      },
      options: [
        { ht: 'my_list = {}', fr: 'my_list = {}', en: 'my_list = {}' },
        { ht: 'my_list = []', fr: 'my_list = []', en: 'my_list = []' },
        { ht: 'my_list = ()', fr: 'my_list = ()', en: 'my_list = ()' },
        { ht: 'my_list = ""', fr: 'my_list = ""', en: 'my_list = ""' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '[] kreye yon lis vid nan Python. {} se pou dictionaries, () se pou tuples, ak "" se pou strings.',
        fr: '[] crée une liste vide en Python. {} est pour les dictionnaires, () pour les tuples, et "" pour les chaînes.',
        en: '[] creates an empty list in Python. {} is for dictionaries, () for tuples, and "" for strings.'
      },
      difficulty: 'easy',
      tags: ['lists', 'syntax']
    },
    {
      id: 'week8-quiz-5',
      question: {
        ht: 'Sa range(3) ap pwodwi?',
        fr: 'Que va produire range(3) ?',
        en: 'What will range(3) produce?'
      },
      options: [
        { ht: '1, 2, 3', fr: '1, 2, 3', en: '1, 2, 3' },
        { ht: '0, 1, 2', fr: '0, 1, 2', en: '0, 1, 2' },
        { ht: '3', fr: '3', en: '3' },
        { ht: '0, 1, 2, 3', fr: '0, 1, 2, 3', en: '0, 1, 2, 3' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'range(3) pwodwi nimewo yo 0, 1, 2. Li kòmanse nan 0 ak rete jiskaske li rive nan 3.',
        fr: 'range(3) produit les nombres 0, 1, 2. Il commence à 0 et s\'arrête avant d\'atteindre 3.',
        en: 'range(3) produces the numbers 0, 1, 2. It starts at 0 and stops before reaching 3.'
      },
      difficulty: 'medium',
      tags: ['loops', 'range']
    },
    {
      id: 'week8-quiz-6',
      question: {
        ht: 'Ki avantaj fonksyon yo gen?',
        fr: 'Quels avantages ont les fonctions ?',
        en: 'What advantages do functions have?'
      },
      options: [
        { ht: 'Yo fè pwogram yo pi vit', fr: 'Elles rendent les programmes plus rapides', en: 'They make programs faster' },
        { ht: 'Yo òganize kòd la ak evite repetisyon', fr: 'Elles organisent le code et évitent la répétition', en: 'They organize code and avoid repetition' },
        { ht: 'Yo sou nèt itilize mwens memwa', fr: 'Elles utilisent définitivement moins de mémoire', en: 'They definitely use less memory' },
        { ht: 'Yo pa gen okenn avantaj', fr: 'Elles n\'ont aucun avantage', en: 'They have no advantages' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Fonksyon yo ede òganize kòd la nan blòk ki ka itilize plizyè fwa, sa ki evite repetisyon ak fè kòd la pi klè.',
        fr: 'Les fonctions aident à organiser le code en blocs réutilisables, ce qui évite la répétition et rend le code plus clair.',
        en: 'Functions help organize code into reusable blocks, which avoids repetition and makes code clearer.'
      },
      difficulty: 'medium',
      tags: ['functions', 'organization']
    },
    {
      id: 'week8-quiz-7',
      question: {
        ht: 'Ki sa ki pase ak varyab x nan fonksyon an?\\nx = 10\\ndef test():\\n    x = 5\\n    print(x)\\ntest()\\nprint(x)',
        fr: 'Que se passe-t-il avec la variable x dans la fonction ?\\nx = 10\\ndef test():\\n    x = 5\\n    print(x)\\ntest()\\nprint(x)',
        en: 'What happens to variable x inside the function?\\nx = 10\\ndef test():\\n    x = 5\\n    print(x)\\ntest()\\nprint(x)'
      },
      options: [
        { ht: 'Enprime 5 epi 5', fr: 'Imprime 5 puis 5', en: 'Prints 5 then 5' },
        { ht: 'Enprime 5 epi 10', fr: 'Imprime 5 puis 10', en: 'Prints 5 then 10' },
        { ht: 'Enprime 10 epi 10', fr: 'Imprime 10 puis 10', en: 'Prints 10 then 10' },
        { ht: 'Gen yon erè', fr: 'Il y a une erreur', en: 'There is an error' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Varyab x nan fonksyon an se yon varyab lokal ki pa afekte varyab global x ki nan deyò.',
        fr: 'La variable x dans la fonction est une variable locale qui n\'affecte pas la variable globale x à l\'extérieur.',
        en: 'The variable x inside the function is a local variable that doesn\'t affect the global variable x outside.'
      },
      difficulty: 'hard',
      tags: ['scope', 'variables', 'functions']
    },
    {
      id: 'week8-quiz-8',
      question: {
        ht: 'Ki sa ki mal nan kòd sa a?\\ndef calculate_average(grades)\\n    return sum(grades) / len(grades)',
        fr: 'Qu\'est-ce qui ne va pas dans ce code ?\\ndef calculate_average(grades)\\n    return sum(grades) / len(grades)',
        en: 'What\'s wrong with this code?\\ndef calculate_average(grades)\\n    return sum(grades) / len(grades)'
      },
      options: [
        { ht: 'Pa gen bagay ki mal', fr: 'Rien ne va mal', en: 'Nothing is wrong' },
        { ht: 'Manke colon (:) apre definisyon fonksyon an', fr: 'Il manque deux-points (:) après la définition de fonction', en: 'Missing colon (:) after function definition' },
        { ht: 'Non fonksyon an pa bon', fr: 'Le nom de fonction est mauvais', en: 'Function name is bad' },
        { ht: 'return pa nan bon pozisyon', fr: 'return n\'est pas à la bonne position', en: 'return is not in right position' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Definisyon fonksyon nan Python dwe fini ak yon colon (:). Bon sintaks la se: def calculate_average(grades):',
        fr: 'Les définitions de fonction en Python doivent se terminer par deux-points (:). La bonne syntaxe est: def calculate_average(grades):',
        en: 'Function definitions in Python must end with a colon (:). The correct syntax is: def calculate_average(grades):'
      },
      difficulty: 'easy',
      tags: ['syntax', 'functions']
    }
  ]
};