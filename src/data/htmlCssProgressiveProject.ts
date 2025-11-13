export interface ProjectStep {
  week: number;
  titleHt: string;
  titleFr: string;
  objectiveHt: string;
  objectiveFr: string;
  instructionsHt: string[];
  instructionsFr: string[];
  starterHtml: string;
  starterCss: string;
  expectedResultHt: string;
  expectedResultFr: string;
  tipsHt: string[];
  tipsFr: string[];
}

export const htmlCssProgressiveProject: ProjectStep[] = [
  {
    week: 1,
    titleHt: 'Kreye Estrikti HTML Debaz la',
    titleFr: 'Créer la Structure HTML de Base',
    objectiveHt: 'Kreye premye paj HTML ou a ak estrikti semantik debaz la.',
    objectiveFr: 'Créer votre première page HTML avec une structure sémantique de base.',
    instructionsHt: [
      'Kreye yon dokiman HTML ak DOCTYPE ak estrikti debaz la',
      'Ajoute yon <header> ak non ou ak yon ti deskripsyon',
      'Kreye yon <main> ki gen kèk enfòmasyon sou ou',
      'Ajoute yon <footer> ak enfòmasyon kontak yo',
      'Itilize headings (h1, h2) ak paragraphs (p) kòrèkteman'
    ],
    instructionsFr: [
      'Créer un document HTML avec DOCTYPE et structure de base',
      'Ajouter un <header> avec votre nom et une petite description',
      'Créer un <main> avec quelques informations sur vous',
      'Ajouter un <footer> avec les informations de contact',
      'Utiliser les titres (h1, h2) et paragraphes (p) correctement'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen - Mon ou</title>
</head>
<body>
    <!-- Ajoute kòntni ou a isit la -->
    
</body>
</html>`,
    starterCss: `/* Ou pa bezwen CSS nan semèn sa a */
/* Ou va kòmanse ak CSS nan semèn 3 */`,
    expectedResultHt: 'Yon paj HTML senp ak header, main, ak footer. Paj la dwe gen enfòmasyon debaz sou ou kòm yon devlopè nan devni.',
    expectedResultFr: 'Une page HTML simple avec header, main et footer. La page doit contenir des informations de base sur vous en tant que futur développeur.',
    tipsHt: [
      'Kòmanse ak yon estrikti senp ak semantik',
      'Itilize headings nan yon fason ijèarchik (h1 pou tit prensipal la, h2 pou seksyon yo)',
      'Pa bliye ajoute alt text pou imaj yo',
      'Validate HTML ou a ak W3C validator'
    ],
    tipsFr: [
      'Commencer avec une structure simple et sémantique',
      'Utiliser les titres de façon hiérarchique (h1 pour le titre principal, h2 pour les sections)',
      'Ne pas oublier l\'alt text pour les images',
      'Valider votre HTML avec le validateur W3C'
    ]
  },
  {
    week: 2,
    titleHt: 'Ajoute Navigation, Imaj ak Links',
    titleFr: 'Ajouter Navigation, Images et Liens',
    objectiveHt: 'Kontinye ak sit Semèn 1 ou a ak ajoute navigation, imaj pwofil, ak lis entèrè yo.',
    objectiveFr: 'Continuer avec votre site Semaine 1 en ajoutant navigation, image de profil, et listes d\'intérêts.',
    instructionsHt: [
      'Ajoute yon <nav> bar nan tèt paj ou a ak links pou "Akèy", "Sou Mwen", "Pwojè yo", "Kontak"',
      'Kreye yon <section> "Entèrè Mwen yo" ak yon <ul> ki gen omwen 3 entèrè',
      'Ajoute yon <section> ak yon imaj pwofil (itilize placeholder si ou pa gen foto)',
      'Ajoute alt text ki dekri imaj la ak width="200"',
      'Itilize semantic HTML ak <nav>, <section>, <ul>, ak <li> tags',
      'Test navigasyon ak imaj yo nan browser la'
    ],
    instructionsFr: [
      'Ajouter une barre <nav> en haut de page avec liens pour "Accueil", "À Propos", "Projets", "Contact"',
      'Créer une <section> "Mes Intérêts" avec une <ul> contenant au moins 3 intérêts',
      'Ajouter une <section> avec une image de profil (utiliser placeholder si pas de photo)',
      'Ajouter alt text décrivant l\'image et width="200"',
      'Utiliser HTML sémantique avec tags <nav>, <section>, <ul>, et <li>',
      'Tester navigation et images dans le navigateur'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen - Mon ou</title>
</head>
<body>
    <!-- Kòd ou a nan Semèn 1 ap load otomatikman -->
    <!-- Ajoute navigation isit la nan tèt -->
    
    <h1>Mon ou</h1>
    <p>Devlopè Web nan devni</p>
    <hr>
    
    <!-- Ajoute seksyon entèrè yo isit la -->
    
    <!-- Ajoute seksyon imaj pwofil isit la -->
    
</body>
</html>`,
    starterCss: `/* Semèn 2 - Basic Navigation ak Image Styling */

/* Navigation Styling */
nav {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
}

nav a {
    color: #333;
    text-decoration: none;
    margin-right: 0.75rem;
    font-weight: 500;
}

nav a:hover {
    text-decoration: underline;
}

/* Image Styling */
img {
    border-radius: 8px;
    margin-top: 0.5rem;
}

/* List Styling */
ul {
    list-style-type: circle;
    padding-left: 1.5rem;
}`,
    expectedResultHt: 'Sit ou a kounye a dwe gen yon navigation bar ki fonksyone, seksyon entèrè ak lis, ak yon imaj pwofil ak style debaz. Li dwe santi li kòm yon vrè homepage pòtrè.',
    expectedResultFr: 'Votre site doit maintenant avoir une barre de navigation fonctionnelle, section d\'intérêts avec liste, et une image de profil avec style de base. Il doit ressembler à une vraie homepage de portfolio.',
    tipsHt: [
      'Kòmanse ak HTML anvan ou ajoute CSS',
      'Itilize https://via.placeholder.com/200 pou imaj test',
      'Asire alt text ou a dekri imaj la vrèman',
      'Test chak link ak imaj nan browser la',
      'Òganize kòd ou a ak kòmantè'
    ],
    tipsFr: [
      'Commencer avec HTML avant d\'ajouter CSS',
      'Utiliser https://via.placeholder.com/200 pour image test',
      'Assurer que votre alt text décrit vraiment l\'image',
      'Tester chaque lien et image dans le navigateur',
      'Organiser votre code avec des commentaires'
    ]
  },
  {
    week: 3,
    titleHt: 'Premye Stylesheet - CSS Fundamentals',
    titleFr: 'Première Stylesheet - Fondamentaux CSS',
    objectiveHt: 'Transforme sit HTML Semèn 2 ou a ak premye external CSS file ou a ak koulè, typography ak styling pwofesyonèl.',
    objectiveFr: 'Transformer votre site HTML Semaine 2 avec votre premier fichier CSS externe avec couleurs, typographie et styling professionnel.',
    instructionsHt: [
      'Ajoute <link rel="stylesheet" href="style.css"> nan <head> ou a',
      'Style body ak font-family, background-color, ak margin: 0',
      'Kreye yon header ak background foncé ak koulè teks klè',
      'Style navigation ak background gri klè ak hover effects pou links',
      'Ajoute border-radius ak border nan imaj ou a',
      'Style sections ak padding pou bon spacing',
      'Kreye yon footer ki matche ak header la'
    ],
    instructionsFr: [
      'Ajouter <link rel="stylesheet" href="style.css"> dans votre <head>',
      'Styliser body avec font-family, background-color, et margin: 0',
      'Créer un header avec arrière-plan sombre et couleur de texte claire',
      'Styliser navigation avec arrière-plan gris clair et effets hover pour liens',
      'Ajouter border-radius et border à votre image',
      'Styliser sections avec padding pour bon espacement',
      'Créer un footer qui correspond au header'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen</title>
    <!-- Ajoute link tag isit la -->
</head>
<body>
    <!-- Kòd ou a nan Semèn 2 ap load otomatikman -->
    <nav>
        <a href="index.html">Akèy</a> |
        <a href="about.html">Sou Mwen</a> |
        <a href="projects.html">Pwojè yo</a> |
        <a href="contact.html">Kontak</a>
    </nav>
    
    <h1>Mon ou</h1>
    <p>Devlopè Web nan devni</p>
    <hr>
    
    <section>
        <h2>Entèrè Mwen yo</h2>
        <ul>
            <li>Web Design</li>
            <li>Cabinet Building</li>
            <li>Ekriti ak Poezi</li>
        </ul>
    </section>
    
    <section>
        <h2>Foto Mwen</h2>
        <img src="https://via.placeholder.com/200" alt="Foto pwofil mwen" width="200">
    </section>
</body>
</html>`,
    starterCss: `/* Semèn 3 - CSS Fundamentals */

/* Body ak Base Styling */
body {
    background-color: #fafafa;
    color: #222;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
}

/* Typography */
h1, h2, h3 {
    color: #333;
}

/* Navigation Styling */
nav {
    /* Ajoute background, padding, text-align */
}

nav a {
    /* Style links yo */
}

nav a:hover {
    /* Hover effects */
}

/* Section Styling */
section {
    /* Ajoute padding */
}

/* Image Styling */
img {
    /* Ajoute border-radius ak border */
}

/* Footer (opsyonèl) */
footer {
    /* Style ki matche ak design la */
}`,
    expectedResultHt: 'Sit ou a kounye a dwe gen yon aparans pwofesyonèl ak koulè ki konsèy, tipografi ki ka li ak navigation ki fonksyone ak hover effects.',
    expectedResultFr: 'Votre site doit maintenant avoir une apparence professionnelle avec couleurs cohérentes, typographie lisible et navigation fonctionnelle avec effets hover.',
    tipsHt: [
      'Kòmanse ak body styling anvan ou ale nan detay yo',
      'Itilize koulè ki gen bon kontras (#222 sou #fafafa se bon)',
      'Ajoute padding nan sections pou bon spacing',
      'Test hover effects nan browser la',
      'Itilize menm font-family nan tout sit la'
    ],
    tipsFr: [
      'Commencer avec le styling du body avant d\'aller dans les détails',
      'Utiliser des couleurs avec bon contraste (#222 sur #fafafa est bon)',
      'Ajouter padding aux sections pour bon espacement',
      'Tester les effets hover dans le navigateur',
      'Utiliser la même font-family dans tout le site'
    ]
  },
  {
    week: 4,
    titleHt: 'Box Model - Spacing ak Layout',
    titleFr: 'Box Model - Espacement et Layout',
    objectiveHt: 'Aprann ak aplike Box Model pou amelyore spacing ak layout nan sit ou a.',
    objectiveFr: 'Apprendre et appliquer le Box Model pour améliorer l\'espacement et layout de votre site.',
    instructionsHt: [
      'Ajoute padding ak margin nan eleman yo',
      'Kreye border ak border-radius pou eleman yo',
      'Itilize box-sizing: border-box',
      'Kreye card components ak Box Model',
      'Amelyore spacing ant seksyon yo'
    ],
    instructionsFr: [
      'Ajouter padding et margin aux éléments',
      'Créer borders et border-radius pour les éléments',
      'Utiliser box-sizing: border-box',
      'Créer des composants card avec Box Model',
      'Améliorer l\'espacement entre sections'
    ],
    starterHtml: `<!-- Same HTML structure from Week 3, but now we'll add card styling -->`,
    starterCss: `/* Week 4 - Box Model ak Cards */

/* Reset ak Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Previous week's styles here */

/* Card Components */


/* Spacing ak Layout */


/* Section Styling */
`,
    expectedResultHt: 'Sit ou a dwe gen yon layout ki klè ak cards ak sections ki gen spacing ki bon. Eleman yo dwe gen padding ak margin ki apwopriye.',
    expectedResultFr: 'Votre site doit avoir un layout clair avec des cards et sections bien espacées. Les éléments doivent avoir padding et margin appropriés.',
    tipsHt: [
      'Itilize margin pou spacing ant eleman yo',
      'Itilize padding pou spacing nan eleman yo',
      'Kreye cards ak background, padding, ak border-radius',
      'Test ak width ak height diferan'
    ],
    tipsFr: [
      'Utiliser margin pour l\'espacement entre éléments',
      'Utiliser padding pour l\'espacement dans les éléments',
      'Créer des cards avec background, padding et border-radius',
      'Tester avec différentes largeurs et hauteurs'
    ]
  },
  {
    week: 5,
    titleHt: 'Google Fonts ak Typography Avanse',
    titleFr: 'Google Fonts et Typographie Avancée',
    objectiveHt: 'Ajoute Google Fonts ak amelyore typography nan sit ou a.',
    objectiveFr: 'Ajouter Google Fonts et améliorer la typographie de votre site.',
    instructionsHt: [
      'Chwazi ak enpòte 2 Google Fonts (yon pou headings, yon pou body text)',
      'Aplike line-height ak letter-spacing',
      'Kreye yon sistèm tipografi konsèy',
      'Ajoute emphasis ak strong text styling',
      'Optimize pou kapasite ak aksèsibilite'
    ],
    instructionsFr: [
      'Choisir et importer 2 Google Fonts (une pour titres, une pour texte)',
      'Appliquer line-height et letter-spacing',
      'Créer un système typographique cohérent',
      'Ajouter emphasis et strong text styling',
      'Optimiser pour performance et accessibilité'
    ],
    starterHtml: `<!-- Add Google Fonts link in head -->`,
    starterCss: `/* Week 5 - Google Fonts ak Typography */

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Open+Sans:wght@400;600&display=swap');

/* Typography System */
`,
    expectedResultHt: 'Sit ou a dwe gen yon sistèm tipografi pwofesyonèl ak Google Fonts ak spacing ki bon.',
    expectedResultFr: 'Votre site doit avoir un système typographique professionnel avec Google Fonts et bon espacement.',
    tipsHt: [
      'Limite ou a 2-3 font families sèlman',
      'Itilize font-display: swap pou pèfòmans',
      'Test ak teksè diferan ak gwosè yo',
      'Asire line-height yo ki bon pou lizibilite'
    ],
    tipsFr: [
      'Limiter à seulement 2-3 familles de polices',
      'Utiliser font-display: swap pour performance',
      'Tester avec différents textes et tailles',
      'Assurer de bons line-heights pour la lisibilité'
    ]
  },
  {
    week: 6,
    titleHt: 'Flexbox - Navigation ak Layout Responsive',
    titleFr: 'Flexbox - Navigation et Layout Responsive',
    objectiveHt: 'Itilize Flexbox pou kreye yon navigation responsive ak amelyore layout jeneral la.',
    objectiveFr: 'Utiliser Flexbox pour créer une navigation responsive et améliorer le layout général.',
    instructionsHt: [
      'Konvèti navigation an nan yon flexbox layout',
      'Kreye yon hero section ak Flexbox',
      'Ajoute responsive behavior ak flex properties',
      'Kreye feature cards ak Flexbox',
      'Aplike justify-content ak align-items'
    ],
    instructionsFr: [
      'Convertir la navigation en layout flexbox',
      'Créer une section hero avec Flexbox',
      'Ajouter un comportement responsive avec propriétés flex',
      'Créer des cards de fonctionnalités avec Flexbox',
      'Appliquer justify-content et align-items'
    ],
    starterHtml: `<!-- Enhanced HTML with hero section and feature cards -->`,
    starterCss: `/* Week 6 - Flexbox Layout */

/* Navigation Flexbox */


/* Hero Section */


/* Feature Cards */


/* Responsive Flexbox */
`,
    expectedResultHt: 'Sit ou a dwe gen yon navigation horizontal ak yon hero section ak feature cards ki aligned kòrèkteman.',
    expectedResultFr: 'Votre site doit avoir une navigation horizontale et une section hero avec des cards bien alignées.',
    tipsHt: [
      'Kòmanse ak display: flex sou container yo',
      'Itilize flex-direction pou chanje orientation',
      'Aplike gap pou spacing ant eleman yo',
      'Test responsive behavior ak screen gwosè diferan'
    ],
    tipsFr: [
      'Commencer avec display: flex sur les containers',
      'Utiliser flex-direction pour changer l\'orientation',
      'Appliquer gap pour l\'espacement entre éléments',
      'Tester le comportement responsive avec différentes tailles'
    ]
  },
  {
    week: 7,
    titleHt: 'Design Responsive - Mobile First',
    titleFr: 'Design Responsive - Mobile First',
    objectiveHt: 'Rann sit ou a responsive ak mobile-first approach ak media queries.',
    objectiveFr: 'Rendre votre site responsive avec approche mobile-first et media queries.',
    instructionsHt: [
      'Aplike mobile-first CSS',
      'Kreye media queries pou tablet ak desktop',
      'Rann imaj yo responsive ak max-width: 100%',
      'Ajiste navigation pou mobile devices',
      'Test ak diferan gwosè ekran'
    ],
    instructionsFr: [
      'Appliquer CSS mobile-first',
      'Créer media queries pour tablette et desktop',
      'Rendre les images responsive avec max-width: 100%',
      'Ajuster la navigation pour appareils mobiles',
      'Tester avec différentes tailles d\'écran'
    ],
    starterHtml: `<!-- Add viewport meta tag if not already present -->`,
    starterCss: `/* Week 7 - Responsive Design */

/* Mobile First Base Styles */


/* Tablet Styles */
@media (min-width: 768px) {
    
}

/* Desktop Styles */
@media (min-width: 1024px) {
    
}
`,
    expectedResultHt: 'Sit ou a dwe fonksyone byen sou tout aparèy yo: mobile, tablet, ak desktop.',
    expectedResultFr: 'Votre site doit fonctionner bien sur tous appareils: mobile, tablette et desktop.',
    tipsHt: [
      'Kòmanse ak design mobile lè w ap ekri CSS',
      'Test ak Chrome DevTools ak gwosè ekran diferan',
      'Itilize rem/em olye de px pou flexibility',
      'Pa bliye viewport meta tag la'
    ],
    tipsFr: [
      'Commencer avec design mobile lors de l\'écriture CSS',
      'Tester avec Chrome DevTools et différentes tailles',
      'Utiliser rem/em plutôt que px pour flexibilité',
      'Ne pas oublier le viewport meta tag'
    ]
  },
  {
    week: 8,
    titleHt: 'Pwojè Midterm - Landing Page Konplè',
    titleFr: 'Projet Midterm - Landing Page Complète',
    objectiveHt: 'Konsolide tout sa w aprann yo ak kreye yon landing page pwofesyonèl.',
    objectiveFr: 'Consolider tout ce que vous avez appris en créant une landing page professionnelle.',
    instructionsHt: [
      'Revize ak amelyore HTML semantik',
      'Polish CSS ak asire konsèy nan design',
      'Ajoute hero section ak call-to-action',
      'Kreye about, skills, ak contact sections',
      'Test ak validate sit konplè a'
    ],
    instructionsFr: [
      'Réviser et améliorer le HTML sémantique',
      'Polir le CSS et assurer cohérence du design',
      'Ajouter section hero avec call-to-action',
      'Créer sections about, skills et contact',
      'Tester et valider le site complet'
    ],
    starterHtml: `<!-- Complete landing page structure -->`,
    starterCss: `/* Week 8 - Midterm Project Polish */

/* Complete responsive portfolio landing page */
`,
    expectedResultHt: 'Yon landing page konplè ak pwofesyonèl ki gen semantik HTML ak responsive CSS.',
    expectedResultFr: 'Une landing page complète et professionnelle avec HTML sémantique et CSS responsive.',
    tipsHt: [
      'Revize tout kòd la pou optimizasyon',
      'Test aksèsibilite ak screen readers',
      'Validate HTML ak CSS ak tools yo',
      'Mande feedback ak amelyore'
    ],
    tipsFr: [
      'Réviser tout le code pour optimisation',
      'Tester accessibilité avec lecteurs d\'écran',
      'Valider HTML et CSS avec outils',
      'Demander feedback et améliorer'
    ]
  },
  {
    week: 9,
    titleHt: 'CSS Grid Layout - Page Structure Avanse',
    titleFr: 'Layout CSS Grid - Structure de Page Avancée',
    objectiveHt: 'Konvèti layout midterm ou an ak CSS Grid pou yon sistèm 2D ki pi pwisan ak rows ak columns ansanm.',
    objectiveFr: 'Convertir votre layout midterm avec CSS Grid pour un système 2D plus puissant avec lignes et colonnes ensemble.',
    instructionsHt: [
      'Remplace layout Flexbox global la ak CSS Grid',
      'Ajoute grid-template-areas pou header, nav, main, aside, footer',
      'Defini grid-template-columns ak proportions kòrèk (1fr 2fr 1fr)',
      'Kenbe Flexbox pou components yo (nav links, project cards)',
      'Implementé responsive grid ak media queries',
      'Test layout nan mobile ak desktop modes',
      'Ajoute gap konsèy ant grid areas yo',
      'Polish visual hierarchy ak grid placement'
    ],
    instructionsFr: [
      'Remplacer layout Flexbox global par CSS Grid',
      'Ajouter grid-template-areas pour header, nav, main, aside, footer',
      'Définir grid-template-columns avec proportions correctes (1fr 2fr 1fr)',
      'Garder Flexbox pour composants (nav links, project cards)',
      'Implémenter grid responsive avec media queries',
      'Tester layout en modes mobile et desktop',
      'Ajouter gap cohérent entre areas grid',
      'Polir hiérarchie visuelle avec placement grid'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My World in One Page - CSS Grid Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
</head>
<body>
  <div class="grid-layout">
    <header>
      <h1>My World in One Page</h1>
    </header>

    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm continuing my web design journey. This project shows my progression with CSS Grid.</p>
        <img src="images/profile.jpg" alt="My photo" width="200">
      </section>

      <section id="projects" class="projects">
        <h2>My Projects</h2>
        <div class="project-grid">
          <div class="card">
            <h3>Grid Portfolio</h3>
            <p>A responsive portfolio using CSS Grid layout system.</p>
          </div>
          <div class="card">
            <h3>Flexbox Cards</h3>
            <p>Interactive cards demonstrating Flexbox properties.</p>
          </div>
          <div class="card">
            <h3>Responsive Design</h3>
            <p>Mobile-first approach with media queries.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach me at <a href="mailto:hello@example.com">hello@example.com</a>.</p>
      </section>
    </main>

    <aside>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">My Blog</a></li>
      </ul>
    </aside>

    <footer>
      <p>© 2025 My Portfolio | Built with CSS Grid ❤️</p>
    </footer>
  </div>
</body>
</html>`,
    starterCss: `/* Week 9 - CSS Grid Layout */
* { box-sizing: border-box; }

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 1rem;
  background: #fafafa;
  color: #222;
}

.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

header {
  grid-area: header;
  background: #111;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
}

nav {
  grid-area: nav;
  background: #222;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: start;
}

nav a {
  color: #ffd43b;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

nav a:hover {
  background-color: rgba(255, 212, 59, 0.1);
  color: #fff;
}

main {
  grid-area: main;
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

aside {
  grid-area: aside;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  align-self: start;
}

aside ul {
  list-style: none;
  padding: 0;
}

aside li {
  margin: 0.5rem 0;
}

aside a {
  color: #333;
  text-decoration: none;
}

aside a:hover {
  color: #ffd43b;
}

footer {
  grid-area: footer;
  background: #111;
  color: #ccc;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
}

/* Project Cards using Flexbox within Grid */
.projects {
  margin: 2rem 0;
  text-align: center;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  flex: 1 1 280px;
  max-width: 320px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

/* Responsive Grid Layout */
@media (max-width: 1024px) {
  .grid-layout {
    grid-template-areas:
      "header header"
      "nav main"
      "aside aside"
      "footer footer";
    grid-template-columns: 1fr 2fr;
  }
}

@media (max-width: 768px) {
  body {
    padding: 0.5rem;
  }
  
  .grid-layout {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  nav {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  main {
    padding: 1.5rem;
  }
  
  .project-grid {
    flex-direction: column;
    align-items: center;
  }
}`,
    expectedResultHt: 'Yon layout grid pwofesyonèl ak 2D ki gen header, nav, main content, sidebar ak footer ki responsive ak smooth.',
    expectedResultFr: 'Un layout grid professionnel 2D avec header, nav, contenu principal, sidebar et footer responsive et fluide.',
    tipsHt: [
      'Itilize grid-template-areas pou visualize layout la',
      'Kenbe Flexbox pou components yo nan grid items yo',
      'Test responsive behavior nan browser DevTools',
      'Ajoute gap konsèy pou spacing pwofesyonèl'
    ],
    tipsFr: [
      'Utiliser grid-template-areas pour visualiser le layout',
      'Garder Flexbox pour composants dans grid items',
      'Tester comportement responsive dans browser DevTools',
      'Ajouter gap cohérent pour espacement professionnel'
    ]
  },
  {
    week: 10,
    titleHt: 'CSS Transitions ak Animations - Dynamic Portfolio',
    titleFr: 'CSS Transitions et Animations - Portfolio Dynamique',
    objectiveHt: 'Ajoute motion ak animasyon nan portfolio ou an ak CSS transitions ak @keyframes pou kreye ekspèryans dinamik ak pwofesyonèl.',
    objectiveFr: 'Ajouter du mouvement et des animations à votre portfolio avec CSS transitions et @keyframes pour créer une expérience dynamique et professionnelle.',
    instructionsHt: [
      'Ajoute fade-in animation pou header la ak @keyframes slideDown',
      'Kreye smooth hover effects sou cards yo ak translateY ak scale',
      'Implemente button hover animations ak background ak transform changes',
      'Ajoute transition properties sou navigation links yo',
      'Kreye subtle pulse animation pou footer la ak opacity changes',
      'Optimize transitions pou performance ak transform ak opacity sèlman',
      'Test animations sou mobile ak desktop pou smooth experience',
      'Ensure timing functions yo realistic ak ease ak ease-in-out'
    ],
    instructionsFr: [
      'Ajouter animation fade-in pour header avec @keyframes slideDown',
      'Créer effets hover fluides sur cartes avec translateY et scale',
      'Implémenter animations hover boutons avec changements background et transform',
      'Ajouter propriétés transition sur liens navigation',
      'Créer animation pulse subtile pour footer avec changements opacity',
      'Optimiser transitions pour performance avec transform et opacity seulement',
      'Tester animations sur mobile et desktop pour expérience fluide',
      'Assurer timing functions réalistes avec ease et ease-in-out'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Mwen - Ak Animations</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Animated Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Portfolio Mwen</div>
                <nav class="nav-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    </header>
    
    <!-- Hero Section ak Animated Elements -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Byenveni nan Portfolio Mwen</h1>
                <p class="hero-text">Mwen se yon développeur web ki gen pasyon pou kreye ekspèryans dijital yo ki gen sans ak ki bèl ak animations.</p>
                <div class="cta-buttons">
                    <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
                    <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Main Content ak Animated Sections -->
    <main class="main-content">
        <div class="container">
            <!-- About Section -->
            <section id="about" class="about-section">
                <h2>Sou Mwen</h2>
                <div class="about-content">
                    <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-photo">
                    <div class="about-text">
                        <p>Bonjou! Mwen se yon développeur ki gen pasyon pou motion design ak web animations. Mwen kwè nan pouvwa transitions yo pou kreye ekspèryans ki aksèsib ak entèrèsan.</p>
                        <p>Nan travay mwen an, mwen kombiné CSS animations ak modern web technologies pou bay itilizatè yo ekspèryans ki smooth ak satisfying.</p>
                        <p>Kounye a mwen ap konsantre sou performant animations ak micro-interactions ki amelyore UX yo san distracshyon.</p>
                    </div>
                </div>
            </section>
            
            <!-- Animated Projects Grid -->
            <section id="featured-work" class="work-section">
                <h2>Travay ki Gen Motion</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Animated Portfolio" />
                        </div>
                        <div class="project-content">
                            <h3>Animated Portfolio</h3>
                            <p>Portfolio ak smooth transitions, hover effects ak micro-animations ki enhance user experience san distraction.</p>
                            <div class="project-tech">CSS Animations • Transitions • Keyframes</div>
                            <a href="#" class="project-link">Gade Animations</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project2.jpg" alt="Interactive Dashboard" />
                        </div>
                        <div class="project-content">
                            <h3>Interactive Dashboard</h3>
                            <p>Dashboard ak loading animations, hover states ak smooth transitions ki rann data visualization pi engaging.</p>
                            <div class="project-tech">CSS Transform • Opacity • Performance</div>
                            <a href="#" class="project-link">Gade Dashboard</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project3.jpg" alt="Motion Design Study" />
                        </div>
                        <div class="project-content">
                            <h3>Motion Design Study</h3>
                            <p>Exploration nan CSS animations ak @keyframes pou kreye engaging micro-interactions ak motion principles.</p>
                            <div class="project-tech">Keyframes • Easing • Timing Functions</div>
                            <a href="#" class="project-link">Gade Motion</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project4.jpg" alt="Responsive Animations" />
                        </div>
                        <div class="project-content">
                            <h3>Responsive Animations</h3>
                            <p>Mobile-first approach ak animations ki adaptive selon device capabilities ak user preferences.</p>
                            <div class="project-tech">Responsive Motion • Reduced Motion • Accessibility</div>
                            <a href="#" class="project-link">Gade Responsive</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    
    <!-- Animated Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Portfolio Mwen</h3>
                    <p>Web developer ki spesyalize nan performant animations ak smooth user experiences.</p>
                </div>
                <div class="footer-links">
                    <a href="#" class="social-link">GitHub</a>
                    <a href="#" class="social-link">LinkedIn</a>
                    <a href="#" class="social-link">Twitter</a>
                    <a href="#" class="social-link">Email</a>
                </div>
                <div class="footer-copy">
                    <p>&copy; 2024 Portfolio Mwen. Animated ak CSS Motion.</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    starterCss: `/* Semèn 10 - CSS Transitions ak Animations */

/* Global Styles ak Base Transitions */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    background-color: #fdfdfd;
    line-height: 1.6;
    font-size: 16px;
}

/* Container */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Typography ak Animations */
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
}

/* ===== ANIMATED HEADER ===== */
.header {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
    /* Fade-in animation on page load */
    animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
    from { 
        transform: translateY(-100%); 
        opacity: 0; 
    }
    to { 
        transform: translateY(0); 
        opacity: 1; 
    }
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    transition: color 0.3s ease;
}

.logo:hover {
    color: #007bff;
}

/* ===== ANIMATED NAVIGATION ===== */
.nav-menu {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.nav-menu a {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.nav-menu a:hover {
    background: #f0f0f0;
    color: #333;
    transform: translateY(-1px);
    border-color: #007bff;
}

/* ===== ANIMATED HERO SECTION ===== */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 4rem 0;
}

.hero-content {
    max-width: 700px;
    animation: fadeInUp 1.2s ease-out 0.3s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero h1 {
    color: white;
    margin-bottom: 1rem;
    font-size: 3.2rem;
}

.hero-text {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #f0f0f0;
}

/* ===== ANIMATED CTA BUTTONS ===== */
.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
    display: inline-block;
}

.btn-primary {
    background: #ffd43b;
    color: #333;
    border-color: #ffd43b;
}

.btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

.btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.btn-primary:hover {
    background: #ffcd1f;
    border-color: #ffcd1f;
}

.btn-secondary:hover {
    background: rgba(255,255,255,0.1);
}

/* ===== ANIMATED MAIN CONTENT ===== */
.main-content {
    padding: 4rem 0;
}

/* About Section ak Animations */
.about-section {
    margin-bottom: 4rem;
}

.about-section h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
}

.about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
}

.profile-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 4px solid #007bff;
    object-fit: cover;
    flex-shrink: 0;
    transition: all 0.4s ease;
}

.profile-photo:hover {
    transform: scale(1.05);
    border-color: #ffd43b;
    box-shadow: 0 8px 25px rgba(0,123,255,0.3);
}

.about-text {
    flex: 1;
    min-width: 300px;
}

/* ===== ANIMATED PROJECT CARDS ===== */
.work-section {
    background: #f8f9fa;
    padding: 4rem 2rem;
    margin: 2rem -1rem 0;
}

.work-section h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
}

.project-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    border-color: #007bff;
}

/* Animated Project Images */
.project-image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: #333;
    transition: color 0.3s ease;
}

.project-card:hover .project-content h3 {
    color: #007bff;
}

.project-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
}

.project-tech {
    font-size: 0.8rem;
    color: #007bff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}

.project-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
}

.project-link:hover {
    color: #0056b3;
    border-bottom-color: #0056b3;
}

/* ===== ANIMATED FOOTER ===== */
.footer {
    background: #222;
    color: white;
    padding: 3rem 0;
    margin-top: 3rem;
    /* Subtle pulse animation */
    animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 1; }
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-info h3 {
    color: #ffd43b;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.footer-info:hover h3 {
    color: white;
}

.footer-info p {
    color: #ccc;
    font-size: 0.9rem;
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.social-link {
    color: #ccc;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 1px solid #444;
}

.social-link:hover {
    background: #333;
    color: #ffd43b;
    border-color: #ffd43b;
    transform: translateY(-2px);
}

.footer-copy p {
    font-size: 0.8rem;
    color: #999;
    margin: 0;
    text-align: center;
    width: 100%;
}

/* ===== RESPONSIVE ANIMATIONS ===== */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .header-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .nav-menu {
        justify-content: center;
        gap: 1rem;
    }
    
    .nav-menu a {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
    }
    
    .hero {
        min-height: 70vh;
        padding: 3rem 0;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero-text {
        font-size: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .about-content {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    
    .profile-photo {
        width: 200px;
        height: 200px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .project-card:hover {
        transform: translateY(-5px) scale(1.02);
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }
    
    .footer-links {
        justify-content: center;
        gap: 1rem;
    }
}

/* ===== ACCESSIBILITY & PERFORMANCE ===== */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    
    .header {
        animation: none;
    }
    
    .hero-content {
        animation: none;
        opacity: 1;
        transform: none;
    }
    
    .footer {
        animation: none;
    }
}`,
    expectedResultHt: 'Yon portfolio ki gen life ak smooth animations, hover effects ak motion ki enhance user experience san distraction ak pi bon performance.',
    expectedResultFr: 'Un portfolio vivant avec animations fluides, effets de survol et mouvement qui améliorent l\'expérience utilisateur sans distraction et avec bonnes performances.',
    tipsHt: [
      'Itilize transform ak opacity sèlman pou pi bon performance',
      'Test animations sou mobile ak desktop pou smooth experience',
      'Respekte prefers-reduced-motion pou accessibility',
      'Keep timing realistic ak ease functions yo'
    ],
    tipsFr: [
      'Utiliser transform et opacity seulement pour meilleures performances',
      'Tester animations sur mobile et desktop pour expérience fluide',
      'Respecter prefers-reduced-motion pour accessibilité',
      'Garder timing réaliste avec fonctions ease'
    ]
  },
  {
    week: 11,
    titleHt: 'Pseudo-Classes ak Pseudo-Elements - Interactive Details',
    titleFr: 'Pseudo-Classes et Pseudo-Éléments - Détails Interactifs',
    objectiveHt: 'Ajoute interactive states ak decorative details nan portfolio ou an ak pseudo-classes ak pseudo-elements pou kreye ekspèryans pi rich ak pwofesyonèl.',
    objectiveFr: 'Ajouter états interactifs et détails décoratifs à votre portfolio avec pseudo-classes et pseudo-éléments pour créer une expérience plus riche et professionnelle.',
    instructionsHt: [
      'Ajoute hover effects sou navigation links yo ak custom focus styles',
      'Itilize :first-child pou highlight premye project card la',
      'Aplikasyon :nth-child() pou alternating background colors',
      'Kreye decorative icons ak ::before sou section headers yo',
      'Implemente custom ::selection colors pou brand consistency',
      'Ajoute ::after dividers ak automatic footer attribution',
      'Ensure accessibility ak proper focus management',
      'Test interactions ak keyboard navigation'
    ],
    instructionsFr: [
      'Ajouter effets hover sur liens navigation avec styles focus personnalisés',
      'Utiliser :first-child pour mettre en évidence première carte projet',
      'Appliquer :nth-child() pour couleurs arrière-plan alternées',
      'Créer icônes décoratives avec ::before sur en-têtes sections',
      'Implémenter couleurs ::selection personnalisées pour cohérence marque',
      'Ajouter séparateurs ::after et attribution footer automatique',
      'Assurer accessibilité avec gestion focus appropriée',
      'Tester interactions avec navigation clavier'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Mwen - Interactive Details</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Animated Header ak Interactive Navigation -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Portfolio Mwen</div>
                <nav class="nav-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Byenveni nan Portfolio Mwen</h1>
                <p class="hero-text">Mwen se yon développeur web ki gen pasyon pou kreye ekspèryans dijital yo ki interaktif ak aksèsib ak details sofiné.</p>
                <div class="cta-buttons">
                    <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
                    <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Main Content ak Interactive Sections -->
    <main class="main-content">
        <div class="container">
            <!-- About Section ak Decorative Headers -->
            <section id="about" class="about-section">
                <h2>Sou Mwen</h2>
                <div class="about-content">
                    <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-photo">
                    <div class="about-text">
                        <p>Bonjou! Mwen se yon développeur ki gen pasyon pou CSS pseudo-selectors ak interactive design. Mwen kwè nan pouvwa yo nan kreye ekspèryans ki aksèsib ak rich san yo pa bezwen JavaScript.</p>
                        <p>Nan travay mwen an, mwen konsantre sou semantic HTML ak CSS avanse pou bay itilizatè yo ekspèryans ki smooth ak intuitive ak details ki refined.</p>
                        <p>Kounye a mwen ap travay sou user interactions ak accessibility, ensure tout moun ka navige ak konprann kontni an.</p>
                    </div>
                </div>
            </section>
            
            <!-- Projects Section ak Smart Selectors -->
            <section id="featured-work" class="work-section">
                <h2>Travay ki Gen Interactive Details</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Interactive Portfolio" />
                        </div>
                        <div class="project-content">
                            <h3>Interactive Portfolio</h3>
                            <p>Portfolio ak smart hover states, focus management ak pseudo-elements pou enhance user experience ak accessibility.</p>
                            <div class="project-tech">Pseudo-Classes • Pseudo-Elements • Accessibility</div>
                            <a href="#" class="project-link">Gade Interactions</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project2.jpg" alt="Smart Selectors Demo" />
                        </div>
                        <div class="project-content">
                            <h3>Smart Selectors Demo</h3>
                            <p>Showcase nan CSS pseudo-selectors ak :nth-child patterns, custom focus states ak decorative pseudo-elements.</p>
                            <div class="project-tech">:nth-child • ::before/::after • :focus-visible</div>
                            <a href="#" class="project-link">Gade Selectors</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project3.jpg" alt="Accessibility Focus" />
                        </div>
                        <div class="project-content">
                            <h3>Accessibility Focus</h3>
                            <p>Web application ak proper focus management, screen reader support ak keyboard navigation ak visual indicators.</p>
                            <div class="project-tech">ARIA • Focus States • Screen Reader Support</div>
                            <a href="#" class="project-link">Gade Accessibility</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project4.jpg" alt="CSS Details Study" />
                        </div>
                        <div class="project-content">
                            <h3>CSS Details Study</h3>
                            <p>Exploration nan subtle design enhancements ak pseudo-elements, custom selection states ak micro-interactions.</p>
                            <div class="project-tech">Custom Selection • Decorative Elements • Micro-interactions</div>
                            <a href="#" class="project-link">Gade Details</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Skills Section ak Custom Lists -->
            <section id="skills" class="skills-section">
                <h2>Kompetans yo</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend Development</h3>
                        <ul class="skill-list">
                            <li>HTML5 Semantic</li>
                            <li>CSS3 Advanced</li>
                            <li>Responsive Design</li>
                            <li>Web Accessibility</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>CSS Specialization</h3>
                        <ul class="skill-list">
                            <li>Grid & Flexbox</li>
                            <li>Animations & Transitions</li>
                            <li>Pseudo-Classes & Elements</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
    
    <!-- Interactive Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Portfolio Mwen</h3>
                    <p>Web developer ki spesyalize nan CSS pseudo-selectors ak interactive user experiences.</p>
                </div>
                <div class="footer-links">
                    <a href="#" class="social-link">GitHub</a>
                    <a href="#" class="social-link">LinkedIn</a>
                    <a href="#" class="social-link">Twitter</a>
                    <a href="#" class="social-link">Email</a>
                </div>
                <div class="footer-copy">
                    <p>&copy; 2024 Portfolio Mwen</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    starterCss: `/* Semèn 11 - Pseudo-Classes ak Pseudo-Elements */

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    background-color: #fdfdfd;
    line-height: 1.6;
    font-size: 16px;
}

/* Custom Text Selection */
::selection {
    background-color: #ffd43b;
    color: #111;
    text-shadow: none;
}

/* Container */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Typography ak Decorative Headers */
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
}

/* Decorative Icons ak Dividers */
h2::before {
    content: "▹ ";
    color: #ffd43b;
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: 1.2em;
}

h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #ffd43b, #007bff);
    margin: 0.5rem 0 1.5rem 0;
    border-radius: 2px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
}

/* ===== INTERACTIVE HEADER ===== */
.header {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
    animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
    from { 
        transform: translateY(-100%); 
        opacity: 0; 
    }
    to { 
        transform: translateY(0); 
        opacity: 1; 
    }
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    transition: color 0.3s ease;
}

.logo:hover {
    color: #007bff;
}

/* ===== INTERACTIVE NAVIGATION ===== */
.nav-menu {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.nav-menu a {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    position: relative;
}

/* Hover Effects */
.nav-menu a:hover {
    background: #f0f0f0;
    color: #333;
    transform: translateY(-1px);
    border-color: #007bff;
}

/* Custom Focus States */
.nav-menu a:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Animated Underline Effect */
.nav-menu a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ffd43b;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-menu a:hover::after {
    width: 80%;
}

/* ===== HERO SECTION ===== */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 4rem 0;
}

.hero-content {
    max-width: 700px;
    animation: fadeInUp 1.2s ease-out 0.3s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero h1 {
    color: white;
    margin-bottom: 1rem;
    font-size: 3.2rem;
}

.hero-text {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #f0f0f0;
}

/* ===== INTERACTIVE CTA BUTTONS ===== */
.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
    display: inline-block;
    position: relative;
}

.btn-primary {
    background: #ffd43b;
    color: #333;
    border-color: #ffd43b;
}

.btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

.btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.btn:focus {
    outline: 2px solid white;
    outline-offset: 3px;
}

.btn-primary:hover {
    background: #ffcd1f;
    border-color: #ffcd1f;
}

.btn-secondary:hover {
    background: rgba(255,255,255,0.1);
}

/* ===== MAIN CONTENT ===== */
.main-content {
    padding: 4rem 0;
}

/* About Section */
.about-section {
    margin-bottom: 4rem;
}

.about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
}

.profile-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 4px solid #007bff;
    object-fit: cover;
    flex-shrink: 0;
    transition: all 0.4s ease;
}

.profile-photo:hover {
    transform: scale(1.05);
    border-color: #ffd43b;
    box-shadow: 0 8px 25px rgba(0,123,255,0.3);
}

.about-text {
    flex: 1;
    min-width: 300px;
}

/* ===== SMART PROJECT CARDS ===== */
.work-section {
    background: #f8f9fa;
    padding: 4rem 2rem;
    margin: 2rem -1rem 0;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
    position: relative;
}

/* First Child Highlight */
.project-card:first-child {
    border: 2px solid #ffd43b;
    background: #fff9e6;
}

.project-card:first-child::before {
    content: "★ Featured";
    position: absolute;
    top: -1px;
    right: 15px;
    background: #ffd43b;
    color: #111;
    padding: 0.25rem 0.75rem;
    border-radius: 0 0 8px 8px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 10;
}

/* Alternating Colors */
.project-card:nth-child(even) {
    background: #f8f9fa;
}

.project-card:nth-child(odd):not(:first-child) {
    background: white;
}

.project-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    border-color: #007bff;
}

.project-image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: #333;
    transition: color 0.3s ease;
}

.project-card:hover .project-content h3 {
    color: #007bff;
}

.project-tech {
    font-size: 0.8rem;
    color: #007bff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}

.project-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    position: relative;
}

.project-link:hover {
    color: #0056b3;
    border-bottom-color: #0056b3;
}

.project-link:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    border-radius: 3px;
}

/* ===== SKILLS SECTION ===== */
.skills-section {
    margin: 4rem 0;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-category {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.skill-category:hover {
    transform: translateY(-5px);
}

.skill-category h3::before {
    content: "🎯 ";
    margin-right: 0.5rem;
}

/* Custom List Styling */
.skill-list {
    list-style: none;
    margin-top: 1rem;
}

.skill-list li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    transition: all 0.3s ease;
}

.skill-list li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: #007bff;
    font-weight: bold;
    transition: all 0.3s ease;
}

.skill-list li:hover {
    color: #007bff;
    transform: translateX(5px);
}

.skill-list li:hover::before {
    color: #ffd43b;
    transform: scale(1.2);
}

/* ===== INTERACTIVE FOOTER ===== */
.footer {
    background: #222;
    color: white;
    padding: 3rem 0;
    margin-top: 3rem;
    animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 1; }
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-info h3 {
    color: #ffd43b;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.footer-info:hover h3 {
    color: white;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.social-link {
    color: #ccc;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 1px solid #444;
    position: relative;
}

.social-link:hover {
    background: #333;
    color: #ffd43b;
    border-color: #ffd43b;
    transform: translateY(-2px);
}

.social-link:focus {
    outline: 2px solid #ffd43b;
    outline-offset: 2px;
}

/* Auto-generated Attribution */
.footer-copy p::after {
    content: " • Made with CSS Pseudo-Elements ❤️";
    font-size: 0.8rem;
    color: #999;
    font-style: italic;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .header-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .nav-menu {
        justify-content: center;
        gap: 0.5rem;
    }
    
    .nav-menu a {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
    }
    
    .hero {
        min-height: 70vh;
        padding: 3rem 0;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero-text {
        font-size: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .about-content {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    
    .profile-photo {
        width: 200px;
        height: 200px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .project-card:hover {
        transform: translateY(-5px) scale(1.02);
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }
    
    .footer-links {
        justify-content: center;
        gap: 1rem;
    }
}`,
    expectedResultHt: 'Yon portfolio ak rich interactive states, decorative details ak aksèsib navigation ki enhance user experience ak professional polish.',
    expectedResultFr: 'Un portfolio avec états interactifs riches, détails décoratifs et navigation accessible qui améliore expérience utilisateur avec finition professionnelle.',
    tipsHt: [
      'Test navigation ak keyboard pou ensure accessibility',
      'Use pseudo-selectors intelligently - pa abuse',
      'Combine hover ak focus states pou best experience',
      'Keep decorative elements subtle ak meaningful'
    ],
    tipsFr: [
      'Tester navigation avec clavier pour assurer accessibilité',
      'Utiliser pseudo-sélecteurs intelligemment - ne pas abuser',
      'Combiner états hover et focus pour meilleure expérience',
      'Garder éléments décoratifs subtils et significatifs'
    ]
  },
  {
    week: 12,
    titleHt: 'CSS Positioning ak Z-Index - Layered Portfolio Design',
    titleFr: 'CSS Positioning et Z-Index - Design Portfolio Superposé',
    objectiveHt: 'Master CSS positioning ak z-index pou kreye modern layered design ak sticky navigation, hero overlays ak positioned elements nan portfolio ou an.',
    objectiveFr: 'Maîtriser positionnement CSS et z-index pour créer design moderne superposé avec navigation collante, overlays hero et éléments positionnés dans votre portfolio.',
    instructionsHt: [
      'Kreye sticky header ak navigation ki rete visible lè scroll',
      'Implemente hero section ak background image ak centered overlay text',
      'Ajoute floating call-to-action button ak position: fixed',
      'Use relative positioning pou creative card layouts',
      'Manage z-index values ak proper stacking order',
      'Ensure responsive behavior sou mobile ak desktop',
      'Test accessibility ak keyboard navigation',
      'Optimize performance ak positioned elements'
    ],
    instructionsFr: [
      'Créer header collant avec navigation qui reste visible au scroll',
      'Implémenter section hero avec image arrière-plan et texte overlay centré',
      'Ajouter bouton call-to-action flottant avec position: fixed',
      'Utiliser positionnement relatif pour layouts cartes créatifs',
      'Gérer valeurs z-index avec ordre empilement approprié',
      'Assurer comportement responsive sur mobile et desktop',
      'Tester accessibilité avec navigation clavier',
      'Optimiser performance avec éléments positionnés'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Mwen - Layered Design</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Sticky Header ak Navigation -->
    <header class="sticky-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Portfolio Mwen</div>
                <nav class="main-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button class="menu-toggle">☰</button>
            </div>
        </div>
    </header>
    
    <!-- Hero Section ak Layered Content -->
    <section id="home" class="hero-section">
        <div class="hero-background">
            <img src="hero-bg.jpg" alt="Background Hero" class="hero-image">
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1>Design Beyond Static</h1>
            <p class="hero-subtitle">Master nan CSS positioning ak layered layouts pou kreye modern web experiences ki rich ak interactive.</p>
            <div class="hero-buttons">
                <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
                <a href="#contact" class="btn btn-outline">Kontak Mwen</a>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="scroll-arrow">↓</div>
        </div>
    </section>
    
    <!-- About Section ak Positioned Elements -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="section-header">
                <h2>Sou Mwen</h2>
                <div class="section-badge">Designer</div>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <div class="about-card main-card">
                        <h3>Frontend Developer</h3>
                        <p>Mwen gen pasyon pou CSS positioning ak kreye layered designs ki combine aesthetics ak functionality. Ekspètiz mwen an nan modern web technologies ak attention to detail pèmèt mwen bay life nan digital experiences yo.</p>
                        <div class="expertise-tags">
                            <span class="tag">CSS Positioning</span>
                            <span class="tag">Layered Design</span>
                            <span class="tag">Modern Layouts</span>
                        </div>
                    </div>
                    <div class="about-card secondary-card">
                        <h4>Kompetans yo</h4>
                        <ul class="skills-list">
                            <li>Advanced CSS Positioning</li>
                            <li>Z-Index Management</li>
                            <li>Responsive Design</li>
                            <li>Modern Layout Systems</li>
                        </ul>
                    </div>
                </div>
                <div class="about-visual">
                    <div class="profile-container">
                        <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-image">
                        <div class="profile-overlay">
                            <div class="social-links">
                                <a href="#" class="social-link">GitHub</a>
                                <a href="#" class="social-link">LinkedIn</a>
                                <a href="#" class="social-link">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Projects Section ak Layered Cards -->
    <section id="work" class="projects-section">
        <div class="container">
            <div class="section-header">
                <h2>Travay ak Layered Design</h2>
            </div>
            <div class="projects-grid">
                <div class="project-card featured-project">
                    <div class="project-image">
                        <img src="project1.jpg" alt="Positioned Layouts" />
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <h3>Positioned Layouts</h3>
                                <p>Modern portfolio ak advanced positioning techniques</p>
                                <a href="#" class="overlay-link">Gade Detalye</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Advanced Positioning</h3>
                        <p>Portfolio showcase ak sticky navigation, layered hero sections ak positioned overlays ki demonstrate modern CSS techniques.</p>
                        <div class="project-tech">CSS Positioning • Z-Index • Layered Design</div>
                        <div class="project-badge">Featured</div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">
                        <img src="project2.jpg" alt="Sticky Components" />
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <h3>Sticky Components</h3>
                                <p>Interactive components ak sticky behavior</p>
                                <a href="#" class="overlay-link">Gade Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Sticky Components</h3>
                        <p>Collection nan reusable components ak sticky positioning, floating elements ak responsive behavior.</p>
                        <div class="project-tech">Sticky Position • Fixed Elements • Responsive</div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">
                        <img src="project3.jpg" alt="Z-Index Mastery" />
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <h3>Z-Index Mastery</h3>
                                <p>Complex layered interfaces</p>
                                <a href="#" class="overlay-link">Eksplore Code</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Z-Index Mastery</h3>
                        <p>Demonstration nan complex layered interfaces ak proper z-index management ak stacking contexts.</p>
                        <div class="project-tech">Z-Index • Stacking Context • Layer Management</div>
                    </div>
                </div>
                
                <div class="project-card offset-card">
                    <div class="project-image">
                        <img src="project4.jpg" alt="Mobile Positioning" />
                        <div class="project-overlay">
                            <div class="overlay-content">
                                <h3>Mobile First</h3>
                                <p>Responsive positioned layouts</p>
                                <a href="#" class="overlay-link">Test sou Mobile</a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Mobile Positioning</h3>
                        <p>Mobile-first approach ak responsive positioning ki work seamlessly ant devices yo.</p>
                        <div class="project-tech">Mobile First • Touch Friendly • Performance</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Portfolio Mwen</h3>
                    <p>CSS positioning specialist ki kreye layered web experiences ak modern techniques.</p>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Projects</h4>
                        <a href="#">Advanced Layouts</a>
                        <a href="#">Sticky Components</a>
                        <a href="#">Mobile Design</a>
                    </div>
                    <div class="link-group">
                        <h4>Contact</h4>
                        <a href="#">Email</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Portfolio Mwen. Designed ak CSS Positioning.</p>
            </div>
        </div>
    </footer>
    
    <!-- Floating CTA Button -->
    <a href="#contact" class="floating-cta">
        <span class="cta-text">Kontak Mwen</span>
        <span class="cta-icon">💬</span>
    </a>
    
    <!-- Skip Link pou Accessibility -->
    <a href="#main" class="skip-link">Skip to main content</a>
</body>
</html>`,
    starterCss: `/* Semèn 12 - CSS Positioning ak Z-Index */

/* Global Styles ak CSS Variables */
:root {
    --primary-color: #007bff;
    --secondary-color: #ffd43b;
    --text-color: #222;
    --bg-color: #fdfdfd;
    --header-height: 70px;
    
    /* Z-Index Scale */
    --z-background: 1;
    --z-content: 10;
    --z-overlay: 20;
    --z-header: 100;
    --z-modal: 1000;
    --z-floating: 500;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: var(--text-color);
    background-color: var(--bg-color);
    line-height: 1.6;
    font-size: 16px;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
}

/* Container */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Typography */
h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-color);
    line-height: 1.3;
}

/* Skip Link pou Accessibility */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: var(--z-modal);
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 6px;
}

/* ===== STICKY HEADER ===== */
.sticky-header {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 123, 255, 0.1);
    z-index: var(--z-header);
    transition: all 0.3s ease;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    min-height: var(--header-height);
}

.logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
    transition: color 0.3s ease;
}

.main-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.main-nav a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    position: relative;
}

.main-nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.main-nav a:hover {
    background: rgba(0, 123, 255, 0.1);
    color: var(--primary-color);
}

.main-nav a:hover::after {
    width: 80%;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
}

/* ===== HERO SECTION AK LAYERED CONTENT ===== */
.hero-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-background);
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(118, 75, 162, 0.3));
    z-index: calc(var(--z-background) + 1);
}

.hero-content {
    position: relative;
    z-index: var(--z-content);
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 0 1rem;
    animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--secondary-color);
    color: #111;
    border-color: var(--secondary-color);
}

.btn-outline {
    background: transparent;
    color: white;
    border-color: white;
}

.btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: var(--z-content);
}

.scroll-arrow {
    color: white;
    font-size: 1.5rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* ===== ABOUT SECTION AK POSITIONED ELEMENTS ===== */
.about-section {
    padding: 6rem 0;
    position: relative;
}

.section-header {
    position: relative;
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.section-badge {
    position: absolute;
    top: -10px;
    right: 50%;
    transform: translateX(50%);
    background: var(--secondary-color);
    color: #111;
    padding: 0.25rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: var(--z-overlay);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 4rem;
    align-items: start;
}

.about-text {
    position: relative;
}

.about-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
}

.main-card {
    position: relative;
    z-index: var(--z-content);
}

.secondary-card {
    position: relative;
    top: -20px;
    left: 20px;
    background: #f8f9fa;
    z-index: calc(var(--z-content) - 1);
}

.about-card:hover {
    transform: translateY(-5px);
}

.expertise-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.tag {
    background: var(--primary-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
}

/* Profile Visual ak Overlay */
.profile-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.profile-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.profile-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 2rem 1rem 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: var(--z-overlay);
}

.profile-container:hover .profile-overlay {
    transform: translateY(0);
}

.profile-container:hover .profile-image {
    transform: scale(1.05);
}

.social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.social-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid white;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: white;
    color: #111;
}

/* ===== PROJECTS SECTION AK LAYERED CARDS ===== */
.projects-section {
    padding: 6rem 0;
    background: #f8f9fa;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    position: relative;
}

.project-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    position: relative;
}

.featured-project {
    grid-column: span 2;
    background: linear-gradient(135deg, #fff9e6, #ffffff);
    border: 2px solid var(--secondary-color);
}

.offset-card {
    position: relative;
    top: 2rem;
}

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.project-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 123, 255, 0.9);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: var(--z-overlay);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.overlay-content {
    text-align: center;
    padding: 2rem;
}

.overlay-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 6px;
    margin-top: 1rem;
    display: inline-block;
    transition: all 0.3s ease;
}

.overlay-link:hover {
    background: white;
    color: var(--primary-color);
}

.project-content {
    padding: 2rem;
    position: relative;
}

.project-badge {
    position: absolute;
    top: -10px;
    right: 1rem;
    background: var(--secondary-color);
    color: #111;
    padding: 0.25rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: var(--z-overlay);
}

.project-tech {
    color: var(--primary-color);
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 1rem;
}

/* ===== FLOATING CTA BUTTON ===== */
.floating-cta {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
    z-index: var(--z-floating);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    animation: pulse-gentle 3s infinite;
}

.floating-cta:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 123, 255, 0.4);
}

@keyframes pulse-gentle {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.cta-text {
    font-weight: 600;
}

.cta-icon {
    font-size: 1.2rem;
}

/* ===== FOOTER ===== */
.footer {
    background: #111;
    color: #ccc;
    padding: 4rem 0 2rem;
    position: relative;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-info h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
}

.link-group h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.link-group a {
    color: #ccc;
    text-decoration: none;
    display: block;
    padding: 0.25rem 0;
    transition: color 0.3s ease;
}

.link-group a:hover {
    color: var(--secondary-color);
}

.footer-bottom {
    border-top: 1px solid #333;
    padding-top: 2rem;
    text-align: center;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .featured-project {
        grid-column: span 1;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    :root {
        --header-height: 60px;
    }
    
    .main-nav {
        display: none;
    }
    
    .menu-toggle {
        display: block;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .about-card {
        margin-bottom: 1.5rem;
    }
    
    .secondary-card {
        top: -10px;
        left: 10px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .offset-card {
        top: 1rem;
    }
    
    .floating-cta {
        bottom: 1rem;
        right: 1rem;
        padding: 0.75rem 1rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .footer-links {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    
    .floating-cta {
        animation: none;
    }
    
    .scroll-arrow {
        animation: none;
    }
}

/* Focus visible for better accessibility */
.btn:focus-visible,
.main-nav a:focus-visible,
.floating-cta:focus-visible {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
}`,
    expectedResultHt: 'Yon portfolio ak sophisticated layered design, sticky navigation, hero overlays ak positioned elements ki demonstrate advanced CSS positioning mastery.',
    expectedResultFr: 'Un portfolio avec design superposé sophistiqué, navigation collante, overlays hero et éléments positionnés qui démontrent maîtrise avancée positionnement CSS.',
    tipsHt: [
      'Use z-index scale systematically pou avoid conflicts',
      'Test sticky elements sou mobile ak desktop thoroughly', 
      'Maintain accessibility ak proper focus management',
      'Optimize performance ak positioned elements'
    ],
    tipsFr: [
      'Utiliser échelle z-index systématiquement pour éviter conflits',
      'Tester éléments sticky sur mobile et desktop minutieusement',
      'Maintenir accessibilité avec gestion focus appropriée',
      'Optimiser performance avec éléments positionnés'
    ]
  },
  {
    week: 13,
    titleHt: 'CSS Variables ak Design Systems - Consistent Token-Based Design',
    titleFr: 'Variables CSS et Systèmes Design - Design Cohérent Basé Tokens',
    objectiveHt: 'Master CSS variables ak design tokens pou kreye yon consistent, maintainable design system ak theme switching capabilities nan portfolio ou an.',
    objectiveFr: 'Maîtriser variables CSS et tokens design pour créer système design cohérent et maintenable avec capacités changement thème dans votre portfolio.',
    instructionsHt: [
      'Kreye comprehensive color palette ak systematic naming convention',
      'Implemente 8px-based spacing system ak consistent scale',
      'Define typography tokens ak font families, sizes, weights',
      'Setup visual design tokens ak radius, shadows, transitions',
      'Organize variables nan logical categories ak proper documentation',
      'Replace all hardcoded values ak design tokens throughout site',
      'Implement dark theme ak smooth transitions',
      'Test theme switching ak ensure consistency across components'
    ],
    instructionsFr: [
      'Créer palette couleur complète avec convention nommage systématique',
      'Implémenter système espacement basé 8px avec échelle cohérente',
      'Définir tokens typographie avec familles, tailles, poids polices',
      'Configurer tokens design visuel avec radius, ombres, transitions',
      'Organiser variables en catégories logiques avec documentation appropriée',
      'Remplacer toutes valeurs codées dur avec tokens design sur site entier',
      'Implémenter thème sombre avec transitions fluides',
      'Tester changement thème et assurer cohérence entre composants'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Mwen - Design System</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header ak Theme Toggle -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Portfolio Mwen</div>
                <nav class="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button class="theme-toggle" onclick="toggleTheme()">
                    <span class="theme-icon">🌙</span>
                    <span class="theme-text">Dark Mode</span>
                </button>
            </div>
        </div>
    </header>
    
    <!-- Hero Section ak Design Tokens -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Design Systems ak CSS Variables</h1>
                <p class="hero-subtitle">Discover pouvwa nan consistent design tokens ak themable portfolios ki scale ak maintain facilman.</p>
                <div class="hero-actions">
                    <a href="#work" class="btn btn-primary btn-lg">Gade Design System</a>
                    <a href="#about" class="btn btn-outline btn-lg">Aprann Tokens</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="design-token-showcase">
                    <div class="token-demo color-demo">
                        <div class="token-item primary"></div>
                        <div class="token-item secondary"></div>
                        <div class="token-item success"></div>
                        <div class="token-item warning"></div>
                    </div>
                    <div class="token-demo spacing-demo">
                        <div class="spacing-item xs"></div>
                        <div class="spacing-item sm"></div>
                        <div class="spacing-item md"></div>
                        <div class="spacing-item lg"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- About Section ak Token Examples -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2>Design Tokens yo nan Action</h2>
                <p class="section-subtitle">Ki jan CSS variables yo kreye consistent ak maintainable design systems.</p>
            </div>
            <div class="about-grid">
                <div class="about-text">
                    <div class="text-content">
                        <h3>Consistent Design Language</h3>
                        <p>CSS variables yo pèmèt nou kreye yon unified design language ak reusable tokens ki ensure consistency nan tout portfolio an.</p>
                        <p>Ak proper naming conventions ak systematic approach, design system nou an vin scalable ak pi facil pou maintain.</p>
                        <div class="feature-list">
                            <div class="feature-item">
                                <div class="feature-icon">🎨</div>
                                <div class="feature-text">
                                    <h4>Color Tokens</h4>
                                    <p>Systematic color palette ak semantic naming</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">📏</div>
                                <div class="feature-text">
                                    <h4>Spacing System</h4>
                                    <p>8px-based spacing scale pou consistent rhythm</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">📝</div>
                                <div class="feature-text">
                                    <h4>Typography Scale</h4>
                                    <p>Hierarchical font sizes ak proper line heights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-visual">
                    <div class="token-showcase">
                        <div class="showcase-section">
                            <h4>Color Tokens</h4>
                            <div class="color-grid">
                                <div class="color-sample primary">Primary</div>
                                <div class="color-sample secondary">Secondary</div>
                                <div class="color-sample success">Success</div>
                                <div class="color-sample warning">Warning</div>
                                <div class="color-sample error">Error</div>
                                <div class="color-sample neutral">Neutral</div>
                            </div>
                        </div>
                        <div class="showcase-section">
                            <h4>Typography Scale</h4>
                            <div class="typography-demo">
                                <div class="type-sample xl">Heading XL</div>
                                <div class="type-sample lg">Heading Large</div>
                                <div class="type-sample md">Heading Medium</div>
                                <div class="type-sample base">Body Text</div>
                                <div class="type-sample sm">Small Text</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Design System Components -->
    <section id="work" class="components">
        <div class="container">
            <div class="section-header">
                <h2>Component Library</h2>
                <p class="section-subtitle">Reusable components ki build ak design tokens yo.</p>
            </div>
            <div class="component-grid">
                <!-- Button Components -->
                <div class="component-demo">
                    <h3>Buttons</h3>
                    <div class="demo-content">
                        <button class="btn btn-primary">Primary Button</button>
                        <button class="btn btn-secondary">Secondary Button</button>
                        <button class="btn btn-outline">Outline Button</button>
                        <button class="btn btn-ghost">Ghost Button</button>
                        <button class="btn btn-primary btn-sm">Small Button</button>
                        <button class="btn btn-primary btn-lg">Large Button</button>
                    </div>
                </div>
                
                <!-- Card Components -->
                <div class="component-demo">
                    <h3>Cards</h3>
                    <div class="demo-content">
                        <div class="card">
                            <div class="card-header">
                                <h4>Basic Card</h4>
                            </div>
                            <div class="card-body">
                                <p>Card content ak consistent spacing ak styling.</p>
                            </div>
                        </div>
                        <div class="card card-elevated">
                            <div class="card-header">
                                <h4>Elevated Card</h4>
                            </div>
                            <div class="card-body">
                                <p>Card ak pi gwo shadow ak emphasis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Form Components -->
                <div class="component-demo">
                    <h3>Form Elements</h3>
                    <div class="demo-content">
                        <div class="form-group">
                            <label for="demo-input">Input Field</label>
                            <input type="text" id="demo-input" class="form-input" placeholder="Enter text...">
                        </div>
                        <div class="form-group">
                            <label for="demo-select">Select Field</label>
                            <select id="demo-select" class="form-select">
                                <option>Choose option...</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <!-- Badge Components -->
                <div class="component-demo">
                    <h3>Badges ak Tags</h3>
                    <div class="demo-content">
                        <span class="badge badge-primary">Primary</span>
                        <span class="badge badge-secondary">Secondary</span>
                        <span class="badge badge-success">Success</span>
                        <span class="badge badge-warning">Warning</span>
                        <span class="badge badge-error">Error</span>
                        <span class="badge badge-outline">Outline</span>
                    </div>
                </div>
                
                <!-- Alert Components -->
                <div class="component-demo">
                    <h3>Alerts</h3>
                    <div class="demo-content">
                        <div class="alert alert-info">
                            <strong>Info:</strong> Sa a se yon informational alert.
                        </div>
                        <div class="alert alert-success">
                            <strong>Success:</strong> Operation yo complete ak success.
                        </div>
                        <div class="alert alert-warning">
                            <strong>Warning:</strong> Please pay attention to this warning.
                        </div>
                        <div class="alert alert-error">
                            <strong>Error:</strong> Something went wrong ak needs attention.
                        </div>
                    </div>
                </div>
                
                <!-- Progress Components -->
                <div class="component-demo">
                    <h3>Progress Indicators</h3>
                    <div class="demo-content">
                        <div class="progress">
                            <div class="progress-bar" style="width: 25%"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" style="width: 60%"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-warning" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Theme Showcase -->
    <section class="theme-showcase">
        <div class="container">
            <div class="section-header">
                <h2>Theme Switching</h2>
                <p class="section-subtitle">Dynamic theming ak CSS variables.</p>
            </div>
            <div class="theme-demo">
                <div class="theme-preview">
                    <div class="preview-card">
                        <h4>Current Theme</h4>
                        <p>Components yo automatically adapt lè theme changes.</p>
                        <div class="preview-elements">
                            <button class="btn btn-primary btn-sm">Primary</button>
                            <span class="badge badge-secondary">Badge</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Portfolio Mwen</h3>
                    <p>Design system powered ak CSS variables ak design tokens pou consistent ak maintainable web experiences.</p>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Design System</h4>
                        <a href="#">Color Tokens</a>
                        <a href="#">Typography Scale</a>
                        <a href="#">Spacing System</a>
                        <a href="#">Component Library</a>
                    </div>
                    <div class="link-group">
                        <h4>Resources</h4>
                        <a href="#">Documentation</a>
                        <a href="#">Style Guide</a>
                        <a href="#">Code Examples</a>
                        <a href="#">Best Practices</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Portfolio Mwen. Built ak CSS Variables ak Design Tokens.</p>
            </div>
        </div>
    </footer>
    
    <script>
        // Theme switching functionality
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            
            const toggle = document.querySelector('.theme-toggle');
            const icon = toggle.querySelector('.theme-icon');
            const text = toggle.querySelector('.theme-text');
            
            if (newTheme === 'dark') {
                icon.textContent = '☀️';
                text.textContent = 'Light Mode';
            } else {
                icon.textContent = '🌙';
                text.textContent = 'Dark Mode';
            }
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        }
        
        // Load saved theme
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            if (savedTheme === 'dark') {
                const toggle = document.querySelector('.theme-toggle');
                const icon = toggle.querySelector('.theme-icon');
                const text = toggle.querySelector('.theme-text');
                icon.textContent = '☀️';
                text.textContent = 'Light Mode';
            }
        });
    </script>
</body>
</html>`,
    starterCss: `/* ==========================================
   CSS VARIABLES DESIGN SYSTEM
   ========================================== */

/* ===== LIGHT THEME (Default) ===== */
:root,
[data-theme="light"] {
  /* ===== BRAND COLORS ===== */
  --color-primary: #ffd43b;
  --color-primary-dark: #ffbf00;
  --color-primary-light: #fff3c4;
  --color-primary-contrast: #1a1a1a;
  
  --color-secondary: #007bff;
  --color-secondary-dark: #0056b3;
  --color-secondary-light: #cce7ff;
  --color-secondary-contrast: #ffffff;
  
  /* ===== NEUTRAL COLORS ===== */
  --color-neutral-0: #ffffff;
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;
  
  /* ===== SEMANTIC COLORS ===== */
  --color-success: #22c55e;
  --color-success-light: #dcfce7;
  --color-success-dark: #166534;
  
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  --color-warning-dark: #92400e;
  
  --color-error: #ef4444;
  --color-error-light: #fecaca;
  --color-error-dark: #991b1b;
  
  --color-info: #3b82f6;
  --color-info-light: #dbeafe;
  --color-info-dark: #1e40af;
  
  /* ===== TEXT COLORS ===== */
  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-tertiary: #9ca3af;
  --color-text-inverse: #ffffff;
  --color-text-link: var(--color-secondary);
  
  /* ===== BACKGROUND COLORS ===== */
  --color-background-primary: #ffffff;
  --color-background-secondary: #f9fafb;
  --color-background-tertiary: #f3f4f6;
  --color-background-inverse: #111827;
  
  /* ===== BORDER COLORS ===== */
  --color-border-primary: #e5e7eb;
  --color-border-secondary: #d1d5db;
  --color-border-focus: var(--color-primary);
}

/* ===== DARK THEME ===== */
[data-theme="dark"] {
  /* ===== BRAND COLORS (Adjusted for dark) ===== */
  --color-primary: #fbbf24;
  --color-primary-dark: #d97706;
  --color-primary-light: #fef3c7;
  --color-primary-contrast: #111827;
  
  --color-secondary: #60a5fa;
  --color-secondary-dark: #3b82f6;
  --color-secondary-light: #1e40af;
  --color-secondary-contrast: #111827;
  
  /* ===== NEUTRAL COLORS (Inverted) ===== */
  --color-neutral-0: #0a0a0a;
  --color-neutral-50: #171717;
  --color-neutral-100: #262626;
  --color-neutral-200: #404040;
  --color-neutral-300: #525252;
  --color-neutral-400: #737373;
  --color-neutral-500: #a3a3a3;
  --color-neutral-600: #d4d4d4;
  --color-neutral-700: #e5e5e5;
  --color-neutral-800: #f5f5f5;
  --color-neutral-900: #fafafa;
  --color-neutral-950: #ffffff;
  
  /* ===== SEMANTIC COLORS (Dark optimized) ===== */
  --color-success: #10b981;
  --color-success-light: #065f46;
  --color-success-dark: #6ee7b7;
  
  --color-warning: #f59e0b;
  --color-warning-light: #78350f;
  --color-warning-dark: #fcd34d;
  
  --color-error: #f87171;
  --color-error-light: #7f1d1d;
  --color-error-dark: #fca5a5;
  
  --color-info: #60a5fa;
  --color-info-light: #1e3a8a;
  --color-info-dark: #93c5fd;
  
  /* ===== TEXT COLORS (Dark theme) ===== */
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-tertiary: #9ca3af;
  --color-text-inverse: #111827;
  --color-text-link: var(--color-secondary);
  
  /* ===== BACKGROUND COLORS (Dark theme) ===== */
  --color-background-primary: #111827;
  --color-background-secondary: #1f2937;
  --color-background-tertiary: #374151;
  --color-background-inverse: #ffffff;
  
  /* ===== BORDER COLORS (Dark theme) ===== */
  --color-border-primary: #374151;
  --color-border-secondary: #4b5563;
  --color-border-focus: var(--color-primary);
}

/* ==========================================
   SPACING SYSTEM (8px base)
   ========================================== */
:root {
  --space-unit: 8px;
  
  /* Spacing Scale */
  --space-0: 0;
  --space-px: 1px;
  --space-2xs: calc(var(--space-unit) * 0.25);  /* 2px */
  --space-xs: calc(var(--space-unit) * 0.5);    /* 4px */
  --space-sm: var(--space-unit);                /* 8px */
  --space-md: calc(var(--space-unit) * 2);      /* 16px */
  --space-lg: calc(var(--space-unit) * 3);      /* 24px */
  --space-xl: calc(var(--space-unit) * 4);      /* 32px */
  --space-2xl: calc(var(--space-unit) * 6);     /* 48px */
  --space-3xl: calc(var(--space-unit) * 8);     /* 64px */
  --space-4xl: calc(var(--space-unit) * 12);    /* 96px */
  --space-5xl: calc(var(--space-unit) * 16);    /* 128px */
  
  /* Layout-specific spacing */
  --space-section-sm: var(--space-3xl);
  --space-section-md: var(--space-4xl);
  --space-section-lg: var(--space-5xl);
  --space-container: var(--space-md);
}

/* ==========================================
   TYPOGRAPHY SYSTEM
   ========================================== */
:root {
  /* Font Families */
  --font-family-heading: 'Poppins', system-ui, -apple-system, sans-serif;
  --font-family-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-mono: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
  
  /* Font Scale */
  --font-size-2xs: 0.625rem;    /* 10px */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  --font-size-6xl: 3.75rem;     /* 60px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Line Heights */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* Letter Spacing */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}

/* ==========================================
   VISUAL DESIGN TOKENS
   ========================================== */
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-base: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-full: 50%;
  
  /* Box Shadows */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-base: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 50px 100px rgba(0, 0, 0, 0.25);
  
  /* Focus Shadows */
  --shadow-focus-primary: 0 0 0 3px rgba(255, 212, 59, 0.4);
  --shadow-focus-secondary: 0 0 0 3px rgba(59, 130, 246, 0.4);
  --shadow-focus-error: 0 0 0 3px rgba(239, 68, 68, 0.4);
  
  /* Transitions */
  --transition-none: none;
  --transition-fast: 100ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  --transition-slower: 500ms ease-out;
  
  /* Animation Durations */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  /* Animation Easings */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Z-Index Scale */
  --z-index-hide: -1;
  --z-index-base: 0;
  --z-index-docked: 10;
  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-banner: 300;
  --z-index-overlay: 400;
  --z-index-modal: 500;
  --z-index-popover: 600;
  --z-index-skiplinks: 700;
  --z-index-toast: 800;
  --z-index-tooltip: 900;
}

/* ==========================================
   BREAKPOINTS (for reference)
   ========================================== */
:root {
  --breakpoint-xs: 475px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* ==========================================
   BASE STYLES
   ========================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--space-4xl);
}

body {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-background-primary);
  transition: color var(--transition-base), background-color var(--transition-base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Container */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-container);
}

/* ==========================================
   TYPOGRAPHY COMPONENTS
   ========================================== */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin: 0;
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-base); }

p {
  margin: 0 0 var(--space-md) 0;
  color: var(--color-text-secondary);
}

a {
  color: var(--color-text-link);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-secondary-dark);
}

/* ==========================================
   HEADER & NAVIGATION
   ========================================== */
.header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-primary);
  z-index: var(--z-index-sticky);
  transition: all var(--transition-base);
  padding: var(--space-md) 0;
}

[data-theme="dark"] .header {
  background: rgba(17, 24, 39, 0.8);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
}

.logo {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.nav {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.nav a {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-base);
  transition: all var(--transition-fast);
  position: relative;
}

.nav a:hover {
  background: var(--color-background-secondary);
  color: var(--color-primary);
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: calc(var(--space-sm) * -1);
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--transition-fast);
  transform: translateX(-50%);
}

.nav a:hover::after {
  width: 80%;
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-full);
  padding: var(--space-xs) var(--space-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.theme-toggle:hover {
  background: var(--color-background-tertiary);
  border-color: var(--color-border-secondary);
}

.theme-toggle:focus {
  outline: none;
  box-shadow: var(--shadow-focus-primary);
}

/* ==========================================
   BUTTON SYSTEM
   ========================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  user-select: none;
  
  /* Default size */
  padding: var(--space-sm) var(--space-md);
}

/* Button Variants */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-secondary-contrast);
  border-color: var(--color-secondary);
}

.btn-secondary:hover {
  background: var(--color-secondary-dark);
  border-color: var(--color-secondary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border-color: transparent;
}

.btn-ghost:hover {
  background: var(--color-background-secondary);
  color: var(--color-primary);
}

/* Button Sizes */
.btn-sm {
  font-size: var(--font-size-sm);
  padding: var(--space-xs) var(--space-sm);
}

.btn-lg {
  font-size: var(--font-size-lg);
  padding: var(--space-md) var(--space-xl);
}

.btn:focus {
  outline: none;
  box-shadow: var(--shadow-focus-primary);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

/* ==========================================
   HERO SECTION
   ========================================== */
.hero {
  padding: var(--space-section-lg) 0;
  background: linear-gradient(135deg, 
    var(--color-background-primary) 0%, 
    var(--color-background-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-4xl);
  align-items: center;
  min-height: 60vh;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Hero Visual Tokens Demo */
.design-token-showcase {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--color-background-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-primary);
}

.token-demo {
  display: flex;
  gap: var(--space-sm);
}

.color-demo .token-item {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  border: 2px solid var(--color-border-primary);
}

.token-item.primary { background: var(--color-primary); }
.token-item.secondary { background: var(--color-secondary); }
.token-item.success { background: var(--color-success); }
.token-item.warning { background: var(--color-warning); }

.spacing-demo .spacing-item {
  background: var(--color-primary);
  border-radius: var(--radius-sm);
}

.spacing-item.xs { width: var(--space-xs); height: 30px; }
.spacing-item.sm { width: var(--space-sm); height: 30px; }
.spacing-item.md { width: var(--space-md); height: 30px; }
.spacing-item.lg { width: var(--space-lg); height: 30px; }

/* ==========================================
   SECTION HEADERS
   ========================================== */
.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

/* ==========================================
   ABOUT SECTION
   ========================================== */
.about {
  padding: var(--space-section-md) 0;
  background: var(--color-background-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

.text-content h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.feature-item {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
}

.feature-icon {
  font-size: var(--font-size-2xl);
  flex-shrink: 0;
}

.feature-text h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-xs);
  color: var(--color-text-primary);
}

.feature-text p {
  color: var(--color-text-secondary);
  margin: 0;
}

/* Token Showcase */
.token-showcase {
  background: var(--color-background-primary);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-base);
}

.showcase-section {
  margin-bottom: var(--space-xl);
}

.showcase-section:last-child {
  margin-bottom: 0;
}

.showcase-section h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
}

.color-sample {
  padding: var(--space-sm);
  border-radius: var(--radius-base);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.color-sample.primary { background: var(--color-primary); color: var(--color-primary-contrast); }
.color-sample.secondary { background: var(--color-secondary); }
.color-sample.success { background: var(--color-success); }
.color-sample.warning { background: var(--color-warning); }
.color-sample.error { background: var(--color-error); }
.color-sample.neutral { background: var(--color-neutral-600); }

.typography-demo {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.type-sample {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.type-sample.xl { font-size: var(--font-size-3xl); }
.type-sample.lg { font-size: var(--font-size-2xl); }
.type-sample.md { font-size: var(--font-size-xl); }
.type-sample.base { font-size: var(--font-size-base); font-family: var(--font-family-body); font-weight: var(--font-weight-normal); }
.type-sample.sm { font-size: var(--font-size-sm); font-family: var(--font-family-body); font-weight: var(--font-weight-normal); color: var(--color-text-secondary); }

/* ==========================================
   COMPONENT LIBRARY SECTION
   ========================================== */
.components {
  padding: var(--space-section-md) 0;
  background: var(--color-background-primary);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
}

.component-demo {
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.component-demo:hover {
  border-color: var(--color-border-secondary);
  box-shadow: var(--shadow-md);
}

.component-demo h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border-primary);
  padding-bottom: var(--space-sm);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

/* ==========================================
   CARD SYSTEM
   ========================================== */
.card {
  background: var(--color-background-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-base);
}

.card:hover {
  border-color: var(--color-border-secondary);
  box-shadow: var(--shadow-md);
}

.card-elevated {
  box-shadow: var(--shadow-lg);
}

.card-header {
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--color-border-primary);
  background: var(--color-background-secondary);
}

.card-header h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.card-body {
  padding: var(--space-lg);
}

.card-body p {
  color: var(--color-text-secondary);
  margin: 0;
}

/* ==========================================
   FORM SYSTEM
   ========================================== */
.form-group {
  margin-bottom: var(--space-md);
}

.form-group label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.form-input,
.form-select {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background: var(--color-background-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-base);
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus-primary);
}

.form-input::placeholder {
  color: var(--color-text-tertiary);
}

/* ==========================================
   BADGE SYSTEM
   ========================================== */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2xs) var(--space-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
}

.badge-primary {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
}

.badge-secondary {
  background: var(--color-secondary);
  color: var(--color-secondary-contrast);
}

.badge-success {
  background: var(--color-success);
  color: white;
}

.badge-warning {
  background: var(--color-warning);
  color: white;
}

.badge-error {
  background: var(--color-error);
  color: white;
}

.badge-outline {
  background: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-secondary);
}

/* ==========================================
   ALERT SYSTEM
   ========================================== */
.alert {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  margin-bottom: var(--space-md);
}

.alert-info {
  background: var(--color-info-light);
  color: var(--color-info-dark);
  border-color: var(--color-info);
}

.alert-success {
  background: var(--color-success-light);
  color: var(--color-success-dark);
  border-color: var(--color-success);
}

.alert-warning {
  background: var(--color-warning-light);
  color: var(--color-warning-dark);
  border-color: var(--color-warning);
}

.alert-error {
  background: var(--color-error-light);
  color: var(--color-error-dark);
  border-color: var(--color-error);
}

/* ==========================================
   PROGRESS SYSTEM
   ========================================== */
.progress {
  width: 100%;
  height: 8px;
  background: var(--color-neutral-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-sm);
}

.progress-bar {
  height: 100%;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}

.progress-bar-success {
  background: var(--color-success);
}

.progress-bar-warning {
  background: var(--color-warning);
}

/* ==========================================
   THEME SHOWCASE
   ========================================== */
.theme-showcase {
  padding: var(--space-section-sm) 0;
  background: var(--color-background-tertiary);
}

.theme-demo {
  display: flex;
  justify-content: center;
}

.theme-preview {
  max-width: 400px;
}

.preview-card {
  background: var(--color-background-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.preview-card h4 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.preview-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.preview-elements {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  align-items: center;
}

/* ==========================================
   FOOTER
   ========================================== */
.footer {
  background: var(--color-background-tertiary);
  border-top: 1px solid var(--color-border-primary);
  padding: var(--space-4xl) 0 var(--space-xl);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-4xl);
  margin-bottom: var(--space-2xl);
}

.footer-info h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}

.footer-info p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-xl);
}

.link-group h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.link-group a {
  display: block;
  color: var(--color-text-secondary);
  padding: var(--space-xs) 0;
  transition: color var(--transition-fast);
}

.link-group a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid var(--color-border-primary);
  padding-top: var(--space-xl);
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */
@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
  
  .component-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 768px) {
  :root {
    --space-container: var(--space-sm);
    --space-section-lg: var(--space-3xl);
    --space-section-md: var(--space-2xl);
  }
  
  .header-content {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .nav {
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .section-header h2 {
    font-size: var(--font-size-3xl);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
  
  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .design-token-showcase {
    padding: var(--space-lg);
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .component-demo {
    padding: var(--space-lg);
  }
  
  .preview-elements {
    flex-direction: column;
    gap: var(--space-sm);
  }
}

/* ==========================================
   ACCESSIBILITY
   ========================================== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  :root {
    --color-border-primary: #000000;
    --color-text-secondary: var(--color-text-primary);
  }
}

/* Focus indicators */
*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Smooth theme transitions */
* {
  transition: background-color var(--transition-base),
              color var(--transition-base),
              border-color var(--transition-base),
              box-shadow var(--transition-base);
}`,
    expectedResultHt: 'Yon portfolio ak complete design system built ak CSS variables, featuring consistent tokens, theme switching ak maintainable codebase.',
    expectedResultFr: 'Un portfolio avec système design complet construit avec variables CSS, présentant tokens cohérents, changement thème et code maintenable.',
    tipsHt: [
      'Organize variables nan logical categories ak consistent naming',
      'Use calc() ak variables pou dynamic spacing relationships',
      'Test theme switching thoroughly ak all components',
      'Document token usage ak maintain clean variable hierarchy'
    ],
    tipsFr: [
      'Organiser variables en catégories logiques avec nommage cohérent',
      'Utiliser calc() avec variables pour relations espacement dynamiques',
      'Tester changement thème minutieusement avec tous composants',
      'Documenter usage tokens et maintenir hiérarchie variables propre'
    ]
  },
  {
    week: 5,
    titleHt: 'Typography ak Google Fonts - Professional Text Styling',
    titleFr: 'Typographie et Google Fonts - Stylisation Professionnelle du Texte',
    objectiveHt: 'Amelyore typography nan portfolio ou an ak Google Fonts, visual hierarchy ak text styling avanse pou yon aparans pwofesyonèl ak bèl.',
    objectiveFr: 'Améliorer la typographie de votre portfolio avec Google Fonts, hiérarchie visuelle et stylisation avancée pour un aspect professionnel et beau.',
    instructionsHt: [
      'Ajoute Google Fonts link nan <head> ou a - chwazi 2 fonts ki byen ale ansanm',
      'Aplike font premye a (egzanp: Poppins) pou tou heading yo (h1, h2, h3)',
      'Aplike font dezyèm la (egzanp: Open Sans) pou body text ak paragraphs',
      'Etabli visual hierarchy ak font sizes: h1(2.2rem), h2(1.6rem), h3(1.2rem), p(1rem)',
      'Ajoute letter-spacing ak text-transform nan navigation pou yon efè pwofesyonèl',
      'Amelyore line-height pou paragraphs (1.7) pou pi bon lisibilité',
      'Itilize coulè konsèy: headings (#111), body text (#444), secondary (#666)',
      'Ajoute max-width (600px) nan paragraphs ak center yo ak margin: 0 auto'
    ],
    instructionsFr: [
      'Ajouter le link Google Fonts dans votre <head> - choisir 2 polices qui vont bien ensemble',
      'Appliquer première police (ex: Poppins) pour tous les en-têtes (h1, h2, h3)',
      'Appliquer deuxième police (ex: Open Sans) pour body text et paragraphes',
      'Établir hiérarchie visuelle avec tailles: h1(2.2rem), h2(1.6rem), h3(1.2rem), p(1rem)',
      'Ajouter letter-spacing et text-transform à la navigation pour effet professionnel',
      'Améliorer line-height pour paragraphes (1.7) pour meilleure lisibilité',
      'Utiliser couleurs cohérentes: en-têtes (#111), texte corps (#444), secondaire (#666)',
      'Ajouter max-width (600px) aux paragraphes et les centrer avec margin: 0 auto'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen</title>
    <!-- Ajoute Google Fonts link isit la -->
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation ak bon typography -->
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Work</a>
        <a href="contact.html">Contact</a>
    </nav>
    
    <header>
        <h1>Byenveni nan Portfolio Mwen</h1>
        <p class="intro-text">Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl.</p>
    </header>
    
    <main>
        <section id="about">
            <h2>Sou Mwen</h2>
            <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-photo">
            <p>Bonjou! Mwen rele [Ou an]. Mwen gen pasyon pou teknoloji ak development web. Depi kèk ane mwen ap aprann ak kreye pwojè yo ki gen enpòtans.</p>
            <p>Nan eksperyans mwen an, mwen aprann HTML, CSS, ak JavaScript. Mwen renmen rezoud pwoblèm yo ak bay solisyon kreyatè yo.</p>
        </section>
        
        <section id="featured-work">
            <h2>Travay ki Enpòtan</h2>
            <div class="work-grid">
                <div class="work-card">
                    <h3>Pwojè 1</h3>
                    <p>Yon deskripsyon kout sou pwojè sa a ak teknoloji yo ki te itilize.</p>
                </div>
                <div class="work-card">
                    <h3>Pwojè 2</h3>
                    <p>Yon deskripsyon kout sou pwojè sa a ak teknoloji yo ki te itilize.</p>
                </div>
                <div class="work-card">
                    <h3>Pwojè 3</h3>
                    <p>Yon deskripsyon kout sou pwojè sa a ak teknoloji yo ki te itilize.</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Portfolio Mwen. Tout dwa yo rezève.</p>
    </footer>
</body>
</html>`,
    starterCss: `/* Semèn 5 - Typography ak Google Fonts */

/* Importe Google Fonts - ajoute link la nan HTML la tou */
/* Egzanp: Poppins pou headings, Open Sans pou body */

/* Base Typography */
body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    background-color: #fdfdfd;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

/* Headings Hierarchy */
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #111;
    margin-bottom: 0.5rem;
}

h1 {
    font-size: 2.2rem;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.6rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #222;
}

h3 {
    font-size: 1.2rem;
    color: #333;
}

/* Paragraphs ak Intro Text */
p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    max-width: 600px;
    margin-bottom: 1rem;
}

.intro-text {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: center;
    max-width: 500px;
    margin: 0 auto 2rem;
    color: #555;
}

/* Navigation ak Professional Typography */
nav {
    background: #f8f9fa;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

nav a {
    text-decoration: none;
    color: #333;
    margin: 0 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #007bff;
}

/* Header Section */
header {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    margin-bottom: 2rem;
}

header h1 {
    color: white;
    margin-bottom: 0.5rem;
}

header .intro-text {
    color: #f0f0f0;
}

/* Main Content */
main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Section Styling */
section {
    margin-bottom: 3rem;
}

/* Profile Photo */
.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #007bff;
    object-fit: cover;
    display: block;
    margin: 1rem auto 2rem;
}

/* Work Cards ak Typography */
.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.work-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.work-card h3 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.work-card p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: none;
}

/* Footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
}

footer p {
    margin: 0;
    font-size: 0.9rem;
    color: #ccc;
    max-width: none;
}`,
    expectedResultHt: 'Yon portfolio ki gen typography pwofesyonèl ak Google Fonts, visual hierarchy ki klè, ak text styling ki konsèy ak bèl nan tout sit la.',
    expectedResultFr: 'Un portfolio avec typographie professionnelle et Google Fonts, hiérarchie visuelle claire, et stylisation de texte cohérente et belle sur tout le site.',
    completionMessageHt: '🎉 Félicitations! Typography ou an kounye a pwofesyonèl ak bèl! Semèn kap vini an nou pral aprann Flexbox pou w fè layout yo responsive ak byen òganize.',
    completionMessageFr: '🎉 Félicitations! Votre typographie est maintenant professionnelle et belle! La semaine prochaine nous apprendrons Flexbox pour rendre vos layouts responsives et bien organisés.',
    tipsHt: [
      'Chwazi 2 fonts ki byen ale ansanm (egzanp: serif ak sans-serif)',
      'Test typography ou a sou aparèy diferan yo',
      'Konsèv line-height yo pou bon lisibilité',
      'Itilize letter-spacing ak moderation - yon ti jan ase'
    ],
    tipsFr: [
      'Choisir 2 polices qui vont bien ensemble (ex: serif et sans-serif)',
      'Tester votre typographie sur différents appareils',
      'Maintenir des line-heights pour bonne lisibilité',
      'Utiliser letter-spacing avec modération - un petit peu suffit'
    ]
  },
  {
    week: 6,
    titleHt: 'Flexbox Fundamentals - Responsive Layout ak Professional Navigation',
    titleFr: 'Fondamentaux Flexbox - Layout Responsive et Navigation Professionnelle',
    objectiveHt: 'Transform portfolio ou an ak Flexbox pou kreye header, navigation, hero section ak project grid ki responsive ak pwofesyonèl.',
    objectiveFr: 'Transformer votre portfolio avec Flexbox pour créer header, navigation, section hero et grille projets responsive et professionnelle.',
    instructionsHt: [
      'Transform navigation an ak display: flex ak justify-content: center',
      'Kreye header ak logo ak navigation ak space-between alignment',
      'Build hero section ak flex-direction: column ak center alignment',
      'Transform project cards ak flexbox grid ak flex-wrap: wrap',
      'Itilize gap property pou spacing ant eleman yo',
      'Ajoute hover effects ak transitions sou cards ak navigation',
      'Ensure responsive behavior ak flex properties sou items yo',
      'Organize footer ak flexbox pou proper alignment'
    ],
    instructionsFr: [
      'Transformer la navigation avec display: flex et justify-content: center',
      'Créer header avec logo et navigation avec space-between alignment',
      'Construire section hero avec flex-direction: column et center alignment',
      'Transformer project cards avec flexbox grid et flex-wrap: wrap',
      'Utiliser gap property pour espacement entre éléments',
      'Ajouter hover effects et transitions sur cards et navigation',
      'Assurer responsive behavior avec flex properties sur items',
      'Organiser footer avec flexbox pour proper alignment'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header ak Navigation -->
    <header class="header">
        <div class="logo">Portfolio Mwen</div>
        <nav class="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
        <h1>Byenveni nan Portfolio Mwen</h1>
        <p class="hero-text">Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl. Depi kèk ane mwen ap travay sou pwojè yo ki gen enpòtans.</p>
        <div class="cta-buttons">
            <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
            <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
        </div>
    </section>
    
    <!-- Main Content -->
    <main class="main-content">
        <!-- About Section -->
        <section id="about" class="about-section">
            <h2>Sou Mwen</h2>
            <div class="about-content">
                <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-photo">
                <div class="about-text">
                    <p>Bonjou! Mwen rele [Ou an]. Mwen gen pasyon pou teknoloji ak development web. Depi kèk ane mwen ap aprann ak kreye pwojè yo ki gen enpòtans.</p>
                    <p>Nan eksperyans mwen an, mwen aprann HTML, CSS, ak JavaScript. Mwen renmen rezoud pwoblèm yo ak bay solisyon kreyatè yo.</p>
                </div>
            </div>
        </section>
        
        <!-- Featured Work Section -->
        <section id="featured-work" class="work-section">
            <h2>Travay ki Enpòtan</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Custom Closet Design</h3>
                    <p>Compact closet ak hidden drawers ak mirror sliding doors. Yon pwojè ki gen enpòtans pou optimise espas nan kay yo.</p>
                    <div class="project-tech">HTML • CSS • JavaScript</div>
                </div>
                <div class="project-card">
                    <h3>Solar Dashboard</h3>
                    <p>Yon ti web app ki te bati pou surveille solar energy output. Dashboard ak real-time data ak analytics.</p>
                    <div class="project-tech">React • CSS • API</div>
                </div>
                <div class="project-card">
                    <h3>Poetry Website</h3>
                    <p>Showcasing original poems ak reflections ak minimal layout. Yon sit ki fokus sou kontan ak lisibilité.</p>
                    <div class="project-tech">HTML • CSS • Typography</div>
                </div>
                <div class="project-card">
                    <h3>E-commerce Layout</h3>
                    <p>Modern online store layout ak responsive design ak shopping cart functionality. Clean ak user-friendly interface.</p>
                    <div class="project-tech">CSS Grid • Flexbox • JS</div>
                </div>
            </div>
        </section>
    </main>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Portfolio Mwen. Tout dwa yo rezève.</p>
            <div class="social-links">
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
    </footer>
</body>
</html>`,
    starterCss: `/* Semèn 6 - Flexbox Fundamentals */

/* Google Fonts imported in HTML */
/* Base Typography remains from Week 5 */

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    background-color: #fdfdfd;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #111;
}

/* FLEXBOX LAYOUTS START HERE */

/* Header ak Navigation */
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
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
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
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-menu a:hover {
    background: #f0f0f0;
    color: #333;
    transform: translateY(-1px);
}

/* Hero Section ak Flexbox */
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
}

.hero h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    color: white;
    letter-spacing: 1px;
}

.hero-text {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.7;
    color: #f0f0f0;
}

/* CTA Buttons ak Flexbox */
.cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
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
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Main Content Container */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* About Section ak Flexbox */
.about-section {
    padding: 4rem 0;
}

.about-section h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #222;
}

.about-content {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
}

.profile-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 4px solid #007bff;
    object-fit: cover;
    flex-shrink: 0;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
    max-width: none;
}

/* Work Section ak Flexbox Grid */
.work-section {
    padding: 4rem 0;
    background: #f8f9fa;
    margin: 2rem -2rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.work-section h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #222;
}

/* Projects Grid ak Flexbox */
.projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
}

.project-card {
    flex: 1 1 280px;
    max-width: 320px;
    min-width: 260px;
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border-color: #007bff;
}

.project-card h3 {
    color: #333;
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
}

.project-card p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: none;
}

.project-tech {
    font-size: 0.85rem;
    color: #007bff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Footer ak Flexbox */
.footer {
    background: #333;
    color: white;
    padding: 2rem 0;
    margin-top: 3rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-content p {
    margin: 0;
    font-size: 0.9rem;
    color: #ccc;
    max-width: none;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: #555;
    color: white;
    transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .about-content {
        flex-direction: column;
        text-align: center;
    }
    
    .header {
        padding: 1rem;
    }
    
    .nav-menu {
        gap: 1rem;
    }
    
    .nav-menu a {
        font-size: 0.8rem;
        padding: 0.5rem 0.75rem;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}`,
    expectedResultHt: 'Yon portfolio ak layout konplètman responsive ak Flexbox, ak header pwofesyonèl, hero section santre, project grid ki flexible ak footer ki byen òganize.',
    expectedResultFr: 'Un portfolio avec layout complètement responsive avec Flexbox, avec header professionnel, section hero centrée, grille projets flexible et footer bien organisé.',
    completionMessageHt: '🎉 Félicitations! Portfolio ou an kounye a gen yon layout pwofesyonèl ak Flexbox! Semèn kap vini an nou pral aprann Responsive Design ak Media Queries pou w fè li perfè sou tout aparèy yo.',
    completionMessageFr: '🎉 Félicitations! Votre portfolio a maintenant un layout professionnel avec Flexbox! La semaine prochaine nous apprendrons Responsive Design et Media Queries pour le rendre parfait sur tous les appareils.',
    tipsHt: [
      'Itilize justify-content ak align-items ansanm pou perfect alignment',
      'Sonje flex-wrap: wrap pou responsive behavior',
      'Test layout ou a sou grandè ekran diferan yo',
      'Gap pi bon pase margin pou espas ant flex items yo'
    ],
    tipsFr: [
      'Utiliser justify-content et align-items ensemble pour perfect alignment',
      'Se rappeler flex-wrap: wrap pour responsive behavior',
      'Tester votre layout sur différentes tailles d\'écran',
      'Gap est meilleur que margin pour espace entre flex items'
    ]
  },
  {
    week: 7,
    titleHt: 'Responsive Design ak Media Queries - Mobile-First ak Adaptive Layouts',
    titleFr: 'Responsive Design et Media Queries - Mobile-First et Layouts Adaptatifs',
    objectiveHt: 'Transform portfolio ou an ak responsive design, mobile-first approach ak media queries pou w kreye layouts ki adapte ak tout aparèy yo.',
    objectiveFr: 'Transformer votre portfolio avec responsive design, approche mobile-first et media queries pour créer des layouts qui s\'adaptent à tous les appareils.',
    instructionsHt: [
      'Implement mobile-first approach ak default styles pou mobile',
      'Ajoute media queries pou tablet (768px) ak desktop (1024px)',
      'Transform navigation ak responsive behavior - vètikèl sou mobile, òizontèl sou desktop',
      'Make typography responsive ak fluid font sizes ak line heights',
      'Kreye responsive project grid - 1 column mobile, 2 tablet, 3 desktop',
      'Optimize images ak media pou responsive behavior',
      'Test ak DevTools pou different viewports ak device sizes',
      'Ensure proper spacing ak touch targets sou mobile devices'
    ],
    instructionsFr: [
      'Implémenter approche mobile-first avec styles par défaut pour mobile',
      'Ajouter media queries pour tablette (768px) et desktop (1024px)',
      'Transformer navigation avec responsive behavior - verticale sur mobile, horizontale sur desktop',
      'Rendre typography responsive avec tailles fluides et line heights',
      'Créer grille projets responsive - 1 colonne mobile, 2 tablette, 3 desktop',
      'Optimiser images et média pour comportement responsive',
      'Tester avec DevTools pour différents viewports et tailles d\'appareils',
      'Assurer espacement approprié et touch targets sur appareils mobiles'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pòtrè Mwen - Responsive</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Mobile-First Responsive Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Portfolio Mwen</div>
                <nav class="nav-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    </header>
    
    <!-- Responsive Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Byenveni nan Portfolio Mwen</h1>
                <p class="hero-text">Mwen se yon développeur web ki gen pasyon pou kreye eksperyans dijital yo ki gen sans ak ki bèl. Depi kèk ane mwen ap travay sou pwojè yo ki gen enpòtans.</p>
                <div class="cta-buttons">
                    <a href="#work" class="btn btn-primary">Gade Travay Mwen</a>
                    <a href="#contact" class="btn btn-secondary">Kontak Mwen</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Responsive Main Content -->
    <main class="main-content">
        <div class="container">
            <!-- Responsive About Section -->
            <section id="about" class="about-section">
                <h2>Sou Mwen</h2>
                <div class="about-content">
                    <img src="profile.jpg" alt="Foto Pwofil Mwen" class="profile-photo">
                    <div class="about-text">
                        <p>Bonjou! Mwen rele [Ou an]. Mwen gen pasyon pou teknoloji ak development web. Depi kèk ane mwen ap aprann ak kreye pwojè yo ki gen enpòtans.</p>
                        <p>Nan eksperyans mwen an, mwen aprann HTML, CSS, ak JavaScript. Mwen renmen rezoud pwoblèm yo ak bay solisyon kreyatè yo ki travay byen sou tout aparèy yo.</p>
                        <p>Kounye a mwen ap konsantre sou responsive design ak mobile-first development pou w kreye eksperyans ki aksesibl ak efikas sou tout platfòm yo.</p>
                    </div>
                </div>
            </section>
            
            <!-- Responsive Featured Work Grid -->
            <section id="featured-work" class="work-section">
                <h2>Travay ki Enpòtan</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project1.jpg" alt="Custom Closet Design" />
                        </div>
                        <div class="project-content">
                            <h3>Custom Closet Design</h3>
                            <p>Responsive web app pou custom closet ak hidden drawers ak mirror sliding doors. Optimized pou mobile ak tablet usage.</p>
                            <div class="project-tech">HTML • CSS • JavaScript • Responsive</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project2.jpg" alt="Solar Dashboard" />
                        </div>
                        <div class="project-content">
                            <h3>Solar Dashboard</h3>
                            <p>Mobile-first dashboard pou surveille solar energy output ak real-time data ak analytics accessible sou tout aparèy yo.</p>
                            <div class="project-tech">React • CSS Grid • API • PWA</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project3.jpg" alt="Poetry Website" />
                        </div>
                        <div class="project-content">
                            <h3>Poetry Website</h3>
                            <p>Responsive platform pou showcase original poems ak reflections ak minimal layout ki fokus sou lisibilité ak beauty.</p>
                            <div class="project-tech">HTML • CSS • Typography • Responsive</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project4.jpg" alt="E-commerce Layout" />
                        </div>
                        <div class="project-content">
                            <h3>E-commerce Mobile App</h3>
                            <p>Modern responsive e-commerce layout ak mobile-first design, shopping cart functionality ak touch-optimized interface.</p>
                            <div class="project-tech">CSS Grid • Flexbox • JS • Mobile-First</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project5.jpg" alt="Restaurant Website" />
                        </div>
                        <div class="project-content">
                            <h3>Restaurant Website</h3>
                            <p>Fully responsive restaurant site ak online menu, reservations system ak optimized pou mobile ordering experience.</p>
                            <div class="project-tech">HTML • CSS • JS • Media Queries</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <img src="project6.jpg" alt="Portfolio Template" />
                        </div>
                        <div class="project-content">
                            <h3>Portfolio Template</h3>
                            <p>Responsive portfolio template ak dark/light themes, smooth animations ak cross-device compatibility pou developers.</p>
                            <div class="project-tech">CSS Variables • Flexbox • Responsive • Animations</div>
                            <a href="#" class="project-link">Gade Pwojè</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    
    <!-- Responsive Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Portfolio Mwen</h3>
                    <p>Responsive web developer ki dedye ak mobile-first approach ak cross-device experiences.</p>
                </div>
                <div class="footer-links">
                    <a href="#" class="social-link">GitHub</a>
                    <a href="#" class="social-link">LinkedIn</a>
                    <a href="#" class="social-link">Twitter</a>
                    <a href="#" class="social-link">Email</a>
                </div>
                <div class="footer-copy">
                    <p>&copy; 2024 Portfolio Mwen. Responsive ak Mobile-Optimized.</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    starterCss: `/* Semèn 7 - Responsive Design ak Media Queries */

/* ===== MOBILE-FIRST BASE STYLES ===== */
/* Default styles pou mobile devices (320px - 767px) */

/* CSS Reset ak Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    background-color: #fdfdfd;
    line-height: 1.6;
    font-size: 16px;
}

/* Container responsive */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Typography - Mobile First */
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
}

h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
}

/* ===== RESPONSIVE HEADER ===== */
.header {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
}

.header-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}

.logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
}

/* Mobile Navigation - Vertical */
.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav-menu a {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
}

.nav-menu a:hover {
    background: #f0f0f0;
    color: #333;
    border-color: #007bff;
}

/* ===== RESPONSIVE HERO SECTION ===== */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 3rem 0;
}

.hero-content {
    max-width: 600px;
}

.hero h1 {
    color: white;
    margin-bottom: 1rem;
}

.hero-text {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #f0f0f0;
}

/* Mobile CTA Buttons */
.cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    min-height: 44px;
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
}

.btn-primary {
    background: #ffd43b;
    color: #333;
}

.btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* ===== RESPONSIVE MAIN CONTENT ===== */
.main-content {
    padding: 3rem 0;
}

/* About Section - Mobile */
.about-section {
    margin-bottom: 3rem;
}

.about-section h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.6rem;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
}

/* Responsive Profile Photo */
.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #007bff;
    object-fit: cover;
    margin: 0 auto;
    display: block;
}

.about-text p {
    max-width: 100%;
}

/* ===== RESPONSIVE PROJECT GRID ===== */
.work-section {
    background: #f8f9fa;
    padding: 3rem 1rem;
    margin: 2rem -1rem 0;
}

.work-section h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.6rem;
}

/* Mobile: 1 Column Grid */
.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
}

.project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border-color: #007bff;
}

/* Responsive Project Images */
.project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: #333;
}

.project-content p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
}

.project-tech {
    font-size: 0.8rem;
    color: #007bff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}

.project-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #0056b3;
    text-decoration: underline;
}

/* ===== RESPONSIVE FOOTER ===== */
.footer {
    background: #222;
    color: white;
    padding: 2rem 0;
    margin-top: 3rem;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
}

.footer-info h3 {
    color: #ffd43b;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.footer-info p {
    color: #ccc;
    font-size: 0.9rem;
    margin: 0;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.social-link {
    color: #ccc;
    text-decoration: none;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 1px solid #444;
    min-height: 44px;
    display: flex;
    align-items: center;
}

.social-link:hover {
    background: #333;
    color: #ffd43b;
    border-color: #ffd43b;
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

/* ===== TABLET STYLES (768px ak pi gwo) ===== */
@media (min-width: 768px) {
    /* Container ak Typography adjustments */
    .container {
        padding: 0 2rem;
    }
    
    h1 {
        font-size: 2.5rem;
    }
    
    h2 {
        font-size: 1.8rem;
    }
    
    h3 {
        font-size: 1.3rem;
    }
    
    p {
        font-size: 1.1rem;
        line-height: 1.7;
    }
    
    /* Header ak Navigation */
    .header-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    
    .logo {
        font-size: 1.5rem;
    }
    
    /* Tablet Navigation - Horizontal */
    .nav-menu {
        flex-direction: row;
        gap: 1rem;
    }
    
    .nav-menu a {
        padding: 0.5rem 1rem;
        border: none;
        background: transparent;
    }
    
    .nav-menu a:hover {
        background: #f0f0f0;
    }
    
    /* Hero Section */
    .hero {
        min-height: 80vh;
        padding: 4rem 0;
    }
    
    .hero h1 {
        font-size: 2.8rem;
    }
    
    .hero-text {
        font-size: 1.2rem;
    }
    
    /* CTA Buttons - Horizontal */
    .cta-buttons {
        flex-direction: row;
        gap: 1.5rem;
        justify-content: center;
    }
    
    /* About Section */
    .about-content {
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        text-align: left;
    }
    
    .profile-photo {
        width: 250px;
        height: 250px;
        flex-shrink: 0;
    }
    
    .about-text {
        flex: 1;
    }
    
    /* Projects Grid - 2 Columns */
    .projects-grid {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.5rem;
        max-width: 900px;
        justify-content: center;
    }
    
    .project-card {
        flex: 1 1 calc(50% - 0.75rem);
        max-width: calc(50% - 0.75rem);
    }
    
    .project-image {
        height: 220px;
    }
    
    /* Footer */
    .footer-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        flex-wrap: wrap;
    }
    
    .footer-links {
        gap: 1.5rem;
    }
}

/* ===== DESKTOP STYLES (1024px ak pi gwo) ===== */
@media (min-width: 1024px) {
    /* Container ak Typography */
    .container {
        padding: 0 3rem;
    }
    
    h1 {
        font-size: 3.2rem;
    }
    
    h2 {
        font-size: 2.2rem;
    }
    
    p {
        font-size: 1.2rem;
        line-height: 1.8;
    }
    
    /* Header ak Navigation */
    .nav-menu {
        gap: 2rem;
    }
    
    .nav-menu a {
        font-size: 1rem;
        padding: 0.75rem 1.25rem;
    }
    
    /* Hero Section */
    .hero {
        min-height: 85vh;
        padding: 5rem 0;
    }
    
    .hero h1 {
        font-size: 3.5rem;
    }
    
    .hero-text {
        font-size: 1.3rem;
    }
    
    /* CTA Buttons */
    .cta-buttons {
        gap: 2rem;
    }
    
    .btn {
        padding: 1rem 2rem;
        font-size: 1.1rem;
    }
    
    /* About Section */
    .about-content {
        gap: 3rem;
    }
    
    .profile-photo {
        width: 300px;
        height: 300px;
    }
    
    /* Projects Grid - 3 Columns */
    .projects-grid {
        gap: 2rem;
        max-width: 1200px;
    }
    
    .project-card {
        flex: 1 1 calc(33.333% - 1.33rem);
        max-width: calc(33.333% - 1.33rem);
    }
    
    .project-image {
        height: 240px;
    }
    
    .project-content {
        padding: 2rem;
    }
    
    .project-content h3 {
        font-size: 1.3rem;
    }
    
    .project-content p {
        font-size: 1rem;
    }
    
    /* Footer */
    .footer {
        padding: 3rem 0;
    }
    
    .footer-links {
        gap: 2rem;
    }
    
    .social-link {
        font-size: 1rem;
        padding: 1rem 1.5rem;
    }
}

/* ===== LARGE DESKTOP STYLES (1440px ak pi gwo) ===== */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
    
    .hero h1 {
        font-size: 4rem;
    }
    
    .projects-grid {
        max-width: 1400px;
    }
    
    .project-card {
        max-width: 400px;
    }
}

/* ===== UTILITY CLASSES ===== */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Print Styles */
@media print {
    .header, .footer, .cta-buttons {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.4;
    }
    
    h1, h2, h3 {
        page-break-after: avoid;
    }
}`,
    expectedResultHt: 'Yon portfolio ki konplètman responsive ak mobile-first approach, ak layouts ki adapte ak smooth ant telefòn, tablet ak desktop, ak typography ak navigation optimized pou chak aparèy.',
    expectedResultFr: 'Un portfolio complètement responsive avec approche mobile-first, avec layouts qui s\'adaptent en douceur entre téléphone, tablette et desktop, avec typography et navigation optimisées pour chaque appareil.',
    completionMessageHt: '🎉 Félicitations! Portfolio ou an kounye a konplètman responsive ak mobile-optimized! Semèn kap vini an nou pral fè midterm project la kote nou pral combine tou 7 semèn yo nan yon pwojè konplè ak pwofesyonèl.',
    completionMessageFr: '🎉 Félicitations! Votre portfolio est maintenant complètement responsive et mobile-optimized! La semaine prochaine nous ferons le projet midterm où nous combinerons toutes les 7 semaines en un projet complet et professionnel.',
    tipsHt: [
      'Teste sou DevTools ak aparèy reyèl yo pou w asire w responsive behavior bon',
      'Mobile-first toujou pi bon - kòmanse ak pi ti ekran an',
      'Touch targets yo dwe omwen 44px pou mobile usability',
      'Itilize fluid typography ak clamp() pou smooth scaling'
    ],
    tipsFr: [
      'Tester sur DevTools et vrais appareils pour assurer bon comportement responsive',
      'Mobile-first toujours meilleur - commencer par plus petit écran',
      'Touch targets doivent être au moins 44px pour usabilité mobile',
      'Utiliser typography fluide avec clamp() pour scaling en douceur'
    ]
  },
  {
    week: 14,
    titleHt: 'Asset Pipeline ak External Resources',
    titleFr: 'Pipeline d\'Assets et Ressources Externes', 
    objectiveHt: 'Transform portfolio ou an nan yon pwojè ki gen style pwofesyonèl ak external assets yo ki òganize byen.',
    objectiveFr: 'Transformer votre portfolio en projet professionnel stylé avec des assets externes bien organisés.',
    instructionsHt: [
      'Kreye estrikti dosye pwofesyonèl la: /css, /images, /icons, /fonts',
      'Ajoute yon logo SVG nan header ak responsive sizing',
      'Integrate background hero image ak proper optimization',
      'Ajoute social media ikòn yo ak hover effects',
      'Import ak configure 2-3 Google Fonts ak proper weights',
      'Separate CSS la nan variables.css ak main.css',
      'Optimize images pou web ak implement lazy loading'
    ],
    instructionsFr: [
      'Créer la structure de dossiers professionnelle : /css, /images, /icons, /fonts',
      'Ajouter un logo SVG dans header avec sizing responsive',
      'Intégrer image hero background avec optimisation appropriée',
      'Ajouter icônes social media avec effets de hover',
      'Importer et configurer 2-3 Google Fonts avec poids appropriés',
      'Séparer CSS en variables.css et main.css',
      'Optimiser images pour web et implémenter lazy loading'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Pwofesyonèl</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <!-- Header ak Logo -->
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <img src="images/logo.svg" alt="Logo" class="logo" width="40" height="40">
                <span class="brand-text">DevPortfolio</span>
            </div>
            <ul class="nav-links">
                <li><a href="#about"><i class="fa-solid fa-user"></i> About</a></li>
                <li><a href="#work"><i class="fa-solid fa-briefcase"></i> Work</a></li>
                <li><a href="#contact"><i class="fa-solid fa-envelope"></i> Contact</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">
                <i class="fa-solid fa-moon"></i>
            </button>
        </nav>
    </header>

    <!-- Hero Section ak Background Image -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="title-line">Mwen se</span>
                <span class="title-highlight">Developer</span>
                <span class="title-line">Kreyatè</span>
            </h1>
            <p class="hero-description">
                Mwen kreye eksperyans dijital yo ki gen sans ak beautiful interfaces ki solve pwoblèm reyèl yo.
            </p>
            <div class="hero-cta">
                <a href="#work" class="btn btn-primary">
                    <i class="fa-solid fa-rocket"></i>
                    Gade Travay Mwen
                </a>
                <a href="#contact" class="btn btn-outline">
                    <i class="fa-solid fa-paper-plane"></i>
                    Pale ak Mwen
                </a>
            </div>
            
            <!-- Social Links -->
            <div class="social-links">
                <a href="#" class="social-link" aria-label="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" class="social-link" aria-label="Email">
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </section>

    <!-- About Section ak Profile Photo -->
    <section id="about" class="section about-section">
        <div class="container">
            <h2 class="section-title">About Mwen</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Mwen se yon passionate web developer ak background nan design ak user experience.</p>
                    <p>Mwen konsantre sou modern web technologies ak accessibility best practices.</p>
                </div>
                <div class="about-image">
                    <img src="images/profile.jpg" alt="Profile Photo" class="profile-photo" loading="lazy">
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Grid ak Ikòn -->
    <section class="section skills-section">
        <div class="container">
            <h2 class="section-title">Skills Mwen</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <i class="fa-brands fa-html5 skill-icon"></i>
                    <h3>HTML5</h3>
                    <p>Semantic markup ak accessibility</p>
                </div>
                <div class="skill-card">
                    <i class="fa-brands fa-css3-alt skill-icon"></i>
                    <h3>CSS3</h3>
                    <p>Modern layouts ak animations</p>
                </div>
                <div class="skill-card">
                    <i class="fa-brands fa-js skill-icon"></i>
                    <h3>JavaScript</h3>
                    <p>ES6+ ak modern frameworks</p>
                </div>
                <div class="skill-card">
                    <i class="fa-brands fa-react skill-icon"></i>
                    <h3>React</h3>
                    <p>Component-based architecture</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer ak Additional Links -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="images/logo.svg" alt="Logo" class="footer-logo" width="30" height="30">
                    <p>Building the future, one project at a time.</p>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </div>
                
                <div class="footer-social">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                        <a href="mailto:hello@example.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Mon Nom. All rights reserved.</p>
                <p>Built with <i class="fa-solid fa-heart" style="color: #e25555;"></i> using HTML & CSS</p>
            </div>
        </div>
    </footer>

    <script>
        // Theme toggle functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            icon.className = newTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        const icon = themeToggle.querySelector('i');
        icon.className = savedTheme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }

        // Scroll indicator animation
        const scrollIndicator = document.querySelector('.scroll-indicator');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    </script>
</body>
</html>`,
    starterCss: `/* This CSS has been split into variables.css and main.css for better organization */

/* variables.css - Design tokens and theme variables */
:root {
  /* Colors */
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  
  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Other design tokens... */
}

/* main.css - Component and layout styles */
body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--bg-primary);
}

/* Navigation with logo and icons */
.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

/* Hero with background image */
.hero {
  background: linear-gradient(rgba(37, 99, 235, 0.8), rgba(124, 58, 237, 0.8)),
              url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

/* Social icons with hover effects */
.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
}`,
    expectedResultHt: 'Yon portfolio pwofesyonèl ak external assets ki òganize byen: logo SVG ki responsive, background images ki optimize, social media ikòn ak hover effects, Google Fonts ki import ak weights ki apwopriye, ak CSS ki divize nan dosye ki logik yo.',
    expectedResultFr: 'Un portfolio professionnel avec des assets externes bien organisés : logo SVG responsive, images de fond optimisées, icônes social media avec effets hover, Google Fonts importées avec poids appropriés, et CSS divisé en fichiers logiques.',
    tipsHt: [
      'Optimize imaj yo pou web ak formats ki apwopriye (WebP, AVIF pou modern browsers)',
      'Sètvi ak preconnect pou Google Fonts pou performance pi bon',
      'Organize assets yo nan dosye ki klè ak naming conventions ki konsistan',
      'Test accessibility ak keyboard navigation ak screen readers',
      'Implement lazy loading pou imaj yo ki pa nan viewport la imedyatman',
      'Use SVG pou ikòn ak logo yo paske yo scalable ak editable',
      'Consider CDN pou external assets yo pou performance pi bon'
    ],
    tipsFr: [
      'Optimiser images pour web avec formats appropriés (WebP, AVIF pour navigateurs modernes)',
      'Utiliser preconnect pour Google Fonts pour meilleures performances',
      'Organiser assets en dossiers clairs avec conventions de nommage cohérentes',
      'Tester accessibilité avec navigation clavier et lecteurs d\'écran',
      'Implémenter lazy loading pour images hors viewport initial',
      'Utiliser SVG pour icônes et logos car évolutifs et éditables',
      'Considérer CDN pour assets externes pour meilleures performances'
    ]
  },
  {
    week: 15,
    titleHt: 'Pwojè Final - "My Portfolio — Final Edition"',
    titleFr: 'Projet Final - "My Portfolio — Final Edition"',
    objectiveHt: 'Kreye yon sit entènèt konplè ki montre tout teknik yo ou aprann nan 14 semèn yo ak yon pwojè portfolio pwofesyonèl ki prè pou prezante.',
    objectiveFr: 'Créer un site web complet qui démontre toutes les techniques apprises en 14 semaines avec un projet portfolio professionnel prêt à présenter.',
    instructionsHt: [
      'Revise ak optimize tout seksyon yo: Header, Hero, About, Projects, Contact, Footer',
      'Implement semantic HTML ak accessibility ki konplè (aria-labels, alt text, keyboard navigation)',
      'Finalize responsive design ak teste sou mobile, tablet ak desktop',
      'Add smooth scrolling, animations ak micro-interactions pou polish',
      'Optimize performance ak lazy loading, image compression ak code minification',
      'Test compatibility sou diferan navigatè yo (Chrome, Firefox, Safari, Edge)',
      'Validate HTML ak CSS code ak W3C validators',
      'Deploy pwojè a sou GitHub Pages oswa Netlify',
      'Create documentation ak case study pou portfolio ou',
      'Prepare presentation ak demo pou potential employers'
    ],
    instructionsFr: [
      'Réviser et optimiser toutes sections : Header, Hero, About, Projects, Contact, Footer',
      'Implémenter HTML sémantique et accessibilité complète (aria-labels, alt text, navigation clavier)',
      'Finaliser design responsive et tester sur mobile, tablette et desktop',
      'Ajouter défilement fluide, animations et micro-interactions pour polir',
      'Optimiser performance avec lazy loading, compression d\'images et minification code',
      'Tester compatibilité sur différents navigateurs (Chrome, Firefox, Safari, Edge)',
      'Valider code HTML et CSS avec validateurs W3C',
      'Déployer projet sur GitHub Pages ou Netlify',
      'Créer documentation et étude de cas pour portfolio',
      'Préparer présentation et démo pour employeurs potentiels'
    ],
    starterHtml: `<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio pwofesyonèl - Web Developer ak Designer">
    <meta name="keywords" content="web developer, portfolio, HTML, CSS, responsive design">
    <meta name="author" content="Your Name">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="My Portfolio — Final Edition">
    <meta property="og:description" content="Portfolio pwofesyonèl ki montre pwojè yo ak ekspètiz nan web development">
    <meta property="og:image" content="images/og-image.jpg">
    <meta property="og:url" content="https://yoursite.com">
    <meta property="og:type" content="website">
    
    <title>My Portfolio — Final Edition</title>
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
    <link rel="icon" type="image/png" href="images/favicon.png">
</head>
<body>
    <!-- Skip to main content for accessibility -->
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <!-- Header ak Navigation -->
    <header id="header" class="header">
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="#home" aria-label="Retourner nan tèt paj la">
                        <svg class="logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- Your logo SVG content -->
                            <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1"/>
                            <path d="M15 15h10v10H15V15z" fill="currentColor"/>
                        </svg>
                        <span class="logo-text">My Portfolio</span>
                    </a>
                </div>
                
                <ul class="nav-menu" role="menubar">
                    <li class="nav-item" role="none">
                        <a href="#about" class="nav-link" role="menuitem">About</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a href="#projects" class="nav-link" role="menuitem">Projects</a>
                    </li>
                    <li class="nav-item" role="none">
                        <a href="#contact" class="nav-link" role="menuitem">Contact</a>
                    </li>
                </ul>
                
                <!-- Mobile Menu Toggle -->
                <button class="nav-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main id="main">
        <!-- Hero Section -->
        <section id="hero" class="hero" aria-label="Hero section">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        Welcome to My Portfolio
                        <span class="highlight">Final Edition</span>
                    </h1>
                    <p class="hero-subtitle">
                        Mwen se yon developer ki passionate k ap kreye eksperyans web ki etonan yo
                    </p>
                    <div class="hero-buttons">
                        <a href="#projects" class="btn btn-primary">View My Work</a>
                        <a href="#contact" class="btn btn-outline">Get In Touch</a>
                    </div>
                </div>
            </div>
            
            <!-- Animated scroll indicator -->
            <div class="scroll-indicator">
                <div class="scroll-arrow"></div>
            </div>
        </section>
        
        <!-- About Section -->
        <section id="about" class="section" aria-labelledby="about-title">
            <div class="container">
                <h2 id="about-title" class="section-title">About Me</h2>
                <!-- About content will be built in exercises -->
            </div>
        </section>
        
        <!-- Projects Section -->  
        <section id="projects" class="section" aria-labelledby="projects-title">
            <div class="container">
                <h2 id="projects-title" class="section-title">My Projects</h2>
                <!-- Projects grid will be built in exercises -->
            </div>
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="section" aria-labelledby="contact-title">
            <div class="container">
                <h2 id="contact-title" class="section-title">Get In Touch</h2>
                <!-- Contact form will be built in exercises -->
            </div>
        </section>
    </main>
    
    <!-- Footer -->
    <footer id="footer" class="footer">
        <div class="container">
            <!-- Footer content will be built in exercises -->
        </div>
    </footer>
    
    <!-- Back to Top Button -->
    <button id="backToTop" class="back-to-top" aria-label="Back to top">
        <i class="fas fa-chevron-up" aria-hidden="true"></i>
    </button>
    
    <!-- JavaScript -->
    <script src="js/main.js"></script>
</body>
</html>`,
    starterCss: `/* Final CSS compilation will combine all previous weeks */
/* This is a comprehensive starter that students build upon */

/* CSS Variables - Complete Design System */
:root {
  /* Colors */
  --primary-color: #3b82f6;
  --primary-dark: #1e40af;
  --secondary-color: #8b5cf6;
  --accent-color: #f59e0b;
  --success-color: #10b981;
  --danger-color: #ef4444;
  --warning-color: #f59e0b;
  
  /* Neutrals */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Typography */
  --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
  --font-heading: 'Poppins', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  
  /* Font Sizes */
  --text-xs: clamp(0.75rem, 0.95vw, 0.875rem);
  --text-sm: clamp(0.875rem, 1.1vw, 1rem);
  --text-base: clamp(1rem, 1.2vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.4vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.6vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 2vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 2.5vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 3vw, 3rem);
  --text-5xl: clamp(3rem, 4vw, 4rem);
  
  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Borders */
  --border-radius: 8px;
  --border-radius-lg: 12px;
  --border-radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Z-index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
}

/* Reset ak Base Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed header */
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--gray-800);
  background-color: var(--white);
  overflow-x: hidden;
}

/* Accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: var(--z-toast);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 6px;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Base Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  color: var(--gray-900);
  margin-bottom: var(--space-sm);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }
h5 { font-size: var(--text-lg); }
h6 { font-size: var(--text-base); }

p {
  margin-bottom: var(--space-md);
  color: var(--gray-700);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover,
a:focus {
  color: var(--primary-dark);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Utility Classes */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.section {
  padding: var(--space-3xl) 0;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Animation Utilities */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}

/* Print styles */
@media print {
  .no-print,
  .nav-toggle,
  .back-to-top {
    display: none !important;
  }
  
  body {
    background: white;
    color: black;
  }
  
  a {
    color: black;
    text-decoration: underline;
  }
}`,
    expectedResultHt: `Nan fen semèn sa a, ou ap gen:
• Yon sit entènèt portfolio konplè ak 5+ seksyon yo ki fonksyone
• Semantic HTML ki aksesib ak SEO-optimized
• Sistèm design ki konsistan ak CSS Variables
• Layout responsive ki travay sou tout aparèy yo
• Smooth animations ak micro-interactions pwofesyonèl yo
• Performance optimized ak best practices
• Code ki validated ak ready pou deployment
• Documentation ak case study pou portfolio ou
• Pwojè ki prè pou prezante bay potential employers yo`,
    expectedResultFr: `À la fin de cette semaine, vous aurez :
• Un site web portfolio complet avec 5+ sections fonctionnelles
• HTML sémantique accessible et optimisé SEO
• Système de design cohérent avec Variables CSS
• Layout responsive qui fonctionne sur tous appareils
• Animations fluides et micro-interactions professionnelles
• Performance optimisée avec meilleures pratiques
• Code validé et prêt pour déploiement
• Documentation et étude de cas pour portfolio
• Projet prêt à présenter aux employeurs potentiels`,
    tipsHt: [
      'Teste pwojè ou a sou tout aparèy ak navigatè yo avan ou deploy li',
      'Itilize semantic HTML ak ARIA labels pou accessibility ki pi bon',
      'Optimize imaj yo ak implement lazy loading pou vitès loading',
      'Validate HTML ak CSS code ou ak W3C validators',
      'Create responsive breakpoints ki make sense pou content ou',
      'Use performance tools tankou Lighthouse pou optimize pwojè a',
      'Implement proper meta tags pou SEO ak social sharing',
      'Document code ou ak komentè yo ki klè ak meaningful',
      'Test keyboard navigation ak screen reader compatibility',
      'Deploy sou platform tankou GitHub Pages, Netlify oswa Vercel',
      'Create case study ki eksplike process ak decisions yo ou te fè',
      'Prepare elevator pitch pou prezante pwojè a nan entèvyou yo'
    ],
    tipsFr: [
      'Tester projet sur tous appareils et navigateurs avant déploiement',
      'Utiliser HTML sémantique et labels ARIA pour meilleure accessibilité',
      'Optimiser images et implémenter lazy loading pour vitesse de chargement',
      'Valider code HTML et CSS avec validateurs W3C',
      'Créer breakpoints responsifs qui ont du sens pour votre contenu',
      'Utiliser outils de performance comme Lighthouse pour optimiser projet',
      'Implémenter meta tags appropriés pour SEO et partage social',
      'Documenter code avec commentaires clairs et significatifs',
      'Tester navigation clavier et compatibilité lecteur d\'écran',
      'Déployer sur plateforme comme GitHub Pages, Netlify ou Vercel',
      'Créer étude de cas expliquant processus et décisions prises',
      'Préparer elevator pitch pour présenter projet en entretiens'
    ]
  }
];

// Weeks 8-13 and 15 will continue the progressive project...