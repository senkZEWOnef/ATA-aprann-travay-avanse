export const pythonWeek13Cards = [
  // Card 1: What is OOP?
  {
    id: 'oop-intro',
    title: {
      ht: 'Ki sa ki Object-Oriented Programming (OOP)?',
      fr: 'Qu\'est-ce que la Programmation Orientée Objet (POO) ?',
      en: 'What is Object-Oriented Programming (OOP)?'
    },
    content: {
      ht: 'Object-Oriented Programming (OOP) se yon fason pou òganize kòd la ak "objè" ki gen done (attributes) ak aksyon (methods).\n\nImajine yon machin:\n• Done: koulè, modèl, ane\n• Aksyon: kondi(), kanpe()\n\nOOP ede nou kreye kòd ki pi klè ak pi fasil pou konprann.',
      fr: 'La Programmation Orientée Objet (POO) est une façon d\'organiser le code avec des "objets" qui ont des données (attributs) et des actions (méthodes).\n\nImaginez une voiture :\n• Données : couleur, modèle, année\n• Actions : conduire(), s\'arrêter()\n\nLa POO nous aide à créer du code plus clair et plus facile à comprendre.',
      en: 'Object-Oriented Programming (OOP) is a way to organize code with "objects" that have data (attributes) and actions (methods).\n\nImagine a car:\n• Data: color, model, year\n• Actions: drive(), stop()\n\nOOP helps us create code that\'s clearer and easier to understand.'
    },
    codeExample: `# Real-world example: A Dog
class Dog:
    def __init__(self, name, breed, age):
        self.name = name      # attribute (data)
        self.breed = breed    # attribute (data)
        self.age = age        # attribute (data)
    
    def bark(self):          # method (action)
        print(f"{self.name} says Woof!")
    
    def sleep(self):         # method (action)
        print(f"{self.name} is sleeping...")

# Create dog objects
my_dog = Dog("Max", "Golden Retriever", 3)
friend_dog = Dog("Luna", "Husky", 2)

# Use the objects
my_dog.bark()        # Max says Woof!
friend_dog.sleep()   # Luna is sleeping...
print(f"{my_dog.name} is a {my_dog.age} year old {my_dog.breed}")`,
    quiz: {
      question: {
        ht: 'Ki sa ki Object-Oriented Programming?',
        fr: 'Qu\'est-ce que la Programmation Orientée Objet ?',
        en: 'What is Object-Oriented Programming?'
      },
      options: [
        { ht: 'Yon fason pou òganize kòd ak objè', fr: 'Une façon d\'organiser le code avec des objets', en: 'A way to organize code with objects' },
        { ht: 'Yon kalkilatè espesyal', fr: 'Une calculatrice spéciale', en: 'A special calculator' },
        { ht: 'Yon modil Python', fr: 'Un module Python', en: 'A Python module' }
      ],
      correctAnswer: 0,
      explanation: {
        ht: 'OOP se yon fason pou òganize kòd la ak objè ki gen done ak aksyon yo.',
        fr: 'La POO est une façon d\'organiser le code avec des objets qui ont des données et des actions.',
        en: 'OOP is a way to organize code with objects that have data and actions.'
      }
    }
  },

  // Card 2: Classes and Objects
  {
    id: 'classes-objects',
    title: {
      ht: 'Klas ak Objè',
      fr: 'Classes et Objets',
      en: 'Classes and Objects'
    },
    content: {
      ht: '**Klas** se yon blueprint (plan) pou kreye objè yo.\n**Objè** se yon egzanp klas la.\n\nEgzanp:\n• Klas "Dog" se plan an\n• my_dog se yon objè ki kreye nan plan an\n\nOU ka kreye anpil objè nan menm klas la.',
      fr: '**Classe** est un blueprint (plan) pour créer des objets.\n**Objet** est un exemple de la classe.\n\nExemple :\n• Classe "Dog" est le plan\n• my_dog est un objet créé à partir du plan\n\nVous pouvez créer plusieurs objets à partir de la même classe.',
      en: '**Class** is a blueprint (plan) for creating objects.\n**Object** is an instance of the class.\n\nExample:\n• Class "Dog" is the blueprint\n• my_dog is an object created from the blueprint\n\nYou can create multiple objects from the same class.'
    },
    codeExample: `# Define a class (blueprint)
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    
    def study(self):
        print(f"{self.name} is studying hard!")
    
    def get_status(self):
        if self.grade >= 70:
            return "Passing"
        else:
            return "Needs improvement"

# Create objects (instances) from the class
student1 = Student("Alice", 85)
student2 = Student("Bob", 65)
student3 = Student("Charlie", 92)

# Each object has its own data and behavior
print(f"{student1.name}: {student1.get_status()}")  # Alice: Passing
print(f"{student2.name}: {student2.get_status()}")  # Bob: Needs improvement

student1.study()  # Alice is studying hard!
student3.study()  # Charlie is studying hard!`,
    exercise: {
      instruction: {
        ht: 'Kreye yon klas "Book" ak attributes title ak author, ak yon method ki montre enfòmasyon liv la.',
        fr: 'Créez une classe "Book" avec des attributs title et author, et une méthode qui affiche les informations du livre.',
        en: 'Create a class "Book" with attributes title and author, and a method that displays the book information.'
      },
      startingCode: `# Create a Book class
class Book:
    # TODO: Add __init__ method with title and author
    
    # TODO: Add a method to display book info

# Test your class
# book1 = Book("1984", "George Orwell")
# book1.display_info()`,
      solution: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def display_info(self):
        print(f"Book: '{self.title}' by {self.author}")
    
    def get_description(self):
        return f"'{self.title}' is written by {self.author}"

# Test the class
book1 = Book("1984", "George Orwell")
book2 = Book("To Kill a Mockingbird", "Harper Lee")
book3 = Book("The Great Gatsby", "F. Scott Fitzgerald")

book1.display_info()  # Book: '1984' by George Orwell
book2.display_info()  # Book: 'To Kill a Mockingbird' by Harper Lee

print(book3.get_description())  # 'The Great Gatsby' is written by F. Scott Fitzgerald`
    }
  },

  // Card 3: The __init__ Constructor
  {
    id: 'init-constructor',
    title: {
      ht: 'Konstriktè __init__',
      fr: 'Le Constructeur __init__',
      en: 'The __init__ Constructor'
    },
    content: {
      ht: 'Fonksyon __init__ se "konstriktè" a - li kouri otomatikman lè nou kreye yon objè.\n\nLi itilize pou:\n• Mete valè kòmanse yo nan attributes yo\n• Konfigire objè a\n• Fè preparasyon ki nesesè yo',
      fr: 'La fonction __init__ est le "constructeur" - elle s\'exécute automatiquement quand nous créons un objet.\n\nElle est utilisée pour :\n• Définir les valeurs initiales des attributs\n• Configurer l\'objet\n• Faire les préparations nécessaires',
      en: 'The __init__ function is the "constructor" - it runs automatically when we create an object.\n\nIt\'s used to:\n• Set initial values for attributes\n• Configure the object\n• Do necessary preparations'
    },
    codeExample: `class Car:
    def __init__(self, make, model, year, color="white"):
        # These run automatically when creating a Car object
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.mileage = 0  # Default starting value
        self.is_running = False
        print(f"Created a {year} {make} {model} in {color}")
    
    def start_engine(self):
        self.is_running = True
        print(f"The {self.make} {self.model} engine is now running!")
    
    def drive(self, miles):
        if self.is_running:
            self.mileage += miles
            print(f"Drove {miles} miles. Total mileage: {self.mileage}")
        else:
            print("Start the engine first!")

# __init__ runs automatically when we create objects
car1 = Car("Toyota", "Camry", 2020)           # Created a 2020 Toyota Camry in white
car2 = Car("Honda", "Civic", 2019, "blue")    # Created a 2019 Honda Civic in blue

car1.start_engine()  # The Toyota Camry engine is now running!
car1.drive(50)       # Drove 50 miles. Total mileage: 50
car2.drive(30)       # Start the engine first!`,
    quiz: {
      question: {
        ht: 'Ki lè fonksyon __init__ ap kouri?',
        fr: 'Quand la fonction __init__ s\'exécute-t-elle ?',
        en: 'When does the __init__ function run?'
      },
      options: [
        { ht: 'Lè nou rele li', fr: 'Quand nous l\'appelons', en: 'When we call it' },
        { ht: 'Otomatikman lè nou kreye yon objè', fr: 'Automatiquement quand nous créons un objet', en: 'Automatically when we create an object' },
        { ht: 'Nan fen pwogram an', fr: 'À la fin du programme', en: 'At the end of the program' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '__init__ kouri otomatikman chak fwa nou kreye yon objè nan klas la.',
        fr: '__init__ s\'exécute automatiquement chaque fois que nous créons un objet de la classe.',
        en: '__init__ runs automatically every time we create an object of the class.'
      }
    }
  },

  // Card 4: Instance vs Class Variables
  {
    id: 'instance-class-variables',
    title: {
      ht: 'Varyab Instance ak Varyab Klas',
      fr: 'Variables d\'Instance vs Variables de Classe',
      en: 'Instance vs Class Variables'
    },
    content: {
      ht: '**Varyab Instance** (self.name): Chak objè gen valè li yo\n**Varyab Klas** (species): Tout objè yo pataje menm valè a\n\nImajine yon ekolye:\n• Non ak nòt yo diferan (instance)\n• Lekòl la menm nan (klas)',
      fr: '**Variables d\'Instance** (self.name) : Chaque objet a ses propres valeurs\n**Variables de Classe** (species) : Tous les objets partagent la même valeur\n\nImaginez un étudiant :\n• Nom et notes sont différents (instance)\n• L\'école est la même (classe)',
      en: '**Instance Variables** (self.name): Each object has its own values\n**Class Variables** (species): All objects share the same value\n\nImagine a student:\n• Name and grades are different (instance)\n• School is the same (class)'
    },
    codeExample: `class Student:
    # Class variable - shared by ALL students
    school_name = "Python High School"
    total_students = 0
    
    def __init__(self, name, grade, subject):
        # Instance variables - unique to EACH student
        self.name = name        # Different for each student
        self.grade = grade      # Different for each student
        self.subject = subject  # Different for each student
        
        # Update class variable when new student is created
        Student.total_students += 1
    
    def display_info(self):
        print(f"Student: {self.name}")
        print(f"Grade: {self.grade} in {self.subject}")
        print(f"School: {Student.school_name}")
        print(f"Total students in school: {Student.total_students}")
        print("-" * 30)

# Create students
alice = Student("Alice", 95, "Math")
bob = Student("Bob", 87, "Science")
charlie = Student("Charlie", 92, "History")

# Each student has different instance variables
alice.display_info()
bob.display_info()

# But they share the same class variables
print(f"School for all: {Student.school_name}")
print(f"Total students: {Student.total_students}")`,
    exercise: {
      instruction: {
        ht: 'Kreye yon klas "Animal" ak yon varyab klas "kingdom" ak varyab instance "name" ak "sound".',
        fr: 'Créez une classe "Animal" avec une variable de classe "kingdom" et des variables d\'instance "name" et "sound".',
        en: 'Create a class "Animal" with a class variable "kingdom" and instance variables "name" and "sound".'
      },
      startingCode: `class Animal:
    # TODO: Add class variable 'kingdom'
    
    def __init__(self, name, sound):
        # TODO: Add instance variables
        pass
    
    def make_sound(self):
        # TODO: Print the animal's sound
        pass

# Test your class
# dog = Animal("Dog", "Woof")
# cat = Animal("Cat", "Meow")`,
      solution: `class Animal:
    # Class variable - shared by all animals
    kingdom = "Animalia"
    count = 0
    
    def __init__(self, name, sound):
        # Instance variables - unique to each animal
        self.name = name
        self.sound = sound
        Animal.count += 1
    
    def make_sound(self):
        print(f"{self.name} says {self.sound}!")
    
    def info(self):
        print(f"Animal: {self.name}")
        print(f"Sound: {self.sound}")
        print(f"Kingdom: {Animal.kingdom}")
        print(f"Total animals: {Animal.count}")

# Test the class
dog = Animal("Dog", "Woof")
cat = Animal("Cat", "Meow")
cow = Animal("Cow", "Moo")

dog.make_sound()  # Dog says Woof!
cat.make_sound()  # Cat says Meow!

print(f"All animals belong to: {Animal.kingdom}")
print(f"Total animals created: {Animal.count}")`
    }
  },

  // Card 5: Methods in Classes
  {
    id: 'class-methods',
    title: {
      ht: 'Metòd yo nan Klas yo',
      fr: 'Méthodes dans les Classes',
      en: 'Methods in Classes'
    },
    content: {
      ht: 'Metòd yo se fonksyon ki nan klas yo. Yo ka:\n• Itilize done objè a (attributes)\n• Chanje valè yo\n• Fè kalkil\n• Retounen rezilta yo\n\nPremye paramèt la toujou "self" - li refere nan objè kounye a.',
      fr: 'Les méthodes sont des fonctions à l\'intérieur des classes. Elles peuvent :\n• Utiliser les données de l\'objet (attributs)\n• Changer les valeurs\n• Faire des calculs\n• Retourner des résultats\n\nLe premier paramètre est toujours "self" - il se réfère à l\'objet actuel.',
      en: 'Methods are functions inside classes. They can:\n• Use object data (attributes)\n• Change values\n• Do calculations\n• Return results\n\nThe first parameter is always "self" - it refers to the current object.'
    },
    codeExample: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.x = 0  # position
        self.y = 0  # position
    
    # Method to calculate area
    def area(self):
        return self.width * self.height
    
    # Method to calculate perimeter
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    # Method to change size
    def resize(self, new_width, new_height):
        self.width = new_width
        self.height = new_height
        print(f"Resized to {new_width} x {new_height}")
    
    # Method to move rectangle
    def move(self, x, y):
        self.x = x
        self.y = y
        print(f"Moved to position ({x}, {y})")
    
    # Method to display info
    def display_info(self):
        print(f"Rectangle: {self.width} x {self.height}")
        print(f"Position: ({self.x}, {self.y})")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")

# Create and use a rectangle
rect = Rectangle(10, 5)
rect.display_info()

rect.resize(8, 6)
rect.move(10, 20)
rect.display_info()`,
    quiz: {
      question: {
        ht: 'Ki pwemye paramèt metòd yo nan yon klas?',
        fr: 'Quel est le premier paramètre des méthodes dans une classe ?',
        en: 'What is the first parameter of methods in a class?'
      },
      options: [
        { ht: 'this', fr: 'this', en: 'this' },
        { ht: 'self', fr: 'self', en: 'self' },
        { ht: 'object', fr: 'object', en: 'object' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '"self" se premye paramèt yo nan tout metòd klas yo. Li refere nan objè kounye a.',
        fr: '"self" est le premier paramètre de toutes les méthodes de classe. Il se réfère à l\'objet actuel.',
        en: '"self" is the first parameter of all class methods. It refers to the current object.'
      }
    }
  },

  // Card 6: Updating Attributes
  {
    id: 'updating-attributes',
    title: {
      ht: 'Modifye Attributes yo',
      fr: 'Modifier les Attributs',
      en: 'Updating Attributes'
    },
    content: {
      ht: 'Nou ka chanje valè attributes yo nan de fason:\n\n1. **Dirèkteman**: object.attribute = new_value\n2. **Ak metòd**: object.update_method(new_value)\n\nLi pi bon itilize metòd yo paske nou ka ajoute validasyon ak lòt règ yo.',
      fr: 'Nous pouvons changer les valeurs des attributs de deux façons :\n\n1. **Directement** : object.attribute = new_value\n2. **Avec des méthodes** : object.update_method(new_value)\n\nIl est préférable d\'utiliser des méthodes car nous pouvons ajouter validation et autres règles.',
      en: 'We can change attribute values in two ways:\n\n1. **Directly**: object.attribute = new_value\n2. **With methods**: object.update_method(new_value)\n\nIt\'s better to use methods because we can add validation and other rules.'
    },
    codeExample: `class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance
        self.transaction_history = []
    
    def deposit(self, amount):
        if amount <= 0:
            print("❌ Deposit amount must be positive!")
            return False
        
        self.balance += amount
        self.transaction_history.append(f"Deposited: +$" + str(amount))
        print(f"✅ Deposited $" + str(amount) + f". New balance: $" + str(self.balance))
        return True
    
    def withdraw(self, amount):
        if amount <= 0:
            print("❌ Withdrawal amount must be positive!")
            return False
        
        if amount > self.balance:
            print("❌ Insufficient funds!")
            return False
        
        self.balance -= amount
        self.transaction_history.append(f"Withdrew: -$" + str(amount))
        print(f"✅ Withdrew $" + str(amount) + f". New balance: $" + str(self.balance))
        return True
    
    def update_owner(self, new_owner):
        old_owner = self.owner
        self.owner = new_owner
        print(f"Account owner changed from {old_owner} to {new_owner}")
    
    def show_history(self):
        print(f"\\nTransaction History for {self.owner}:")
        for transaction in self.transaction_history:
            print(f"  • {transaction}")
        print(f"Current balance: $" + str(self.balance))

# Example usage
account = BankAccount("Alice", 100)

# Update through methods (recommended)
account.deposit(50)
account.withdraw(30)
account.withdraw(200)  # Should fail

# Direct update (works but not recommended)
# account.balance = 1000000  # No validation!

account.show_history()`,
    exercise: {
      instruction: {
        ht: 'Kreye yon klas "Counter" ak yon metòd pou monte, desann, ak reset valè a.',
        fr: 'Créez une classe "Counter" avec des méthodes pour incrémenter, décrémenter, et remettre à zéro la valeur.',
        en: 'Create a "Counter" class with methods to increment, decrement, and reset the value.'
      },
      startingCode: `class Counter:
    def __init__(self, start_value=0):
        # TODO: Initialize the counter value
        pass
    
    def increment(self):
        # TODO: Add 1 to the value
        pass
    
    def decrement(self):
        # TODO: Subtract 1 from the value
        pass
    
    def reset(self):
        # TODO: Reset to starting value
        pass

# Test your counter
# counter = Counter(5)`,
      solution: `class Counter:
    def __init__(self, start_value=0):
        self.value = start_value
        self.start_value = start_value  # Remember starting value
    
    def increment(self, step=1):
        self.value += step
        print(f"Counter incremented by {step}. Value: {self.value}")
    
    def decrement(self, step=1):
        self.value -= step
        print(f"Counter decremented by {step}. Value: {self.value}")
    
    def reset(self):
        old_value = self.value
        self.value = self.start_value
        print(f"Counter reset from {old_value} to {self.value}")
    
    def get_value(self):
        return self.value
    
    def set_value(self, new_value):
        old_value = self.value
        self.value = new_value
        print(f"Counter changed from {old_value} to {new_value}")

# Test the counter
counter = Counter(5)
print(f"Starting value: {counter.get_value()}")

counter.increment()     # Value: 6
counter.increment(3)    # Value: 9
counter.decrement()     # Value: 8
counter.decrement(2)    # Value: 6
counter.reset()         # Value: 5
counter.set_value(10)   # Value: 10`
    }
  },

  // Card 7: Real-world Example - Student System
  {
    id: 'student-system-example',
    title: {
      ht: 'Egzanp Reyèl: Sistèm Etidyan',
      fr: 'Exemple Réel : Système d\'Étudiant',
      en: 'Real-world Example: Student System'
    },
    content: {
      ht: 'Gade kijan nou ka itilize klas yo pou kreye yon sistèm jesyon etidyan konplè ak nòt, kalkil mwayèn, ak estati yo.',
      fr: 'Voyez comment nous pouvons utiliser les classes pour créer un système de gestion d\'étudiant complet avec notes, calcul de moyenne, et statuts.',
      en: 'See how we can use classes to create a complete student management system with grades, average calculation, and statuses.'
    },
    codeExample: `class Student:
    # Class variables
    total_students = 0
    school_name = "Python Academy"
    
    def __init__(self, name, student_id, grade_level):
        # Instance variables
        self.name = name
        self.student_id = student_id
        self.grade_level = grade_level
        self.grades = {}  # Subject: [list of grades]
        self.enrollment_date = "2024-01-15"
        
        # Update class variable
        Student.total_students += 1
    
    def add_grade(self, subject, grade):
        if 0 <= grade <= 100:
            if subject not in self.grades:
                self.grades[subject] = []
            self.grades[subject].append(grade)
            print(f"✅ Added grade {grade} for {subject}")
        else:
            print("❌ Grade must be between 0 and 100")
    
    def calculate_subject_average(self, subject):
        if subject in self.grades and self.grades[subject]:
            average = sum(self.grades[subject]) / len(self.grades[subject])
            return round(average, 2)
        return 0
    
    def calculate_overall_average(self):
        total_points = 0
        total_grades = 0
        for subject_grades in self.grades.values():
            total_points += sum(subject_grades)
            total_grades += len(subject_grades)
        
        if total_grades > 0:
            return round(total_points / total_grades, 2)
        return 0
    
    def get_status(self):
        avg = self.calculate_overall_average()
        if avg >= 90: return "Excellent"
        elif avg >= 80: return "Good"
        elif avg >= 70: return "Satisfactory"
        elif avg >= 60: return "Needs Improvement"
        else: return "Failing"
    
    def generate_report(self):
        print(f"\\n📊 STUDENT REPORT")
        print(f"=" * 40)
        print(f"Name: {self.name}")
        print(f"ID: {self.student_id}")
        print(f"Grade Level: {self.grade_level}")
        print(f"School: {Student.school_name}")
        print(f"\\nSubject Grades:")
        
        for subject, grades in self.grades.items():
            avg = self.calculate_subject_average(subject)
            print(f"  {subject}: {grades} (Average: {avg})")
        
        overall = self.calculate_overall_average()
        status = self.get_status()
        print(f"\\nOverall Average: {overall}%")
        print(f"Status: {status}")
        print(f"Total students in school: {Student.total_students}")

# Example usage
student1 = Student("Alice Johnson", "ST001", 10)
student2 = Student("Bob Smith", "ST002", 10)

# Add grades
student1.add_grade("Math", 95)
student1.add_grade("Math", 87)
student1.add_grade("Science", 92)
student1.add_grade("English", 88)

student2.add_grade("Math", 78)
student2.add_grade("Science", 85)

# Generate reports
student1.generate_report()
student2.generate_report()`,
    quiz: {
      question: {
        ht: 'Nan egzanp la, ki sa ki yon instance variable?',
        fr: 'Dans l\'exemple, qu\'est-ce qui est une variable d\'instance ?',
        en: 'In the example, what is an instance variable?'
      },
      options: [
        { ht: 'total_students', fr: 'total_students', en: 'total_students' },
        { ht: 'self.name', fr: 'self.name', en: 'self.name' },
        { ht: 'school_name', fr: 'school_name', en: 'school_name' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'self.name se yon instance variable paske chak etidyan gen non li yo.',
        fr: 'self.name est une variable d\'instance car chaque étudiant a son propre nom.',
        en: 'self.name is an instance variable because each student has their own name.'
      }
    }
  },

  // Card 8: Advanced Methods and Properties
  {
    id: 'advanced-methods',
    title: {
      ht: 'Metòd ak Pwòpriyete Avanse',
      fr: 'Méthodes et Propriétés Avancées',
      en: 'Advanced Methods and Properties'
    },
    content: {
      ht: 'Nou ka kreye metòd ki:\n• Valide done yo\n• Kalkile valè ki konplèks\n• Retounen enfòmasyon fòmate\n• Konpare objè yo\n\nSa yo ede kreye kòd ki pi entèlijan ak pi itilizab.',
      fr: 'Nous pouvons créer des méthodes qui :\n• Valident les données\n• Calculent des valeurs complexes\n• Retournent des informations formatées\n• Comparent des objets\n\nCelles-ci aident à créer du code plus intelligent et utilisable.',
      en: 'We can create methods that:\n• Validate data\n• Calculate complex values\n• Return formatted information\n• Compare objects\n\nThese help create smarter and more usable code.'
    },
    codeExample: `class Product:
    def __init__(self, name, price, quantity=0):
        self.name = name
        self.set_price(price)  # Use setter for validation
        self.quantity = quantity
        self.sales_history = []
    
    def set_price(self, price):
        """Validate and set price"""
        if price < 0:
            raise ValueError("Price cannot be negative!")
        self.price = round(price, 2)
    
    def add_stock(self, amount):
        """Add to inventory"""
        if amount <= 0:
            print("❌ Amount must be positive")
            return
        self.quantity += amount
        print(f"✅ Added {amount} units. Stock: {self.quantity}")
    
    def sell(self, amount, customer="Unknown"):
        """Sell product and track history"""
        if amount > self.quantity:
            print(f"❌ Only {self.quantity} units available!")
            return False
        
        self.quantity -= amount
        revenue = amount * self.price
        self.sales_history.append({
            'customer': customer,
            'quantity': amount,
            'revenue': revenue
        })
        print(f"✅ Sold {amount} units to {customer}")
        return True
    
    def calculate_total_revenue(self):
        """Calculate total revenue from all sales"""
        return sum(sale['revenue'] for sale in self.sales_history)
    
    def is_low_stock(self, threshold=5):
        """Check if stock is low"""
        return self.quantity <= threshold
    
    def get_summary(self):
        """Return formatted product summary"""
        total_revenue = self.calculate_total_revenue()
        total_sold = sum(sale['quantity'] for sale in self.sales_history)
        
        return f"""
📦 PRODUCT SUMMARY
Name: {self.name}
Price: $" + str(self.price) + f"
Current Stock: {self.quantity}
Total Sold: {total_sold}
Total Revenue: $" + str(round(total_revenue, 2)) + f"
Low Stock Warning: {'⚠️ YES' if self.is_low_stock() else '✅ NO'}
        """.strip()
    
    def __str__(self):
        """String representation of the product"""
        return f"{self.name} ($" + str(self.price) + f") - Stock: {self.quantity}"

# Example usage
laptop = Product("Gaming Laptop", 1299.99, 10)
phone = Product("Smartphone", 699.50, 15)

# Use the methods
laptop.sell(2, "Alice")
laptop.sell(3, "Bob")
laptop.add_stock(5)

phone.sell(8, "Charlie")

# Get summaries
print(laptop.get_summary())
print()
print(phone.get_summary())

# Use string representation
print(f"\\nProducts: {laptop}, {phone}")`,
    exercise: {
      instruction: {
        ht: 'Kreye yon klas "Temperature" ki ka konvèti ant Celsius ak Fahrenheit ak valide valè yo.',
        fr: 'Créez une classe "Temperature" qui peut convertir entre Celsius et Fahrenheit et valider les valeurs.',
        en: 'Create a "Temperature" class that can convert between Celsius and Fahrenheit and validate values.'
      },
      startingCode: `class Temperature:
    def __init__(self, value, unit="C"):
        # TODO: Initialize temperature with validation
        pass
    
    def to_fahrenheit(self):
        # TODO: Convert to Fahrenheit
        pass
    
    def to_celsius(self):
        # TODO: Convert to Celsius
        pass

# Test your class
# temp = Temperature(25, "C")`,
      solution: `class Temperature:
    def __init__(self, value, unit="C"):
        self.unit = unit.upper()
        if self.unit not in ["C", "F"]:
            raise ValueError("Unit must be 'C' or 'F'")
        
        # Validate temperature (absolute zero check)
        if unit.upper() == "C" and value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        elif unit.upper() == "F" and value < -459.67:
            raise ValueError("Temperature below absolute zero!")
        
        self.value = round(value, 2)
    
    def to_fahrenheit(self):
        """Convert current temperature to Fahrenheit"""
        if self.unit == "C":
            fahrenheit = (self.value * 9/5) + 32
            return Temperature(fahrenheit, "F")
        return self  # Already in Fahrenheit
    
    def to_celsius(self):
        """Convert current temperature to Celsius"""
        if self.unit == "F":
            celsius = (self.value - 32) * 5/9
            return Temperature(celsius, "C")
        return self  # Already in Celsius
    
    def is_freezing(self):
        """Check if water freezes at this temperature"""
        celsius_temp = self.to_celsius()
        return celsius_temp.value <= 0
    
    def is_boiling(self):
        """Check if water boils at this temperature (at sea level)"""
        celsius_temp = self.to_celsius()
        return celsius_temp.value >= 100
    
    def get_description(self):
        """Get descriptive text about the temperature"""
        if self.is_freezing():
            condition = "❄️ Freezing"
        elif self.is_boiling():
            condition = "🔥 Boiling"
        elif self.value >= 20 and self.unit == "C":
            condition = "🌞 Pleasant"
        else:
            condition = "🌡️ Moderate"
        
        return f"{condition} - {self.value}°{self.unit}"
    
    def __str__(self):
        return f"{self.value}°{self.unit}"

# Test the class
temp_c = Temperature(25, "C")
temp_f = Temperature(77, "F")

print(f"Original: {temp_c}")
print(f"To Fahrenheit: {temp_c.to_fahrenheit()}")
print(f"Description: {temp_c.get_description()}")

print(f"\\nOriginal: {temp_f}")
print(f"To Celsius: {temp_f.to_celsius()}")
print(f"Is freezing? {temp_f.is_freezing()}")

# Test extreme temperatures
ice = Temperature(0, "C")
steam = Temperature(100, "C")
print(f"\\nIce: {ice.get_description()}")
print(f"Steam: {steam.get_description()}")`
    }
  },

  // Card 9: Object Comparison and Special Methods
  {
    id: 'object-comparison',
    title: {
      ht: 'Konparezon Objè ak Metòd Espesyal',
      fr: 'Comparaison d\'Objets et Méthodes Spéciales',
      en: 'Object Comparison and Special Methods'
    },
    content: {
      ht: 'Python gen metòd espesyal (magic methods) ki kòmanse ak ak fini ak __. Yo pèmèt nou:\n• Konpare objè yo (==, <, >)\n• Montre objè yo kòm string (__str__)\n• Kalkile longè yo (__len__)\n• Ak anpil lòt bagay',
      fr: 'Python a des méthodes spéciales (magic methods) qui commencent et finissent par __. Elles nous permettent de :\n• Comparer des objets (==, <, >)\n• Afficher des objets comme strings (__str__)\n• Calculer des longueurs (__len__)\n• Et beaucoup d\'autres choses',
      en: 'Python has special methods (magic methods) that start and end with __. They allow us to:\n• Compare objects (==, <, >)\n• Display objects as strings (__str__)\n• Calculate lengths (__len__)\n• And many other things'
    },
    codeExample: `class Player:
    def __init__(self, name, score=0, level=1):
        self.name = name
        self.score = score
        self.level = level
        self.achievements = []
    
    def add_points(self, points):
        self.score += points
        # Auto-level up every 1000 points
        new_level = (self.score // 1000) + 1
        if new_level > self.level:
            self.level = new_level
            print(f"🎉 {self.name} leveled up to level {self.level}!")
    
    def add_achievement(self, achievement):
        if achievement not in self.achievements:
            self.achievements.append(achievement)
            print(f"🏆 {self.name} unlocked: {achievement}")
    
    # Special method for string representation
    def __str__(self):
        return f"{self.name} (Level {self.level}, Score: {self.score})"
    
    # Special method for detailed representation
    def __repr__(self):
        return f"Player('{self.name}', {self.score}, {self.level})"
    
    # Special method for equality comparison
    def __eq__(self, other):
        if isinstance(other, Player):
            return self.score == other.score
        return False
    
    # Special method for less than comparison
    def __lt__(self, other):
        if isinstance(other, Player):
            return self.score < other.score
        return False
    
    # Special method for greater than comparison
    def __gt__(self, other):
        if isinstance(other, Player):
            return self.score > other.score
        return False
    
    # Special method for length (number of achievements)
    def __len__(self):
        return len(self.achievements)
    
    def get_rank(self):
        if self.score >= 5000: return "🏆 Master"
        elif self.score >= 2000: return "⭐ Expert"
        elif self.score >= 500: return "🎯 Intermediate"
        else: return "🌱 Beginner"

# Create players
alice = Player("Alice")
bob = Player("Bob")
charlie = Player("Charlie")

# Add points and achievements
alice.add_points(2500)
alice.add_achievement("First Victory")
alice.add_achievement("Speed Runner")

bob.add_points(1800)
bob.add_achievement("Team Player")

charlie.add_points(2500)
charlie.add_achievement("Perfect Score")

# Use special methods
print("\\n👥 PLAYERS:")
print(alice)  # Uses __str__
print(bob)
print(charlie)

print("\\n🏆 ACHIEVEMENTS:")
print(f"{alice.name}: {len(alice)} achievements")  # Uses __len__
print(f"{bob.name}: {len(bob)} achievements")

print("\\n⚖️ COMPARISONS:")
print(f"Alice == Charlie? {alice == charlie}")  # Uses __eq__
print(f"Bob < Alice? {bob < alice}")            # Uses __lt__
print(f"Alice > Bob? {alice > bob}")            # Uses __gt__

# Sort players by score
players = [alice, bob, charlie]
players.sort()  # Uses __lt__ for sorting
print(f"\\n📊 LEADERBOARD (sorted by score):")
for i, player in enumerate(players, 1):
    print(f"{i}. {player} - {player.get_rank()}")`,
    quiz: {
      question: {
        ht: 'Ki metòd espesyal yo itilize pou montre yon objè kòm string?',
        fr: 'Quelle méthode spéciale est utilisée pour afficher un objet comme string ?',
        en: 'Which special method is used to display an object as a string?'
      },
      options: [
        { ht: '__show__', fr: '__show__', en: '__show__' },
        { ht: '__str__', fr: '__str__', en: '__str__' },
        { ht: '__display__', fr: '__display__', en: '__display__' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: '__str__ se metòd espesyal ki itilize lè ou print() oswa str() yon objè.',
        fr: '__str__ est la méthode spéciale utilisée quand vous print() ou str() un objet.',
        en: '__str__ is the special method used when you print() or str() an object.'
      }
    }
  },

  // Card 10: Building a Complete Class System
  {
    id: 'complete-class-system',
    title: {
      ht: 'Konstwi yon Sistèm Klas Konplè',
      fr: 'Construire un Système de Classe Complet',
      en: 'Building a Complete Class System'
    },
    content: {
      ht: 'Gade kijan nou konbine tout konsèp yo pou kreye yon sistèm konplè ak plizyè klas ki travay ansanm.',
      fr: 'Voyez comment nous combinons tous les concepts pour créer un système complet avec plusieurs classes qui travaillent ensemble.',
      en: 'See how we combine all concepts to create a complete system with multiple classes working together.'
    },
    codeExample: `class Book:
    def __init__(self, title, author, isbn, copies=1):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.copies = copies
        self.borrowed_copies = 0
    
    def borrow(self):
        if self.copies > self.borrowed_copies:
            self.borrowed_copies += 1
            return True
        return False
    
    def return_book(self):
        if self.borrowed_copies > 0:
            self.borrowed_copies -= 1
            return True
        return False
    
    def available_copies(self):
        return self.copies - self.borrowed_copies
    
    def __str__(self):
        return f"'{self.title}' by {self.author}"

class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []
        self.max_books = 3
    
    def can_borrow(self):
        return len(self.borrowed_books) < self.max_books
    
    def borrow_book(self, book):
        if not self.can_borrow():
            return False, "Maximum books borrowed"
        if not book.borrow():
            return False, "Book not available"
        
        self.borrowed_books.append(book)
        return True, f"Successfully borrowed {book}"
    
    def return_book(self, book):
        if book in self.borrowed_books:
            book.return_book()
            self.borrowed_books.remove(book)
            return True, f"Successfully returned {book}"
        return False, "Book not borrowed by this member"
    
    def __str__(self):
        return f"Member: {self.name} (ID: {self.member_id})"

class Library:
    def __init__(self, name):
        self.name = name
        self.books = {}  # ISBN -> Book
        self.members = {}  # ID -> Member
        self.transaction_log = []
    
    def add_book(self, book):
        if book.isbn in self.books:
            # Add more copies if book exists
            self.books[book.isbn].copies += book.copies
        else:
            self.books[book.isbn] = book
        print(f"✅ Added {book} to library")
    
    def register_member(self, member):
        self.members[member.member_id] = member
        print(f"✅ Registered {member}")
    
    def borrow_book(self, member_id, isbn):
        if member_id not in self.members:
            return "❌ Member not found"
        if isbn not in self.books:
            return "❌ Book not found"
        
        member = self.members[member_id]
        book = self.books[isbn]
        
        success, message = member.borrow_book(book)
        
        if success:
            self.transaction_log.append(f"{member.name} borrowed {book}")
            return f"✅ {message}"
        else:
            return f"❌ {message}"
    
    def return_book(self, member_id, isbn):
        if member_id not in self.members:
            return "❌ Member not found"
        if isbn not in self.books:
            return "❌ Book not found"
        
        member = self.members[member_id]
        book = self.books[isbn]
        
        success, message = member.return_book(book)
        
        if success:
            self.transaction_log.append(f"{member.name} returned {book}")
            return f"✅ {message}"
        else:
            return f"❌ {message}"
    
    def show_status(self):
        print(f"\\n📚 {self.name} STATUS")
        print("=" * 40)
        print(f"Books: {len(self.books)}")
        print(f"Members: {len(self.members)}")
        print(f"Transactions: {len(self.transaction_log)}")
        
        print("\\n📖 BOOKS:")
        for book in self.books.values():
            print(f"  {book} - Available: {book.available_copies()}/{book.copies}")
        
        print("\\n👥 MEMBERS:")
        for member in self.members.values():
            books_count = len(member.borrowed_books)
            print(f"  {member} - Books: {books_count}/{member.max_books}")

# Example usage - Complete library system
library = Library("City Library")

# Add books
book1 = Book("1984", "George Orwell", "978-0-452-28423-4", 2)
book2 = Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4", 1)
book3 = Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5", 3)

library.add_book(book1)
library.add_book(book2)
library.add_book(book3)

# Register members
member1 = Member("Alice Johnson", "M001")
member2 = Member("Bob Smith", "M002")

library.register_member(member1)
library.register_member(member2)

# Borrow and return books
print("\\n📚 LIBRARY TRANSACTIONS:")
print(library.borrow_book("M001", "978-0-452-28423-4"))
print(library.borrow_book("M001", "978-0-06-112008-4"))
print(library.borrow_book("M002", "978-0-452-28423-4"))
print(library.borrow_book("M001", "978-0-7432-7356-5"))  # Should fail - max books

print(library.return_book("M001", "978-0-06-112008-4"))

library.show_status()`,
    exercise: {
      instruction: {
        ht: 'Kreye yon klas "ShoppingCart" ki ka ajoute ak retire pwodwi yo ak kalkile total la.',
        fr: 'Créez une classe "ShoppingCart" qui peut ajouter et retirer des produits et calculer le total.',
        en: 'Create a "ShoppingCart" class that can add and remove products and calculate the total.'
      },
      startingCode: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class ShoppingCart:
    def __init__(self):
        # TODO: Initialize empty cart
        pass
    
    def add_product(self, product, quantity=1):
        # TODO: Add product to cart
        pass
    
    def calculate_total(self):
        # TODO: Calculate total price
        pass

# Test your classes`,
      solution: `class Product:
    def __init__(self, name, price, category="General"):
        self.name = name
        self.price = round(price, 2)
        self.category = category
    
    def __str__(self):
        return f"{self.name} ($" + str(self.price) + ")"
    
    def __eq__(self, other):
        return isinstance(other, Product) and self.name == other.name

class ShoppingCart:
    def __init__(self, owner="Guest"):
        self.owner = owner
        self.items = {}  # Product -> quantity
        self.discount_rate = 0.0
    
    def add_product(self, product, quantity=1):
        if quantity <= 0:
            print("❌ Quantity must be positive")
            return
        
        if product in self.items:
            self.items[product] += quantity
        else:
            self.items[product] = quantity
        
        print(f"✅ Added {quantity}x {product} to cart")
    
    def remove_product(self, product, quantity=None):
        if product not in self.items:
            print(f"❌ {product} not in cart")
            return
        
        if quantity is None:
            # Remove all
            removed = self.items[product]
            del self.items[product]
            print(f"✅ Removed all {removed}x {product}")
        else:
            if quantity >= self.items[product]:
                removed = self.items[product]
                del self.items[product]
                print(f"✅ Removed all {removed}x {product}")
            else:
                self.items[product] -= quantity
                print(f"✅ Removed {quantity}x {product}")
    
    def calculate_subtotal(self):
        return sum(product.price * quantity for product, quantity in self.items.items())
    
    def apply_discount(self, rate):
        if 0 <= rate <= 1:
            self.discount_rate = rate
            print(f"✅ Applied {rate*100}% discount")
        else:
            print("❌ Discount rate must be between 0 and 1")
    
    def calculate_total(self):
        subtotal = self.calculate_subtotal()
        discount = subtotal * self.discount_rate
        return round(subtotal - discount, 2)
    
    def get_item_count(self):
        return sum(self.items.values())
    
    def show_cart(self):
        print(f"\\n🛒 {self.owner}'s Shopping Cart")
        print("=" * 30)
        
        if not self.items:
            print("Cart is empty")
            return
        
        for product, quantity in self.items.items():
            item_total = product.price * quantity
            print(f"{quantity}x {product} = $" + str(round(item_total, 2)))
        
        subtotal = self.calculate_subtotal()
        discount = subtotal * self.discount_rate
        total = self.calculate_total()
        
        print("-" * 30)
        print(f"Subtotal: $" + str(round(subtotal, 2)))
        if self.discount_rate > 0:
            print(f"Discount ({self.discount_rate*100}%): -$" + str(round(discount, 2)))
        print(f"TOTAL: $" + str(round(total, 2)))
        print(f"Items: {self.get_item_count()}")
    
    def __len__(self):
        return self.get_item_count()

# Test the classes
cart = ShoppingCart("Alice")

# Create products
laptop = Product("Gaming Laptop", 1299.99, "Electronics")
mouse = Product("Wireless Mouse", 29.99, "Electronics")
keyboard = Product("Mechanical Keyboard", 149.99, "Electronics")
book = Product("Python Programming", 39.99, "Books")

# Add products to cart
cart.add_product(laptop, 1)
cart.add_product(mouse, 2)
cart.add_product(keyboard, 1)
cart.add_product(book, 3)

# Show cart
cart.show_cart()

# Apply discount and show again
cart.apply_discount(0.1)  # 10% discount
cart.show_cart()

# Remove some items
cart.remove_product(mouse, 1)
cart.show_cart()`
    }
  }
];

// Lesson object that matches the structure expected by PythonCardLessonPlayer
export const pythonWeek13Lesson = {
  title: {
    ht: 'Object-Oriented Programming (OOP)',
    fr: 'Programmation Orientée Objet (POO)',
    en: 'Object-Oriented Programming (OOP)'
  },
  cards: pythonWeek13Cards,
  miniProject: {
    title: {
      ht: 'Mini Pwojè: Simiratè Kont Bank',
      fr: 'Mini-Projet : Simulateur de Compte Bancaire',
      en: 'Mini Project: Bank Account Simulator'
    },
    description: {
      ht: 'Kreye yon sistèm kont bank konplè ak klas yo ki ka jesyone depo, retrè, ak antèrè yo.',
      fr: 'Créez un système de compte bancaire complet avec des classes qui peuvent gérer les dépôts, retraits, et intérêts.',
      en: 'Create a complete bank account system with classes that can manage deposits, withdrawals, and interest.'
    },
    requirements: {
      ht: [
        'Klas BankAccount ak owner, balance, ak account_type',
        'Metòd pou depo ak retrè ak validasyon',
        'Kalkile ak ajoute antèrè',
        'Istorik tranzaksyon yo ak notifikasyon',
        'Diferan tip kont (Savings, Checking, Business)',
        'Rapò detaye ak estatistik yo'
      ],
      fr: [
        'Classe BankAccount avec owner, balance, et account_type',
        'Méthodes pour dépôt et retrait avec validation',
        'Calculer et ajouter des intérêts',
        'Historique des transactions et notifications',
        'Différents types de comptes (Épargne, Courant, Affaires)',
        'Rapports détaillés et statistiques'
      ],
      en: [
        'BankAccount class with owner, balance, and account_type',
        'Methods for deposit and withdrawal with validation',
        'Calculate and add interest',
        'Transaction history and notifications',
        'Different account types (Savings, Checking, Business)',
        'Detailed reports and statistics'
      ]
    },
    starterCode: `# Bank Account Simulator
from datetime import datetime

class BankAccount:
    # Class variables
    total_accounts = 0
    bank_name = "Python Bank"
    
    def __init__(self, owner, initial_balance=0, account_type="checking"):
        # TODO: Initialize account attributes
        self.owner = owner
        self.balance = initial_balance
        self.account_type = account_type
        # TODO: Add account number, creation date, transaction history
        # TODO: Update total_accounts
        pass
    
    def deposit(self, amount):
        # TODO: Add money with validation
        # TODO: Record transaction
        pass
    
    def withdraw(self, amount):
        # TODO: Remove money with validation
        # TODO: Check for sufficient funds
        # TODO: Record transaction
        pass
    
    def calculate_interest(self):
        # TODO: Calculate interest based on account type
        # Savings: 2.5%, Checking: 0.1%, Business: 1.5%
        pass
    
    def generate_statement(self):
        # TODO: Show account summary and recent transactions
        pass

# TODO: Create and test your bank account system
print("🏦 Welcome to Python Bank!")`,
    sampleSolution: `# Complete Bank Account Simulator
from datetime import datetime
import random

class BankAccount:
    # Class variables
    total_accounts = 0
    bank_name = "Python Bank"
    interest_rates = {
        "savings": 0.025,      # 2.5%
        "checking": 0.001,     # 0.1%
        "business": 0.015      # 1.5%
    }
    
    def __init__(self, owner, initial_balance=0, account_type="checking"):
        # Validate account type
        if account_type not in self.interest_rates:
            raise ValueError("Invalid account type")
        
        # Initialize account attributes
        self.owner = owner
        self.balance = max(0, initial_balance)  # Prevent negative balance
        self.account_type = account_type
        self.account_number = f"ACC{1000 + BankAccount.total_accounts}"
        self.creation_date = datetime.now()
        self.transaction_history = []
        self.is_frozen = False
        
        # Record initial deposit if any
        if initial_balance > 0:
            self._add_transaction("Initial Deposit", initial_balance)
        
        # Update class variable
        BankAccount.total_accounts += 1
        print(f"✅ Created {account_type.title()} account for {owner}")
        print(f"   Account Number: {self.account_number}")
    
    def _add_transaction(self, description, amount, transaction_type="info"):
        """Private method to record transactions"""
        transaction = {
            'date': datetime.now(),
            'description': description,
            'amount': amount,
            'balance_after': self.balance,
            'type': transaction_type
        }
        self.transaction_history.append(transaction)
    
    def deposit(self, amount, description="Deposit"):
        """Deposit money into account"""
        if self.is_frozen:
            print("❌ Account is frozen. Contact bank.")
            return False
        
        if amount <= 0:
            print("❌ Deposit amount must be positive")
            return False
        
        self.balance += amount
        self._add_transaction(description, amount, "credit")
        print(f"✅ Deposited $" + str(round(amount, 2)))
        print(f"   New balance: $" + str(round(self.balance, 2)))
        
        # Bonus: Alert for large deposits
        if amount >= 10000:
            print("🚨 Large deposit detected - may require verification")
        
        return True
    
    def withdraw(self, amount, description="Withdrawal"):
        """Withdraw money from account"""
        if self.is_frozen:
            print("❌ Account is frozen. Contact bank.")
            return False
        
        if amount <= 0:
            print("❌ Withdrawal amount must be positive")
            return False
        
        # Check account type limits
        if self.account_type == "savings" and amount > 1000:
            print("❌ Savings account: Maximum withdrawal $1,000 per transaction")
            return False
        
        if amount > self.balance:
            print(f"❌ Insufficient funds. Available: $" + str(round(self.balance, 2)))
            self._add_transaction(f"Failed {description}", amount, "failed")
            return False
        
        self.balance -= amount
        self._add_transaction(description, -amount, "debit")
        print(f"✅ Withdrew $" + str(round(amount, 2)))
        print(f"   New balance: $" + str(round(self.balance, 2)))
        
        # Warning for low balance
        if self.balance < 100:
            print("⚠️  Low balance warning!")
        
        return True
    
    def transfer_to(self, other_account, amount):
        """Transfer money to another account"""
        if not isinstance(other_account, BankAccount):
            print("❌ Invalid destination account")
            return False
        
        description_out = f"Transfer to {other_account.owner}"
        description_in = f"Transfer from {self.owner}"
        
        if self.withdraw(amount, description_out):
            other_account.deposit(amount, description_in)
            print(f"✅ Transferred $" + str(round(amount, 2)) + f" to {other_account.owner}")
            return True
        return False
    
    def calculate_interest(self, days=30):
        """Calculate and add interest for given number of days"""
        if self.balance <= 0:
            return 0
        
        annual_rate = self.interest_rates[self.account_type]
        daily_rate = annual_rate / 365
        interest = self.balance * daily_rate * days
        
        if interest > 0:
            self.balance += interest
            self._add_transaction(f"Interest ({days} days)", interest, "interest")
            print(f"✅ Added $" + str(round(interest, 2)) + " interest")
            print(f"   New balance: $" + str(round(self.balance, 2)))
        
        return interest
    
    def freeze_account(self, reason="Security"):
        """Freeze account to prevent transactions"""
        self.is_frozen = True
        self._add_transaction(f"Account Frozen: {reason}", 0, "system")
        print(f"🔒 Account frozen: {reason}")
    
    def unfreeze_account(self):
        """Unfreeze account"""
        self.is_frozen = False
        self._add_transaction("Account Unfrozen", 0, "system")
        print("🔓 Account unfrozen")
    
    def get_balance(self):
        """Get current balance"""
        return self.balance
    
    def generate_statement(self, last_n_transactions=10):
        """Generate detailed account statement"""
        print(f"\\n🏦 {BankAccount.bank_name.upper()} - ACCOUNT STATEMENT")
        print("=" * 50)
        print(f"Account Holder: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Account Type: {self.account_type.title()}")
        print(f"Current Balance: $" + str(round(self.balance, 2)))
        print(f"Account Status: {'🔒 FROZEN' if self.is_frozen else '✅ ACTIVE'}")
        print(f"Account Age: {(datetime.now() - self.creation_date).days} days")
        
        if self.transaction_history:
            print(f"\\n📋 RECENT TRANSACTIONS (Last {last_n_transactions}):")
            print("-" * 50)
            recent = self.transaction_history[-last_n_transactions:]
            
            for i, trans in enumerate(recent, 1):
                date_str = trans['date'].strftime("%m/%d %H:%M")
                amount_str = f"$" + str(round(abs(trans['amount']), 2))
                
                # Format based on transaction type
                if trans['type'] == "credit":
                    symbol = "+"
                    amount_str = f"+{amount_str}"
                elif trans['type'] == "debit":
                    symbol = "-"
                    amount_str = f"-{amount_str}"
                else:
                    symbol = "•"
                
                print(f"{i}. {date_str} | {trans['description']} | {amount_str} | $" + str(round(trans['balance_after'], 2)))
        
        # Calculate statistics
        total_deposits = sum(t['amount'] for t in self.transaction_history if t['amount'] > 0)
        total_withdrawals = abs(sum(t['amount'] for t in self.transaction_history if t['amount'] < 0))
        
        print(f"\\n📊 ACCOUNT STATISTICS:")
        print(f"Total Deposits: $" + str(round(total_deposits, 2)))
        print(f"Total Withdrawals: $" + str(round(total_withdrawals, 2)))
        print(f"Total Transactions: {len(self.transaction_history)}")
        print(f"Interest Rate: {round(self.interest_rates[self.account_type]*100, 1)}% annually")
    
    def __str__(self):
        status = "🔒" if self.is_frozen else "✅"
        return f"{status} {self.owner}'s {self.account_type.title()} Account: $" + str(round(self.balance, 2))
    
    def __eq__(self, other):
        return isinstance(other, BankAccount) and self.account_number == other.account_number
    
    def __lt__(self, other):
        return isinstance(other, BankAccount) and self.balance < other.balance

class Bank:
    def __init__(self, name="Python Bank"):
        self.name = name
        self.accounts = {}
        self.daily_transaction_limit = 5000
    
    def create_account(self, owner, initial_balance=0, account_type="checking"):
        account = BankAccount(owner, initial_balance, account_type)
        self.accounts[account.account_number] = account
        return account
    
    def find_account(self, account_number):
        return self.accounts.get(account_number)
    
    def get_bank_summary(self):
        if not self.accounts:
            print("🏦 No accounts in the bank")
            return
        
        total_balance = sum(acc.balance for acc in self.accounts.values())
        account_types = {}
        
        for acc in self.accounts.values():
            account_types[acc.account_type] = account_types.get(acc.account_type, 0) + 1
        
        print(f"\\n🏦 {self.name.upper()} SUMMARY")
        print("=" * 40)
        print(f"Total Accounts: {len(self.accounts)}")
        print(f"Total Assets: $" + str(round(total_balance, 2)))
        print(f"Account Types:")
        for acc_type, count in account_types.items():
            print(f"  • {acc_type.title()}: {count}")

def main():
    """Main program to demonstrate the bank system"""
    print(f"🏦 Welcome to {BankAccount.bank_name}!")
    print("=" * 40)
    
    # Create a bank
    bank = Bank()
    
    # Create accounts
    alice_account = bank.create_account("Alice Johnson", 1000, "savings")
    bob_account = bank.create_account("Bob Smith", 500, "checking")
    business_account = bank.create_account("Tech Corp", 50000, "business")
    
    print("\\n💰 INITIAL BALANCES:")
    print(alice_account)
    print(bob_account)
    print(business_account)
    
    # Demonstrate transactions
    print("\\n💸 PERFORMING TRANSACTIONS...")
    
    alice_account.deposit(500, "Salary")
    alice_account.withdraw(200, "Groceries")
    alice_account.transfer_to(bob_account, 100)
    
    bob_account.deposit(1000, "Freelance Payment")
    bob_account.withdraw(300, "Rent")
    
    business_account.withdraw(5000, "Equipment Purchase")
    business_account.calculate_interest(30)
    
    # Generate statements
    alice_account.generate_statement()
    bob_account.generate_statement()
    
    # Bank summary
    bank.get_bank_summary()
    
    print(f"\\n✅ Bank simulation complete!")
    print(f"Total accounts created: {BankAccount.total_accounts}")

if __name__ == "__main__":
    main()`
  }
};