// Week 9: Dictionaries & Sets
export interface LessonCard {
  id: string;
  type: 'concept' | 'quiz' | 'exercise' | 'project';
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
  exercise?: {
    instruction: {
      ht: string;
      fr: string;
      en: string;
    };
    starterCode?: string;
    solution?: string;
    hint?: {
      ht: string;
      fr: string;
      en: string;
    };
  };
}

export const pythonWeek9Cards: LessonCard[] = [
  // Card 1: Introduction to Dictionaries
  {
    id: 'w9-c1-dict-intro',
    type: 'concept',
    title: {
      ht: 'Sa ki yon Diksyonè?',
      fr: 'Qu\'est-ce qu\'un Dictionnaire?',
      en: 'What Is a Dictionary?'
    },
    content: {
      ht: 'Yon diksyonè se yon estrikti done ki kenbe enfòmasyon kòm pè kle-valè. Li tankou yon liv diksyonè kote ou gen mo yo (kle yo) ak definisyon yo (valè yo).\n\nEgzanp:\nperson = {\n    "name": "Ralph",\n    "age": 30,\n    "city": "Mayagüez"\n}\n\nKle yo aji kòm etikèt, ak valè yo kenbe done yo.',
      fr: 'Un dictionnaire est une structure de données qui stocke des informations sous forme de paires clé-valeur. C\'est comme un dictionnaire de langue où vous avez des mots (clés) et leurs définitions (valeurs).\n\nExemple:\nperson = {\n    "name": "Ralph",\n    "age": 30,\n    "city": "Mayagüez"\n}\n\nLes clés agissent comme des étiquettes, et les valeurs contiennent les données.',
      en: 'A dictionary is a data structure that stores information as key-value pairs. It\'s like a language dictionary where you have words (keys) and their definitions (values).\n\nExample:\nperson = {\n    "name": "Ralph",\n    "age": 30,\n    "city": "Mayagüez"\n}\n\nKeys act as labels, and values hold the data.'
    },
    codeExample: `person = {
    "name": "Ralph",
    "age": 30,
    "city": "Mayagüez"
}

# Access a value using its key
print(person["name"])  # Ralph
print(person["age"])   # 30`
  },

  // Card 2: Quiz - Dictionary Basics
  {
    id: 'w9-c2-dict-basics-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Baz Diksyonè',
      fr: 'Quiz: Bases des Dictionnaires',
      en: 'Quiz: Dictionary Basics'
    },
    content: {
      ht: 'Tèste konesans ou sou diksyonè yo.',
      fr: 'Testez vos connaissances sur les dictionnaires.',
      en: 'Test your knowledge of dictionaries.'
    },
    quiz: {
      question: {
        ht: 'Ki estrikti done ki itilize pè kle-valè?',
        fr: 'Quelle structure de données utilise des paires clé-valeur?',
        en: 'What data structure uses key-value pairs?'
      },
      options: [
        { ht: 'Lis', fr: 'Liste', en: 'List' },
        { ht: 'Diksyonè', fr: 'Dictionnaire', en: 'Dictionary' },
        { ht: 'Tuple', fr: 'Tuple', en: 'Tuple' },
        { ht: 'String', fr: 'Chaîne', en: 'String' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Diksyonè yo se sèl estrikti done ki itilize pè kle-valè pou kenbe enfòmasyon yo.',
        fr: 'Les dictionnaires sont la seule structure de données qui utilise des paires clé-valeur pour stocker les informations.',
        en: 'Dictionaries are the only data structure that uses key-value pairs to store information.'
      }
    }
  },

  // Card 3: Accessing Dictionary Values
  {
    id: 'w9-c3-dict-access',
    type: 'concept',
    title: {
      ht: 'Jwenn Valè nan Diksyonè',
      fr: 'Accéder aux Valeurs du Dictionnaire',
      en: 'Accessing Dictionary Values'
    },
    content: {
      ht: 'Ou ka jwenn valè yo nan diksyonè a lè w sèvi ak kle a.\n\nDe fason pou jwenn valè yo:\n1. Itilize kokèt ka yo: person["name"]\n2. Itilize metòd .get(): person.get("name")\n\n.get() pi an sekirite paske li pa bay erè si kle a pa egziste.',
      fr: 'Vous pouvez accéder aux valeurs du dictionnaire en utilisant la clé.\n\nDeux façons d\'accéder aux valeurs:\n1. Utiliser les crochets: person["name"]\n2. Utiliser la méthode .get(): person.get("name")\n\n.get() est plus sûr car il ne donne pas d\'erreur si la clé n\'existe pas.',
      en: 'You can access dictionary values using the key.\n\nTwo ways to access values:\n1. Use square brackets: person["name"]\n2. Use .get() method: person.get("name")\n\n.get() is safer because it doesn\'t error if the key doesn\'t exist.'
    },
    codeExample: `person = {"name": "Ana", "age": 25, "city": "San Juan"}

# Method 1: Square brackets
print(person["name"])  # Ana

# Method 2: .get() method
print(person.get("age"))     # 25
print(person.get("phone"))   # None
print(person.get("phone", "N/A"))  # N/A (default value)`
  },

  // Card 4: Adding, Changing & Removing Items
  {
    id: 'w9-c4-dict-modify',
    type: 'concept',
    title: {
      ht: 'Ajoute, Chanje ak Efase Eleman yo',
      fr: 'Ajouter, Modifier et Supprimer des Éléments',
      en: 'Adding, Changing & Removing Items'
    },
    content: {
      ht: 'Ou ka modifye diksyonè yo apre ou kreye yo.\n\n• Ajoute nouvo kle: dict["new_key"] = "value"\n• Chanje valè: dict["existing_key"] = "new_value"\n• Efase kle: del dict["key"] oswa dict.pop("key")',
      fr: 'Vous pouvez modifier les dictionnaires après les avoir créés.\n\n• Ajouter une nouvelle clé: dict["new_key"] = "value"\n• Modifier une valeur: dict["existing_key"] = "new_value"\n• Supprimer une clé: del dict["key"] ou dict.pop("key")',
      en: 'You can modify dictionaries after creating them.\n\n• Add new key: dict["new_key"] = "value"\n• Change value: dict["existing_key"] = "new_value"\n• Remove key: del dict["key"] or dict.pop("key")'
    },
    codeExample: `person = {"name": "Carlos", "age": 28}
print(person)  # {'name': 'Carlos', 'age': 28}

# Add new key-value pair
person["country"] = "Puerto Rico"
print(person)  # {'name': 'Carlos', 'age': 28, 'country': 'Puerto Rico'}

# Update existing value
person["age"] = 29
print(person)  # {'name': 'Carlos', 'age': 29, 'country': 'Puerto Rico'}

# Remove a key-value pair
del person["country"]
print(person)  # {'name': 'Carlos', 'age': 29}`
  },

  // Card 5: Exercise - Dictionary Operations
  {
    id: 'w9-c5-dict-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Operasyon Diksyonè',
      fr: 'Exercice: Opérations sur Dictionnaire',
      en: 'Exercise: Dictionary Operations'
    },
    content: {
      ht: 'Pratike operasyon yo sou diksyonè.',
      fr: 'Pratiquer les opérations sur les dictionnaires.',
      en: 'Practice dictionary operations.'
    },
    exercise: {
      instruction: {
        ht: 'Kreye yon diksyonè ki gen enfòmasyon sou yon machin (brand, model, year). Ajoute yon kle "color" ak valè "blue", epi chanje "year" nan 2023.',
        fr: 'Créez un dictionnaire représentant une voiture (brand, model, year). Ajoutez une clé "color" avec la valeur "blue", puis changez "year" à 2023.',
        en: 'Create a dictionary representing a car (brand, model, year). Add a key "color" with value "blue", then change "year" to 2023.'
      },
      starterCode: `# Create your car dictionary here
car = {
    
}

# Add the color key

# Update the year

# Print the final dictionary
print(car)`,
      solution: `car = {
    "brand": "Toyota",
    "model": "Camry", 
    "year": 2020
}

car["color"] = "blue"
car["year"] = 2023

print(car)`,
      hint: {
        ht: 'Itilize car["new_key"] = value pou ajoute nouvo kle yo.',
        fr: 'Utilisez car["new_key"] = value pour ajouter de nouvelles clés.',
        en: 'Use car["new_key"] = value to add new keys.'
      }
    }
  },

  // Card 6: Dictionary Methods
  {
    id: 'w9-c6-dict-methods',
    type: 'concept',
    title: {
      ht: 'Metòd Diksyonè yo ki Itil',
      fr: 'Méthodes de Dictionnaire Utiles',
      en: 'Useful Dictionary Methods'
    },
    content: {
      ht: 'Diksyonè yo gen metòd ki itil pou travay ak yo:\n\n• .keys() - retounen tout kle yo\n• .values() - retounen tout valè yo\n• .items() - retounen pè kle-valè yo\n• .get(kle) - jwenn valè yo ak sekirite\n• .pop(kle) - efase kle a epi retounen valè a',
      fr: 'Les dictionnaires ont des méthodes utiles pour travailler avec eux:\n\n• .keys() - retourne toutes les clés\n• .values() - retourne toutes les valeurs\n• .items() - retourne les paires clé-valeur\n• .get(clé) - obtient une valeur en toute sécurité\n• .pop(clé) - supprime la clé et retourne la valeur',
      en: 'Dictionaries have useful methods for working with them:\n\n• .keys() - returns all keys\n• .values() - returns all values\n• .items() - returns key-value pairs\n• .get(key) - safely gets a value\n• .pop(key) - removes key and returns value'
    },
    codeExample: `student = {"name": "Maria", "age": 20, "major": "Engineering"}

print(student.keys())    # dict_keys(['name', 'age', 'major'])
print(student.values())  # dict_values(['Maria', 20, 'Engineering'])
print(student.items())   # dict_items([('name', 'Maria'), ('age', 20), ('major', 'Engineering')])

grade = student.get("GPA", "Not found")
print(grade)  # Not found

removed_age = student.pop("age")
print(removed_age)  # 20
print(student)      # {'name': 'Maria', 'major': 'Engineering'}`
  },

  // Card 7: Looping Through Dictionaries
  {
    id: 'w9-c7-dict-loops',
    type: 'concept',
    title: {
      ht: 'Fè Loop nan Diksyonè yo',
      fr: 'Boucler à travers les Dictionnaires',
      en: 'Looping Through Dictionaries'
    },
    content: {
      ht: 'Ou ka fè loop nan diksyonè yo pou wè kle yo ak valè yo.\n\nTrwa fason pou fè loop:\n1. Loop nan kle yo: for key in dict\n2. Loop nan valè yo: for value in dict.values()\n3. Loop nan kle ak valè yo: for key, value in dict.items()',
      fr: 'Vous pouvez faire des boucles dans les dictionnaires pour voir les clés et valeurs.\n\nTrois façons de faire des boucles:\n1. Boucler dans les clés: for key in dict\n2. Boucler dans les valeurs: for value in dict.values()\n3. Boucler dans les clés et valeurs: for key, value in dict.items()',
      en: 'You can loop through dictionaries to see keys and values.\n\nThree ways to loop:\n1. Loop through keys: for key in dict\n2. Loop through values: for value in dict.values()\n3. Loop through keys and values: for key, value in dict.items()'
    },
    codeExample: `person = {"name": "Luis", "age": 35, "job": "Teacher"}

# Loop through keys only
for key in person:
    print(key)  # name, age, job

# Loop through values only  
for value in person.values():
    print(value)  # Luis, 35, Teacher

# Loop through both keys and values
for key, value in person.items():
    print(f"{key} → {value}")
# Output:
# name → Luis
# age → 35
# job → Teacher`
  },

  // Card 8: Quiz - Dictionary Methods
  {
    id: 'w9-c8-dict-methods-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Metòd Diksyonè',
      fr: 'Quiz: Méthodes de Dictionnaire',
      en: 'Quiz: Dictionary Methods'
    },
    content: {
      ht: 'Tèste konesans ou sou metòd diksyonè yo.',
      fr: 'Testez vos connaissances sur les méthodes de dictionnaire.',
      en: 'Test your knowledge of dictionary methods.'
    },
    quiz: {
      question: {
        ht: 'Ki metòd ki efase yon eleman nan diksyonè a epi retounen valè a?',
        fr: 'Quelle méthode supprime un élément du dictionnaire et retourne la valeur?',
        en: 'Which method removes an item from a dictionary and returns the value?'
      },
      options: [
        { ht: '.remove()', fr: '.remove()', en: '.remove()' },
        { ht: '.delete()', fr: '.delete()', en: '.delete()' },
        { ht: '.pop()', fr: '.pop()', en: '.pop()' },
        { ht: '.clear()', fr: '.clear()', en: '.clear()' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: '.pop() efase kle a nan diksyonè a epi retounen valè a ki te asosye ak li.',
        fr: '.pop() supprime la clé du dictionnaire et retourne la valeur qui lui était associée.',
        en: '.pop() removes the key from the dictionary and returns the value that was associated with it.'
      }
    }
  },

  // Card 9: Introduction to Sets
  {
    id: 'w9-c9-sets-intro',
    type: 'concept',
    title: {
      ht: 'Sa ki yon Set?',
      fr: 'Qu\'est-ce qu\'un Ensemble?',
      en: 'What Is a Set?'
    },
    content: {
      ht: 'Yon set se yon koleksyon eleman yo ki pa gen òd ak ki pa gen doub.\n\nKarakteristik yo:\n• Pa gen doub - chak eleman parèt yon sèl fwa\n• Pa gen òd - eleman yo pa gen pozisyon\n• Itil pou tcheke si yon bagay nan set la rapidman',
      fr: 'Un ensemble est une collection d\'éléments non ordonnée et sans doublons.\n\nCaractéristiques:\n• Pas de doublons - chaque élément apparaît une seule fois\n• Pas d\'ordre - les éléments n\'ont pas de position\n• Utile pour vérifier l\'appartenance rapidement',
      en: 'A set is an unordered collection of unique items.\n\nCharacteristics:\n• No duplicates - each item appears only once\n• No order - items don\'t have positions\n• Useful for checking membership quickly'
    },
    codeExample: `# Creating sets
fruits = {"apple", "banana", "cherry", "apple"}
print(fruits)  # {'apple', 'banana', 'cherry'} - duplicate removed

numbers = set([1, 2, 3, 2, 1])
print(numbers)  # {1, 2, 3}

# Check if item exists
print("apple" in fruits)     # True
print("orange" in fruits)    # False`
  },

  // Card 10: Set Operations
  {
    id: 'w9-c10-set-operations',
    type: 'concept',
    title: {
      ht: 'Operasyon Set yo',
      fr: 'Opérations sur les Ensembles',
      en: 'Set Operations'
    },
    content: {
      ht: 'Set yo gen operasyon matematik ki itil:\n\n• Union (|): konbine de set yo\n• Intersection (&): eleman yo ki nan de set yo\n• Difference (-): eleman yo ki nan premye a men pa nan dezyèm nan\n• Add ak remove eleman yo',
      fr: 'Les ensembles ont des opérations mathématiques utiles:\n\n• Union (|): combine deux ensembles\n• Intersection (&): éléments dans les deux ensembles\n• Différence (-): éléments dans le premier mais pas le second\n• Ajouter et supprimer des éléments',
      en: 'Sets have useful mathematical operations:\n\n• Union (|): combines two sets\n• Intersection (&): items in both sets\n• Difference (-): items in first but not second\n• Add and remove items'
    },
    codeExample: `fruits = {"apple", "banana", "cherry"}

# Add and remove items
fruits.add("mango")
print(fruits)  # {'apple', 'banana', 'cherry', 'mango'}

fruits.remove("banana")
print(fruits)  # {'apple', 'cherry', 'mango'}

# Set mathematics
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # Union: {1, 2, 3, 4, 5}
print(a & b)   # Intersection: {3}
print(a - b)   # Difference: {1, 2}`
  },

  // Card 11: Exercise - Working with Sets
  {
    id: 'w9-c11-sets-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Travay ak Set yo',
      fr: 'Exercice: Travailler avec les Ensembles',
      en: 'Exercise: Working with Sets'
    },
    content: {
      ht: 'Pratike travay ak set yo ak operasyon yo.',
      fr: 'Pratiquer le travail avec les ensembles et leurs opérations.',
      en: 'Practice working with sets and their operations.'
    },
    exercise: {
      instruction: {
        ht: 'Kreye de set nan: math_students ak science_students. Jwenn elèv yo ki nan de klas yo (intersection), ak moun ki sèlman nan matematik (difference).',
        fr: 'Créez deux ensembles: math_students et science_students. Trouvez les étudiants dans les deux classes (intersection), et ceux seulement en mathématiques (différence).',
        en: 'Create two sets: math_students and science_students. Find students in both classes (intersection), and those only in math (difference).'
      },
      starterCode: `# Create the student sets
math_students = {"Ana", "Carlos", "Maria", "Luis"}
science_students = {"Carlos", "Maria", "Pedro", "Sofia"}

# Find students in both classes


# Find students only in math


# Print the results
print("In both classes:", both_classes)
print("Only in math:", only_math)`,
      solution: `math_students = {"Ana", "Carlos", "Maria", "Luis"}
science_students = {"Carlos", "Maria", "Pedro", "Sofia"}

# Find students in both classes
both_classes = math_students & science_students

# Find students only in math
only_math = math_students - science_students

print("In both classes:", both_classes)  # {'Carlos', 'Maria'}
print("Only in math:", only_math)        # {'Ana', 'Luis'}`,
      hint: {
        ht: 'Itilize & pou intersection ak - pou difference.',
        fr: 'Utilisez & pour l\'intersection et - pour la différence.',
        en: 'Use & for intersection and - for difference.'
      }
    }
  },

  // Card 12: Mini Project - Contact Book
  {
    id: 'w9-c12-contact-book',
    type: 'project',
    title: {
      ht: 'Pwojè Mini: Liv Kontak',
      fr: 'Mini Projet: Carnet de Contacts',
      en: 'Mini Project: Contact Book'
    },
    content: {
      ht: 'Kreye yon aplikasyon senp ki kenbe ak montre enfòmasyon kontak yo lè w sèvi ak diksyonè.',
      fr: 'Créer une application simple qui stocke et affiche les informations de contact en utilisant un dictionnaire.',
      en: 'Create a simple app that stores and displays contact information using a dictionary.'
    },
    exercise: {
      instruction: {
        ht: 'Kreye yon liv kontak ki pèmèt ou ajoute, wè ak efase kontak yo. Chak kontak gen yon non, telefòn ak email.',
        fr: 'Créez un carnet de contacts qui permet d\'ajouter, voir et supprimer des contacts. Chaque contact a un nom, téléphone et email.',
        en: 'Create a contact book that allows you to add, view, and delete contacts. Each contact has a name, phone, and email.'
      },
      starterCode: `contacts = {}

print("Welcome to Contact Book!")
while True:
    choice = input("\\n(A)dd, (V)iew, (D)elete, (Q)uit: ").lower()

    if choice == "a":
        # Add contact code here
        pass
    
    elif choice == "v":
        # View contacts code here
        pass
    
    elif choice == "d":
        # Delete contact code here  
        pass
    
    elif choice == "q":
        print("Goodbye!")
        break
    else:
        print("Invalid choice.")`,
      solution: `contacts = {}

print("Welcome to Contact Book!")
while True:
    choice = input("\\n(A)dd, (V)iew, (D)elete, (Q)uit: ").lower()

    if choice == "a":
        name = input("Name: ")
        phone = input("Phone: ")
        email = input("Email: ")
        contacts[name] = {"phone": phone, "email": email}
        print("Contact added!")
    
    elif choice == "v":
        if contacts:
            for name, info in contacts.items():
                print(f"{name} → {info['phone']} | {info['email']}")
        else:
            print("No contacts found.")
    
    elif choice == "d":
        name = input("Enter name to delete: ")
        if name in contacts:
            contacts.pop(name)
            print("Contact deleted.")
        else:
            print("Contact not found.")
    
    elif choice == "q":
        print("Goodbye!")
        break
    else:
        print("Invalid choice.")`,
      hint: {
        ht: 'Itilize diksyonè yo anndan diksyonè pou kenbe enfòmasyon kontak yo.',
        fr: 'Utilisez des dictionnaires dans des dictionnaires pour stocker les informations de contact.',
        en: 'Use dictionaries inside dictionaries to store contact information.'
      }
    }
  }
];

export const pythonWeek9Lesson = {
  weekNumber: 9,
  title: {
    ht: 'Diksyonè ak Set yo',
    fr: 'Dictionnaires et Sets', 
    en: 'Dictionaries & Sets'
  },
  cards: pythonWeek9Cards,
  miniProject: {
    title: {
      ht: 'Pwojè Mini: "Liv Kontak Entèraktif"',
      fr: 'Mini-Projet : "Carnet de Contacts Interactif"',
      en: 'Mini-Project: "Interactive Contact Book"'
    },
    description: {
      ht: 'Kreye yon aplikasyon kontak ki pèmèt ou ajoute, wè, modifye ak efase kontak yo lè w sèvi ak diksyonè yo ak operasyon set yo.',
      fr: 'Créer une application de contacts qui permet d\'ajouter, voir, modifier et supprimer des contacts en utilisant les dictionnaires et les opérations sur les ensembles.',
      en: 'Create a contact application that allows you to add, view, modify and delete contacts using dictionaries and set operations.'
    },
    requirements: {
      ht: [
        'Kreye yon meni entèraktif ak opsyon yo',
        'Itilize diksyonè pou kenbe kontak yo',
        'Ajoute fonksyon chèche kontak',
        'Montre tout kontak yo nan fòma ki bèl',
        'Valide done yo anvan yo ajoute yo'
      ],
      fr: [
        'Créer un menu interactif avec des options',
        'Utiliser des dictionnaires pour stocker les contacts',
        'Ajouter une fonction de recherche de contacts',
        'Afficher tous les contacts dans un format agréable',
        'Valider les données avant de les ajouter'
      ],
      en: [
        'Create an interactive menu with options',
        'Use dictionaries to store contacts',
        'Add contact search functionality',
        'Display all contacts in a nice format',
        'Validate data before adding it'
      ]
    },
    starterCode: `# Contact Book Application
contacts = {}

def show_menu():
    print("\\n=== CONTACT BOOK ===")
    print("1. Add Contact")
    print("2. View All Contacts") 
    print("3. Search Contact")
    print("4. Update Contact")
    print("5. Delete Contact")
    print("6. Exit")

def add_contact():
    # Your code here
    pass

def view_contacts():
    # Your code here
    pass

def search_contact():
    # Your code here
    pass

def update_contact():
    # Your code here
    pass

def delete_contact():
    # Your code here
    pass

# Main program
while True:
    show_menu()
    choice = input("\\nEnter your choice (1-6): ")
    
    if choice == "1":
        add_contact()
    elif choice == "2":
        view_contacts()
    elif choice == "3":
        search_contact()
    elif choice == "4":
        update_contact()
    elif choice == "5":
        delete_contact()
    elif choice == "6":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")`,
    sampleSolution: `# Contact Book Application - Complete Solution
contacts = {}

def show_menu():
    print("\\n=== CONTACT BOOK ===")
    print("1. Add Contact")
    print("2. View All Contacts") 
    print("3. Search Contact")
    print("4. Update Contact")
    print("5. Delete Contact")
    print("6. Exit")

def add_contact():
    name = input("Enter name: ").strip()
    if not name:
        print("Name cannot be empty!")
        return
    
    if name in contacts:
        print("Contact already exists!")
        return
    
    phone = input("Enter phone: ").strip()
    email = input("Enter email: ").strip()
    
    contacts[name] = {
        "phone": phone,
        "email": email
    }
    print(f"Contact '{name}' added successfully!")

def view_contacts():
    if not contacts:
        print("No contacts found!")
        return
    
    print(f"\\n--- ALL CONTACTS ({len(contacts)}) ---")
    for name, info in contacts.items():
        print(f"Name: {name}")
        print(f"Phone: {info['phone']}")
        print(f"Email: {info['email']}")
        print("-" * 30)

def search_contact():
    if not contacts:
        print("No contacts found!")
        return
    
    search_term = input("Enter name to search: ").strip().lower()
    found = False
    
    for name, info in contacts.items():
        if search_term in name.lower():
            print(f"\\n--- FOUND ---")
            print(f"Name: {name}")
            print(f"Phone: {info['phone']}")
            print(f"Email: {info['email']}")
            found = True
    
    if not found:
        print("No contacts found matching your search.")

def update_contact():
    if not contacts:
        print("No contacts found!")
        return
    
    name = input("Enter name to update: ").strip()
    if name not in contacts:
        print("Contact not found!")
        return
    
    print(f"Current info for {name}:")
    print(f"Phone: {contacts[name]['phone']}")
    print(f"Email: {contacts[name]['email']}")
    
    new_phone = input("Enter new phone (or press Enter to keep current): ").strip()
    new_email = input("Enter new email (or press Enter to keep current): ").strip()
    
    if new_phone:
        contacts[name]['phone'] = new_phone
    if new_email:
        contacts[name]['email'] = new_email
    
    print(f"Contact '{name}' updated successfully!")

def delete_contact():
    if not contacts:
        print("No contacts found!")
        return
    
    name = input("Enter name to delete: ").strip()
    if name not in contacts:
        print("Contact not found!")
        return
    
    confirm = input(f"Are you sure you want to delete '{name}'? (y/N): ").lower()
    if confirm == 'y':
        contacts.pop(name)
        print(f"Contact '{name}' deleted successfully!")
    else:
        print("Deletion cancelled.")

# Main program
print("Welcome to Contact Book!")

while True:
    show_menu()
    choice = input("\\nEnter your choice (1-6): ").strip()
    
    if choice == "1":
        add_contact()
    elif choice == "2":
        view_contacts()
    elif choice == "3":
        search_contact()
    elif choice == "4":
        update_contact()
    elif choice == "5":
        delete_contact()
    elif choice == "6":
        print("\\nGoodbye! Thanks for using Contact Book!")
        break
    else:
        print("Invalid choice. Please try again.")`,
    challenges: {
      ht: [
        'Ajoute validasyon pou email yo (dwe gen @ ak .)',
        'Kreye fonksyon pou ekspòte kontak yo nan yon fichye tèks',
        'Ajoute kapasite pou gwoupman kontak yo pa kategori',
        'Implement fonksyon chèche avanse ki ka chèche pa email oswa telefòn tou'
      ],
      fr: [
        'Ajouter validation pour les emails (doit contenir @ et .)',
        'Créer une fonction pour exporter les contacts vers un fichier texte',
        'Ajouter la capacité de grouper les contacts par catégorie',
        'Implémenter une fonction de recherche avancée qui peut chercher par email ou téléphone aussi'
      ],
      en: [
        'Add validation for emails (must contain @ and .)',
        'Create function to export contacts to a text file',
        'Add ability to group contacts by category',
        'Implement advanced search that can search by email or phone too'
      ]
    }
  }
};