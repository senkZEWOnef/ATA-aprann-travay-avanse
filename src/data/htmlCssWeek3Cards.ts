import { HtmlCssCard } from './htmlCssWeek1Cards';

export const htmlCssWeek3Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Revizyon ak Entwodiksyon CSS',
    titleFr: 'Révision et Introduction CSS',
    contentHt: `## 🗓 HTML & CSS pou Kòmansè yo – Semèn 3: CSS Fundamentals

### 🎯 Objektif yo
Nan fen Semèn 3 an, etidyan yo ap kapab:
• Konprann wòl CSS la pou prezantasyon vizyèl
• Itilize selectors, properties, ak values pou style eleman yo
• Aplike koulè, fonts, ak spacing ak CSS
• Link yon fichye CSS ekstèn ak \`<link>\` nan \`<head>\`
• Ranfòse konsèp separasyon kòntni ak style

### 📋 Revizyon Semèn 2:
• Navigation ak \`<nav>\` tag
• Images ak alt text
• Lists ak \`<ul>\`, \`<ol>\`, \`<li>\`
• Semantic HTML ak \`<section>\`
• Basic HTML structure

### 🤔 Kesyon pou Refleksyon:
"Kisa ki manke nan sit nou an vizyèlman?" 

**Repons:** Consistency ak design! CSS va ban nou pouvwa sa a.

### 🎨 Pwojè Kontinye:
Nou ap pran sit Semèn 2 nou an ak ajoute:
• Colors ak backgrounds
• Typography ak fonts
• Spacing ak alignment
• Professional appearance`,
    contentFr: `## 🗓 HTML & CSS pour Débutants – Semaine 3: Fondamentaux CSS

### 🎯 Objectifs
À la fin de la Semaine 3, les étudiants seront capables de:
• Comprendre le rôle de CSS pour la présentation visuelle
• Utiliser sélecteurs, propriétés et valeurs pour styliser les éléments
• Appliquer couleurs, polices et espacement avec CSS
• Lier un fichier CSS externe avec \`<link>\` dans \`<head>\`
• Renforcer le concept de séparation contenu vs style

### 📋 Révision Semaine 2:
• Navigation avec tag \`<nav>\`
• Images avec alt text
• Listes avec \`<ul>\`, \`<ol>\`, \`<li>\`
• HTML sémantique avec \`<section>\`
• Structure HTML de base

### 🤔 Question de Réflexion:
"Que manque-t-il visuellement à notre site?"

**Réponse:** Cohérence et design! CSS va nous donner ce pouvoir.

### 🎨 Projet Continu:
Nous prendrons notre site Semaine 2 et ajouterons:
• Couleurs et arrière-plans
• Typographie et polices
• Espacement et alignement
• Apparence professionnelle`,
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Kisa CSS ye?',
    titleFr: 'Qu\'est-ce que CSS?',
    contentHt: `## 🎨 Kisa CSS ye?

**CSS (Cascading Style Sheets)** kontwole design vizyèl HTML ou a.

### 📝 Syntax Pattern:
\`\`\`css
selector {
  property: value;
}
\`\`\`

### 🔥 Egzanp:
\`\`\`css
h1 {
  color: darkslateblue;
  text-align: center;
}
\`\`\`

Sa a di:
- Chwazi tout \`<h1>\` eleman yo
- Fè koulè yo darkslateblue
- Mete yo nan santè

### 🧠 Konsèp Kle yo:

**📌 Selector:** Ki eleman w ap style?
- \`h1\` = tout headings H1 yo
- \`.hero\` = eleman ak class="hero"
- \`#nav\` = eleman ak id="nav"

**📌 Property:** Ki aspè w ap chanje?
- \`color\` = koulè teks
- \`background-color\` = koulè background
- \`font-size\` = gwosè teks

**📌 Value:** Valè nouvo a
- \`red\`, \`#ff0000\`, \`rgb(255,0,0)\`
- \`16px\`, \`1.2em\`, \`large\`
- \`center\`, \`left\`, \`right\`

### 💡 Poukisa CSS Enpòtan?
- **Separasyon:** HTML = estrikti, CSS = aparans
- **Consistency:** Yon style ka afekte plizyè eleman
- **Maintanans:** Pi fasil pou chanje ak modifye
- **Pwofesyonèl:** Aparans ki konsèy ak atiran`,
    contentFr: `## 🎨 Qu'est-ce que CSS?

**CSS (Cascading Style Sheets)** contrôle le design visuel de votre HTML.

### 📝 Modèle de Syntaxe:
\`\`\`css
selector {
  property: value;
}
\`\`\`

### 🔥 Exemple:
\`\`\`css
h1 {
  color: darkslateblue;
  text-align: center;
}
\`\`\`

Ceci dit:
- Sélectionner tous les éléments \`<h1>\`
- Faire leur couleur darkslateblue
- Les centrer

### 🧠 Concepts Clés:

**📌 Sélecteur:** Quel élément allez-vous styliser?
- \`h1\` = tous les titres H1
- \`.hero\` = éléments avec class="hero"
- \`#nav\` = élément avec id="nav"

**📌 Propriété:** Quel aspect allez-vous changer?
- \`color\` = couleur du texte
- \`background-color\` = couleur d'arrière-plan
- \`font-size\` = taille du texte

**📌 Valeur:** La nouvelle valeur
- \`red\`, \`#ff0000\`, \`rgb(255,0,0)\`
- \`16px\`, \`1.2em\`, \`large\`
- \`center\`, \`left\`, \`right\`

### 💡 Pourquoi CSS est Important?
- **Séparation:** HTML = structure, CSS = apparence
- **Cohérence:** Un style peut affecter plusieurs éléments
- **Maintenance:** Plus facile de changer et modifier
- **Professionnel:** Apparence cohérente et attrayante`,
    codeExample: `/* Egzanp CSS debaz */
h1 {
  color: darkslateblue;
  text-align: center;
  font-size: 2.5em;
}

p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.highlight {
  background-color: yellow;
  padding: 0.5rem;
}`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Tip CSS yo',
    titleFr: 'Types de CSS',
    contentHt: `## 📁 Tip CSS yo

### 📊 Tablo Konparezon:

| Tip | Kijan pou Itilize | Best Practice |
|-----|-------------------|---------------|
| **Inline** | \`style="color:red"\` | ❌ Evite sof pou test rapid |
| **Internal** | \`<style>\` nan \`<head>\` | ⚠️ Bon pou demo single-file |
| **External** | Fichye .css separe ak \`<link>\` | ✅ Pratik pwofesyonèl |

### 1️⃣ Inline CSS:
\`\`\`html
<h1 style="color: red; font-size: 24px;">Tit Wouj</h1>
\`\`\`
**❌ Pwoblèm:** Difficult pou maintenir ak repete

### 2️⃣ Internal CSS:
\`\`\`html
<head>
  <style>
    h1 { color: blue; }
    p { font-size: 16px; }
  </style>
</head>
\`\`\`
**⚠️ Itilize:** Bon pou demo ak prototype

### 3️⃣ External CSS (REKÒMANDE):
**📄 style.css:**
\`\`\`css
h1 { 
  color: blue; 
  text-align: center;
}
p { 
  font-size: 16px; 
  line-height: 1.6;
}
\`\`\`

**📄 index.html:**
\`\`\`html
<head>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

### ✅ Avantaj External CSS:
- **Reutilizable:** Menm style nan plizyè paj
- **Maintanans:** Yon kote sèl pou chanje style
- **Pèfòmans:** Browser ka cache fichye CSS la
- **Òganizasyon:** Separasyon klè kòntni ak style
- **Kolaborasyon:** Designer ak developer kapab travay separe

### 🔗 Link Tag la:
\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`
- \`rel="stylesheet"\` = di browser sa a se yon stylesheet
- \`href="style.css"\` = chemen fichye CSS la`,
    contentFr: `## 📁 Types de CSS

### 📊 Tableau de Comparaison:

| Type | Comment Utiliser | Bonne Pratique |
|-----|------------------|----------------|
| **Inline** | \`style="color:red"\` | ❌ Éviter sauf pour tests rapides |
| **Internal** | \`<style>\` dans \`<head>\` | ⚠️ Bon pour démos single-file |
| **External** | Fichier .css séparé avec \`<link>\` | ✅ Pratique professionnelle |

### 1️⃣ CSS Inline:
\`\`\`html
<h1 style="color: red; font-size: 24px;">Titre Rouge</h1>
\`\`\`
**❌ Problème:** Difficile à maintenir et répétitif

### 2️⃣ CSS Interne:
\`\`\`html
<head>
  <style>
    h1 { color: blue; }
    p { font-size: 16px; }
  </style>
</head>
\`\`\`
**⚠️ Utilisation:** Bon pour démos et prototypes

### 3️⃣ CSS Externe (RECOMMANDÉ):
**📄 style.css:**
\`\`\`css
h1 { 
  color: blue; 
  text-align: center;
}
p { 
  font-size: 16px; 
  line-height: 1.6;
}
\`\`\`

**📄 index.html:**
\`\`\`html
<head>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

### ✅ Avantages CSS Externe:
- **Réutilisable:** Même style sur plusieurs pages
- **Maintenance:** Un seul endroit pour changer les styles
- **Performance:** Le navigateur peut mettre en cache le fichier CSS
- **Organisation:** Séparation claire contenu vs style
- **Collaboration:** Designers et développeurs peuvent travailler séparément

### 🔗 Tag Link:
\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`
- \`rel="stylesheet"\` = dit au navigateur que c'est une feuille de style
- \`href="style.css"\` = chemin vers le fichier CSS`,
    codeExample: `<!-- External CSS - RECOMMENDED -->
<head>
  <link rel="stylesheet" href="style.css">
  <title>Sit Mwen</title>
</head>

<!-- CSS file: style.css -->
/* 
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}
*/`
  },
  {
    id: 4,
    type: 'lesson',
    titleHt: 'Properties ak Selectors Debaz yo',
    titleFr: 'Propriétés et Sélecteurs de Base',
    contentHt: `## 🎯 Properties ak Selectors Debaz yo

### 📋 Core Properties yo:

| Kategori | Property | Egzanp |
|----------|----------|---------|
| **Koulè** | \`color\`, \`background-color\` | \`color: #222;\` |
| **Teks** | \`font-family\`, \`font-size\`, \`text-align\` | \`font-family: Arial;\` |
| **Spacing** | \`margin\`, \`padding\` | \`padding: 1rem;\` |
| **Border** | \`border\`, \`border-radius\` | \`border: 2px solid #ccc;\` |
| **Layout** | \`display\`, \`width\`, \`max-width\` | \`width: 90%; max-width: 800px;\` |

### 🎯 Selectors Enpòtan yo:

| Selector | Egzanp | Siyen |
|----------|--------|-------|
| **Element** | \`p {}\` | Vise tout paragraf yo |
| **Class** | \`.hero {}\` | Vise eleman ak \`class="hero"\` |
| **ID** | \`#nav {}\` | Vise eleman ak \`id="nav"\` |
| **Grouping** | \`h1, h2 {}\` | Aplike nan H1 ak H2 tou de |
| **Descendant** | \`nav a {}\` | Links nan nav sèlman |

### 🔥 Egzanp Pratik:

#### Element Selector:
\`\`\`css
p {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
}
\`\`\`

#### Class Selector:
\`\`\`html
<div class="hero">Kòntni enpòtan</div>
\`\`\`
\`\`\`css
.hero {
  background-color: #f0f8ff;
  padding: 2rem;
  text-align: center;
}
\`\`\`

#### ID Selector:
\`\`\`html
<nav id="main-nav">...</nav>
\`\`\`
\`\`\`css
#main-nav {
  background-color: #222;
  padding: 1rem;
}
\`\`\`

#### Grouping Selector:
\`\`\`css
h1, h2, h3 {
  color: #333;
  font-family: 'Georgia', serif;
}
\`\`\`

#### Descendant Selector:
\`\`\`css
nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #007acc;
}
\`\`\`

### 💡 Best Practices:
- Itilize **classes** pou styling (reutilizable)
- Itilize **IDs** pou JavaScript ak unique elements
- Itilize **element selectors** pou base styling
- Kombinasyon selectors pou precision`,
    contentFr: `## 🎯 Propriétés et Sélecteurs de Base

### 📋 Propriétés Principales:

| Catégorie | Propriété | Exemple |
|-----------|-----------|---------|
| **Couleur** | \`color\`, \`background-color\` | \`color: #222;\` |
| **Texte** | \`font-family\`, \`font-size\`, \`text-align\` | \`font-family: Arial;\` |
| **Espacement** | \`margin\`, \`padding\` | \`padding: 1rem;\` |
| **Bordure** | \`border\`, \`border-radius\` | \`border: 2px solid #ccc;\` |
| **Layout** | \`display\`, \`width\`, \`max-width\` | \`width: 90%; max-width: 800px;\` |

### 🎯 Sélecteurs Importants:

| Sélecteur | Exemple | Signification |
|-----------|---------|---------------|
| **Élément** | \`p {}\` | Cible tous les paragraphes |
| **Classe** | \`.hero {}\` | Cible éléments avec \`class="hero"\` |
| **ID** | \`#nav {}\` | Cible élément avec \`id="nav"\` |
| **Groupement** | \`h1, h2 {}\` | Applique à H1 et H2 |
| **Descendant** | \`nav a {}\` | Liens dans nav seulement |

### 🔥 Exemples Pratiques:

#### Sélecteur d'Élément:
\`\`\`css
p {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
}
\`\`\`

#### Sélecteur de Classe:
\`\`\`html
<div class="hero">Contenu important</div>
\`\`\`
\`\`\`css
.hero {
  background-color: #f0f8ff;
  padding: 2rem;
  text-align: center;
}
\`\`\`

#### Sélecteur ID:
\`\`\`html
<nav id="main-nav">...</nav>
\`\`\`
\`\`\`css
#main-nav {
  background-color: #222;
  padding: 1rem;
}
\`\`\`

#### Sélecteur de Groupement:
\`\`\`css
h1, h2, h3 {
  color: #333;
  font-family: 'Georgia', serif;
}
\`\`\`

#### Sélecteur Descendant:
\`\`\`css
nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #007acc;
}
\`\`\`

### 💡 Bonnes Pratiques:
- Utiliser **classes** pour le styling (réutilisable)
- Utiliser **IDs** pour JavaScript et éléments uniques
- Utiliser **sélecteurs d'éléments** pour styling de base
- Combiner sélecteurs pour plus de précision`,
    codeExample: `/* Egzanp konplè ak selectors ak properties */

/* Element selector */
body {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  margin: 0;
}

/* Class selector */
.hero {
  background-color: #f0f8ff;
  padding: 2rem;
  text-align: center;
}

/* ID selector */
#main-nav {
  background-color: #222;
  padding: 1rem;
}

/* Descendant selector */
nav a {
  color: white;
  text-decoration: none;
}

/* Hover state */
nav a:hover {
  color: #007acc;
}`
  },
  {
    id: 5,
    type: 'practice',
    titleHt: 'Egzèsis Pratik yo',
    titleFr: 'Exercices Pratiques',
    contentHt: `## 🧩 Egzèsis Pratik yo - Semèn 3

Kounye a ann pratike CSS ak sit nou an!`,
    contentFr: `## 🧩 Exercices Pratiques - Semaine 3

Maintenant pratiquons CSS avec notre site!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute yon <link> tag nan <head> ou a pou konekte style.css. Chanje background-color nan body a nan yon koulè ou renmen.',
        instructionFr: 'Ajouter un tag <link> dans votre <head> pour connecter style.css. Changer le background-color du body à une couleur que vous aimez.',
        starterCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pòtrè Mwen</title>
  <!-- Ajoute link tag isit la -->
</head>`,
        solution: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pòtrè Mwen</title>
  <link rel="stylesheet" href="style.css">
</head>

/* CSS */
body {
  background-color: #fafafa;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}`,
        hint: 'Sonje itilize rel="stylesheet" ak href="style.css" nan link tag la.'
      },
      {
        id: 2,
        instructionHt: 'Style header ou a ak yon background koulè ak koulè teks diferan. Santè teks la tou.',
        instructionFr: 'Styliser votre header avec une couleur de fond et couleur de texte différente. Centrer le texte aussi.',
        starterCode: `/* Ajoute CSS pou header la */
header {
  /* Ajoute properties isit la */
}`,
        solution: `header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}`,
        hint: 'Itilize background-color, color, text-align, ak padding pou yon bon aparans.'
      },
      {
        id: 3,
        instructionHt: 'Style navigation ou a ak yon background ak efè hover pou links yo.',
        instructionFr: 'Styliser votre navigation avec un arrière-plan et effet hover pour les liens.',
        starterCode: `/* Style navigation */
nav {
  /* Properties pou nav container */
}

nav a {
  /* Properties pou links yo */
}

nav a:hover {
  /* Properties pou hover state */
}`,
        solution: `nav {
  background-color: #f2f2f2;
  padding: 0.75rem;
  text-align: center;
  border-radius: 5px;
}

nav a {
  color: #333;
  text-decoration: none;
  margin: 0 0.75rem;
  font-weight: 500;
}

nav a:hover {
  color: #007acc;
  text-decoration: underline;
}`,
        hint: 'Itilize :hover pseudo-selector pou efè hover yo.'
      },
      {
        id: 4,
        instructionHt: 'Ajoute border ak border-radius nan imaj ou a pou fè li pi bèl.',
        instructionFr: 'Ajouter border et border-radius à votre image pour la rendre plus belle.',
        starterCode: `/* Style imaj la */
img {
  /* Ajoute border ak border-radius */
}`,
        solution: `img {
  border-radius: 10px;
  border: 2px solid #ddd;
  margin-top: 0.5rem;
  max-width: 100%;
  height: auto;
}`,
        hint: 'border-radius fè kwen yo wonn ak border ajoute yon outlined.'
      },
      {
        id: 5,
        instructionHt: '⭐ Bonus: Kreye yon footer ak background ak style ki matche ak header ou a.',
        instructionFr: '⭐ Bonus: Créer un footer avec background et style qui correspond à votre header.',
        starterCode: `<!-- HTML -->
<footer>
  <p>&copy; 2024 Mon ou. Tout dwa rezève.</p>
</footer>

/* CSS */
footer {
  /* Style ki matche ak header */
}`,
        solution: `footer {
  background-color: #222;
  color: #eee;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

footer p {
  margin: 0;
}`,
        hint: 'Itilize menm background ak header la men ka diferan spacing.'
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    titleHt: 'Quiz CSS Fundamentals',
    titleFr: 'Quiz Fondamentaux CSS',
    contentHt: `## 🧪 Quiz CSS Fundamentals

Test konesans ou sou CSS debaz yo!`,
    contentFr: `## 🧪 Quiz Fondamentaux CSS

Testez vos connaissances sur les bases CSS!`,
    quiz: [
      {
        id: 1,
        questionHt: 'Kisa CSS vle di?',
        questionFr: 'Que signifie CSS?',
        options: [
          { ht: 'Computer Style Sheets', fr: 'Computer Style Sheets' },
          { ht: 'Cascading Style Sheets', fr: 'Cascading Style Sheets' },
          { ht: 'Creative Style System', fr: 'Creative Style System' },
          { ht: 'Code Style Standards', fr: 'Code Style Standards' }
        ],
        correctAnswer: 1,
        explanationHt: 'CSS vle di Cascading Style Sheets - lang yo itilize pou style ak prezante dokiman HTML yo.',
        explanationFr: 'CSS signifie Cascading Style Sheets - langage utilisé pour styliser et présenter les documents HTML.'
      },
      {
        id: 2,
        questionHt: 'Ki tag ki link yon fichye CSS ekstèn?',
        questionFr: 'Quel tag relie un fichier CSS externe?',
        options: [
          { ht: '<css src="">', fr: '<css src="">' },
          { ht: '<link rel="stylesheet">', fr: '<link rel="stylesheet">' },
          { ht: '<style href="">', fr: '<style href="">' },
          { ht: '<import css="">', fr: '<import css="">' }
        ],
        correctAnswer: 1,
        explanationHt: '<link rel="stylesheet" href="style.css"> se fason kòrèk pou link yon fichye CSS ekstèn.',
        explanationFr: '<link rel="stylesheet" href="style.css"> est la façon correcte de lier un fichier CSS externe.'
      },
      {
        id: 3,
        questionHt: 'Ki selector ki vise yon class ki rele "hero"?',
        questionFr: 'Quel sélecteur cible une classe nommée "hero"?',
        options: [
          { ht: 'hero{}', fr: 'hero{}' },
          { ht: '.hero{}', fr: '.hero{}' },
          { ht: '#hero{}', fr: '#hero{}' },
          { ht: '*hero{}', fr: '*hero{}' }
        ],
        correctAnswer: 1,
        explanationHt: '.hero {} se fason pou vise eleman yo ak class="hero". . la endike li se yon class selector.',
        explanationFr: '.hero {} est la façon de cibler les éléments avec class="hero". Le . indique que c\'est un sélecteur de classe.'
      },
      {
        id: 4,
        questionHt: 'Ki property ki chanje koulè teks la?',
        questionFr: 'Quelle propriété change la couleur du texte?',
        options: [
          { ht: 'text-color', fr: 'text-color' },
          { ht: 'font-color', fr: 'font-color' },
          { ht: 'color', fr: 'color' },
          { ht: 'background-color', fr: 'background-color' }
        ],
        correctAnswer: 2,
        explanationHt: '"color" property la kontwole koulè teks la. "background-color" kontwole koulè background la.',
        explanationFr: 'La propriété "color" contrôle la couleur du texte. "background-color" contrôle la couleur de l\'arrière-plan.'
      },
      {
        id: 5,
        questionHt: 'Vrè oswa Fo: Inline styles dwe itilize pou gwo sit yo.',
        questionFr: 'Vrai ou Faux: Les styles inline doivent être utilisés pour les grands sites.',
        options: [
          { ht: 'Vrè', fr: 'Vrai' },
          { ht: 'Fo', fr: 'Faux' }
        ],
        correctAnswer: 1,
        explanationHt: 'FO. Inline styles dwe evite pou gwo sit yo paske yo difficult pou mentenir ak yo repete. External CSS pi bon.',
        explanationFr: 'FAUX. Les styles inline doivent être évités pour les grands sites car ils sont difficiles à maintenir et répétitifs. CSS externe est meilleur.'
      }
    ]
  },
  {
    id: 7,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè - "Premye Styled Portfolio Page"',
    titleFr: 'Mini-Projet - "Première Page Portfolio Stylisée"',
    contentHt: `## 💬 Mini-Pwojè — "Premye Styled Portfolio Page"

### 🎯 Objektif:
Kontinye ak sit Semèn 2 ou a ak ajoute yon external CSS file pou fè li pi bèl ak pi pwofesyonèl.

### ✅ Kondisyon yo:
• **External CSS:** Kreye ak link style.css file
• **Colors:** Aplike koulè nan background ak header
• **Navigation Styling:** Style navigation links ak hover states
• **Typography:** Ajiste font family ak gwosè yo pou readability
• **Consistent Spacing:** Ajoute padding ak margins ki konsèy
• **Image Styling:** Ajoute borders ak border-radius

### 📋 Etap pa Etap:

**1. Link External CSS:**
\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pòtrè Mwen</title>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

**2. Basic Body Styling:**
\`\`\`css
body {
  background-color: #fafafa;
  color: #222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
\`\`\`

**3. Header Styling:**
\`\`\`css
header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

h1, h2, h3 {
  color: #333;
}
\`\`\`

**4. Navigation Styling:**
\`\`\`css
nav {
  background-color: #f2f2f2;
  padding: 0.75rem;
  text-align: center;
}

nav a {
  color: #333;
  text-decoration: none;
  margin: 0 0.75rem;
  font-weight: 500;
}

nav a:hover {
  color: #007acc;
}
\`\`\`

**5. Section ak Image Styling:**
\`\`\`css
section {
  padding: 1.5rem;
}

img {
  border-radius: 10px;
  border: 2px solid #ddd;
}

footer {
  background-color: #222;
  color: #eee;
  text-align: center;
  padding: 1rem;
}
\`\`\`

### 🎯 Rezilta ki Atann:
Yon homepage ki klè ak ki ka li fasil, ak yon color scheme ki konsèy ak typography ki améliore. Sit la dwe santi li pwofesyonèl ak ready pou Semèn 4 (Box Model).

### 💾 Sove Progression:
Sove travay ou a kòm "Semèn 3" nan playground la. Sa a ap vin base ou a pou Semèn 4.`,
    contentFr: `## 💬 Mini-Projet — "Première Page Portfolio Stylisée"

### 🎯 Objectif:
Continuer avec votre site Semaine 2 en ajoutant un fichier CSS externe pour le rendre plus beau et professionnel.

### ✅ Exigences:
• **CSS Externe:** Créer et lier fichier style.css
• **Couleurs:** Appliquer couleurs à l'arrière-plan et header
• **Style Navigation:** Styliser les liens de navigation avec états hover
• **Typographie:** Ajuster police et tailles pour la lisibilité
• **Espacement Cohérent:** Ajouter padding et margins cohérents
• **Style Image:** Ajouter bordures et border-radius

### 📋 Étapes:

**1. Lier CSS Externe:**
\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

**2. Style Body de Base:**
\`\`\`css
body {
  background-color: #fafafa;
  color: #222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
\`\`\`

**3. Style Header:**
\`\`\`css
header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

h1, h2, h3 {
  color: #333;
}
\`\`\`

**4. Style Navigation:**
\`\`\`css
nav {
  background-color: #f2f2f2;
  padding: 0.75rem;
  text-align: center;
}

nav a {
  color: #333;
  text-decoration: none;
  margin: 0 0.75rem;
  font-weight: 500;
}

nav a:hover {
  color: #007acc;
}
\`\`\`

**5. Style Section et Image:**
\`\`\`css
section {
  padding: 1.5rem;
}

img {
  border-radius: 10px;
  border: 2px solid #ddd;
}

footer {
  background-color: #222;
  color: #eee;
  text-align: center;
  padding: 1rem;
}
\`\`\`

### 🎯 Résultat Attendu:
Une homepage clairement lisible avec un schéma de couleurs cohérent et une typographie améliorée. Le site doit paraître professionnel et prêt pour la Semaine 4 (Box Model).

### 💾 Sauvegarder Progression:
Sauvegarder votre travail comme "Semaine 3" dans le playground. Ceci deviendra votre base pour la Semaine 4.`,
  },
  {
    id: 8,
    type: 'lesson',
    titleHt: 'Kisa ki Vini Apre a',
    titleFr: 'Ce qui Vient Ensuite',
    contentHt: `## 🧱 Kisa ki Vini Apre a

### Semèn 4: Box Model ak Spacing

Nan semèn pwochen an, nou ap aprann konsèp enpòtan Box Model la:

**📦 Box Model Components:**
- **Content:** Kòntni reyèl la
- **Padding:** Espas nan interior eleman an
- **Border:** Limit eleman an
- **Margin:** Espas nan eksteryè ak lòt eleman yo

**🎯 Pwojè Kontinye:**
Nou ap pran sit stylis nou an nan Semèn 3 ak nou ap:
- Konprann ak aplike margin ak padding
- Kreye cards ak containers ak Box Model
- Amelyore spacing ak layout
- Prepare pou layout avanse yo

### 🎉 Bravo pou Semèn 3!

Kounye a ou konnen:
✅ Kisa CSS ye ak poukisa li enpòtan
✅ Comment pou itilize selectors ak properties
✅ Kijan pou link external CSS file yo
✅ Comment pou aplike koulè, fonts, ak basic styling
✅ Diferans ant inline, internal, ak external CSS

**Sit ou a kounye a gen aparans pwofesyonèl! Kontinye ak bon travay la! 🚀**

### 💡 Tips pou Kontinye:
- Pratike ak diferan koulè ak fonts
- Eksperyènte ak selectors yo
- Toujou itilize external CSS pou pwojè yo
- Òganize CSS ou a ak kòmantè`,
    contentFr: `## 🧱 Ce qui Vient Ensuite

### Semaine 4: Box Model et Espacement

La semaine prochaine, nous apprendrons le concept important du Box Model:

**📦 Composants Box Model:**
- **Content:** Le contenu réel
- **Padding:** Espace à l'intérieur de l'élément
- **Border:** Limite de l'élément
- **Margin:** Espace extérieur avec autres éléments

**🎯 Projet Continu:**
Nous prendrons notre site stylisé de la Semaine 3 et nous:
- Comprendrons et appliquerons margin et padding
- Créerons des cards et containers avec Box Model
- Améliorerons l'espacement et layout
- Préparerons pour les layouts avancés

### 🎉 Félicitations pour la Semaine 3!

Maintenant vous savez:
✅ Ce qu'est CSS et pourquoi c'est important
✅ Comment utiliser sélecteurs et propriétés
✅ Comment lier des fichiers CSS externes
✅ Comment appliquer couleurs, polices et styling de base
✅ Différence entre CSS inline, internal et external

**Votre site a maintenant une apparence professionnelle! Continuez le bon travail! 🚀**

### 💡 Conseils pour Continuer:
- Pratiquer avec différentes couleurs et polices
- Expérimenter avec les sélecteurs
- Toujours utiliser CSS externe pour les projets
- Organiser votre CSS avec des commentaires`,
  }
];

export default htmlCssWeek3Cards;