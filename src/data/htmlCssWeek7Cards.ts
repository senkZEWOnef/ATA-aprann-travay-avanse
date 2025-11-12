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

const htmlCssWeek7Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Kisa Responsive Design la ye?',
    titleFr: 'Qu\'est-ce que le Responsive Design?',
    contentHt: `## 📱 Kisa Responsive Design la ye?

Responsive Design se yon metòd pou w fè sit web yo ki adapte otomatikman ak tou aparèy yo - depi telefòn yo rive nan tablèt yo ak òdinatè yo.

### Poukisa Responsive Design enpòtan?
• 📱 **Mobile Usage** - Pi plis pase 50% nan moun yo itilize telefòn pou yo ale sou entènèt
• 🎯 **User Experience** - Moun yo bezwen ka li ak navige fasil sou aparèy pa yo
• 🔍 **SEO Benefits** - Google favorise sit yo ki responsive
• 💰 **Cost Effective** - Yon sit sèl ki travay sou tout aparèy yo

### Mobile-First Approach
Li pi bon pou w kòmanse ak pi ti ekran an epi ou ajoute features pou pi gwo ekran yo:

**1. Mobile First (Default CSS)**
- Styles pou telefòn yo (320px - 768px)

**2. Tablet (Medium Screens)**  
- @media (min-width: 768px)

**3. Desktop (Large Screens)**
- @media (min-width: 1024px)

### Common Screen Sizes:
- **Phone**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Avantaj Mobile-First:
✅ Pi rapid sou telefòn yo
✅ Pi bon pou performance
✅ Fokus sou kontan ki pi enpòtan an
✅ Progressive enhancement`,
    contentFr: `## 📱 Qu'est-ce que le Responsive Design?

Le Responsive Design est une méthode pour créer des sites web qui s'adaptent automatiquement à tous les appareils - des téléphones aux tablettes et ordinateurs.

### Pourquoi le Responsive Design est important?
• 📱 **Usage Mobile** - Plus de 50% des gens utilisent le téléphone pour naviguer sur internet
• 🎯 **Expérience Utilisateur** - Les gens ont besoin de pouvoir lire et naviguer facilement sur leur appareil
• 🔍 **Avantages SEO** - Google favorise les sites responsives
• 💰 **Rentabilité** - Un seul site qui fonctionne sur tous les appareils

### Approche Mobile-First
Il est préférable de commencer avec le plus petit écran puis ajouter des features pour les plus grands écrans:

**1. Mobile First (CSS par défaut)**
- Styles pour téléphones (320px - 768px)

**2. Tablette (Écrans moyens)**
- @media (min-width: 768px)

**3. Desktop (Grands écrans)**
- @media (min-width: 1024px)

### Tailles d'écran communes:
- **Téléphone**: 320px - 767px
- **Tablette**: 768px - 1023px
- **Desktop**: 1024px+
- **Grand Desktop**: 1440px+

### Avantages Mobile-First:
✅ Plus rapide sur téléphones
✅ Meilleur pour la performance
✅ Focus sur le contenu le plus important
✅ Amélioration progressive`,
    codeExample: `/* Mobile-First Approach */

/* Default styles pou telefòn yo */
.container {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
}

/* Tablet ak pi gwo */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 18px;
    max-width: 900px;
    margin: 0 auto;
  }
}

/* Desktop ak pi gwo */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    font-size: 20px;
    max-width: 1200px;
  }
}`
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Media Queries - Règ kondisyonèl yo',
    titleFr: 'Media Queries - Règles conditionnelles',
    contentHt: `## 🎛️ Media Queries - CSS ki chanje selon ekran an

Media Queries se yon metòd pou w aplike styles diferan selon karakteristik aparèy la, sitou largè ekran an.

### Syntax de baz:
\`\`\`css
@media (condition) {
  /* CSS rules isit la */
}
\`\`\`

### Common Media Query Conditions:

**1. Min-width (Mobile-First)**
\`\`\`css
@media (min-width: 768px) {
  /* Styles pou 768px ak pi gwo */
}
\`\`\`

**2. Max-width (Desktop-First)**
\`\`\`css
@media (max-width: 767px) {
  /* Styles pou 767px ak pi ti */
}
\`\`\`

**3. Range Queries**
\`\`\`css
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles pou tablet sèlman */
}
\`\`\`

### Common Breakpoints:
- **576px**: Small devices (landscape phones)
- **768px**: Medium devices (tablets)
- **992px**: Large devices (desktops)  
- **1200px**: Extra large devices (large desktops)

### Lòt Media Conditions:
- **orientation**: portrait, landscape
- **resolution**: high-dpi screens
- **prefers-color-scheme**: dark, light

### Best Practices:
✅ Itilize min-width pou mobile-first
✅ Teste sou aparèy reyèl yo
✅ Pa gen twòp breakpoints
✅ Organize media queries nan fen fichye a`,
    contentFr: `## 🎛️ Media Queries - CSS qui change selon l'écran

Les Media Queries sont une méthode pour appliquer différents styles selon les caractéristiques de l'appareil, surtout la largeur de l'écran.

### Syntaxe de base:
\`\`\`css
@media (condition) {
  /* Règles CSS ici */
}
\`\`\`

### Conditions Media Query communes:

**1. Min-width (Mobile-First)**
\`\`\`css
@media (min-width: 768px) {
  /* Styles pour 768px et plus */
}
\`\`\`

**2. Max-width (Desktop-First)**
\`\`\`css
@media (max-width: 767px) {
  /* Styles pour 767px et moins */
}
\`\`\`

**3. Requêtes de gamme**
\`\`\`css
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles pour tablettes seulement */
}
\`\`\`

### Breakpoints communs:
- **576px**: Petits appareils (téléphones paysage)
- **768px**: Appareils moyens (tablettes)
- **992px**: Grands appareils (desktops)
- **1200px**: Très grands appareils (grands desktops)

### Autres conditions Media:
- **orientation**: portrait, landscape
- **resolution**: écrans haute résolution
- **prefers-color-scheme**: dark, light

### Meilleures pratiques:
✅ Utiliser min-width pour mobile-first
✅ Tester sur vrais appareils
✅ Pas trop de breakpoints
✅ Organiser media queries à la fin du fichier`,
    codeExample: `/* Media Queries Examples */

/* Mobile styles (default) */
.nav-menu {
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

/* Tablet ak pi gwo */
@media (min-width: 768px) {
  .nav-menu {
    flex-direction: row;
    gap: 1.5rem;
    padding: 1rem 2rem;
  }
}

/* Desktop ak pi gwo */
@media (min-width: 1024px) {
  .nav-menu {
    gap: 2rem;
    padding: 1rem 3rem;
  }
}

/* Print styles */
@media print {
  .nav-menu {
    display: none;
  }
}`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Responsive Typography ak Images',
    titleFr: 'Typographie et Images Responsives',
    contentHt: `## 📝 Responsive Typography ak Images

Typography ak images yo bezwen adapte ak diferan grandè ekran yo pou yo rete lisib ak atiran.

### Responsive Typography

**1. Fluid Font Sizes**
\`\`\`css
/* Mobile */
h1 { font-size: 1.8rem; }
h2 { font-size: 1.4rem; }
p  { font-size: 1rem; }

/* Tablet ak pi gwo */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.8rem; }
  p  { font-size: 1.1rem; }
}

/* Desktop ak pi gwo */
@media (min-width: 1024px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.2rem; }
  p  { font-size: 1.2rem; }
}
\`\`\`

**2. Responsive Line Heights**
\`\`\`css
p {
  line-height: 1.5;  /* Mobile: pi konpak */
}

@media (min-width: 768px) {
  p {
    line-height: 1.7;  /* Desktop: pi bon lisibilité */
  }
}
\`\`\`

### Responsive Images

**1. Flexible Images**
\`\`\`css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
\`\`\`

**2. Different Images pou Different Screens**
\`\`\`html
<picture>
  <source media="(min-width: 1024px)" srcset="large-image.jpg">
  <source media="(min-width: 768px)" srcset="medium-image.jpg">
  <img src="small-image.jpg" alt="Description">
</picture>
\`\`\`

**3. Background Images Responsive**
\`\`\`css
.hero-bg {
  background-size: cover;
  background-position: center;
  height: 50vh;
}

@media (min-width: 768px) {
  .hero-bg {
    height: 70vh;
  }
}
\`\`\`

### Responsive Spacing

**Mobile**: Pi ti spacing pou konsèv espas
**Desktop**: Pi gwo spacing pou konfort

\`\`\`css
.section {
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .section {
    padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 3rem;
  }
}
\`\`\``,
    contentFr: `## 📝 Typographie et Images Responsives

La typographie et les images doivent s'adapter aux différentes tailles d'écran pour rester lisibles et attrayantes.

### Typographie Responsive

**1. Tailles de police fluides**
\`\`\`css
/* Mobile */
h1 { font-size: 1.8rem; }
h2 { font-size: 1.4rem; }
p  { font-size: 1rem; }

/* Tablette et plus */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.8rem; }
  p  { font-size: 1.1rem; }
}

/* Desktop et plus */
@media (min-width: 1024px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.2rem; }
  p  { font-size: 1.2rem; }
}
\`\`\`

**2. Line Heights Responsives**
\`\`\`css
p {
  line-height: 1.5;  /* Mobile: plus compact */
}

@media (min-width: 768px) {
  p {
    line-height: 1.7;  /* Desktop: meilleure lisibilité */
  }
}
\`\`\`

### Images Responsives

**1. Images Flexibles**
\`\`\`css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
\`\`\`

**2. Images Différentes pour Écrans Différents**
\`\`\`html
<picture>
  <source media="(min-width: 1024px)" srcset="large-image.jpg">
  <source media="(min-width: 768px)" srcset="medium-image.jpg">
  <img src="small-image.jpg" alt="Description">
</picture>
\`\`\`

**3. Images de Fond Responsives**
\`\`\`css
.hero-bg {
  background-size: cover;
  background-position: center;
  height: 50vh;
}

@media (min-width: 768px) {
  .hero-bg {
    height: 70vh;
  }
}
\`\`\`

### Espacement Responsive

**Mobile**: Plus petit espacement pour conserver l'espace
**Desktop**: Plus grand espacement pour le confort

\`\`\`css
.section {
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .section {
    padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 3rem;
  }
}
\`\`\``,
    codeExample: `/* Complete Responsive System */

/* Mobile-First Typography */
h1 {
  font-size: 1.8rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 0 1rem;
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Tablet adjustments */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
    text-align: left;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    padding: 0 2rem;
  }
}

/* Desktop adjustments */
@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
  
  p {
    font-size: 1.2rem;
    padding: 0 3rem;
    max-width: 800px;
  }
}`
  },
  {
    id: 4,
    type: 'practice',
    titleHt: 'Pratike: Media Queries ak Responsive Layout',
    titleFr: 'Pratique: Media Queries et Layout Responsive',
    contentHt: `Ann pratike kijan pou w kreye layouts ki responsive ak media queries!`,
    contentFr: `Pratiquons comment créer des layouts responsives avec les media queries!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon navigation ki vètikèl sou telefòn ak òizontèl sou desktop.',
        instructionFr: 'Créer une navigation verticale sur téléphone et horizontale sur desktop.',
        starterCode: `<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</nav>

<style>
.navbar {
  display: flex;
  /* Ajoute responsive behavior isit la */
}

.navbar a {
  padding: 1rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
}

/* Ajoute media queries isit la */

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
  flex-direction: column;
  background: #f8f9fa;
  padding: 1rem;
}

.navbar a {
  padding: 1rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: background 0.3s ease;
}

.navbar a:hover {
  background: #e9ecef;
}

/* Tablet ak Desktop */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  
  .navbar a {
    border-bottom: none;
    border-radius: 4px;
  }
}
</style>`,
        hint: 'Kòmanse ak flex-direction: column pou mobile, epi chanje li nan row pou desktop.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon card grid ki responsive - 1 column sou mobile, 2 sou tablet, 3 sou desktop.',
        instructionFr: 'Créer une grille de cartes responsive - 1 colonne sur mobile, 2 sur tablette, 3 sur desktop.',
        starterCode: `<div class="card-grid">
  <div class="card">
    <h3>Card 1</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 4</h3>
    <p>Deskripsyon card la.</p>
  </div>
</div>

<style>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
}

.card {
  /* Ajoute responsive sizing isit la */
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Ajoute media queries isit la */

</style>`,
        solution: `<div class="card-grid">
  <div class="card">
    <h3>Card 1</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>Deskripsyon card la.</p>
  </div>
  <div class="card">
    <h3>Card 4</h3>
    <p>Deskripsyon card la.</p>
  </div>
</div>

<style>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  /* Mobile: 1 column (100% width minus gap) */
  flex: 1 1 100%;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 0.5rem);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .card {
    flex: 1 1 calc(33.333% - 0.67rem);
  }
  
  .card-grid {
    gap: 1.5rem;
    padding: 3rem;
  }
}
</style>`,
        hint: 'Itilize flex-basis ak calc() pou w kontrole kantite column yo nan chak breakpoint.'
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    titleHt: 'Quiz: Responsive Design ak Media Queries',
    titleFr: 'Quiz: Responsive Design et Media Queries',
    contentHt: 'Teste konesans ou sou responsive design ak media queries!',
    contentFr: 'Testez vos connaissances sur le responsive design et les media queries!',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki metòd ki pi bon pou responsive design?',
        questionFr: 'Quelle méthode est la meilleure pour responsive design?',
        options: [
          { ht: 'Desktop-first', fr: 'Desktop-first' },
          { ht: 'Mobile-first', fr: 'Mobile-first' },
          { ht: 'Tablet-first', fr: 'Tablet-first' },
          { ht: 'Pa gen diferans', fr: 'Pas de différence' }
        ],
        correctAnswer: 1,
        explanationHt: 'Mobile-first se pi bon paske li kòmanse ak pi ti ekran an epi li ajoute features pou pi gwo ekran yo, sa ki pi rapid ak pi efikas.',
        explanationFr: 'Mobile-first est le meilleur car il commence par le plus petit écran puis ajoute des features pour les plus grands, ce qui est plus rapide et efficace.'
      },
      {
        id: 2,
        questionHt: 'Ki syntax la ki kòrèk pou yon media query?',
        questionFr: 'Quelle syntaxe est correcte pour une media query?',
        options: [
          { ht: '@media screen (768px)', fr: '@media screen (768px)' },
          { ht: '@media (min-width: 768px)', fr: '@media (min-width: 768px)' },
          { ht: 'media (768px)', fr: 'media (768px)' },
          { ht: '@screen (min: 768px)', fr: '@screen (min: 768px)' }
        ],
        correctAnswer: 1,
        explanationHt: '@media (min-width: 768px) se syntax kòrèk la pou yon media query ki ap aplike styles pou 768px ak pi gwo.',
        explanationFr: '@media (min-width: 768px) est la syntaxe correcte pour une media query qui applique des styles pour 768px et plus.'
      },
      {
        id: 3,
        questionHt: 'Ki property ki fè imaj yo responsive?',
        questionFr: 'Quelle propriété rend les images responsives?',
        options: [
          { ht: 'width: 100%', fr: 'width: 100%' },
          { ht: 'max-width: 100%', fr: 'max-width: 100%' },
          { ht: 'height: auto', fr: 'height: auto' },
          { ht: 'max-width: 100% ak height: auto', fr: 'max-width: 100% et height: auto' }
        ],
        correctAnswer: 3,
        explanationHt: 'max-width: 100% ak height: auto ansanm yo fè imaj yo responsive san yo pa defòme.',
        explanationFr: 'max-width: 100% et height: auto ensemble rendent les images responsives sans les déformer.'
      },
      {
        id: 4,
        questionHt: 'Ki breakpoint ki pi komen pou tablet yo?',
        questionFr: 'Quel breakpoint est le plus commun pour les tablettes?',
        options: [
          { ht: '480px', fr: '480px' },
          { ht: '768px', fr: '768px' },
          { ht: '1024px', fr: '1024px' },
          { ht: '1200px', fr: '1200px' }
        ],
        correctAnswer: 1,
        explanationHt: '768px se breakpoint ki pi komen pou tablet yo ak pi gwo aparèy yo.',
        explanationFr: '768px est le breakpoint le plus commun pour les tablettes et appareils plus grands.'
      }
    ]
  },
  {
    id: 6,
    type: 'lesson',
    titleHt: 'Testing ak DevTools pou Responsive Design',
    titleFr: 'Tests et DevTools pour Responsive Design',
    contentHt: `## 🔧 Testing ak DevTools pou Responsive Design

Testing se yon etap enpòtan nan responsive design pou w asire w sit ou an travay byen sou tout aparèy yo.

### Browser DevTools pou Testing

**1. Chrome DevTools**
- Peze F12 oswa right-click + "Inspect"
- Click sou phone/tablet icon (Toggle Device Toolbar)
- Chwazi présets: iPhone, iPad, Galaxy, etc.

**2. Testing Different Viewports**
- **iPhone SE**: 375x667px
- **iPad**: 768x1024px  
- **Desktop**: 1920x1080px
- Custom sizes pou testing

### Manual Testing Process

**Step 1: Test Navigation**
- Navige nan diferan grandè yo
- Verifye navigation responsive behavior
- Test hover effects ak interactions

**Step 2: Test Typography**
- Check lisibilité sou ti ekran yo
- Verifye font sizes ak line heights
- Test text wrapping

**Step 3: Test Images ak Media**
- Images yo dwe responsive
- Videos yo dwe adapt ak container yo
- Check loading performance

**Step 4: Test Layouts**
- Flexbox wrapping
- Grid responsiveness  
- Content alignment

### Common Issues ak Solutions:

**Problem**: Text ki twò ti sou mobile
**Solution**: \`font-size: clamp(1rem, 2.5vw, 1.5rem)\`

**Problem**: Images ki debòde
**Solution**: \`max-width: 100%; height: auto;\`

**Problem**: Touch targets ki twò ti
**Solution**: \`min-height: 44px; min-width: 44px;\`

### Performance Testing:
- Use Lighthouse pou mobile performance
- Test loading speed sou 3G connection
- Optimize images pou mobile`,
    contentFr: `## 🔧 Tests et DevTools pour Responsive Design

Les tests sont une étape importante du responsive design pour s'assurer que votre site fonctionne bien sur tous les appareils.

### DevTools du navigateur pour tests

**1. Chrome DevTools**
- Appuyez F12 ou clic droit + "Inspect"
- Cliquez sur l'icône phone/tablet (Toggle Device Toolbar)
- Choisissez des présets: iPhone, iPad, Galaxy, etc.

**2. Test de différents Viewports**
- **iPhone SE**: 375x667px
- **iPad**: 768x1024px
- **Desktop**: 1920x1080px
- Tailles personnalisées pour tests

### Processus de test manuel

**Étape 1: Test Navigation**
- Naviguez dans différentes tailles
- Vérifiez comportement navigation responsive
- Testez hover effects et interactions

**Étape 2: Test Typographie**
- Vérifiez lisibilité sur petits écrans
- Vérifiez font sizes et line heights
- Testez text wrapping

**Étape 3: Test Images et Médias**
- Les images doivent être responsives
- Les vidéos doivent s'adapter aux containers
- Vérifiez performance de chargement

**Étape 4: Test Layouts**
- Flexbox wrapping
- Grid responsiveness
- Content alignment

### Problèmes communs et solutions:

**Problème**: Texte trop petit sur mobile
**Solution**: \`font-size: clamp(1rem, 2.5vw, 1.5rem)\`

**Problème**: Images qui débordent
**Solution**: \`max-width: 100%; height: auto;\`

**Problème**: Touch targets trop petits
**Solution**: \`min-height: 44px; min-width: 44px;\`

### Tests de performance:
- Utiliser Lighthouse pour performance mobile
- Tester vitesse de chargement sur connexion 3G
- Optimiser images pour mobile`,
    codeExample: `/* Testing Setup ak DevTools */

/* Responsive testing helpers */
.debug-screen {
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 0.5rem;
  font-size: 12px;
  z-index: 9999;
}

.debug-screen::before {
  content: "Mobile";
}

@media (min-width: 768px) {
  .debug-screen::before {
    content: "Tablet";
  }
}

@media (min-width: 1024px) {
  .debug-screen::before {
    content: "Desktop";
  }
}

/* Touch-friendly button sizing */
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

/* Responsive font sizing */
h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}

/* Container ak proper margins */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}`
  },
  {
    id: 7,
    type: 'practice',
    titleHt: 'Pratike: Complete Responsive Layout',
    titleFr: 'Pratique: Layout Responsive Complet',
    contentHt: `Ann kreye yon layout ki konplètman responsive ak tou eleman yo!`,
    contentFr: `Créons un layout complètement responsive avec tous les éléments!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon hero section ki responsive ak typography ak spacing ki adapte.',
        instructionFr: 'Créer une section hero responsive avec typography et spacing adaptatifs.',
        starterCode: `<section class="hero">
  <div class="hero-content">
    <h1>Portfolio Mwen</h1>
    <p>Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl.</p>
    <div class="hero-buttons">
      <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
      <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
    </div>
  </div>
</section>

<style>
.hero {
  /* Ajoute responsive hero styling isit la */
}

.hero-content {
  /* Center content ak responsive spacing */
}

/* Ajoute media queries pou font sizes ak spacing */

</style>`,
        solution: `<section class="hero">
  <div class="hero-content">
    <h1>Portfolio Mwen</h1>
    <p>Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl.</p>
    <div class="hero-buttons">
      <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
      <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
    </div>
  </div>
</section>

<style>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
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
  transform: translateY(-3px);
}

/* Tablet ak Desktop */
@media (min-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 3rem 2rem;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero p {
    font-size: 1.2rem;
    line-height: 1.7;
  }
}

@media (min-width: 1024px) {
  .hero {
    min-height: 85vh;
  }
  
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .hero p {
    font-size: 1.3rem;
  }
  
  .hero-buttons {
    gap: 1.5rem;
  }
}
</style>`,
        hint: 'Kòmanse ak mobile sizing epi w ogmante font sizes ak spacing pou tablet ak desktop.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon footer ki responsive ak flexbox ak social links.',
        instructionFr: 'Créer un footer responsive avec flexbox et liens sociaux.',
        starterCode: `<footer class="footer">
  <div class="footer-content">
    <div class="footer-info">
      <h3>Portfolio Mwen</h3>
      <p>Mèsi paske w vizite sit mwen an!</p>
    </div>
    <div class="footer-links">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Email</a>
    </div>
    <div class="footer-copy">
      <p>&copy; 2024 Portfolio Mwen. Tout dwa yo rezève.</p>
    </div>
  </div>
</footer>

<style>
.footer {
  /* Style footer ak responsive behavior */
}

/* Ajoute media queries pou layout changes */

</style>`,
        solution: `<footer class="footer">
  <div class="footer-content">
    <div class="footer-info">
      <h3>Portfolio Mwen</h3>
      <p>Mèsi paske w vizite sit mwen an!</p>
    </div>
    <div class="footer-links">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Email</a>
    </div>
    <div class="footer-copy">
      <p>&copy; 2024 Portfolio Mwen. Tout dwa yo rezève.</p>
    </div>
  </div>
</footer>

<style>
.footer {
  background: #222;
  color: white;
  padding: 2rem 1rem 1rem;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.footer-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffd43b;
}

.footer-info p {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-links a:hover {
  background: #333;
  color: #ffd43b;
}

.footer-copy {
  border-top: 1px solid #444;
  padding-top: 1rem;
}

.footer-copy p {
  font-size: 0.8rem;
  color: #999;
  margin: 0;
}

/* Tablet ak Desktop */
@media (min-width: 768px) {
  .footer {
    padding: 3rem 2rem 1.5rem;
  }
  
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
  
  .footer-copy {
    border-top: none;
    padding-top: 0;
  }
}

@media (min-width: 1024px) {
  .footer {
    padding: 4rem 3rem 2rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-links a {
    font-size: 1rem;
  }
}
</style>`,
        hint: 'Itilize flex-direction: column pou mobile ak row pou desktop, ak justify-content: space-between.'
      }
    ]
  },
  {
    id: 8,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè: Complete Responsive Portfolio',
    titleFr: 'Mini-Projet: Portfolio Responsive Complet',
    contentHt: `## 🎨 Complete Responsive Portfolio - Fè portfolio ou an responsive ak pwofesyonèl

Kounye a se lè pou w aplike tout sa ou te aprann yo pou w fè portfolio ou an konplètman responsive ak adapte ak tout aparèy yo!

### Sa pou w fè:

**1. Mobile-First Approach**
- Kòmanse ak mobile styles (320px - 767px)
- Ajoute tablet styles (768px - 1023px)  
- Finish ak desktop styles (1024px+)

**2. Responsive Navigation**
- Vètikèl ak stacked sou mobile
- Òizontèl ak centered sou tablet ak desktop
- Touch-friendly button sizes (44px minimum)

**3. Responsive Typography**
- Fluid font sizes ki adapte ak screen sizes
- Line heights ki optimize pou chak aparèy
- Lisible ak comfortable sou tout grandè yo

**4. Responsive Project Grid**
- 1 column sou mobile
- 2 columns sou tablet
- 3 columns sou desktop
- Proper gaps ak spacing

**5. Responsive Images ak Media**
- max-width: 100% ak height: auto
- Proper aspect ratios ak cropping
- Fast loading ak optimized sizing

**6. Testing ak Debugging**
- Test sou DevTools ak different viewports
- Test touch interactions sou mobile
- Verify performance ak accessibility

### Breakpoints pou itilize:
- **Mobile**: Default (up to 767px)
- **Tablet**: @media (min-width: 768px)  
- **Desktop**: @media (min-width: 1024px)
- **Large Desktop**: @media (min-width: 1440px)

### Résultat Ekspekte:
Yon portfolio ki fonksyone perfètman sou tout aparèy yo ak eksperyans ki konsèy ak pwofesyonèl nan chak grandè ekran. Navigation, typography, layouts ak interactions yo dwe smooth ak optimized pou chak context.

Prè pou midterm project la nan semèn kap vini an kote nou pral combine tou 7 semèn yo nan yon portfolio konplè!`,
    contentFr: `## 🎨 Portfolio Responsive Complet - Rendre votre portfolio responsive et professionnel

Maintenant il est temps d'appliquer tout ce que vous avez appris pour rendre votre portfolio complètement responsive et adapté à tous les appareils!

### Ce qu'il faut faire:

**1. Approche Mobile-First**
- Commencer avec styles mobile (320px - 767px)
- Ajouter styles tablette (768px - 1023px)
- Finir avec styles desktop (1024px+)

**2. Navigation Responsive**
- Verticale et empilée sur mobile
- Horizontale et centrée sur tablette et desktop
- Tailles de boutons touch-friendly (44px minimum)

**3. Typographie Responsive**
- Tailles de police fluides qui s'adaptent aux tailles d'écran
- Line heights optimisés pour chaque appareil
- Lisible et confortable sur toutes les tailles

**4. Grille Projets Responsive**
- 1 colonne sur mobile
- 2 colonnes sur tablette
- 3 colonnes sur desktop
- Gaps et espacement appropriés

**5. Images et Médias Responsive**
- max-width: 100% et height: auto
- Rapports d'aspect et recadrage appropriés
- Chargement rapide et dimensionnement optimisé

**6. Tests et Debugging**
- Tester sur DevTools avec différents viewports
- Tester interactions tactiles sur mobile
- Vérifier performance et accessibilité

### Breakpoints à utiliser:
- **Mobile**: Par défaut (jusqu'à 767px)
- **Tablette**: @media (min-width: 768px)
- **Desktop**: @media (min-width: 1024px)
- **Grand Desktop**: @media (min-width: 1440px)

### Résultat Attendu:
Un portfolio qui fonctionne parfaitement sur tous les appareils avec une expérience cohérente et professionnelle à chaque taille d'écran. Navigation, typographie, layouts et interactions doivent être fluides et optimisés pour chaque contexte.

Prêt pour le projet midterm la semaine prochaine où nous combinerons toutes les 7 semaines en un portfolio complet!`
  }
];

export default htmlCssWeek7Cards;