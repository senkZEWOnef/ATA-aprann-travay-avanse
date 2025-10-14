// Updated course content with 8 comprehensive lessons - v2.0
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
    duration: 35,
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
      },
      {
        english: 'How do you do?',
        ht: 'Kijan ou ye?',
        fr: 'Comment allez-vous?',
        pronunciation: 'haw du yu DU'
      },
      {
        english: 'Welcome to our office',
        ht: 'Byenvni nan biwo nou an',
        fr: 'Bienvenue dans notre bureau',
        pronunciation: 'WEL-kam tu awr OF-is'
      },
      {
        english: 'Please have a seat',
        ht: 'Tanpri chita',
        fr: 'Veuillez vous asseoir',
        pronunciation: 'pliiz hav ə SIIT'
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
    duration: 35,
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
        english: 'How are you today?',
        ht: 'Kijan ou ye jodi a?',
        fr: 'Comment allez-vous aujourd\'hui ?',
        pronunciation: 'haw ar yu tu-DAY'
      },
      {
        english: 'What brings you here?',
        ht: 'Kisa ki mennen w isit la?',
        fr: 'Qu\'est-ce qui vous amène ici ?',
        pronunciation: 'wat BRINGS yu HIR'
      },
      {
        english: 'Have you been waiting long?',
        ht: 'Eske w rete ap tann lontan?',
        fr: 'Attendez-vous depuis longtemps ?',
        pronunciation: 'hav yu bin WAY-ting LONG'
      },
      {
        english: 'The weather is nice today',
        ht: 'Tan an bon jodi a',
        fr: 'Il fait beau aujourd\'hui',
        pronunciation: 'dhə WE-dhər iz NAIS tu-day'
      },
      {
        english: 'How was your weekend?',
        ht: 'Kijan wikèn ou te ye?',
        fr: 'Comment s\'est passé votre week-end ?',
        pronunciation: 'haw waz yur WIIK-end'
      },
      {
        english: 'Are you familiar with this area?',
        ht: 'Eske w konnen kote sa a?',
        fr: 'Connaissez-vous ce quartier ?',
        pronunciation: 'ar yu fə-MIL-yər with dhis ER-i-ə'
      },
      {
        english: 'Let me show you the way',
        ht: 'Ann mwen montre w chemen an',
        fr: 'Laissez-moi vous montrer le chemin',
        pronunciation: 'let mi SHOU yu dhə WAY'
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
  
  // Lesson 3 - Politeness and Professional Communication
  {
    id: 'lesson-3',
    order: 3,
    titleHt: 'Ekspresyon Politès ak Kominikasyon Pwofesyonèl',
    titleFr: 'Expressions de Politesse et Communication Professionnelle',
    duration: 40,
    objectives: {
      ht: [
        'Itilize ekspresyon politès yo',
        'Montre respè nan komunikasyon',
        'Jere konfli ak karans yo',
        'Kominik ak mond lan ak konfyans'
      ],
      fr: [
        'Utiliser les expressions de politesse',
        'Montrer du respect dans la communication',
        'Gérer les conflits et malentendus',
        'Communiquer avec confiance avec le monde'
      ]
    },
    warmupPhrases: [
      {
        english: 'Excuse me',
        ht: 'Eskize m',
        fr: 'Excusez-moi'
      },
      {
        english: 'I\'m sorry',
        ht: 'Mwen regrèt',
        fr: 'Je suis désolé(e)'
      },
      {
        english: 'Thank you very much',
        ht: 'Mèsi anpil',
        fr: 'Merci beaucoup'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Professional',
        characterB: 'Client',
        dialogue: [
          {
            speaker: 'A',
            english: 'Excuse me, could you please repeat that?',
            ht: 'Eskize m, eske w ka repete sa a tanpri?',
            fr: 'Excusez-moi, pourriez-vous répéter cela s\'il vous plaît ?'
          },
          {
            speaker: 'B',
            english: 'Of course! I said I need help with my documents.',
            ht: 'Natirèlman! Mwen te di m bezwen èd ak dokiman m yo.',
            fr: 'Bien sûr ! J\'ai dit que j\'ai besoin d\'aide avec mes documents.'
          },
          {
            speaker: 'A',
            english: 'Thank you for clarifying. I\'m happy to help.',
            ht: 'Mèsi pou klète sa a. Mwen kontan ede w.',
            fr: 'Merci pour cette clarification. Je suis ravi(e) de vous aider.'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'Excuse me',
        ht: 'Eskize m',
        fr: 'Excusez-moi',
        pronunciation: 'iks-KYUZ mi'
      },
      {
        english: 'I\'m sorry',
        ht: 'Mwen regrèt',
        fr: 'Je suis désolé(e)',
        pronunciation: 'aim SOR-i'
      },
      {
        english: 'Thank you very much',
        ht: 'Mèsi anpil',
        fr: 'Merci beaucoup',
        pronunciation: 'thangk YU VER-i mach'
      },
      {
        english: 'You\'re welcome',
        ht: 'Pa gen pwoblèm',
        fr: 'De rien',
        pronunciation: 'yor WEL-kam'
      },
      {
        english: 'Could you please...?',
        ht: 'Eske w ka... tanpri?',
        fr: 'Pourriez-vous... s\'il vous plaît ?',
        pronunciation: 'kud yu PLIIZ'
      },
      {
        english: 'I understand',
        ht: 'Mwen konprann',
        fr: 'Je comprends',
        pronunciation: 'ai an-der-STAND'
      }
    ],
    pronunciationTips: [
      {
        word: 'excuse',
        syllables: 'iks-KYUZ',
        tips: {
          ht: 'Aksan sou dezyèm silab la - KYUZ',
          fr: 'Accent sur la deuxième syllabe - KYUZ'
        }
      },
      {
        word: 'understand',
        syllables: 'an-der-STAND',
        tips: {
          ht: 'Aksan sou dènye silab la - STAND',
          fr: 'Accent sur la dernière syllabe - STAND'
        }
      }
    ],
    drillExercises: [
      {
        english: 'Excuse me, could you help me?',
        ht: 'Eskize m, eske w ka ede m?',
        fr: 'Excusez-moi, pourriez-vous m\'aider ?'
      },
      {
        english: 'I\'m sorry for the inconvenience',
        ht: 'Mwen regrèt pou dèranjman an',
        fr: 'Je suis désolé(e) pour le dérangement'
      },
      {
        english: 'Thank you for your patience',
        ht: 'Mèsi pou pasyans ou',
        fr: 'Merci pour votre patience'
      },
      {
        english: 'I understand your concern',
        ht: 'Mwen konprann enkyetid ou',
        fr: 'Je comprends votre inquiétude'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Ki jan ou ta di "I\'m sorry" nan kreyòl?',
          fr: 'Comment diriez-vous "I\'m sorry" en créole ?'
        },
        options: [
          { ht: 'Mwen kontan', fr: 'Mwen kontan' },
          { ht: 'Mwen regrèt', fr: 'Mwen regrèt' },
          { ht: 'Mwen fatige', fr: 'Mwen fatige' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: '"Mwen regrèt" se fason pou di "I\'m sorry"',
          fr: '"Mwen regrèt" est la façon de dire "I\'m sorry"'
        }
      }
    ],
    recap: {
      ht: [
        '6 ekspresyon politès yo aprann',
        'Kominikasyon ak respè ak kliyan yo',
        'Jere sitiyasyon difisil yo ak karans',
        'Montre pwofesyonalis ak sèvis kalite'
      ],
      fr: [
        '6 expressions de politesse apprises',
        'Communication respectueuse avec les clients',
        'Gestion des situations difficiles et malentendus',
        'Démonstration de professionnalisme et service de qualité'
      ]
    },
    homework: {
      ht: 'Pratike 4 konvèsasyon ak ekspresyon politès yo ak yon patnè',
      fr: 'Pratiquez 4 conversations avec les expressions de politesse avec un partenaire'
    },
    nextLessonTeaser: {
      ht: 'Pwochen leson: Kominikasyon telefòn ak randevou yo',
      fr: 'Prochaine leçon : Communication téléphonique et rendez-vous'
    }
  },
  
  // Lesson 4 - Phone Communication and Appointments
  {
    id: 'lesson-4',
    order: 4,
    titleHt: 'Kominikasyon Telefòn ak Randevou yo',
    titleFr: 'Communication Téléphonique et Rendez-vous',
    duration: 45,
    objectives: {
      ht: [
        'Reponn telefòn ak pwofesyonalis',
        'Pran ak bay enfòmasyon randevou',
        'Konfime ak modifye orè yo',
        'Jere depo ak otomatik yo'
      ],
      fr: [
        'Répondre au téléphone professionnellement',
        'Prendre et donner des informations de rendez-vous',
        'Confirmer et modifier les horaires',
        'Gérer les dépôts et systèmes automatiques'
      ]
    },
    warmupPhrases: [
      {
        english: 'Hello, this is...',
        ht: 'Alo, sa a se...',
        fr: 'Bonjour, ici...'
      },
      {
        english: 'How may I help you?',
        ht: 'Kijan m ka ede w?',
        fr: 'Comment puis-je vous aider ?'
      },
      {
        english: 'What time works for you?',
        ht: 'Ki lè ki bon pou w?',
        fr: 'Quelle heure vous convient ?'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Receptionist',
        characterB: 'Client calling',
        dialogue: [
          {
            speaker: 'A',
            english: 'Good morning, City Services. How may I help you?',
            ht: 'Bon maten, Sèvis Lavil la. Kijan m ka ede w?',
            fr: 'Bonjour, Services Municipaux. Comment puis-je vous aider ?'
          },
          {
            speaker: 'B',
            english: 'Hi, I\'d like to schedule an appointment.',
            ht: 'Bonjou, mwen ta renmen pran yon randevou.',
            fr: 'Bonjour, j\'aimerais prendre un rendez-vous.'
          },
          {
            speaker: 'A',
            english: 'Certainly! What service do you need?',
            ht: 'Byensir! Ki sèvis ou bezwen?',
            fr: 'Certainement ! Quel service vous faut-il ?'
          },
          {
            speaker: 'B',
            english: 'I need to renew my ID.',
            ht: 'Mwen bezwen renouvle kat idantite mwen.',
            fr: 'J\'ai besoin de renouveler ma pièce d\'identité.'
          },
          {
            speaker: 'A',
            english: 'Perfect. What time works best for you?',
            ht: 'Pafè. Ki lè ki pi bon pou w?',
            fr: 'Parfait. Quelle heure vous convient le mieux ?'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'How may I help you?',
        ht: 'Kijan m ka ede w?',
        fr: 'Comment puis-je vous aider ?',
        pronunciation: 'haw may ai HELP yu'
      },
      {
        english: 'I\'d like to schedule...',
        ht: 'Mwen ta renmen pwograme...',
        fr: 'J\'aimerais programmer...',
        pronunciation: 'aid laik tu SKED-ul'
      },
      {
        english: 'What time works for you?',
        ht: 'Ki lè ki bon pou w?',
        fr: 'Quelle heure vous convient ?',
        pronunciation: 'wat taim WURKS for yu'
      },
      {
        english: 'Can you confirm...?',
        ht: 'Eske w ka konfime...?',
        fr: 'Pouvez-vous confirmer... ?',
        pronunciation: 'kan yu kon-FURM'
      }
    ],
    pronunciationTips: [
      {
        word: 'schedule',
        syllables: 'SKED-ul',
        tips: {
          ht: 'Aksan sou premye silab la - SKED',
          fr: 'Accent sur la première syllabe - SKED'
        }
      }
    ],
    drillExercises: [
      {
        english: 'Good morning, how may I help you?',
        ht: 'Bon maten, kijan m ka ede w?',
        fr: 'Bonjour, comment puis-je vous aider ?'
      },
      {
        english: 'I\'d like to schedule an appointment',
        ht: 'Mwen ta renmen pran yon randevou',
        fr: 'J\'aimerais prendre un rendez-vous'
      },
      {
        english: 'What time works best for you?',
        ht: 'Ki lè ki pi bon pou w?',
        fr: 'Quelle heure vous convient le mieux ?'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Ki fason pou w di "I\'d like to schedule"?',
          fr: 'Comment dit-on "I\'d like to schedule" ?'
        },
        options: [
          { ht: 'Mwen ta renmen pwograme', fr: 'Mwen ta renmen pwograme' },
          { ht: 'Mwen bezwen ale', fr: 'Mwen bezwen ale' },
          { ht: 'Mwen pa konnen', fr: 'Mwen pa konnen' }
        ],
        correctAnswer: 0,
        explanation: {
          ht: '"Mwen ta renmen pwograme" se bon tradiksyon an',
          fr: '"Mwen ta renmen pwograme" est la bonne traduction'
        }
      }
    ],
    recap: {
      ht: [
        'Reponn telefòn ak pwofesyonalis',
        'Konmande randevou yo ak efis',
        'Konfime ak modifye orè yo',
        'Kominikasyon klè sou telefòn'
      ],
      fr: [
        'Répondre au téléphone professionnellement',
        'Gérer les rendez-vous efficacement',
        'Confirmer et modifier les horaires',
        'Communication claire au téléphone'
      ]
    },
    homework: {
      ht: 'Jwe wòl ak yon patnè - youn ap rele, lòt la ap reponn ak pran randevou',
      fr: 'Jeu de rôle avec un partenaire - l\'un appelle, l\'autre répond et prend rendez-vous'
    },
    nextLessonTeaser: {
      ht: 'Pwochen leson: Vokabilè pwofesyonèl ak randevou yo',
      fr: 'Prochaine leçon : Vocabulaire professionnel et rendez-vous'
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
  },
  
  // Lesson 6 - Professional Vocabulary 2
  {
    id: 'lesson-6',
    order: 6,
    titleHt: 'Vokabilè Pwofesyonèl 2 - Sèvis ak Kliyen',
    titleFr: 'Vocabulaire Professionnel 2 - Services et Clients',
    duration: 50,
    objectives: {
      ht: [
        'Konnen mo ak ekspresyon nan diferan sèvis yo',
        'Eksplike pwosedi ak règleman yo',
        'Ede kliyan yo ak dokiman ak aplikasyon yo',
        'Jere kesyon ak reklamasyon yo'
      ],
      fr: [
        'Connaître les mots et expressions des différents services',
        'Expliquer les procédures et règlements',
        'Aider les clients avec documents et candidatures',
        'Gérer les questions et réclamations'
      ]
    },
    warmupPhrases: [
      {
        english: 'application',
        ht: 'aplikasyon / demann',
        fr: 'candidature / demande'
      },
      {
        english: 'requirement',
        ht: 'kondisyon / egzijans',
        fr: 'exigence / condition'
      },
      {
        english: 'procedure',
        ht: 'pwosedi',
        fr: 'procédure'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Service Agent',
        characterB: 'Client with questions',
        dialogue: [
          {
            speaker: 'B',
            english: 'What are the requirements for this application?',
            ht: 'Ki kondisyon yo pou aplikasyon sa a?',
            fr: 'Quelles sont les exigences pour cette candidature ?'
          },
          {
            speaker: 'A',
            english: 'You need a valid ID, proof of address, and this completed form.',
            ht: 'Ou bezwen yon kat idantite ki valab, prèv adrès, ak fòm sa a ki konplè.',
            fr: 'Vous avez besoin d\'une pièce d\'identité valide, d\'une preuve d\'adresse, et de ce formulaire complété.'
          },
          {
            speaker: 'B',
            english: 'How long does the process take?',
            ht: 'Konbyen tan pwosèdi a pran?',
            fr: 'Combien de temps prend le processus ?'
          },
          {
            speaker: 'A',
            english: 'Usually 2-3 weeks. We\'ll call you when it\'s ready.',
            ht: 'Abityèlman 2-3 semèn. N ap rele w lè l prèt.',
            fr: 'Habituellement 2-3 semaines. Nous vous appellerons quand ce sera prêt.'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'What are the requirements?',
        ht: 'Ki kondisyon yo?',
        fr: 'Quelles sont les exigences ?',
        pronunciation: 'wat ar dhə ri-KWAIR-ments'
      },
      {
        english: 'You need to provide...',
        ht: 'Ou bezwen bay...',
        fr: 'Vous devez fournir...',
        pronunciation: 'yu niid tu prə-VAID'
      },
      {
        english: 'How long does it take?',
        ht: 'Konbyen tan li pran?',
        fr: 'Combien de temps cela prend-il ?',
        pronunciation: 'haw long dəz it tayk'
      },
      {
        english: 'The fee is...',
        ht: 'Pri a se...',
        fr: 'Les frais sont...',
        pronunciation: 'dhə fii iz'
      }
    ],
    pronunciationTips: [
      {
        word: 'requirements',
        syllables: 'ri-KWAIR-ments',
        tips: {
          ht: 'Aksan sou dezyèm silab la - KWAIR',
          fr: 'Accent sur la deuxième syllabe - KWAIR'
        }
      }
    ],
    drillExercises: [
      {
        english: 'What are the requirements for this service?',
        ht: 'Ki kondisyon yo pou sèvis sa a?',
        fr: 'Quelles sont les exigences pour ce service ?'
      },
      {
        english: 'You need to provide proof of address',
        ht: 'Ou bezwen bay prèv adrès ou',
        fr: 'Vous devez fournir une preuve d\'adresse'
      },
      {
        english: 'The processing time is 2-3 weeks',
        ht: 'Tan pwosèdi a se 2-3 semèn',
        fr: 'Le temps de traitement est de 2-3 semaines'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Ki jan ou ta tradui "requirements"?',
          fr: 'Comment traduiriez-vous "requirements" ?'
        },
        options: [
          { ht: 'kondisyon', fr: 'kondisyon' },
          { ht: 'pwoblèm', fr: 'pwoblèm' },
          { ht: 'solisyon', fr: 'solisyon' }
        ],
        correctAnswer: 0,
        explanation: {
          ht: '"Requirements" tradui kòm "kondisyon" oswa "egzijans"',
          fr: '"Requirements" se traduit par "kondisyon" ou "egzijans"'
        }
      }
    ],
    recap: {
      ht: [
        'Mo yo nan domain sèvis yo',
        'Eksplike pwosedi ak règleman',
        'Ede kliyan yo ak aplikasyon yo',
        'Reponn kesyon ak reklamasyon'
      ],
      fr: [
        'Vocabulaire du domaine des services',
        'Explication des procédures et règlements',
        'Assistance aux clients avec les candidatures',
        'Réponse aux questions et réclamations'
      ]
    },
    homework: {
      ht: 'Ekri yon konvèsasyon kòm si w ap eksplike yon pwosèdi bay yon kliyan',
      fr: 'Rédigez une conversation comme si vous expliquiez une procédure à un client'
    },
    nextLessonTeaser: {
      ht: 'Pwochen leson: Jere konfli ak rezoud pwoblèm yo',
      fr: 'Prochaine leçon : Gestion des conflits et résolution de problèmes'
    }
  },
  
  // Lesson 7 - Conflict Management and Problem Solving
  {
    id: 'lesson-7',
    order: 7,
    titleHt: 'Jere Konfli ak Rezoud Pwoblèm yo',
    titleFr: 'Gestion des Conflits et Résolution de Problèmes',
    duration: 45,
    objectives: {
      ht: [
        'Rekonèt ak jere sitiyasyon konfli yo',
        'Itilize estrateji pou kalme kliyan yo',
        'Chèche ak pwodwi solisyon yo',
        'Kenbe pwofesyonalis nan sitiyasyon difisil yo'
      ],
      fr: [
        'Reconnaître et gérer les situations conflictuelles',
        'Utiliser des stratégies pour calmer les clients',
        'Rechercher et proposer des solutions',
        'Maintenir le professionnalisme dans les situations difficiles'
      ]
    },
    warmupPhrases: [
      {
        english: 'I understand your concern',
        ht: 'Mwen konprann enkyetid ou',
        fr: 'Je comprends votre inquiétude'
      },
      {
        english: 'Let me see what I can do',
        ht: 'Ann mwen wè sa m ka fè',
        fr: 'Laissez-moi voir ce que je peux faire'
      },
      {
        english: 'I apologize for the inconvenience',
        ht: 'Mwen mande padon pou dèranjman an',
        fr: 'Je m\'excuse pour le dérangement'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Professional',
        characterB: 'Frustrated Client',
        dialogue: [
          {
            speaker: 'B',
            english: 'This is ridiculous! I\'ve been waiting for hours!',
            ht: 'Sa a san sans! Mwen rete ap tann pou anpil èdtan!',
            fr: 'C\'est ridicule ! J\'attends depuis des heures !'
          },
          {
            speaker: 'A',
            english: 'I understand your frustration, and I sincerely apologize.',
            ht: 'Mwen konprann degouman w, e mwen mande padon sincèrement.',
            fr: 'Je comprends votre frustration, et je m\'excuse sincèrement.'
          },
          {
            speaker: 'A',
            english: 'Let me see what I can do to help you right now.',
            ht: 'Ann mwen wè sa m ka fè pou ede w kounye a.',
            fr: 'Laissez-moi voir ce que je peux faire pour vous aider maintenant.'
          },
          {
            speaker: 'B',
            english: 'I just need this processed today!',
            ht: 'Mwen jis bezwen bagay sa a fèt jodi a!',
            fr: 'J\'ai juste besoin que cela soit traité aujourd\'hui !'
          },
          {
            speaker: 'A',
            english: 'I\'ll prioritize your case. Let me check our options.',
            ht: 'M ap mete ka w la an priorite. Ann mwen tcheke opsyon nou yo.',
            fr: 'Je vais prioriser votre dossier. Laissez-moi vérifier nos options.'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'I understand your frustration',
        ht: 'Mwen konprann degouman w',
        fr: 'Je comprends votre frustration',
        pronunciation: 'ai an-der-STAND yor frəs-TRAY-shən'
      },
      {
        english: 'Let me check our options',
        ht: 'Ann mwen tcheke opsyon nou yo',
        fr: 'Laissez-moi vérifier nos options',
        pronunciation: 'let mi chek awr OP-shənz'
      },
      {
        english: 'I\'ll prioritize your case',
        ht: 'M ap mete ka w la an priorite',
        fr: 'Je vais prioriser votre dossier',
        pronunciation: 'ail priai-OR-ə-taiz yor kays'
      }
    ],
    pronunciationTips: [
      {
        word: 'frustration',
        syllables: 'frəs-TRAY-shən',
        tips: {
          ht: 'Aksan sou dezyèm silab la - TRAY',
          fr: 'Accent sur la deuxième syllabe - TRAY'
        }
      }
    ],
    drillExercises: [
      {
        english: 'I understand your concern',
        ht: 'Mwen konprann enkyetid ou',
        fr: 'Je comprends votre inquiétude'
      },
      {
        english: 'I apologize for the delay',
        ht: 'Mwen mande padon pou reta a',
        fr: 'Je m\'excuse pour le retard'
      },
      {
        english: 'Let me find a solution',
        ht: 'Ann mwen jwenn yon solisyon',
        fr: 'Laissez-moi trouver une solution'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Ki fason ki pi bon pou reponn yon kliyan ki fache?',
          fr: 'Quelle est la meilleure façon de répondre à un client en colère ?'
        },
        options: [
          { ht: 'Di l li gen rezon an', fr: 'Lui dire qu\'il a tort' },
          { ht: 'Konprann ak mande padon', fr: 'Comprendre et s\'excuser' },
          { ht: 'Ignore li', fr: 'L\'ignorer' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'Toujou konprann ak mande padon dabò pou kalme sitiyasyon an',
          fr: 'Toujours comprendre et s\'excuser d\'abord pour calmer la situation'
        }
      }
    ],
    recap: {
      ht: [
        'Estrateji pou jere konfli yo',
        'Kalme kliyan yo ki fache',
        'Chèche solisyon kreyatè yo',
        'Kenbe pwofesyonalis nan tout moman'
      ],
      fr: [
        'Stratégies pour gérer les conflits',
        'Calmer les clients en colère',
        'Rechercher des solutions créatives',
        'Maintenir le professionnalisme en tout temps'
      ]
    },
    homework: {
      ht: 'Pratike senaryo konfli ak yon patnè - youn ap jwe kliyan fache a',
      fr: 'Pratiquez des scénarios de conflit avec un partenaire - l\'un joue le client en colère'
    },
    nextLessonTeaser: {
      ht: 'Dènye leson: Revizyon ak pratik final',
      fr: 'Dernière leçon : Révision et pratique finale'
    }
  },
  
  // Lesson 8 - Review and Final Practice
  {
    id: 'lesson-8',
    order: 8,
    titleHt: 'Revizyon ak Pratik Final',
    titleFr: 'Révision et Pratique Finale',
    duration: 60,
    objectives: {
      ht: [
        'Revize tout konten yo nan 7 leson yo',
        'Konplè egzèsis pratik konprehansif yo',
        'Demontre konpetans nan senaryo reyèl yo',
        'Resevwa sètifika ak planifye kontinye aprann'
      ],
      fr: [
        'Réviser tout le contenu des 7 leçons',
        'Compléter les exercices pratiques compréhensifs',
        'Démontrer les compétences dans des scénarios réels',
        'Recevoir le certificat et planifier l\'apprentissage continu'
      ]
    },
    warmupPhrases: [
      {
        english: 'Good morning! How may I help you?',
        ht: 'Bon maten! Kijan m ka ede w?',
        fr: 'Bonjour ! Comment puis-je vous aider ?'
      },
      {
        english: 'I understand your concern and I\'ll help you.',
        ht: 'Mwen konprann enkyetid ou e m ap ede w.',
        fr: 'Je comprends votre inquiétude et je vais vous aider.'
      },
      {
        english: 'Thank you for your patience.',
        ht: 'Mèsi pou pasyans ou.',
        fr: 'Merci pour votre patience.'
      }
    ],
    roleplayScenes: [
      {
        characterA: 'Professional Interpreter',
        characterB: 'Various Clients',
        dialogue: [
          {
            speaker: 'A',
            english: 'Good afternoon! Welcome to our office. How may I assist you today?',
            ht: 'Bon apremidi! Byenvni nan biwo nou an. Kijan m ka ede w jodi a?',
            fr: 'Bon après-midi ! Bienvenue dans notre bureau. Comment puis-je vous assister aujourd\'hui ?'
          },
          {
            speaker: 'B',
            english: 'I need help with multiple services and I\'m quite confused.',
            ht: 'Mwen bezwen èd ak plizyè sèvis e mwen ase konfonn.',
            fr: 'J\'ai besoin d\'aide avec plusieurs services et je suis assez confus(e).'
          },
          {
            speaker: 'A',
            english: 'No problem at all! Let\'s go through each service step by step. I\'m here to help.',
            ht: 'Pa gen pwoblèm menm! Ann nou pase nan chak sèvis etap pa etap. Mwen la a pou ede w.',
            fr: 'Aucun problème du tout ! Passons en revue chaque service étape par étape. Je suis là pour vous aider.'
          }
        ]
      }
    ],
    keyPhrases: [
      {
        english: 'Let\'s review everything',
        ht: 'Ann nou revize tout bagay yo',
        fr: 'Révisons tout',
        pronunciation: 'lets ri-VYU EV-ri-thing'
      },
      {
        english: 'I\'m confident I can help',
        ht: 'Mwen gen konfyans mwen ka ede',
        fr: 'Je suis confiant(e) que je peux aider',
        pronunciation: 'aim KON-fi-dənt ai kan help'
      },
      {
        english: 'Step by step',
        ht: 'Etap pa etap',
        fr: 'Étape par étape',
        pronunciation: 'step bai step'
      }
    ],
    pronunciationTips: [
      {
        word: 'confident',
        syllables: 'KON-fi-dənt',
        tips: {
          ht: 'Aksan sou premye silab la - KON',
          fr: 'Accent sur la première syllabe - KON'
        }
      }
    ],
    drillExercises: [
      {
        english: 'Welcome! How may I help you today?',
        ht: 'Byenvni! Kijan m ka ede w jodi a?',
        fr: 'Bienvenue ! Comment puis-je vous aider aujourd\'hui ?'
      },
      {
        english: 'Let me check all your options',
        ht: 'Ann mwen tcheke tout opsyon ou yo',
        fr: 'Laissez-moi vérifier toutes vos options'
      },
      {
        english: 'I\'m here to help you succeed',
        ht: 'Mwen la a pou ede w reyisi',
        fr: 'Je suis là pour vous aider à réussir'
      }
    ],
    quiz: [
      {
        question: {
          ht: 'Ki sa ki pi enpòtan nan kominite pwofesyonèl?',
          fr: 'Qu\'est-ce qui est le plus important dans la communication professionnelle ?'
        },
        options: [
          { ht: 'Pale vit', fr: 'Parler vite' },
          { ht: 'Konprann ak respè', fr: 'Comprendre et respecter' },
          { ht: 'Konnen tout mo yo', fr: 'Connaître tous les mots' }
        ],
        correctAnswer: 1,
        explanation: {
          ht: 'Konprann ak respè kliyan yo se baz kominikasyon pwofesyonèl',
          fr: 'Comprendre et respecter les clients est la base de la communication professionnelle'
        }
      }
    ],
    recap: {
      ht: [
        'Revizyon konplè 8 leson yo',
        'Entegrasyon tout konpetans yo nan pratik reyèl',
        'Preparasyon pou defi pwofesyonèl yo',
        'Fondasyon solid pou kontinye aprann'
      ],
      fr: [
        'Révision complète des 8 leçons',
        'Intégration de toutes les compétences en pratique réelle',
        'Préparation aux défis professionnels',
        'Fondation solide pour l\'apprentissage continu'
      ]
    },
    homework: {
      ht: 'Kontinye pratike ak itilize konpetans yo nan travay ak lavi chak jou',
      fr: 'Continuez à pratiquer et utilisez ces compétences dans le travail et la vie quotidienne'
    },
    nextLessonTeaser: {
      ht: 'Kontinye ak Kou Nivo 2: Entèpretasyon Avanse ak Espesyalizasyon',
      fr: 'Continuez avec le Cours Niveau 2 : Interprétation Avancée et Spécialisations'
    }
  }
];