// HTML/CSS Midterm Exam - Comprehensive Assessment
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

export const htmlCssMidtermExam = {
  examId: 'htmlcss-midterm-2024',
  title: {
    ht: "Egzamen Midterm HTML & CSS",
    fr: "Examen de Mi-Session HTML & CSS"
  },
  description: {
    ht: "Egzamen konplè ki kouvri tout konsèp yo nan HTML ak CSS yo nou aprann nan premye 7 semèn yo.",
    fr: "Examen complet couvrant tous les concepts HTML et CSS appris dans les 7 premières semaines."
  },
  duration: 60, // minutes
  totalPoints: 30,
  passingScore: 21, // 70%
  instructions: {
    ht: [
      "Ou gen 1 è pou fini egzamen an",
      "Gen 30 kesyon nan total (20 multiple choice, 5 true/false, 5 short answer)",
      "Chak kesyon vo 1 pwen",
      "Ou ka itilize editè kòd ou a men pa ka itilize resous ekstèn yo",
      "Yon fwa ou kòmanse, ou pa ka rete egzamen an",
      "Bon chans!"
    ],
    fr: [
      "Vous avez 1 heure pour terminer l'examen",
      "Il y a 30 questions au total (20 choix multiple, 5 vrai/faux, 5 réponses courtes)",
      "Chaque question vaut 1 point",
      "Vous pouvez utiliser votre éditeur de code mais pas de ressources externes",
      "Une fois commencé, vous ne pouvez pas arrêter l'examen",
      "Bonne chance!"
    ]
  },
  questions: [
    // MULTIPLE CHOICE QUESTIONS (20 questions, 1 point each)
    {
      id: "mc-001",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 1: Langaj Estrikti",
        fr: "Question 1: Langage de Structure"
      },
      question: {
        ht: "Ki langaj ki defini estrikti yon paj web?",
        fr: "Quel langage définit la structure d'une page web?"
      },
      points: 1,
      options: [
        { ht: "CSS", fr: "CSS" },
        { ht: "HTML", fr: "HTML" },
        { ht: "JavaScript", fr: "JavaScript" },
        { ht: "Python", fr: "Python" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "HTML (HyperText Markup Language) se langaj ki defini estrikti ak kontan yon paj web yo.",
        fr: "HTML (HyperText Markup Language) est le langage qui définit la structure et le contenu des pages web."
      }
    },
    {
      id: "mc-002",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 2: HTML5 Declaration",
        fr: "Question 2: Déclaration HTML5"
      },
      question: {
        ht: "Ki deklarasyon HTML5 ki kòrèk?",
        fr: "Quelle est la déclaration HTML5 correcte?"
      },
      points: 1,
      options: [
        { ht: "<DOCTYPE html>", fr: "<DOCTYPE html>" },
        { ht: "<!DOCTYPE HTML>", fr: "<!DOCTYPE HTML>" },
        { ht: "<!DOCTYPE html>", fr: "<!DOCTYPE html>" },
        { ht: "<html5>", fr: "<html5>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "<!DOCTYPE html> se deklarasyon kòrèk la pou dokiman HTML5, ak li vin nan tèt dokiman an.",
        fr: "<!DOCTYPE html> est la déclaration correcte pour les documents HTML5, et elle vient en haut du document."
      }
    },
    {
      id: "mc-003",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 3: Kontan Vizib",
        fr: "Question 3: Contenu Visible"
      },
      question: {
        ht: "Ki tag ki montre kontan vizib paj la?",
        fr: "Quel tag affiche le contenu visible de la page?"
      },
      points: 1,
      options: [
        { ht: "<head>", fr: "<head>" },
        { ht: "<meta>", fr: "<meta>" },
        { ht: "<body>", fr: "<body>" },
        { ht: "<footer>", fr: "<footer>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "<body> tag la gen tout kontan ki vizib sou paj web la, tankou tèks, imaj, ak eleman yo.",
        fr: "Le tag <body> contient tout le contenu visible sur la page web, comme le texte, les images, et les éléments."
      }
    },
    {
      id: "mc-004",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 4: Kòmantè HTML",
        fr: "Question 4: Commentaires HTML"
      },
      question: {
        ht: "Chwazi syntax kòrèk la pou yon kòmantè nan HTML.",
        fr: "Choisissez la syntaxe correcte pour un commentaire en HTML."
      },
      points: 1,
      options: [
        { ht: "<!-- commentaire -->", fr: "<!-- commentaire -->" },
        { ht: "// commentaire", fr: "// commentaire" },
        { ht: "/* commentaire */", fr: "/* commentaire */" },
        { ht: "# commentaire", fr: "# commentaire" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "<!-- --> se sintaks kòrèk la pou kòmantè yo nan HTML. Yo pa parèt sou paj la.",
        fr: "<!-- --> est la syntaxe correcte pour les commentaires en HTML. Ils n'apparaissent pas sur la page."
      }
    },
    {
      id: "mc-005",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 5: Title Element",
        fr: "Question 5: Élément Title"
      },
      question: {
        ht: "Eleman <title> la vin nan kote?",
        fr: "L'élément <title> appartient à l'intérieur de ____."
      },
      points: 1,
      options: [
        { ht: "<header>", fr: "<header>" },
        { ht: "<body>", fr: "<body>" },
        { ht: "<head>", fr: "<head>" },
        { ht: "<main>", fr: "<main>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "<title> eleman an dwe nan <head> seksyon an ak li defini tit paj la ki parèt nan tab navigatè a.",
        fr: "L'élément <title> doit être dans la section <head> et il définit le titre de la page qui apparaît dans l'onglet du navigateur."
      }
    },
    {
      id: "mc-006",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 6: Line Break",
        fr: "Question 6: Saut de Ligne"
      },
      question: {
        ht: "Ki tag HTML ki mete yon line break?",
        fr: "Quel tag HTML insère un saut de ligne?"
      },
      points: 1,
      options: [
        { ht: "<p>", fr: "<p>" },
        { ht: "<br>", fr: "<br>" },
        { ht: "<hr>", fr: "<hr>" },
        { ht: "<break>", fr: "<break>" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "<br> tag la kreye yon line break nan tèks la. Li se yon self-closing tag.",
        fr: "Le tag <br> crée un saut de ligne dans le texte. C'est un tag auto-fermant."
      }
    },
    {
      id: "mc-007",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 7: Horizontal Rule",
        fr: "Question 7: Ligne Horizontale"
      },
      question: {
        ht: "Ki eleman ki kreye yon règ òizontèl oswa divider?",
        fr: "Quel élément crée une règle horizontale ou un diviseur?"
      },
      points: 1,
      options: [
        { ht: "<line>", fr: "<line>" },
        { ht: "<br>", fr: "<br>" },
        { ht: "<hr>", fr: "<hr>" },
        { ht: "<border>", fr: "<border>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "<hr> (horizontal rule) kreye yon liy òizontèl ki itilize pou separe seksyon yo.",
        fr: "<hr> (horizontal rule) crée une ligne horizontale utilisée pour séparer les sections."
      }
    },
    {
      id: "mc-008",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 8: Alt Attribute",
        fr: "Question 8: Attribut Alt"
      },
      question: {
        ht: "Sa atribi alt la fè nan tag <img>?",
        fr: "Que fait l'attribut alt dans le tag <img>?"
      },
      points: 1,
      options: [
        { ht: "Ajoute animasyon", fr: "Ajoute une animation" },
        { ht: "Montre tèks alternatif si imaj la echwe", fr: "Affiche un texte alternatif si l'image échoue" },
        { ht: "Ajoute title bar", fr: "Ajoute une barre de titre" },
        { ht: "Chanje koulè", fr: "Change la couleur" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Atribi alt la bay tèks deskriptif pou imaj yo, ki montre si imaj la pa ka load ak ki ede ak aksesibilite.",
        fr: "L'attribut alt fournit un texte descriptif pour les images, qui s'affiche si l'image ne peut pas se charger et aide avec l'accessibilité."
      }
    },
    {
      id: "mc-009",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 9: List Item",
        fr: "Question 9: Élément de Liste"
      },
      question: {
        ht: "Ki tag ki defini yon eleman lis?",
        fr: "Quel tag définit un élément de liste?"
      },
      points: 1,
      options: [
        { ht: "<item>", fr: "<item>" },
        { ht: "<li>", fr: "<li>" },
        { ht: "<ul>", fr: "<ul>" },
        { ht: "<list>", fr: "<list>" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "<li> (list item) defini chak eleman nan yon lis, tankou <ul> ak <ol> yo.",
        fr: "<li> (list item) définit chaque élément dans une liste, qu'elle soit <ul> ou <ol>."
      }
    },
    {
      id: "mc-010",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 10: Navigation Element",
        fr: "Question 10: Élément de Navigation"
      },
      question: {
        ht: "Ki eleman ki groupe navigasyon links yo semantikman?",
        fr: "Quel élément groupe les liens de navigation sémantiquement?"
      },
      points: 1,
      options: [
        { ht: "<menu>", fr: "<menu>" },
        { ht: "<links>", fr: "<links>" },
        { ht: "<nav>", fr: "<nav>" },
        { ht: "<header>", fr: "<header>" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "<nav> eleman an itilize pou groupe navigasyon links yo ak li bay sans semantik nan dokiman an.",
        fr: "L'élément <nav> est utilisé pour grouper les liens de navigation et il donne du sens sémantique au document."
      }
    },
    {
      id: "mc-011",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 11: CSS Abreviation",
        fr: "Question 11: Abréviation CSS"
      },
      question: {
        ht: "CSS vle di:",
        fr: "CSS signifie:"
      },
      points: 1,
      options: [
        { ht: "Color Style System", fr: "Color Style System" },
        { ht: "Cascading Style Sheets", fr: "Cascading Style Sheets" },
        { ht: "Creative Sheet Styles", fr: "Creative Sheet Styles" },
        { ht: "Computer Styling Syntax", fr: "Computer Styling Syntax" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "CSS vle di Cascading Style Sheets, ki se langaj pou style dokiman HTML yo.",
        fr: "CSS signifie Cascading Style Sheets, qui est le langage pour styliser les documents HTML."
      }
    },
    {
      id: "mc-012",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 12: Class Selector",
        fr: "Question 12: Sélecteur de Classe"
      },
      question: {
        ht: "Ki senbòl ki kòmanse yon class selector nan CSS?",
        fr: "Quel symbole commence un sélecteur de classe en CSS?"
      },
      points: 1,
      options: [
        { ht: "#", fr: "#" },
        { ht: ".", fr: "." },
        { ht: "$", fr: "$" },
        { ht: "/", fr: "/" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Pwen (.) la kòmanse yon class selector nan CSS. Egzanp: .my-class",
        fr: "Le point (.) commence un sélecteur de classe en CSS. Exemple: .my-class"
      }
    },
    {
      id: "mc-013",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 13: Text Color",
        fr: "Question 13: Couleur du Texte"
      },
      question: {
        ht: "Pou chanje koulè tèks la, itilize:",
        fr: "Pour changer la couleur du texte, utilisez:"
      },
      points: 1,
      options: [
        { ht: "font-color", fr: "font-color" },
        { ht: "text-style", fr: "text-style" },
        { ht: "color", fr: "color" },
        { ht: "font-style", fr: "font-style" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "Property 'color' nan CSS la itilize pou chanje koulè tèks eleman yo.",
        fr: "La propriété 'color' en CSS est utilisée pour changer la couleur du texte des éléments."
      }
    },
    {
      id: "mc-014",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 14: Padding Property",
        fr: "Question 14: Propriété Padding"
      },
      question: {
        ht: "Ki property ki ajoute espas nan anndan border eleman an?",
        fr: "Quelle propriété ajoute de l'espace à l'intérieur de la bordure d'un élément?"
      },
      points: 1,
      options: [
        { ht: "margin", fr: "margin" },
        { ht: "padding", fr: "padding" },
        { ht: "border", fr: "border" },
        { ht: "spacing", fr: "spacing" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Padding ajoute espas nan anndan border eleman an, ant border ak kontan an.",
        fr: "Padding ajoute de l'espace à l'intérieur de la bordure d'un élément, entre la bordure et le contenu."
      }
    },
    {
      id: "mc-015",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 15: Margin Property",
        fr: "Question 15: Propriété Margin"
      },
      question: {
        ht: "Ki property ki ajoute espas nan deyò border la?",
        fr: "Quelle propriété ajoute de l'espace à l'extérieur de la bordure?"
      },
      points: 1,
      options: [
        { ht: "margin", fr: "margin" },
        { ht: "padding", fr: "padding" },
        { ht: "gap", fr: "gap" },
        { ht: "outline", fr: "outline" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Margin ajoute espas nan deyò border eleman an, separe li ak eleman yo ki tou pre.",
        fr: "Margin ajoute de l'espace à l'extérieur de la bordure d'un élément, le séparant des éléments voisins."
      }
    },
    {
      id: "mc-016",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 16: Rounded Corners",
        fr: "Question 16: Coins Arrondis"
      },
      question: {
        ht: "Property CSS la pou kwen yo ki wonn se:",
        fr: "La propriété CSS pour les coins arrondis est:"
      },
      points: 1,
      options: [
        { ht: "border-style", fr: "border-style" },
        { ht: "corner-radius", fr: "corner-radius" },
        { ht: "border-radius", fr: "border-radius" },
        { ht: "round", fr: "round" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "border-radius property a kreye kwen wonn yo sou eleman yo. Egzanp: border-radius: 5px;",
        fr: "La propriété border-radius crée des coins arrondis sur les éléments. Exemple: border-radius: 5px;"
      }
    },
    {
      id: "mc-017",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 17: Flexbox Centering",
        fr: "Question 17: Centrage Flexbox"
      },
      question: {
        ht: "Pou santre eleman yo òizontèlman nan Flexbox, itilize:",
        fr: "Pour centrer les éléments horizontalement en Flexbox, utilisez:"
      },
      points: 1,
      options: [
        { ht: "align-items: center;", fr: "align-items: center;" },
        { ht: "justify-content: center;", fr: "justify-content: center;" },
        { ht: "text-align: center;", fr: "text-align: center;" },
        { ht: "center-items: flex;", fr: "center-items: flex;" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "justify-content: center; santre eleman yo sou main axis la nan flexbox (òizontèlman nan default).",
        fr: "justify-content: center; centre les éléments sur le main axis en flexbox (horizontalement par défaut)."
      }
    },
    {
      id: "mc-018",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 18: Media Query Syntax",
        fr: "Question 18: Syntaxe Media Query"
      },
      question: {
        ht: "Sintaks kòrèk la pou yon media query se:",
        fr: "La syntaxe correcte pour une media query est:"
      },
      points: 1,
      options: [
        { ht: "@media screen {}", fr: "@media screen {}" },
        { ht: "@responsive {}", fr: "@responsive {}" },
        { ht: "media-query {}", fr: "media-query {}" },
        { ht: "@media (min-width: 768px) {}", fr: "@media (min-width: 768px) {}" }
      ],
      correctAnswer: 3,
      explanation: {
        ht: "@media (min-width: 768px) {} se sintaks kòrèk la pou yon media query ak kondisyon.",
        fr: "@media (min-width: 768px) {} est la syntaxe correcte pour une media query avec condition."
      }
    },
    {
      id: "mc-019",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 19: Design Approach",
        fr: "Question 19: Approche de Design"
      },
      question: {
        ht: "Ki prensip layout ki kòmanse ak pi ti ekran yo an premye?",
        fr: "Quel principe de layout commence par les plus petits écrans en premier?"
      },
      points: 1,
      options: [
        { ht: "Desktop-first", fr: "Desktop-first" },
        { ht: "Adaptive", fr: "Adaptive" },
        { ht: "Mobile-first", fr: "Mobile-first" },
        { ht: "Print-first", fr: "Print-first" }
      ],
      correctAnswer: 2,
      explanation: {
        ht: "Mobile-first approach kòmanse ak style pou pi ti ekran yo (mobile) ak pi ajoute enhancement pou pi gwo ekran yo.",
        fr: "L'approche Mobile-first commence avec les styles pour les plus petits écrans (mobile) puis ajoute des améliorations pour les plus grands écrans."
      }
    },
    {
      id: "mc-020",
      type: "multiple-choice" as const,
      title: {
        ht: "Kesyon 20: Box-Sizing Property",
        fr: "Question 20: Propriété Box-Sizing"
      },
      question: {
        ht: "Sa box-sizing: border-box; asire?",
        fr: "Qu'est-ce que box-sizing: border-box; assure?"
      },
      points: 1,
      options: [
        { ht: "Border yo vin envisib", fr: "Les bordures deviennent invisibles" },
        { ht: "Padding ak border konte nan largè total la", fr: "Padding et bordure comptent dans la largeur totale" },
        { ht: "Ajoute margin", fr: "Ajoute une marge" },
        { ht: "Fè bwat la wonn", fr: "Rend la boîte ronde" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "box-sizing: border-box; fè padding ak border yo konte nan largè ak otè total eleman an, sa ki fè pi fasil pou kalkile.",
        fr: "box-sizing: border-box; fait que le padding et la bordure comptent dans la largeur et hauteur totales de l'élément, ce qui facilite les calculs."
      }
    },

    // TRUE/FALSE QUESTIONS (5 questions, 1 point each)
    {
      id: "tf-001",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 21: Head Tag Content",
        fr: "Question 21: Contenu du Tag Head"
      },
      question: {
        ht: "Tag <head> la gen tout kontan vizib sou yon paj web.",
        fr: "Le tag <head> contient tout le contenu visible sur une page web."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fo. Tag <head> la gen metadata ak enfòmasyon pou navigatè a, men li pa gen kontan vizib. Se <body> tag la ki gen kontan vizib.",
        fr: "Faux. Le tag <head> contient des métadonnées et informations pour le navigateur, mais pas de contenu visible. C'est le tag <body> qui contient le contenu visible."
      }
    },
    {
      id: "tf-002",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 22: External Stylesheet",
        fr: "Question 22: Feuille de Style Externe"
      },
      question: {
        ht: "CSS ka aplike sou plizyè paj yo ak yon sèl external stylesheet.",
        fr: "CSS peut être appliqué à plusieurs pages en utilisant une seule feuille de style externe."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. Yon external CSS file ka link ak plizyè paj HTML yo, sa ki pèmèt style konsèy nan tout yon sit web.",
        fr: "Vrai. Un fichier CSS externe peut être lié à plusieurs pages HTML, permettant un style cohérent à travers tout un site web."
      }
    },
    {
      id: "tf-003",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 23: Character Encoding",
        fr: "Question 23: Encodage des Caractères"
      },
      question: {
        ht: "Tag <meta charset=\"UTF-8\"> la ede montre karaktè espesyal yo kòrèkteman.",
        fr: "Le tag <meta charset=\"UTF-8\"> aide à afficher les caractères spéciaux correctement."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. UTF-8 encoding pèmèt montre karaktè nan tout lang yo kòrèkteman, tankou aksè ak senbòl espesyal yo.",
        fr: "Vrai. L'encodage UTF-8 permet d'afficher correctement les caractères de toutes les langues, y compris les accents et symboles spéciaux."
      }
    },
    {
      id: "tf-004",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 24: Flexbox Dimensions",
        fr: "Question 24: Dimensions Flexbox"
      },
      question: {
        ht: "Flexbox travay sou layout yo ki gen youn ak de dimansyon yo.",
        fr: "Flexbox fonctionne sur les layouts à une et deux dimensions."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 1,
      explanation: {
        ht: "Fo. Flexbox se yon one-dimensional layout method. Li travay sou youn sèl aks nan yon moman (òizontèl oswa vètikèl). CSS Grid se sa ki travay ak de dimansyon yo.",
        fr: "Faux. Flexbox est une méthode de layout unidimensionnelle. Elle travaille sur un seul axe à la fois (horizontal ou vertical). CSS Grid est ce qui fonctionne avec deux dimensions."
      }
    },
    {
      id: "tf-005",
      type: "true-false" as const,
      title: {
        ht: "Kesyon 25: Media Queries",
        fr: "Question 25: Media Queries"
      },
      question: {
        ht: "Itilize @media pèmèt style yo chanje selon largè aparèy la.",
        fr: "Utiliser @media permet aux styles de changer selon la largeur de l'appareil."
      },
      points: 1,
      options: [
        { ht: "Vre", fr: "Vrai" },
        { ht: "Fo", fr: "Faux" }
      ],
      correctAnswer: 0,
      explanation: {
        ht: "Vre. Media queries ak @media pèmèt nou aplike style diferan selon karakteristik aparèy la tankou largè, otè, oswa orientasyon.",
        fr: "Vrai. Les media queries avec @media permettent d'appliquer différents styles selon les caractéristiques de l'appareil comme la largeur, hauteur, ou orientation."
      }
    },

    // SHORT ANSWER QUESTIONS (5 questions, 1 point each)
    {
      id: "sa-001",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 26: Identify Error",
        fr: "Question 26: Identifier l'Erreur"
      },
      question: {
        ht: "Idantifye erè a: <img src=\"photo.jpg\" description=\"My photo\">",
        fr: "Identifiez l'erreur: <img src=\"photo.jpg\" description=\"My photo\">"
      },
      points: 1,
      expectedAnswer: {
        ht: "Atribi a dwe 'alt=\"My photo\"', pa 'description'.",
        fr: "L'attribut devrait être 'alt=\"My photo\"', pas 'description'."
      },
      explanation: {
        ht: "Atribi kòrèk la pou tèks alternatif nan tag <img> se 'alt', pa 'description'. Sa enpòtan pou aksesibilite.",
        fr: "L'attribut correct pour le texte alternatif dans le tag <img> est 'alt', pas 'description'. C'est important pour l'accessibilité."
      }
    },
    {
      id: "sa-002",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 27: CSS Interpretation",
        fr: "Question 27: Interprétation CSS"
      },
      question: {
        ht: "Sa CSS sa a ap fè?\nh1, h2 {\n  color: darkblue;\n  text-align: center;\n}",
        fr: "Que fera ce CSS?\nh1, h2 {\n  color: darkblue;\n  text-align: center;\n}"
      },
      points: 1,
      expectedAnswer: {
        ht: "Li koulè tout tit H1 ak H2 yo nan ble fonse ak santre yo.",
        fr: "Il colore tous les titres H1 et H2 en bleu foncé et les centre."
      },
      explanation: {
        ht: "Règ CSS sa a ap aplike koulè ble fonse ak text alignment center sou tou eleman H1 ak H2 yo.",
        fr: "Cette règle CSS applique la couleur bleu foncé et l'alignement centré à tous les éléments H1 et H2."
      }
    },
    {
      id: "sa-003",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 28: Margin Calculation",
        fr: "Question 28: Calcul de Marge"
      },
      question: {
        ht: "Bay:\n.card {\n  margin: 20px;\n  padding: 10px;\n}\nKonbyen espas total nan deyò yo ki separe chak card vètikèlman?",
        fr: "Donné:\n.card {\n  margin: 20px;\n  padding: 10px;\n}\nCombien d'espace extérieur total sépare chaque card verticalement?"
      },
      points: 1,
      expectedAnswer: {
        ht: "40px (20px margin nan tèt + 20px nan anba = 40px total ant de card yo)",
        fr: "40px (20px margin en haut + 20px en bas = 40px total entre deux cartes)"
      },
      explanation: {
        ht: "Chak card gen 20px margin nan tout kote. Ant de card ki stack yo, gen 20px + 20px = 40px espas total.",
        fr: "Chaque carte a 20px de marge de tous les côtés. Entre deux cartes empilées, il y a 20px + 20px = 40px d'espace total."
      }
    },
    {
      id: "sa-004",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 29: Media Query Writing",
        fr: "Question 29: Écriture Media Query"
      },
      question: {
        ht: "Ekri yon senp media query ki chanje background body a vin ble klè sou ekran 600px ak pi gwo.",
        fr: "Écrivez une simple media query qui change l'arrière-plan du body en bleu clair sur les écrans de 600px et plus."
      },
      points: 1,
      expectedAnswer: {
        ht: "@media (min-width: 600px) {\n  body { background-color: lightblue; }\n}",
        fr: "@media (min-width: 600px) {\n  body { background-color: lightblue; }\n}"
      },
      explanation: {
        ht: "Media query sa a ap aplike background ble klè a sou body sèlman lè viewport la gen 600px oswa pi gwo.",
        fr: "Cette media query applique un arrière-plan bleu clair au body seulement quand le viewport fait 600px ou plus."
      }
    },
    {
      id: "sa-005",
      type: "short-answer" as const,
      title: {
        ht: "Kesyon 30: Flex Behavior",
        fr: "Question 30: Comportement Flex"
      },
      question: {
        ht: "Eksplike sa ki pase lè ou resize navigatè a apre ou aplike règ sa a:\n.card { flex: 1 1 100%; }\n@media (min-width: 768px) {\n  .card { flex: 1 1 45%; }\n}",
        fr: "Expliquez ce qui se passe quand vous redimensionnez le navigateur après avoir appliqué cette règle:\n.card { flex: 1 1 100%; }\n@media (min-width: 768px) {\n  .card { flex: 1 1 45%; }\n}"
      },
      points: 1,
      expectedAnswer: {
        ht: "Cards yo gen largè konplè (stack) sou ti ekran yo, epi yo montre de nan yon ranje lè viewport la rive 768px ak pi gwo.",
        fr: "Les cartes sont en largeur complète (empilées) sur les petits écrans, puis s'affichent deux par rangée quand le viewport atteint 768px et plus."
      },
      explanation: {
        ht: "Sou ekran yo ki pi ti pase 768px, cards yo pran 100% largè ak yo stack. Sou ekran yo ki pi gwo pase 768px, yo pran 45% largè ak ka mete de nan yon ranje.",
        fr: "Sur les écrans de moins de 768px, les cartes prennent 100% de largeur et s'empilent. Sur les écrans de 768px et plus, elles prennent 45% de largeur et peuvent tenir deux par rangée."
      }
    }
  ]
};