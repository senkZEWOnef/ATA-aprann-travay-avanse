// Python Week 7: Functions - Simple Card-Based Lesson
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
  code?: {
    initial: string;
    solution?: string;
    output?: string;
  };
}

export const pythonWeek7Lesson = {
  weekNumber: 7,
  title: {
    ht: "Semèn 7: Functions",
    fr: "Semaine 7: Fonctions",
    en: "Week 7: Functions"
  },
  description: {
    ht: "Aprann kijan pou w kreye ak itilize fonksyon yo.",
    fr: "Apprenez à créer et utiliser des fonctions.",
    en: "Learn to create and use functions."
  },
  totalCards: 12,
  cards: [
    {
      id: "week7-intro",
      type: "intro" as const,
      title: {
        ht: "Byenvini nan Semèn 7: Fonksyon yo",
        fr: "Bienvenue à la Semaine 7: Fonctions", 
        en: "Welcome to Week 7: Functions"
      },
      content: {
        ht: "Semèn sa a nou pral aprann kijan pou kreye ak itilize fonksyon yo pou òganize kòd nou an ak fè li ka itilize plizyè fwa. Fonksyon yo se youn nan konsèp ki pi enpòtan yo nan pwogram.",
        fr: "Cette semaine, nous apprendrons à créer et utiliser des fonctions pour organiser notre code et le rendre réutilisable. Les fonctions sont l'un des concepts les plus importants en programmation.",
        en: "This week we'll learn to create and use functions to organize our code and make it reusable. Functions are one of the most important concepts in programming."
      }
    },
    {
      id: "what-is-function",
      type: "concept" as const,
      title: {
        ht: "Kisa yon Fonksyon ye?",
        fr: "Qu'est-ce qu'une Fonction?",
        en: "What Is a Function?"
      },
      content: {
        ht: "Yon fonksyon se yon blòk kòd ki ka itilize plizyè fwa ak ki fè yon travay espesifik. Li kòmanse ak mo kle 'def' ak gen yon non ak parantèz. Fonksyon yo ede nou òganize kòd nou an ak evite repetisyon.",
        fr: "Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique. Elle commence par le mot-clé 'def' et a un nom avec des parenthèses. Les fonctions nous aident à organiser notre code et éviter la répétition.",
        en: "A function is a reusable block of code that performs a specific task. It starts with the keyword 'def' and has a name with parentheses. Functions help us organize our code and avoid repetition."
      },
      code: {
        initial: `def greet():
    print("Hello!")

# Call the function
greet()
greet()  # Can call it multiple times`,
        output: `Hello!
Hello!`
      }
    },
    {
      id: "parameters-arguments",
      type: "concept" as const,
      title: {
        ht: "Parameters ak Arguments",
        fr: "Paramètres et Arguments",
        en: "Parameters and Arguments"
      },
      content: {
        ht: "Fonksyon yo ka resevwa enfòmasyon nan fòm parameters yo. Lè ou rele fonksyon an, ou voye arguments yo bay li. Parameters yo se varyab yo nan definisyon fonksyon an, ak arguments yo se valè aktyèl yo nou voye.",
        fr: "Les fonctions peuvent recevoir des informations sous forme de paramètres. Quand vous appelez la fonction, vous lui envoyez des arguments. Les paramètres sont les variables dans la définition de fonction, et les arguments sont les valeurs réelles que nous envoyons.",
        en: "Functions can receive information in the form of parameters. When you call the function, you send arguments to it. Parameters are the variables in the function definition, and arguments are the actual values we send."
      },
      code: {
        initial: `def greet(name):
    print(f"Hello, {name}!")

def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

# Call with arguments
greet("Ralph")
greet("Ana")
add_numbers(5, 3)
add_numbers(10, 7)`,
        output: `Hello, Ralph!
Hello, Ana!
5 + 3 = 8
10 + 7 = 17`
      }
    },
    {
      id: "return-values",
      type: "concept" as const,
      title: {
        ht: "Return Values",
        fr: "Valeurs de Retour",
        en: "Return Values"
      },
      content: {
        ht: "Fonksyon yo ka retounen yon valè ak mo kle 'return'. Sa a pèmèt ou itilize rezilta fonksyon an nan lòt kote nan kòd ou a. Si yon fonksyon pa gen return, li retounen None otomatikman.",
        fr: "Les fonctions peuvent retourner une valeur avec le mot-clé 'return'. Cela vous permet d'utiliser le résultat de la fonction ailleurs dans votre code. Si une fonction n'a pas de return, elle retourne None automatiquement.",
        en: "Functions can return a value with the keyword 'return'. This allows you to use the function's result elsewhere in your code. If a function doesn't have a return, it returns None automatically."
      },
      code: {
        initial: `def add(a, b):
    return a + b

def multiply(x, y):
    return x * y

def square(number):
    return number * number

# Use return values
sum_result = add(10, 5)
product = multiply(4, 7)
squared = square(6)

print("Sum:", sum_result)
print("Product:", product)
print("Square:", squared)`,
        output: `Sum: 15
Product: 28
Square: 36`
      }
    },
    {
      id: "default-parameters",
      type: "concept" as const,
      title: {
        ht: "Default Parameters",
        fr: "Paramètres par Défaut",
        en: "Default Parameters"
      },
      content: {
        ht: "Ou ka bay valè depo nan parameters yo. Si ou pa bay yon argument, fonksyon an ap itilize valè default la. Sa a fè fonksyon yo pi fleksib ak pi fasil pou itilize.",
        fr: "Vous pouvez donner des valeurs par défaut aux paramètres. Si vous ne fournissez pas d'argument, la fonction utilisera la valeur par défaut. Cela rend les fonctions plus flexibles et plus faciles à utiliser.",
        en: "You can give default values to parameters. If you don't provide an argument, the function will use the default value. This makes functions more flexible and easier to use."
      },
      code: {
        initial: `def greet(name="friend"):
    print(f"Hello, {name}!")

def calculate_price(base, tax=0.1):
    total = base * (1 + tax)
    return total

# Test with and without arguments
greet()                    # Uses default
greet("Alice")             # Uses provided argument

price1 = calculate_price(100)        # Uses default tax
price2 = calculate_price(100, 0.15)  # Custom tax

print(f"Price 1: $" + str(round(price1, 2)))
print(f"Price 2: $" + str(round(price2, 2)))`,
        output: `Hello, friend!
Hello, Alice!
Price 1: $110.00
Price 2: $115.00`
      }
    },
    {
      id: "variable-scope",
      type: "concept" as const,
      title: {
        ht: "Variable Scope",
        fr: "Portée des Variables",
        en: "Variable Scope"
      },
      content: {
        ht: "Variables yo ki nan fonksyon yon lokèl nan fonksyon an. Variables yo ki deyò fonksyon yo se global. Local variables yo pa ka akse nan deyò fonksyon yo. Sa a ede evite konfli ak variables yo.",
        fr: "Les variables à l'intérieur d'une fonction sont locales à cette fonction. Les variables en dehors des fonctions sont globales. Les variables locales ne peuvent pas être accédées en dehors de la fonction. Cela aide à éviter les conflits de variables.",
        en: "Variables inside a function are local to that function. Variables outside functions are global. Local variables cannot be accessed outside the function. This helps avoid variable conflicts."
      },
      code: {
        initial: `x = 10  # Global variable

def test_scope():
    x = 5   # Local variable
    y = 20  # Local variable
    print("Inside function:")
    print("x =", x)
    print("y =", y)

test_scope()
print("Outside function:")
print("x =", x)
# print(y)  # This would cause an error`,
        output: `Inside function:
x = 5
y = 20
Outside function:
x = 10`
      }
    },
    {
      id: "combining-functions",
      type: "concept" as const,
      title: {
        ht: "Konbine Fonksyon yo",
        fr: "Combiner des Fonctions",
        en: "Combining Functions"
      },
      content: {
        ht: "Ou ka rele yon fonksyon nan yon lòt fonksyon pou konstwi pwogram yo ki pi konplèks ak pi òganize. Sa a rele function composition epi li se yon tèknik pwisan nan pwogram.",
        fr: "Vous pouvez appeler une fonction dans une autre fonction pour construire des programmes plus complexes et plus organisés. Cela s'appelle la composition de fonctions et c'est une technique puissante en programmation.",
        en: "You can call one function inside another function to build more complex and organized programs. This is called function composition and it's a powerful technique in programming."
      },
      code: {
        initial: `def get_name():
    return "Alice"

def get_greeting():
    return "Hello"

def create_message():
    greeting = get_greeting()
    name = get_name()
    return f"{greeting}, {name}!"

def greet_user():
    message = create_message()
    print(message)

# Call the main function
greet_user()`,
        output: `Hello, Alice!`
      }
    },
    {
      id: "real-world-examples",
      type: "concept" as const,
      title: {
        ht: "Egzanp nan Lavi Reyèl",
        fr: "Exemples du Monde Réel",
        en: "Real-World Examples"
      },
      content: {
        ht: "Fonksyon yo itilize nan tout pwogram yo nan mond lan. Yo ede nou rezoud pwoblèm yo ak kreye kod ki ka itilize plizyè fwa ak ki fasil pou konprann.",
        fr: "Les fonctions sont utilisées dans tous les programmes du monde. Elles nous aident à résoudre des problèmes et à créer du code réutilisable et facile à comprendre.",
        en: "Functions are used in all programs around the world. They help us solve problems and create reusable and easy-to-understand code."
      },
      code: {
        initial: `# Banking system example
def calculate_interest(balance, rate=0.05):
    return balance * rate

def make_deposit(balance, amount):
    return balance + amount

def make_withdrawal(balance, amount):
    if amount <= balance:
        return balance - amount
    else:
        print("Insufficient funds!")
        return balance

# Simulate bank account
account_balance = 1000
print(f"Initial balance: \${account_balance}")

account_balance = make_deposit(account_balance, 500)
print(f"After deposit: \${account_balance}")

interest = calculate_interest(account_balance)
print(f"Monthly interest: \$" + str(round(interest, 2)))

account_balance = make_withdrawal(account_balance, 200)
print(f"After withdrawal: \${account_balance}")`,
        output: `Initial balance: $1000
After deposit: $1500
Monthly interest: $75.00
After withdrawal: $1300`
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
        ht: "Pratike ak egzèsis sa yo pou fonksyon yo: 1) Ekri yon fonksyon square(x) ki retounen kare yon nimewo, 2) Kreye yon fonksyon is_even(n) ki tcheke si yon nimewo gen pè, 3) Fè yon fonksyon average(a,b,c) ki kalkile mwayèn twa nimewo, 4) Kreye yon fonksyon ki retounen ni kapasite ak perimetè yon rektang.",
        fr: "Pratiquez avec ces exercices de fonctions: 1) Écrivez une fonction square(x) qui retourne le carré d'un nombre, 2) Créez une fonction is_even(n) qui vérifie si un nombre est pair, 3) Faites une fonction average(a,b,c) qui calcule la moyenne de trois nombres, 4) Créez une fonction qui retourne à la fois l'aire et le périmètre d'un rectangle.",
        en: "Practice with these function exercises: 1) Write a square(x) function that returns the square of a number, 2) Create an is_even(n) function that checks if a number is even, 3) Make an average(a,b,c) function that calculates the average of three numbers, 4) Create a function that returns both area and perimeter of a rectangle."
      },
      code: {
        initial: `# Complete these function exercises

def square(x):
    # TODO: Return x squared
    pass

def is_even(n):
    # TODO: Return True if n is even, False otherwise
    pass

def average(a, b, c):
    # TODO: Return the average of three numbers
    pass

def rectangle_info(length, width):
    # TODO: Return area and perimeter as a tuple
    pass

# Test your functions
print("Square of 5:", square(5))
print("Is 8 even?", is_even(8))
print("Is 7 even?", is_even(7))
print("Average of 10, 20, 30:", average(10, 20, 30))
area, perimeter = rectangle_info(5, 3)
print(f"Rectangle 5x3: Area={area}, Perimeter={perimeter}")`,
        output: `Square of 5: 25
Is 8 even? True
Is 7 even? False
Average of 10, 20, 30: 20.0
Rectangle 5x3: Area=15, Perimeter=16`
      }
    },
    {
      id: "function-tips",
      type: "tip" as const,
      title: {
        ht: "Konsèy pou Fonksyon yo",
        fr: "Conseils pour les Fonctions",
        en: "Function Tips and Best Practices"
      },
      content: {
        ht: "Konsèy pou ekri fonksyon ki bon yo: 1) Bay non ki gen sans, 2) Fè yon sèl travay pa fonksyon, 3) Itilize docstrings pou eksplike fonksyon yo, 4) Validate input yo, 5) Evite fonksyon yo ki twò long.",
        fr: "Conseils pour écrire de bonnes fonctions: 1) Donnez des noms significatifs, 2) Faites une seule tâche par fonction, 3) Utilisez des docstrings pour expliquer les fonctions, 4) Validez les entrées, 5) Évitez les fonctions trop longues.",
        en: "Tips for writing good functions: 1) Give meaningful names, 2) Do one task per function, 3) Use docstrings to explain functions, 4) Validate inputs, 5) Avoid functions that are too long."
      },
      code: {
        initial: `# Good function examples with best practices

def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index.
    
    Args:
        weight (float): Weight in kilograms
        height (float): Height in meters
    
    Returns:
        float: BMI value
    """
    # Input validation
    if weight <= 0 or height <= 0:
        return None
    
    bmi = weight / (height ** 2)
    return round(bmi, 2)

def get_bmi_category(bmi):
    """Get BMI category based on value."""
    if bmi is None:
        return "Invalid input"
    elif bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

# Test the functions
weight = 70  # kg
height = 1.75  # meters

bmi = calculate_bmi(weight, height)
category = get_bmi_category(bmi)

print(f"BMI: {bmi}")
print(f"Category: {category}")`,
        output: `BMI: 22.86
Category: Normal`
      }
    },
    {
      id: "quiz",
      type: "quiz" as const,
      title: {
        ht: "Quiz: Tès Konesans ou",
        fr: "Quiz: Testez vos Connaissances",
        en: "Quiz: Test Your Knowledge"
      },
      content: {
        ht: "Tès konesans ou sou fonksyon yo ak kesyon sa yo. Sa yo kouvri konsèp ki pi enpòtan yo nan fonksyon yo.",
        fr: "Testez vos connaissances sur les fonctions avec ces questions. Elles couvrent les concepts les plus importants des fonctions.",
        en: "Test your knowledge about functions with these questions. They cover the most important concepts of functions."
      },
      code: {
        initial: `# Quiz Questions - Try to answer before checking solutions

# Question 1: What keyword is used to define a function?
# A) function  B) def  C) define  D) create
# Answer: B) def

# Question 2: What does this function return?
def mystery_func():
    print("Hello")
# Answer: None (no return statement)

# Question 3: What will this print?
def add(a, b=5):
    return a + b
print(add(3))
# Answer: 8 (3 + 5)

# Question 4: What's wrong with this code?
# def greet(name)
#     print("Hi", name)
# Answer: Missing colon (:) after function definition

# Question 5: What happens to variable x?
x = 10
def test():
    x = 5
    print(x)
test()
print(x)
# Answer: Prints 5 then 10 (local vs global scope)`,
        output: `Quiz completed! Check your answers above.`
      }
    }
  ],

  miniProject: {
    title: {
      ht: "Mini Pwojè: Temperature Converter",
      fr: "Mini Projet: Convertisseur de Température",
      en: "Mini Project: Temperature Converter"
    },
    description: {
      ht: "Kreye yon aplikasyon ki ka konvèti tanperati.",
      fr: "Créez une application qui peut convertir les températures.",
      en: "Create an application that can convert temperatures."
    },
    requirements: {
      ht: [
        "Kreye fonksyon pou konvèti Celsius nan Fahrenheit",
        "Kreye fonksyon pou konvèti Fahrenheit nan Celsius",
        "Mande itilizatè a ki konvèsyon yo vle",
        "Montre rezilta a"
      ],
      fr: [
        "Créer une fonction pour convertir Celsius en Fahrenheit",
        "Créer une fonction pour convertir Fahrenheit en Celsius",
        "Demander à l'utilisateur quelle conversion il veut",
        "Afficher le résultat"
      ],
      en: [
        "Create function to convert Celsius to Fahrenheit",
        "Create function to convert Fahrenheit to Celsius",
        "Ask user which conversion they want",
        "Display the result"
      ]
    },
    starterCode: `def celsius_to_fahrenheit(c):
    # TODO: Convert Celsius to Fahrenheit
    # Formula: F = (C * 9/5) + 32
    pass

def fahrenheit_to_celsius(f):
    # TODO: Convert Fahrenheit to Celsius 
    # Formula: C = (F - 32) * 5/9
    pass

def main():
    print("Temperature Converter")
    choice = input("Convert to (F)ahrenheit or (C)elsius? ")
    temp = float(input("Enter temperature: "))
    
    if choice.lower() == "f":
        result = celsius_to_fahrenheit(temp)
        print("Result:", result, "F")
    elif choice.lower() == "c":
        result = fahrenheit_to_celsius(temp)
        print("Result:", result, "C")

main()`,
    sampleSolution: `def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def main():
    print("Temperature Converter")
    choice = input("Convert to (F)ahrenheit or (C)elsius? ")
    temp = float(input("Enter temperature: "))
    
    if choice.lower() == "f":
        result = celsius_to_fahrenheit(temp)
        print("Result:", result, "F")
    elif choice.lower() == "c":
        result = fahrenheit_to_celsius(temp)
        print("Result:", result, "C")

main()`,
    challenges: {
      ht: [
        "Ajoute validation pou input yo",
        "Ajoute konvèsyon pou Kelvin",
        "Kreye yon menu ki pi bèl"
      ],
      fr: [
        "Ajouter validation pour les entrées",
        "Ajouter conversion pour Kelvin",
        "Créer un menu plus beau"
      ],
      en: [
        "Add input validation",
        "Add Kelvin conversion",
        "Create a prettier menu"
      ]
    }
  },

  quiz: [
    {
      id: 'week7-quiz-1',
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
        ht: 'def se mo kle pou defini fonksyon yo nan Python. Li suivi pa non fonksyon an ak parantèz yo.',
        fr: 'def est le mot-clé pour définir les fonctions en Python. Il est suivi du nom de la fonction et des parenthèses.',
        en: 'def is the keyword for defining functions in Python. It\'s followed by the function name and parentheses.'
      },
      difficulty: 'easy',
      tags: ['functions', 'syntax', 'def']
    },
    {
      id: 'week7-quiz-2',
      question: {
        ht: 'Sa yon fonksyon retounen si li pa gen mo kle return?',
        fr: 'Que retourne une fonction si elle n\'a pas de mot-clé return ?',
        en: 'What does a function return if it has no return keyword?'
      },
      options: [
        { ht: '0', fr: '0', en: '0' },
        { ht: 'None', fr: 'None', en: 'None' },
        { ht: 'False', fr: 'False', en: 'False' },
        { ht: 'Erè', fr: 'Erreur', en: 'Error' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Yon fonksyon ki pa gen return retounen None otomatikman nan Python.',
        fr: 'Une fonction sans return retourne None automatiquement en Python.',
        en: 'A function without return automatically returns None in Python.'
      },
      difficulty: 'medium',
      tags: ['functions', 'return', 'None']
    },
    {
      id: 'week7-quiz-3',
      question: {
        ht: 'Ki sa ki diferan ant parameters ak arguments?',
        fr: 'Quelle est la différence entre paramètres et arguments ?',
        en: 'What is the difference between parameters and arguments?'
      },
      options: [
        { ht: 'Pa gen diferans', fr: 'Pas de différence', en: 'No difference' },
        { ht: 'Parameters nan definisyon, arguments nan rele', fr: 'Paramètres dans définition, arguments dans appel', en: 'Parameters in definition, arguments in call' },
        { ht: 'Arguments nan definisyon, parameters nan rele', fr: 'Arguments dans définition, paramètres dans appel', en: 'Arguments in definition, parameters in call' },
        { ht: 'Parameters se nimewo, arguments se mo', fr: 'Paramètres sont nombres, arguments sont mots', en: 'Parameters are numbers, arguments are words' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Parameters yo se varyab yo nan definisyon fonksyon an. Arguments yo se valè aktyèl yo ou voye lè ou rele fonksyon an.',
        fr: 'Les paramètres sont les variables dans la définition de fonction. Les arguments sont les valeurs réelles que vous envoyez quand vous appelez la fonction.',
        en: 'Parameters are the variables in the function definition. Arguments are the actual values you send when you call the function.'
      },
      difficulty: 'medium',
      tags: ['functions', 'parameters', 'arguments']
    },
    {
      id: 'week7-quiz-4',
      question: {
        ht: 'Sa ki pase ak yon varyab lokal lè fonksyon an fini?',
        fr: 'Que se passe-t-il avec une variable locale quand la fonction se termine ?',
        en: 'What happens to a local variable when the function ends?'
      },
      options: [
        { ht: 'Li vin global', fr: 'Elle devient globale', en: 'It becomes global' },
        { ht: 'Li disparèt', fr: 'Elle disparaît', en: 'It disappears' },
        { ht: 'Li rete nan memwa', fr: 'Elle reste en mémoire', en: 'It stays in memory' },
        { ht: 'Li chanje nan 0', fr: 'Elle change en 0', en: 'It changes to 0' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Varyab lokal yo disparèt lè fonksyon an fini egzekite. Yo pa ka aksè soti nan deyò fonksyon an.',
        fr: 'Les variables locales disparaissent quand la fonction finit de s\'exécuter. Elles ne peuvent pas être accédées depuis l\'extérieur de la fonction.',
        en: 'Local variables disappear when the function finishes executing. They cannot be accessed from outside the function.'
      },
      difficulty: 'medium',
      tags: ['functions', 'scope', 'variables']
    },
    {
      id: 'week7-quiz-5',
      question: {
        ht: 'Ki avantaj default parameters yo gen?',
        fr: 'Quels avantages ont les paramètres par défaut ?',
        en: 'What advantages do default parameters have?'
      },
      options: [
        { ht: 'Yo fè fonksyon yo pi vit', fr: 'Ils rendent les fonctions plus rapides', en: 'They make functions faster' },
        { ht: 'Yo fè fonksyon yo pi fleksib', fr: 'Ils rendent les fonctions plus flexibles', en: 'They make functions more flexible' },
        { ht: 'Yo itilize mwens memwa', fr: 'Ils utilisent moins de mémoire', en: 'They use less memory' },
        { ht: 'Yo evite tout erè', fr: 'Ils évitent toutes erreurs', en: 'They prevent all errors' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Default parameters yo fè fonksyon yo pi fleksib paske ou ka rele yo ak oswa san yo ak ka gen valè depo yo.',
        fr: 'Les paramètres par défaut rendent les fonctions plus flexibles car vous pouvez les appeler avec ou sans eux et avoir des valeurs par défaut.',
        en: 'Default parameters make functions more flexible because you can call them with or without them and have default values.'
      },
      difficulty: 'medium',
      tags: ['functions', 'parameters', 'flexibility']
    }
  ]
};