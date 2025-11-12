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

const htmlCssWeek5Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Kisa Typography la ye?',
    titleFr: 'Qu\'est-ce que la Typographie?',
    contentHt: `## ✍️ Kisa Typography la ye?

Typography se yon eleman ki enpòtan anpil nan depo yon website. Li kontrole kijan tèks la parèt ak kijan moun yo li yo.

### Poukisa Typography enpòtan?
• 📖 **Lisibilité** - Li fè tèks la pi fasil pou w li
• 🎨 **Style** - Li bay website ou yon sans ak yon ton
• 📱 **Eksperyans Itilizatè** - Li amelyore eksperyans moun k ap vizite sit ou an
• 💼 **Pwofesyonèl** - Typography bon fè sit ou parèt pi pwofesyonèl

### Eleman Typography yo
1. **Font Family** - Ki kalite lèt w ap itilize
2. **Font Size** - Kantite lèt yo gran
3. **Font Weight** - Si lèt yo gen anpil ou pa gen anpil
4. **Line Height** - Espas ant liy yo
5. **Letter Spacing** - Espas ant lèt yo`,
    contentFr: `## ✍️ Qu'est-ce que la Typographie?

La typographie est un élément crucial dans la conception d'un site web. Elle contrôle comment le texte apparaît et comment les gens le lisent.

### Pourquoi la typographie est importante?
• 📖 **Lisibilité** - Elle rend le texte plus facile à lire
• 🎨 **Style** - Elle donne à votre site un sens et un ton
• 📱 **Expérience Utilisateur** - Elle améliore l'expérience des visiteurs
• 💼 **Professionnalisme** - Une bonne typographie rend votre site plus professionnel

### Éléments de Typographie
1. **Font Family** - Le type de police utilisé
2. **Font Size** - La taille du texte
3. **Font Weight** - L'épaisseur des lettres
4. **Line Height** - L'espace entre les lignes
5. **Letter Spacing** - L'espace entre les lettres`,
    codeExample: `/* Egzanp Typography de baz */
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
}`
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Google Fonts ak kijan pou w itilize yo',
    titleFr: 'Google Fonts et comment les utiliser',
    contentHt: `## 🌐 Google Fonts - Fonts gratis pou tout moun!

Google Fonts se yon koleksyon fonts ki gratis ak ki fasil pou w itilize nan website ou yo.

### Avantaj Google Fonts yo:
• 💰 **Gratis** - Ou pa bezwen peye anyen
• 🚀 **Rapid** - Yo chaje rapid nan navigatè yo
• 📱 **Konpatibl** - Yo travay sou tout aparèy yo
• 🎨 **Divèsite** - Gen anpil style diferan

### Kijan pou w itilize Google Fonts:

**1. Ale sou fonts.google.com**

**2. Chwazi fonts ou vle yo**
- Chwazi youn pou heading yo (Egzanp: Poppins)
- Chwazi youn pou tèks regilyè yo (Egzanp: Open Sans)

**3. Kopye link tag la**
- Google ap ba ou yon link tag pou w mete nan <head>

**4. Aplike nan CSS ou an**`,
    contentFr: `## 🌐 Google Fonts - Des polices gratuites pour tous!

Google Fonts est une collection de polices gratuites et faciles à utiliser sur vos sites web.

### Avantages de Google Fonts:
• 💰 **Gratuit** - Vous n'avez rien à payer
• 🚀 **Rapide** - Elles se chargent rapidement dans les navigateurs
• 📱 **Compatible** - Elles fonctionnent sur tous les appareils
• 🎨 **Diversité** - Beaucoup de styles différents

### Comment utiliser Google Fonts:

**1. Aller sur fonts.google.com**

**2. Choisir vos polices**
- Choisir une pour les en-têtes (Ex: Poppins)
- Choisir une pour le texte régulier (Ex: Open Sans)

**3. Copier le link tag**
- Google vous donnera un link tag à mettre dans <head>

**4. Appliquer dans votre CSS**`,
    codeExample: `<!-- Nan <head> section an -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">

/* Nan CSS ou an */
body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Visual Hierarchy - Òganize enfòmasyon an',
    titleFr: 'Hiérarchie Visuelle - Organiser l\'information',
    contentHt: `## 📋 Visual Hierarchy - Montre kisa ki pi enpòtan

Visual Hierarchy se yon metòd pou w òganize enfòmasyon an nan yon fason ki fè moun yo konnen kisa ki pi enpòtan.

### Kijan pou w kreye Hierarchy:

**1. Font Size (Grandè Fonts)**
- H1: Pi gwo a (2.2rem)
- H2: Mwayen (1.6rem) 
- H3: Ti kras (1.2rem)
- P: Regilyè (1rem)

**2. Font Weight (Epesè)**
- Headings: 600-700 (Bold)
- Paragraphs: 400 (Normal)

**3. Color Contrast**
- Headings: Pi fonse (#111)
- Body text: Mwayen (#444)
- Secondary text: Pi klè (#666)

### Règ enpòtan yo:
✅ Itilize maksimòm 2 fonts
✅ Konsèy grandè fonts yo
✅ Ba headings yo pi fòs pase paragraphs yo`,
    contentFr: `## 📋 Hiérarchie Visuelle - Montrer ce qui est important

La hiérarchie visuelle est une méthode pour organiser l'information de façon à ce que les gens sachent ce qui est le plus important.

### Comment créer une Hiérarchie:

**1. Font Size (Taille des Polices)**
- H1: Le plus grand (2.2rem)
- H2: Moyen (1.6rem)
- H3: Petit (1.2rem)
- P: Régulier (1rem)

**2. Font Weight (Épaisseur)**
- En-têtes: 600-700 (Gras)
- Paragraphes: 400 (Normal)

**3. Contraste de Couleur**
- En-têtes: Plus foncé (#111)
- Texte corps: Moyen (#444)
- Texte secondaire: Plus clair (#666)

### Règles importantes:
✅ Utiliser maximum 2 polices
✅ Garder les tailles cohérentes
✅ Rendre les en-têtes plus forts que les paragraphes`,
    codeExample: `/* Sistèm Hierarchy konsèy */
h1 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #111;
  letter-spacing: 1px;
}

h2 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #222;
  margin-top: 1.5rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

p {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  max-width: 600px;
}`
  },
  {
    id: 4,
    type: 'practice',
    titleHt: 'Pratike: Aplike Google Fonts',
    titleFr: 'Pratique: Appliquer Google Fonts',
    contentHt: `Kounye a, ann pratike kijan pou w ajoute Google Fonts nan yon sit web ak kreye yon hierarchy bèl!`,
    contentFr: `Maintenant, pratiquons comment ajouter Google Fonts à un site web et créer une belle hiérarchie!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute Google Fonts link nan <head> ak aplike yo nan CSS.',
        instructionFr: 'Ajouter le link Google Fonts dans <head> et les appliquer dans CSS.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Mon Portfolio</title>
  <!-- Ajoute Google Fonts link la isit -->
  
  <style>
    /* Aplike fonts yo isit */
    body {
      
    }
    
    h1, h2, h3 {
      
    }
  </style>
</head>
<body>
  <h1>Byenveni nan Portfolio mwen</h1>
  <h2>Sou mwen</h2>
  <p>Mwen se yon développeur web ki gen pasyon pou teknoloji yo.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <title>Mon Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      color: #222;
    }
    
    h1, h2, h3 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      color: #111;
    }
  </style>
</head>
<body>
  <h1>Byenveni nan Portfolio mwen</h1>
  <h2>Sou mwen</h2>
  <p>Mwen se yon développeur web ki gen pasyon pou teknoloji yo.</p>
</body>
</html>`,
        hint: 'Ale sou fonts.google.com, chwazi Poppins ak Open Sans, epi kopye link tag la.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon sistèm hierarchy ak font sizes ak colors ki diferan.',
        instructionFr: 'Créer un système de hiérarchie avec des tailles et couleurs différentes.',
        starterCode: `h1 {
  /* Fè sa a pi gwo ak pi bèl */
}

h2 {
  /* Fè sa a mwayen ak atiran */
}

p {
  /* Fè sa a fasil pou w li ak comfortable */
}`,
        solution: `h1 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #111;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #222;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  max-width: 600px;
  margin-bottom: 1rem;
}`,
        hint: 'Sonje: H1 dwe pi gwo, H2 mwayen, ak P dwe gen line-height bon pou lisibilité.'
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    titleHt: 'Quiz: Typography ak Google Fonts',
    titleFr: 'Quiz: Typographie et Google Fonts',
    contentHt: 'Teste konesans ou sou typography ak Google Fonts!',
    contentFr: 'Testez vos connaissances sur la typographie et Google Fonts!',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki property CSS la ki kontrole grandè tèks la?',
        questionFr: 'Quelle propriété CSS contrôle la taille du texte?',
        options: [
          { ht: 'text-size', fr: 'text-size' },
          { ht: 'font-size', fr: 'font-size' },
          { ht: 'size', fr: 'size' },
          { ht: 'font-width', fr: 'font-width' }
        ],
        correctAnswer: 1,
        explanationHt: 'font-size se property a ki kontrole grandè tèks la nan CSS.',
        explanationFr: 'font-size est la propriété qui contrôle la taille du texte en CSS.'
      },
      {
        id: 2,
        questionHt: 'Ki kote ou dwe mete Google Fonts link tag la?',
        questionFr: 'Où devez-vous mettre le link tag Google Fonts?',
        options: [
          { ht: 'Nan <body>', fr: 'Dans <body>' },
          { ht: 'Nan <head>', fr: 'Dans <head>' },
          { ht: 'Nan CSS file', fr: 'Dans le fichier CSS' },
          { ht: 'Nan <footer>', fr: 'Dans <footer>' }
        ],
        correctAnswer: 1,
        explanationHt: 'Link tag yo dwe toujou nan <head> section an pou yo ka chaje anvan rès kontan an.',
        explanationFr: 'Les link tags doivent toujours être dans la section <head> pour se charger avant le reste du contenu.'
      },
      {
        id: 3,
        questionHt: 'Ki property la ki kontrole espas ant liy yo?',
        questionFr: 'Quelle propriété contrôle l\'espace entre les lignes?',
        options: [
          { ht: 'letter-spacing', fr: 'letter-spacing' },
          { ht: 'line-height', fr: 'line-height' },
          { ht: 'word-spacing', fr: 'word-spacing' },
          { ht: 'text-spacing', fr: 'text-spacing' }
        ],
        correctAnswer: 1,
        explanationHt: 'line-height kontrole espas ant liy yo ak li enpòtan pou lisibilité.',
        explanationFr: 'line-height contrôle l\'espace entre les lignes et est important pour la lisibilité.'
      },
      {
        id: 4,
        questionHt: 'Konbyen fonts ou ta dwe itilize maksimòm nan yon sit?',
        questionFr: 'Combien de polices devriez-vous utiliser maximum sur un site?',
        options: [
          { ht: '1', fr: '1' },
          { ht: '2', fr: '2' },
          { ht: '5', fr: '5' },
          { ht: 'Okenn limit', fr: 'Aucune limite' }
        ],
        correctAnswer: 1,
        explanationHt: 'Li pi bon pou w itilize maksimòm 2 fonts pou w konsèv konsistans ak pwofesyonèl.',
        explanationFr: 'Il est préférable d\'utiliser maximum 2 polices pour maintenir la cohérence et le professionnalisme.'
      }
    ]
  },
  {
    id: 6,
    type: 'lesson',
    titleHt: 'Propriétés Typography Avanse yo',
    titleFr: 'Propriétés Typographiques Avancées',
    contentHt: `## 🎨 Propriétés Typography Avanse yo

Gen kèk propriétés ki ka ba ou pi fòs kontwòl sou typography ou an:

### Letter Spacing
\`letter-spacing\` kontrole espas ant lèt yo:
• **0.5px**: Pou yon efè elegan ak sofistike
• **1px**: Pou headings yo ki gen enpòtans
• **-0.5px**: Pou kondanse tèks la

### Text Transform
\`text-transform\` ka chanje tèks la:
• **uppercase**: TOUT LÈTY YO GWO
• **lowercase**: tout lèty yo ti
• **capitalize**: Chak Mo Kòmanse Ak Yon Gwo Lèt

### Text Align
\`text-align\` kontwòl pozisyon tèks la:
• **left**: Aliyan sou gòch (default)
• **center**: Nan mitan
• **right**: Sou dwat
• **justify**: Aliyan sou tou de bò yo

### Line Height pi bon yo:
• **Headings**: 1.2 - 1.4
• **Body text**: 1.6 - 1.8
• **Small text**: 1.4 - 1.6`,
    contentFr: `## 🎨 Propriétés Typographiques Avancées

Il existe plusieurs propriétés qui vous donnent plus de contrôle sur votre typographie:

### Letter Spacing
\`letter-spacing\` contrôle l'espace entre les lettres:
• **0.5px**: Pour un effet élégant et sophistiqué
• **1px**: Pour les en-têtes importantes
• **-0.5px**: Pour condenser le texte

### Text Transform
\`text-transform\` peut modifier le texte:
• **uppercase**: TOUTES LES LETTRES MAJUSCULES
• **lowercase**: toutes les lettres minuscules
• **capitalize**: Chaque Mot Commence Par Une Majuscule

### Text Align
\`text-align\` contrôle la position du texte:
• **left**: Aligné à gauche (défaut)
• **center**: Au centre
• **right**: À droite
• **justify**: Aligné des deux côtés

### Meilleures Line Height:
• **En-têtes**: 1.2 - 1.4
• **Texte corps**: 1.6 - 1.8
• **Petit texte**: 1.4 - 1.6`,
    codeExample: `/* Typography avanse */
h1 {
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.3;
}

nav a {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}`
  },
  {
    id: 7,
    type: 'practice',
    titleHt: 'Pratike: Typography Avanse',
    titleFr: 'Pratique: Typographie Avancée',
    contentHt: `Ann aplike proprietés typography avanse yo pou w kreye yon style pwofesyonèl ak bèl!`,
    contentFr: `Appliquons les propriétés typographiques avancées pour créer un style professionnel et beau!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon navigation ak letter-spacing ak text-transform.',
        instructionFr: 'Créer une navigation avec letter-spacing et text-transform.',
        starterCode: `<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</nav>

<style>
nav a {
  /* Ajoute styles pou navigation an */
}
</style>`,
        solution: `<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
</nav>

<style>
nav a {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  margin: 0 1rem;
}

nav a:hover {
  color: #007bff;
}
</style>`,
        hint: 'Itilize text-transform: uppercase ak letter-spacing pou yon efè pwofesyonèl.'
      },
      {
        id: 2,
        instructionHt: 'Fè yon intro paragraph ak text-align center ak line-height bon.',
        instructionFr: 'Faire un paragraphe d\'intro avec text-align center et bon line-height.',
        starterCode: `<div class="intro">
  <h1>Byenveni nan Portfolio mwen</h1>
  <p class="intro-text">Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl. Depi kèk ane mwen ap travay sou pwojè yo ki gen enpòtans.</p>
</div>

<style>
.intro-text {
  /* Fè tèks la bèl ak fasil pou w li */
}
</style>`,
        solution: `<div class="intro">
  <h1>Byenveni nan Portfolio mwen</h1>
  <p class="intro-text">Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl. Depi kèk ane mwen ap travay sou pwojè yo ki gen enpòtans.</p>
</div>

<style>
.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  max-width: 500px;
  margin: 0 auto 2rem;
  color: #555;
}
</style>`,
        hint: 'Itilize text-align: center, max-width, ak margin: 0 auto pou w santre tèks la.'
      }
    ]
  },
  {
    id: 8,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè: Typography Polish',
    titleFr: 'Mini-Projet: Polish Typographique',
    contentHt: `## 🎨 Typography Polish - Amelyore typography nan portfolio ou an

Kounye a se lè pou w aplike tout sa ou te aprann yo pou w ba portfolio ou an yon sans pwofesyonèl ak bèl!

### Sa pou w fè:

**1. Ajoute Google Fonts**
- Chwazi 2 fonts ki byen ale ansanm
- Youn pou headings (Egzanp: Poppins, Montserrat)
- Youn pou body text (Egzanp: Open Sans, Lato)

**2. Etabli Visual Hierarchy**
- H1: 2.2rem, gra, nan mitan
- H2: 1.6rem, gra, margin bon
- H3: 1.2rem, gra
- P: 1rem, line-height 1.7

**3. Polish Navigation**
- Text-transform uppercase
- Letter-spacing 0.5px
- Hover effects

**4. Amelyore Lisibilité**
- Max-width pou paragraphs (600px)
- Colors konsèy (#111, #444, #666)
- Line-height optimal

### Résultat Ekspekte:
Yon portfolio ki gen typography pwofesyonèl, ki fasil pou w li, ak ki gen yon style konsèy ak bèl. Prè pou w ajoute Flexbox nan semèn kap vini an!`,
    contentFr: `## 🎨 Polish Typographique - Améliorer la typography de votre portfolio

Maintenant il est temps d'appliquer tout ce que vous avez appris pour donner à votre portfolio un aspect professionnel et beau!

### Ce qu'il faut faire:

**1. Ajouter Google Fonts**
- Choisir 2 polices qui vont bien ensemble
- Une pour les en-têtes (Ex: Poppins, Montserrat)
- Une pour le texte corps (Ex: Open Sans, Lato)

**2. Établir la Hiérarchie Visuelle**
- H1: 2.2rem, gras, centré
- H2: 1.6rem, gras, bonnes marges
- H3: 1.2rem, gras
- P: 1rem, line-height 1.7

**3. Polish la Navigation**
- Text-transform uppercase
- Letter-spacing 0.5px
- Effets de survol

**4. Améliorer la Lisibilité**
- Max-width pour les paragraphes (600px)
- Couleurs cohérentes (#111, #444, #666)
- Line-height optimal

### Résultat Attendu:
Un portfolio avec une typographie professionnelle, facile à lire, et avec un style cohérent et beau. Prêt pour ajouter Flexbox la semaine prochaine!`
  }
];

export default htmlCssWeek5Cards;