// Python Midterm Exam - Comprehensive Assessment
export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'code';
  title: {
    ht: string;
    fr: string;
    en: string;
  };
  question: {
    ht: string;
    fr: string;
    en: string;
  };
  points: number;
  // For multiple choice questions
  options?: Array<{
    ht: string;
    fr: string;
    en: string;
  }>;
  correctAnswer?: number;
  explanation?: {
    ht: string;
    fr: string;
    en: string;
  };
  // For code questions
  starterCode?: string;
  expectedOutput?: string;
  testCases?: Array<{
    input?: string;
    expectedOutput: string;
    description: {
      ht: string;
      fr: string;
      en: string;
    };
  }>;
  hints?: {
    ht: string[];
    fr: string[];
    en: string[];
  };
}

export const pythonMidtermExam = {
  examId: 'python-midterm-2024',
  title: {
    ht: "Egzamen Midterm Python",
    fr: "Examen de Mi-Session Python",
    en: "Python Midterm Exam"
  },
  description: {
    ht: "Egzamen konplè ki kouvri tout konsèp yo nan Python yo nou aprann nan premye 7 semèn yo.",
    fr: "Examen complet couvrant tous les concepts Python appris dans les 7 premières semaines.",
    en: "Comprehensive exam covering all Python concepts learned in the first 7 weeks."
  },
  duration: 60, // minutes
  totalPoints: 100,
  passingScore: 70,
  instructions: {
    ht: [
      "Ou gen 1 è pou fini egzamen an",
      "Gen 20 kesyon multiple choice (3 pwen chak) ak 10 kesyon kod (4 pwen chak)",
      "Pou kesyon kod yo, ekri kòd ou a nan editè a ak teste li",
      "Ou ka itilize 'Run' pou teste kòd ou a anvan ou soumèt li",
      "Yon fwa ou kòmanse, ou pa ka rete egzamen an",
      "Bon chans!"
    ],
    fr: [
      "Vous avez 1 heure pour terminer l'examen",
      "Il y a 20 questions à choix multiple (3 points chacune) et 10 questions de code (4 points chacune)",
      "Pour les questions de code, écrivez votre code dans l'éditeur et testez-le",
      "Vous pouvez utiliser 'Run' pour tester votre code avant de le soumettre",
      "Une fois commencé, vous ne pouvez pas arrêter l'examen",
      "Bonne chance!"
    ],
    en: [
      "You have 1 hour to complete the exam",
      "There are 20 multiple choice questions (3 points each) and 10 code questions (4 points each)",
      "For code questions, write your code in the editor and test it",
      "You can use 'Run' to test your code before submitting",
      "Once started, you cannot pause the exam",
      "Good luck!"
    ]
  },
  questions: [
    // MULTIPLE CHOICE QUESTIONS (20 questions, 3 points each = 60 points)
    {
      id: "mc-001",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 1: Fonksyon print()",
        fr: "Question 1: Fonction print()",
        en: "Question 1: print() Function"
      },
      question: {
        ht: "Ki fonksyon nou itilize pou montre tèks sou ekran an nan Python?",
        fr: "Quelle fonction utilise-t-on pour afficher du texte à l'écran en Python ?",
        en: "Which function is used to display text on the screen in Python?"
      },
      points: 3,
      options: [
        { ht: "show()", fr: "show()", en: "show()" },
        { ht: "print()", fr: "print()", en: "print()" },
        { ht: "display()", fr: "display()", en: "display()" },
        { ht: "output()", fr: "output()", en: "output()" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "print() se fonksyon estanda nan Python pou montre output sou ekran an.",
        fr: "print() est la fonction standard en Python pour afficher la sortie à l'écran.",
        en: "print() is the standard function in Python for displaying output to the screen."
      }
    },
    {
      id: "mc-002",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 2: Data Types",
        fr: "Question 2: Types de Données",
        en: "Question 2: Data Types"
      },
      question: {
        ht: "Ki tip done 'True' ak 'False' yo ye nan Python?",
        fr: "Quel type de données sont 'True' et 'False' en Python ?",
        en: "What data type are 'True' and 'False' in Python?"
      },
      points: 3,
      options: [
        { ht: "string", fr: "string", en: "string" },
        { ht: "integer", fr: "integer", en: "integer" },
        { ht: "boolean", fr: "boolean", en: "boolean" },
        { ht: "float", fr: "float", en: "float" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "True ak False yo se boolean values nan Python, yo itilize pou operasyon logik yo.",
        fr: "True et False sont des valeurs booléennes en Python, utilisées pour les opérations logiques.",
        en: "True and False are boolean values in Python, used for logical operations."
      }
    },
    {
      id: "mc-003",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 3: Variables",
        fr: "Question 3: Variables",
        en: "Question 3: Variables"
      },
      question: {
        ht: "Ki règ ki kòrèk pou non varyab nan Python?",
        fr: "Quelle règle est correcte pour les noms de variables en Python ?",
        en: "Which rule is correct for variable names in Python?"
      },
      points: 3,
      options: [
        { ht: "Ka kòmanse ak yon nimewo", fr: "Peut commencer par un nombre", en: "Can start with a number" },
        { ht: "Ka gen espas nan mitan", fr: "Peut contenir des espaces", en: "Can contain spaces" },
        { ht: "Dwe kòmanse ak yon lèt oswa _", fr: "Doit commencer par une lettre ou _", en: "Must start with a letter or _" },
        { ht: "Ka itilize mo kle Python yo", fr: "Peut utiliser des mots-clés Python", en: "Can use Python keywords" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "Non varyab nan Python dwe kòmanse ak yon lèt (a-z, A-Z) oswa underscore (_), ak ka gen lèt, nimewo, ak underscore yo.",
        fr: "Les noms de variables en Python doivent commencer par une lettre (a-z, A-Z) ou un underscore (_), et peuvent contenir des lettres, nombres, et underscores.",
        en: "Variable names in Python must start with a letter (a-z, A-Z) or underscore (_), and can contain letters, numbers, and underscores."
      }
    },
    {
      id: "mc-004",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 4: If Statements",
        fr: "Question 4: Instructions If",
        en: "Question 4: If Statements"
      },
      question: {
        ht: "Ki kondisyon nan ap bay 'Yes' nan kòd sa a?\\nage = 25\\nif age >= 18:\\n    print('Yes')\\nelse:\\n    print('No')",
        fr: "Quelle condition donnera 'Yes' dans ce code ?\\nage = 25\\nif age >= 18:\\n    print('Yes')\\nelse:\\n    print('No')",
        en: "What condition will output 'Yes' in this code?\\nage = 25\\nif age >= 18:\\n    print('Yes')\\nelse:\\n    print('No')"
      },
      points: 3,
      options: [
        { ht: "age pi piti pase 18", fr: "age plus petit que 18", en: "age less than 18" },
        { ht: "age pi gwo pase oswa egal ak 18", fr: "age plus grand ou égal à 18", en: "age greater than or equal to 18" },
        { ht: "age egal ak 18 sèlman", fr: "age égal à 18 seulement", en: "age equal to 18 only" },
        { ht: "age diferan ak 18", fr: "age différent de 18", en: "age different from 18" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Depi age (25) >= 18 se true, kondisyon an satisfied ak li enprime 'Yes'.",
        fr: "Puisque age (25) >= 18 est vrai, la condition est satisfaite et il imprime 'Yes'.",
        en: "Since age (25) >= 18 is true, the condition is satisfied and it prints 'Yes'."
      }
    },
    {
      id: "mc-005",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 5: Loops",
        fr: "Question 5: Boucles",
        en: "Question 5: Loops"
      },
      question: {
        ht: "Konbyen fwa boucle sa a ap egzekite?\\nfor i in range(5):\\n    print(i)",
        fr: "Combien de fois cette boucle s'exécute-t-elle ?\\nfor i in range(5):\\n    print(i)",
        en: "How many times does this loop execute?\\nfor i in range(5):\\n    print(i)"
      },
      points: 3,
      options: [
        { ht: "4 fwa", fr: "4 fois", en: "4 times" },
        { ht: "5 fwa", fr: "5 fois", en: "5 times" },
        { ht: "6 fwa", fr: "6 fois", en: "6 times" },
        { ht: "Infinitman", fr: "Infiniment", en: "Infinitely" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "range(5) pwodwi nimewo yo 0, 1, 2, 3, 4 - sa fè 5 nimewo ak 5 iterasyon.",
        fr: "range(5) produit les nombres 0, 1, 2, 3, 4 - soit 5 nombres et 5 itérations.",
        en: "range(5) produces the numbers 0, 1, 2, 3, 4 - that's 5 numbers and 5 iterations."
      }
    },
    {
      id: "mc-006",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 6: Functions",
        fr: "Question 6: Fonctions",
        en: "Question 6: Functions"
      },
      question: {
        ht: "Ki mo kle nou itilize pou defini yon fonksyon nan Python?",
        fr: "Quel mot-clé utilise-t-on pour définir une fonction en Python ?",
        en: "Which keyword is used to define a function in Python?"
      },
      points: 3,
      options: [
        { ht: "function", fr: "function", en: "function" },
        { ht: "def", fr: "def", en: "def" },
        { ht: "define", fr: "define", en: "define" },
        { ht: "create", fr: "create", en: "create" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "'def' se mo kle pou defini fonksyon yo nan Python, suivi pa non fonksyon an ak parantèz yo.",
        fr: "'def' est le mot-clé pour définir les fonctions en Python, suivi du nom de fonction et des parenthèses.",
        en: "'def' is the keyword for defining functions in Python, followed by the function name and parentheses."
      }
    },
    {
      id: "mc-007",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 7: Lists",
        fr: "Question 7: Listes",
        en: "Question 7: Lists"
      },
      question: {
        ht: "Ki sa ki kreye yon lis vid nan Python?",
        fr: "Qu'est-ce qui crée une liste vide en Python ?",
        en: "What creates an empty list in Python?"
      },
      points: 3,
      options: [
        { ht: "my_list = {}", fr: "my_list = {}", en: "my_list = {}" },
        { ht: "my_list = []", fr: "my_list = []", en: "my_list = []" },
        { ht: "my_list = ()", fr: "my_list = ()", en: "my_list = ()" },
        { ht: "my_list = \"\"", fr: "my_list = \"\"", en: "my_list = \"\"" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "[] kreye yon lis vid. {} se pou dictionaries, () se pou tuples, ak \"\" se pou strings.",
        fr: "[] crée une liste vide. {} est pour les dictionnaires, () pour les tuples, et \"\" pour les chaînes.",
        en: "[] creates an empty list. {} is for dictionaries, () for tuples, and \"\" for strings."
      }
    },
    {
      id: "mc-008",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 8: String Methods",
        fr: "Question 8: Méthodes de Chaînes",
        en: "Question 8: String Methods"
      },
      question: {
        ht: "Ki sa 'hello world'.title() ap retounen?",
        fr: "Que retourne 'hello world'.title() ?",
        en: "What does 'hello world'.title() return?"
      },
      points: 3,
      options: [
        { ht: "hello world", fr: "hello world", en: "hello world" },
        { ht: "HELLO WORLD", fr: "HELLO WORLD", en: "HELLO WORLD" },
        { ht: "Hello World", fr: "Hello World", en: "Hello World" },
        { ht: "Hello world", fr: "Hello world", en: "Hello world" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: ".title() mete premye lèt nan chak mo nan kapital ak rete yo nan miniskil.",
        fr: ".title() met la première lettre de chaque mot en majuscule et le reste en minuscules.",
        en: ".title() capitalizes the first letter of each word and makes the rest lowercase."
      }
    },
    {
      id: "mc-009",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 9: Comparison Operators",
        fr: "Question 9: Opérateurs de Comparaison",
        en: "Question 9: Comparison Operators"
      },
      question: {
        ht: "Ki valè 5 == 5 ap bay?",
        fr: "Quelle valeur donne 5 == 5 ?",
        en: "What value does 5 == 5 give?"
      },
      points: 3,
      options: [
        { ht: "5", fr: "5", en: "5" },
        { ht: "True", fr: "True", en: "True" },
        { ht: "False", fr: "False", en: "False" },
        { ht: "None", fr: "None", en: "None" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "== se operatè konparezyon ki tcheke si de valè yo egal. 5 == 5 se True.",
        fr: "== est l'opérateur de comparaison qui vérifie si deux valeurs sont égales. 5 == 5 est True.",
        en: "== is the comparison operator that checks if two values are equal. 5 == 5 is True."
      }
    },
    {
      id: "mc-010",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 10: While Loops",
        fr: "Question 10: Boucles While",
        en: "Question 10: While Loops"
      },
      question: {
        ht: "Ki diferans ki gen ant 'for' ak 'while' loops?",
        fr: "Quelle différence y a-t-il entre les boucles 'for' et 'while' ?",
        en: "What's the difference between 'for' and 'while' loops?"
      },
      points: 3,
      options: [
        { ht: "Pa gen diferans", fr: "Pas de différence", en: "No difference" },
        { ht: "'for' itilize ak yon koleksyon, 'while' ak yon kondisyon", fr: "'for' s'utilise avec une collection, 'while' avec une condition", en: "'for' is used with a collection, 'while' with a condition" },
        { ht: "'while' pi vit pase 'for'", fr: "'while' est plus rapide que 'for'", en: "'while' is faster than 'for'" },
        { ht: "'for' ka sèlman itilize ak nimewo", fr: "'for' ne peut s'utiliser qu'avec des nombres", en: "'for' can only be used with numbers" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "'for' loops itilize pou repete sou yon koleksyon (lis, string, elatriye), pandan 'while' loops kontinye jiskaske yon kondisyon vin false.",
        fr: "Les boucles 'for' servent à itérer sur une collection (liste, chaîne, etc.), tandis que les boucles 'while' continuent jusqu'à ce qu'une condition devienne fausse.",
        en: "'for' loops are used to iterate over a collection (list, string, etc.), while 'while' loops continue until a condition becomes false."
      }
    },
    {
      id: "mc-011",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 11: List Methods",
        fr: "Question 11: Méthodes de Listes",
        en: "Question 11: List Methods"
      },
      question: {
        ht: "Ki metòd nou itilize pou ajoute yon nouvo eleman nan fen yon lis?",
        fr: "Quelle méthode utilise-t-on pour ajouter un nouvel élément à la fin d'une liste ?",
        en: "Which method is used to add a new element to the end of a list?"
      },
      points: 3,
      options: [
        { ht: "add()", fr: "add()", en: "add()" },
        { ht: "append()", fr: "append()", en: "append()" },
        { ht: "insert()", fr: "insert()", en: "insert()" },
        { ht: "push()", fr: "push()", en: "push()" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "append() ajoute yon eleman nan fen lis la. insert() mete li nan yon pozisyon espesifik.",
        fr: "append() ajoute un élément à la fin de la liste. insert() le place à une position spécifique.",
        en: "append() adds an element to the end of the list. insert() places it at a specific position."
      }
    },
    {
      id: "mc-012",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 12: Variable Scope",
        fr: "Question 12: Portée des Variables",
        en: "Question 12: Variable Scope"
      },
      question: {
        ht: "Sa ki pase ak yon varyab lokal lè yon fonksyon fini?",
        fr: "Que se passe-t-il avec une variable locale quand une fonction se termine ?",
        en: "What happens to a local variable when a function ends?"
      },
      points: 3,
      options: [
        { ht: "Li vin global", fr: "Elle devient globale", en: "It becomes global" },
        { ht: "Li disparèt", fr: "Elle disparaît", en: "It disappears" },
        { ht: "Li rete nan memwa", fr: "Elle reste en mémoire", en: "It stays in memory" },
        { ht: "Li chanje nan 0", fr: "Elle change en 0", en: "It changes to 0" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Varyab lokal yo disparèt lè fonksyon an fini egzekite. Yo pa ka aksè nan deyò fonksyon an.",
        fr: "Les variables locales disparaissent quand la fonction finit de s'exécuter. Elles ne peuvent pas être accédées depuis l'extérieur de la fonction.",
        en: "Local variables disappear when the function finishes executing. They cannot be accessed from outside the function."
      }
    },
    {
      id: "mc-013",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 13: Return Values",
        fr: "Question 13: Valeurs de Retour",
        en: "Question 13: Return Values"
      },
      question: {
        ht: "Sa yon fonksyon retounen si li pa gen statement 'return'?",
        fr: "Que retourne une fonction si elle n'a pas d'instruction 'return' ?",
        en: "What does a function return if it has no 'return' statement?"
      },
      points: 3,
      options: [
        { ht: "0", fr: "0", en: "0" },
        { ht: "None", fr: "None", en: "None" },
        { ht: "False", fr: "False", en: "False" },
        { ht: "Yon erè", fr: "Une erreur", en: "An error" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fonksyon yo ki pa gen return statement retounen None otomatikman nan Python.",
        fr: "Les fonctions sans instruction return retournent None automatiquement en Python.",
        en: "Functions without a return statement automatically return None in Python."
      }
    },
    {
      id: "mc-014",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 14: List Indexing",
        fr: "Question 14: Indexation des Listes",
        en: "Question 14: List Indexing"
      },
      question: {
        ht: "Nan lis [10, 20, 30, 40], ki sa my_list[-1] ap retounen?",
        fr: "Dans la liste [10, 20, 30, 40], que retourne my_list[-1] ?",
        en: "In the list [10, 20, 30, 40], what does my_list[-1] return?"
      },
      points: 3,
      options: [
        { ht: "10", fr: "10", en: "10" },
        { ht: "40", fr: "40", en: "40" },
        { ht: "30", fr: "30", en: "30" },
        { ht: "Yon erè", fr: "Une erreur", en: "An error" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Endeks negatif yo kòmanse nan fen lis la. -1 se dènye eleman an, -2 se devan dènye a, elatriye.",
        fr: "Les indices négatifs commencent à la fin de la liste. -1 est le dernier élément, -2 l'avant-dernier, etc.",
        en: "Negative indices start from the end of the list. -1 is the last element, -2 is second to last, etc."
      }
    },
    {
      id: "mc-015",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 15: String Concatenation",
        fr: "Question 15: Concaténation de Chaînes",
        en: "Question 15: String Concatenation"
      },
      question: {
        ht: "Ki rezilta 'Hello' + ' ' + 'World' ap bay?",
        fr: "Quel résultat donne 'Hello' + ' ' + 'World' ?",
        en: "What result does 'Hello' + ' ' + 'World' give?"
      },
      points: 3,
      options: [
        { ht: "HelloWorld", fr: "HelloWorld", en: "HelloWorld" },
        { ht: "Hello World", fr: "Hello World", en: "Hello World" },
        { ht: "Hello + World", fr: "Hello + World", en: "Hello + World" },
        { ht: "Yon erè", fr: "Une erreur", en: "An error" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Operatè + ki itilize ak strings yo konsène yo ansanm. 'Hello' + ' ' + 'World' bay 'Hello World'.",
        fr: "L'opérateur + utilisé avec des chaînes les concatène ensemble. 'Hello' + ' ' + 'World' donne 'Hello World'.",
        en: "The + operator used with strings concatenates them together. 'Hello' + ' ' + 'World' gives 'Hello World'."
      }
    },
    {
      id: "mc-016",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 16: Boolean Logic",
        fr: "Question 16: Logique Booléenne",
        en: "Question 16: Boolean Logic"
      },
      question: {
        ht: "Ki valè True and False ap bay?",
        fr: "Quelle valeur donne True and False ?",
        en: "What value does True and False give?"
      },
      points: 3,
      options: [
        { ht: "True", fr: "True", en: "True" },
        { ht: "False", fr: "False", en: "False" },
        { ht: "None", fr: "None", en: "None" },
        { ht: "1", fr: "1", en: "1" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Operatè 'and' sèlman retounen True si tou de operand yo ye True. Si youn False, rezilta a se False.",
        fr: "L'opérateur 'and' ne retourne True que si les deux opérandes sont True. Si l'un est False, le résultat est False.",
        en: "The 'and' operator only returns True if both operands are True. If either is False, the result is False."
      }
    },
    {
      id: "mc-017",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 17: Input Function",
        fr: "Question 17: Fonction Input",
        en: "Question 17: Input Function"
      },
      question: {
        ht: "Ki tip done fonksyon input() toujou retounen?",
        fr: "Quel type de données la fonction input() retourne-t-elle toujours ?",
        en: "What data type does the input() function always return?"
      },
      points: 3,
      options: [
        { ht: "integer", fr: "integer", en: "integer" },
        { ht: "float", fr: "float", en: "float" },
        { ht: "string", fr: "string", en: "string" },
        { ht: "boolean", fr: "boolean", en: "boolean" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "input() toujou retounen yon string, menm si itilizatè a tape yon nimewo. Ou dwe konvèti li si ou vle yon tip diferan.",
        fr: "input() retourne toujours une chaîne, même si l'utilisateur tape un nombre. Vous devez la convertir si vous voulez un type différent.",
        en: "input() always returns a string, even if the user types a number. You must convert it if you want a different type."
      }
    },
    {
      id: "mc-018",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 18: List Length",
        fr: "Question 18: Longueur de Liste",
        en: "Question 18: List Length"
      },
      question: {
        ht: "Ki fonksyon nou itilize pou jwenn kantite eleman nan yon lis?",
        fr: "Quelle fonction utilise-t-on pour obtenir le nombre d'éléments dans une liste ?",
        en: "Which function is used to get the number of elements in a list?"
      },
      points: 3,
      options: [
        { ht: "count()", fr: "count()", en: "count()" },
        { ht: "len()", fr: "len()", en: "len()" },
        { ht: "size()", fr: "size()", en: "size()" },
        { ht: "length()", fr: "length()", en: "length()" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "len() bay kantite eleman nan yon koleksyon tankou lis, string, oswa tuple.",
        fr: "len() donne le nombre d'éléments dans une collection comme une liste, chaîne, ou tuple.",
        en: "len() gives the number of elements in a collection like a list, string, or tuple."
      }
    },
    {
      id: "mc-019",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 19: Elif Statements",
        fr: "Question 19: Instructions Elif",
        en: "Question 19: Elif Statements"
      },
      question: {
        ht: "Poukisa nou itilize 'elif' nan Python?",
        fr: "Pourquoi utilise-t-on 'elif' en Python ?",
        en: "Why do we use 'elif' in Python?"
      },
      points: 3,
      options: [
        { ht: "Pou teste plizyè kondisyon nan yon lòd", fr: "Pour tester plusieurs conditions dans un ordre", en: "To test multiple conditions in order" },
        { ht: "Pou repete kòd", fr: "Pour répéter du code", en: "To repeat code" },
        { ht: "Pou defini fonksyon", fr: "Pour définir des fonctions", en: "To define functions" },
        { ht: "Pou kreye lis", fr: "Pour créer des listes", en: "To create lists" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "'elif' (else if) pèmèt nou teste plizyè kondisyon nan yon lòd, ak sèlman youn ki premye an ki true ki ap egzekite.",
        fr: "'elif' (else if) permet de tester plusieurs conditions dans un ordre, et seule la première qui est vraie s'exécute.",
        en: "'elif' (else if) allows testing multiple conditions in order, and only the first one that is true executes."
      }
    },
    {
      id: "mc-020",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 20: Comments",
        fr: "Question 20: Commentaires",
        en: "Question 20: Comments"
      },
      question: {
        ht: "Ki karaktè nou itilize pou kòmanse yon kòmantè nan Python?",
        fr: "Quel caractère utilise-t-on pour commencer un commentaire en Python ?",
        en: "Which character is used to start a comment in Python?"
      },
      points: 3,
      options: [
        { ht: "//", fr: "//", en: "//" },
        { ht: "#", fr: "#", en: "#" },
        { ht: "/*", fr: "/*", en: "/*" },
        { ht: "--", fr: "--", en: "--" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "# se karaktè pou kòmantè yo nan Python. Tout bagay ki vin apre # sou yon liy pa egzekite.",
        fr: "# est le caractère pour les commentaires en Python. Tout ce qui vient après # sur une ligne ne s'exécute pas.",
        en: "# is the character for comments in Python. Everything that comes after # on a line doesn't execute."
      }
    },

    // CODE QUESTIONS (10 questions, 4 points each = 40 points)
    {
      id: "code-001",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 1: Fonksyon Addition",
        fr: "Question Code 1: Fonction Addition",
        en: "Code Question 1: Addition Function"
      },
      question: {
        ht: "Ekri yon fonksyon ki rele 'add_numbers' ki pran de paramèt (a ak b) ak retounen yo ki ajoute yo.",
        fr: "Écrivez une fonction appelée 'add_numbers' qui prend deux paramètres (a et b) et retourne leur somme.",
        en: "Write a function called 'add_numbers' that takes two parameters (a and b) and returns their sum."
      },
      points: 4,
      starterCode: `# Write your function here
def add_numbers(a, b):
    # TODO: Return the sum of a and b
    pass

# Test your function
result = add_numbers(5, 3)
print(result)`,
      expectedOutput: "8",
      testCases: [
        {
          input: "add_numbers(5, 3)",
          expectedOutput: "8",
          description: {
            ht: "5 + 3 dwe bay 8",
            fr: "5 + 3 doit donner 8",
            en: "5 + 3 should give 8"
          }
        },
        {
          input: "add_numbers(10, -2)",
          expectedOutput: "8",
          description: {
            ht: "10 + (-2) dwe bay 8",
            fr: "10 + (-2) doit donner 8",
            en: "10 + (-2) should give 8"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize operatè + pou ajoute de nimewo yo",
          "Pa bliye itilize 'return' pou voye rezilta a"
        ],
        fr: [
          "Utilisez l'opérateur + pour additionner les deux nombres",
          "N'oubliez pas d'utiliser 'return' pour renvoyer le résultat"
        ],
        en: [
          "Use the + operator to add the two numbers",
          "Don't forget to use 'return' to send back the result"
        ]
      }
    },
    {
      id: "code-002",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 2: List Operations",
        fr: "Question Code 2: Opérations sur Listes",
        en: "Code Question 2: List Operations"
      },
      question: {
        ht: "Kreye yon lis ki gen nimewo 1, 2, 3, 4, 5. Ajoute 6 nan fen an ak enprime kantite total eleman yo.",
        fr: "Créez une liste contenant les nombres 1, 2, 3, 4, 5. Ajoutez 6 à la fin et imprimez le nombre total d'éléments.",
        en: "Create a list containing the numbers 1, 2, 3, 4, 5. Add 6 to the end and print the total number of elements."
      },
      points: 4,
      starterCode: `# Create your list here
numbers = []  # TODO: Add numbers 1, 2, 3, 4, 5

# Add 6 to the end
# TODO: Use append method

# Print the total count
# TODO: Use len() function
print()  # Replace with the correct answer`,
      expectedOutput: "6",
      testCases: [
        {
          expectedOutput: "6",
          description: {
            ht: "Lis la dwe gen 6 eleman nan total",
            fr: "La liste doit avoir 6 éléments au total",
            en: "The list should have 6 elements in total"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize [1, 2, 3, 4, 5] pou kreye lis la",
          "Itilize .append(6) pou ajoute 6",
          "Itilize len() pou jwenn kantite a"
        ],
        fr: [
          "Utilisez [1, 2, 3, 4, 5] pour créer la liste",
          "Utilisez .append(6) pour ajouter 6",
          "Utilisez len() pour obtenir le nombre"
        ],
        en: [
          "Use [1, 2, 3, 4, 5] to create the list",
          "Use .append(6) to add 6",
          "Use len() to get the count"
        ]
      }
    },
    {
      id: "code-003",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 3: Kondisyonèl",
        fr: "Question Code 3: Conditionnel",
        en: "Code Question 3: Conditional"
      },
      question: {
        ht: "Ekri kòd ki tcheke si yon nimewo pi gwo pase 10. Si wi, enprime 'Big', sinon enprime 'Small'.",
        fr: "Écrivez du code qui vérifie si un nombre est plus grand que 10. Si oui, imprimez 'Big', sinon imprimez 'Small'.",
        en: "Write code that checks if a number is greater than 10. If yes, print 'Big', otherwise print 'Small'."
      },
      points: 4,
      starterCode: `# Set the number to test
number = 15

# Write your if-else statement here
# TODO: Check if number > 10
# Print 'Big' or 'Small' accordingly`,
      expectedOutput: "Big",
      testCases: [
        {
          input: "number = 15",
          expectedOutput: "Big",
          description: {
            ht: "15 pi gwo pase 10, kidonk 'Big'",
            fr: "15 est plus grand que 10, donc 'Big'",
            en: "15 is greater than 10, so 'Big'"
          }
        },
        {
          input: "number = 5",
          expectedOutput: "Small",
          description: {
            ht: "5 pa pi gwo pase 10, kidonk 'Small'",
            fr: "5 n'est pas plus grand que 10, donc 'Small'",
            en: "5 is not greater than 10, so 'Small'"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize 'if number > 10:'",
          "Pa bliye colon (:) ak indentation",
          "Itilize 'else:' pou ka alternativ la"
        ],
        fr: [
          "Utilisez 'if number > 10:'",
          "N'oubliez pas les deux-points (:) et l'indentation",
          "Utilisez 'else:' pour le cas alternatif"
        ],
        en: [
          "Use 'if number > 10:'",
          "Don't forget the colon (:) and indentation",
          "Use 'else:' for the alternative case"
        ]
      }
    },
    {
      id: "code-004",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 4: Loop ak Sum",
        fr: "Question Code 4: Boucle et Somme",
        en: "Code Question 4: Loop and Sum"
      },
      question: {
        ht: "Itilize yon loop pou kalkile ak enprime total nimewo yo nan 1 jiska 5 (1+2+3+4+5).",
        fr: "Utilisez une boucle pour calculer et imprimer la somme des nombres de 1 à 5 (1+2+3+4+5).",
        en: "Use a loop to calculate and print the sum of numbers from 1 to 5 (1+2+3+4+5)."
      },
      points: 4,
      starterCode: `# Initialize sum
total = 0

# Write your loop here
# TODO: Use for loop with range(1, 6)
# Add each number to total

# Print the result
print(total)`,
      expectedOutput: "15",
      testCases: [
        {
          expectedOutput: "15",
          description: {
            ht: "1+2+3+4+5 = 15",
            fr: "1+2+3+4+5 = 15",
            en: "1+2+3+4+5 = 15"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize 'for i in range(1, 6):'",
          "Nan loop la, ajoute 'total += i'",
          "range(1, 6) bay 1, 2, 3, 4, 5"
        ],
        fr: [
          "Utilisez 'for i in range(1, 6):'",
          "Dans la boucle, ajoutez 'total += i'",
          "range(1, 6) donne 1, 2, 3, 4, 5"
        ],
        en: [
          "Use 'for i in range(1, 6):'",
          "In the loop, add 'total += i'",
          "range(1, 6) gives 1, 2, 3, 4, 5"
        ]
      }
    },
    {
      id: "code-005",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 5: String Manipulation",
        fr: "Question Code 5: Manipulation de Chaînes",
        en: "Code Question 5: String Manipulation"
      },
      question: {
        ht: "Pran mo 'python' ak enprime li nan tout lèt majiskil yo ak yon eksklamasyon nan fen an.",
        fr: "Prenez le mot 'python' et imprimez-le en toutes lettres majuscules avec un point d'exclamation à la fin.",
        en: "Take the word 'python' and print it in all uppercase letters with an exclamation mark at the end."
      },
      points: 4,
      starterCode: `# Given word
word = "python"

# Transform and print
# TODO: Convert to uppercase and add "!"
result = ""  # Complete this line
print(result)`,
      expectedOutput: "PYTHON!",
      testCases: [
        {
          expectedOutput: "PYTHON!",
          description: {
            ht: "Dwe montre 'PYTHON!' nan tout majiskil ak yon !",
            fr: "Doit afficher 'PYTHON!' en toutes majuscules avec un !",
            en: "Should display 'PYTHON!' in all uppercase with a !"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize .upper() pou chanje nan majiskil",
          "Itilize + pou ajoute '!'",
          "result = word.upper() + '!'"
        ],
        fr: [
          "Utilisez .upper() pour changer en majuscules",
          "Utilisez + pour ajouter '!'",
          "result = word.upper() + '!'"
        ],
        en: [
          "Use .upper() to change to uppercase",
          "Use + to add '!'",
          "result = word.upper() + '!'"
        ]
      }
    },
    {
      id: "code-006",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 6: Fonksyon ak Paramèt Default",
        fr: "Question Code 6: Fonction avec Paramètre par Défaut",
        en: "Code Question 6: Function with Default Parameter"
      },
      question: {
        ht: "Kreye yon fonksyon 'greet' ki pran yon non ak yon salitasyon opsyonèl (default 'Hello'). Li dwe retounen salitasyon an ak non an.",
        fr: "Créez une fonction 'greet' qui prend un nom et une salutation optionnelle (par défaut 'Hello'). Elle doit retourner la salutation et le nom.",
        en: "Create a function 'greet' that takes a name and an optional greeting (default 'Hello'). It should return the greeting and the name."
      },
      points: 4,
      starterCode: `# Define your function here
def greet(name, greeting="Hello"):
    # TODO: Return greeting + ", " + name + "!"
    pass

# Test the function
result1 = greet("Alice")
result2 = greet("Bob", "Hi")
print(result1)
print(result2)`,
      expectedOutput: "Hello, Alice!\nHi, Bob!",
      testCases: [
        {
          input: 'greet("Alice")',
          expectedOutput: "Hello, Alice!",
          description: {
            ht: "Ak default greeting 'Hello'",
            fr: "Avec la salutation par défaut 'Hello'",
            en: "With default greeting 'Hello'"
          }
        },
        {
          input: 'greet("Bob", "Hi")',
          expectedOutput: "Hi, Bob!",
          description: {
            ht: "Ak greeting kistom 'Hi'",
            fr: "Avec une salutation personnalisée 'Hi'",
            en: "With custom greeting 'Hi'"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize concatenation ak +",
          "Format la: greeting + ', ' + name + '!'",
          "Pa bliye 'return'"
        ],
        fr: [
          "Utilisez la concaténation avec +",
          "Format: greeting + ', ' + name + '!'",
          "N'oubliez pas 'return'"
        ],
        en: [
          "Use concatenation with +",
          "Format: greeting + ', ' + name + '!'",
          "Don't forget 'return'"
        ]
      }
    },
    {
      id: "code-007",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 7: List Filtering",
        fr: "Question Code 7: Filtrage de Liste",
        en: "Code Question 7: List Filtering"
      },
      question: {
        ht: "Nan lis [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], kreye yon nouvo lis ki sèlman gen nimewo yo ki gen pè (even).",
        fr: "À partir de la liste [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], créez une nouvelle liste qui ne contient que les nombres pairs.",
        en: "From the list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], create a new list that only contains even numbers."
      },
      points: 4,
      starterCode: `# Given list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Create list of even numbers
even_numbers = []

# TODO: Use a loop to check each number
# If number % 2 == 0, it's even
# Add even numbers to even_numbers list

print(even_numbers)`,
      expectedOutput: "[2, 4, 6, 8, 10]",
      testCases: [
        {
          expectedOutput: "[2, 4, 6, 8, 10]",
          description: {
            ht: "Lis la dwe gen sèlman nimewo yo ki gen pè",
            fr: "La liste ne doit contenir que les nombres pairs",
            en: "The list should only contain even numbers"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize 'for num in numbers:'",
          "Tcheke 'if num % 2 == 0:'",
          "Itilize 'even_numbers.append(num)'"
        ],
        fr: [
          "Utilisez 'for num in numbers:'",
          "Vérifiez 'if num % 2 == 0:'",
          "Utilisez 'even_numbers.append(num)'"
        ],
        en: [
          "Use 'for num in numbers:'",
          "Check 'if num % 2 == 0:'",
          "Use 'even_numbers.append(num)'"
        ]
      }
    },
    {
      id: "code-008",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 8: While Loop",
        fr: "Question Code 8: Boucle While",
        en: "Code Question 8: While Loop"
      },
      question: {
        ht: "Itilize yon while loop pou enprime nimewo yo nan 1 jiska 5.",
        fr: "Utilisez une boucle while pour imprimer les nombres de 1 à 5.",
        en: "Use a while loop to print numbers from 1 to 5."
      },
      points: 4,
      starterCode: `# Initialize counter
i = 1

# TODO: Write while loop
# Continue while i <= 5
# Print i and increment i

`,
      expectedOutput: "1\n2\n3\n4\n5",
      testCases: [
        {
          expectedOutput: "1\n2\n3\n4\n5",
          description: {
            ht: "Dwe enprime 1, 2, 3, 4, 5 yo chak sou yon liy",
            fr: "Doit imprimer 1, 2, 3, 4, 5 chacun sur une ligne",
            en: "Should print 1, 2, 3, 4, 5 each on a line"
          }
        }
      ],
      hints: {
        ht: [
          "Itilize 'while i <= 5:'",
          "Nan loop la: print(i) ak i += 1",
          "Pa bliye inkremente i sinon loop la ap infinit"
        ],
        fr: [
          "Utilisez 'while i <= 5:'",
          "Dans la boucle: print(i) et i += 1",
          "N'oubliez pas d'incrémenter i sinon la boucle sera infinie"
        ],
        en: [
          "Use 'while i <= 5:'",
          "In the loop: print(i) and i += 1",
          "Don't forget to increment i or the loop will be infinite"
        ]
      }
    },
    {
      id: "code-009",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 9: Dictionary ak Loop",
        fr: "Question Code 9: Dictionnaire et Boucle",
        en: "Code Question 9: Dictionary and Loop"
      },
      question: {
        ht: "Kreye yon dictionary ak 3 moun ak laj yo. Itilize yon loop pou enprime chak moun ak laj li.",
        fr: "Créez un dictionnaire avec 3 personnes et leurs âges. Utilisez une boucle pour imprimer chaque personne et son âge.",
        en: "Create a dictionary with 3 people and their ages. Use a loop to print each person and their age."
      },
      points: 4,
      starterCode: `# Create dictionary
people = {
    # TODO: Add 3 people with their ages
    # Example: "Alice": 25
}

# TODO: Loop through dictionary
# Print in format: "Name is Age years old"

`,
      expectedOutput: "Alice is 25 years old\nBob is 30 years old\nCharlie is 35 years old",
      testCases: [
        {
          description: {
            ht: "Dwe enprime chak moun ak laj yo nan fòmat kòrèk la",
            fr: "Doit imprimer chaque personne avec son âge dans le bon format",
            en: "Should print each person with their age in the correct format"
          }
        }
      ],
      hints: {
        ht: [
          "Kreye dict ak: {'Alice': 25, 'Bob': 30, 'Charlie': 35}",
          "Itilize 'for name, age in people.items():'",
          "Enprime ak: f'{name} is {age} years old'"
        ],
        fr: [
          "Créez dict avec: {'Alice': 25, 'Bob': 30, 'Charlie': 35}",
          "Utilisez 'for name, age in people.items():'",
          "Imprimez avec: f'{name} is {age} years old'"
        ],
        en: [
          "Create dict with: {'Alice': 25, 'Bob': 30, 'Charlie': 35}",
          "Use 'for name, age in people.items():'",
          "Print with: f'{name} is {age} years old'"
        ]
      }
    },
    {
      id: "code-010",
      type: "code" as const,
      title: {
        ht: "Kesyon Kod 10: Fonksyon Konplèks",
        fr: "Question Code 10: Fonction Complexe",
        en: "Code Question 10: Complex Function"
      },
      question: {
        ht: "Ekri yon fonksyon 'calculate_grade' ki pran yon lis nòt yo ak retounen mwayèn an ak nòt lèt la (A: >=90, B: >=80, C: >=70, F: <70).",
        fr: "Écrivez une fonction 'calculate_grade' qui prend une liste de notes et retourne la moyenne et la note lettre (A: >=90, B: >=80, C: >=70, F: <70).",
        en: "Write a function 'calculate_grade' that takes a list of scores and returns the average and letter grade (A: >=90, B: >=80, C: >=70, F: <70)."
      },
      points: 4,
      starterCode: `def calculate_grade(scores):
    # TODO: Calculate average
    avg = 0
    
    # TODO: Determine letter grade
    letter = ""
    
    # TODO: Return both as a tuple
    return avg, letter

# Test the function
scores = [85, 92, 78, 96, 88]
average, grade = calculate_grade(scores)
print(f"Average: {average:.1f}")
print(f"Grade: {grade}")`,
      expectedOutput: "Average: 87.8\nGrade: B",
      testCases: [
        {
          input: "[85, 92, 78, 96, 88]",
          expectedOutput: "Average: 87.8\nGrade: B",
          description: {
            ht: "Mwayèn 87.8 dwe bay nòt B",
            fr: "Moyenne 87.8 doit donner note B",
            en: "Average 87.8 should give grade B"
          }
        }
      ],
      hints: {
        ht: [
          "Kalkile mwayèn ak: avg = sum(scores) / len(scores)",
          "Itilize if-elif-else pou nòt lèt la",
          "Retounen (avg, letter) kòm tuple"
        ],
        fr: [
          "Calculez moyenne avec: avg = sum(scores) / len(scores)",
          "Utilisez if-elif-else pour la note lettre",
          "Retournez (avg, letter) comme tuple"
        ],
        en: [
          "Calculate average with: avg = sum(scores) / len(scores)",
          "Use if-elif-else for letter grade",
          "Return (avg, letter) as tuple"
        ]
      }
    }
  ]
};