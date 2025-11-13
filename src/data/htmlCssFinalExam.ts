// HTML/CSS Final Exam - Comprehensive Assessment
export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  title: {
    ht: string;
    fr: string;
  };
  question: {
    ht: string;
    fr: string;
  };
  points: number;
  // For multiple choice and true/false questions
  options?: Array<{
    ht: string;
    fr: string;
  }>;
  correctAnswer?: number;
  explanation?: {
    ht: string;
    fr: string;
  };
  // For short answer questions
  expectedAnswer?: {
    ht: string;
    fr: string;
  };
  hints?: {
    ht: string[];
    fr: string[];
  };
}

export const htmlCssFinalExam = {
  examId: 'htmlcss-final-2024',
  title: {
    ht: "Egzamen Final HTML & CSS",
    fr: "Examen Final HTML & CSS"
  },
  description: {
    ht: "Egzamen konplè ki kouvri tout konsèp yo nan HTML ak CSS yo nou aprann nan 14 semèn yo. Test final pou demonstre mètriz nan estrikti, layout, tipografi, Flexbox, Grid, media queries, animasyon ak plis ankò.",
    fr: "Examen complet couvrant tous les concepts HTML et CSS appris dans les 14 semaines. Test final pour démontrer la maîtrise de la structure, layout, typographie, Flexbox, Grid, media queries, animations et plus."
  },
  duration: 90, // minutes
  totalPoints: 30,
  passingScore: 21, // 70%
  instructions: {
    ht: [
      "Ou gen 1 è ak 30 minit pou fini egzamen an",
      "Gen 30 kesyon nan total (20 multiple choice, 5 true/false, 5 short answer)",
      "Chak kesyon vo 1 pwen",
      "Ou ka itilize editè kòd ou a men pa ka itilize resous ekstèn yo",
      "Egzamen sa a teste konèsans ou sou tout materyo nou aprann nan",
      "Li atentivman ak pran tan ou",
      "Bon chans ak w nou!"
    ],
    fr: [
      "Vous avez 1 heure et 30 minutes pour terminer l'examen",
      "Il y a 30 questions au total (20 choix multiple, 5 vrai/faux, 5 réponses courtes)",
      "Chaque question vaut 1 point",
      "Vous pouvez utiliser votre éditeur de code mais pas de ressources externes",
      "Cet examen teste vos connaissances sur tout le matériel appris",
      "Lisez attentivement et prenez votre temps",
      "Bonne chance!"
    ]
  },
  questions: [
    // MULTIPLE CHOICE QUESTIONS (20 questions, 1 point each)
    {
      id: "mc-001",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 1: Eleman Principal",
        fr: "Question 1: Élément Principal"
      },
      question: {
        ht: "Ki eleman HTML ki gen kontan prensipal la?",
        fr: "Quel élément HTML contient le contenu principal?"
      },
      points: 1,
      options: [
        { ht: "<header>", fr: "<header>" },
        { ht: "<main>", fr: "<main>" },
        { ht: "<body>", fr: "<body>" },
        { ht: "<footer>", fr: "<footer>" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Eleman <main> lan gen kontan prensipal ak inik paj la, separe nan header, footer ak sidebar yo.",
        fr: "L'élément <main> contient le contenu principal et unique de la page, séparé des headers, footers et sidebars."
      }
    },
    {
      id: "mc-002",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 2: CSS Ekstèn",
        fr: "Question 2: CSS Externe"
      },
      question: {
        ht: "Ki tag ki charge yon fichye CSS ekstèn?",
        fr: "Quel tag charge un fichier CSS externe?"
      },
      points: 1,
      options: [
        { ht: "<css>", fr: "<css>" },
        { ht: "<import>", fr: "<import>" },
        { ht: "<link>", fr: "<link>" },
        { ht: "<style>", fr: "<style>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "Tag <link> la itilize pou konekte fichye CSS ekstèn yo ak atribi rel='stylesheet' ak href ki gen chemen fichye a.",
        fr: "Le tag <link> est utilisé pour connecter les fichiers CSS externes avec l'attribut rel='stylesheet' et href contenant le chemin du fichier."
      }
    },
    {
      id: "mc-003",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 3: ID Selector",
        fr: "Question 3: Sélecteur ID"
      },
      question: {
        ht: "Ki selektè ki vise yon ID?",
        fr: "Quel sélecteur cible un ID?"
      },
      points: 1,
      options: [
        { ht: ".", fr: "." },
        { ht: "#", fr: "#" },
        { ht: "*", fr: "*" },
        { ht: "@", fr: "@" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Senbòl # la itilize pou selekte eleman ak yon ID espesifik. Egzanp: #my-id",
        fr: "Le symbole # est utilisé pour sélectionner les éléments avec un ID spécifique. Exemple: #my-id"
      }
    },
    {
      id: "mc-004",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 4: Padding Property",
        fr: "Question 4: Propriété Padding"
      },
      question: {
        ht: "Sa padding kontwole?",
        fr: "Que contrôle padding?"
      },
      points: 1,
      options: [
        { ht: "Espas nan deyò yon bwat", fr: "Espace à l'extérieur d'une boîte" },
        { ht: "Espas nan anndan yon bwat", fr: "Espace à l'intérieur d'une boîte" },
        { ht: "Epesè border la", fr: "Épaisseur de la bordure" },
        { ht: "Koulè tèks la", fr: "Couleur du texte" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Padding se espas nan anndan yon eleman, ant border ak kontan an. Li ajoute espas anndan border ak kontan an.",
        fr: "Padding est l'espace à l'intérieur d'un élément, entre la bordure et le contenu. Il ajoute de l'espace entre la bordure et le contenu."
      }
    },
    {
      id: "mc-005",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 5: Border Radius",
        fr: "Question 5: Border Radius"
      },
      question: {
        ht: "Ki property ki wonn kwen yo?",
        fr: "Quelle propriété arrondit les coins?"
      },
      points: 1,
      options: [
        { ht: "corner-radius", fr: "corner-radius" },
        { ht: "border-curve", fr: "border-curve" },
        { ht: "rounded", fr: "rounded" },
        { ht: "border-radius", fr: "border-radius" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "border-radius property a kreye kwen wonn yo sou eleman yo. Ou ka ba li valè nan pixels oswa pourcentage.",
        fr: "La propriété border-radius crée des coins arrondis sur les éléments. Vous pouvez lui donner une valeur en pixels ou pourcentage."
      }
    },
    {
      id: "mc-006",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 6: Flexbox Layout",
        fr: "Question 6: Layout Flexbox"
      },
      question: {
        ht: "Flexbox pi bon pou:",
        fr: "Flexbox est mieux pour:"
      },
      points: 1,
      options: [
        { ht: "Grid yo", fr: "Les grilles" },
        { ht: "Layout yon dimansyon", fr: "Layout une dimension" },
        { ht: "Layout de dimansyon", fr: "Layout deux dimensions" },
        { ht: "Animasyon yo", fr: "Les animations" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Flexbox se yon one-dimensional layout method. Li pi bon pou align eleman yo sou yon sèl aks (òizontèl oswa vètikèl).",
        fr: "Flexbox est une méthode de layout unidimensionnelle. Elle est mieux pour aligner les éléments sur un seul axe (horizontal ou vertical)."
      }
    },
    {
      id: "mc-007",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 7: CSS Grid",
        fr: "Question 7: CSS Grid"
      },
      question: {
        ht: "CSS Grid pi bon pou:",
        fr: "CSS Grid est mieux pour:"
      },
      points: 1,
      options: [
        { ht: "Hover effects", fr: "Effets de survol" },
        { ht: "Forms", fr: "Formulaires" },
        { ht: "Layout yon dimansyon", fr: "Layout une dimension" },
        { ht: "Layout de dimansyon", fr: "Layout deux dimensions" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "CSS Grid se yon two-dimensional layout system. Li pi bon pou kreye layout ki gen ranje ak kolòn yo ansanm.",
        fr: "CSS Grid est un système de layout bidimensionnel. Il est mieux pour créer des layouts qui ont des rangées et colonnes ensemble."
      }
    },
    {
      id: "mc-008",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 8: Responsive Unit",
        fr: "Question 8: Unité Responsive"
      },
      question: {
        ht: "Ki inite ki ajiste ak gwosè ekran an?",
        fr: "Quelle unité s'ajuste avec la taille de l'écran?"
      },
      points: 1,
      options: [
        { ht: "px", fr: "px" },
        { ht: "cm", fr: "cm" },
        { ht: "rem", fr: "rem" },
        { ht: "%", fr: "%" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "Pourcent (%) se yon inite relatif ki ajiste selon gwosè paran eleman an, sa ki fè li pi responsive.",
        fr: "Le pourcentage (%) est une unité relative qui s'ajuste selon la taille de l'élément parent, ce qui le rend plus responsive."
      }
    },
    {
      id: "mc-009",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 9: Media Query",
        fr: "Question 9: Media Query"
      },
      question: {
        ht: "Sintaks media query kòrèk la se:",
        fr: "La syntaxe correcte d'une media query est:"
      },
      points: 1,
      options: [
        { ht: "screen (min 600px)", fr: "screen (min 600px)" },
        { ht: "@responsive {}", fr: "@responsive {}" },
        { ht: "@media (min-width: 600px)", fr: "@media (min-width: 600px)" },
        { ht: "@query 600px", fr: "@query 600px" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "@media ak kondisyon yo nan parantèz se sintaks kòrèk la pou media queries. Egzanp: @media (min-width: 600px) {...}",
        fr: "@media avec les conditions entre parenthèses est la syntaxe correcte pour les media queries. Exemple: @media (min-width: 600px) {...}"
      }
    },
    {
      id: "mc-010",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 10: Hover Pseudo-class",
        fr: "Question 10: Pseudo-classe Hover"
      },
      question: {
        ht: "Ki pseudo-class ki reprézante yon sourit k ap float?",
        fr: "Quelle pseudo-classe représente une souris en survol?"
      },
      points: 1,
      options: [
        { ht: ":hover", fr: ":hover" },
        { ht: ":focus", fr: ":focus" },
        { ht: ":after", fr: ":after" },
        { ht: ":active", fr: ":active" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: ":hover pseudo-class la ak aktive lè itilizatè a mete kursè a sou eleman an san klike sou li.",
        fr: "La pseudo-classe :hover s'active quand l'utilisateur place le curseur sur l'élément sans cliquer dessus."
      }
    },
    {
      id: "mc-011",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 11: Before Pseudo-element",
        fr: "Question 11: Pseudo-élément Before"
      },
      question: {
        ht: "Ki pseudo-element ki mete kontan anvan yon eleman?",
        fr: "Quel pseudo-élément insère du contenu avant un élément?"
      },
      points: 1,
      options: [
        { ht: ":before", fr: ":before" },
        { ht: "::insert", fr: "::insert" },
        { ht: "::before", fr: "::before" },
        { ht: "<<before>>", fr: "<<before>>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "::before pseudo-element la (ak de kolon yo) mete kontan anvan eleman an. Li bezwen property content pou travay.",
        fr: "Le pseudo-élément ::before (avec deux points) insère du contenu avant l'élément. Il a besoin de la propriété content pour fonctionner."
      }
    },
    {
      id: "mc-012",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 12: Z-Index Property",
        fr: "Question 12: Propriété Z-Index"
      },
      question: {
        ht: "Ki property ki kontwole superposition?",
        fr: "Quelle propriété contrôle la superposition?"
      },
      points: 1,
      options: [
        { ht: "stack", fr: "stack" },
        { ht: "layer", fr: "layer" },
        { ht: "position", fr: "position" },
        { ht: "z-index", fr: "z-index" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "z-index property a kontwole ki eleman ki parèt anlè yo selon valè nimerik yo. Li sèlman travay ak eleman ki positioned.",
        fr: "La propriété z-index contrôle quels éléments apparaissent au-dessus selon leurs valeurs numériques. Elle ne fonctionne qu'avec les éléments positionnés."
      }
    },
    {
      id: "mc-013",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 13: Keyframes Rule",
        fr: "Question 13: Règle Keyframes"
      },
      question: {
        ht: "Ki règ ki defini etap animasyon yo?",
        fr: "Quelle règle définit les étapes d'animation?"
      },
      points: 1,
      options: [
        { ht: "@motion", fr: "@motion" },
        { ht: "@steps", fr: "@steps" },
        { ht: "@animate", fr: "@animate" },
        { ht: "@keyframes", fr: "@keyframes" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "@keyframes règ la defini etap yo nan yon animasyon, ak pèmèt ou dekreye sa k ap rive nan chak pòsan oswa moman nan animasyon an.",
        fr: "La règle @keyframes définit les étapes d'une animation, permettant de décrire ce qui se passe à chaque pourcentage ou moment de l'animation."
      }
    },
    {
      id: "mc-014",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 14: Google Font Import",
        fr: "Question 14: Import Google Font"
      },
      question: {
        ht: "Ki import ki charge yon Google Font?",
        fr: "Quel import charge une Google Font?"
      },
      points: 1,
      options: [
        { ht: "<font>", fr: "<font>" },
        { ht: "@font-google", fr: "@font-google" },
        { ht: "<link> tag", fr: "<link> tag" },
        { ht: "@typeface", fr: "@typeface" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "Tag <link> la ak rel='stylesheet' ak href ki montre nan Google Fonts URL la se fason kòrèk la pou import Google fonts.",
        fr: "Le tag <link> avec rel='stylesheet' et href pointant vers l'URL Google Fonts est la façon correcte d'importer les polices Google."
      }
    },
    {
      id: "mc-015",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 15: Position Absolute",
        fr: "Question 15: Position Absolute"
      },
      question: {
        ht: "Sa position: absolute; fè?",
        fr: "Que fait position: absolute;?"
      },
      points: 1,
      options: [
        { ht: "Fè eleman an scroll", fr: "Fait défiler l'élément" },
        { ht: "Retire eleman an nan flow ak pozisyone li", fr: "Retire l'élément du flux et le positionne" },
        { ht: "Fixe eleman an sou viewport", fr: "Fixe l'élément au viewport" },
        { ht: "Deaktive li", fr: "Le désactive" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "position: absolute; retire eleman an nan normal document flow ak pozisyone li selon pozisyon paran ki pi pre ak positioned.",
        fr: "position: absolute; retire l'élément du flux normal du document et le positionne par rapport à l'ancêtre positionné le plus proche."
      }
    },
    {
      id: "mc-016",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 16: CSS Variables",
        fr: "Question 16: Variables CSS"
      },
      question: {
        ht: "Ki sintaks variable CSS ki kòrèk?",
        fr: "Quelle syntaxe de variable CSS est correcte?"
      },
      points: 1,
      options: [
        { ht: "$primary = #fff", fr: "$primary = #fff" },
        { ht: "var(primary);", fr: "var(primary);" },
        { ht: "--primary: #fff;", fr: "--primary: #fff;" },
        { ht: "define #primary: #fff;", fr: "define #primary: #fff;" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "CSS variables defini ak -- anvan non variable a ak itilize ak function var(). Egzanp: --color: blue; ak color: var(--color);",
        fr: "Les variables CSS se définissent avec -- avant le nom de la variable et s'utilisent avec la fonction var(). Exemple: --color: blue; et color: var(--color);"
      }
    },
    {
      id: "mc-017",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 17: SVG Advantage",
        fr: "Question 17: Avantage SVG"
      },
      question: {
        ht: "Sa ki yon avantaj SVG icons yo?",
        fr: "Quel est un avantage des icônes SVG?"
      },
      points: 1,
      options: [
        { ht: "Yo blur lè yo zoom", fr: "Elles se flouttent au zoom" },
        { ht: "Yo ajuste pèfètman", fr: "Elles s'adaptent parfaitement" },
        { ht: "Yo pa ka style", fr: "Elles ne peuvent pas être stylées" },
        { ht: "Yo charge pi dousman", fr: "Elles chargent plus lentement" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "SVG icons yo se vector-based, sa ki vle di yo ajuste nan nenpòt gwosè san yo pa pèdi kalite ak yo ka style ak CSS.",
        fr: "Les icônes SVG sont basées sur des vecteurs, ce qui signifie qu'elles s'adaptent à n'importe quelle taille sans perte de qualité et peuvent être stylées avec CSS."
      }
    },
    {
      id: "mc-018",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 18: Object-Fit Cover",
        fr: "Question 18: Object-Fit Cover"
      },
      question: {
        ht: "Sa object-fit: cover; fè?",
        fr: "Que fait object-fit: cover;?"
      },
      points: 1,
      options: [
        { ht: "Estime imaj la òizontèlman", fr: "Étire l'image horizontalement" },
        { ht: "Asire imaj la ranpli zòn nan san distorsion", fr: "Assure que l'image remplit la zone sans distorsion" },
        { ht: "Blur rebò yo", fr: "Floute les bords" },
        { ht: "Ajoute border", fr: "Ajoute une bordure" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "object-fit: cover; fè imaj la ranpli tout kontenè a nèt ak kenbe proportion li, koupe pati yo ki depase.",
        fr: "object-fit: cover; fait que l'image remplit complètement le conteneur en gardant ses proportions, coupant les parties qui dépassent."
      }
    },
    {
      id: "mc-019",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 19: Default Position",
        fr: "Question 19: Position par Défaut"
      },
      question: {
        ht: "Valè position default la se:",
        fr: "La valeur position par défaut est:"
      },
      points: 1,
      options: [
        { ht: "static", fr: "static" },
        { ht: "relative", fr: "relative" },
        { ht: "absolute", fr: "absolute" },
        { ht: "fixed", fr: "fixed" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "position: static se valè default la. Eleman yo ak position static pa afekte pa top, right, bottom, left oswa z-index.",
        fr: "position: static est la valeur par défaut. Les éléments avec position static ne sont pas affectés par top, right, bottom, left ou z-index."
      }
    },
    {
      id: "mc-020",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 20: REM Unit",
        fr: "Question 20: Unité REM"
      },
      question: {
        ht: "Ki inite ki relatif a gwosè font root la?",
        fr: "Quelle unité est relative à la taille de police racine?"
      },
      points: 1,
      options: [
        { ht: "px", fr: "px" },
        { ht: "rem", fr: "rem" },
        { ht: "%", fr: "%" },
        { ht: "vh", fr: "vh" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "rem (root em) se relatif a font-size root eleman an (anjeneral <html>). 1rem = font-size nan html la.",
        fr: "rem (root em) est relatif au font-size de l'élément racine (généralement <html>). 1rem = la font-size du html."
      }
    },

    // TRUE/FALSE QUESTIONS (5 questions, 1 point each)
    {
      id: "tf-001",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 21: CSS Variables Limitation",
        fr: "Question 21: Limitation Variables CSS"
      },
      question: {
        ht: "CSS variables yo ka sèlman estoke koulè yo.",
        fr: "Les variables CSS ne peuvent stocker que des couleurs."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fo. CSS variables yo ka estoke nenpòt valè CSS: koulè, gwosè, non font, string, ak menm kèk formula kalkil yo.",
        fr: "Faux. Les variables CSS peuvent stocker n'importe quelle valeur CSS: couleurs, tailles, noms de polices, chaînes, et même certaines formules de calcul."
      }
    },
    {
      id: "tf-002",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 22: Z-Index Requirement",
        fr: "Question 22: Exigence Z-Index"
      },
      question: {
        ht: "z-index sèlman travay sou eleman ki positioned.",
        fr: "z-index ne fonctionne que sur les éléments positionnés."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. z-index sèlman ap travay sou eleman yo ki gen position value diferan nan static (relative, absolute, fixed, oswa sticky).",
        fr: "Vrai. z-index ne fonctionne que sur les éléments qui ont une valeur position différente de static (relative, absolute, fixed, ou sticky)."
      }
    },
    {
      id: "tf-003",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 23: Flexbox vs Grid",
        fr: "Question 23: Flexbox vs Grid"
      },
      question: {
        ht: "Flexbox ka ranplase Grid pou layout de dimansyon yo ki konplè.",
        fr: "Flexbox peut remplacer Grid pour les layouts bidimensionnels complexes."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fo. Flexbox se pou yon dimansyon ak Grid se pou de dimansyon yo. Pou layout konplè ak ranje ak kolòn yo ansanm, Grid pi apwopriye.",
        fr: "Faux. Flexbox est pour une dimension et Grid est pour deux dimensions. Pour des layouts complexes avec rangées et colonnes ensemble, Grid est plus approprié."
      }
    },
    {
      id: "tf-004",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 24: Hover Versatility",
        fr: "Question 24: Polyvalence Hover"
      },
      question: {
        ht: ":hover ka itilize sou links, bouton yo, ak divs yo.",
        fr: ":hover peut être utilisé sur les liens, boutons, et divs."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. :hover pseudo-class la ka aplike sou prèske nenpòt eleman HTML, pa sèlman links yo. Li travay ak div, bouton, imaj ak lòt eleman yo.",
        fr: "Vrai. La pseudo-classe :hover peut s'appliquer sur presque n'importe quel élément HTML, pas seulement les liens. Elle fonctionne avec les divs, boutons, images et autres éléments."
      }
    },
    {
      id: "tf-005",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 25: SVG Styling",
        fr: "Question 25: Style SVG"
      },
      question: {
        ht: "Fichye SVG yo ka style ak CSS.",
        fr: "Les fichiers SVG peuvent être stylés avec CSS."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. SVG eleman yo ka resevwa style CSS, espesyalman lè yo inline nan HTML. Ou ka chanje koulè, gwosè ak lòt property yo.",
        fr: "Vrai. Les éléments SVG peuvent recevoir des styles CSS, surtout quand ils sont inline dans le HTML. Vous pouvez changer les couleurs, tailles et autres propriétés."
      }
    },

    // SHORT ANSWER QUESTIONS (5 questions, 1 point each)
    {
      id: "sa-001",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 26: Card Hover Effect",
        fr: "Question 26: Effet Hover de Carte"
      },
      question: {
        ht: "Sa kòd sa a fè?\n.card:hover {\n  transform: scale(1.05);\n}",
        fr: "Que fait ce code?\n.card:hover {\n  transform: scale(1.05);\n}"
      },
      points: 1,
      expectedAnswer: {
        ht: "Li fè card la vin pi gwo yon ti kras lè sourit la sou li.",
        fr: "Il fait grossir la carte légèrement quand la souris la survole."
      },
      explanation: {
        ht: "transform: scale(1.05) agrandi eleman an ak 5% nan gwosè orijinal li a lè hover. Sa kreye yon efè zoom soti.",
        fr: "transform: scale(1.05) agrandit l'élément de 5% de sa taille originale au hover. Cela crée un effet de zoom subtil."
      }
    },
    {
      id: "sa-002",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 27: Missing Attribute",
        fr: "Question 27: Attribut Manquant"
      },
      question: {
        ht: "Idantifye pati ki manke:\n<link rel=\"stylesheet\" ______=\"style.css\">",
        fr: "Identifiez la partie manquante:\n<link rel=\"stylesheet\" ______=\"style.css\">"
      },
      points: 1,
      expectedAnswer: {
        ht: "href",
        fr: "href"
      },
      explanation: {
        ht: "Atribi href la nesesè pou montre ki fichye CSS yo ka konekte. Li gen chemen oswa URL fichye stylesheet la.",
        fr: "L'attribut href est nécessaire pour indiquer quel fichier CSS connecter. Il contient le chemin ou URL du fichier stylesheet."
      }
    },
    {
      id: "sa-003",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 28: Variable Usage Error",
        fr: "Question 28: Erreur Usage Variable"
      },
      question: {
        ht: "Sa ki mal ak itilizasyon variable sa a?\ncolor: var(primary);",
        fr: "Qu'est-ce qui ne va pas avec cette utilisation de variable?\ncolor: var(primary);"
      },
      points: 1,
      expectedAnswer: {
        ht: "-- yo manke, ta dwe: color: var(--primary);",
        fr: "Il manque les --, devrait être: color: var(--primary);"
      },
      explanation: {
        ht: "CSS variables yo bezwen -- anvan non yo lè yo defini ak lè yo itilize nan function var(). Sans sa, variable a pa ka rekonèt.",
        fr: "Les variables CSS ont besoin de -- avant leur nom quand elles sont définies et utilisées dans la fonction var(). Sans cela, la variable ne peut être reconnue."
      }
    },
    {
      id: "sa-004",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 29: Media Query Creation",
        fr: "Question 29: Création Media Query"
      },
      question: {
        ht: "Ekri yon media query ki chanje koulè tèks la vin wouj sou ekran yo ki pi piti pase 500px:",
        fr: "Écrivez une media query qui change la couleur du texte en rouge sur les écrans plus petits que 500px:"
      },
      points: 1,
      expectedAnswer: {
        ht: "@media (max-width: 500px) {\n  p { color: red; }\n}",
        fr: "@media (max-width: 500px) {\n  p { color: red; }\n}"
      },
      explanation: {
        ht: "@media (max-width: 500px) aplike règ yo sèlman sou ekran yo ki gen 500px oswa pi piti. max-width vle di 'maximum largè'.",
        fr: "@media (max-width: 500px) applique les règles seulement sur les écrans qui font 500px ou moins. max-width signifie 'largeur maximum'."
      }
    },
    {
      id: "sa-005",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 30: Z-Index Layering",
        fr: "Question 30: Empilement Z-Index"
      },
      question: {
        ht: "Sa k ap rive?\n.hero-text {\n  position: absolute;\n  z-index: 10;\n}\n.hero img {\n  z-index: 1;\n}",
        fr: "Que va-t-il se passer?\n.hero-text {\n  position: absolute;\n  z-index: 10;\n}\n.hero img {\n  z-index: 1;\n}"
      },
      points: 1,
      expectedAnswer: {
        ht: "Tèks la ap parèt couche sou imaj la.",
        fr: "Le texte apparaîtra en couche au-dessus de l'image."
      },
      explanation: {
        ht: "z-index: 10 pi wo pase z-index: 1, kidonk tèks la ak z-index ki pi wo a ap parèt anlè imaj la.",
        fr: "z-index: 10 est plus élevé que z-index: 1, donc le texte avec le z-index plus élevé apparaîtra au-dessus de l'image."
      }
    }
  ]
};