// Additional comprehensive lessons 3-8 with unique content

import { ComprehensiveLessonContent } from './comprehensiveLessons';

// LESSON 3: CUSTOMER SERVICE AND CLIENT INTERACTION
export const lesson3Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-3-comprehensive',
  order: 3,
  titleHt: 'Sèvis Kliyan ak Entèraksyon ak Kliyan yo',
  titleFr: 'Service Client et Interaction avec les Clients',
  estimatedDuration: 55,
  description: {
    ht: 'Nan leson sa a, ou ap aprann kijan pou w sèvi kliyan yo ak pwofesyonalis. Ou ap pratike konvèsasyon yo, rezoud problèm yo, ak bay bon sèvis.',
    fr: 'Dans cette leçon, vous apprendrez comment servir les clients avec professionnalisme. Vous pratiquerez les conversations, résoudrez des problèmes, et donnerez un bon service.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Kominikasyon ak Kliyan Entènasyonal yo',
      titleFr: 'Communication avec les Clients Internationaux',
      contentHt: 'Maria ap travay nan sèvis kliyan nan yon konpani ki gen kliyan nan anpil peyi. Chak jou, li pale ak moun ki soti nan kiltri ak lang diferan. Jodi a, li gen pou l ede yon kliyan ki soti nan Brezil ki gen yon pwobl\u00e8m ak pwodwi li a. Maria dwe itilize patience ak empati pou li konprann egzateman ki pwobl\u00e8m lan ye. Li aprann tou li gen anpil kliyan ki soti nan Arafrik ak ki pale Angle ak aksan diferan. Li dwe konsantre ak koute ak atansyon pou li ka bon jan ede yo.',
      contentFr: 'Maria travaille au service client dans une compagnie qui a des clients dans plusieurs pays. Chaque jour, elle parle avec des personnes qui viennent de cultures et langues différentes. Aujourd\'hui, elle doit aider un client du Brésil qui a un problème avec son produit. Maria doit utiliser la patience et l\'empathie pour comprendre exactement quel est le problème. Elle apprend aussi qu\'elle a beaucoup de clients d\'Afrique qui parlent anglais avec des accents différents. Elle doit se concentrer et écouter attentivement pour bien les aider.'
    },
    
    vocabulary: [
      {
        english: 'Customer',
        ht: 'Kliyan',
        fr: 'Client',
        pronunciation: 'KUHS-tə-mər',
        definition: {
          ht: 'Yon moun ki achte oswa itilize sèvis yo nan yon konpani',
          fr: 'Une personne qui achète ou utilise les services d\'une compagnie'
        },
        exampleSentence: {
          english: 'The customer was very satisfied with our service.',
          ht: 'Kliyan an te kontan anpil ak sèvis nou an.',
          fr: 'Le client était très satisfait de notre service.'
        },
        difficulty: 'basic'
      },
      {
        english: 'Complaint',
        ht: 'Plent',
        fr: 'Plainte',
        pronunciation: 'kəm-PLEYNT',
        definition: {
          ht: 'Yon ekspresyon ki di ou pa kontan ak yon bagay oswa sèvis',
          fr: 'Une expression qui dit que vous n\'êtes pas content d\'une chose ou service'
        },
        exampleSentence: {
          english: 'We take every customer complaint seriously.',
          ht: 'Nou pran tout plent kliyan yo ak sèryèz.',
          fr: 'Nous prenons toute plainte de client au sérieux.'
        },
        difficulty: 'intermediate'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [
      {
        audioUrl: '/audio/lesson3/customer-call.mp3',
        transcriptHt: 'Kliyan: Bonjou, mwen gen yon pwobl\u00e8m ak \u00f2dè mwen an...',
        transcriptFr: 'Client: Bonjour, j\'ai un problème avec ma commande...',
        questions: []
      }
    ],
    
    roleplayScenarios: [
      {
        title: {
          ht: 'Rezoud yon Plent Kliyan',
          fr: 'Résoudre une Plainte Client'
        },
        context: {
          ht: 'Yon kliyan ap rele ak li fache paske sèvis la pa t bon.',
          fr: 'Un client appelle et il est fâché parce que le service n\'était pas bon.'
        },
        participants: ['Customer Service Agent', 'Angry Customer'],
        dialogue: [],
        practiceActivities: []
      }
    ],
    
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon Empatik ak "I understand" ak "I apologize"',
        fr: 'Expressions Empathiques avec "I understand" et "I apologize"'
      },
      explanation: {
        ht: 'Nan sèvis kliyan, li enpòtan pou w montre ou konprann ak ou regret problèm yo.',
        fr: 'Dans le service client, il est important de montrer que vous comprenez et regrettez les problèmes.'
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
      instructionHt: 'Jwe wòl ak yon kliyan ki gen yon problèm ak òdè li a.',
      instructionFr: 'Jouez le rôle avec un client qui a un problème avec sa commande.',
      scenario: {
        ht: 'Kliyan an kontraye ak òdè li a.',
        fr: 'Le client est contrarié par sa commande.'
      },
      evaluation: {
        criteria: []
      }
    }
  },
  
  homework: {
    dailyPractice: [],
    realWorldApplication: {
      taskHt: 'Obsève kominikasyon sèvis kliyan nan yon magazin.',
      taskFr: 'Observez la communication service client dans un magasin.',
      submissionFormat: 'Observation report'
    }
  },
  
  resources: {
    additionalReadings: [],
    toolsAndApps: [],
    culturalNotes: {
      ht: 'Nan kiltri Ameriken, yo espekte sèvis ki rapidman ak ak sourire.',
      fr: 'Dans la culture américaine, on s\'attend à un service rapide et avec le sourire.'
    }
  }
};

// LESSON 4: TELEPHONE COMMUNICATION AND EMAIL ETIQUETTE
export const lesson4Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-4-comprehensive',
  order: 4,
  titleHt: 'Kominikasyon Telefòn ak Etikèt Imèl',
  titleFr: 'Communication Téléphonique et Étiquette Email',
  estimatedDuration: 45,
  description: {
    ht: 'Aprann kijan pou w kominike pwofesyonèlman nan telefòn ak nan imèl. Pratike salitasyon, pran mesaj, ak ekri imèl pwofesyonèl.',
    fr: 'Apprenez comment communiquer professionnellement au téléphone et par email. Pratiquez les salutations, prenez des messages, et rédigez des emails professionnels.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Yon Jou ak Anpil Apèl Telefòn',
      titleFr: 'Une Journée avec Beaucoup d\'Appels Téléphoniques',
      contentHt: 'James ap travay kòm asistan nan yon kabinè avoka. Chak jou li resevwa ak fè anpil apèl telefòn. Li dwe konnen kijan pou l reponn ak pwofesyonalis, pran mesaj ki kòrèk, ak transfere apèl yo bay bon moun yo. Maten an, li resevwa yon apèl nan yon kliyan ki vle pale ak avoka li a. James di li avoka a nan yon reyinyon men li ka pran yon mesaj. Li mande kliyan an bay nom li, nimewo telefòn li, ak rezime nan bagay la. Apre midi a, li dwe rele plizyè kliyan yo pou konfime randevou yo pou semèn ki vini an.',
      contentFr: 'James travaille comme assistant dans un cabinet d\'avocat. Chaque jour il reçoit et fait beaucoup d\'appels téléphoniques. Il doit savoir comment répondre professionnellement, prendre des messages corrects, et transférer les appels aux bonnes personnes. Le matin, il reçoit un appel d\'un client qui veut parler à son avocat. James dit que l\'avocat est en réunion mais qu\'il peut prendre un message. Il demande au client de donner son nom, son numéro de téléphone, et un résumé de l\'affaire. L\'après-midi, il doit appeler plusieurs clients pour confirmer leurs rendez-vous pour la semaine prochaine.'
    },
    
    vocabulary: [
      {
        english: 'Telephone',
        ht: 'Telefòn',
        fr: 'Téléphone',
        pronunciation: 'TEL-ə-fohn',
        definition: {
          ht: 'Yon aparèy ki pèmèt ou pale ak moun ki nan lòt kote yo',
          fr: 'Un appareil qui permet de parler avec des personnes à d\'autres endroits'
        },
        exampleSentence: {
          english: 'Please answer the telephone when it rings.',
          ht: 'Tanpri reponn telefòn an lè l ap sone.',
          fr: 'Veuillez répondre au téléphone quand il sonne.'
        },
        difficulty: 'basic'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [],
    roleplayScenarios: [],
    grammarFocus: {
      topic: {
        ht: 'Fòm Politès nan Telefòn',
        fr: 'Formules de Politesse au Téléphone'
      },
      explanation: {
        ht: 'Nan telefòn, li enpòtan pou w pale klè ak itilize mo politès yo.',
        fr: 'Au téléphone, il est important de parler clairement et d\'utiliser des mots polis.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: { speakingExercises: [], writingExercises: [], interactiveActivities: [] },
  assessment: { quiz: [], practicalTask: { instructionHt: '', instructionFr: '', scenario: { ht: '', fr: '' }, evaluation: { criteria: [] } } },
  homework: { dailyPractice: [], realWorldApplication: { taskHt: '', taskFr: '', submissionFormat: '' } },
  resources: { additionalReadings: [], toolsAndApps: [], culturalNotes: { ht: '', fr: '' } }
};

// LESSON 5: BUSINESS MEETINGS AND PRESENTATIONS
export const lesson5Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-5-comprehensive',
  order: 5,
  titleHt: 'Reyinyon Biznis ak Prezantasyon yo',
  titleFr: 'Réunions d\'Affaires et Présentations',
  estimatedDuration: 60,
  description: {
    ht: 'Aprann kijan pou w patisipe nan reyinyon ak fè prezantasyon pwofesyonèl. Devlope kapasite ou nan ekspresyon ak jestiksyon.',
    fr: 'Apprenez comment participer aux réunions et faire des présentations professionnelles. Développez vos capacités d\'expression et de gestuelle.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Premye Prezantasyon Sarah',
      titleFr: 'Première Présentation de Sarah',
      contentHt: 'Sarah se yon nouvo direktè maketing nan konpani li a. Jodi a se premye fwa li gen pou l fè yon prezantasyon devan komite direksyon an. Li prepare pou semèn yo ak li nervè anpil. Li kreye yon PowerPoint ak enfòmasyon sou nouvo kanpay maketing la. Li pratike prezantasyon an devan glisè a plizyè fwa. Nan sal reyinyon an, li kòmanse ak yon salitasyon ak yon ti istwa ki enteresan. Li eksplike objektif yo, estrateji yo, ak rezilta yo ki espere yo. Li itilize grafik ak estatistik yo pou sipòte pwen li yo. Nan fen an, li mande kesyon ak li aksèpte kominant\u00e8 yo ak pwofesyonalis.',
      contentFr: 'Sarah est une nouvelle directrice marketing dans sa compagnie. Aujourd\'hui c\'est la première fois qu\'elle doit faire une présentation devant le comité de direction. Elle s\'est préparée pendant des semaines et elle est très nerveuse. Elle a créé un PowerPoint avec des informations sur la nouvelle campagne marketing. Elle a pratiqué la présentation devant le miroir plusieurs fois. Dans la salle de réunion, elle commence avec une salutation et une petite histoire intéressante. Elle explique les objectifs, stratégies, et résultats espérés. Elle utilise des graphiques et statistiques pour supporter ses points. À la fin, elle pose des questions et accepte les commentaires avec professionnalisme.'
    },
    
    vocabulary: [
      {
        english: 'Meeting',
        ht: 'Reyinyon',
        fr: 'Réunion',
        pronunciation: 'MIIT-ing',
        definition: {
          ht: 'Yon rasanbleman kote moun yo diskite ak deside bagay yo',
          fr: 'Un rassemblement où les gens discutent et décident des choses'
        },
        exampleSentence: {
          english: 'We have a staff meeting every Monday.',
          ht: 'Nou gen yon reyinyon anplwaye chak lendi.',
          fr: 'Nous avons une réunion du personnel chaque lundi.'
        },
        difficulty: 'basic'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [],
    roleplayScenarios: [],
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon Prezantasyon ak "Let me show you"',
        fr: 'Expressions de Présentation avec "Let me show you"'
      },
      explanation: {
        ht: 'Nan prezantasyon yo, nou itilize fraz yo tankou "Let me show you" pou nou prezante enfòmasyon nouvo yo.',
        fr: 'Dans les présentations, nous utilisons des phrases comme "Let me show you" pour présenter de nouvelles informations.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: { speakingExercises: [], writingExercises: [], interactiveActivities: [] },
  assessment: { quiz: [], practicalTask: { instructionHt: '', instructionFr: '', scenario: { ht: '', fr: '' }, evaluation: { criteria: [] } } },
  homework: { dailyPractice: [], realWorldApplication: { taskHt: '', taskFr: '', submissionFormat: '' } },
  resources: { additionalReadings: [], toolsAndApps: [], culturalNotes: { ht: '', fr: '' } }
};

// LESSON 6: WORKPLACE CULTURE AND TEAMWORK
export const lesson6Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-6-comprehensive',
  order: 6,
  titleHt: 'Kiltri Travay ak Travay Ekip',
  titleFr: 'Culture de Travail et Travail d\'Équipe',
  estimatedDuration: 50,
  description: {
    ht: 'Konprann kiltri ameriken nan travay ak aprann kijan pou w travay ak lòt moun yo efektivman.',
    fr: 'Comprenez la culture américaine du travail et apprenez comment travailler efficacement avec d\'autres personnes.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Divèsite nan Ekip David la',
      titleFr: 'Diversité dans l\'Équipe de David',
      contentHt: 'David ap dirije yon ekip ki gen 8 moun nan depatman devlopman lojisyèl la. Ekip li a gen moun ki soti nan anpil peyi: yon enjenyè ki soti nan Lachin, yon pwogamè ki soti nan Lend, yon analiz ki soti nan Kiba, ak lòt yo ki soti nan Etazini. David aprann li gen pou l konprann ak respekte divèsite kiltirèl yo. Li obsève kèk nan manb ekip yo pi timid pase lòt yo nan reyinyon yo, ak kèk yo pi ekspresif. Li devlope estrateji yo pou ankouraje tout moun patisipe ak kontibye nan travay la.',
      contentFr: 'David dirige une équipe de 8 personnes dans le département développement logiciel. Son équipe a des gens qui viennent de plusieurs pays: un ingénieur de Chine, un programmeur d\'Inde, un analyste de Cuba, et d\'autres des États-Unis. David apprend qu\'il doit comprendre et respecter la diversité culturelle. Il observe que certains membres de l\'équipe sont plus timides que d\'autres dans les réunions, et certains plus expressifs. Il développe des stratégies pour encourager tout le monde à participer et contribuer au travail.'
    },
    
    vocabulary: [
      {
        english: 'Teamwork',
        ht: 'Travay ekip',
        fr: 'Travail d\'équipe',
        pronunciation: 'TIIM-wurk',
        definition: {
          ht: 'Aksyon kote yon gwoup moun yo travay ansanm pou yo rive nan yon objektif',
          fr: 'Action où un groupe de personnes travaille ensemble pour atteindre un objectif'
        },
        exampleSentence: {
          english: 'Good teamwork is essential for project success.',
          ht: 'Bon travay ekip enpòtan pou siksè pwojè yo.',
          fr: 'Un bon travail d\'équipe est essentiel pour le succès des projets.'
        },
        difficulty: 'intermediate'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [],
    roleplayScenarios: [],
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon Kolaborasyon ak "Let\'s work together"',
        fr: 'Expressions de Collaboration avec "Let\'s work together"'
      },
      explanation: {
        ht: 'Pou travay ak lòt moun yo, nou itilize ekspresyon yo ki ankouraje kolaborasyon.',
        fr: 'Pour travailler avec d\'autres, nous utilisons des expressions qui encouragent la collaboration.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: { speakingExercises: [], writingExercises: [], interactiveActivities: [] },
  assessment: { quiz: [], practicalTask: { instructionHt: '', instructionFr: '', scenario: { ht: '', fr: '' }, evaluation: { criteria: [] } } },
  homework: { dailyPractice: [], realWorldApplication: { taskHt: '', taskFr: '', submissionFormat: '' } },
  resources: { additionalReadings: [], toolsAndApps: [], culturalNotes: { ht: '', fr: '' } }
};

// LESSON 7: PROBLEM SOLVING AND CONFLICT RESOLUTION  
export const lesson7Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-7-comprehensive',
  order: 7,
  titleHt: 'Rezoud Problèm ak Rezoud Konfli',
  titleFr: 'Résolution de Problèmes et Résolution de Conflits',
  estimatedDuration: 55,
  description: {
    ht: 'Devlope kapasite ou pou rezoud problèm yo ak jere konfli yo nan anviwonman travay yo.',
    fr: 'Développez vos capacités pour résoudre des problèmes et gérer les conflits dans les environnements de travail.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Konfli nan Pwojè Rachel la',
      titleFr: 'Conflit dans le Projet de Rachel',
      contentHt: 'Rachel ap dirije yon pwojè enpòtan nan konpani li a. Men, gen yon konfli ki devlope ant de manb ekip yo: Miguel ak Linda. Miguel panse yo dwe itilize yon teknoloji nouvo pou pwojè a, men Linda panse sa ap fè yo pèdi anpil tan. Yo kòmanse gen altèkasyon nan reyinyon yo ak sa ap afekte moral tout ekip la. Rachel dwe entèveni ak jwenn yon solisyon ki ka satisfè de pa yo ak ki pa ap retade pwojè a.',
      contentFr: 'Rachel dirige un projet important dans sa compagnie. Mais, il y a un conflit qui se développe entre deux membres de l\'équipe: Miguel et Linda. Miguel pense qu\'ils doivent utiliser une nouvelle technologie pour le projet, mais Linda pense que ça leur fera perdre beaucoup de temps. Ils commencent à avoir des altercations dans les réunions et ça affecte le moral de toute l\'équipe. Rachel doit intervenir et trouver une solution qui peut satisfaire les deux parties et qui ne retardera pas le projet.'
    },
    
    vocabulary: [
      {
        english: 'Conflict',
        ht: 'Konfli',
        fr: 'Conflit',
        pronunciation: 'KAHN-flikt',
        definition: {
          ht: 'Yon sitiyasyon kote moun yo pa dakò ak yo ap goumen oswa diskite',
          fr: 'Une situation où les gens ne sont pas d\'accord et se disputent ou discutent'
        },
        exampleSentence: {
          english: 'We need to resolve this conflict quickly.',
          ht: 'Nou bezwen rezoud konfli sa a rapidman.',
          fr: 'Nous devons résoudre ce conflit rapidement.'
        },
        difficulty: 'intermediate'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [],
    roleplayScenarios: [],
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon Mediasyon ak "Let\'s find a solution"',
        fr: 'Expressions de Médiation avec "Let\'s find a solution"'
      },
      explanation: {
        ht: 'Lè nou ap rezoud konfli yo, nou itilize fraz yo ki ankouraje kooperasyon ak solisyon.',
        fr: 'Quand nous résolvons des conflits, nous utilisons des phrases qui encouragent la coopération et les solutions.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: { speakingExercises: [], writingExercises: [], interactiveActivities: [] },
  assessment: { quiz: [], practicalTask: { instructionHt: '', instructionFr: '', scenario: { ht: '', fr: '' }, evaluation: { criteria: [] } } },
  homework: { dailyPractice: [], realWorldApplication: { taskHt: '', taskFr: '', submissionFormat: '' } },
  resources: { additionalReadings: [], toolsAndApps: [], culturalNotes: { ht: '', fr: '' } }
};

// LESSON 8: CAREER DEVELOPMENT AND JOB INTERVIEWS
export const lesson8Comprehensive: ComprehensiveLessonContent = {
  id: 'lesson-8-comprehensive',
  order: 8,
  titleHt: 'Devlopman Karyè ak Entèvyu Travay',
  titleFr: 'Développement de Carrière et Entretiens d\'Embauche',
  estimatedDuration: 65,
  description: {
    ht: 'Prepare ou pou entèvyu travay yo ak aprann kijan pou devlope karyè ou nan yon anviwonman pwofesyonèl.',
    fr: 'Préparez-vous pour les entretiens d\'embauche et apprenez comment développer votre carrière dans un environnement professionnel.'
  },
  
  preparation: {
    readingPassage: {
      titleHt: 'Rechèch Travay Carlos',
      titleFr: 'Recherche d\'Emploi de Carlos',
      contentHt: 'Carlos gen diploma nan jesyon biznis ak li ap chèche yon travay nan yon konpani entènasyonal. Li pase plizyè mwa k ap prepare dokiman yo: resume, cover letter, ak referans yo. Li ale nan plizyè entèvyu ak li aprann chak fwa. Nan yon entèvyu, yo mande li eksplike fòs ak feblès li yo. Nan yon lòt, yo mande li deskripsyon yon moman li te rezoud yon problèm difisil. Carlos devlope kapasite li yo nan reponn kesyon yo ak konfyans ak pwofesyonalis.',
      contentFr: 'Carlos a un diplôme en gestion des affaires et il cherche un emploi dans une compagnie internationale. Il passe plusieurs mois à préparer les documents: CV, lettre de motivation, et références. Il va à plusieurs entretiens et il apprend à chaque fois. Dans un entretien, ils lui demandent d\'expliquer ses forces et faiblesses. Dans un autre, ils lui demandent de décrire un moment où il a résolu un problème difficile. Carlos développe ses capacités à répondre aux questions avec confiance et professionnalisme.'
    },
    
    vocabulary: [
      {
        english: 'Interview',
        ht: 'Entèvyu',
        fr: 'Entretien',
        pronunciation: 'IN-tər-vyoo',
        definition: {
          ht: 'Yon konvèsasyon ak yon patwon ak yon moun ki ap chèche travay',
          fr: 'Une conversation entre un patron et une personne qui cherche du travail'
        },
        exampleSentence: {
          english: 'I have a job interview tomorrow morning.',
          ht: 'Mwen gen yon entèvyu travay demen nan maten.',
          fr: 'J\'ai un entretien d\'embauche demain matin.'
        },
        difficulty: 'basic'
      }
    ]
  },
  
  mainContent: {
    listeningExercises: [],
    roleplayScenarios: [],
    grammarFocus: {
      topic: {
        ht: 'Ekspresyon Entèvyu ak "I am qualified because"',
        fr: 'Expressions d\'Entretien avec "I am qualified because"'
      },
      explanation: {
        ht: 'Nan entèvyu yo, nou dwe eksplike poukisa nou kalifye pou travay la.',
        fr: 'Dans les entretiens, nous devons expliquer pourquoi nous sommes qualifiés pour le travail.'
      },
      examples: [],
      exercises: []
    }
  },
  
  practiceActivities: { speakingExercises: [], writingExercises: [], interactiveActivities: [] },
  assessment: { quiz: [], practicalTask: { instructionHt: '', instructionFr: '', scenario: { ht: '', fr: '' }, evaluation: { criteria: [] } } },
  homework: { dailyPractice: [], realWorldApplication: { taskHt: '', taskFr: '', submissionFormat: '' } },
  resources: { additionalReadings: [], toolsAndApps: [], culturalNotes: { ht: '', fr: '' } }
};