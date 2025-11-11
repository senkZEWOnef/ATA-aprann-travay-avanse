// Python Week 6: Loops (for & while) - Ultra-comprehensive Card-Based Lesson
// Teaching repetition and loop control in programming
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

export const pythonWeek6Lesson = {
  weekNumber: 6,
  title: {
    ht: "Semèn 6: Loops (for ak while)",
    fr: "Semaine 6: Boucles (for et while)",
    en: "Week 6: Loops (for & while)"
  },
  description: {
    ht: "Aprann kijan pou w repete kòd ak for ak while loops, itilize range(), ak kontwole loops yo ak break ak continue.",
    fr: "Apprenez à répéter du code avec les boucles for et while, utiliser range(), et contrôler les boucles avec break et continue.",
    en: "Learn to repeat code with for and while loops, use range(), and control loops with break and continue."
  },
  cards: [
    {
      id: "week6-intro",
      type: "intro",
      title: {
        ht: "Byenvini nan Semèn 6: Loops ak Repetisyon",
        fr: "Bienvenue à la Semaine 6: Boucles et Répétition", 
        en: "Welcome to Week 6: Loops & Repetition"
      },
      content: {
        ht: `# 🔄 Semèn 6: Loops (for ak while)

Sa nou pral aprann semèn sa a:
- 🔄 **Loops** - Kijan pou repete kòd otomatikman
- 📊 **For Loops** - Repete yon kantite fiks fwa
- ⏰ **While Loops** - Repete pandan yon kondisyon rete vre
- 🔢 **Range()** - Kreye yon seri nimewo
- ⏹️ **Break ak Continue** - Kontwole jan loop yo mache
- 🎯 **Mini Pwojè** - Jwèt Devine Nimewo

**Objektif Semèn nan:**
Ou pral aprann kijan pou otomatikman repete aksyon yo nan pwogram ou yo!`,
        fr: `# 🔄 Semaine 6: Boucles (for et while)

Ce que nous apprendrons cette semaine:
- 🔄 **Boucles** - Comment répéter du code automatiquement
- 📊 **Boucles For** - Répéter un nombre fixe de fois
- ⏰ **Boucles While** - Répéter tant qu'une condition est vraie
- 🔢 **Range()** - Créer une séquence de nombres
- ⏹️ **Break et Continue** - Contrôler le flux des boucles
- 🎯 **Mini Projet** - Jeu de Devinette de Nombres

**Objectifs de la semaine:**
Vous apprendrez à automatiser la répétition d'actions dans vos programmes!`,
        en: `# 🔄 Week 6: Loops (for & while)

What we'll learn this week:
- 🔄 **Loops** - How to repeat code automatically
- 📊 **For Loops** - Repeat a fixed number of times
- ⏰ **While Loops** - Repeat while a condition is true
- 🔢 **Range()** - Create sequences of numbers
- ⏹️ **Break & Continue** - Control loop flow
- 🎯 **Mini Project** - Number Guessing Game

**Week Goals:**
You'll learn to automate repetitive actions in your programs!`
      }
    },
    {
      id: "what-is-loop",
      type: "concept",
      title: {
        ht: "Kisa yon Loop ye?",
        fr: "Qu'est-ce qu'une Boucle?",
        en: "What Is a Loop?"
      },
      content: {
        ht: `# 🔄 Kisa yon Loop ye?

Yon **loop** se yon fason pou w repete yon blòk kòd plizyè fwa otèl pase ou ekri li plizyè fwa.

## 💭 Egzanp nan lavi reyèl:
- Lave vèsèl yo yon pa yon
- Konte nan 1 rive 10  
- Voye yon mesaj bay chak moun nan yon lis

## 🎯 Poukisa nou bezwen loops?
Pito nou ekri:
\`\`\`python
print("Hello")
print("Hello")  
print("Hello")
print("Hello")
print("Hello")
\`\`\`

Nou ka ekri:
\`\`\`python
for i in range(5):
    print("Hello")
\`\`\`

**Loop la ap fè travay la pi efikas ak pi pwòp!**`,
        fr: `# 🔄 Qu'est-ce qu'une Boucle?

Une **boucle** est un moyen de répéter un bloc de code plusieurs fois au lieu de l'écrire plusieurs fois.

## 💭 Exemples dans la vie réelle:
- Laver la vaisselle une par une
- Compter de 1 à 10
- Envoyer un message à chaque personne d'une liste

## 🎯 Pourquoi avons-nous besoin de boucles?
Au lieu d'écrire:
\`\`\`python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
\`\`\`

Nous pouvons écrire:
\`\`\`python
for i in range(5):
    print("Hello")
\`\`\`

**La boucle rend le travail plus efficace et plus propre!**`,
        en: `# 🔄 What Is a Loop?

A **loop** is a way to repeat a block of code multiple times instead of writing it over and over.

## 💭 Real-life examples:
- Washing dishes one by one
- Counting from 1 to 10
- Sending a message to each person in a list

## 🎯 Why do we need loops?
Instead of writing:
\`\`\`python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
\`\`\`

We can write:
\`\`\`python
for i in range(5):
    print("Hello")
\`\`\`

**The loop makes the job more efficient and cleaner!**`
      },
      code: {
        initial: `# Try both approaches and see the difference!

# Method 1: Repetitive (don't do this)
print("Hello 1")
print("Hello 2") 
print("Hello 3")

print("\\n--- Now with a loop ---\\n")

# Method 2: Using a loop (much better!)
for i in range(1, 4):
    print(f"Hello {i}")`,
        output: `Hello 1
Hello 2
Hello 3

--- Now with a loop ---

Hello 1
Hello 2
Hello 3`
      }
    },
    {
      id: "for-loop-basics",
      type: "concept", 
      title: {
        ht: "For Loop yo ak Range()",
        fr: "Boucles For avec Range()",
        en: "For Loops with Range()"
      },
      content: {
        ht: `# 📊 For Loop yo ak Range()

**For loop** yo itilize pou repete kòd yon kantite fiks fwa.

## 🔢 Fonksyon Range()
\`range(start, stop, step)\`

### Egzanp yo:
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(1, 6)\` → 1, 2, 3, 4, 5  
- \`range(2, 10, 2)\` → 2, 4, 6, 8

## 💡 Nouvo tèm yo:
- **Start** - Kote pou kòmanse (opcional, default: 0)
- **Stop** - Kote pou sispann (obligatwa, pa enkli)
- **Step** - Ki kantite pou ogmante (opcional, default: 1)

## 📋 Loop ak lis yo:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\``,
        fr: `# 📊 Boucles For avec Range()

Les **boucles for** sont utilisées pour répéter du code un nombre fixe de fois.

## 🔢 Fonction Range()
\`range(start, stop, step)\`

### Exemples:
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(1, 6)\` → 1, 2, 3, 4, 5
- \`range(2, 10, 2)\` → 2, 4, 6, 8

## 💡 Nouveaux termes:
- **Start** - Où commencer (optionnel, défaut: 0)
- **Stop** - Où s'arrêter (obligatoire, non inclus)
- **Step** - De combien augmenter (optionnel, défaut: 1)

## 📋 Boucles avec listes:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\``,
        en: `# 📊 For Loops with Range()

**For loops** are used to repeat code a fixed number of times.

## 🔢 Range() Function
\`range(start, stop, step)\`

### Examples:
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(1, 6)\` → 1, 2, 3, 4, 5
- \`range(2, 10, 2)\` → 2, 4, 6, 8

## 💡 Key terms:
- **Start** - Where to begin (optional, default: 0)
- **Stop** - Where to end (required, not included)
- **Step** - How much to increase by (optional, default: 1)

## 📋 Loops with lists:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\``
      },
      code: {
        initial: `# Explore different range() patterns

print("=== Basic range(5) ===")
for i in range(5):
    print(f"Number: {i}")

print("\\n=== range(1, 6) ===")
for i in range(1, 6):
    print(f"Count: {i}")

print("\\n=== range(2, 10, 2) ===")  
for i in range(2, 10, 2):
    print(f"Even: {i}")

print("\\n=== Loop through list ===")
colors = ["red", "green", "blue"]
for color in colors:
    print(f"I like {color}")`,
        output: `=== Basic range(5) ===
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4

=== range(1, 6) ===
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

=== range(2, 10, 2) ===
Even: 2
Even: 4
Even: 6
Even: 8

=== Loop through list ===
I like red
I like green
I like blue`
      }
    },
    {
      id: "while-loop-basics",
      type: "concept",
      title: {
        ht: "While Loop yo",
        fr: "Boucles While",
        en: "While Loops"
      },
      content: {
        ht: `# ⏰ While Loop yo

**While loop** yo kontinye k ap travay pandan yon kondisyon rete vre (**True**).

## ⚠️ Atansyon: Infinite Loop yo!
Si w pa chanje kondisyon an, loop la ap kontinye pou tout tan!

\`\`\`python
count = 1
while count <= 5:
    print("Count:", count)
    count += 1  # ← TOUJOU sonje chanje kondisyon an!
\`\`\`

## 🔄 While vs For:
- **For loop** - Itilize lè w konnen kantite repetisyon yo  
- **While loop** - Itilize lè kondisyon an kontwole repetisyon an

## 💡 Egzanp pratik:
- Li fichye a jiskaske ou rive nan bout la
- Kontinye mande itilizatè a pou yon repons ki bon
- Jwèt la kontinye jiskaske jwè a genyen`,
        fr: `# ⏰ Boucles While

Les **boucles while** continuent à s'exécuter tant qu'une condition reste vraie (**True**).

## ⚠️ Attention: Boucles Infinies!
Si vous ne changez pas la condition, la boucle continuera pour toujours!

\`\`\`python
count = 1
while count <= 5:
    print("Count:", count)
    count += 1  # ← TOUJOURS se rappeler de changer la condition!
\`\`\`

## 🔄 While vs For:
- **Boucle For** - Utilisez quand vous connaissez le nombre de répétitions
- **Boucle While** - Utilisez quand la condition contrôle la répétition

## 💡 Exemples pratiques:
- Lire un fichier jusqu'à la fin
- Continuer à demander à l'utilisateur une réponse valide
- Le jeu continue jusqu'à ce que le joueur gagne`,
        en: `# ⏰ While Loops

**While loops** continue running as long as a condition remains true (**True**).

## ⚠️ Warning: Infinite Loops!
If you don't change the condition, the loop will continue forever!

\`\`\`python
count = 1
while count <= 5:
    print("Count:", count)
    count += 1  # ← ALWAYS remember to change the condition!
\`\`\`

## 🔄 While vs For:
- **For loop** - Use when you know the number of repetitions
- **While loop** - Use when a condition controls the repetition

## 💡 Practical examples:
- Read a file until the end
- Keep asking user for valid input
- Game continues until player wins`
      },
      code: {
        initial: `# Practice with while loops

print("=== Counting with while ===")
count = 1
while count <= 5:
    print(f"Count: {count}")
    count += 1

print("\\n=== Countdown ===")
countdown = 5
while countdown > 0:
    print(f"T-minus {countdown}...")
    countdown -= 1
print("Blast off! 🚀")

print("\\n=== User input simulation ===")
attempts = 0
max_attempts = 3
while attempts < max_attempts:
    attempts += 1
    print(f"Attempt {attempts}: Please enter password")
    if attempts == 2:  # Simulate correct password on 2nd try
        print("✅ Password correct!")
        break
print("Login process complete")`,
        output: `=== Counting with while ===
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

=== Countdown ===
T-minus 5...
T-minus 4...
T-minus 3...
T-minus 2...
T-minus 1...
Blast off! 🚀

=== User input simulation ===
Attempt 1: Please enter password
Attempt 2: Please enter password
✅ Password correct!
Login process complete`
      }
    },
    {
      id: "break-continue",
      type: "concept",
      title: {
        ht: "Break ak Continue",
        fr: "Break et Continue", 
        en: "Break and Continue"
      },
      content: {
        ht: `# ⏹️ Break ak Continue

Sa yo se mo kle ki kontwole kijan loop yo fonksyone.

## 🛑 Break
**Break** soti nan loop la konplètman.

\`\`\`python
for i in range(10):
    if i == 5:
        break  # ← Soti nan loop la
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

## ⏭️ Continue  
**Continue** sote etap aktyèl la epi kontinye ak etap ki gen apre a.

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # ← Sote etap sa a
    print(i)
# Output: 0, 1, 3, 4
\`\`\`

## 💡 Konsèy yo:
- **Break** → "Sispann konplètman"
- **Continue** → "Sote etap sa a, kontinye ak etap ki gen apre a"`,
        fr: `# ⏹️ Break et Continue

Ce sont des mots-clés qui contrôlent le flux des boucles.

## 🛑 Break
**Break** sort complètement de la boucle.

\`\`\`python
for i in range(10):
    if i == 5:
        break  # ← Sort de la boucle
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

## ⏭️ Continue
**Continue** saute l'itération actuelle et continue avec la suivante.

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # ← Saute cette itération
    print(i)
# Output: 0, 1, 3, 4
\`\`\`

## 💡 Conseils:
- **Break** → "Arrête complètement"
- **Continue** → "Saute cette fois, continue avec la suivante"`,
        en: `# ⏹️ Break and Continue

These are keywords that control loop flow.

## 🛑 Break
**Break** exits the loop completely.

\`\`\`python
for i in range(10):
    if i == 5:
        break  # ← Exit the loop
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

## ⏭️ Continue
**Continue** skips the current iteration and continues with the next.

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # ← Skip this iteration
    print(i)
# Output: 0, 1, 3, 4
\`\`\`

## 💡 Tips:
- **Break** → "Stop completely"
- **Continue** → "Skip this time, continue with next"`
      },
      code: {
        initial: `# Practice break and continue

print("=== Break Example ===")
for i in range(10):
    if i == 5:
        print("Found 5! Breaking out of loop...")
        break
    print(f"Number: {i}")

print("\\n=== Continue Example ===")  
for i in range(8):
    if i % 2 == 0:  # Skip even numbers
        continue
    print(f"Odd number: {i}")

print("\\n=== Finding first negative ===")
numbers = [5, 3, -2, 8, -1, 7]
for num in numbers:
    if num < 0:
        print(f"First negative number found: {num}")
        break
    print(f"Checking: {num}")`,
        output: `=== Break Example ===
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4
Found 5! Breaking out of loop...

=== Continue Example ===
Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7

=== Finding first negative ===
Checking: 5
Checking: 3
First negative number found: -2`
      }
    },
    {
      id: "loops-with-conditionals",
      type: "concept",
      title: {
        ht: "Konbine Loop ak Kondisyon yo",
        fr: "Combiner Boucles et Conditions",
        en: "Combining Loops with Conditionals"
      },
      content: {
        ht: `# 🔄➕🎯 Konbine Loop ak Kondisyon yo

Loop yo ak kondisyon yo travay byen ansanm pou kreye pwogram ki pi efikas.

## 🎯 Modèl ki pi komen yo:

### 1. **Filtre ak Kondisyon**
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} se yon nimewo ki gen pè")
\`\`\`

### 2. **Konte ak Kondisyon**
\`\`\`python
count = 0
for i in range(1, 11):
    if i % 3 == 0:
        count += 1
print(f"Gen {count} nimewo ki divize pa 3")
\`\`\`

### 3. **Akimile ak Kondisyon**
\`\`\`python
total = 0
numbers = [10, -5, 3, -2, 8]
for num in numbers:
    if num > 0:  # Sèlman nimewo pozitif yo
        total += num
\`\`\`

## 💡 Konsèy: Itilize nesting ak atansyon, pa fè li twò konplike!`,
        fr: `# 🔄➕🎯 Combiner Boucles et Conditions

Les boucles et les conditions travaillent bien ensemble pour créer des programmes plus efficaces.

## 🎯 Modèles les plus courants:

### 1. **Filtrer avec Conditions**
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} est un nombre pair")
\`\`\`

### 2. **Compter avec Conditions**
\`\`\`python
count = 0
for i in range(1, 11):
    if i % 3 == 0:
        count += 1
print(f"Il y a {count} nombres divisibles par 3")
\`\`\`

### 3. **Accumuler avec Conditions**
\`\`\`python
total = 0
numbers = [10, -5, 3, -2, 8]
for num in numbers:
    if num > 0:  # Seulement les nombres positifs
        total += num
\`\`\`

## 💡 Conseil: Utilisez le nesting avec précaution, ne le rendez pas trop compliqué!`,
        en: `# 🔄➕🎯 Combining Loops with Conditionals

Loops and conditions work great together to create more powerful programs.

## 🎯 Most common patterns:

### 1. **Filter with Conditions**
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} is an even number")
\`\`\`

### 2. **Count with Conditions**
\`\`\`python
count = 0
for i in range(1, 11):
    if i % 3 == 0:
        count += 1
print(f"There are {count} numbers divisible by 3")
\`\`\`

### 3. **Accumulate with Conditions**
\`\`\`python
total = 0
numbers = [10, -5, 3, -2, 8]
for num in numbers:
    if num > 0:  # Only positive numbers
        total += num
\`\`\`

## 💡 Tip: Use nesting carefully, don't make it too complicated!`
      },
      code: {
        initial: `# Practice combining loops with conditionals

print("=== Filter even numbers ===")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        print(f"{num} is even")

print("\\n=== Count vowels in a word ===")
word = "programming"
vowel_count = 0
for letter in word:
    if letter.lower() in "aeiou":
        vowel_count += 1
        print(f"Found vowel: {letter}")
print(f"Total vowels: {vowel_count}")

print("\\n=== Sum positive numbers ===")
numbers = [-3, 5, -1, 8, -2, 4]
positive_sum = 0
for num in numbers:
    if num > 0:
        positive_sum += num
        print(f"Adding {num} to sum")
print(f"Sum of positive numbers: {positive_sum}")`,
        output: `=== Filter even numbers ===
2 is even
4 is even
6 is even
8 is even
10 is even

=== Count vowels in a word ===
Found vowel: o
Found vowel: a
Found vowel: i
Total vowels: 3

=== Sum positive numbers ===
Adding 5 to sum
Adding 8 to sum
Adding 4 to sum
Sum of positive numbers: 17`
      }
    },
    {
      id: "practice-exercises",
      type: "practice",
      title: {
        ht: "Egzèsis Pratik",
        fr: "Exercices Pratiques",
        en: "Practice Exercises"
      },
      content: {
        ht: `# 💪 Egzèsis Pratik pou Loop yo

## 🎯 Egzèsis 1: Nimewo 1 rive 10
Ekri yon pwogram ki afiche nimewo yo nan 1 rive 10 ak yon for loop.

## 🎯 Egzèsis 2: "Hello" 5 fwa  
Itilize yon while loop pou afiche "Hello" 5 fwa.

## 🎯 Egzèsis 3: Nimewo ki gen pè
Itilize yon loop pou afiche tout nimewo ki gen pè ant 1 ak 20.

## 🎯 Egzèsis 4: Mwayèn nimewo yo
Ekri pwogram ki mande itilizatè a pou 5 nimewo epi afiche mwayèn yo.

## 🎯 Egzèsis 5 (Bonus): Tablo miltiplikasyon
Kreye yon tablo miltiplikasyon pou nenpòt nimewo itilizatè a antre.

## 💡 Konsèy pou rezoud pwoblèm yo:
1. **Kòmanse ak pwoblèm ki pi senp la** - Egzèsis 1
2. **Teste chak solisyon ou** ak valè diferan yo  
3. **Itilize print()** pou debug kòd ou a
4. **Pa gen krent fè erè** - se konsa ou aprann!`,
        fr: `# 💪 Exercices Pratiques pour les Boucles

## 🎯 Exercice 1: Nombres 1 à 10
Écrivez un programme qui affiche les nombres de 1 à 10 avec une boucle for.

## 🎯 Exercice 2: "Hello" 5 fois
Utilisez une boucle while pour afficher "Hello" 5 fois.

## 🎯 Exercice 3: Nombres pairs
Utilisez une boucle pour afficher tous les nombres pairs entre 1 et 20.

## 🎯 Exercice 4: Moyenne des nombres
Écrivez un programme qui demande à l'utilisateur 5 nombres et affiche leur moyenne.

## 🎯 Exercice 5 (Bonus): Table de multiplication
Créez une table de multiplication pour n'importe quel nombre entré par l'utilisateur.

## 💡 Conseils pour résoudre les problèmes:
1. **Commencez par le problème le plus simple** - Exercice 1
2. **Testez chaque solution** avec différentes valeurs
3. **Utilisez print()** pour déboguer votre code
4. **N'ayez pas peur de faire des erreurs** - c'est ainsi qu'on apprend!`,
        en: `# 💪 Practice Exercises for Loops

## 🎯 Exercise 1: Numbers 1 to 10
Write a program that prints numbers 1 to 10 using a for loop.

## 🎯 Exercise 2: "Hello" 5 times
Use a while loop to print "Hello" 5 times.

## 🎯 Exercise 3: Even numbers
Use a loop to print all even numbers between 1 and 20.

## 🎯 Exercise 4: Average of numbers
Write a program that asks the user for 5 numbers and prints their average.

## 🎯 Exercise 5 (Bonus): Multiplication table
Create a multiplication table for any number entered by the user.

## 💡 Tips for solving problems:
1. **Start with the simplest problem** - Exercise 1
2. **Test each solution** with different values
3. **Use print()** to debug your code
4. **Don't be afraid to make mistakes** - that's how you learn!`
      },
      code: {
        initial: `# Practice Area - Try the exercises here!

# Exercise 1: Numbers 1 to 10
print("=== Exercise 1: Numbers 1 to 10 ===")
# TODO: Use a for loop to print numbers 1 to 10


# Exercise 2: "Hello" 5 times with while loop  
print("\\n=== Exercise 2: Hello 5 times ===")
# TODO: Use a while loop to print "Hello" 5 times


# Exercise 3: Even numbers between 1 and 20
print("\\n=== Exercise 3: Even numbers 1-20 ===")
# TODO: Print all even numbers between 1 and 20


# Exercise 4: Average of 5 numbers (simulation)
print("\\n=== Exercise 4: Average calculation ===") 
numbers = [10, 15, 20, 25, 30]  # Simulated user input
# TODO: Calculate and print the average of these numbers


# Exercise 5 (Bonus): Multiplication table for 7
print("\\n=== Exercise 5: Multiplication table for 7 ===")
# TODO: Create multiplication table for 7 (7x1 to 7x10)`,
        solution: `# Practice Area - Solutions

# Exercise 1: Numbers 1 to 10
print("=== Exercise 1: Numbers 1 to 10 ===")
for i in range(1, 11):
    print(i)

# Exercise 2: "Hello" 5 times with while loop
print("\\n=== Exercise 2: Hello 5 times ===")
count = 0
while count < 5:
    print("Hello")
    count += 1

# Exercise 3: Even numbers between 1 and 20
print("\\n=== Exercise 3: Even numbers 1-20 ===")
for i in range(2, 21, 2):  # Start at 2, go to 20, step by 2
    print(f"{i} is even")

# Exercise 4: Average of 5 numbers (simulation)
print("\\n=== Exercise 4: Average calculation ===")
numbers = [10, 15, 20, 25, 30]  # Simulated user input
total = 0
for num in numbers:
    total += num
average = total / len(numbers)
print(f"Numbers: {numbers}")
print(f"Average: {average}")

# Exercise 5 (Bonus): Multiplication table for 7
print("\\n=== Exercise 5: Multiplication table for 7 ===")
for i in range(1, 11):
    result = 7 * i
    print(f"7 x {i} = {result}")`,
        output: `=== Exercise 1: Numbers 1 to 10 ===
1
2
3
4
5
6
7
8
9
10

=== Exercise 2: Hello 5 times ===
Hello
Hello
Hello
Hello
Hello

=== Exercise 3: Even numbers 1-20 ===
2 is even
4 is even
6 is even
8 is even
10 is even
12 is even
14 is even
16 is even
18 is even
20 is even

=== Exercise 4: Average calculation ===
Numbers: [10, 15, 20, 25, 30]
Average: 20.0

=== Exercise 5: Multiplication table for 7 ===
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`
      }
    },
    {
      id: "loop-tips",
      type: "tip",
      title: {
        ht: "Konsèy ak Tèknik pou Loop yo",
        fr: "Conseils et Techniques pour les Boucles",
        en: "Loop Tips and Techniques"
      },
      content: {
        ht: `# 💡 Konsèy ak Tèknik pou Loop yo

## 🚨 Kijan pou evite Infinite Loop yo
\`\`\`python
# ❌ Move sa a ap kreye infinite loop
count = 0
while count < 5:
    print(count)  # Pa gen chanjman nan count!

# ✅ Move sa a bon
count = 0  
while count < 5:
    print(count)
    count += 1  # ← Chanje kondisyon an!
\`\`\`

## 🔍 Debug ak Print Statement yo
\`\`\`python
for i in range(5):
    print(f"Debug: i = {i}")  # ← Gade valè i a
    # Kòd ou a...
\`\`\`

## ⚡ Optimize ak Range()
\`\`\`python
# Itilize range() efikas
for i in range(0, 100, 10):  # 0, 10, 20, 30...
    print(i)
\`\`\`

## 🎯 Chwazi loop ki bon an:
- **For** → Lè ou konnen kantite repetisyon yo
- **While** → Lè ou pa konnen ki lè pou sispann`,
        fr: `# 💡 Conseils et Techniques pour les Boucles

## 🚨 Comment éviter les Boucles Infinies
\`\`\`python
# ❌ Ceci créera une boucle infinie
count = 0
while count < 5:
    print(count)  # Pas de changement dans count!

# ✅ Ceci est correct
count = 0
while count < 5:
    print(count)
    count += 1  # ← Changer la condition!
\`\`\`

## 🔍 Débugger avec des Print Statements
\`\`\`python
for i in range(5):
    print(f"Debug: i = {i}")  # ← Voir la valeur de i
    # Votre code...
\`\`\`

## ⚡ Optimiser avec Range()
\`\`\`python
# Utiliser range() efficacement
for i in range(0, 100, 10):  # 0, 10, 20, 30...
    print(i)
\`\`\`

## 🎯 Choisir la bonne boucle:
- **For** → Quand vous connaissez le nombre de répétitions
- **While** → Quand vous ne savez pas quand arrêter`,
        en: `# 💡 Loop Tips and Techniques

## 🚨 How to Avoid Infinite Loops
\`\`\`python
# ❌ This will create an infinite loop
count = 0
while count < 5:
    print(count)  # No change to count!

# ✅ This is correct
count = 0
while count < 5:
    print(count)
    count += 1  # ← Change the condition!
\`\`\`

## 🔍 Debug with Print Statements
\`\`\`python
for i in range(5):
    print(f"Debug: i = {i}")  # ← See the value of i
    # Your code...
\`\`\`

## ⚡ Optimize with Range()
\`\`\`python
# Use range() efficiently
for i in range(0, 100, 10):  # 0, 10, 20, 30...
    print(i)
\`\`\`

## 🎯 Choose the right loop:
- **For** → When you know the number of repetitions
- **While** → When you don't know when to stop`
      },
      code: {
        initial: `# Practice good loop techniques

print("=== Efficient range usage ===")
# Print multiples of 5 from 0 to 50
for i in range(0, 55, 5):
    print(f"Multiple of 5: {i}")

print("\\n=== Safe while loop ===")
# Countdown with safety check
countdown = 5
max_iterations = 10  # Safety net
iterations = 0

while countdown > 0 and iterations < max_iterations:
    print(f"Countdown: {countdown}")
    countdown -= 1
    iterations += 1
    
if iterations >= max_iterations:
    print("Safety stop activated!")
else:
    print("Countdown complete! 🚀")

print("\\n=== Loop with debugging ===")
numbers = [1, 2, 3, 4, 5]
total = 0
for i, num in enumerate(numbers):
    print(f"Debug: Step {i+1}, adding {num}")
    total += num
    print(f"Debug: Running total = {total}")
print(f"Final total: {total}")`,
        output: `=== Efficient range usage ===
Multiple of 5: 0
Multiple of 5: 5
Multiple of 5: 10
Multiple of 5: 15
Multiple of 5: 20
Multiple of 5: 25
Multiple of 5: 30
Multiple of 5: 35
Multiple of 5: 40
Multiple of 5: 45
Multiple of 5: 50

=== Safe while loop ===
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1
Countdown complete! 🚀

=== Loop with debugging ===
Debug: Step 1, adding 1
Debug: Running total = 1
Debug: Step 2, adding 2
Debug: Running total = 3
Debug: Step 3, adding 3
Debug: Running total = 6
Debug: Step 4, adding 4
Debug: Running total = 10
Debug: Step 5, adding 5
Debug: Running total = 15
Final total: 15`
      }
    },
    {
      id: "quiz",
      type: "quiz",
      title: {
        ht: "Quiz: Tès Konesans ou",
        fr: "Quiz: Testez vos Connaissances",
        en: "Quiz: Test Your Knowledge"
      },
      content: {
        ht: `# 🧠 Quiz: Loop yo ak Repetisyon

## ❓ Kesyon 1
Ki fonksyon yo itilize souvan pou kreye yon seri nimewo nan yon for loop?

**Repons:** \`range()\`

---

## ❓ Kesyon 2  
Sa kòd sa a ap afiche?
\`\`\`python
for i in range(3):
    print("Hi")
\`\`\`

**Repons:**
\`\`\`
Hi
Hi  
Hi
\`\`\`

---

## ❓ Kesyon 3
Ki sa ki pase si w bliye chanje compteur la nan yon while loop?

**Repons:** Infinite loop (Loop la ap kontinye pou tout tan)

---

## ❓ Kesyon 4
Ki sa \`break\` fè nan yon loop?

**Repons:** Li soti nan loop la konplètman

---

## ❓ Kesyon 5
Sa kòd sa a ap afiche?
\`\`\`python
for i in range(5):
    if i == 3:
        continue
    print(i)
\`\`\`

**Repons:** 0, 1, 2, 4 (li sote 3 a)`,
        fr: `# 🧠 Quiz: Boucles et Répétition

## ❓ Question 1
Quelle fonction est couramment utilisée pour générer une séquence de nombres dans une boucle for?

**Réponse:** \`range()\`

---

## ❓ Question 2
Que va afficher ce code?
\`\`\`python
for i in range(3):
    print("Hi")
\`\`\`

**Réponse:**
\`\`\`
Hi
Hi
Hi
\`\`\`

---

## ❓ Question 3
Que se passe-t-il si vous oubliez de mettre à jour le compteur dans une boucle while?

**Réponse:** Boucle infinie (La boucle continue pour toujours)

---

## ❓ Question 4
Que fait \`break\` à l'intérieur d'une boucle?

**Réponse:** Il sort complètement de la boucle

---

## ❓ Question 5
Que va afficher ce code?
\`\`\`python
for i in range(5):
    if i == 3:
        continue
    print(i)
\`\`\`

**Réponse:** 0, 1, 2, 4 (il saute 3)`,
        en: `# 🧠 Quiz: Loops and Repetition

## ❓ Question 1
What function is commonly used to generate a sequence of numbers in a for loop?

**Answer:** \`range()\`

---

## ❓ Question 2
What will this code print?
\`\`\`python
for i in range(3):
    print("Hi")
\`\`\`

**Answer:**
\`\`\`
Hi
Hi
Hi
\`\`\`

---

## ❓ Question 3
What happens if you forget to update the counter in a while loop?

**Answer:** Infinite loop (The loop continues forever)

---

## ❓ Question 4
What does \`break\` do inside a loop?

**Answer:** Immediately exits the loop

---

## ❓ Question 5
What will this code print?
\`\`\`python
for i in range(5):
    if i == 3:
        continue
    print(i)
\`\`\`

**Answer:** 0, 1, 2, 4 (it skips 3)`
      }
    }
  ],

  miniProject: {
    title: {
      ht: "🎯 Mini Pwojè: Jwèt Devine Nimewo",
      fr: "🎯 Mini Projet: Jeu de Devinette de Nombres",
      en: "🎯 Mini Project: Number Guessing Game"
    },
    description: {
      ht: "Kreye yon jwèt kote òdinatè a chwazi yon nimewo ak itilizatè a dwe devine li. Itilize loops ak conditionals pou kreye yon eksperyans jwèt ki entèresan.",
      fr: "Créez un jeu où l'ordinateur choisit un nombre et l'utilisateur doit le deviner. Utilisez des boucles et des conditions pour créer une expérience de jeu intéressante.",
      en: "Create a game where the computer picks a number and the user must guess it. Use loops and conditionals to create an engaging game experience."
    },
    starterCode: `# Number Guessing Game - Complete Implementation
# This game demonstrates loops, conditionals, and user interaction

import random

def guessing_game():
    # TODO 1: Set up the game parameters
    # Choose a random number between 1 and 10
    # Initialize attempt counter
    # Set maximum attempts allowed
    
    # TODO 2: Welcome message
    # Print game instructions
    # Tell user the number range
    
    # TODO 3: Main game loop
    # Use while loop to keep asking for guesses
    # Get user input and convert to integer
    # Increment attempt counter
    
    # TODO 4: Check the guess
    # If correct: congratulate and break
    # If too low: give hint and continue  
    # If too high: give hint and continue
    # If max attempts reached: reveal answer
    
    # TODO 5: Game statistics
    # Show final results
    # Display number of attempts used
    
    print("Thanks for playing! 🎮")

# Run the game
guessing_game()`,
    sampleSolution: `# Number Guessing Game - Complete Implementation
# This game demonstrates loops, conditionals, and user interaction

import random

def guessing_game():
    # Game setup
    secret_number = random.randint(1, 10)
    attempts = 0
    max_attempts = 5
    game_won = False
    
    print("🎯 Welcome to the Number Guessing Game!")
    print(f"I'm thinking of a number between 1 and 10...")
    print(f"You have {max_attempts} attempts to guess it!")
    print("-" * 40)
    
    # Main game loop
    while attempts < max_attempts:
        try:
            # Get user guess
            guess = int(input(f"\\nAttempt {attempts + 1}/{max_attempts} - Enter your guess: "))
            attempts += 1
            
            # Validate input range
            if guess < 1 or guess > 10:
                print("⚠️  Please enter a number between 1 and 10!")
                continue
            
            # Check the guess
            if guess == secret_number:
                print("🎉 CONGRATULATIONS! You guessed it!")
                print(f"✨ You found the number {secret_number} in {attempts} attempt(s)!")
                game_won = True
                break
            elif guess < secret_number:
                remaining = max_attempts - attempts
                if remaining > 0:
                    print(f"📈 Too low! Try a higher number. ({remaining} attempts left)")
                else:
                    print(f"📈 Too low! The number was {secret_number}")
            else:
                remaining = max_attempts - attempts
                if remaining > 0:
                    print(f"📉 Too high! Try a lower number. ({remaining} attempts left)")
                else:
                    print(f"📉 Too high! The number was {secret_number}")
                    
        except ValueError:
            print("❌ Please enter a valid number!")
            continue
    
    # Game over message
    if not game_won:
        print(f"\\n😔 Game Over! The secret number was {secret_number}")
        print("Better luck next time!")
    
    # Game statistics
    print("\\n" + "=" * 40)
    print("📊 GAME STATISTICS:")
    print(f"🎯 Secret Number: {secret_number}")
    print(f"🎲 Total Attempts: {attempts}")
    print(f"🏆 Result: {'Victory!' if game_won else 'Try Again!'}")
    
    # Performance rating
    if game_won:
        if attempts == 1:
            print("🌟 Rating: INCREDIBLE! First try!")
        elif attempts <= 2:
            print("🌟 Rating: EXCELLENT! Very quick!")
        elif attempts <= 3:
            print("⭐ Rating: GOOD! Nice job!")
        else:
            print("👍 Rating: Not bad! Keep practicing!")
    
    print("\\nThanks for playing! 🎮")

# Enhanced version with difficulty levels
def advanced_guessing_game():
    print("🎯 Enhanced Number Guessing Game!")
    print("Choose difficulty level:")
    print("1. Easy (1-10, 5 attempts)")
    print("2. Medium (1-50, 7 attempts)") 
    print("3. Hard (1-100, 10 attempts)")
    
    while True:
        try:
            choice = int(input("\\nEnter your choice (1-3): "))
            if choice == 1:
                max_num, max_attempts = 10, 5
                break
            elif choice == 2:
                max_num, max_attempts = 50, 7
                break
            elif choice == 3:
                max_num, max_attempts = 100, 10
                break
            else:
                print("Please choose 1, 2, or 3!")
        except ValueError:
            print("Please enter a valid number!")
    
    secret_number = random.randint(1, max_num)
    attempts = 0
    guesses = []
    
    print(f"\\n🎲 I'm thinking of a number between 1 and {max_num}")
    print(f"You have {max_attempts} attempts. Good luck!")
    
    while attempts < max_attempts:
        try:
            guess = int(input(f"\\nAttempt {attempts + 1}/{max_attempts}: "))
            attempts += 1
            
            if guess < 1 or guess > max_num:
                print(f"⚠️  Please enter a number between 1 and {max_num}!")
                continue
                
            guesses.append(guess)
            
            if guess == secret_number:
                print(f"🎉 WINNER! You found {secret_number}!")
                break
            elif guess < secret_number:
                print(f"📈 Higher! ({max_attempts - attempts} left)")
            else:
                print(f"📉 Lower! ({max_attempts - attempts} left)")
                
            # Show guess history
            if len(guesses) > 1:
                print(f"Your guesses so far: {guesses}")
                
        except ValueError:
            print("Please enter a valid number!")
            continue
    else:
        print(f"\\n💔 Out of attempts! The number was {secret_number}")
        
    print(f"\\nGuess history: {guesses}")

# Run the basic game
print("=== BASIC VERSION ===")
guessing_game()

print("\\n" + "="*50)
print("=== ADVANCED VERSION ===")
# Uncomment to try advanced version:
# advanced_guessing_game()`,
    challengeExtensions: [
      {
        ht: "Ajoute nivo difikilte yo (Fasil: 1-10, Difisil: 1-100)",
        fr: "Ajoutez des niveaux de difficulté (Facile: 1-10, Difficile: 1-100)",
        en: "Add difficulty levels (Easy: 1-10, Hard: 1-100)"
      },
      {
        ht: "Montre tout bagay itilizatè a devine yo",
        fr: "Affichez l'historique de toutes les suppositions de l'utilisateur",
        en: "Show history of all user guesses"
      },
      {
        ht: "Ajoute yon sistèm pwen ki konsèlman poukisa yo bon ak vit yo",
        fr: "Ajoutez un système de points basé sur la précision et la vitesse",
        en: "Add a scoring system based on accuracy and speed"
      },
      {
        ht: "Kite jwè a chwazi kapasite minimum ak maksimòm yo",
        fr: "Permettez au joueur de choisir les plages min/max personnalisées",
        en: "Allow player to choose custom min/max ranges"
      },
      {
        ht: "Ajoute yon fonksyon 'Jwe ankò' ak estatistik jwèt yo",
        fr: "Ajoutez une fonction 'Jouer à nouveau' avec des statistiques de jeu",
        en: "Add 'Play Again' feature with game statistics"
      }
    ]
  }
};