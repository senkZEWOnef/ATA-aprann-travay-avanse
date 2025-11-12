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
  }
];

// Weeks 7-15 will continue the progressive project...