import { HtmlCssCard } from './htmlCssWeek1Cards';

const htmlCssWeek14Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Òganizasyon Asset ak Dosye',
    titleFr: 'Organisation des Assets et Dossiers',
    contentHt: `Yon projè pwofesyonèl bezwen yon estrikti klè pou òganize tout asset yo (foto, ikòn, font, ak CSS).

Estrikti dosye pwofesyonèl:
- /css - tout dosye CSS yo
- /images - foto ak imaj yo  
- /icons - ikòn SVG yo
- /fonts - font ki pa soti nan CDN yo

Avantaj estrikti sa a:
• Pa gen melanje dosye
• Pi fasil pou jwenn bagay yo
• Kolaborasyon pi bon ak lòt devlopè yo
• Maintenance pi fasil`,
    contentFr: `Un projet professionnel nécessite une structure claire pour organiser tous les assets (images, icônes, polices, et CSS).

Structure de dossiers professionnelle :
- /css - tous les fichiers CSS
- /images - photos et images
- /icons - icônes SVG  
- /fonts - polices non-CDN

Avantages de cette structure :
• Pas de mélange de fichiers
• Plus facile de trouver les éléments
• Meilleure collaboration avec d'autres développeurs
• Maintenance plus facile`,
    codeExample: `project/
  index.html
  css/
    style.css
    variables.css
    components.css
  images/
    hero.jpg
    profile.png
    logo.svg
  icons/
    github.svg
    linkedin.svg
    mail.svg
  fonts/
    custom-font.woff2`
  },

  {
    id: 2,
    type: 'lesson',
    titleHt: 'Itilize Imaj Ekstèn',
    titleFr: 'Utiliser des Images Externes',
    contentHt: `Imaj yo se kè nan yon sit entèrè. Gen plizyè fason pou ajoute imaj nan sit ou an.

Metòd yo:
1. <img> tag - pou imaj ki nan kontni an
2. background-image - pou dekorasyon ak layè yo
3. Responsive images - ki adapte ak gwandè ekran yo

Règ enpòtan yo:
• Toujou mete alt text pou aksè
• Fè imaj yo responsive ak max-width: 100%
• Sètvi ak format yo ki apwopriye (JPG pou foto, PNG pou transparency, SVG pou logo)`,
    contentFr: `Les images sont au cœur d'un site attractif. Il y a plusieurs façons d'ajouter des images à votre site.

Méthodes :
1. Balise <img> - pour les images de contenu
2. background-image - pour la décoration et les couches
3. Images responsives - qui s'adaptent aux tailles d'écran

Règles importantes :
• Toujours mettre un alt text pour l'accessibilité
• Rendre les images responsives avec max-width: 100%
• Utiliser les bons formats (JPG pour photos, PNG pour transparence, SVG pour logos)`,
    codeExample: `<!-- Image de contenu -->
<img src="images/profile.jpg" alt="Photo de profil" class="profile-img">

<!-- Image responsive -->
<img src="images/hero.jpg" alt="Image héro" class="hero-img">

/* CSS pour images responsives */
img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
}

/* Image de fond */
.hero-section {
  background-image: url("../images/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`
  },

  {
    id: 3,
    type: 'lesson',
    titleHt: 'SVG vs PNG - Poukisa SVG Pi Bon',
    titleFr: 'SVG vs PNG - Pourquoi SVG est Meilleur',
    contentHt: `SVG (Scalable Vector Graphics) pi bon pase PNG pou ikòn ak logo yo.

Avantaj SVG:
• Vektè - klè nan tout gwandè
• Lightweight - dosye yo pi piti
• Editable ak CSS - ou ka chanje koulè ak style
• Accessible - aksè pi bon ak screen reader yo
• Performance - load pi vit

PNG avantaj:
• Bon pou foto ak imaj konplèks yo
• Support nan tout browser yo

SVG se chwa ki pi bon pou ikòn, logo, ak ilustrasyon senp yo.`,
    contentFr: `SVG (Scalable Vector Graphics) est supérieur aux PNG pour les icônes et logos.

Avantages du SVG :
• Vectoriel - net à toutes les tailles
• Léger - fichiers plus petits
• Éditable avec CSS - changement de couleurs et styles
• Accessible - meilleur support pour screen readers
• Performance - chargement plus rapide

Avantages du PNG :
• Bon pour les photos et images complexes
• Support universel dans tous les navigateurs

SVG est le meilleur choix pour les icônes, logos, et illustrations simples.`,
    codeExample: `<!-- SVG inline (meilleur contrôle) -->
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
</svg>

<!-- SVG externe -->
<img src="icons/github.svg" alt="GitHub" width="30">

/* Styliser SVG avec CSS */
svg {
  fill: var(--dark);
  transition: fill 0.3s ease;
}

svg:hover {
  fill: var(--primary);
}

/* SVG dans background */
.icon {
  background-image: url("data:image/svg+xml,<svg>...</svg>");
}`
  },

  {
    id: 4,
    type: 'practice',
    titleHt: 'Pratik: Ajoute Imaj ak SVG',
    titleFr: 'Pratique: Ajouter Images et SVG',
    contentHt: 'Nan egzèsis sa yo, ou pral aprann kijan pou ajoute ak jere imaj ak ikòn SVG yo nan sit ou an.',
    contentFr: 'Dans ces exercices, vous apprendrez à ajouter et gérer des images et icônes SVG dans votre site.',
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon estrikti dosye ak /images ak /icons. Ajoute yon imaj hero ak 3 ikòn SVG.',
        instructionFr: 'Créez une structure de dossiers avec /images et /icons. Ajoutez une image hero et 3 icônes SVG.',
        starterCode: `<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
  <title>Portfolio avec Assets</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <!-- Ajouter logo ici -->
  </header>
  
  <section class="hero">
    <!-- Ajouter image de fond -->
    <h1>Mon Portfolio</h1>
  </section>
  
  <section class="social">
    <!-- Ajouter 3 icônes SVG -->
  </section>
</body>
</html>`,
        solution: `<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
  <title>Portfolio avec Assets</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <img src="images/logo.svg" alt="Logo" class="logo">
  </header>
  
  <section class="hero">
    <h1>Mon Portfolio</h1>
  </section>
  
  <section class="social">
    <img src="icons/github.svg" alt="GitHub" class="icon">
    <img src="icons/linkedin.svg" alt="LinkedIn" class="icon">
    <img src="icons/email.svg" alt="Email" class="icon">
  </section>
</body>
</html>

/* CSS */
.logo {
  height: 40px;
}

.hero {
  background-image: url("../images/hero.jpg");
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  text-align: center;
}

.social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.icon {
  width: 30px;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.2);
}`
      }
    ]
  },

  {
    id: 5,
    type: 'lesson',
    titleHt: 'Font Awesome - Bibliyotèk Ikòn',
    titleFr: 'Font Awesome - Bibliothèque d\'Icônes',
    contentHt: `Font Awesome se bibliyotèk ikòn ki pi popilè nan mond lan. Li gen plis pase 1,600 ikòn gratis ak 7,000+ ikòn premium.

Avantaj Font Awesome:
• Kantite ikòn yo anpil
• Facile pou itilize ak class yo
• Konsèy nan CSS
• Update regilyèman

Kijan pou itilize:
1. Include CDN link nan <head>
2. Sètvi ak class yo pou ajoute ikòn
3. Style yo ak CSS

Tip yo:
• Sètvi ak fa-solid pou ikòn solid yo
• fa-brands pou brand yo
• fa-regular pou ikòn ki vid yo`,
    contentFr: `Font Awesome est la bibliothèque d'icônes la plus populaire au monde. Elle offre plus de 1,600 icônes gratuites et 7,000+ icônes premium.

Avantages de Font Awesome :
• Grande quantité d'icônes
• Facile à utiliser avec les classes
• Cohérent en CSS
• Mis à jour régulièrement

Comment utiliser :
1. Inclure le lien CDN dans <head>
2. Utiliser les classes pour ajouter des icônes
3. Les styliser avec CSS

Astuces :
• Utiliser fa-solid pour les icônes pleines
• fa-brands pour les marques
• fa-regular pour les icônes creuses`,
    codeExample: `<!-- CDN Link -->
<link rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Utilisation -->
<i class="fa-solid fa-envelope"></i>
<i class="fa-brands fa-github"></i>
<i class="fa-solid fa-phone"></i>
<i class="fa-regular fa-heart"></i>

/* CSS pour styliser */
i {
  font-size: 1.5rem;
  color: var(--dark);
  transition: color 0.3s ease;
}

i:hover {
  color: var(--primary);
}

/* Classes utilitaires */
.fa-lg { font-size: 1.33em; }
.fa-2x { font-size: 2em; }
.fa-3x { font-size: 3em; }`
  },

  {
    id: 6,
    type: 'lesson',
    titleHt: 'Google Fonts Avanse',
    titleFr: 'Google Fonts Avancé',
    contentHt: `Google Fonts gen plis pase 1,400 font gratis. Nan semèn sa a, nou pral aprann kijan pou sètvi ak yo nan yon fason pi pwofesyonèl.

Konbinezon font yo:
• Heading font (serif oswa san-serif bold)
• Body font (san-serif ki fasil pou li)
• Accent font (pou detay ak bouton yo)

Best practices:
• Pa itilize plis pase 2-3 font famiy
• Sètvi ak weight yo ki varye
• Include display=swap pou performance

Kijan pou chwazi:
1. Kòmanse ak yon font pou heading yo
2. Chwazi yon font konplemente pou body text
3. Test nan divè gwandè yo`,
    contentFr: `Google Fonts offre plus de 1,400 polices gratuites. Cette semaine, nous apprendrons à les utiliser de façon plus professionnelle.

Combinaisons de polices :
• Police de titre (serif ou sans-serif gras)
• Police de corps (sans-serif facile à lire)
• Police d'accent (pour détails et boutons)

Meilleures pratiques :
• N'utilisez pas plus de 2-3 familles de polices
• Utilisez des graisses variées
• Inclure display=swap pour la performance

Comment choisir :
1. Commencer par une police pour les titres
2. Choisir une police complémentaire pour le corps
3. Tester à différentes tailles`,
    codeExample: `<!-- CDN Link avec poids multiples -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">

/* Application */
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

body, p, a, li {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.btn, .nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

/* Variables pour fonts */
:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --weight-normal: 400;
  --weight-medium: 600;
  --weight-bold: 700;
}`
  },

  {
    id: 7,
    type: 'practice',
    titleHt: 'Pratik: Font Awesome ak Google Fonts',
    titleFr: 'Pratique: Font Awesome et Google Fonts',
    contentHt: 'Pratik kijan pou konbine Font Awesome ak Google Fonts pou kreye yon entèfas ki gen style.',
    contentFr: 'Pratiquez comment combiner Font Awesome et Google Fonts pour créer une interface stylée.',
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute Font Awesome ak 2 Google Fonts. Kreye yon navigation ak ikòn ak tekst.',
        instructionFr: 'Ajoutez Font Awesome et 2 Google Fonts. Créez une navigation avec icônes et texte.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Navigation avec Ikòn</title>
  <!-- Ajouter Font Awesome ak Google Fonts -->
</head>
<body>
  <nav class="navbar">
    <!-- Ajouter logo ak navigation -->
  </nav>
  
  <footer class="footer">
    <!-- Ajouter social links ak ikòn -->
  </footer>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
  <title>Navigation avec Ikòn</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .logo {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav-links a:hover {
      color: #007bff;
    }
    
    .footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 2rem;
      margin-top: 3rem;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .social-links a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s;
    }
    
    .social-links a:hover {
      color: #007bff;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">
      <i class="fa-solid fa-code"></i> DevPortfolio
    </div>
    <ul class="nav-links">
      <li><a href="#"><i class="fa-solid fa-home"></i> Accueil</a></li>
      <li><a href="#"><i class="fa-solid fa-user"></i> À propos</a></li>
      <li><a href="#"><i class="fa-solid fa-briefcase"></i> Projets</a></li>
      <li><a href="#"><i class="fa-solid fa-envelope"></i> Contact</a></li>
    </ul>
  </nav>
  
  <footer class="footer">
    <div class="social-links">
      <a href="#"><i class="fa-brands fa-github"></i></a>
      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>
    <p>&copy; 2024 Mon Portfolio</p>
  </footer>
</body>
</html>`
      }
    ]
  },

  {
    id: 8,
    type: 'lesson',
    titleHt: 'Import Plizyè Dosye CSS',
    titleFr: 'Importer Plusieurs Fichiers CSS',
    contentHt: `Nan yon projè gwo, ou ka genyen plizyè dosye CSS yo pou òganize kòd ou an pi byen.

2 metòd yo:
1. @import - nan CSS la
2. <link> - nan HTML la

Avantaj @import:
• Tout import yo nan yon sèl dosye
• Òganizasyon pi klè

Avantaj <link>:
• Performance pi bon
• Load an paralèl
• Pa bloke rendering

Best practice: Sètvi ak <link> pou production, @import pou depo ak testing.

Òd la enpòtan: Variables → Reset → Layout → Components → Utilities`,
    contentFr: `Dans un gros projet, vous pouvez avoir plusieurs fichiers CSS pour mieux organiser votre code.

2 méthodes :
1. @import - dans le CSS
2. <link> - dans le HTML

Avantages @import :
• Tous les imports dans un seul fichier
• Organisation plus claire

Avantages <link> :
• Meilleures performances
• Chargement en parallèle
• Ne bloque pas le rendu

Meilleure pratique : Utiliser <link> pour la production, @import pour développement et tests.

L'ordre est important : Variables → Reset → Layout → Components → Utilities`,
    codeExample: `/* Méthode 1: @import dans style.css */
@import url("variables.css");
@import url("reset.css");
@import url("components.css");
@import url("utilities.css");

/* Contenu principal de style.css */
body {
  background: var(--bg-color);
}

<!-- Méthode 2: Plusieurs <link> dans HTML -->
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/utilities.css">

/* variables.css */
:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
}

/* reset.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`
  },

  {
    id: 9,
    type: 'quiz',
    titleHt: 'Quiz: External Assets',
    titleFr: 'Quiz: Assets Externes',
    contentHt: 'Test konesans ou sou assets ekstèn, SVG, ak òganizasyon dosye yo.',
    contentFr: 'Testez vos connaissances sur les assets externes, SVG, et l\'organisation des fichiers.',
    quiz: [
      {
        id: 1,
        questionHt: 'Poukisa SVG pi bon pase PNG pou ikòn yo?',
        questionFr: 'Pourquoi les SVG sont-ils meilleurs que les PNG pour les icônes?',
        options: [
          { ht: 'Yo pi koulè ak style', fr: 'Ils sont plus colorés et stylés' },
          { ht: 'Yo scalable ak editable ak CSS', fr: 'Ils sont évolutifs et éditables avec CSS' },
          { ht: 'Yo pi fasil pou load', fr: 'Ils sont plus faciles à charger' },
          { ht: 'Yo ki pi komen', fr: 'Ils sont plus courants' }
        ],
        correctAnswer: 1,
        explanationHt: 'SVG yo se vektè, kidonk yo scalable ak klè nan tout gwandè. Yo pi léger ak ou ka chanje koulè ak style yo ak CSS.',
        explanationFr: 'Les SVG sont vectoriels, donc évolutifs et nets à toutes tailles. Ils sont plus légers et vous pouvez modifier leurs couleurs et styles avec CSS.'
      },
      {
        id: 2,
        questionHt: 'Ki dosye ki ta dwe gen imaj yo?',
        questionFr: 'Quel dossier devrait contenir les images?',
        options: [
          { ht: '/assets', fr: '/assets' },
          { ht: '/images', fr: '/images' },
          { ht: '/media', fr: '/media' },
          { ht: '/files', fr: '/files' }
        ],
        correctAnswer: 1,
        explanationHt: 'Konvansyon an se /images pou tout foto ak imaj yo, /icons pou ikòn yo.',
        explanationFr: 'La convention est /images pour toutes les photos et images, /icons pour les icônes.'
      },
      {
        id: 3,
        questionHt: 'Ki sa @import fè?',
        questionFr: 'Que fait @import?',
        options: [
          { ht: 'Li load yon lòt dosye CSS', fr: 'Il charge un autre fichier CSS' },
          { ht: 'Li import JavaScript', fr: 'Il importe JavaScript' },
          { ht: 'Li ajoute font yo', fr: 'Il ajoute des polices' },
          { ht: 'Li reset CSS la', fr: 'Il remet à zéro le CSS' }
        ],
        correctAnswer: 0,
        explanationHt: '@import itilize pou load dosye CSS lòt yo nan yon dosye CSS.',
        explanationFr: '@import est utilisé pour charger d\'autres fichiers CSS dans un fichier CSS.'
      },
      {
        id: 4,
        questionHt: 'Ki meyè fason pou ajoute Google Font?',
        questionFr: 'Quelle est la meilleure façon d\'ajouter Google Fonts?',
        options: [
          { ht: '@import nan CSS', fr: '@import dans CSS' },
          { ht: '<link> tag nan HTML', fr: 'Balise <link> dans HTML' },
          { ht: 'JavaScript', fr: 'JavaScript' },
          { ht: 'Directly nan font folder', fr: 'Directement dans le dossier fonts' }
        ],
        correctAnswer: 1,
        explanationHt: '<link> tag pi bon pou performance paske li load an paralèl ak pa bloke rendering.',
        explanationFr: 'La balise <link> est meilleure pour les performances car elle charge en parallèle et ne bloque pas le rendu.'
      },
      {
        id: 5,
        questionHt: 'Vrai oswa Fo: CSS ka chanje koulè SVG inline yo.',
        questionFr: 'Vrai ou Faux: CSS peut changer la couleur des SVG inline.',
        options: [
          { ht: 'Vrai', fr: 'Vrai' },
          { ht: 'Fo', fr: 'Faux' }
        ],
        correctAnswer: 0,
        explanationHt: 'Vrai. CSS ka chanje koulè SVG inline yo ak pwopryete fill ak stroke yo.',
        explanationFr: 'Vrai. CSS peut changer la couleur des SVG inline avec les propriétés fill et stroke.'
      }
    ]
  },

  {
    id: 10,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè: Portfolio ak Assets Konplè',
    titleFr: 'Mini-Projet: Portfolio avec Assets Complets',
    contentHt: `Améliore portfolio ou an ak assets ekstèn ki pwofesyonèl.

Objektif yo:
✓ Ajoute yon imaj hero background
✓ Ajoute omwen 3 ikòn SVG oswa Font Awesome
✓ Ajoute yon logo nan header la
✓ Import omwen 1 Google Font adisyonèl
✓ Kreye yon dezyèm dosye CSS (variables.css oswa theme.css)
✓ Òganize tout assets yo nan dosye apwopriye yo

Estrikti dosye ki atann nan:
project/
  index.html
  css/
    style.css
    variables.css
  images/
    hero.jpg
    logo.svg
  icons/
    github.svg
    linkedin.svg
    email.svg

Rezilta ki atann nan: Yon sit ki gen style pwofesyonèl ak assets ki òganize byen ak perfòmans ki bon.`,
    contentFr: `Améliorez votre portfolio avec des assets externes professionnels.

Objectifs :
✓ Ajouter une image de fond hero
✓ Ajouter au moins 3 icônes SVG ou Font Awesome  
✓ Ajouter un logo dans le header
✓ Importer au moins 1 Google Font supplémentaire
✓ Créer un deuxième fichier CSS (variables.css ou theme.css)
✓ Organiser tous les assets dans les dossiers appropriés

Structure de fichier attendue :
project/
  index.html
  css/
    style.css
    variables.css
  images/
    hero.jpg
    logo.svg
  icons/
    github.svg
    linkedin.svg
    email.svg

Résultat attendu : Un site stylé professionnellement avec des assets bien organisés et de bonnes performances.`
  }
];

export default htmlCssWeek14Cards;