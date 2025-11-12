export interface HtmlCssCard {
  id: number;
  type: 'lesson' | 'practice' | 'quiz' | 'mini-project';
  titleHt: string;
  titleFr: string;
  contentHt: string;
  contentFr: string;
  codeExample?: string;
  exercises?: Exercise[];
  quiz?: QuizQuestion[];
}

export interface Exercise {
  id: number;
  instructionHt: string;
  instructionFr: string;
  starterCode?: string;
  solution: string;
  hint?: string;
}

export interface QuizQuestion {
  id: number;
  questionHt: string;
  questionFr: string;
  options: { ht: string; fr: string; }[];
  correctAnswer: number;
  explanationHt: string;
  explanationFr: string;
}

const htmlCssWeek6Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Kisa Flexbox la ye?',
    titleFr: 'Qu\'est-ce que Flexbox?',
    contentHt: `## 📐 Kisa Flexbox la ye?

Flexbox (Flexible Box Layout) se yon modèl layout nan CSS ki fè li pi fasil pou w òganize ak aliyen eleman yo nan yon direksyon sèl.

### Poukisa Flexbox enpòtan?
• 🎯 **Pi fasil pou aliyen** - Santre eleman yo ak 2-3 liy kòd sèlman
• 📱 **Responsive** - Layout yo adapte otomatikman ak grandè ekran yo
• 🧮 **Distribye espas** - Kontwole kijan espas la distribye nan mitan eleman yo
• 🔄 **Fleksibilité** - Eleman yo ka grandi oswa diminye selon bezwen

### Flexbox Model la:
\`\`\`
+----------------------------------------------------+
| .container (display:flex)                          |
|  +-----------+   +-----------+   +-----------+     |
|  | item 1    |   | item 2    |   | item 3    |     |
|  +-----------+   +-----------+   +-----------+     |
+----------------------------------------------------+
\`\`\`

### Konsèp ki enpòtan yo:
**1. Flex Container** - Parent la ki gen \`display: flex\`
**2. Flex Items** - Timoun yo ki nan flex container la
**3. Main Axis** - Aks prensipal la (horizontal oswa vertical)
**4. Cross Axis** - Aks ki kwaze ak prensipal la`,
    contentFr: `## 📐 Qu'est-ce que Flexbox?

Flexbox (Flexible Box Layout) est un modèle de mise en page CSS qui facilite l'organisation et l'alignement des éléments dans une seule direction.

### Pourquoi Flexbox est important?
• 🎯 **Plus facile d'aligner** - Centrer des éléments avec 2-3 lignes de code seulement
• 📱 **Responsive** - Les layouts s'adaptent automatiquement aux tailles d'écran
• 🧮 **Distribuer l'espace** - Contrôler comment l'espace est distribué entre les éléments
• 🔄 **Flexibilité** - Les éléments peuvent grandir ou rétrécir selon les besoins

### Le Modèle Flexbox:
\`\`\`
+----------------------------------------------------+
| .container (display:flex)                          |
|  +-----------+   +-----------+   +-----------+     |
|  | item 1    |   | item 2    |   | item 3    |     |
|  +-----------+   +-----------+   +-----------+     |
+----------------------------------------------------+
\`\`\`

### Concepts importants:
**1. Flex Container** - Le parent qui a \`display: flex\`
**2. Flex Items** - Les enfants dans le flex container
**3. Main Axis** - L'axe principal (horizontal ou vertical)
**4. Cross Axis** - L'axe qui croise le principal`,
    codeExample: `/* Aktivé Flexbox */
.container {
  display: flex;
}

/* Eleman yo ap aliyen òizontèlman kounye a */
.container {
  display: flex;
  justify-content: center; /* santre sou main axis */
  align-items: center;     /* santre sou cross axis */
  gap: 1rem;              /* espas ant eleman yo */
}`
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Propriétés Flexbox yo ki enpòtan',
    titleFr: 'Propriétés Flexbox importantes',
    contentHt: `## 🎛️ Propriétés Flexbox yo ki enpòtan

Ann aprann propriétés yo ki pi enpòtan nan Flexbox:

### 1. display: flex
Aktivé flexbox nan yon container:
\`\`\`css
.container {
  display: flex;
}
\`\`\`

### 2. flex-direction
Kontwole direksyon main axis la:
• **row** - Òizontèlman (default)
• **column** - Vètikèlman
• **row-reverse** - Òizontèlman men nan direksyon opoze a
• **column-reverse** - Vètikèlman men nan direksyon opoze a

### 3. justify-content
Aliyen eleman yo sou main axis la:
• **flex-start** - Nan kòmansman an
• **center** - Nan mitan an
• **flex-end** - Nan fen an
• **space-between** - Espas egal ant eleman yo
• **space-around** - Espas egal toupatou
• **space-evenly** - Espas egal ak mèm distans

### 4. align-items
Aliyen eleman yo sou cross axis la:
• **stretch** - Eleman yo vin menm otè a (default)
• **flex-start** - Nan tèt la
• **center** - Nan mitan an
• **flex-end** - Nan fen an
• **baseline** - Aliyen ak baseline tèks la`,
    contentFr: `## 🎛️ Propriétés Flexbox importantes

Apprenons les propriétés les plus importantes de Flexbox:

### 1. display: flex
Activer flexbox sur un container:
\`\`\`css
.container {
  display: flex;
}
\`\`\`

### 2. flex-direction
Contrôler la direction du main axis:
• **row** - Horizontalement (défaut)
• **column** - Verticalement
• **row-reverse** - Horizontalement mais direction opposée
• **column-reverse** - Verticalement mais direction opposée

### 3. justify-content
Aligner les éléments sur le main axis:
• **flex-start** - Au début
• **center** - Au centre
• **flex-end** - À la fin
• **space-between** - Espace égal entre les éléments
• **space-around** - Espace égal partout
• **space-evenly** - Espace égal avec même distance

### 4. align-items
Aligner les éléments sur le cross axis:
• **stretch** - Les éléments deviennent même hauteur (défaut)
• **flex-start** - En haut
• **center** - Au centre
• **flex-end** - En bas
• **baseline** - Alignés sur la baseline du texte`,
    codeExample: `/* Egzanp konplet */
.container {
  display: flex;
  flex-direction: row;       /* òizontèlman */
  justify-content: center;   /* santre main axis */
  align-items: center;       /* santre cross axis */
  gap: 1rem;                /* espas ant eleman yo */
  height: 100vh;            /* otè konplè ekran an */
}

/* Navigation òizontèl */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Gap ak Flex-wrap',
    titleFr: 'Gap et Flex-wrap',
    contentHt: `## 🎯 Gap ak Flex-wrap - Òganize eleman yo ak espas

Kèk propriétés ki enpòtan pou w òganize eleman yo pi byen:

### Gap Property
\`gap\` bay espas ant flex items yo san ou pa bezwen margin:

\`\`\`css
.container {
  display: flex;
  gap: 1rem;        /* 16px espas ant tou eleman yo */
  gap: 2rem 1rem;   /* 2rem vètikèl, 1rem òizontèl */
}
\`\`\`

**Avantaj Gap:**
• Pa gen pwoblèm ak margin collapse
• Pi senp ak pi pwòp pase margin
• Otomatikman aplike ant tou eleman yo

### Flex-wrap Property
\`flex-wrap\` kontwole si eleman yo ka ale nan liy swivan an:

• **nowrap** - Tou eleman yo nan yon sèl liy (default)
• **wrap** - Eleman yo ka ale nan nouvo liy yo
• **wrap-reverse** - Wrap men nan direksyon opoze a

### Egzanp ak Cards ki Responsive:
\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  flex: 1 1 300px;  /* grow shrink basis */
  max-width: 350px;
  min-width: 250px;
}
\`\`\`

### Flex Property sou Items yo:
• **flex: 1** - Item la pran tout espas ki rete a
• **flex: 0 0 auto** - Item la pa grandi, pa diminye
• **flex: 1 1 300px** - Grandi, diminye, men baz 300px`,
    contentFr: `## 🎯 Gap et Flex-wrap - Organiser les éléments avec espacement

Quelques propriétés importantes pour mieux organiser vos éléments:

### Propriété Gap
\`gap\` donne de l'espace entre les flex items sans avoir besoin de margins:

\`\`\`css
.container {
  display: flex;
  gap: 1rem;        /* 16px d'espace entre tous les éléments */
  gap: 2rem 1rem;   /* 2rem vertical, 1rem horizontal */
}
\`\`\`

**Avantages de Gap:**
• Pas de problèmes avec margin collapse
• Plus simple et plus propre que les margins
• Appliqué automatiquement entre tous les éléments

### Propriété Flex-wrap
\`flex-wrap\` contrôle si les éléments peuvent aller à la ligne suivante:

• **nowrap** - Tous les éléments sur une seule ligne (défaut)
• **wrap** - Les éléments peuvent aller sur de nouvelles lignes
• **wrap-reverse** - Wrap mais dans la direction opposée

### Exemple avec Cards Responsives:
\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  flex: 1 1 300px;  /* grow shrink basis */
  max-width: 350px;
  min-width: 250px;
}
\`\`\`

### Propriété Flex sur les Items:
• **flex: 1** - L'item prend tout l'espace restant
• **flex: 0 0 auto** - L'item ne grandit pas, ne rétrécit pas
• **flex: 1 1 300px** - Grandit, rétrécit, mais base 300px`,
    codeExample: `/* Project Cards ki Responsive */
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
}

.project-card {
  flex: 1 1 300px;
  max-width: 350px;
  min-width: 280px;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Navigation ak gap */
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}`
  },
  {
    id: 4,
    type: 'practice',
    titleHt: 'Pratike: Flexbox Layouts',
    titleFr: 'Pratique: Layouts Flexbox',
    contentHt: `Ann pratike kijan pou w kreye layouts ak Flexbox!`,
    contentFr: `Pratiquons comment créer des layouts avec Flexbox!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon navigation òizontèl ak center ak gap.',
        instructionFr: 'Créer une navigation horizontale centrée avec gap.',
        starterCode: `<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</nav>

<style>
.navbar {
  /* Ajoute flexbox ak navigation styling */
}

.navbar a {
  /* Style links yo */
}
</style>`,
        solution: `<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</nav>

<style>
.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: #222;
  padding: 1rem 2rem;
  border-radius: 8px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #ffd43b;
}
</style>`,
        hint: 'Itilize display: flex, justify-content: center ak gap pou espas egal.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon card grid ki responsive ak flex-wrap.',
        instructionFr: 'Créer une grille de cartes responsive avec flex-wrap.',
        starterCode: `<div class="projects">
  <div class="project-card">
    <h3>Pwojè 1</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
  <div class="project-card">
    <h3>Pwojè 2</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
  <div class="project-card">
    <h3>Pwojè 3</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
</div>

<style>
.projects {
  /* Ajoute flexbox ak responsive behavior */
}

.project-card {
  /* Style cards yo ak flex properties */
}
</style>`,
        solution: `<div class="projects">
  <div class="project-card">
    <h3>Pwojè 1</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
  <div class="project-card">
    <h3>Pwojè 2</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
  <div class="project-card">
    <h3>Pwojè 3</h3>
    <p>Deskripsyon pwojè a ak teknoloji yo ki te itilize.</p>
  </div>
</div>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  flex: 1 1 300px;
  max-width: 350px;
  min-width: 280px;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
</style>`,
        hint: 'Itilize flex-wrap: wrap ak flex: 1 1 300px pou responsive behavior.'
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    titleHt: 'Quiz: Flexbox Fundamentals',
    titleFr: 'Quiz: Fondamentaux Flexbox',
    contentHt: 'Teste konesans ou sou Flexbox!',
    contentFr: 'Testez vos connaissances sur Flexbox!',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki property la ki aktivé flexbox nan yon container?',
        questionFr: 'Quelle propriété active flexbox sur un container?',
        options: [
          { ht: 'flex: 1', fr: 'flex: 1' },
          { ht: 'display: flex', fr: 'display: flex' },
          { ht: 'flexbox: true', fr: 'flexbox: true' },
          { ht: 'layout: flex', fr: 'layout: flex' }
        ],
        correctAnswer: 1,
        explanationHt: 'display: flex se property a ki aktivé flexbox layout nan yon container.',
        explanationFr: 'display: flex est la propriété qui active le layout flexbox sur un container.'
      },
      {
        id: 2,
        questionHt: 'Ki property la ki kontrole aliyman sou main axis la?',
        questionFr: 'Quelle propriété contrôle l\'alignement sur le main axis?',
        options: [
          { ht: 'align-items', fr: 'align-items' },
          { ht: 'justify-content', fr: 'justify-content' },
          { ht: 'flex-align', fr: 'flex-align' },
          { ht: 'text-align', fr: 'text-align' }
        ],
        correctAnswer: 1,
        explanationHt: 'justify-content kontrole kijan eleman yo aliyen sou main axis la.',
        explanationFr: 'justify-content contrôle comment les éléments sont alignés sur le main axis.'
      },
      {
        id: 3,
        questionHt: 'Ki sa flex-wrap: wrap fè?',
        questionFr: 'Que fait flex-wrap: wrap?',
        options: [
          { ht: 'Li fè eleman yo pi gwo', fr: 'Il rend les éléments plus grands' },
          { ht: 'Li pèmèt eleman yo ale nan nouvo liy yo', fr: 'Il permet aux éléments d\'aller sur de nouvelles lignes' },
          { ht: 'Li kache eleman yo', fr: 'Il cache les éléments' },
          { ht: 'Li chanje koulè eleman yo', fr: 'Il change la couleur des éléments' }
        ],
        correctAnswer: 1,
        explanationHt: 'flex-wrap: wrap pèmèt flex items yo ale nan nouvo liy yo lè yo pa ka kase nan yon sèl liy.',
        explanationFr: 'flex-wrap: wrap permet aux flex items d\'aller sur de nouvelles lignes quand ils ne peuvent pas tenir sur une seule ligne.'
      },
      {
        id: 4,
        questionHt: 'Ki avantaj "gap" genyen sou "margin"?',
        questionFr: 'Quel avantage "gap" a-t-il sur "margin"?',
        options: [
          { ht: 'Li pi rapid', fr: 'Il est plus rapide' },
          { ht: 'Li otomatikman aplike ant tou eleman yo', fr: 'Il s\'applique automatiquement entre tous les éléments' },
          { ht: 'Li ka chanje koulè yo', fr: 'Il peut changer les couleurs' },
          { ht: 'Li fè animasyon', fr: 'Il fait des animations' }
        ],
        correctAnswer: 1,
        explanationHt: 'Gap otomatikman aplike espas egal ant tou flex items yo san ou pa bezwen kalkile margin yo.',
        explanationFr: 'Gap applique automatiquement un espacement égal entre tous les flex items sans avoir besoin de calculer les margins.'
      }
    ]
  },
  {
    id: 6,
    type: 'lesson',
    titleHt: 'Flexbox pou Navigation ak Header',
    titleFr: 'Flexbox pour Navigation et Header',
    contentHt: `## 🧭 Flexbox pou Navigation ak Header

Flexbox se zouti ki pi bon pou kreye navigation ak header ki responsive ak bèl.

### Navigation Òizontèl
\`\`\`css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #222;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
\`\`\`

### Header ak Logo ak Navigation
\`\`\`css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}
\`\`\`

### Hero Section ak Flexbox
\`\`\`css
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}
\`\`\`

### Call-to-Action Buttons
\`\`\`css
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
\`\`\``,
    contentFr: `## 🧭 Flexbox pour Navigation et Header

Flexbox est le meilleur outil pour créer des navigations et headers responsives et beaux.

### Navigation Horizontale
\`\`\`css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #222;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
\`\`\`

### Header avec Logo et Navigation
\`\`\`css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}
\`\`\`

### Section Hero avec Flexbox
\`\`\`css
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}
\`\`\`

### Boutons Call-to-Action
\`\`\`css
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
\`\`\``,
    codeExample: `/* Header konplet ak Navigation */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-menu a {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-menu a:hover {
  background: #f0f0f0;
  color: #333;
}`
  },
  {
    id: 7,
    type: 'practice',
    titleHt: 'Pratike: Layout Konplet ak Flexbox',
    titleFr: 'Pratique: Layout Complet avec Flexbox',
    contentHt: `Ann kreye yon layout konplet ak header, hero section ak project grid!`,
    contentFr: `Créons un layout complet avec header, section hero et grille de projets!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon header ak logo ak navigation ak flexbox.',
        instructionFr: 'Créer un header avec logo et navigation avec flexbox.',
        starterCode: `<header class="header">
  <div class="logo">Mon Portfolio</div>
  <nav class="nav-menu">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<style>
.header {
  /* Style header ak flexbox */
}

.logo {
  /* Style logo */
}

.nav-menu {
  /* Style navigation menu */
}
</style>`,
        solution: `<header class="header">
  <div class="logo">Mon Portfolio</div>
  <nav class="nav-menu">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-menu a {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-menu a:hover {
  background: #f0f0f0;
  color: #333;
}
</style>`,
        hint: 'Itilize justify-content: space-between pou logo ak nav yo nan de bò diferan yo.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon hero section ak flexbox pou santre kontan an.',
        instructionFr: 'Créer une section hero avec flexbox pour centrer le contenu.',
        starterCode: `<section class="hero">
  <h1>Byenveni nan Portfolio Mwen</h1>
  <p>Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl.</p>
  <div class="cta-buttons">
    <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
    <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
  </div>
</section>

<style>
.hero {
  /* Style hero section ak flexbox */
}

.cta-buttons {
  /* Style buttons ak flexbox */
}
</style>`,
        solution: `<section class="hero">
  <h1>Byenveni nan Portfolio Mwen</h1>
  <p>Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl.</p>
  <div class="cta-buttons">
    <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
    <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
  </div>
</section>

<style>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.btn-primary {
  background: #ffd43b;
  color: #333;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>`,
        hint: 'Itilize flex-direction: column ak justify-content: center pou santre kontan vètikèlman.'
      }
    ]
  },
  {
    id: 8,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè: Responsive Portfolio Layout',
    titleFr: 'Mini-Projet: Layout Portfolio Responsive',
    contentHt: `## 🎨 Responsive Portfolio Layout - Transforme portfolio ou an ak Flexbox

Kounye a se lè pou w itilize Flexbox pou w kreye yon layout portfolio ki konplètman responsive ak pwofesyonèl!

### Sa pou w fè:

**1. Header ak Navigation**
- Kreye header ak logo ak horizontal navigation
- Itilize justify-content: space-between
- Ajoute hover effects pou navigation links

**2. Hero Section**
- Santre title ak description ak CTA buttons
- Itilize flex-direction: column
- Ajoute gradient background ak bon typography

**3. Project Grid ki Responsive**
- Transform work cards ak flexbox layout
- Itilize flex-wrap pou responsive behavior
- Ajoute gap ant cards yo ak hover effects

**4. Footer**
- Kreye footer ak flexbox pou copyright ak social links
- Aliyen kontan yo pwòpreman

### Properties pou w itilize:
- \`display: flex\` sou containers yo
- \`justify-content\` ak \`align-items\` pou alignment
- \`flex-wrap: wrap\` pou responsive behavior
- \`gap\` pou spacing ant eleman yo
- \`flex\` sou items yo pou growth ak shrinkage

### Résultat Ekspekte:
Yon portfolio ki gen layout pwofesyonèl ak responsive ki fonksyonnen byen sou tou aparèy yo. Navigation, hero section ak project grid yo aliyen ak organize pwòpreman ak Flexbox. Prè pou media queries nan semèn kap vini an!`,
    contentFr: `## 🎨 Layout Portfolio Responsive - Transformer votre portfolio avec Flexbox

Maintenant il est temps d'utiliser Flexbox pour créer un layout portfolio complètement responsive et professionnel!

### Ce qu'il faut faire:

**1. Header et Navigation**
- Créer header avec logo et navigation horizontale
- Utiliser justify-content: space-between
- Ajouter hover effects pour navigation links

**2. Section Hero**
- Centrer title et description avec CTA buttons
- Utiliser flex-direction: column
- Ajouter gradient background avec bonne typography

**3. Grille Projets Responsive**
- Transformer work cards avec flexbox layout
- Utiliser flex-wrap pour responsive behavior
- Ajouter gap entre cards avec hover effects

**4. Footer**
- Créer footer avec flexbox pour copyright et liens sociaux
- Aligner le contenu proprement

### Propriétés à utiliser:
- \`display: flex\` sur les containers
- \`justify-content\` et \`align-items\` pour alignment
- \`flex-wrap: wrap\` pour responsive behavior
- \`gap\` pour espacement entre éléments
- \`flex\` sur items pour growth et shrinkage

### Résultat Attendu:
Un portfolio avec layout professionnel et responsive qui fonctionne bien sur tous les appareils. Navigation, section hero et grille projets alignés et organisés proprement avec Flexbox. Prêt pour les media queries la semaine prochaine!`
  }
];

export default htmlCssWeek6Cards;