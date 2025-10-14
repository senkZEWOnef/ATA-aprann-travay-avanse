// Comprehensive lesson content with substantial learning material
export interface ComprehensiveLessonContent {
  id: string;
  order: number;
  titleHt: string;
  titleFr: string;
  estimatedDuration: number; // in minutes
  description: {
    ht: string;
    fr: string;
  };
  
  // Pre-lesson preparation (5-10 mins)
  preparation: {
    readingPassage: {
      titleHt: string;
      titleFr: string;
      contentHt: string;
      contentFr: string;
      audioUrl?: string;
    };
    vocabulary: Array<{
      english: string;
      ht: string;
      fr: string;
      pronunciation: string;
      definition: {
        ht: string;
        fr: string;
      };
      exampleSentence: {
        english: string;
        ht: string;
        fr: string;
      };
      difficulty: 'basic' | 'intermediate' | 'advanced';
    }>;
  };
  
  // Main lesson content (15-25 mins)
  mainContent: {
    listeningExercises: Array<{
      audioUrl: string;
      transcriptHt: string;
      transcriptFr: string;
      questions: Array<{
        questionHt: string;
        questionFr: string;
        options: Array<{
          ht: string;
          fr: string;
        }>;
        correctAnswer: number;
        explanation: {
          ht: string;
          fr: string;
        };
      }>;
    }>;
    
    roleplayScenarios: Array<{
      title: {
        ht: string;
        fr: string;
      };
      context: {
        ht: string;
        fr: string;
      };
      participants: string[];
      dialogue: Array<{
        speaker: string;
        english: string;
        ht: string;
        fr: string;
        notes?: {
          ht: string;
          fr: string;
        };
      }>;
      practiceActivities: Array<{
        instructionHt: string;
        instructionFr: string;
        type: 'repetition' | 'substitution' | 'completion' | 'translation';
      }>;
    }>;
    
    grammarFocus: {
      topic: {
        ht: string;
        fr: string;
      };
      explanation: {
        ht: string;
        fr: string;
      };
      examples: Array<{
        english: string;
        ht: string;
        fr: string;
        explanation: {
          ht: string;
          fr: string;
        };
      }>;
      exercises: Array<{
        questionHt: string;
        questionFr: string;
        correctAnswer: string;
        explanation: {
          ht: string;
          fr: string;
        };
      }>;
    };
  };
  
  // Practice activities (10-15 mins)
  practiceActivities: {
    speakingExercises: Array<{
      instructionHt: string;
      instructionFr: string;
      prompts: Array<{
        english: string;
        ht: string;
        fr: string;
      }>;
      targetResponse: {
        english: string;
        ht: string;
        fr: string;
      };
    }>;
    
    writingExercises: Array<{
      instructionHt: string;
      instructionFr: string;
      prompt: {
        ht: string;
        fr: string;
      };
      sampleAnswer: {
        english: string;
        ht: string;
        fr: string;
      };
    }>;
    
    interactiveActivities: Array<{
      type: 'drag-drop' | 'matching' | 'fill-blanks' | 'sequence';
      instructionHt: string;
      instructionFr: string;
      items: any[]; // Specific structure depends on activity type
    }>;
  };
  
  // Assessment (5-10 mins)
  assessment: {
    quiz: Array<{
      questionHt: string;
      questionFr: string;
      type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'audio-response';
      options?: Array<{
        ht: string;
        fr: string;
      }>;
      correctAnswer: string | number;
      explanation: {
        ht: string;
        fr: string;
      };
      points: number;
    }>;
    
    practicalTask: {
      instructionHt: string;
      instructionFr: string;
      scenario: {
        ht: string;
        fr: string;
      };
      evaluation: {
        criteria: Array<{
          ht: string;
          fr: string;
          points: number;
        }>;
      };
    };
  };
  
  // Homework and extension (ongoing)
  homework: {
    dailyPractice: Array<{
      day: number;
      taskHt: string;
      taskFr: string;
      estimatedTime: number;
    }>;
    
    realWorldApplication: {
      taskHt: string;
      taskFr: string;
      submissionFormat: string;
    };
  };
  
  // Resources
  resources: {
    additionalReadings: Array<{
      titleHt: string;
      titleFr: string;
      url?: string;
      contentHt?: string;
      contentFr?: string;
    }>;
    
    toolsAndApps: Array<{
      name: string;
      descriptionHt: string;
      descriptionFr: string;
      url?: string;
    }>;
    
    culturalNotes: {
      ht: string;
      fr: string;
    };
  };
}

// LESSON 1: COMPREHENSIVE INTRODUCTION AND GREETINGS
export const lesson1Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-1-comprehensive',
  order: 1,
  titleHt: 'Entwodiksyon ak Salitasyon nan Travay',
  titleFr: 'Introduction et Salutations Professionnelles',
  estimatedDuration: 45,
  description: {
    ht: 'Nan leson sa a, ou ap aprann ak pratike tout fason yo pou w salue ak prezante tèt ou nan anviwonman travay yo. Ou ap tande ak repete konvèsasyon yo, aprann mo nouvo yo, ak jwe wòl nan sitiyasyon reyèl yo.',
    fr: 'Dans cette leçon, vous apprendrez et pratiquerez toutes les façons de saluer et de vous présenter dans des environnements professionnels. Vous écouterez et répéterez des conversations, apprendrez de nouveaux mots, et jouerez des rôles dans des situations réelles.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Premye Jou nan Biwo a',
      titleFr: 'Premier Jour au Bureau',
      contentHt: 'Marie se yon jenn fi ki gen 24 an. Jodi a se premye jou li nan travay nouvo li a kòm entèprèt nan yon konpani entènasyonal. Li antre nan biwo a nan 8è nan maten ak li gen yon ti kè bat. Li wè anpil moun ki ap travay epi li pa konnen ki jan pou l kòmanse. Finalman, yon madanm ki gen cheveux nwa vini bò kote li ak di: "Bonjou! Ou dwe se Marie. Mwen se Sandra, manadjè a. Byenvni nan ekip la!" Marie santi li pi alèz ak li reponn: "Bonjou Sandra! Mwen kontan rankontre w. Wi, mwen se Marie ak mwen entèdan kòmanse travay la." Apre yo fin salue, Sandra montre li biwo li a ak bay li yon ti tou nan konpani an.',
      contentFr: 'Marie est une jeune femme de 24 ans. Aujourd\'hui c\'est son premier jour dans son nouveau travail comme interprète dans une compagnie internationale. Elle entre dans le bureau à 8h du matin avec le cœur qui bat fort. Elle voit beaucoup de personnes qui travaillent et elle ne sait pas comment commencer. Finalement, une dame aux cheveux noirs vient vers elle et dit: "Bonjour! Vous devez être Marie. Je suis Sandra, la manager. Bienvenue dans l\'équipe!" Marie se sent plus à l\'aise et répond: "Bonjour Sandra! Je suis ravie de vous rencontrer. Oui, je suis Marie et j\'ai hâte de commencer le travail." Après leurs salutations, Sandra lui montre son bureau et lui fait visiter la compagnie.'
    },
    
    vocabulary: [
      {
        english: 'Good morning',
        ht: 'Bon maten',
        fr: 'Bonjour',
        pronunciation: 'gud MOR-ning',
        definition: {
          ht: 'Yon salitasyon ou itilize nan kòmansman jounen an, tipikman avan midi',
          fr: 'Une salutation utilisée au début de la journée, typiquement avant midi'
        },
        exampleSentence: {
          english: 'Good morning, how can I help you today?',
          ht: 'Bon maten, kijan m ka ede w jodi a?',
          fr: 'Bonjour, comment puis-je vous aider aujourd\'hui?'
        },
        difficulty: 'basic'
      },
      {
        english: 'Welcome',
        ht: 'Byenvni',
        fr: 'Bienvenue',
        pronunciation: 'WEL-kam',
        definition: {
          ht: 'Yon ekspresyon pou salue ak aksepte yon moun ki ap rive nan yon kote',
          fr: 'Une expression pour saluer et accueillir une personne qui arrive quelque part'
        },
        exampleSentence: {
          english: 'Welcome to our company!',
          ht: 'Byenvni nan konpani nou an!',
          fr: 'Bienvenue dans notre entreprise!'
        },
        difficulty: 'basic'
      },
      {
        english: 'Nice to meet you',
        ht: 'Mwen kontan rankontre w',
        fr: 'Ravi(e) de vous rencontrer',
        pronunciation: 'nais tu MIIT yu',
        definition: {
          ht: 'Yon ekspresyon ki montre ou kontan lè ou rankontre ak yon moun pou premye fwa',
          fr: 'Une expression qui montre que vous êtes content de rencontrer quelqu\'un pour la première fois'
        },
        exampleSentence: {
          english: 'Nice to meet you, I\'m looking forward to working together.',
          ht: 'Mwen kontan rankontre w, mwen ap tann ak anpil antousyas pou nou travay ansanm.',
          fr: 'Ravi de vous rencontrer, j\'ai hâte de travailler ensemble.'
        },
        difficulty: 'basic'
      },
      {
        english: 'Professional',
        ht: 'Pwofesyonèl',
        fr: 'Professionnel',
        pronunciation: 'prə-FESH-ə-nəl',
        definition: {
          ht: 'Ki gen rapò ak travay oswa biznis; ki fèt nan yon fason ki gen kapasite ak respè',
          fr: 'Qui se rapporte au travail ou aux affaires; qui est fait de manière compétente et respectueuse'
        },
        exampleSentence: {
          english: 'She always maintains a professional attitude at work.',
          ht: 'Li toujou kenbe yon atitid pwofesyonèl nan travay.',
          fr: 'Elle maintient toujours une attitude professionnelle au travail.'
        },
        difficulty: 'intermediate'
      },
      {
        english: 'Interpreter',
        ht: 'Entèprèt',
        fr: 'Interprète',
        pronunciation: 'in-TUR-pri-tər',
        definition: {
          ht: 'Yon moun ki tradui pawòl yo nan yon lang nan yon lòt lang pandan y ap pale',
          fr: 'Une personne qui traduit la parole d\'une langue à une autre pendant qu\'on parle'
        },
        exampleSentence: {
          english: 'The interpreter helped the client understand the contract.',
          ht: 'Entèprèt la ede kliyan an konprann kontra a.',
          fr: 'L\'interprète a aidé le client à comprendre le contrat.'
        },
        difficulty: 'advanced'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [
      {
        audioUrl: '/audio/lesson1/greeting-conversation.mp3', // Would need actual audio
        transcriptHt: 'Receptionist: Bon maten! Byenvni nan Konpani ABC. Kijan m ka ede w? Vizitè: Bon maten! Mwen gen yon randevou ak Msye Johnson nan 9è. Receptionist: Pèfè! Kisa non w ye? Vizitè: Non mwen se Dr. Pierre Laurent. Receptionist: Mèsi Dr. Laurent. Ann mwen tcheke... Wi, mwen wè randevou w la. Msye Johnson ap tann ou nan biwo li a nan dezyèm etaj la.',
        transcriptFr: 'Réceptionniste: Bonjour! Bienvenue à la Compagnie ABC. Comment puis-je vous aider? Visiteur: Bonjour! J\'ai un rendez-vous avec M. Johnson à 9h. Réceptionniste: Parfait! Quel est votre nom? Visiteur: Je suis Dr. Pierre Laurent. Réceptionniste: Merci Dr. Laurent. Laissez-moi vérifier... Oui, je vois votre rendez-vous. M. Johnson vous attend dans son bureau au deuxième étage.',
        questions: [
          {
            questionHt: 'Ki lè randevou Dr. Laurent la ye?',
            questionFr: 'À quelle heure est le rendez-vous du Dr. Laurent?',
            options: [
              { ht: '8è nan maten', fr: '8h du matin' },
              { ht: '9è nan maten', fr: '9h du matin' },
              { ht: '10è nan maten', fr: '10h du matin' }
            ],
            correctAnswer: 1,
            explanation: {
              ht: 'Dr. Laurent di li gen yon randevou ak Msye Johnson nan 9è.',
              fr: 'Dr. Laurent dit qu\'il a un rendez-vous avec M. Johnson à 9h.'
            }
          }
        ]
      }
    ],
    
    roleplayScenarios: [
      {
        title: {
          ht: 'Rankontre ak yon Kliyan Nouvo',
          fr: 'Rencontrer un Nouveau Client'
        },
        context: {
          ht: 'Ou se yon entèprèt ak ou ap tann yon kliyan nouvo nan sal relinyon an. Kliyan an rive ak ou dwe salue li ak prezante tèt ou.',
          fr: 'Vous êtes un interprète et vous attendez un nouveau client dans la salle de réunion. Le client arrive et vous devez le saluer et vous présenter.'
        },
        participants: ['Interpreter', 'Client'],
        dialogue: [
          {
            speaker: 'Interpreter',
            english: 'Good morning! You must be Mr. Rodriguez. Welcome!',
            ht: 'Bon maten! Ou dwe se Msye Rodriguez. Byenvni!',
            fr: 'Bonjour! Vous devez être M. Rodriguez. Bienvenue!',
            notes: {
              ht: 'Kòmanse ak yon salitasyon ki gen chalè ak konfime non kliyan an',
              fr: 'Commencer avec une salutation chaleureuse et confirmer le nom du client'
            }
          },
          {
            speaker: 'Client',
            english: 'Yes, that\'s right. Good morning.',
            ht: 'Wi, se sa menm. Bon maten.',
            fr: 'Oui, c\'est correct. Bonjour.',
            notes: {
              ht: 'Kliyan an konfime ak reponn salitasyon an',
              fr: 'Le client confirme et répond à la salutation'
            }
          }
        ],
        practiceActivities: [
          {
            instructionHt: 'Pratike salitasyon sa a ak yon patnè. Chanje wòl yo.',
            instructionFr: 'Pratiquez cette salutation avec un partenaire. Changez les rôles.',
            type: 'repetition'
          }
        ]
      }
    ],
    
    grammarFocus: {
      topic: {
        ht: 'Fòm Politès ak "Please" ak "Thank you"',
        fr: 'Formules de Politesse avec "Please" et "Thank you"'
      },
      explanation: {
        ht: 'Nan angle, nou itilize "please" lè nou ap mande yon bagay ak "thank you" lè nou vle di mèsi. Sa yo fè konvèsasyon yo pi politès ak pwofesyonèl.',
        fr: 'En anglais, nous utilisons "please" quand nous demandons quelque chose et "thank you" quand nous voulons dire merci. Cela rend les conversations plus polies et professionnelles.'
      },
      examples: [
        {
          english: 'Please have a seat.',
          ht: 'Tanpri chita.',
          fr: 'Veuillez vous asseoir, s\'il vous plaît.',
          explanation: {
            ht: '"Please" nan kòmansman fraz la fè li pi politès',
            fr: '"Please" au début de la phrase la rend plus polie'
          }
        }
      ],
      exercises: [
        {
          questionHt: 'Ki jan ou ta di "Tanpri ban m non w" nan angle?',
          questionFr: 'Comment diriez-vous "Donnez-moi votre nom s\'il vous plaît" en anglais?',
          correctAnswer: 'Please give me your name',
          explanation: {
            ht: 'Nou mete "please" nan kòmansman ak itilize "give me your name"',
            fr: 'Nous mettons "please" au début et utilisons "give me your name"'
          }
        }
      ]
    }
  },
  
  practiceActivities: {
    speakingExercises: [
      {
        instructionHt: 'Li ak repete fraz yo sa yo ak pwononsyasyon ki kòrèk.',
        instructionFr: 'Lisez et répétez ces phrases avec la bonne prononciation.',
        prompts: [
          {
            english: 'Good morning, welcome to our office.',
            ht: 'Bon maten, byenvni nan biwo nou an.',
            fr: 'Bonjour, bienvenue dans notre bureau.'
          }
        ],
        targetResponse: {
          english: 'Good morning, welcome to our office.',
          ht: 'Bon maten, byenvni nan biwo nou an.',
          fr: 'Bonjour, bienvenue dans notre bureau.'
        }
      }
    ],
    
    writingExercises: [
      {
        instructionHt: 'Ekri yon imèl kout pou prezante tèt ou bay yon kliyan nouvo.',
        instructionFr: 'Rédigez un email court pour vous présenter à un nouveau client.',
        prompt: {
          ht: 'Imajine ou ap kòmanse travay ak yon kliyan nouvo ak ou dwe voye yon imèl pou prezante tèt ou.',
          fr: 'Imaginez que vous commencez à travailler avec un nouveau client et vous devez envoyer un email pour vous présenter.'
        },
        sampleAnswer: {
          english: 'Dear Mr. Smith, My name is Marie and I will be your interpreter for the upcoming meetings. I look forward to working with you. Best regards, Marie',
          ht: 'Chè Msye Smith, Non mwen se Marie ak m ap sèvi kòm entèprèt ou nan reyinyon yo ki ap vini yo. Mwen ap tann ak anpil entousyas pou nou travay ansanm. Ak anpil respè, Marie',
          fr: 'Cher M. Smith, Je m\'appelle Marie et je serai votre interprète pour les réunions à venir. J\'ai hâte de travailler avec vous. Cordialement, Marie'
        }
      }
    ],
    
    interactiveActivities: [
      {
        type: 'matching',
        instructionHt: 'Matche salitasyon angle yo ak tradiksyon kreyòl yo.',
        instructionFr: 'Associez les salutations anglaises avec leurs traductions créoles.',
        items: [
          { english: 'Good morning', creole: 'Bon maten' },
          { english: 'Welcome', creole: 'Byenvni' },
          { english: 'Nice to meet you', creole: 'Mwen kontan rankontre w' }
        ]
      }
    ]
  },
  
  assessment: {
    quiz: [
      {
        questionHt: 'Ki salitasyon ki pi pwofesyonèl pou w itilize nan maten an?',
        questionFr: 'Quelle salutation est la plus professionnelle à utiliser le matin?',
        type: 'multiple-choice',
        options: [
          { ht: 'Hey!', fr: 'Hey!' },
          { ht: 'Bon maten', fr: 'Good morning' },
          { ht: 'Yo!', fr: 'Yo!' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"Good morning" se salitasyon ki pi pwofesyonèl ak ki pi apwopriye nan anviwonman travay yo.',
          fr: '"Good morning" est la salutation la plus professionnelle et appropriée dans les environnements de travail.'
        },
        points: 5
      }
    ],
    
    practicalTask: {
      instructionHt: 'Jwe wòl nan sitiyasyon sa a: Ou se yon entèprèt ak ou ap aksèy yon kliyan ki ap vini nan premye fwa.',
      instructionFr: 'Jouez le rôle dans cette situation: Vous êtes un interprète et vous accueillez un client qui vient pour la première fois.',
      scenario: {
        ht: 'Yon kliyan nouvo ki rele Dr. Martinez ap antre nan biwo a. Li sanble yon ti jan nervè ak li pa konnen kote pou l ale.',
        fr: 'Un nouveau client appelé Dr. Martinez entre dans le bureau. Il semble un peu nerveux et ne sait pas où aller.'
      },
      evaluation: {
        criteria: [
          { ht: 'Salitasyon apwopriye', fr: 'Salutation appropriée', points: 3 },
          { ht: 'Prezantasyon pwòp', fr: 'Présentation propre', points: 3 },
          { ht: 'Ton pwofesyonèl', fr: 'Ton professionnel', points: 2 },
          { ht: 'Konpòtman ki bay konfyans', fr: 'Comportement rassurant', points: 2 }
        ]
      }
    }
  },
  
  homework: {
    dailyPractice: [
      {
        day: 1,
        taskHt: 'Pratike salitasyon yo ak 3 moun diferan jodi a.',
        taskFr: 'Pratiquez les salutations avec 3 personnes différentes aujourd\'hui.',
        estimatedTime: 10
      },
      {
        day: 2,
        taskHt: 'Anrejistre tèt ou k ap di 5 salitasyon nan angle.',
        taskFr: 'Enregistrez-vous en disant 5 salutations en anglais.',
        estimatedTime: 15
      }
    ],
    
    realWorldApplication: {
      taskHt: 'Ale nan yon kote kote yo pale angle (hotel, restoran, oswa biwo) ak pratike salitasyon yo. Ekri yon rapò kout sou ekspèans ou.',
      taskFr: 'Allez dans un endroit où on parle anglais (hôtel, restaurant, ou bureau) et pratiquez les salutations. Rédigez un court rapport sur votre expérience.',
      submissionFormat: 'Written report (200 words max)'
    }
  },
  
  resources: {
    additionalReadings: [
      {
        titleHt: 'Kiltri Biznis Ameriken',
        titleFr: 'Culture d\'Affaires Américaine',
        contentHt: 'Nan Ameriken an, moun yo gen tandans yo salue ak yon souri ak yo kenbe kontak ak je yo...',
        contentFr: 'Aux États-Unis, les gens ont tendance à saluer avec un sourire et à maintenir le contact visuel...'
      }
    ],
    
    toolsAndApps: [
      {
        name: 'Pronunciation App',
        descriptionHt: 'Yon aplikasyon pou ede w pratike pwononsyasyon angle yo.',
        descriptionFr: 'Une application pour vous aider à pratiquer la prononciation anglaise.',
        url: 'https://example.com/pronunciation-app'
      }
    ],
    
    culturalNotes: {
      ht: 'Nan kiltri Ameriken ak Kanaden, yo konsidere li enpòtan pou w gade moun nan nan je yo lè w ap salue yo. Sa montre respè ak entèrè.',
      fr: 'Dans la culture américaine et canadienne, il est considéré important de regarder la personne dans les yeux quand vous la saluez. Cela montre le respect et l\'intérêt.'
    }
  }
};

// LESSON 2: WORK VOCABULARY AND OFFICE TERMINOLOGY  
export const lesson2Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-2-comprehensive',
  order: 2,
  titleHt: 'Vokabilè Travay ak Tèm Biwo yo',
  titleFr: 'Vocabulaire de Travail et Terminologie de Bureau',
  estimatedDuration: 50,
  description: {
    ht: 'Nan leson sa a, ou ap aprann tout mo ak ekspresyon yo ki enpòtan nan anviwonman travay yo. Ou ap konnen kijan pou w pale sou zouti yo, mèb yo, ak aksyon yo nan biwo a.',
    fr: 'Dans cette leçon, vous apprendrez tous les mots et expressions importants dans les environnements de travail. Vous saurez comment parler des outils, meubles, et actions au bureau.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Yon Jou nan Biwo Konpani ABC',
      titleFr: 'Une Journée au Bureau de la Compagnie ABC',
      contentHt: 'Alex se yon nouvo anplwaye nan depatman kominikasyon konpani ABC. Lè li rive nan travay nan 8:30, li ale nan estasyon travay li a ak kòmanse òdinatè li a. Li gen yon biwo ki gen yon tab gran ak yon chèz konfortab. Sou tab la, li gen yon òdinatè, yon telefòn, ak anpil dokiman yo. Li ouvri imèl li yo ak li wè li gen 15 mesaj nouvo. Premye travay li fè a se li revize yon prezantasyon pou yon reyinyon ki gen pou l fèt apre midi a. Li ale nan imprimant lan pou l enprime 20 kopi nan dokiman an ak li mete yo nan yon dosye. Nan 10:30, li ale nan sal konferans lan pou yon reyinyon ak ekip la.',
      contentFr: 'Alex est un nouvel employé du département communication de la compagnie ABC. Quand il arrive au travail à 8:30, il va à son poste de travail et démarre son ordinateur. Il a un bureau avec une grande table et une chaise confortable. Sur la table, il a un ordinateur, un téléphone, et beaucoup de documents. Il ouvre ses emails et voit qu\'il a 15 nouveaux messages. Son premier travail est de réviser une présentation pour une réunion cet après-midi. Il va à l\'imprimante pour imprimer 20 copies du document et les met dans un dossier. À 10:30, il va dans la salle de conférence pour une réunion avec l\'équipe.'
    },
    
    vocabulary: [
      {
        english: 'Computer',
        ht: 'Òdinatè',
        fr: 'Ordinateur',
        pronunciation: 'kəm-PYOO-tər',
        definition: {
          ht: 'Yon machin elektwonik ki ka kalkile ak estoke enfòmasyon yo',
          fr: 'Une machine électronique qui peut calculer et stocker des informations'
        },
        exampleSentence: {
          english: 'I need to restart my computer because it\'s running slowly.',
          ht: 'Mwen bezwen rekòmanse òdinatè mwen an paske l ap fonksyone dousman.',
          fr: 'Je dois redémarrer mon ordinateur car il fonctionne lentement.'
        },
        difficulty: 'basic'
      },
      {
        english: 'Deadline',
        ht: 'Delè limit',
        fr: 'Date limite',
        pronunciation: 'DED-line',
        definition: {
          ht: 'Dat oswa lè yo dwe fini yon travay oswa pwojè',
          fr: 'Date ou heure à laquelle un travail ou projet doit être terminé'
        },
        exampleSentence: {
          english: 'The deadline for this project is next Friday.',
          ht: 'Delè limit pwojè sa a se vendredi prochèn.',
          fr: 'La date limite pour ce projet est vendredi prochain.'
        },
        difficulty: 'intermediate'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [
      {
        audioUrl: '/audio/lesson2/office-tour.mp3',
        transcriptHt: 'Manadjè: Bon, kounye a ann nou ale nan depo founitr yo. Nan kote sa a nou gen tout bagay nou bezwen yo pou biwo yo.',
        transcriptFr: 'Manager: Bon, maintenant allons au dépôt de fournitures. Ici nous avons tout ce dont nous avons besoin pour les bureaux.',
        questions: []
      }
    ],
    
    roleplayScenarios: [
      {
        title: {
          ht: 'Mande Founitr Biwo',
          fr: 'Demander des Fournitures de Bureau'
        },
        context: {
          ht: 'Ou bezwen kèk founitr pou travay ou ak ou dwe mande depo fournitr la.',
          fr: 'Vous avez besoin de quelques fournitures pour votre travail et vous devez demander au dépôt des fournitures.'
        },
        participants: ['Employee', 'Supply Manager'],
        dialogue: [],
        practiceActivities: []
      }
    ],
    
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon ak "I need" ak "I would like"',
        fr: 'Expressions avec "I need" et "I would like"'
      },
      explanation: {
        ht: '"I need" yo itilize lè bagay la enpòtan ak nesesè. "I would like" yo itilize lè ou vle bagay la men li pa ta pi enpòtan.',
        fr: '"I need" s\'utilise quand la chose est importante et nécessaire. "I would like" s\'utilise quand vous voulez la chose mais elle n\'est pas si importante.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: {
    speakingExercises: [],
    writingExercises: [],
    interactiveActivities: []
  },
  
  assessment: {
    quiz: [],
    practicalTask: {
      instructionHt: 'Organise yon nouvo espas travay ak eksplike chwa ou yo.',
      instructionFr: 'Organisez un nouvel espace de travail et expliquez vos choix.',
      scenario: {
        ht: 'Ou gen yon nouvo biwo ak ou dwe deside kote pou w mete chak bagay.',
        fr: 'Vous avez un nouveau bureau et vous devez décider où placer chaque chose.'
      },
      evaluation: {
        criteria: []
      }
    }
  },
  
  homework: {
    dailyPractice: [],
    realWorldApplication: {
      taskHt: 'Vizite yon magazin founitr biwo ak fè yon lis ak pri yo nan angle.',
      taskFr: 'Visitez un magasin de fournitures de bureau et faites une liste des prix en anglais.',
      submissionFormat: 'Price list with English terms (minimum 15 items)'
    }
  },
  
  resources: {
    additionalReadings: [],
    toolsAndApps: [],
    culturalNotes: {
      ht: 'Nan biwo Ameriken yo, moun yo pa renmen bagay yo ki pa òganize.',
      fr: 'Dans les bureaux américains, les gens n\'aiment pas les choses désorganisées.'
    }
  }
};