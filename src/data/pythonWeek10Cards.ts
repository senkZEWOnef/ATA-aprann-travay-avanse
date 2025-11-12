// Week 10: File Handling
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

export const pythonWeek10Cards: LessonCard[] = [
  // Card 1: Introduction to File Handling
  {
    id: 'w10-c1-file-intro',
    type: 'concept',
    title: {
      ht: 'Poukisa Jesyon Fichye yo Enpòtan',
      fr: 'Pourquoi la Gestion de Fichiers est Importante',
      en: 'Why File Handling Matters'
    },
    content: {
      ht: 'Jouk kounye a, tout bagay disparèt lè yon pwogram fini.\n\nAvèk jesyon fichye, done yo ka sere sou disk la epi charge ankò lè pwochen fwa.\n\nEgzanp yo:\n• Sere done ki moun yo tape\n• Fè yon lis ki rete nan memwa\n• Kreye rapò ak rezilta yo\n• Pataje enfòmasyon ant pwogram yo',
      fr: 'Jusqu\'à présent, tout disparaît quand un programme se termine.\n\nAvec la gestion de fichiers, les données peuvent être sauvegardées sur le disque et rechargées à nouveau la prochaine fois.\n\nExemples:\n• Sauvegarder les données que les utilisateurs tapent\n• Créer des listes qui persistent en mémoire\n• Générer des rapports avec des résultats\n• Partager des informations entre programmes',
      en: 'Until now, everything disappears when a program ends.\n\nWith file handling, data can be saved to disk and loaded again next time.\n\nExamples:\n• Save data users type in\n• Create lists that persist in memory\n• Generate reports with results\n• Share information between programs'
    },
    codeExample: `# Without file handling - data is lost
name = input("Enter your name: ")
print(f"Hello {name}!")
# When program ends, 'name' is gone forever

# With file handling - data is saved
name = input("Enter your name: ")
with open("user_data.txt", "w") as file:
    file.write(name)
print(f"Hello {name}! Your name is now saved.")

# Later, we can read it back
with open("user_data.txt", "r") as file:
    saved_name = file.read()
    print(f"Welcome back, {saved_name}!")`
  },

  // Card 2: Opening Files Basics
  {
    id: 'w10-c2-opening-files',
    type: 'concept',
    title: {
      ht: 'Ouvè Fichye yo - Baz yo',
      fr: 'Ouverture de Fichiers - Les Bases',
      en: 'Opening Files - The Basics'
    },
    content: {
      ht: 'Pou travay ak fichye yo, ou dwe ouvè yo dabò.\n\n**Sentaks baz la:**\nfile = open("egzanp.txt", "r")\ncontent = file.read()\nfile.close()\n\n**Mod yo ak deskripsyon yo:**\n• "r" - Li (default, erè si fichye a pa egziste)\n• "w" - Ekri (kreye oswa ranplase fichye a)\n• "a" - Ajoute (mete nan fen fichye a)\n• "r+" - Li ak ekri',
      fr: 'Pour travailler avec des fichiers, vous devez d\'abord les ouvrir.\n\n**Syntaxe de base:**\nfile = open("exemple.txt", "r")\ncontent = file.read()\nfile.close()\n\n**Modes et descriptions:**\n• "r" - Lire (par défaut, erreur si le fichier n\'existe pas)\n• "w" - Écrire (crée ou remplace le fichier)\n• "a" - Ajouter (ajoute à la fin du fichier)\n• "r+" - Lire et écrire',
      en: 'To work with files, you must first open them.\n\n**Basic syntax:**\nfile = open("example.txt", "r")\ncontent = file.read()\nfile.close()\n\n**Modes and descriptions:**\n• "r" - Read (default, error if file doesn\'t exist)\n• "w" - Write (creates or overwrites file)\n• "a" - Append (adds to end of file)\n• "r+" - Read and write'
    },
    codeExample: `# Basic file opening
file = open("example.txt", "r")  # Open for reading
content = file.read()            # Read all content
file.close()                     # IMPORTANT: Always close!

print(content)

# Different modes
file_write = open("output.txt", "w")    # Create/overwrite
file_append = open("log.txt", "a")      # Add to end
file_read_write = open("data.txt", "r+") # Both read and write

# Don't forget to close all files!
file_write.close()
file_append.close() 
file_read_write.close()`
  },

  // Card 3: Quiz - File Modes
  {
    id: 'w10-c3-file-modes-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Mod Fichye yo',
      fr: 'Quiz: Modes de Fichiers',
      en: 'Quiz: File Modes'
    },
    content: {
      ht: 'Tèste konesans ou sou mod fichye yo.',
      fr: 'Testez vos connaissances sur les modes de fichiers.',
      en: 'Test your knowledge of file modes.'
    },
    quiz: {
      question: {
        ht: 'Ki mod ou ta dwe itilize pou ajoute done nan fen yon fichye?',
        fr: 'Quel mode devriez-vous utiliser pour ajouter des données à la fin d\'un fichier?',
        en: 'What mode should you use to append data to a file?'
      },
      options: [
        { ht: '"r"', fr: '"r"', en: '"r"' },
        { ht: '"w"', fr: '"w"', en: '"w"' },
        { ht: '"a"', fr: '"a"', en: '"a"' },
        { ht: '"r+"', fr: '"r+"', en: '"r+"' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'Mod "a" (append) itilize pou ajoute nouvo kontni nan fen yon fichye ki deja egziste, san yo pa efase sa ki te la yo deja.',
        fr: 'Le mode "a" (append) est utilisé pour ajouter du nouveau contenu à la fin d\'un fichier existant, sans effacer ce qui y était déjà.',
        en: 'Mode "a" (append) is used to add new content to the end of an existing file, without erasing what was already there.'
      }
    }
  },

  // Card 4: The 'with' Statement
  {
    id: 'w10-c4-with-statement',
    type: 'concept',
    title: {
      ht: 'Deklarasyon "with" - Fèmen Fichye Otomatik',
      fr: 'L\'instruction "with" - Fermeture Automatique',
      en: 'The "with" Statement - Automatic Closing'
    },
    content: {
      ht: 'Deklarasyon "with" se yon fason pi an sekirite pou travay ak fichye yo. Li otomatikman fèmen fichye a, menm si gen yon erè.\n\n**Poukisa li enpòtan:**\n• Fichye yo fèmen otomatikman\n• Pa gen danje bliye fèmen yo\n• Kòd la pi pwòp ak pi li fasil\n• Jesyon erè ki pi bon',
      fr: 'L\'instruction "with" est une façon plus sûre de travailler avec les fichiers. Elle ferme automatiquement le fichier, même s\'il y a une erreur.\n\n**Pourquoi c\'est important:**\n• Les fichiers se ferment automatiquement\n• Pas de risque d\'oublier de les fermer\n• Code plus propre et plus lisible\n• Meilleure gestion des erreurs',
      en: 'The "with" statement is a safer way to work with files. It automatically closes the file, even if there\'s an error.\n\n**Why it\'s important:**\n• Files close automatically\n• No risk of forgetting to close them\n• Cleaner and more readable code\n• Better error handling'
    },
    codeExample: `# Old way - manual closing (risky!)
file = open("data.txt", "r")
content = file.read()
file.close()  # What if we forget this?

# Better way - with statement
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File automatically closes here!

# Even if there's an error, file still closes
with open("data.txt", "r") as file:
    content = file.read()
    result = 10 / 0  # This causes an error!
# File STILL closes automatically`
  },

  // Card 5: Reading from Files
  {
    id: 'w10-c5-reading-files',
    type: 'concept',
    title: {
      ht: 'Li nan Fichye yo',
      fr: 'Lire à partir de Fichiers',
      en: 'Reading from Files'
    },
    content: {
      ht: 'Gen plizyè fason pou li fichye yo:\n\n**Li tout bagay yon sèl fwa:**\ncontent = file.read()\n\n**Li liy pa liy:**\nfor line in file:\n    print(line.strip())\n\n**Li tout liy yo nan yon lis:**\nlines = file.readlines()\n\n**Li yon sèl liy:**\nfirst_line = file.readline()',
      fr: 'Il y a plusieurs façons de lire des fichiers:\n\n**Lire tout en une fois:**\ncontent = file.read()\n\n**Lire ligne par ligne:**\nfor line in file:\n    print(line.strip())\n\n**Lire toutes les lignes dans une liste:**\nlines = file.readlines()\n\n**Lire une seule ligne:**\nfirst_line = file.readline()',
      en: 'There are several ways to read files:\n\n**Read everything at once:**\ncontent = file.read()\n\n**Read line by line:**\nfor line in file:\n    print(line.strip())\n\n**Read all lines into a list:**\nlines = file.readlines()\n\n**Read a single line:**\nfirst_line = file.readline()'
    },
    codeExample: `# Read entire file at once
with open("story.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line (memory efficient for large files)
with open("data.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}")

# Read all lines into a list
with open("names.txt", "r") as file:
    all_lines = file.readlines()
    print(f"Total names: {len(all_lines)}")

# Read just the first line
with open("config.txt", "r") as file:
    first_line = file.readline()
    print(f"First setting: {first_line.strip()}")`
  },

  // Card 6: Writing to Files
  {
    id: 'w10-c6-writing-files',
    type: 'concept',
    title: {
      ht: 'Ekri nan Fichye yo',
      fr: 'Écrire dans les Fichiers',
      en: 'Writing to Files'
    },
    content: {
      ht: 'Ou ka ekri done nan fichye yo pou sere yo.\n\n**Ekri ak ranplase (mod "w"):**\nfile.write("Nouvo kontni")\n\n**Ajoute nan fen an (mod "a"):**\nfile.write("Liy nouvo\\n")\n\n**Konsèy enpòtan:**\n• Toujou itilize \\n pou nouvo liy\n• Mod "w" efase tout bagay nan fichye a\n• Mod "a" ajoute nan fen an',
      fr: 'Vous pouvez écrire des données dans des fichiers pour les sauvegarder.\n\n**Écrire et remplacer (mode "w"):**\nfile.write("Nouveau contenu")\n\n**Ajouter à la fin (mode "a"):**\nfile.write("Nouvelle ligne\\n")\n\n**Conseils importants:**\n• Utilisez toujours \\n pour les nouvelles lignes\n• Le mode "w" efface tout dans le fichier\n• Le mode "a" ajoute à la fin',
      en: 'You can write data to files to save them.\n\n**Write and replace (mode "w"):**\nfile.write("New content")\n\n**Append to end (mode "a"):**\nfile.write("New line\\n")\n\n**Important tips:**\n• Always use \\n for new lines\n• Mode "w" erases everything in the file\n• Mode "a" adds to the end'
    },
    codeExample: `# Write to a new file (overwrites existing)
with open("output.txt", "w") as file:
    file.write("This is my first line!\\n")
    file.write("This is my second line!\\n")

# Append to an existing file
with open("log.txt", "a") as file:
    file.write("New log entry\\n")

# Write multiple lines at once
lines = ["Apple", "Banana", "Cherry"]
with open("fruits.txt", "w") as file:
    for fruit in lines:
        file.write(fruit + "\\n")

# Write user input to file
user_note = input("Enter your note: ")
with open("notes.txt", "a") as file:
    file.write(user_note + "\\n")
print("Note saved!")`
  },

  // Card 7: Exercise - Basic File Operations
  {
    id: 'w10-c7-file-operations-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Operasyon Fichye Baz yo',
      fr: 'Exercice: Opérations de Fichier de Base',
      en: 'Exercise: Basic File Operations'
    },
    content: {
      ht: 'Pratike operasyon fichye yo ki fondamantal.',
      fr: 'Pratiquer les opérations de fichier fondamentales.',
      en: 'Practice fundamental file operations.'
    },
    exercise: {
      instruction: {
        ht: 'Ekri yon pwogram ki kreye yon fichye yo rele "hello.txt" ak ekri "Hello, Python!" anndan l. Epi li menm fichye a ak montre tèks la.',
        fr: 'Écrivez un programme qui crée un fichier appelé "hello.txt" et y écrit "Hello, Python!". Ensuite, lisez le même fichier et affichez le texte.',
        en: 'Write a program that creates a file called "hello.txt" and writes "Hello, Python!" inside it. Then read the same file and display the text.'
      },
      starterCode: `# Step 1: Write to the file


# Step 2: Read from the file


print("Program completed!")`,
      solution: `# Step 1: Write to the file
with open("hello.txt", "w") as file:
    file.write("Hello, Python!")

# Step 2: Read from the file
with open("hello.txt", "r") as file:
    content = file.read()
    print(content)

print("Program completed!")`,
      hint: {
        ht: 'Itilize mod "w" pou ekri ak mod "r" pou li. Pa bliye itilize "with" pou fichye yo fèmen otomatikman.',
        fr: 'Utilisez le mode "w" pour écrire et le mode "r" pour lire. N\'oubliez pas d\'utiliser "with" pour que les fichiers se ferment automatiquement.',
        en: 'Use mode "w" to write and mode "r" to read. Don\'t forget to use "with" so files close automatically.'
      }
    }
  },

  // Card 8: File Error Handling
  {
    id: 'w10-c8-file-errors',
    type: 'concept',
    title: {
      ht: 'Jesyon Erè Fichye',
      fr: 'Gestion des Erreurs de Fichiers',
      en: 'File Error Handling'
    },
    content: {
      ht: 'Fichye yo ka lakòz erè, kidonk nou dwe prepare pou yo.\n\n**Erè komen yo:**\n• FileNotFoundError - fichye a pa egziste\n• PermissionError - pa gen otorizasyon\n• IOError - pwoblèm nan li/ekri\n\n**Solisyon:** Itilize try/except',
      fr: 'Les fichiers peuvent causer des erreurs, nous devons donc nous y préparer.\n\n**Erreurs courantes:**\n• FileNotFoundError - le fichier n\'existe pas\n• PermissionError - pas d\'autorisation\n• IOError - problème de lecture/écriture\n\n**Solution:** Utiliser try/except',
      en: 'Files can cause errors, so we must prepare for them.\n\n**Common errors:**\n• FileNotFoundError - file doesn\'t exist\n• PermissionError - no permission\n• IOError - read/write problem\n\n**Solution:** Use try/except'
    },
    codeExample: `# Handle missing files
try:
    with open("missing.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("That file doesn't exist!")

# Handle multiple error types
try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found. Creating new one...")
    with open("data.txt", "w") as file:
        file.write("New file created!")
except PermissionError:
    print("You don't have permission to read this file.")
except IOError:
    print("Something went wrong reading the file.")`
  },

  // Card 9: Quiz - File Error Handling
  {
    id: 'w10-c9-file-errors-quiz',
    type: 'quiz',
    title: {
      ht: 'Egzamen: Jesyon Erè Fichye',
      fr: 'Quiz: Gestion des Erreurs de Fichiers',
      en: 'Quiz: File Error Handling'
    },
    content: {
      ht: 'Tèste konesans ou sou jesyon erè fichye yo.',
      fr: 'Testez vos connaissances sur la gestion des erreurs de fichiers.',
      en: 'Test your knowledge of file error handling.'
    },
    quiz: {
      question: {
        ht: 'Ki erè ki rive lè yon fichye pa egziste nan mod "r"?',
        fr: 'Quelle erreur se produit si un fichier n\'existe pas en mode "r"?',
        en: 'What error occurs if a file doesn\'t exist in read mode?'
      },
      options: [
        { ht: 'ValueError', fr: 'ValueError', en: 'ValueError' },
        { ht: 'TypeError', fr: 'TypeError', en: 'TypeError' },
        { ht: 'FileNotFoundError', fr: 'FileNotFoundError', en: 'FileNotFoundError' },
        { ht: 'PermissionError', fr: 'PermissionError', en: 'PermissionError' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'FileNotFoundError se erè ki rive lè Python eseye ouvè yon fichye ki pa egziste nan mod "r" (read).',
        fr: 'FileNotFoundError est l\'erreur qui se produit quand Python essaie d\'ouvrir un fichier qui n\'existe pas en mode "r" (lecture).',
        en: 'FileNotFoundError is the error that occurs when Python tries to open a file that doesn\'t exist in "r" (read) mode.'
      }
    }
  },

  // Card 10: Exercise - Notes with Error Handling
  {
    id: 'w10-c10-notes-exercise',
    type: 'exercise',
    title: {
      ht: 'Egzèsis: Nòt ak Jesyon Erè',
      fr: 'Exercice: Notes avec Gestion d\'Erreurs',
      en: 'Exercise: Notes with Error Handling'
    },
    content: {
      ht: 'Kreye yon pwogram nòt ki ka jere erè yo ak sekirite.',
      fr: 'Créer un programme de notes qui peut gérer les erreurs en toute sécurité.',
      en: 'Create a notes program that can handle errors safely.'
    },
    exercise: {
      instruction: {
        ht: 'Ekri yon pwogram ki pèmèt itilizatè a ekri nòt yo ak li yo. Ajoute jesyon erè pou ka yo lè fichye a pa egziste.',
        fr: 'Écrivez un programme qui permet à l\'utilisateur d\'écrire et de lire des notes. Ajoutez la gestion d\'erreur pour les cas où le fichier n\'existe pas.',
        en: 'Write a program that allows the user to write and read notes. Add error handling for cases where the file doesn\'t exist.'
      },
      starterCode: `def write_note():
    note = input("Enter your note: ")
    # Add code to save note to "notes.txt"

def read_notes():
    # Add code to read and display notes from "notes.txt"
    # Handle the case where file doesn't exist
    pass

# Main program
choice = input("(W)rite or (R)ead notes? ").lower()
if choice == "w":
    write_note()
elif choice == "r":
    read_notes()`,
      solution: `def write_note():
    note = input("Enter your note: ")
    with open("notes.txt", "a") as file:
        file.write(note + "\\n")
    print("Note saved!")

def read_notes():
    try:
        with open("notes.txt", "r") as file:
            notes = file.readlines()
            print("\\nYour Notes:")
            for note in notes:
                print("-", note.strip())
    except FileNotFoundError:
        print("No notes yet. Write one first!")

# Main program
choice = input("(W)rite or (R)ead notes? ").lower()
if choice == "w":
    write_note()
elif choice == "r":
    read_notes()`,
      hint: {
        ht: 'Itilize try/except pou FileNotFoundError nan fonksyon read_notes. Itilize mod "a" pou ajoute nòt yo.',
        fr: 'Utilisez try/except pour FileNotFoundError dans la fonction read_notes. Utilisez le mode "a" pour ajouter des notes.',
        en: 'Use try/except for FileNotFoundError in the read_notes function. Use mode "a" to append notes.'
      }
    }
  },

  // Card 11: Advanced File Operations
  {
    id: 'w10-c11-advanced-operations',
    type: 'concept',
    title: {
      ht: 'Operasyon Fichye Avanse yo',
      fr: 'Opérations de Fichier Avancées',
      en: 'Advanced File Operations'
    },
    content: {
      ht: 'Operasyon yo ki pi konplèks pou fichye yo:\n\n**Konte liy yo:**\nlen(file.readlines())\n\n**Tcheke si yon fichye egziste:**\nimport os\nos.path.exists("fichye.txt")\n\n**Jwenn gwosè fichye a:**\nos.path.getsize("fichye.txt")\n\n**Efase yon fichye:**\nos.remove("fichye.txt")',
      fr: 'Opérations plus complexes pour les fichiers:\n\n**Compter les lignes:**\nlen(file.readlines())\n\n**Vérifier si un fichier existe:**\nimport os\nos.path.exists("fichier.txt")\n\n**Obtenir la taille du fichier:**\nos.path.getsize("fichier.txt")\n\n**Supprimer un fichier:**\nos.remove("fichier.txt")',
      en: 'More complex operations for files:\n\n**Count lines:**\nlen(file.readlines())\n\n**Check if file exists:**\nimport os\nos.path.exists("file.txt")\n\n**Get file size:**\nos.path.getsize("file.txt")\n\n**Delete a file:**\nos.remove("file.txt")'
    },
    codeExample: `import os

# Check if file exists before reading
if os.path.exists("data.txt"):
    with open("data.txt", "r") as file:
        lines = file.readlines()
        print(f"File has {len(lines)} lines")
        print(f"File size: {os.path.getsize('data.txt')} bytes")
else:
    print("File doesn't exist yet")

# Create a file with multiple lines
with open("test.txt", "w") as file:
    for i in range(5):
        file.write(f"This is line {i+1}\\n")

# Count words in a file
def count_words(filename):
    try:
        with open(filename, "r") as file:
            content = file.read()
            words = content.split()
            return len(words)
    except FileNotFoundError:
        return 0

word_count = count_words("story.txt")
print(f"The file contains {word_count} words")`
  },

  // Card 12: Mini Project - Complete Notes App
  {
    id: 'w10-c12-notes-app',
    type: 'project',
    title: {
      ht: 'Pwojè Mini: App Nòt Konplè',
      fr: 'Mini-Projet : Application de Notes Complète',
      en: 'Mini Project: Complete Notes App'
    },
    content: {
      ht: 'Kreye yon aplikasyon nòt konplè ak plizyè fonksyon.',
      fr: 'Créer une application de notes complète avec plusieurs fonctionnalités.',
      en: 'Create a complete notes application with multiple features.'
    },
    exercise: {
      instruction: {
        ht: 'Konstwi yon aplikasyon ki ka: (1) Ekri nòt yo, (2) Li ak montre tout nòt yo, (3) Konte konben nòt ki genyen, (4) Efase tout nòt yo, ak (5) Jere erè yo ak sekirite.',
        fr: 'Construire une application qui peut: (1) Écrire des notes, (2) Lire et afficher toutes les notes, (3) Compter combien de notes il y a, (4) Effacer toutes les notes, et (5) Gérer les erreurs en toute sécurité.',
        en: 'Build an application that can: (1) Write notes, (2) Read and display all notes, (3) Count how many notes there are, (4) Clear all notes, and (5) Handle errors safely.'
      },
      starterCode: `import os

def write_note():
    # Add code to write a note
    pass

def read_notes():
    # Add code to read and display notes
    pass

def count_notes():
    # Add code to count notes
    pass

def clear_notes():
    # Add code to clear all notes
    pass

def show_menu():
    print("\\n=== NOTES APP ===")
    print("1. Write a note")
    print("2. Read all notes")
    print("3. Count notes") 
    print("4. Clear all notes")
    print("5. Quit")

# Main program loop
while True:
    show_menu()
    choice = input("\\nChoose an option: ")
    
    if choice == "1":
        write_note()
    elif choice == "2":
        read_notes()
    elif choice == "3":
        count_notes()
    elif choice == "4":
        clear_notes()
    elif choice == "5":
        print("Goodbye!")
        break
    else:
        print("Invalid choice!")`,
      solution: `import os

NOTES_FILE = "notes.txt"

def write_note():
    note = input("Enter your note: ")
    with open(NOTES_FILE, "a") as file:
        file.write(note + "\\n")
    print("✅ Note saved!")

def read_notes():
    try:
        with open(NOTES_FILE, "r") as file:
            notes = file.readlines()
            if notes:
                print("\\n📝 Your Notes:")
                for i, note in enumerate(notes, 1):
                    print(f"{i}. {note.strip()}")
            else:
                print("📝 No notes found.")
    except FileNotFoundError:
        print("📝 No notes yet. Write your first note!")

def count_notes():
    try:
        with open(NOTES_FILE, "r") as file:
            notes = file.readlines()
            print(f"📊 Total notes: {len(notes)}")
    except FileNotFoundError:
        print("📊 Total notes: 0")

def clear_notes():
    if os.path.exists(NOTES_FILE):
        confirm = input("⚠️  Are you sure? This will delete all notes (y/n): ")
        if confirm.lower() == "y":
            os.remove(NOTES_FILE)
            print("🗑️  All notes cleared!")
        else:
            print("❌ Clear cancelled.")
    else:
        print("📝 No notes to clear.")

def show_menu():
    print("\\n=== NOTES APP ===")
    print("1. Write a note")
    print("2. Read all notes")
    print("3. Count notes") 
    print("4. Clear all notes")
    print("5. Quit")

# Main program loop
print("Welcome to Notes App!")
while True:
    show_menu()
    choice = input("\\nChoose an option: ")
    
    if choice == "1":
        write_note()
    elif choice == "2":
        read_notes()
    elif choice == "3":
        count_notes()
    elif choice == "4":
        clear_notes()
    elif choice == "5":
        print("👋 Goodbye!")
        break
    else:
        print("❌ Invalid choice!")`,
      hint: {
        ht: 'Itilize yon varyab NOTES_FILE = "notes.txt" pou kenbe non fichye a. Itilize os.path.exists() ak os.remove() pou jesyon fichye.',
        fr: 'Utilisez une variable NOTES_FILE = "notes.txt" pour stocker le nom du fichier. Utilisez os.path.exists() et os.remove() pour la gestion des fichiers.',
        en: 'Use a variable NOTES_FILE = "notes.txt" to store the filename. Use os.path.exists() and os.remove() for file management.'
      }
    }
  }
];

export const pythonWeek10Lesson = {
  weekNumber: 10,
  title: {
    ht: 'Jesyon Fichye yo',
    fr: 'Gestion de Fichiers',
    en: 'File Handling'
  },
  cards: pythonWeek10Cards,
  miniProject: {
    title: {
      ht: 'Pwojè Mini: "Aplikasyon Nòt ak Sauvgad"',
      fr: 'Mini-Projet : "Application de Notes avec Sauvegarde"',
      en: 'Mini-Project: "Notes App with File Persistence"'
    },
    description: {
      ht: 'Kreye yon aplikasyon nòt konplè ki ka sere ak charge done nan fichye yo, ak jesyon erè yo ak fonksyon avanse.',
      fr: 'Créer une application de notes complète qui peut sauvegarder et charger des données dans des fichiers, avec gestion d\'erreurs et fonctionnalités avancées.',
      en: 'Create a complete notes application that can save and load data from files, with error handling and advanced features.'
    },
    requirements: {
      ht: [
        'Kreye yon meni entèraktif ak opsyon yo',
        'Sere ak li nòt yo nan yon fichye tèks',
        'Jere ka yo lè fichye a pa egziste',
        'Konte ak montre estatistik nòt yo',
        'Efase ak konfime aksyon yo'
      ],
      fr: [
        'Créer un menu interactif avec des options',
        'Sauvegarder et lire les notes depuis un fichier texte',
        'Gérer les cas où le fichier n\'existe pas',
        'Compter et afficher les statistiques des notes',
        'Supprimer avec confirmation des actions'
      ],
      en: [
        'Create an interactive menu with options',
        'Save and read notes from a text file',
        'Handle cases where file doesn\'t exist',
        'Count and display note statistics',
        'Delete with confirmation of actions'
      ]
    },
    starterCode: `# Notes Application with File Persistence
import os

NOTES_FILE = "my_notes.txt"

def show_menu():
    print("\\n=== 📝 NOTES APP ===")
    print("1. ✍️  Write a note")
    print("2. 📖 Read all notes")
    print("3. 📊 Notes statistics")
    print("4. 🗑️  Clear all notes")
    print("5. 🚪 Exit")

def write_note():
    # Your code here
    pass

def read_notes():
    # Your code here
    pass

def notes_stats():
    # Your code here
    pass

def clear_notes():
    # Your code here
    pass

# Main program
print("Welcome to your Personal Notes App!")
while True:
    show_menu()
    choice = input("\\nSelect an option (1-5): ").strip()
    
    if choice == "1":
        write_note()
    elif choice == "2":
        read_notes()
    elif choice == "3":
        notes_stats()
    elif choice == "4":
        clear_notes()
    elif choice == "5":
        print("\\n👋 Thanks for using Notes App! Goodbye!")
        break
    else:
        print("\\n❌ Invalid choice. Please select 1-5.")`,
    sampleSolution: `# Complete Notes Application with File Persistence
import os
from datetime import datetime

NOTES_FILE = "my_notes.txt"

def show_menu():
    print("\\n=== 📝 NOTES APP ===")
    print("1. ✍️  Write a note")
    print("2. 📖 Read all notes")
    print("3. 📊 Notes statistics")
    print("4. 🗑️  Clear all notes")
    print("5. 🚪 Exit")

def write_note():
    print("\\n✍️  Write a new note:")
    note = input("Your note: ").strip()
    
    if not note:
        print("❌ Cannot save empty note!")
        return
    
    try:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open(NOTES_FILE, "a", encoding="utf-8") as file:
            file.write(f"[{timestamp}] {note}\\n")
        print("✅ Note saved successfully!")
    except Exception as e:
        print(f"❌ Error saving note: {e}")

def read_notes():
    try:
        if not os.path.exists(NOTES_FILE):
            print("\\n📝 No notes found. Write your first note!")
            return
        
        with open(NOTES_FILE, "r", encoding="utf-8") as file:
            notes = file.readlines()
        
        if not notes:
            print("\\n📝 No notes found.")
            return
        
        print("\\n📖 Your Notes:")
        print("=" * 50)
        for i, note in enumerate(notes, 1):
            print(f"{i:2d}. {note.strip()}")
        print("=" * 50)
        
    except Exception as e:
        print(f"❌ Error reading notes: {e}")

def notes_stats():
    try:
        if not os.path.exists(NOTES_FILE):
            print("\\n📊 Statistics: No notes yet!")
            return
        
        with open(NOTES_FILE, "r", encoding="utf-8") as file:
            notes = file.readlines()
        
        if not notes:
            print("\\n📊 Statistics: No notes found.")
            return
        
        total_notes = len(notes)
        total_chars = sum(len(note.strip()) for note in notes)
        total_words = sum(len(note.strip().split()) for note in notes)
        avg_words = total_words / total_notes if total_notes > 0 else 0
        file_size = os.path.getsize(NOTES_FILE)
        
        print("\\n📊 Notes Statistics:")
        print("=" * 30)
        print(f"📝 Total notes: {total_notes}")
        print(f"📄 Total words: {total_words}")
        print(f"🔤 Total characters: {total_chars}")
        print(f"📐 Average words per note: {avg_words:.1f}")
        print(f"💾 File size: {file_size} bytes")
        print("=" * 30)
        
    except Exception as e:
        print(f"❌ Error calculating statistics: {e}")

def clear_notes():
    try:
        if not os.path.exists(NOTES_FILE):
            print("\\n🗑️  No notes to clear.")
            return
        
        # Count notes first
        with open(NOTES_FILE, "r", encoding="utf-8") as file:
            note_count = len(file.readlines())
        
        if note_count == 0:
            print("\\n🗑️  No notes to clear.")
            return
        
        print(f"\\n⚠️  You have {note_count} note(s).")
        confirm = input("Are you sure you want to delete ALL notes? (type 'yes' to confirm): ")
        
        if confirm.lower() == "yes":
            os.remove(NOTES_FILE)
            print("✅ All notes cleared successfully!")
        else:
            print("❌ Clear operation cancelled.")
            
    except Exception as e:
        print(f"❌ Error clearing notes: {e}")

# Main program
print("🎉 Welcome to your Personal Notes App!")
print("💾 All your notes will be saved to:", NOTES_FILE)

while True:
    show_menu()
    choice = input("\\nSelect an option (1-5): ").strip()
    
    if choice == "1":
        write_note()
    elif choice == "2":
        read_notes()
    elif choice == "3":
        notes_stats()
    elif choice == "4":
        clear_notes()
    elif choice == "5":
        print("\\n👋 Thanks for using Notes App! Goodbye!")
        break
    else:
        print("\\n❌ Invalid choice. Please select 1-5.")`,
    challenges: {
      ht: [
        'Ajoute timestamp nan chak nòt ki sere',
        'Kreye fonksyon chèche ki ka jwenn nòt yo pa mo kle',
        'Ajoute kapasite pou modifye oswa efase nòt endividyèl yo',
        'Ekspòte nòt yo nan fòma CSV oswa JSON'
      ],
      fr: [
        'Ajouter un timestamp à chaque note sauvegardée',
        'Créer une fonction de recherche qui peut trouver des notes par mot-clé',
        'Ajouter la capacité de modifier ou supprimer des notes individuelles',
        'Exporter les notes en format CSV ou JSON'
      ],
      en: [
        'Add timestamps to each saved note',
        'Create a search function that can find notes by keyword',
        'Add ability to edit or delete individual notes',
        'Export notes to CSV or JSON format'
      ]
    }
  }
};