export interface HtmlCssCard {
  id: number;
  type: 'lesson' | 'practice' | 'quiz' | 'mini-project';
  titleHt: string;
  titleFr: string;
  contentHt: string;
  contentFr: string;
  codeExample?: string;
  exercises?: {
    id: number;
    instructionHt: string;
    instructionFr: string;
    starterCode?: string;
    solution?: string;
    hint?: string;
  }[];
  quiz?: {
    id: number;
    questionHt: string;
    questionFr: string;
    options: {
      ht: string;
      fr: string;
    }[];
    correctAnswer: number;
    explanationHt: string;
    explanationFr: string;
  }[];
}

const htmlCssWeek11Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Prezantasyon Pseudo-Classes ak Pseudo-Elements',
    titleFr: 'Introduction aux Pseudo-Classes et Pseudo-Éléments',
    contentHt: `**Pseudo-Classes** ak **Pseudo-Elements** yo pèmèt nou target elements yo nan eta espesifik ak kreye virtual content san nou pa bezwen ajoute HTML.

**Pseudo-Classes (:**) - Target eta yo ak pozisyon yo:
- **:hover** - Lè mouse hover
- **:focus** - Lè form field aktif
- **:first-child** - Premye pitit nan parent la
- **:nth-child()** - Target nth pitit

**Pseudo-Elements (::**) - Kreye virtual elements:
- **::before** - Ajoute content avan element la
- **::after** - Ajoute content apre element la`,
    contentFr: `**Pseudo-Classes** et **Pseudo-Éléments** nous permettent de cibler des éléments dans des états spécifiques et créer du contenu virtuel sans ajouter de HTML.

**Pseudo-Classes (:**) - Ciblent états et positions:
- **:hover** - Lors du survol souris
- **:focus** - Quand champ formulaire actif
- **:first-child** - Premier enfant du parent
- **:nth-child()** - Cible le nième enfant

**Pseudo-Éléments (::**) - Créent éléments virtuels:
- **::before** - Ajoute contenu avant l'élément
- **::after** - Ajoute contenu après l'élément`,
    codeExample: `/* Pseudo-Classes */
nav a:hover {
  color: #ffd43b;
  text-decoration: underline;
}

.card:first-child {
  border: 2px solid #ffd43b;
}

/* Pseudo-Elements */
h2::before {
  content: "▹ ";
  color: #ffd43b;
  font-weight: bold;
}

/* Text selection */
::selection {
  background-color: #ffd43b;
  color: #111;
}`
  },
  
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Pseudo-Classes pou Eta ak Pozisyon',
    titleFr: 'Pseudo-Classes pour États et Position',
    contentHt: `**User Interaction States:**
- **:hover** - Lè itilizatè a hover sou element la
- **:focus** - Pou accessibility ak form interactions
- **:active** - Pandan y ap peze button an

**Position-Based Selectors:**
- **:first-child** / **:last-child** - Premye ak dènye yo
- **:nth-child(n)** - Seleksyone nòn pitit la
- **:nth-child(odd/even)** - Pou alternating patterns

**Advanced Patterns:**
- **:nth-child(3n+1)** - Chak twazyèm kòmanse nan 1
- **:not()** - Exclude certain elements`,
    contentFr: `**États d'Interaction Utilisateur:**
- **:hover** - Quand utilisateur survole élément
- **:focus** - Pour accessibilité et interactions formulaire
- **:active** - Pendant qu'il appuie sur bouton

**Sélecteurs Basés Position:**
- **:first-child** / **:last-child** - Premier et dernier
- **:nth-child(n)** - Sélectionne le nième enfant
- **:nth-child(odd/even)** - Pour motifs alternés

**Motifs Avancés:**
- **:nth-child(3n+1)** - Chaque troisième commençant à 1
- **:not()** - Exclure certains éléments`,
    codeExample: `/* Hover effects */
.button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

/* Focus for accessibility */
input:focus {
  outline: 2px solid #ffd43b;
  box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.3);
}

/* First and last child */
.card:first-child {
  margin-top: 0;
}
.card:last-child {
  margin-bottom: 0;
}

/* Alternating colors */
.card:nth-child(odd) {
  background: #f8f9fa;
}
.card:nth-child(even) {
  background: white;
}`
  },

  {
    id: 3,
    type: 'lesson',
    titleHt: 'Pseudo-Elements pou Virtual Content',
    titleFr: 'Pseudo-Éléments pour Contenu Virtuel',
    contentHt: `**::before ak ::after** yo kreye virtual elements ki gen:
- **content** property (obligatè)
- **display: block** pa default
- Position yo relative ak parent element la

**Use Cases:**
- Icons ak symbols avan text
- Decorative lines ak dividers
- Tooltips ak badges
- Custom bullets ak numbering

**Important:** ::before ak ::after yo bezwen **content** property, menm si li vid (content: "";)`,
    contentFr: `**::before et ::after** créent éléments virtuels qui ont:
- **content** property (obligatoire)
- **display: block** par défaut
- Position relative à l'élément parent

**Cas d'Usage:**
- Icônes et symboles avant texte
- Lignes décoratives et séparateurs
- Tooltips et badges
- Puces et numérotation personnalisées

**Important:** ::before et ::after ont besoin de **content** property, même si vide (content: "";)`,
    codeExample: `/* Adding icons */
h2::before {
  content: "★ ";
  color: #ffd43b;
  font-weight: bold;
}

/* Decorative elements */
.section::after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #ffd43b;
  margin: 1rem auto;
}

/* Custom bullets */
ul.custom li::before {
  content: "→ ";
  color: #007bff;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Footer attribution */
footer::after {
  content: " Made with CSS ❤️";
  font-size: 0.9rem;
  color: #999;
}`
  },

  {
    id: 4,
    type: 'lesson',
    titleHt: ':nth-child() ak Advanced Selectors',
    titleFr: ':nth-child() et Sélecteurs Avancés',
    contentHt: `**:nth-child()** aksèpte formulas ak keywords:

**Simple Keywords:**
- **odd** - Elements ki inpè (1, 3, 5...)
- **even** - Elements ki pè (2, 4, 6...)

**Numeric Formulas:**
- **3n** - Chak twazyèm (3, 6, 9...)  
- **3n+1** - Chak twazyèm kòmanse nan 1 (1, 4, 7...)
- **-n+3** - Premye twa yo sèlman (1, 2, 3)

**Practical Applications:**
- Alternate row colors nan tables
- Highlight every 3rd card
- Special styling pou first few items`,
    contentFr: `**:nth-child()** accepte formules et mots-clés:

**Mots-Clés Simples:**
- **odd** - Éléments impairs (1, 3, 5...)
- **even** - Éléments pairs (2, 4, 6...)

**Formules Numériques:**
- **3n** - Chaque troisième (3, 6, 9...)
- **3n+1** - Chaque troisième commençant à 1 (1, 4, 7...)
- **-n+3** - Seulement les trois premiers (1, 2, 3)

**Applications Pratiques:**
- Couleurs alternées dans tableaux
- Mettre en évidence chaque 3e carte
- Style spécial pour premiers éléments`,
    codeExample: `/* Alternating card colors */
.card:nth-child(odd) {
  background: #f8f9fa;
}
.card:nth-child(even) {
  background: white;
}

/* Every 3rd element */
.grid-item:nth-child(3n) {
  border-right: none;
}

/* First 3 items special */
.project:nth-child(-n+3) {
  border: 2px solid #ffd43b;
}

/* Complex pattern - every 4th starting at 2 */
.testimonial:nth-child(4n+2) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}`
  },

  {
    id: 5,
    type: 'lesson',
    titleHt: 'Focus States ak Accessibility',
    titleFr: 'États de Focus et Accessibilité',
    contentHt: `**:focus** se yon pseudo-class esansyèl pou accessibility. Li montre itilizatè yo (spesyalman keyboard users) ki element ki aktif.

**Focus Best Practices:**
- Toujou gen visible focus indicator
- Use color ak outline together
- Avoid outline: none san replacement
- Test ak keyboard navigation

**Modern Focus Styles:**
- **:focus-visible** - Sèlman lè keyboard ap navige
- **:focus-within** - Lè yon pitit gen focus
- Custom focus rings ak box-shadow`,
    contentFr: `**:focus** est pseudo-class essentielle pour accessibilité. Elle montre aux utilisateurs (spécialement keyboard users) quel élément est actif.

**Bonnes Pratiques Focus:**
- Toujours avoir indicateur focus visible
- Utiliser couleur et contour ensemble
- Éviter outline: none sans remplacement
- Tester avec navigation clavier

**Styles Focus Modernes:**
- **:focus-visible** - Seulement quand clavier navigue
- **:focus-within** - Quand un enfant a le focus
- Anneaux focus personnalisés avec box-shadow`,
    codeExample: `/* Good focus styles */
button:focus,
input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Modern focus-visible */
button:focus-visible {
  outline: 2px solid #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Focus within container */
.form-group:focus-within {
  background: #f8f9fa;
  border-color: #007bff;
}

/* Custom focus for links */
a:focus {
  background: rgba(255, 212, 59, 0.3);
  border-radius: 3px;
  padding: 2px 4px;
  margin: -2px -4px;
}`
  },

  {
    id: 6,
    type: 'lesson',
    titleHt: 'Custom Selection ak Other Pseudo-Elements',
    titleFr: 'Sélection Personnalisée et Autres Pseudo-Éléments',
    contentHt: `**::selection** pèmèt nou customize ki jan text highlighted yo gade.

**Other Useful Pseudo-Elements:**
- **::first-line** - Premye liy nan yon paragraph
- **::first-letter** - Premye lèt pou drop caps
- **::placeholder** - Placeholder text nan form inputs

**Styling Guidelines:**
- Use limited colors ak ::selection
- ::first-letter bon pou magazine-style layouts
- ::placeholder dwe readable ak accessible`,
    contentFr: `**::selection** nous permet de personnaliser l'apparence du texte surligné.

**Autres Pseudo-Éléments Utiles:**
- **::first-line** - Première ligne d'un paragraphe
- **::first-letter** - Première lettre pour lettrines
- **::placeholder** - Texte placeholder dans formulaires

**Directives de Style:**
- Utiliser couleurs limitées avec ::selection
- ::first-letter bon pour layouts magazine
- ::placeholder doit être lisible et accessible`,
    codeExample: `/* Custom text selection */
::selection {
  background: #ffd43b;
  color: #111;
  text-shadow: none;
}

/* Different selection for specific areas */
.hero ::selection {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Drop cap effect */
.article p:first-child::first-letter {
  font-size: 3rem;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin: 0 8px 0 0;
  color: #ffd43b;
}

/* Custom placeholder */
input::placeholder {
  color: #999;
  font-style: italic;
  opacity: 1;
}`
  },

  {
    id: 7,
    type: 'quiz',
    titleHt: 'Quiz - Pseudo-Classes ak Pseudo-Elements',
    titleFr: 'Quiz - Pseudo-Classes et Pseudo-Éléments',
    contentHt: 'Test konesans ou sou pseudo-selectors yo',
    contentFr: 'Testez vos connaissances sur les pseudo-sélecteurs',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki senbòl la ki endike yon pseudo-class?',
        questionFr: 'Quel symbole indique une pseudo-class?',
        options: [
          { ht: '.', fr: '.' },
          { ht: ':', fr: ':' },
          { ht: '::', fr: '::' },
          { ht: '#', fr: '#' }
        ],
        correctAnswer: 1,
        explanationHt: 'Pseudo-classes yo kòmanse ak yon sèl colon (:) tankou :hover, :focus, :first-child.',
        explanationFr: 'Les pseudo-classes commencent par un seul deux-points (:) comme :hover, :focus, :first-child.'
      },
      {
        id: 2,
        questionHt: 'Ki senbòl la ki endike yon pseudo-element?',
        questionFr: 'Quel symbole indique un pseudo-élément?',
        options: [
          { ht: ':', fr: ':' },
          { ht: '::', fr: '::' },
          { ht: '...', fr: '...' },
          { ht: '--', fr: '--' }
        ],
        correctAnswer: 1,
        explanationHt: 'Pseudo-elements yo kòmanse ak de colon (::) tankou ::before, ::after, ::selection.',
        explanationFr: 'Les pseudo-éléments commencent par deux deux-points (::) comme ::before, ::after, ::selection.'
      },
      {
        id: 3,
        questionHt: 'Ki pwopryete ki obligatè pou ::before ak ::after?',
        questionFr: 'Quelle propriété est obligatoire pour ::before et ::after?',
        options: [
          { ht: 'display', fr: 'display' },
          { ht: 'content', fr: 'content' },
          { ht: 'position', fr: 'position' },
          { ht: 'color', fr: 'color' }
        ],
        correctAnswer: 1,
        explanationHt: 'content property a obligatè pou ::before ak ::after, menm si li vid (content: "";).',
        explanationFr: 'La propriété content est obligatoire pour ::before et ::after, même si vide (content: "";).'
      }
    ]
  },

  {
    id: 8,
    type: 'practice',
    titleHt: 'Pratik - Smart Selectors ak Hover Effects',
    titleFr: 'Pratique - Sélecteurs Intelligents et Effets de Survol',
    contentHt: 'Kreye interactive effects ak decorative elements ak pseudo-selectors yo',
    contentFr: 'Créer effets interactifs et éléments décoratifs avec pseudo-sélecteurs',
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute hover effects sou navigation links yo ak custom focus styles',
        instructionFr: 'Ajouter effets de survol sur liens navigation avec styles focus personnalisés',
        starterCode: `nav a {
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  /* Ajoute hover ak focus styles */
}`,
        solution: `nav a {
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

nav a:hover {
  color: #ffd43b;
  background: rgba(255, 212, 59, 0.1);
  text-decoration: underline;
}

nav a:focus {
  outline: 2px solid #ffd43b;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(255, 212, 59, 0.25);
}`,
        hint: 'Use transition pou smooth effects ak combine color ak background changes'
      },
      {
        id: 2,
        instructionHt: 'Itilize ::before pou ajoute icons ak :nth-child() pou alternating colors',
        instructionFr: 'Utiliser ::before pour ajouter icônes et :nth-child() pour couleurs alternées',
        starterCode: `h2 {
  margin-bottom: 1rem;
  /* Ajoute icon ak ::before */
}

.card {
  background: white;
  /* Ajoute alternating colors */
}`,
        solution: `h2::before {
  content: "▹ ";
  color: #ffd43b;
  font-weight: bold;
  margin-right: 0.5rem;
}

.card {
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.card:nth-child(odd) {
  background: #f8f9fa;
}

.card:nth-child(even) {
  background: white;
}

.card:first-child {
  border: 2px solid #ffd43b;
  background: #fff9e6;
}`,
        hint: 'Use content property ak color pou icons, ak combine multiple pseudo-selectors'
      }
    ]
  },

  {
    id: 9,
    type: 'lesson',
    titleHt: 'Advanced Pseudo-Selector Combinations',
    titleFr: 'Combinaisons Avancées de Pseudo-Sélecteurs',
    contentHt: `Ou ka **konbine** pseudo-classes ak pseudo-elements pou effects pi sophistike yo.

**Combination Examples:**
- **a:hover::after** - Ajoute content lè hover
- **.card:first-child::before** - Icon sou premye card sèlman
- **input:focus + label** - Style label lè input focus

**Layered Effects:**
- Transitions ak pseudo-states
- Multiple pseudo-elements sou menm element
- Conditional decorations based on position`,
    contentFr: `Vous pouvez **combiner** pseudo-classes et pseudo-éléments pour effets plus sophistiqués.

**Exemples de Combinaison:**
- **a:hover::after** - Ajouter contenu au survol
- **.card:first-child::before** - Icône sur première carte seulement
- **input:focus + label** - Style label quand input focus

**Effets Superposés:**
- Transitions avec pseudo-états
- Multiples pseudo-éléments sur même élément
- Décorations conditionnelles basées position`,
    codeExample: `/* Hover underline effect */
nav a {
  position: relative;
}
nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffd43b;
  transition: width 0.3s ease;
}
nav a:hover::after {
  width: 100%;
}

/* First card special decoration */
.card:first-child::before {
  content: "★ Featured";
  position: absolute;
  top: -10px;
  right: 10px;
  background: #ffd43b;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #111;
}`
  },

  {
    id: 10,
    type: 'mini-project',
    titleHt: 'Mini Pwojè - Smart Selectors ak Finishing Touches',
    titleFr: 'Mini Projet - Sélecteurs Intelligents et Touches Finales',
    contentHt: `**Objektif:** Ajoute interactive ak decorative details nan portfolio ou an ak pseudo-selectors yo

**Requirements:**
1. **Navigation**: Hover effects ak custom focus styles
2. **Section Headers**: Icons ak ::before ak styled ::after dividers  
3. **Cards**: :first-child highlight ak :nth-child alternating colors
4. **Links**: Custom hover underlines ak focus states
5. **Selection**: Custom ::selection colors
6. **Footer**: Auto-generated attribution ak ::after

**Finishing Touches:** Professional interactions ak accessibility, decorative elements ki enhance design san clutter.`,
    contentFr: `**Objectif:** Ajouter détails interactifs et décoratifs au portfolio avec pseudo-sélecteurs

**Requirements:**
1. **Navigation**: Effets survol et styles focus personnalisés
2. **En-têtes Section**: Icônes avec ::before et séparateurs ::after
3. **Cartes**: Highlight :first-child et couleurs alternées :nth-child
4. **Liens**: Soulignements survol personnalisés et états focus
5. **Sélection**: Couleurs ::selection personnalisées
6. **Pied**: Attribution auto-générée avec ::after

**Touches Finales:** Interactions professionnelles et accessibilité, éléments décoratifs qui améliorent design sans encombrement.`
  }
];

export default htmlCssWeek11Cards;