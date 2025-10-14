export interface LessonContent {
  id: string;
  order: number;
  titleHt: string;
  titleFr: string;
  duration: number; // in minutes
  objectives: {
    ht: string[];
    fr: string[];
  };
  warmupPhrases: {
    english: string;
    ht: string;
    fr: string;
  }[];
  roleplayScenes: {
    characterA: string;
    characterB: string;
    dialogue: {
      speaker: 'A' | 'B';
      english: string;
      ht: string;
      fr: string;
    }[];
  }[];
  keyPhrases: {
    english: string;
    ht: string;
    fr: string;
    pronunciation?: string;
  }[];
  pronunciationTips: {
    word: string;
    syllables: string;
    tips: {
      ht: string;
      fr: string;
    };
  }[];
  drillExercises: {
    english: string;
    ht: string;
    fr: string;
  }[];
  quiz: {
    question: {
      ht: string;
      fr: string;
    };
    options: {
      ht: string;
      fr: string;
    }[];
    correctAnswer: number;
    explanation: {
      ht: string;
      fr: string;
    };
  }[];
  recap: {
    ht: string[];
    fr: string[];
  };
  homework: {
    ht: string;
    fr: string;
  };
  nextLessonTeaser: {
    ht: string;
    fr: string;
  };
}

export const englishInterpretationCourse: LessonContent[] = [
  {
    id: 'lesson-1',
    order: 1,
    titleHt: 'Entwodiksyon ak Salitasyon',
    titleFr: 'Introduction et Salutations',
    duration: 30,
    objectives: {
      ht: [
        'Di bonjou nan diferan fason',
        'Prezante tèt ou rapid',
        'Poze 2-3 kesyon debaz',
        'Konnen entonasyon ki bon an'
      ],
      fr: [
        'Dire bonjour de plusieurs façons',
        'Se présenter rapidement',
        'Poser 2-3 questions de base',
        'Maîtriser la bonne intonation'
      ]
    },
    warmupPhrases: [
      {
        english: 'Hello! Nice to meet you.',
        ht: 'Bonjou! Mwen kontan rankontre w.',
        fr: 'Bonjour ! Enchanté(e) de vous rencontrer.'
      },
      {
        english: 'Good morning! How are you?',
        ht: 'Bon maten! Kijan ou ye?',
        fr: 'Bonjour ! Comment allez-vous ?'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Marie (Interpreter)',
        characterB: 'Daniel (Client)',
        dialogue: [
          {
            speaker: 'A',
            english: 'Good morning! I\'m Marie. What\'s your name?',
            ht: 'Bon maten! Mwen se Marie. Kijan yo rele w?',
            fr: 'Bonjour ! Je m\'appelle Marie. Comment vous appelez-vous ?'
          },
          {
            speaker: 'B',
            english: 'I\'m Daniel. Nice to meet you, Marie.',
            ht: 'Mwen se Daniel. Mwen kontan rankontre w, Marie.',
            fr: 'Je suis Daniel. Ravi de vous rencontrer, Marie.'
          },
          {
            speaker: 'A',
            english: 'How can I help you today?',
            ht: 'Kijan m ka ede w jodi a?',
            fr: 'Comment puis-je vous aider aujourd\'hui ?'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'Good morning',
        ht: 'Bon maten',
        fr: 'Bonjour',
        pronunciation: 'gud MOR-ning'
      },
      {
        english: 'Good afternoon',
        ht: 'Bon apremidi',
        fr: 'Bonne après-midi',
        pronunciation: 'gud af-ter-NOON'
      },
      {
        english: 'Good evening',
        ht: 'Bon swa',
        fr: 'Bonsoir',
        pronunciation: 'gud EEV-ning'
      },
      {
        english: 'My name is...',
        ht: 'Non mwen se...',
        fr: 'Je m\'appelle...',
        pronunciation: 'mai NAYM iz'
      },
      {
        english: 'Nice to meet you',
        ht: 'Mwen kontan rankontre w',
        fr: 'Enchanté(e) de vous rencontrer',
        pronunciation: 'nais tu MEET yu'
      }
    ],
    pronunciationTips: [
      {
        word: 'morning',
        syllables: 'MOR-ning',
        tips: {
          ht: 'Aksan sou premye silab la - MOR',
          fr: 'Accent sur la première syllabe - MOR'
        }
      },
      {
        word: 'afternoon',
        syllables: 'af-ter-NOON',
        tips: {
          ht: 'Aksan sou dènye silab la - NOON',
          fr: 'Accent sur la dernière syllabe - NOON'
        }
      }
    ],
    drillExercises: [
      {
        english: 'Hello, I\'m...',
        ht: 'Bonjou, mwen se...',
        fr: 'Bonjour, je suis...'
      },
      {
        english: 'What\'s your name?',
        ht: 'Kijan yo rele w?',
        fr: 'Comment vous appelez-vous ?'
      },
      {
        english: 'Nice to meet you',
        ht: 'Mwen kontan rankontre w',
        fr: 'Enchanté(e) de vous rencontrer'
      },
      {
        english: 'Good morning!',
        ht: 'Bon maten!',
        fr: 'Bonjour !'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Kilès nan sa yo ki yon salitasyon?',
          fr: 'Laquelle de ces expressions est une salutation ?'
        },
        options: [
          { ht: 'Good night', fr: 'Good night' },
          { ht: 'Nice to meet you', fr: 'Nice to meet you' },
          { ht: 'Good morning', fr: 'Good morning' }
        ],
        correctAnswer: 2,
        explanation: {
          ht: '"Good morning" se yon salitasyon pou maten an',
          fr: '"Good morning" est une salutation du matin'
        }
      }
    ],
    recap: {
      ht: [
        '4 salitasyon kle yo aprann',
        'Prezantasyon kout ak "My name is..."',
        'Entonasyon natirèl ak aksan bon jan',
        'Konekte ak kliyan yo ak yon souri'
      ],
      fr: [
        '4 salutations clés apprises',
        'Présentation courte avec "My name is..."',
        'Intonation naturelle et bon accent',
        'Se connecter avec les clients avec le sourire'
      ]
    },
    homework: {
      ht: 'Ekri 4 liy prezantasyon ak enrejistre yo nan yon nòt vokale',
      fr: 'Écrivez 4 lignes de présentation et enregistrez-les dans une note vocale'
    },
    nextLessonTeaser: {
      ht: 'Nan pwochen leson an: Small talk ak kliyan yo',
      fr: 'Prochaine leçon : Conversation informelle avec les clients'
    }
  },
  
  {
    id: 'lesson-2',
    order: 2,
    titleHt: 'Small Talk ak Kliyan',
    titleFr: 'Small Talk avec un Client',
    duration: 30,
    objectives: {
      ht: [
        'Aprann kesyon debaz pou konvèsasyon',
        'Reponn ak konfyans',
        'Fè yon anviwonman konfo',
        'Kontwole kadens konvèsasyon an'
      ],
      fr: [
        'Apprendre les questions de base pour converser',
        'Répondre avec confiance',
        'Créer un environnement confortable',
        'Contrôler le rythme de conversation'
      ]
    },
    warmupPhrases: [
      {
        english: 'Where are you from?',
        ht: 'Ki kote w soti?',
        fr: 'D\'où venez-vous ?'
      },
      {
        english: 'How are you?',
        ht: 'Kijan ou ye?',
        fr: 'Comment allez-vous ?'
      },
      {
        english: 'How can I help you?',
        ht: 'Kijan m ka ede w?',
        fr: 'Comment puis-je vous aider ?'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Interpreter',
        characterB: 'Foreign Client',
        dialogue: [
          {
            speaker: 'A',
            english: 'Good morning! How are you today?',
            ht: 'Bon maten! Kijan ou ye jodi a?',
            fr: 'Bonjour ! Comment allez-vous aujourd\'hui ?'
          },
          {
            speaker: 'B',
            english: 'I\'m fine, thank you. And you?',
            ht: 'Mwen byen, mèsi. E w menm?',
            fr: 'Ça va bien, merci. Et vous ?'
          },
          {
            speaker: 'A',
            english: 'I\'m great. Where are you from?',
            ht: 'Mwen byen nèt. Ki kote w soti?',
            fr: 'Je vais très bien. D\'où venez-vous ?'
          },
          {
            speaker: 'B',
            english: 'I\'m from Canada.',
            ht: 'Mwen soti nan Kanada.',
            fr: 'Je viens du Canada.'
          },
          {
            speaker: 'A',
            english: 'How can I help you today?',
            ht: 'Kijan m ka ede w jodi a?',
            fr: 'Comment puis-je vous aider aujourd\'hui ?'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'How are you?',
        ht: 'Kijan ou ye?',
        fr: 'Comment allez-vous ?',
        pronunciation: 'haw ar YU'
      },
      {
        english: 'I\'m fine, thank you',
        ht: 'Mwen byen, mèsi',
        fr: 'Ça va bien, merci',
        pronunciation: 'aim FAIN thangk YU'
      },
      {
        english: 'Where are you from?',
        ht: 'Ki kote w soti?',
        fr: 'D\'où venez-vous ?',
        pronunciation: 'wer ar YU from'
      },
      {
        english: 'How can I help you?',
        ht: 'Kijan m ka ede w?',
        fr: 'Comment puis-je vous aider ?',
        pronunciation: 'haw kan ai HELP yu'
      }
    ],
    pronunciationTips: [
      {
        word: 'Where are you from',
        syllables: 'wer-ar-yu-FROM',
        tips: {
          ht: 'Aksan sou "FROM" ak "r" ki woule',
          fr: 'Accent sur "FROM" avec le "r" roulé'
        }
      }
    ],
    drillExercises: [
      {
        english: 'How are you?',
        ht: 'Kijan ou ye?',
        fr: 'Comment allez-vous ?'
      },
      {
        english: 'Where are you from?',
        ht: 'Ki kote w soti?',
        fr: 'D\'où venez-vous ?'
      },
      {
        english: 'How can I help you?',
        ht: 'Kijan m ka ede w?',
        fr: 'Comment puis-je vous aider ?'
      }
    ],
    quiz: [
      {
        question: {
          ht: '"Where are you from?" vle di kisa?',
          fr: 'Que signifie "Where are you from?" ?'
        },
        options: [
          { ht: 'Ki laj ou?', fr: 'Quel âge avez-vous ?' },
          { ht: 'Ki kote w soti?', fr: 'D\'où venez-vous ?' },
          { ht: 'Kisa ou vle?', fr: 'Que voulez-vous ?' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"Where are you from?" mande kote yon moun soti',
          fr: '"Where are you from?" demande d\'où vient une personne'
        }
      }
    ],
    recap: {
      ht: [
        '3 fraz kle pou small talk',
        'Entonasyon natirèl ak dous',
        'Kòmanse konvèsasyon ak konfyans',
        'Kreye yon atmosfè konfò'
      ],
      fr: [
        '3 phrases clés pour la conversation',
        'Intonation naturelle et douce',
        'Commencer une conversation avec confiance',
        'Créer une atmosphère confortable'
      ]
    },
    homework: {
      ht: 'Pratike 3 kesyon yo ak yon zanmi ak anrejistre repons yo',
      fr: 'Pratiquer les 3 questions avec un ami et enregistrer les réponses'
    },
    nextLessonTeaser: {
      ht: 'Pwochen leson: Ekspresyon politès ak kominikasyon pwofesyonèl',
      fr: 'Prochaine leçon : Expressions de politesse et communication professionnelle'
    }
  },
  
  // Lesson 5 - Professional Vocabulary 1
  {
    id: 'lesson-5',
    order: 5,
    titleHt: 'Vokabilè Pwofesyonèl 1',
    titleFr: 'Vocabulaire Professionnel 1',
    duration: 45,
    objectives: {
      ht: [
        'Aprann mo ak fraz yo itilize nan randevou',
        'Konprann dokiman ak fòm yo',
        'Jere enfòmasyon yo ak sekirite',
        'Kominik ak klète nan sèvis'
      ],
      fr: [
        'Apprendre les mots et phrases utilisés dans les rendez-vous',
        'Comprendre les documents et formulaires',
        'Gérer les informations en sécurité',
        'Communiquer clairement dans les services'
      ]
    },
    warmupPhrases: [
      {
        english: 'appointment',
        ht: 'randevou',
        fr: 'rendez-vous'
      },
      {
        english: 'form',
        ht: 'fòm',
        fr: 'formulaire'
      },
      {
        english: 'ID / identification',
        ht: 'kat idantite',
        fr: 'pièce d\'identité'
      },
      {
        english: 'address',
        ht: 'adrès',
        fr: 'adresse'
      },
      {
        english: 'schedule',
        ht: 'orè / pwogram',
        fr: 'planning / horaire'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Receptionist',
        characterB: 'Client',
        dialogue: [
          {
            speaker: 'A',
            english: 'Good afternoon! Do you have an appointment?',
            ht: 'Bon apremidi! Eske w gen yon randevou?',
            fr: 'Bonjour ! Avez-vous un rendez-vous ?'
          },
          {
            speaker: 'B',
            english: 'Yes, at 2 PM. Here is my ID.',
            ht: 'Wi, nan 2è apremidi. Men kat idantite mwen.',
            fr: 'Oui, à 14h. Voici ma pièce d\'identité.'
          },
          {
            speaker: 'A',
            english: 'Please fill out this form with your address.',
            ht: 'Tanpri ranpli fòm sa a ak adrès ou.',
            fr: 'Veuillez remplir ce formulaire avec votre adresse.'
          },
          {
            speaker: 'B',
            english: 'Where do I sign?',
            ht: 'Ki kote m dwe siyen?',
            fr: 'Où dois-je signer ?'
          },
          {
            speaker: 'A',
            english: 'Sign here, please.',
            ht: 'Siyen la a, tanpri.',
            fr: 'Signez ici, s\'il vous plaît.'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'Do you have an appointment?',
        ht: 'Eske w gen yon randevou?',
        fr: 'Avez-vous un rendez-vous ?',
        pronunciation: 'du yu hav an a-POINT-ment'
      },
      {
        english: 'Please fill out this form',
        ht: 'Tanpri ranpli fòm sa a',
        fr: 'Veuillez remplir ce formulaire',
        pronunciation: 'pliiz FIL awt dhis FORM'
      },
      {
        english: 'What is your address?',
        ht: 'Ki adrès ou?',
        fr: 'Quelle est votre adresse ?',
        pronunciation: 'wat iz yor a-DRES'
      },
      {
        english: 'Here is my ID',
        ht: 'Men kat idantite mwen',
        fr: 'Voici ma pièce d\'identité',
        pronunciation: 'hir iz mai AI-di'
      },
      {
        english: 'Sign here, please',
        ht: 'Siyen la a, tanpri',
        fr: 'Signez ici, s\'il vous plaît',
        pronunciation: 'sain HIR pliiz'
      }
    ],
    pronunciationTips: [
      {
        word: 'appointment',
        syllables: 'a-POINT-ment',
        tips: {
          ht: 'Aksan sou silab nan mitan an - POINT',
          fr: 'Accent sur la syllabe du milieu - POINT'
        }
      },
      {
        word: 'address',
        syllables: 'a-DRES',
        tips: {
          ht: 'Aksan sou dezyèm silab la - DRES',
          fr: 'Accent sur la deuxième syllabe - DRES'
        }
      }
    ],
    drillExercises: [
      {
        english: 'Do you have an appointment?',
        ht: 'Eske w gen yon randevou?',
        fr: 'Avez-vous un rendez-vous ?'
      },
      {
        english: 'Please fill out this form',
        ht: 'Tanpri ranpli fòm sa a',
        fr: 'Veuillez remplir ce formulaire'
      },
      {
        english: 'Sign here, please',
        ht: 'Siyen la a, tanpri',
        fr: 'Signez ici, s\'il vous plaît'
      }
    ],
    quiz: [
      {
        question: {
          ht: '"Please fill out this form" vle di kisa?',
          fr: 'Que signifie "Please fill out this form" ?'
        },
        options: [
          { ht: 'Siyen la a', fr: 'Signez ici' },
          { ht: 'Ranpli fòm nan', fr: 'Remplissez le formulaire' },
          { ht: 'Tcheke lè a', fr: 'Vérifiez l\'heure' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"Fill out" vle di ranpli ak enfòmasyon yo',
          fr: '"Fill out" signifie remplir avec des informations'
        }
      }
    ],
    recap: {
      ht: [
        '5 mo kle nan vokabilè pwofesyonèl',
        '4 fraz esansyèl pou randevou',
        'Pratik ak dokiman ak fòm yo',
        'Konimikasyon klè ak respè'
      ],
      fr: [
        '5 mots clés du vocabulaire professionnel',
        '4 phrases essentielles pour les rendez-vous',
        'Pratique avec documents et formulaires',
        'Communication claire et respectueuse'
      ]
    },
    homework: {
      ht: 'Anrejistre w k ap li 5 fraz yo ak pwononsye yo kòrèkteman',
      fr: 'Enregistrez-vous en lisant les 5 phrases avec la bonne prononciation'
    },
    nextLessonTeaser: {
      ht: 'Pwochen leson: Vokabilè pwofesyonèl 2 - Sèvis ak kliyen',
      fr: 'Prochaine leçon : Vocabulaire professionnel 2 - Services et clients'
    }
  }
];