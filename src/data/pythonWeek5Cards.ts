// Python Week 5: Conditional Statements - Ultra-comprehensive Card-Based Lesson
// Teaching programs to make decisions with if/elif/else

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

export const pythonWeek5Lesson: PythonWeekLesson = {
  weekNumber: 5,
  title: {
    ht: "Deklarasyon Kondisyonèl - Pran Desizyon",
    fr: "Instructions Conditionnelles - Prendre des Décisions",
    en: "Conditional Statements - Making Decisions"
  },
  description: {
    ht: "Aprann kijan pou fè pwogram ou yo pran desizyon ak if, elif, ak else",
    fr: "Apprenez comment faire prendre des décisions à vos programmes avec if, elif, et else", 
    en: "Learn how to make your programs take decisions using if, elif, and else"
  },
  totalCards: 19,
  cards: [
    {
      id: "week5-intro",
      type: "intro",
      title: {
        ht: "🎯 Byenveni nan Semèn 5: Deklarasyon Kondisyonèl",
        fr: "🎯 Bienvenue à la Semaine 5: Instructions Conditionnelles",
        en: "🎯 Welcome to Week 5: Conditional Statements"
      },
      content: {
        ht: "Semèn sa a, nou pral aprann kijan pou fè pwogram nou yo pi entelijan lè yo ka pran desizyon yo.\n\nImajiez ou ka di pwogram ou: \"Si li gen plis pase 18 an, di li ka vote. Si pa, di li twò jèn.\" Se konsa deklarasyon kondisyonèl yo fonksyone!\n\nNou pral kouvri:\n• Kisa ki kondisyonèl yo ak poukisa yo enpòtan\n• Operatè konparezon: ==, !=, >, <, >=, <=\n• Operatè lojik: and, or, not\n• Stwikti if/elif/else\n• Konbine kondisyon yo\n• Pwojè Password Validator",
        fr: "Cette semaine, nous allons apprendre comment rendre nos programmes plus intelligents en leur permettant de prendre des décisions.\n\nImaginez que vous puissiez dire à votre programme : \"Si il a plus de 18 ans, dis qu'il peut voter. Sinon, dis qu'il est trop jeune.\" C'est ainsi que fonctionnent les instructions conditionnelles !\n\nNous couvrirons :\n• Ce que sont les conditionnelles et pourquoi elles sont importantes\n• Opérateurs de comparaison : ==, !=, >, <, >=, <=\n• Opérateurs logiques : and, or, not\n• Structure if/elif/else\n• Combiner des conditions\n• Projet Password Validator",
        en: "This week, we'll learn how to make our programs smarter by allowing them to make decisions.\n\nImagine you could tell your program: \"If they're over 18, say they can vote. Otherwise, say they're too young.\" That's how conditional statements work!\n\nWe'll cover:\n• What conditionals are and why they're important\n• Comparison operators: ==, !=, >, <, >=, <=\n• Logical operators: and, or, not\n• if/elif/else structure\n• Combining conditions\n• Password Validator project"
      },
      keyPoints: {
        ht: [
          "Kondisyonèl yo pèmèt pwogram yo pran desizyon",
          "if/elif/else kontwole ki kòd yo ki kouri",
          "Operatè yo konpare ak konbine kondisyon yo",
          "Pwogram yo vin pi entèaktif ak kondisyonèl yo"
        ],
        fr: [
          "Les conditionnelles permettent aux programmes de prendre des décisions",
          "if/elif/else contrôlent quel code s'exécute",
          "Les opérateurs comparent et combinent les conditions",
          "Les programmes deviennent plus interactifs avec les conditionnelles"
        ],
        en: [
          "Conditionals allow programs to make decisions",
          "if/elif/else controls which code runs",
          "Operators compare and combine conditions", 
          "Programs become more interactive with conditionals"
        ]
      }
    },
    {
      id: "week5-what-are-conditionals",
      type: "concept",
      title: {
        ht: "🤔 Kisa ki Kondisyonèl yo?",
        fr: "🤔 Qu'est-ce que les Conditionnelles ?",
        en: "🤔 What Are Conditionals?"
      },
      content: {
        ht: "Kondisyonèl yo se deklarasyon ki pèmèt pwogram nou yo pran desizyon diferan ki baze sou kondisyon yo.\n\nNan lavi chak jou, nou toujou pran desizyon kondisyonèl:\n• \"Si li ap lapli, mwen pral pran parapli mwen\"\n• \"Si mwen gen ase lajan, mwen pral achte sa a\"\n• \"Si li pi ta pase 6è, mwen pral manje\"\n\nNan Python, nou ka ansèye pwogram nou yo fè menm bagay la!",
        fr: "Les conditionnelles sont des instructions qui permettent à nos programmes de prendre différentes actions basées sur des conditions.\n\nDans la vie quotidienne, nous prenons constamment des décisions conditionnelles :\n• \"S'il pleut, je vais prendre mon parapluie\"\n• \"Si j'ai assez d'argent, je vais acheter cela\"\n• \"S'il est plus de 6h, je vais dîner\"\n\nEn Python, nous pouvons enseigner à nos programmes de faire la même chose !",
        en: "Conditionals are statements that allow our programs to take different actions based on conditions.\n\nIn everyday life, we constantly make conditional decisions:\n• \"If it's raining, I'll take my umbrella\"\n• \"If I have enough money, I'll buy that\"\n• \"If it's past 6 PM, I'll have dinner\"\n\nIn Python, we can teach our programs to do the same thing!"
      },
      example: {
        code: `# Basic conditional example
age = 18

if age >= 18:
    print("You can vote!")
    print("You are an adult.")
else:
    print("You are too young to vote.")
    print("You are a minor.")

print("Thanks for checking!")

# Testing with different ages
print("\\n=== Testing different ages ===")
ages_to_test = [15, 18, 25]

for test_age in ages_to_test:
    print(f"\\nAge {test_age}:")
    if test_age >= 18:
        print("  ✅ Can vote!")
    else:
        print("  ❌ Cannot vote yet")`,
        output: `You can vote!
You are an adult.
Thanks for checking!

=== Testing different ages ===

Age 15:
  ❌ Cannot vote yet

Age 18:
  ✅ Can vote!

Age 25:
  ✅ Can vote!`,
        explanation: {
          ht: "Kondisyonèl 'if' teste si yon kondisyon vre oswa fo. Si age >= 18 vre, li egzekite kòd ki anba 'if'. Si pa vre, li egzekite kòd ki anba 'else'. Kondisyonèl yo pèmèt pwogram nou yo adapte ak sitiyasyon diferan yo.",
          fr: "La conditionnelle 'if' teste si une condition est vraie ou fausse. Si age >= 18 est vrai, elle exécute le code sous 'if'. Si faux, elle exécute le code sous 'else'. Les conditionnelles permettent à nos programmes de s'adapter à différentes situations.",
          en: "The 'if' conditional tests whether a condition is true or false. If age >= 18 is true, it executes the code under 'if'. If false, it executes the code under 'else'. Conditionals allow our programs to adapt to different situations."
        }
      },
      keyPoints: {
        ht: [
          "if teste si yon kondisyon vre",
          "else egzekite lè kondisyon an fo", 
          "Sèlman youn nan de blòk yo ki kouri",
          "Kondisyonèl yo fè pwogram yo entèaktif"
        ],
        fr: [
          "if teste si une condition est vraie",
          "else s'exécute quand la condition est fausse",
          "Seulement un des deux blocs s'exécute", 
          "Les conditionnelles rendent les programmes interactifs"
        ],
        en: [
          "if tests whether a condition is true",
          "else executes when the condition is false",
          "Only one of the two blocks runs",
          "Conditionals make programs interactive"
        ]
      }
    },
    {
      id: "week5-comparison-operators",
      type: "concept",
      title: {
        ht: "⚖️ Operatè Konparezon",
        fr: "⚖️ Opérateurs de Comparaison",
        en: "⚖️ Comparison Operators"
      },
      content: {
        ht: "Operatè konparezon yo konpare de valè yo ak retounen True oswa False. Yo se zouti ki nou bezwen yo pou teste kondisyon yo.",
        fr: "Les opérateurs de comparaison comparent deux valeurs et retournent True ou False. Ce sont les outils dont nous avons besoin pour tester les conditions.",
        en: "Comparison operators compare two values and return True or False. They are the tools we need to test conditions."
      },
      example: {
        code: `# Comparison operators in action
print("=== COMPARISON OPERATORS ===")

# Equal to (==)
print("\\n1. Equal to (==)")
print(f"5 == 5: {5 == 5}")
print(f"5 == 3: {5 == 3}")
print(f"'hello' == 'hello': {'hello' == 'hello'}")

# Not equal to (!=)  
print("\\n2. Not equal to (!=)")
print(f"5 != 3: {5 != 3}")
print(f"5 != 5: {5 != 5}")

# Greater than (>)
print("\\n3. Greater than (>)")
print(f"10 > 5: {10 > 5}")
print(f"2 > 8: {2 > 8}")

# Less than (<)
print("\\n4. Less than (<)")
print(f"2 < 8: {2 < 8}")
print(f"10 < 5: {10 < 5}")

# Greater or equal (>=)
print("\\n5. Greater or equal (>=)")
print(f"10 >= 10: {10 >= 10}")
print(f"10 >= 5: {10 >= 5}")
print(f"3 >= 7: {3 >= 7}")

# Less or equal (<=)
print("\\n6. Less or equal (<=)")
print(f"4 <= 3: {4 <= 3}")
print(f"4 <= 4: {4 <= 4}")
print(f"4 <= 7: {4 <= 7}")

# Real-world example
print("\\n=== REAL EXAMPLE ===")
student_grade = 85
passing_grade = 60

if student_grade >= passing_grade:
    print(f"Grade {student_grade}: PASSED! ✅")
else:
    print(f"Grade {student_grade}: FAILED ❌")`,
        output: `=== COMPARISON OPERATORS ===

1. Equal to (==)
5 == 5: True
5 == 3: False
'hello' == 'hello': True

2. Not equal to (!=)
5 != 3: True
5 != 5: False

3. Greater than (>)
10 > 5: True
2 > 8: False

4. Less than (<)
2 < 8: True
10 < 5: False

5. Greater or equal (>=)
10 >= 10: True
10 >= 5: True
3 >= 7: False

6. Less or equal (<=)
4 <= 3: False
4 <= 4: True
4 <= 7: True

=== REAL EXAMPLE ===
Grade 85: PASSED! ✅`,
        explanation: {
          ht: "Chak operatè konparezon gen yon travay espesifik. == tcheke si de valè yo menm. != tcheke si yo diferan. >, <, >=, <= konpare gwosè yo. Yo tout retounen True oswa False ki nou ka sèvi nan kondisyonèl yo.",
          fr: "Chaque opérateur de comparaison a un travail spécifique. == vérifie si deux valeurs sont identiques. != vérifie si elles sont différentes. >, <, >=, <= comparent les tailles. Ils retournent tous True ou False que nous pouvons utiliser dans les conditionnelles.",
          en: "Each comparison operator has a specific job. == checks if two values are the same. != checks if they're different. >, <, >=, <= compare sizes. They all return True or False which we can use in conditionals."
        }
      },
      keyPoints: {
        ht: [
          "== teste egalite (pa asiyen!)",
          "!= teste diferans",
          "> ak < konpare gwosè",
          ">= ak <= gen mitan = yo",
          "Tout operatè yo retounen True oswa False"
        ],
        fr: [
          "== teste l'égalité (pas l'assignation !)",
          "!= teste la différence", 
          "> et < comparent les tailles",
          ">= et <= incluent l'égalité",
          "Tous les opérateurs retournent True ou False"
        ],
        en: [
          "== tests equality (not assignment!)",
          "!= tests difference",
          "> and < compare sizes", 
          ">= and <= include equality",
          "All operators return True or False"
        ]
      }
    },
    {
      id: "week5-logical-operators",
      type: "code",
      title: {
        ht: "🔗 Operatè Lojik",
        fr: "🔗 Opérateurs Logiques", 
        en: "🔗 Logical Operators"
      },
      content: {
        ht: "Operatè lojik yo konbine kondisyon yo pou kreye kondisyon ki pi konplèks. Yo pèmèt nou teste plizyè bagay an menm tan.",
        fr: "Les opérateurs logiques combinent les conditions pour créer des conditions plus complexes. Ils nous permettent de tester plusieurs choses à la fois.",
        en: "Logical operators combine conditions to create more complex conditions. They allow us to test multiple things at once."
      },
      example: {
        code: `# Logical operators in action
print("=== LOGICAL OPERATORS ===")

# AND operator - both must be True
print("\\n1. AND operator (both must be True)")
print(f"True and True: {True and True}")
print(f"True and False: {True and False}")
print(f"False and True: {False and True}")
print(f"False and False: {False and False}")

print("\\nReal example with AND:")
age = 25
has_license = True

if age >= 18 and has_license:
    print("✅ Can drive!")
else:
    print("❌ Cannot drive")

# OR operator - at least one must be True  
print("\\n2. OR operator (at least one must be True)")
print(f"True or True: {True or True}")
print(f"True or False: {True or False}")
print(f"False or True: {False or True}")
print(f"False or False: {False or False}")

print("\\nReal example with OR:")
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("🎉 No work today!")
else:
    print("💼 Work day!")

# NOT operator - reverses True/False
print("\\n3. NOT operator (reverses True/False)")
print(f"not True: {not True}")
print(f"not False: {not False}")

print("\\nReal example with NOT:")
is_raining = False

if not is_raining:
    print("☀️ Great day for a walk!")
else:
    print("☔ Stay inside!")

# Complex combinations
print("\\n4. Complex combinations")
temperature = 75
is_sunny = True
has_free_time = True

if temperature > 70 and is_sunny and has_free_time:
    print("🏖️ Perfect day for the beach!")
elif temperature > 60 and (is_sunny or not is_raining):
    print("🚶 Good day for a walk!")
else:
    print("🏠 Better to stay indoors")`,
        output: `=== LOGICAL OPERATORS ===

1. AND operator (both must be True)
True and True: True
True and False: False
False and True: False
False and False: False

Real example with AND:
✅ Can drive!

2. OR operator (at least one must be True)
True or True: True
True or False: True
False or True: True
False or False: False

Real example with OR:
🎉 No work today!

3. NOT operator (reverses True/False)
not True: False
not False: True

Real example with NOT:
☀️ Great day for a walk!

4. Complex combinations
🏖️ Perfect day for the beach!`,
        explanation: {
          ht: "'and' bezwen TOUL kondisyon yo vre. 'or' bezwen sèlman YON nan yo vre. 'not' ranvèse vre/fo. Nou ka konbine yo pou kreye règ konplèks tankou 'si li gen 18+ an ak gen lisans ak pa gen akè, li ka kondwi'.",
          fr: "'and' nécessite que TOUTES les conditions soient vraies. 'or' nécessite qu'au moins UNE soit vraie. 'not' inverse vrai/faux. Nous pouvons les combiner pour créer des règles complexes comme 'si il a 18+ ans et a un permis et pas d'accident, il peut conduire'.",
          en: "'and' requires ALL conditions to be true. 'or' requires at least ONE to be true. 'not' flips true/false. We can combine them to create complex rules like 'if they're 18+ and have license and no accidents, they can drive'."
        }
      },
      keyPoints: {
        ht: [
          "'and': toul kondisyon yo dwe vre",
          "'or': omwen yon kondisyon dwe vre",
          "'not': ranvèse True ak False", 
          "Konbinezon yo kreye lojik konplèks",
          "Sèvi ak parantèz yo pou klè"
        ],
        fr: [
          "'and': toutes les conditions doivent être vraies",
          "'or': au moins une condition doit être vraie",
          "'not': inverse True et False",
          "Les combinaisons créent une logique complexe", 
          "Utilisez des parenthèses pour la clarté"
        ],
        en: [
          "'and': all conditions must be true",
          "'or': at least one condition must be true",
          "'not': flips True and False",
          "Combinations create complex logic",
          "Use parentheses for clarity"
        ]
      }
    },
    {
      id: "week5-if-elif-else",
      type: "code",
      title: {
        ht: "🌳 Stwikti if/elif/else",
        fr: "🌳 Structure if/elif/else",
        en: "🌳 if/elif/else Structure"
      },
      content: {
        ht: "elif (else if) pèmèt nou teste plizyè kondisyon nan yon òd. Python tcheke yo youn apre lòt ak kouri premye youn ki vre a.",
        fr: "elif (else if) nous permet de tester plusieurs conditions dans un ordre. Python les vérifie une après l'autre et exécute la première qui est vraie.",
        en: "elif (else if) allows us to test multiple conditions in order. Python checks them one by one and executes the first one that's true."
      },
      example: {
        code: `# if/elif/else structure examples
print("=== GRADE CALCULATOR ===")

# Example 1: Grade system
def get_letter_grade(score):
    if score >= 90:
        return "A - Excellent!"
    elif score >= 80:
        return "B - Good job!"
    elif score >= 70:
        return "C - Average"
    elif score >= 60:
        return "D - Needs improvement"
    else:
        return "F - Failed"

# Test different scores
test_scores = [95, 85, 75, 65, 45]

for score in test_scores:
    grade = get_letter_grade(score)
    print(f"Score {score}: {grade}")

print("\\n=== WEATHER ADVISOR ===")

# Example 2: Weather advisor
temperature = 78
weather_condition = "sunny"

if temperature >= 80 and weather_condition == "sunny":
    advice = "🏖️ Perfect beach weather!"
elif temperature >= 70 and weather_condition == "sunny":
    advice = "🚶 Great for a walk!"
elif temperature >= 70 and weather_condition == "cloudy":
    advice = "🌤️ Nice day, maybe bring a light jacket"
elif temperature >= 50:
    advice = "🧥 Cool weather, wear a jacket"
elif temperature >= 32:
    advice = "❄️ Cold! Bundle up!"
else:
    advice = "🥶 Freezing! Stay inside!"

print(f"Temperature: {temperature}°F, Condition: {weather_condition}")
print(f"Advice: {advice}")

print("\\n=== AGE CATEGORY ===")

# Example 3: Age categories
ages_to_check = [5, 12, 16, 18, 25, 65, 80]

for age in ages_to_check:
    if age < 13:
        category = "👶 Child"
    elif age < 18:
        category = "🧒 Teenager"
    elif age < 65:
        category = "👩 Adult"
    else:
        category = "👵 Senior"
    
    print(f"Age {age}: {category}")`,
        output: `=== GRADE CALCULATOR ===
Score 95: A - Excellent!
Score 85: B - Good job!
Score 75: C - Average
Score 65: D - Needs improvement
Score 45: F - Failed

=== WEATHER ADVISOR ===
Temperature: 78°F, Condition: sunny
Advice: 🚶 Great for a walk!

=== AGE CATEGORY ===
Age 5: 👶 Child
Age 12: 👶 Child
Age 16: 🧒 Teenager
Age 18: 👩 Adult
Age 25: 👩 Adult
Age 65: 👵 Senior
Age 80: 👵 Senior`,
        explanation: {
          ht: "Python teste kondisyon yo nan òd yo ak egzekite premye youn ki vre a. Yon fwa li jwenn yon ki vre, li sote tout rès yo. Se konsa pou egzanp gra yo: si score >= 90 vre, li pa tcheke rès yo. elif yo vin apre if ak se pou kondisyon altènatif yo.",
          fr: "Python teste les conditions dans l'ordre et exécute la première qui est vraie. Une fois qu'il en trouve une vraie, il ignore le reste. C'est ainsi pour l'exemple des notes : si score >= 90 est vrai, il ne vérifie pas le reste. Les elif viennent après if et sont pour les conditions alternatives.",
          en: "Python tests conditions in order and executes the first one that's true. Once it finds a true one, it skips the rest. That's how for the grade example: if score >= 90 is true, it doesn't check the rest. elif comes after if and is for alternative conditions."
        }
      },
      keyPoints: {
        ht: [
          "elif = 'else if' = kondisyon altènatif",
          "Python teste yo nan òd yo",
          "Premye kondisyon vre a egzekite",
          "Rès yo inyore apre yon match",
          "else se ka final la (opsyonèl)"
        ],
        fr: [
          "elif = 'else if' = condition alternative", 
          "Python les teste dans l'ordre",
          "La première condition vraie s'exécute",
          "Le reste est ignoré après un match",
          "else est le cas final (optionnel)"
        ],
        en: [
          "elif = 'else if' = alternative condition",
          "Python tests them in order", 
          "First true condition executes",
          "Rest are ignored after a match",
          "else is the final case (optional)"
        ]
      }
    },
    {
      id: "week5-nested-conditions",
      type: "code",
      title: {
        ht: "🪆 Kondisyon Anbòk ak Konbinezon",
        fr: "🪆 Conditions Imbriquées et Combinaisons",
        en: "🪆 Nested and Combined Conditions"
      },
      content: {
        ht: "Nou ka mete kondisyon yo youn nan lòt (nested) ak konbine yo ak operatè lojik pou kreye lojik konplèks.",
        fr: "Nous pouvons mettre des conditions les unes dans les autres (imbriquées) et les combiner avec des opérateurs logiques pour créer une logique complexe.",
        en: "We can put conditions inside each other (nested) and combine them with logical operators to create complex logic."
      },
      example: {
        code: `# Nested and combined conditions
print("=== LOGIN SYSTEM ===")

def check_login(username, password, is_account_active, failed_attempts):
    # Nested conditions
    if username == "admin":
        if password == "secret123":
            if is_account_active:
                if failed_attempts < 3:
                    return "✅ Admin login successful!"
                else:
                    return "🔒 Account locked due to failed attempts"
            else:
                return "❌ Account is deactivated"
        else:
            return "❌ Wrong password for admin"
    else:
        return "❌ Username not found"

# Test the login system
print(check_login("admin", "secret123", True, 1))
print(check_login("admin", "wrong", True, 1))
print(check_login("admin", "secret123", False, 1))

print("\\n=== SIMPLIFIED WITH LOGICAL OPERATORS ===")

def check_login_simple(username, password, is_account_active, failed_attempts):
    # Combined conditions - cleaner approach
    if (username == "admin" and 
        password == "secret123" and 
        is_account_active and 
        failed_attempts < 3):
        return "✅ Login successful!"
    elif username != "admin":
        return "❌ Username not found"
    elif password != "secret123":
        return "❌ Wrong password"
    elif not is_account_active:
        return "❌ Account deactivated"
    elif failed_attempts >= 3:
        return "🔒 Account locked"
    else:
        return "❌ Login failed"

print(check_login_simple("admin", "secret123", True, 1))

print("\\n=== MOVIE RATING SYSTEM ===")

def get_movie_recommendation(age, genre_preference, has_subscription):
    if age >= 18:
        if genre_preference == "horror" and has_subscription:
            return "🧟 Watch 'Scary Movie' - Premium Horror"
        elif genre_preference == "action":
            return "💥 Watch 'Action Hero' - Great for adults"
        elif has_subscription:
            return "🎬 Access to Premium Adult Content"
        else:
            return "🎭 Basic adult movies available"
    else:  # age < 18
        if genre_preference == "animation" or genre_preference == "family":
            return "🐭 Watch 'Cartoon Adventure' - Perfect for you!"
        elif has_subscription:
            return "🌟 Kids Premium Content available"
        else:
            return "📺 Basic kids shows available"

# Test movie recommendations
print("18+ Action lover with subscription:")
print(get_movie_recommendation(25, "action", True))

print("\\n16 year old animation fan:")
print(get_movie_recommendation(16, "animation", False))

print("\\n=== COMPLEX BUSINESS LOGIC ===")

def calculate_discount(customer_type, order_amount, is_first_order, has_coupon):
    discount = 0
    
    # Base discount by customer type
    if customer_type == "premium":
        discount = 15
    elif customer_type == "regular":
        discount = 5
    
    # Additional discounts
    if order_amount >= 100:
        discount += 10
        
    if is_first_order:
        discount += 20
        
    if has_coupon:
        discount += 5
    
    # Maximum discount cap
    if discount > 50:
        discount = 50
        
    return discount

# Test discount calculation
scenarios = [
    ("premium", 150, True, True),
    ("regular", 50, False, True),
    ("new", 200, True, False)
]

for customer_type, amount, first_order, coupon in scenarios:
    discount = calculate_discount(customer_type, amount, first_order, coupon)
    final_amount = amount * (1 - discount/100)
    print(f"Customer: {customer_type}, Amount: $\\{amount}")
    print(f"Discount: {discount}%, Final: $\\{final_amount:.2f}")
    print()`,
        output: `=== LOGIN SYSTEM ===
✅ Admin login successful!
❌ Wrong password for admin
❌ Account is deactivated

=== SIMPLIFIED WITH LOGICAL OPERATORS ===
✅ Login successful!

=== MOVIE RATING SYSTEM ===
18+ Action lover with subscription:
💥 Watch 'Action Hero' - Great for adults

16 year old animation fan:
🐭 Watch 'Cartoon Adventure' - Perfect for you!

=== COMPLEX BUSINESS LOGIC ===
Customer: premium, Amount: $150
Discount: 50%, Final: $75.00

Customer: regular, Amount: $50
Discount: 10%, Final: $45.00

Customer: new, Amount: $200
Discount: 30%, Final: $140.00`,
        explanation: {
          ht: "Kondisyon anbòk yo mete yon if nan yon lòt if. Men yo ka vin konplèks. Konbine kondisyon yo ak 'and'/'or' pi kle ak pi kout. Nou ka melanje tou de apwòch yo selon bezwen yo.",
          fr: "Les conditions imbriquées mettent un if dans un autre if. Mais elles peuvent devenir complexes. Combiner les conditions avec 'and'/'or' est plus clair et plus court. Nous pouvons mélanger les deux approches selon les besoins.",
          en: "Nested conditions put one if inside another if. But they can get complex. Combining conditions with 'and'/'or' is clearer and shorter. We can mix both approaches as needed."
        }
      },
      tips: {
        ht: [
          "Sèvi ak operatè lojik olye nesting twòp",
          "Kòmanse ak kondisyon ki pi pwobab yo",
          "Kòmante kòd konplèks yo",
          "Teste chak branch nan kondisyon ou yo"
        ],
        fr: [
          "Utilisez les opérateurs logiques plutôt qu'imbriquer trop",
          "Commencez par les conditions les plus probables",
          "Commentez le code complexe",
          "Testez chaque branche de vos conditions"
        ],
        en: [
          "Use logical operators instead of nesting too much",
          "Start with most likely conditions",
          "Comment complex code",
          "Test every branch of your conditions"
        ]
      }
    },
    {
      id: "week5-practice-exercises",
      type: "practice",
      title: {
        ht: "💪 Egzèsis Pratik Kondisyonèl",
        fr: "💪 Exercices Pratiques Conditionnelles",
        en: "💪 Conditional Practice Exercises"
      },
      content: {
        ht: "Pratike sèvi ak kondisyonèl yo ak egzèsis sa yo ki soti nan lavi reyèl:",
        fr: "Pratiquez l'utilisation des conditionnelles avec ces exercices tirés de la vraie vie :",
        en: "Practice using conditionals with these real-world exercises:"
      },
      example: {
        code: `# Practice exercises with conditionals
print("=== EXERCISE 1: Age Checker ===")

def check_age_status(age):
    if age >= 18:
        return "👨 Adult - Can vote, drive, work full time"
    else:
        return "👶 Minor - Cannot vote yet"

# Test age checker
ages = [15, 18, 25]
for age in ages:
    print(f"Age {age}: {check_age_status(age)}")

print("\\n=== EXERCISE 2: Number Sign Checker ===")

def check_number_sign(number):
    if number > 0:
        return "➕ Positive number"
    elif number < 0:
        return "➖ Negative number"
    else:
        return "0️⃣ Zero (neither positive nor negative)"

# Test number sign
numbers = [10, -5, 0, 3.14, -2.7]
for num in numbers:
    print(f"{num}: {check_number_sign(num)}")

print("\\n=== EXERCISE 3: Temperature Advisor ===")

def temperature_advisor(temp):
    if temp > 85:
        return "🥵 It's hot! Stay hydrated and find shade"
    elif temp >= 60:
        return "😊 Perfect weather for outdoor activities"
    else:
        return "🥶 It's cold! Wear warm clothes"

# Test temperature advisor
temperatures = [90, 75, 45, 62]
for temp in temperatures:
    print(f"{temp}°F: {temperature_advisor(temp)}")

print("\\n=== EXERCISE 4: Access Control ===")

def check_access(username, is_admin=False):
    if username.lower() == "admin":
        return "🔑 Admin access granted - Full control"
    elif is_admin:
        return "👮 Manager access granted - Limited admin rights"
    else:
        return "👤 User access granted - Basic features only"

# Test access control
users = [
    ("admin", False),
    ("john", True),
    ("mary", False)
]

for user, admin_flag in users:
    print(f"User '{user}': {check_access(user, admin_flag)}")

print("\\n=== EXERCISE 5: Grade Calculator ===")

def calculate_grade_with_curve(score, extra_credit=0, attendance_bonus=False):
    # Apply extra credit
    final_score = score + extra_credit
    
    # Apply attendance bonus (5 points)
    if attendance_bonus:
        final_score += 5
    
    # Cap at 100
    if final_score > 100:
        final_score = 100
    
    # Determine letter grade
    if final_score >= 90:
        letter = "A"
        message = "Excellent work! 🌟"
    elif final_score >= 80:
        letter = "B"
        message = "Good job! 👍"
    elif final_score >= 70:
        letter = "C"
        message = "Average performance 📚"
    elif final_score >= 60:
        letter = "D"
        message = "Needs improvement 📖"
    else:
        letter = "F"
        message = "Failed - Please see instructor 📝"
    
    return f"Grade: {letter} (Score: {final_score}) - {message}"

# Test grade calculator
students = [
    (88, 5, True),   # 88 + 5 + 5 = 98 (A)
    (75, 0, False),  # 75 (C)
    (92, 10, True),  # 92 + 10 + 5 = 100 (A) - capped
    (55, 8, True)    # 55 + 8 + 5 = 68 (D)
]

for i, (score, extra, attendance) in enumerate(students, 1):
    result = calculate_grade_with_curve(score, extra, attendance)
    print(f"Student {i}: {result}")

print("\\n=== EXERCISE 6: Even/Odd with Features ===")

def analyze_number(number):
    # Basic even/odd check
    if number % 2 == 0:
        parity = "Even"
        icon = "⚪"
    else:
        parity = "Odd"
        icon = "⚫"
    
    # Additional analysis
    features = []
    
    if number == 0:
        features.append("Zero")
    elif number > 0:
        features.append("Positive")
    else:
        features.append("Negative")
    
    if number % 5 == 0 and number != 0:
        features.append("Divisible by 5")
    
    if number % 10 == 0 and number != 0:
        features.append("Divisible by 10")
    
    return f"{icon} {number} is {parity}. Features: {', '.join(features)}"

# Test number analyzer
test_numbers = [0, 7, 10, -4, 15, 22]
for num in test_numbers:
    print(analyze_number(num))`,
        output: `=== EXERCISE 1: Age Checker ===
Age 15: 👶 Minor - Cannot vote yet
Age 18: 👨 Adult - Can vote, drive, work full time
Age 25: 👨 Adult - Can vote, drive, work full time

=== EXERCISE 2: Number Sign Checker ===
10: ➕ Positive number
-5: ➖ Negative number
0: 0️⃣ Zero (neither positive nor negative)
3.14: ➕ Positive number
-2.7: ➖ Negative number

=== EXERCISE 3: Temperature Advisor ===
90°F: 🥵 It's hot! Stay hydrated and find shade
75°F: 😊 Perfect weather for outdoor activities
45°F: 🥶 It's cold! Wear warm clothes
62°F: 😊 Perfect weather for outdoor activities

=== EXERCISE 4: Access Control ===
User 'admin': 🔑 Admin access granted - Full control
User 'john': 👮 Manager access granted - Limited admin rights
User 'mary': 👤 User access granted - Basic features only

=== EXERCISE 5: Grade Calculator ===
Student 1: Grade: A (Score: 98) - Excellent work! 🌟
Student 2: Grade: C (Score: 75) - Average performance 📚
Student 3: Grade: A (Score: 100) - Excellent work! 🌟
Student 4: Grade: D (Score: 68) - Needs improvement 📖

=== EXERCISE 6: Even/Odd with Features ===
⚪ 0 is Even. Features: Zero
⚫ 7 is Odd. Features: Positive
⚪ 10 is Even. Features: Positive, Divisible by 5, Divisible by 10
⚪ -4 is Even. Features: Negative
⚫ 15 is Odd. Features: Positive, Divisible by 5
⚪ 22 is Even. Features: Positive`,
        explanation: {
          ht: "Egzèsis sa yo montre kijan kondisyonèl yo itilize nan aplikasyon reyèl yo. Yo kouvri klasman laj, kontwòl aksè, sistèm gra yo, ak analiz nimewo. Chak egzèsis konbine plizyè konsèp tankou konparezon, lojik, ak manipilasyon done.",
          fr: "Ces exercices montrent comment les conditionnelles sont utilisées dans les applications réelles. Ils couvrent la classification d'âge, le contrôle d'accès, les systèmes de notes, et l'analyse de nombres. Chaque exercice combine plusieurs concepts comme la comparaison, la logique, et la manipulation de données.",
          en: "These exercises show how conditionals are used in real applications. They cover age classification, access control, grading systems, and number analysis. Each exercise combines multiple concepts like comparison, logic, and data manipulation."
        }
      }
    },
    {
      id: "week5-boolean-logic",
      type: "tip",
      title: {
        ht: "🔍 Lojik Boolean ak Konsèy",
        fr: "🔍 Logique Booléenne et Conseils",
        en: "🔍 Boolean Logic and Tips"
      },
      content: {
        ht: "Konprann valè Boolean yo ak kijan yo fonksyone ak kondisyonèl yo:",
        fr: "Comprendre les valeurs booléennes et comment elles fonctionnent avec les conditionnelles :",
        en: "Understanding boolean values and how they work with conditionals:"
      },
      example: {
        code: `# Boolean logic and truthy/falsy values
print("=== BOOLEAN BASICS ===")

# Basic boolean values
print(f"True: {True}")
print(f"False: {False}")
print(f"type of True: {type(True)}")

print("\\n=== TRUTHY AND FALSY VALUES ===")

# Values that are considered False
falsy_values = [False, None, 0, 0.0, "", [], {}, set()]
print("Falsy values (act like False in conditions):")
for value in falsy_values:
    if value:
        print(f"  {repr(value)}: Truthy")
    else:
        print(f"  {repr(value)}: Falsy")

# Values that are considered True
truthy_values = [True, 1, -1, 0.1, "hello", " ", [1], {"a": 1}, {1}]
print("\\nTruthy values (act like True in conditions):")
for value in truthy_values:
    if value:
        print(f"  {repr(value)}: Truthy")
    else:
        print(f"  {repr(value)}: Falsy")

print("\\n=== PRACTICAL BOOLEAN USAGE ===")

# Checking if a list has items
shopping_list = ["milk", "bread"]
empty_list = []

if shopping_list:
    print(f"✅ Shopping list has {len(shopping_list)} items")
else:
    print("❌ Shopping list is empty")

if empty_list:
    print("✅ Empty list has items")
else:
    print("❌ Empty list is indeed empty")

# Checking if a string is not empty
user_input = "Hello"
empty_input = ""

if user_input:
    print(f"✅ User entered: '{user_input}'")
else:
    print("❌ User entered nothing")

if empty_input:
    print(f"✅ User entered: '{empty_input}'")
else:
    print("❌ User entered nothing")

print("\\n=== BOOLEAN FUNCTIONS ===")

def is_valid_email(email):
    # Simple email validation
    return "@" in email and "." in email and len(email) > 5

def is_strong_password(password):
    # Check multiple conditions
    return (len(password) >= 8 and 
            any(c.isdigit() for c in password) and
            any(c.isupper() for c in password) and
            any(c.islower() for c in password))

# Test boolean functions
emails = ["test@email.com", "invalid", "user@site.org"]
passwords = ["weak", "Strong123", "PASSWORD", "Good4You!"]

print("Email validation:")
for email in emails:
    print(f"  {email}: {'✅ Valid' if is_valid_email(email) else '❌ Invalid'}")

print("\\nPassword strength:")
for pwd in passwords:
    print(f"  {pwd}: {'✅ Strong' if is_strong_password(pwd) else '❌ Weak'}")`,
        output: `=== BOOLEAN BASICS ===
True: True
False: False
type of True: <class 'bool'>

=== TRUTHY AND FALSY VALUES ===
Falsy values (act like False in conditions):
  False: Falsy
  None: Falsy
  0: Falsy
  0.0: Falsy
  '': Falsy
  []: Falsy
  {}: Falsy
  set(): Falsy

Truthy values (act like True in conditions):
  True: Truthy
  1: Truthy
  -1: Truthy
  0.1: Truthy
  'hello': Truthy
  ' ': Truthy
  [1]: Truthy
  {'a': 1}: Truthy
  {1}: Truthy

=== PRACTICAL BOOLEAN USAGE ===
✅ Shopping list has 2 items
❌ Empty list is indeed empty
✅ User entered: 'Hello'
❌ User entered nothing

=== BOOLEAN FUNCTIONS ===
Email validation:
  test@email.com: ✅ Valid
  invalid: ❌ Invalid
  user@site.org: ✅ Valid

Password strength:
  weak: ❌ Weak
  Strong123: ✅ Strong
  PASSWORD: ❌ Weak
  Good4You!: ✅ Strong`,
        explanation: {
          ht: "Boolean yo se True ak False. Men Python konsidere anpil lòt valè yo kòm 'truthy' oswa 'falsy'. Lis vid yo, string vid yo, ak 0 yo count kòm False. Sa a itil pou tcheke si bagay yo egziste oswa vid nan kondisyonèl yo.",
          fr: "Les booléens sont True et False. Mais Python considère beaucoup d'autres valeurs comme 'truthy' ou 'falsy'. Les listes vides, chaînes vides, et 0 comptent comme False. C'est utile pour vérifier si les choses existent ou sont vides dans les conditionnelles.",
          en: "Booleans are True and False. But Python considers many other values as 'truthy' or 'falsy'. Empty lists, empty strings, and 0 count as False. This is useful for checking if things exist or are empty in conditionals."
        }
      },
      tips: {
        ht: [
          "Sèvi ak 'if my_list:' pou tcheke si lis yo gen bagay",
          "Empty string '', lis vid [], ak 0 yo false",
          "Fonksyon yo ka retounen boolean yo",
          "Evite 'if x == True:', jis sèvi ak 'if x:'"
        ],
        fr: [
          "Utilisez 'if my_list:' pour vérifier si les listes ont des éléments",
          "String vide '', liste vide [], et 0 sont faux",
          "Les fonctions peuvent retourner des booléens",
          "Évitez 'if x == True:', utilisez juste 'if x:'"
        ],
        en: [
          "Use 'if my_list:' to check if lists have items",
          "Empty string '', empty list [], and 0 are falsy",
          "Functions can return booleans",
          "Avoid 'if x == True:', just use 'if x:'"
        ]
      }
    }
  ],
  quiz: {
    questions: [
      {
        id: "q1",
        question: {
          ht: "Kisa operatè == ap fè?",
          fr: "Que fait l'opérateur == ?",
          en: "What does the == operator do?"
        },
        options: {
          ht: ["Asiyen yon valè", "Tcheke si de valè yo egal", "Ajoute de nimewo", "Konpare gwosè yo"],
          fr: ["Assigne une valeur", "Vérifie si deux valeurs sont égales", "Additionne deux nombres", "Compare les tailles"],
          en: ["Assigns a value", "Checks if two values are equal", "Adds two numbers", "Compares sizes"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Operatè == teste egalite - li tcheke si de valè yo menm bagay. Li diferan ak = ki asiyen valè yo. == retounen True si valè yo egal, False si yo pa egal.",
          fr: "L'opérateur == teste l'égalité - il vérifie si deux valeurs sont identiques. Il est différent de = qui assigne des valeurs. == retourne True si les valeurs sont égales, False sinon.",
          en: "The == operator tests equality - it checks if two values are the same. It's different from = which assigns values. == returns True if values are equal, False if not."
        }
      },
      {
        id: "q2",
        question: {
          ht: "Kilès nan sa yo ki retounen True?",
          fr: "Lequel de ceux-ci retourne True ?",
          en: "Which of these returns True?"
        },
        options: {
          ht: ["5 > 10", "10 == 5", "4 != 4", "7 >= 3"],
          fr: ["5 > 10", "10 == 5", "4 != 4", "7 >= 3"],
          en: ["5 > 10", "10 == 5", "4 != 4", "7 >= 3"]
        },
        correctAnswer: 3,
        explanation: {
          ht: "7 >= 3 retounen True paske 7 pi gwo pase 3. Lòt yo: 5 > 10 se False (5 pa pi gwo pase 10), 10 == 5 se False (yo pa egal), 4 != 4 se False (4 egal ak 4).",
          fr: "7 >= 3 retourne True parce que 7 est supérieur à 3. Les autres : 5 > 10 est False (5 n'est pas supérieur à 10), 10 == 5 est False (ils ne sont pas égaux), 4 != 4 est False (4 est égal à 4).",
          en: "7 >= 3 returns True because 7 is greater than 3. The others: 5 > 10 is False (5 is not greater than 10), 10 == 5 is False (they're not equal), 4 != 4 is False (4 equals 4)."
        }
      },
      {
        id: "q3",
        question: {
          ht: "Kisa rezilta 'True and False'?",
          fr: "Quel est le résultat de 'True and False' ?",
          en: "What is the result of 'True and False'?"
        },
        options: {
          ht: ["True", "False", "None", "Error"],
          fr: ["True", "False", "None", "Error"],
          en: ["True", "False", "None", "Error"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "Operatè 'and' bezwen TOUL kondisyon yo vre. Si youn False, tout rezilta a vin False. True and False = False paske False ki la a fè tout bagay la False.",
          fr: "L'opérateur 'and' nécessite que TOUTES les conditions soient vraies. Si une est False, tout le résultat devient False. True and False = False parce que le False présent rend le tout False.",
          en: "The 'and' operator requires ALL conditions to be true. If one is False, the entire result becomes False. True and False = False because the False present makes the whole thing False."
        }
      },
      {
        id: "q4",
        question: {
          ht: "Ki mo-kle yo sèvi pou kondisyon altènatif?",
          fr: "Quel mot-clé est utilisé pour une condition alternative ?",
          en: "What keyword is used for an alternative condition?"
        },
        options: {
          ht: ["else", "elif", "alternative", "or"],
          fr: ["else", "elif", "alternative", "or"],
          en: ["else", "elif", "alternative", "or"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "elif (ki vle di 'else if') se mo-kle ki sèvi pou kondisyon altènatif yo. Li pèmèt ou teste kondisyon lòt yo si premye 'if' la False. 'else' se pou ka final la, 'or' se operatè lojik.",
          fr: "elif (qui signifie 'else if') est le mot-clé utilisé pour les conditions alternatives. Il vous permet de tester d'autres conditions si le premier 'if' est False. 'else' est pour le cas final, 'or' est un opérateur logique.",
          en: "elif (meaning 'else if') is the keyword used for alternative conditions. It allows you to test other conditions if the first 'if' is False. 'else' is for the final case, 'or' is a logical operator."
        }
      },
      {
        id: "q5",
        question: {
          ht: "Kisa kòd sa a ap enprime?\n\nx = 5\nif x > 10:\n    print('Big')\nelse:\n    print('Small')",
          fr: "Qu'est-ce que ce code va imprimer ?\n\nx = 5\nif x > 10:\n    print('Big')\nelse:\n    print('Small')",
          en: "What will this code print?\n\nx = 5\nif x > 10:\n    print('Big')\nelse:\n    print('Small')"
        },
        options: {
          ht: ["Big", "Small", "5", "Error"],
          fr: ["Big", "Small", "5", "Error"],
          en: ["Big", "Small", "5", "Error"]
        },
        correctAnswer: 1,
        explanation: {
          ht: "x = 5, ak kondisyon an teste si 5 > 10. Sa a se False, donk kòd ki nan 'else' la egzekite ak enprime 'Small'. 'if' la pa egzekite paske 5 pa pi gwo pase 10.",
          fr: "x = 5, et la condition teste si 5 > 10. Ceci est False, donc le code dans 'else' s'exécute et imprime 'Small'. Le 'if' ne s'exécute pas parce que 5 n'est pas supérieur à 10.",
          en: "x = 5, and the condition tests if 5 > 10. This is False, so the code in 'else' executes and prints 'Small'. The 'if' doesn't execute because 5 is not greater than 10."
        }
      }
    ],
    passingScore: 3
  },
  miniProject: {
    title: {
      ht: "🔐 Password Validator",
      fr: "🔐 Validateur de Mot de Passe",
      en: "🔐 Password Validator"
    },
    description: {
      ht: "Konsèy yon pwogram ki tcheke si yon modpas konfòm ak règ sekirite yo. Pwogram an pral analize modpas la ak bay rekòmandasyon yo pou amelyore li.",
      fr: "Construisez un programme qui vérifie si un mot de passe répond aux règles de sécurité. Le programme analysera le mot de passe et donnera des recommandations pour l'améliorer.",
      en: "Build a program that checks if a password meets security rules. The program will analyze the password and give recommendations for improving it."
    },
    requirements: {
      ht: [
        "Tcheke si modpas la gen omwen 8 karaktè",
        "Verifye si gen omwen yon nimewo",
        "Verifye si gen omwen yon karaktè espesyal (!@#$%^&*)",
        "Verifye si gen omwen yon lèt majiskil ak yon miniskil",
        "Bay yon nòt ak sijesyon yo pou amelyore"
      ],
      fr: [
        "Vérifier que le mot de passe a au moins 8 caractères",
        "Vérifier qu'il y a au moins un chiffre",
        "Vérifier qu'il y a au moins un caractère spécial (!@#$%^&*)",
        "Vérifier qu'il y a au moins une majuscule et une minuscule",
        "Donner une note et des suggestions d'amélioration"
      ],
      en: [
        "Check that password has at least 8 characters",
        "Verify there's at least one number",
        "Verify there's at least one special character (!@#$%^&*)",
        "Verify there's at least one uppercase and one lowercase letter",
        "Give a score and suggestions for improvement"
      ]
    },
    starterCode: `# Password Validator - Week 5 Project
print("🔐 Password Security Validator")
print("=" * 40)

# Get password from user
password = input("Enter your password to test: ")

# TODO: Check password length (minimum 8 characters)
# TODO: Check for at least one number
# TODO: Check for at least one special character
# TODO: Check for at least one uppercase and one lowercase letter
# TODO: Calculate security score and give feedback

print("\\nPassword analysis complete!")`,
    sampleSolution: `# Password Validator - Week 5 Project
print("🔐 Password Security Validator")
print("=" * 40)

# Get password from user
password = input("Enter your password to test: ")

print(f"\\nAnalyzing password: {'*' * len(password)}")
print("=" * 40)

# Initialize security score and issues list
security_score = 0
issues = []
strengths = []

# Check 1: Password length
if len(password) >= 12:
    security_score += 25
    strengths.append("✅ Excellent length (12+ characters)")
elif len(password) >= 8:
    security_score += 15
    strengths.append("✅ Good length (8+ characters)")
else:
    issues.append("❌ Too short - use at least 8 characters")

# Check 2: Contains numbers
has_number = any(char.isdigit() for char in password)
if has_number:
    security_score += 20
    strengths.append("✅ Contains numbers")
else:
    issues.append("❌ Add at least one number (0-9)")

# Check 3: Contains special characters
special_chars = "!@#$%^&*()_+-=[]\\{\\}|;:,.<>?"
has_special = any(char in special_chars for char in password)
if has_special:
    security_score += 20
    strengths.append("✅ Contains special characters")
else:
    issues.append("❌ Add special characters (!@#$%^&* etc.)")

# Check 4: Contains uppercase letters
has_upper = any(char.isupper() for char in password)
if has_upper:
    security_score += 15
    strengths.append("✅ Contains uppercase letters")
else:
    issues.append("❌ Add at least one uppercase letter (A-Z)")

# Check 5: Contains lowercase letters
has_lower = any(char.islower() for char in password)
if has_lower:
    security_score += 15
    strengths.append("✅ Contains lowercase letters")
else:
    issues.append("❌ Add at least one lowercase letter (a-z)")

# Bonus: Check for common patterns
if not any(common in password.lower() for common in ["password", "123456", "qwerty", "admin"]):
    security_score += 5
    strengths.append("✅ Avoids common patterns")

# Determine security level
if security_score >= 90:
    level = "🟢 EXCELLENT"
    level_description = "Your password is very secure!"
elif security_score >= 70:
    level = "🟡 GOOD"
    level_description = "Your password is reasonably secure."
elif security_score >= 50:
    level = "🟠 FAIR"
    level_description = "Your password needs improvement."
else:
    level = "🔴 WEAK"
    level_description = "Your password is not secure enough."

# Display results
print("\\n📊 SECURITY ANALYSIS RESULTS")
print("=" * 40)
print(f"Security Score: {security_score}/100")
print(f"Security Level: {level}")
print(f"Assessment: {level_description}")

if strengths:
    print("\\n💪 STRENGTHS:")
    for strength in strengths:
        print(f"  {strength}")

if issues:
    print("\\n⚠️  IMPROVEMENTS NEEDED:")
    for issue in issues:
        print(f"  {issue}")

# Provide specific recommendations
print("\\n🛡️  SECURITY TIPS:")
if len(password) < 12:
    print("  • Use at least 12 characters for better security")
if not has_number:
    print("  • Include numbers (e.g., replace 'o' with '0')")
if not has_special:
    print("  • Add special characters (e.g., ! @ # $ % ^ & *)")
if not has_upper or not has_lower:
    print("  • Mix uppercase and lowercase letters")

print("  • Avoid personal information (names, birthdays)")
print("  • Don't reuse passwords across multiple sites")
print("  • Consider using a password manager")

print("\\n" + "=" * 40)
print("🔐 Stay secure online!")`,
    challenges: {
      ht: [
        "Ajoute yon fonksyon pou jenere modpas solid otomatikman",
        "Kreye yon sistèm ki sonje modpas yo ki teste deja",
        "Ajoute tchèk pou modpas ki komen yo (kòm '123456', 'password')",
        "Kreye yon estimatè tan ki ta bezwen pou crack modpas la",
        "Ajoute yon fonksyonalite pou konpare ak modpas ki deja egziste yo"
      ],
      fr: [
        "Ajouter une fonction pour générer automatiquement des mots de passe forts",
        "Créer un système qui se souvient des mots de passe déjà testés",
        "Ajouter une vérification pour les mots de passe communs (comme '123456', 'password')",
        "Créer un estimateur de temps qu'il faudrait pour cracker le mot de passe",
        "Ajouter une fonctionnalité pour comparer avec des mots de passe existants"
      ],
      en: [
        "Add a function to automatically generate strong passwords",
        "Create a system that remembers previously tested passwords",
        "Add checking for common passwords (like '123456', 'password')",
        "Create a time estimator for how long it would take to crack the password",
        "Add functionality to compare against existing passwords"
      ]
    }
  }
};