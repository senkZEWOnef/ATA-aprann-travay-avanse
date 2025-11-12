// Week 11: Error Handling
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

export const pythonWeek11Cards: LessonCard[] = [
  // Card 1: Why Handle Errors?
  {
    id: 'w11-c1-why-errors',
    type: 'concept',
    title: {
      ht: 'Poukisa Jere Erè yo?',
      fr: 'Pourquoi Gérer les Erreurs?',
      en: 'Why Handle Errors?'
    },
    content: {
      ht: 'Lè erè yo rive, Python nòmalman sispann egzekisyon an.\n\nJesyon erè pèmèt pwogram ou a reaji ak grès olye pou li kraze.\n\n**Pwoblèm nan:** Itilizatè yo ka tape bagay ki pa kòrèk\n**Solisyon an:** Prepare pou erè yo ak jere yo\n\n**Avantaj yo:**\n• Pwogram an pa kraze\n• Eksperyans itilizatè ki pi bon\n• Mesaj erè ki klè\n• Done yo pwoteje',
      fr: 'Quand des erreurs surviennent, Python arrête normalement l\'exécution.\n\nLa gestion d\'erreurs permet à votre programme de réagir gracieusement au lieu de planter.\n\n**Le problème:** Les utilisateurs peuvent taper des choses incorrectes\n**La solution:** Préparer pour les erreurs et les gérer\n\n**Avantages:**\n• Le programme ne plante pas\n• Meilleure expérience utilisateur\n• Messages d\'erreur clairs\n• Données protégées',
      en: 'When errors happen, Python normally stops execution.\n\nError handling lets your program react gracefully instead of crashing.\n\n**The problem:** Users can type incorrect things\n**The solution:** Prepare for errors and handle them\n\n**Benefits:**\n• Program doesn\'t crash\n• Better user experience\n• Clear error messages\n• Data is protected'
    },
    codeExample: `# Without error handling - program crashes!
num = int(input("Enter a number: "))  # User types "hello" → CRASH!
print(10 / num)

# With error handling - program continues gracefully
try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print("Result:", result)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero!")
    
print("Program continues running...")  # This always runs`
  },

  // Card 2: The try/except Block
  {
    id: 'w11-c2-try-except',
    type: 'concept',
    title: {
      ht: 'Blòk try / except',
      fr: 'Bloc try / except',
      en: 'The try / except Block'
    },
    content: {
      ht: 'Estrikti baz la pou jesyon erè:\n\n**Sentaks:**\ntry:\n    # kòd ki ka lakòz erè\nexcept:\n    # kisa pou fè si gen erè\n\n**Kijan li fonksyone:**\n1. Python eseye egzekite kòd nan try\n2. Si gen erè, li sote nan except\n3. Si pa gen erè, li sote except ak kontinye\n\nSe tankou yon filet sekirite pou pwogram ou a.',
      fr: 'Structure de base pour la gestion d\'erreurs:\n\n**Syntaxe:**\ntry:\n    # code qui peut causer une erreur\nexcept:\n    # que faire s\'il y a une erreur\n\n**Comment ça fonctionne:**\n1. Python essaie d\'exécuter le code dans try\n2. S\'il y a une erreur, il saute à except\n3. S\'il n\'y a pas d\'erreur, il saute except et continue\n\nC\'est comme un filet de sécurité pour votre programme.',
      en: 'Basic structure for error handling:\n\n**Syntax:**\ntry:\n    # code that might cause an error\nexcept:\n    # what to do if there\'s an error\n\n**How it works:**\n1. Python tries to execute code in try\n2. If there\'s an error, it jumps to except\n3. If no error, it skips except and continues\n\nIt\'s like a safety net for your program.'
    },
    codeExample: `# Basic try/except example
try:
    x = int(input("Enter a number: "))
    print("You entered:", x)
except:
    print("That's not a valid number!")

# More specific error handling
try:
    age = int(input("Enter your age: "))
    if age >= 18:
        print("You're an adult!")
    else:
        print("You're a minor.")
except ValueError:
    print("Age must be a number!")

print("Program continues...")`
  },

  // Card 3: Quiz - Basic Error Handling
  {
    id: 'w11-c3-basic-errors-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Jesyon Erè Baz',
      fr: 'Quiz: Gestion d\'Erreurs de Base',
      en: 'Quiz: Basic Error Handling'
    },
    content: {
      ht: 'Tèste konesans ou sou jesyon erè baz.',
      fr: 'Testez vos connaissances sur la gestion d\'erreurs de base.',
      en: 'Test your knowledge of basic error handling.'
    },
    quiz: {
      question: {
        ht: 'Sa blòk try la fè?',
        fr: 'Que fait le bloc try?',
        en: 'What does the try block do?'
      },
      options: [
        {
          ht: 'Li kouri kòd ki ka lakòz erè',
          fr: 'Il exécute du code qui peut causer une erreur',
          en: 'Runs code that might cause an error'
        },
        {
          ht: 'Li jere erè yo sèlman',
          fr: 'Il gère seulement les erreurs',
          en: 'Only handles errors'
        },
        {
          ht: 'Li sispann pwogram an',
          fr: 'Il arrête le programme',
          en: 'Stops the program'
        },
        {
          ht: 'Li efase erè yo',
          fr: 'Il efface les erreurs',
          en: 'Deletes errors'
        }
      ],
      correctAnswer: 0,
      explanation: {
        ht: 'Blòk try la kouri kòd ki ka lakòz erè yo. Si gen erè, Python sote nan blòk except la pou jere erè a.',
        fr: 'Le bloc try exécute du code qui peut causer des erreurs. S\'il y a une erreur, Python saute au bloc except pour gérer l\'erreur.',
        en: 'The try block runs code that might cause errors. If there\'s an error, Python jumps to the except block to handle the error.'
      }
    }
  },

  // Card 4: Handling Specific Errors
  {
    id: 'w11-c4-specific-errors',
    type: 'concept',
    title: {
      ht: 'Jere Erè Espesifik yo',
      fr: 'Gérer des Erreurs Spécifiques',
      en: 'Handling Specific Errors'
    },
    content: {
      ht: 'Ou ka tonbe plizyè kalite erè yo separeman:\n\n**Erè komen yo:**\n• ValueError - valè ki pa kòrèk\n• ZeroDivisionError - divize pa zewo\n• FileNotFoundError - fichye pa jwenn\n• TypeError - tip ki pa kòrèk\n• IndexError - endèks ki pa egziste\n\n**Poukisa espesifik pi bon:**\n• Mesaj erè ki pi klè\n• Jesyon ki pi prèsi\n• Kòd ki pi li fasil',
      fr: 'Vous pouvez attraper plusieurs types d\'erreurs séparément:\n\n**Erreurs courantes:**\n• ValueError - valeur incorrecte\n• ZeroDivisionError - division par zéro\n• FileNotFoundError - fichier non trouvé\n• TypeError - type incorrect\n• IndexError - index qui n\'existe pas\n\n**Pourquoi spécifique est meilleur:**\n• Messages d\'erreur plus clairs\n• Gestion plus précise\n• Code plus lisible',
      en: 'You can catch different types of errors separately:\n\n**Common errors:**\n• ValueError - incorrect value\n• ZeroDivisionError - division by zero\n• FileNotFoundError - file not found\n• TypeError - wrong type\n• IndexError - index doesn\'t exist\n\n**Why specific is better:**\n• Clearer error messages\n• More precise handling\n• More readable code'
    },
    codeExample: `# Handling multiple specific errors
try:
    x = int(input("Enter first number: "))
    y = int(input("Enter second number: "))
    result = x / y
    print("Result:", result)
except ValueError:
    print("Please enter valid numbers only!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")

# File handling with specific errors
try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File 'data.txt' not found!")
except PermissionError:
    print("You don't have permission to read this file!")
except Exception as e:
    print(f"Error reading file: {e}")`
  },

  // Card 5: Using else and finally
  {
    id: 'w11-c5-else-finally',
    type: 'concept',
    title: {
      ht: 'Itilize else ak finally',
      fr: 'Utiliser else et finally',
      en: 'Using else and finally'
    },
    content: {
      ht: '**else:** Kouri sèlman si pa gen erè\n**finally:** Toujou kouri, menm si gen erè\n\n**Lè pou itilize else:**\n• Kòd ki dwe kouri si tout bagay bon\n• Konfime siksè operasyon yo\n\n**Lè pou itilize finally:**\n• Netwaye resous yo\n• Fèmen fichye yo\n• Sere done ki enpòtan',
      fr: '**else:** S\'exécute seulement s\'il n\'y a pas d\'erreur\n**finally:** S\'exécute toujours, même s\'il y a une erreur\n\n**Quand utiliser else:**\n• Code qui doit s\'exécuter si tout va bien\n• Confirmer le succès des opérations\n\n**Quand utiliser finally:**\n• Nettoyer les ressources\n• Fermer les fichiers\n• Sauvegarder des données importantes',
      en: '**else:** Runs only if no error occurs\n**finally:** Always runs, even if there\'s an error\n\n**When to use else:**\n• Code that should run if everything goes well\n• Confirm success of operations\n\n**When to use finally:**\n• Clean up resources\n• Close files\n• Save important data'
    },
    codeExample: `# Complete try/except/else/finally example
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    # Runs only if no error occurred
    print(f"Success! 100 / {num} = {result}")
finally:
    # Always runs, no matter what
    print("Operation completed.")

# File handling with cleanup
file_handle = None
try:
    file_handle = open("important.txt", "w")
    file_handle.write("Important data")
except IOError:
    print("Could not write to file!")
else:
    print("File written successfully!")
finally:
    # Always close the file if it was opened
    if file_handle:
        file_handle.close()
        print("File closed safely.")`
  },

  // Card 6: Exercise - Safe Input Function
  {
    id: 'w11-c6-safe-input-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Fonksyon Input Sekirite',
      fr: 'Exercice: Fonction d\'Entrée Sécurisée',
      en: 'Exercise: Safe Input Function'
    },
    content: {
      ht: 'Kreye yon fonksyon ki mande nimewo ak sekirite.',
      fr: 'Créer une fonction qui demande un nombre en toute sécurité.',
      en: 'Create a function that asks for a number safely.'
    },
    exercise: {
      instruction: {
        ht: 'Ekri yon fonksyon yo rele `get_safe_number()` ki kontinye mande itilizatè a yon nimewo jiskaske yo bay yon nimewo ki valab.',
        fr: 'Écrivez une fonction appelée `get_safe_number()` qui continue de demander à l\'utilisateur un nombre jusqu\'à ce qu\'ils fournissent un nombre valide.',
        en: 'Write a function called `get_safe_number()` that keeps asking the user for a number until they provide a valid number.'
      },
      starterCode: `def get_safe_number():
    # Add your code here to safely get a number
    # Keep asking until user enters a valid number
    pass

# Test the function
number = get_safe_number()
print(f"You entered: {number}")`,
      solution: `def get_safe_number():
    while True:
        try:
            user_input = input("Enter a number: ")
            number = float(user_input)
            return number  # Success! Return the number
        except ValueError:
            print("That's not a valid number. Please try again.")

# Test the function
number = get_safe_number()
print(f"You entered: {number}")`,
      hint: {
        ht: 'Itilize yon while True loop ak try/except. Return nimewo a lè li valab.',
        fr: 'Utilisez une boucle while True avec try/except. Retournez le nombre quand il est valide.',
        en: 'Use a while True loop with try/except. Return the number when it\'s valid.'
      }
    }
  },

  // Card 7: Raising Custom Errors
  {
    id: 'w11-c7-raising-errors',
    type: 'concept',
    title: {
      ht: 'Leve Erè Kustom yo',
      fr: 'Lever des Erreurs Personnalisées',
      en: 'Raising Custom Errors'
    },
    content: {
      ht: 'Ou ka kreye ak leve erè ou yo prop pou valide done yo.\n\n**Poukisa leve erè yo:**\n• Valide kondisyon yo\n• Pwoteje entegrite done yo\n• Fè kòd ki pi klè\n\n**Kijan pou fè l:**\nraise ValueError("Mesaj erè")\n\n**Tip yo:**\n• Itilize tip erè ki apwopriye\n• Bay mesaj ki klè ak itil\n• Valide depi kòmansman an',
      fr: 'Vous pouvez créer et lever vos propres erreurs pour valider les données.\n\n**Pourquoi lever des erreurs:**\n• Valider les conditions\n• Protéger l\'intégrité des données\n• Rendre le code plus clair\n\n**Comment faire:**\nraise ValueError("Message d\'erreur")\n\n**Conseils:**\n• Utilisez le bon type d\'erreur\n• Donnez des messages clairs et utiles\n• Validez dès le début',
      en: 'You can create and raise your own errors to validate data.\n\n**Why raise errors:**\n• Validate conditions\n• Protect data integrity\n• Make code clearer\n\n**How to do it:**\nraise ValueError("Error message")\n\n**Tips:**\n• Use appropriate error types\n• Give clear and helpful messages\n• Validate early'
    },
    codeExample: `# Raising custom errors for validation
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age > 150:
        raise ValueError("Age seems unrealistic!")
    return age

def divide_numbers(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero!")
    return a / b

# Using custom validation
try:
    user_age = int(input("Enter your age: "))
    valid_age = set_age(user_age)
    print(f"Age set to: {valid_age}")
except ValueError as e:
    print(f"Invalid age: {e}")

# Email validation
def validate_email(email):
    if "@" not in email:
        raise ValueError("Email must contain @ symbol")
    if "." not in email:
        raise ValueError("Email must contain a dot")
    if len(email) < 5:
        raise ValueError("Email too short")
    return email`
  },

  // Card 8: Quiz - Error Types
  {
    id: 'w11-c8-error-types-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Tip Erè yo',
      fr: 'Quiz: Types d\'Erreurs',
      en: 'Quiz: Error Types'
    },
    content: {
      ht: 'Tèste konesans ou sou tip erè yo.',
      fr: 'Testez vos connaissances sur les types d\'erreurs.',
      en: 'Test your knowledge of error types.'
    },
    quiz: {
      question: {
        ht: 'Ki mo kle ki asire kòd la toujou kouri, menm apre yon erè?',
        fr: 'Quel mot-clé assure que le code s\'exécute toujours, même après une erreur?',
        en: 'Which keyword ensures code always runs, even after an error?'
      },
      options: [
        { ht: 'try', fr: 'try', en: 'try' },
        { ht: 'except', fr: 'except', en: 'except' },
        { ht: 'else', fr: 'else', en: 'else' },
        { ht: 'finally', fr: 'finally', en: 'finally' }
      ],
      correctAnswer: 3,
      explanation: {
        ht: 'finally toujou egzekite, menm si gen erè oswa pa gen erè. Li itil pou netwaye resous yo ak operasyon ki obligatwa.',
        fr: 'finally s\'exécute toujours, qu\'il y ait une erreur ou non. Il est utile pour nettoyer les ressources et les opérations obligatoires.',
        en: 'finally always executes, whether there\'s an error or not. It\'s useful for cleanup tasks and mandatory operations.'
      }
    }
  },

  // Card 9: Exception Information
  {
    id: 'w11-c9-exception-info',
    type: 'concept',
    title: {
      ht: 'Enfòmasyon sou Eksepsyon yo',
      fr: 'Informations sur les Exceptions',
      en: 'Exception Information'
    },
    content: {
      ht: 'Ou ka jwenn enfòmasyon sou erè yo pou pi bon jesyon.\n\n**Kaptire erè yo:**\nexcept ValueError as e:\n    print(f"Erè: {e}")\n\n**Enfòmasyon yo itil:**\n• Mesaj erè a\n• Tip erè a\n• Kote erè a rive\n\n**Itilize:** Debugging ak jesyon erè pi bon',
      fr: 'Vous pouvez obtenir des informations sur les erreurs pour une meilleure gestion.\n\n**Capturer les erreurs:**\nexcept ValueError as e:\n    print(f"Erreur: {e}")\n\n**Informations utiles:**\n• Le message d\'erreur\n• Le type d\'erreur\n• Où l\'erreur s\'est produite\n\n**Utilisation:** Débogage et meilleure gestion d\'erreurs',
      en: 'You can get information about errors for better handling.\n\n**Capturing errors:**\nexcept ValueError as e:\n    print(f"Error: {e}")\n\n**Useful information:**\n• The error message\n• The error type\n• Where the error occurred\n\n**Usage:** Debugging and better error handling'
    },
    codeExample: `# Capturing exception information
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError as e:
    print(f"Value error occurred: {e}")
    print(f"Error type: {type(e).__name__}")
except ZeroDivisionError as e:
    print(f"Division error: {e}")
    print("Cannot divide by zero!")
except Exception as e:
    # Catch any other unexpected errors
    print(f"Unexpected error: {e}")
    print(f"Error type: {type(e).__name__}")

# Detailed error logging
import traceback

try:
    # Some complex operation
    numbers = [1, 2, 3]
    index = int(input("Enter index: "))
    value = numbers[index]
    result = 10 / value
except Exception as e:
    print(f"Error occurred: {e}")
    print("Full traceback:")
    traceback.print_exc()`
  },

  // Card 10: Exercise - Calculator with Error Handling
  {
    id: 'w11-c10-calculator-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Kalkilatè ak Jesyon Erè',
      fr: 'Exercice: Calculatrice avec Gestion d\'Erreurs',
      en: 'Exercise: Calculator with Error Handling'
    },
    content: {
      ht: 'Kreye yon kalkilatè ki pa janm kraze.',
      fr: 'Créer une calculatrice qui ne plante jamais.',
      en: 'Create a calculator that never crashes.'
    },
    exercise: {
      instruction: {
        ht: 'Ekri yon kalkilatè ki ka fè adisyon, soustraction, miltiplication ak division ak jesyon erè konplè pou tout ka yo.',
        fr: 'Écrivez une calculatrice qui peut faire addition, soustraction, multiplication et division avec gestion d\'erreurs complète pour tous les cas.',
        en: 'Write a calculator that can do addition, subtraction, multiplication and division with complete error handling for all cases.'
      },
      starterCode: `def safe_calculator():
    try:
        # Get first number
        
        # Get operation (+, -, *, /)
        
        # Get second number
        
        # Perform calculation
        
        # Return result
        pass
    except:
        # Handle errors here
        pass

# Test the calculator
result = safe_calculator()
print("Calculator finished.")`,
      solution: `def safe_calculator():
    try:
        # Get first number
        num1 = float(input("Enter first number: "))
        
        # Get operation
        operation = input("Enter operation (+, -, *, /): ").strip()
        
        # Validate operation
        if operation not in ['+', '-', '*', '/']:
            raise ValueError("Invalid operation! Use +, -, *, or /")
        
        # Get second number  
        num2 = float(input("Enter second number: "))
        
        # Perform calculation
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                raise ZeroDivisionError("Cannot divide by zero!")
            result = num1 / num2
        
        print(f"Result: {num1} {operation} {num2} = {result}")
        return result
        
    except ValueError as e:
        print(f"Input error: {e}")
        return None
    except ZeroDivisionError as e:
        print(f"Math error: {e}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None
    finally:
        print("Thank you for using the calculator!")

# Test the calculator
result = safe_calculator()
print("Calculator finished.")`,
      hint: {
        ht: 'Itilize try/except pou chak etap. Valide operasyon yo ak verifye division pa zewo.',
        fr: 'Utilisez try/except pour chaque étape. Validez les opérations et vérifiez la division par zéro.',
        en: 'Use try/except for each step. Validate operations and check for division by zero.'
      }
    }
  },

  // Card 11: Best Practices for Error Handling
  {
    id: 'w11-c11-best-practices',
    type: 'concept',
    title: {
      ht: 'Pi bon Pratik pou Jesyon Erè',
      fr: 'Meilleures Pratiques pour Gestion d\'Erreurs',
      en: 'Best Practices for Error Handling'
    },
    content: {
      ht: '**Règ Enpòtan yo:**\n\n1. **Konprann erè yo** - Konnen ki erè ki ka rive\n2. **Espesifik** - Pa itilize except ki twò jeneral\n3. **Mesaj klè** - Eksplike sa ki mal ak kòmèn korije l\n4. **Valide depi kòmansman** - Tcheke done yo depi yo antre\n5. **Log erè yo** - Kenbe istorik pou debugging\n6. **Pa kache erè** - Jere yo, pa ignore yo\n7. **Netwaye** - Itilize finally pou resous yo',
      fr: '**Règles Importantes:**\n\n1. **Comprendre les erreurs** - Savoir quelles erreurs peuvent survenir\n2. **Être spécifique** - Ne pas utiliser except trop général\n3. **Messages clairs** - Expliquer ce qui ne va pas et comment corriger\n4. **Valider tôt** - Vérifier les données dès leur entrée\n5. **Logger les erreurs** - Garder un historique pour le débogage\n6. **Ne pas cacher les erreurs** - Les gérer, ne pas les ignorer\n7. **Nettoyer** - Utiliser finally pour les ressources',
      en: '**Important Rules:**\n\n1. **Understand errors** - Know what errors can happen\n2. **Be specific** - Don\'t use overly general except\n3. **Clear messages** - Explain what\'s wrong and how to fix\n4. **Validate early** - Check data as soon as it comes in\n5. **Log errors** - Keep history for debugging\n6. **Don\'t hide errors** - Handle them, don\'t ignore\n7. **Clean up** - Use finally for resources'
    },
    codeExample: `# GOOD: Specific error handling with clear messages
def process_user_data(age_str, email):
    try:
        # Validate early
        age = int(age_str)
        if age < 0 or age > 150:
            raise ValueError(f"Age {age} is not realistic")
        
        if "@" not in email or "." not in email:
            raise ValueError("Email format is invalid")
        
        return {"age": age, "email": email}
    
    except ValueError as e:
        print(f"Data validation error: {e}")
        print("Please check your input and try again.")
        return None
    except Exception as e:
        print(f"Unexpected error processing data: {e}")
        # Log the error for debugging
        import logging
        logging.error(f"Unexpected error in process_user_data: {e}")
        return None

# BAD: Too general, unclear messages
def bad_example():
    try:
        # Some operations
        pass
    except:  # Too general!
        print("Error")  # Unclear message!
        pass  # Hiding the error!`
  },

  // Card 12: Mini Project - Input Validator Tool
  {
    id: 'w11-c12-input-validator',
    type: 'project',
    title: {
      ht: 'Pwojè Mini: Zouti Validasyon Input',
      fr: 'Mini-Projet : Outil de Validation d\'Entrées',
      en: 'Mini Project: Input Validator Tool'
    },
    content: {
      ht: 'Kreye yon zouti ki asire itilizatè yo antre enfòmasyon ki valab.',
      fr: 'Créer un outil qui assure que les utilisateurs entrent des informations valides.',
      en: 'Create a tool that ensures users enter valid information.'
    },
    exercise: {
      instruction: {
        ht: 'Konstwi yon aplikasyon ki valide: (1) Laj (dwe pozitif ak realis), (2) Email (dwe gen @ ak .), (3) Telefòn (dwe gen 10 chif), ak (4) Konplètman ak jesyon erè.',
        fr: 'Construire une application qui valide: (1) L\'âge (doit être positif et réaliste), (2) Email (doit avoir @ et .), (3) Téléphone (doit avoir 10 chiffres), et (4) Compléter avec gestion d\'erreurs.',
        en: 'Build an application that validates: (1) Age (must be positive and realistic), (2) Email (must have @ and .), (3) Phone (must have 10 digits), and (4) Complete with error handling.'
      },
      starterCode: `def get_valid_age():
    # Add validation for age (0-150)
    pass

def get_valid_email():
    # Add validation for email (must have @ and .)
    pass

def get_valid_phone():
    # Add validation for phone (must be 10 digits)
    pass

def main():
    print("=== INPUT VALIDATOR ===")
    
    try:
        # Get all user data with validation
        age = get_valid_age()
        email = get_valid_email()
        phone = get_valid_phone()
        
        # Success message
        print("\\n✅ All information validated!")
        print(f"Age: {age}")
        print(f"Email: {email}")
        print(f"Phone: {phone}")
        
    except Exception as e:
        print(f"Validation failed: {e}")
    finally:
        print("\\nValidation process completed.")

if __name__ == "__main__":
    main()`,
      solution: `def get_valid_age():
    while True:
        try:
            age_input = input("Enter your age: ")
            age = int(age_input)
            
            if age < 0:
                raise ValueError("Age cannot be negative!")
            if age > 150:
                raise ValueError("Age cannot be over 150!")
            if age == 0:
                raise ValueError("Age cannot be zero!")
            
            return age
        except ValueError as e:
            if "invalid literal" in str(e):
                print("Please enter a valid number for age.")
            else:
                print(f"Invalid age: {e}")

def get_valid_email():
    while True:
        try:
            email = input("Enter your email: ").strip()
            
            if not email:
                raise ValueError("Email cannot be empty!")
            if "@" not in email:
                raise ValueError("Email must contain @ symbol!")
            if "." not in email:
                raise ValueError("Email must contain a dot!")
            if len(email) < 5:
                raise ValueError("Email is too short!")
            if email.count("@") != 1:
                raise ValueError("Email must have exactly one @ symbol!")
            
            # Check @ comes before .
            at_pos = email.find("@")
            dot_pos = email.rfind(".")
            if at_pos >= dot_pos:
                raise ValueError("Email format is invalid!")
            
            return email
        except ValueError as e:
            print(f"Invalid email: {e}")

def get_valid_phone():
    while True:
        try:
            phone = input("Enter your phone (10 digits): ").strip()
            
            if not phone:
                raise ValueError("Phone cannot be empty!")
            
            # Remove common formatting
            clean_phone = phone.replace("-", "").replace("(", "").replace(")", "").replace(" ", "")
            
            if not clean_phone.isdigit():
                raise ValueError("Phone must contain only digits!")
            if len(clean_phone) != 10:
                raise ValueError(f"Phone must have exactly 10 digits, got {len(clean_phone)}!")
            
            return clean_phone
        except ValueError as e:
            print(f"Invalid phone: {e}")

def main():
    print("=== 📝 INPUT VALIDATOR TOOL ===")
    print("Please provide the following information:")
    
    try:
        # Get all user data with validation
        print("\\n1. Age Validation:")
        age = get_valid_age()
        
        print("\\n2. Email Validation:")
        email = get_valid_email()
        
        print("\\n3. Phone Validation:")
        phone = get_valid_phone()
        
        # Success message
        print("\\n" + "="*40)
        print("✅ ALL INFORMATION VALIDATED SUCCESSFULLY!")
        print("="*40)
        print(f"📅 Age: {age} years old")
        print(f"📧 Email: {email}")
        print(f"📞 Phone: {phone}")
        print("="*40)
        
    except KeyboardInterrupt:
        print("\\n\\n❌ Validation cancelled by user.")
    except Exception as e:
        print(f"\\n❌ Unexpected error: {e}")
        print("Please try again or contact support.")
    finally:
        print("\\n👋 Thank you for using Input Validator!")

if __name__ == "__main__":
    main()`,
      hint: {
        ht: 'Itilize while True loops ak try/except nan chak fonksyon validasyon. Tcheke kondisyon yo ak leve erè yo kustom.',
        fr: 'Utilisez des boucles while True avec try/except dans chaque fonction de validation. Vérifiez les conditions et levez des erreurs personnalisées.',
        en: 'Use while True loops with try/except in each validation function. Check conditions and raise custom errors.'
      }
    }
  }
];

export const pythonWeek11Lesson = {
  weekNumber: 11,
  title: {
    ht: 'Jesyon Erè yo',
    fr: 'Gestion des Erreurs',
    en: 'Error Handling'
  },
  cards: pythonWeek11Cards,
  miniProject: {
    title: {
      ht: 'Pwojè Mini: "Zouti Validasyon Entèraktif"',
      fr: 'Mini-Projet : "Outil de Validation Interactif"',
      en: 'Mini-Project: "Interactive Input Validator"'
    },
    description: {
      ht: 'Kreye yon zouti validasyon konplè ki asire tout enfòmasyon itilizatè yo valab ak jesyon erè avanse.',
      fr: 'Créer un outil de validation complet qui assure que toutes les informations utilisateur sont valides avec gestion d\'erreurs avancée.',
      en: 'Create a comprehensive validation tool that ensures all user information is valid with advanced error handling.'
    },
    requirements: {
      ht: [
        'Valide laj, email ak nimewo telefòn',
        'Itilize try/except pou jesyon erè yo',
        'Bay mesaj erè yo ki klè ak itil',
        'Kontinye mande jiskaske done yo kòrèk',
        'Montre rezòlta yo nan fòma ki bèl'
      ],
      fr: [
        'Valider l\'âge, email et numéro de téléphone',
        'Utiliser try/except pour la gestion d\'erreurs',
        'Fournir des messages d\'erreur clairs et utiles',
        'Continuer à demander jusqu\'à ce que les données soient correctes',
        'Afficher les résultats dans un format agréable'
      ],
      en: [
        'Validate age, email, and phone number',
        'Use try/except for error handling',
        'Provide clear and helpful error messages',
        'Keep asking until data is correct',
        'Display results in a nice format'
      ]
    },
    starterCode: `# Interactive Input Validator Tool
import re

def show_welcome():
    print("=" * 50)
    print("🛡️  INTERACTIVE INPUT VALIDATOR TOOL")
    print("=" * 50)
    print("This tool helps ensure data accuracy and integrity.")
    print("Please provide the following information:\\n")

def get_valid_age():
    # Your validation code here
    pass

def get_valid_email():
    # Your validation code here  
    pass

def get_valid_phone():
    # Your validation code here
    pass

def display_summary(age, email, phone):
    # Your summary display code here
    pass

def main():
    show_welcome()
    
    try:
        # Collect all validated data
        age = get_valid_age()
        email = get_valid_email()
        phone = get_valid_phone()
        
        # Display results
        display_summary(age, email, phone)
        
    except KeyboardInterrupt:
        print("\\n\\nValidation cancelled by user.")
    except Exception as e:
        print(f"\\nUnexpected error: {e}")
    finally:
        print("\\nThank you for using the validator!")

if __name__ == "__main__":
    main()`,
    sampleSolution: `# Complete Interactive Input Validator Tool
import re
from datetime import datetime

def show_welcome():
    print("=" * 50)
    print("🛡️  INTERACTIVE INPUT VALIDATOR TOOL")
    print("=" * 50)
    print("This tool helps ensure data accuracy and integrity.")
    print("Please provide the following information:\\n")

def get_valid_age():
    while True:
        try:
            print("📅 AGE VALIDATION")
            print("   Rules: Must be between 1-120 years")
            age_input = input("   Enter your age: ").strip()
            
            if not age_input:
                raise ValueError("Age cannot be empty!")
            
            age = int(age_input)
            
            if age <= 0:
                raise ValueError("Age must be positive!")
            if age > 120:
                raise ValueError("Age cannot be over 120!")
            
            print(f"   ✅ Valid age: {age}")
            return age
            
        except ValueError as e:
            if "invalid literal" in str(e).lower():
                print("   ❌ Please enter a valid number!")
            else:
                print(f"   ❌ {e}")
            print()

def get_valid_email():
    while True:
        try:
            print("📧 EMAIL VALIDATION")
            print("   Rules: Must have @ and . in correct positions")
            email = input("   Enter your email: ").strip().lower()
            
            if not email:
                raise ValueError("Email cannot be empty!")
            
            # Basic format validation
            if "@" not in email:
                raise ValueError("Email must contain @ symbol!")
            
            if "." not in email:
                raise ValueError("Email must contain at least one dot!")
            
            if email.count("@") != 1:
                raise ValueError("Email must have exactly one @ symbol!")
            
            # Split by @ and validate parts
            local, domain = email.split("@")
            
            if len(local) < 1:
                raise ValueError("Email local part cannot be empty!")
            
            if len(domain) < 3:
                raise ValueError("Email domain is too short!")
            
            if "." not in domain:
                raise ValueError("Email domain must contain a dot!")
            
            # Check for consecutive dots
            if ".." in email:
                raise ValueError("Email cannot have consecutive dots!")
            
            # Check starts/ends
            if email.startswith(".") or email.endswith("."):
                raise ValueError("Email cannot start or end with a dot!")
            
            if local.startswith(".") or local.endswith("."):
                raise ValueError("Email local part cannot start or end with a dot!")
            
            print(f"   ✅ Valid email: {email}")
            return email
            
        except ValueError as e:
            print(f"   ❌ {e}")
            print()

def get_valid_phone():
    while True:
        try:
            print("📞 PHONE VALIDATION")
            print("   Rules: 10 digits (formatting will be removed)")
            print("   Examples: 5551234567, (555) 123-4567, 555-123-4567")
            phone = input("   Enter your phone: ").strip()
            
            if not phone:
                raise ValueError("Phone number cannot be empty!")
            
            # Remove common formatting characters
            clean_phone = re.sub(r'[()-\\s.-]', '', phone)
            
            if not clean_phone.isdigit():
                raise ValueError("Phone must contain only digits and formatting!")
            
            if len(clean_phone) < 10:
                raise ValueError(f"Phone too short! Got {len(clean_phone)} digits, need 10")
            
            if len(clean_phone) > 10:
                raise ValueError(f"Phone too long! Got {len(clean_phone)} digits, need 10")
            
            # Format the phone number nicely
            formatted_phone = f"({clean_phone[:3]}) {clean_phone[3:6]}-{clean_phone[6:]}"
            print(f"   ✅ Valid phone: {formatted_phone}")
            return formatted_phone
            
        except ValueError as e:
            print(f"   ❌ {e}")
            print()

def display_summary(age, email, phone):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    print("\\n" + "=" * 50)
    print("🎉 VALIDATION COMPLETED SUCCESSFULLY!")
    print("=" * 50)
    print(f"Timestamp: {timestamp}")
    print("\\nValidated Information:")
    print(f"  📅 Age:   {age} years old")
    print(f"  📧 Email: {email}")
    print(f"  📞 Phone: {phone}")
    print("\\n🛡️  All data has been verified and meets validation requirements.")
    print("=" * 50)

def main():
    show_welcome()
    
    try:
        # Collect all validated data
        age = get_valid_age()
        print()
        
        email = get_valid_email()
        print()
        
        phone = get_valid_phone()
        
        # Display results
        display_summary(age, email, phone)
        
    except KeyboardInterrupt:
        print("\\n\\n❌ Validation cancelled by user (Ctrl+C pressed).")
        print("No data was saved.")
    except Exception as e:
        print(f"\\n❌ Unexpected error occurred: {e}")
        print("Please try again or contact technical support.")
        import traceback
        print("\\nError details:")
        traceback.print_exc()
    finally:
        print("\\n👋 Thank you for using the Input Validator Tool!")

if __name__ == "__main__":
    main()`,
    challenges: {
      ht: [
        'Ajoute validasyon pou non ak prenon (dwe gen lèt sèlman)',
        'Kreye fonksyon pou validasyon paswo ak règ sekirite',
        'Sere done yo ki valide nan yon fichye JSON',
        'Ajoute opsyon pou modifye done yo ki deja antre yo'
      ],
      fr: [
        'Ajouter validation pour nom et prénom (lettres seulement)',
        'Créer une fonction pour validation de mot de passe avec règles de sécurité',
        'Sauvegarder les données validées dans un fichier JSON',
        'Ajouter une option pour modifier les données déjà saisies'
      ],
      en: [
        'Add validation for first and last name (letters only)',
        'Create a password validation function with security rules',
        'Save validated data to a JSON file',
        'Add option to modify already entered data'
      ]
    }
  }
};