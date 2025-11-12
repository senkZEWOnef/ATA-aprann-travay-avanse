import { HtmlCssCard } from './htmlCssWeek1Cards';

export const htmlCssWeek2Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Revizyon ak Nouvo Objektif yo',
    titleFr: 'Révision et Nouveaux Objectifs',
    contentHt: `## 🗓 HTML & CSS pou Kòmansè yo – Semèn 2: Links, Imaj ak Lis yo

### 🎯 Objektif yo
Nan fen Semèn 2 an, etidyan yo ap kapab:
• Ajoute hyperlinks ak \`<a href="">\`
• Montre imaj yo ak alt text ak relative paths ki apwopriye
• Òganize kòntni ak ordered (\`<ol>\`), unordered (\`<ul>\`), ak nested lists
• Kreye yon navigation bar senp ki konekte ak lòt paj yo (About, Projects, Contact)
• Konprann semantic grouping ak \`<nav>\` ak \`<section>\`

### 📋 Revizyon Semèn 1:
• HTML5 boilerplate
• Basic tags: \`<h1>\`-\`<h6>\`, \`<p>\`, \`<br>\`, \`<hr>\`
• VS Code ak Live Server setup
• Premye "Hello, Web" profil page

### 🎨 Pwojè Kontinye:
Nou ap kontinye ak sit nou an nan Semèn 1 ak nou ap ajoute:
• Navigation ak links
• Imaj pwofil
• Lis enfòmasyon ak entèrè yo
• Semantic HTML pi bon`,
    contentFr: `## 🗓 HTML & CSS pour Débutants – Semaine 2: Liens, Images et Listes

### 🎯 Objectifs
À la fin de la Semaine 2, les étudiants seront capables de:
• Ajouter des hyperliens avec \`<a href="">\`
• Afficher des images avec alt text et chemins relatifs appropriés
• Organiser le contenu avec listes ordonnées (\`<ol>\`), non-ordonnées (\`<ul>\`) et imbriquées
• Créer une barre de navigation simple reliant à d'autres pages (About, Projects, Contact)
• Comprendre le regroupement sémantique avec \`<nav>\` et \`<section>\`

### 📋 Révision Semaine 1:
• HTML5 boilerplate
• Tags de base: \`<h1>\`-\`<h6>\`, \`<p>\`, \`<br>\`, \`<hr>\`
• Configuration VS Code et Live Server
• Première page de profil "Hello, Web"

### 🎨 Projet Continu:
Nous continuerons avec notre site de la Semaine 1 en ajoutant:
• Navigation avec liens
• Image de profil
• Listes d'informations et d'intérêts
• HTML sémantique amélioré`,
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Nouvo Tags HTML yo',
    titleFr: 'Nouveaux Tags HTML',
    contentHt: `## 🏗️ Nouvo Tags HTML yo

### 📋 Tablo Tags yo:

| Tag | Objektif | Egzanp |
|-----|----------|---------|
| \`<a href="URL">\` | Kreye yon link | \`<a href="about.html">Sou Mwen</a>\` |
| \`<img src="path" alt="description">\` | Montre yon imaj | \`<img src="profile.jpg" alt="Pòtrè Ralph">\` |
| \`<ul>\` / \`<ol>\` / \`<li>\` | Lis yo (unordered/ordered) | \`<ul><li>Design</li><li>Koding</li></ul>\` |
| \`<nav>\` | Navigation section wrapper | \`<nav>…</nav>\` |

### 🔗 Links (\`<a>\` tag):
\`\`\`html
<a href="about.html">Sou Mwen</a>
<a href="https://google.com" target="_blank">Google</a>
<a href="#contact">Kontak</a>
<a href="mailto:email@example.com">Voye Email</a>
\`\`\`

### 🖼️ Imaj (\`<img>\` tag):
\`\`\`html
<img src="images/profile.jpg" alt="Foto pwofil Ralph Ulysse" width="200">
<img src="https://example.com/image.jpg" alt="Deskripsyon imaj la">
\`\`\`

### 📝 Lis yo:
**Unordered List (bullets):**
\`\`\`html
<ul>
  <li>Web Design</li>
  <li>Cabinet Building</li>
  <li>Ekriti ak Poezi</li>
</ul>
\`\`\`

**Ordered List (nimewo):**
\`\`\`html
<ol>
  <li>Aprann HTML</li>
  <li>Aprann CSS</li>
  <li>Bati yon sit</li>
</ol>
\`\`\`

### 🧭 Navigation:
\`\`\`html
<nav>
  <a href="index.html">Akèy</a>
  <a href="about.html">Sou Mwen</a>
  <a href="projects.html">Pwojè yo</a>
  <a href="contact.html">Kontak</a>
</nav>
\`\`\``,
    contentFr: `## 🏗️ Nouveaux Tags HTML

### 📋 Tableau des Tags:

| Tag | Objectif | Exemple |
|-----|----------|---------|
| \`<a href="URL">\` | Créer un lien | \`<a href="about.html">À Propos</a>\` |
| \`<img src="path" alt="description">\` | Afficher une image | \`<img src="profile.jpg" alt="Portrait de Ralph">\` |
| \`<ul>\` / \`<ol>\` / \`<li>\` | Listes (non-ordonnée/ordonnée) | \`<ul><li>Design</li><li>Codage</li></ul>\` |
| \`<nav>\` | Conteneur de section de navigation | \`<nav>…</nav>\` |

### 🔗 Liens (\`<a>\` tag):
\`\`\`html
<a href="about.html">À Propos</a>
<a href="https://google.com" target="_blank">Google</a>
<a href="#contact">Contact</a>
<a href="mailto:email@example.com">Envoyer Email</a>
\`\`\`

### 🖼️ Images (\`<img>\` tag):
\`\`\`html
<img src="images/profile.jpg" alt="Photo de profil de Ralph Ulysse" width="200">
<img src="https://example.com/image.jpg" alt="Description de l'image">
\`\`\`

### 📝 Listes:
**Liste non-ordonnée (puces):**
\`\`\`html
<ul>
  <li>Design Web</li>
  <li>Menuiserie</li>
  <li>Écriture et Poésie</li>
</ul>
\`\`\`

**Liste ordonnée (numéros):**
\`\`\`html
<ol>
  <li>Apprendre HTML</li>
  <li>Apprendre CSS</li>
  <li>Construire un site</li>
</ol>
\`\`\`

### 🧭 Navigation:
\`\`\`html
<nav>
  <a href="index.html">Accueil</a>
  <a href="about.html">À Propos</a>
  <a href="projects.html">Projets</a>
  <a href="contact.html">Contact</a>
</nav>
\`\`\``,
    codeExample: `<nav>
  <a href="index.html">Akèy</a> |
  <a href="about.html">Sou Mwen</a> |
  <a href="projects.html">Pwojè yo</a> |
  <a href="contact.html">Kontak</a>
</nav>

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
  <img src="images/profile.jpg" alt="Foto pwofil Ralph Ulysse" width="200">
</section>`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Aksèsibilite ak Bon Pratik yo',
    titleFr: 'Accessibilité et Bonnes Pratiques',
    contentHt: `## ♿ Aksèsibilite ak Bon Pratik yo

### 📋 Règ Enpòtan yo:

#### 🖼️ Imaj yo:
✅ **Alt Text Obligatwa:**
- Chak imaj dwe gen yon \`alt\` attribute
- Alt text la dwe dekri kisa ki nan imaj la
- Si imaj la jis pou dekorasyon, itilize \`alt=""\`

**Bon egzanp:**
\`\`\`html
<img src="profile.jpg" alt="Ralph Ulysse k ap souri nan yon biwo">
\`\`\`

**Move egzanp:**
\`\`\`html
<img src="profile.jpg" alt="imaj">
<img src="profile.jpg"> <!-- manke alt -->
\`\`\`

#### 🔗 Links yo:
✅ **Descriptive Link Text:**
- Pa itilize "klike isit la" oswa "li plis"
- Itilize teks ki klè ak ki di kisa link la ye

**Bon egzanp:**
\`\`\`html
<a href="about.html">Li sou eksperyans mwen</a>
<a href="resume.pdf">Télécharger CV mwen (PDF)</a>
\`\`\`

**Move egzanp:**
\`\`\`html
<a href="about.html">klike isit la</a>
<a href="resume.pdf">li plis</a>
\`\`\`

#### 📝 Lis yo:
✅ **Semantic Correctness:**
- Itilize \`<ul>\`/\`<ol>\` pou lis vrè yo
- Pa itilize \`<br>\` pou fè lis yo

**Bon egzanp:**
\`\`\`html
<ul>
  <li>Pwojè 1</li>
  <li>Pwojè 2</li>
  <li>Pwojè 3</li>
</ul>
\`\`\`

**Move egzanp:**
\`\`\`html
Pwojè 1<br>
Pwojè 2<br>
Pwojè 3<br>
\`\`\`

### 🔧 Placeholder Links:
Pou kounye a, nou kapab itilize placeholder links:
\`\`\`html
<a href="#">Sou Mwen</a>
<a href="#">Pwojè yo</a>
<a href="#">Kontak</a>
\`\`\``,
    contentFr: `## ♿ Accessibilité et Bonnes Pratiques

### 📋 Règles Importantes:

#### 🖼️ Images:
✅ **Alt Text Obligatoire:**
- Chaque image doit avoir un attribut \`alt\`
- Le texte alt doit décrire ce qui est dans l'image
- Si l'image est juste décorative, utiliser \`alt=""\`

**Bon exemple:**
\`\`\`html
<img src="profile.jpg" alt="Ralph Ulysse souriant dans un bureau">
\`\`\`

**Mauvais exemple:**
\`\`\`html
<img src="profile.jpg" alt="image">
<img src="profile.jpg"> <!-- alt manquant -->
\`\`\`

#### 🔗 Liens:
✅ **Texte de Lien Descriptif:**
- Ne pas utiliser "cliquez ici" ou "en savoir plus"
- Utiliser un texte clair qui dit ce que le lien fait

**Bon exemple:**
\`\`\`html
<a href="about.html">Lire sur mon expérience</a>
<a href="resume.pdf">Télécharger mon CV (PDF)</a>
\`\`\`

**Mauvais exemple:**
\`\`\`html
<a href="about.html">cliquez ici</a>
<a href="resume.pdf">en savoir plus</a>
\`\`\`

#### 📝 Listes:
✅ **Correction Sémantique:**
- Utiliser \`<ul>\`/\`<ol>\` pour de vraies listes
- Ne pas utiliser \`<br>\` pour faire des listes

**Bon exemple:**
\`\`\`html
<ul>
  <li>Projet 1</li>
  <li>Projet 2</li>
  <li>Projet 3</li>
</ul>
\`\`\`

**Mauvais exemple:**
\`\`\`html
Projet 1<br>
Projet 2<br>
Projet 3<br>
\`\`\`

### 🔧 Liens Placeholder:
Pour l'instant, nous pouvons utiliser des liens placeholder:
\`\`\`html
<a href="#">À Propos</a>
<a href="#">Projets</a>
<a href="#">Contact</a>
\`\`\``,
  },
  {
    id: 4,
    type: 'lesson',
    titleHt: 'Òganizasyon Dosye yo',
    titleFr: 'Organisation des Dossiers',
    contentHt: `## 📁 Òganizasyon Dosye yo

### 🏗️ Estrikti Dosye ki Rekòmande:

\`\`\`
my_portfolio/
 ├── index.html          (paj prensipal la)
 ├── about.html          (paj "Sou Mwen")
 ├── projects.html       (paj pwojè yo)
 ├── contact.html        (paj kontak)
 ├── images/             (dosye pou imaj yo)
 │    ├── profile.jpg    (foto pwofil)
 │    ├── project1.jpg   (foto pwojè)
 │    └── logo.png       (logo sit la)
 └── css/                (dosye pou CSS - semèn pwochen)
      └── style.css      (stylesheet prensipal la)
\`\`\`

### 📝 Eksplikasyon Dosye yo:

**🏠 index.html:**
- Paj prensipal la (homepage)
- Premye bagay vizitè yo wè
- Dwe gen navigation ak kòntni prensipal

**📄 Lòt paj yo:**
- about.html - Enfòmasyon sou ou menm
- projects.html - Pwojè ak travay ou yo
- contact.html - Enfòmasyon kontak ak fòm

**🖼️ images/ dosye a:**
- Kenbe tout imaj yo nan yon kote
- Itilize non ki klè: profile.jpg, project1.jpg
- Optimize imaj yo pou web (pa twò gwo)

### 🔗 Relative Paths:
Lè w ap fè links ak imaj yo, itilize relative paths:

\`\`\`html
<!-- Links nan lòt paj yo -->
<a href="about.html">Sou Mwen</a>
<a href="projects.html">Pwojè yo</a>

<!-- Imaj nan dosye images/ -->
<img src="images/profile.jpg" alt="Foto pwofil mwen">
<img src="images/project1.jpg" alt="Screenshot pwojè 1">
\`\`\`

### ✅ Avantaj yo:
- Sit la pi fasil pou òganize
- Imaj yo pa melanje ak HTML yo
- Pi fasil pou jwenn bagay yo
- Prèt pou upload sou yon server`,
    contentFr: `## 📁 Organisation des Dossiers

### 🏗️ Structure de Dossier Recommandée:

\`\`\`
my_portfolio/
 ├── index.html          (page principale)
 ├── about.html          (page "À propos")
 ├── projects.html       (page des projets)
 ├── contact.html        (page contact)
 ├── images/             (dossier pour les images)
 │    ├── profile.jpg    (photo de profil)
 │    ├── project1.jpg   (photo de projet)
 │    └── logo.png       (logo du site)
 └── css/                (dossier pour CSS - semaine prochaine)
      └── style.css      (feuille de style principale)
\`\`\`

### 📝 Explication des Fichiers:

**🏠 index.html:**
- Page principale (homepage)
- Première chose que les visiteurs voient
- Doit avoir la navigation et le contenu principal

**📄 Autres pages:**
- about.html - Informations sur vous
- projects.html - Projets et travaux
- contact.html - Informations de contact et formulaire

**🖼️ Dossier images/:**
- Garder toutes les images au même endroit
- Utiliser des noms clairs: profile.jpg, project1.jpg
- Optimiser les images pour le web (pas trop grandes)

### 🔗 Chemins Relatifs:
Lors de la création de liens et images, utiliser des chemins relatifs:

\`\`\`html
<!-- Liens vers autres pages -->
<a href="about.html">À Propos</a>
<a href="projects.html">Projets</a>

<!-- Images dans le dossier images/ -->
<img src="images/profile.jpg" alt="Ma photo de profil">
<img src="images/project1.jpg" alt="Capture d'écran projet 1">
\`\`\`

### ✅ Avantages:
- Site plus facile à organiser
- Images séparées du HTML
- Plus facile de trouver les choses
- Prêt pour upload sur un serveur`,
  },
  {
    id: 5,
    type: 'practice',
    titleHt: 'Egzèsis Pratik yo',
    titleFr: 'Exercices Pratiques',
    contentHt: `## 🧩 Egzèsis Pratik yo - Semèn 2

Kounye a ann pratike nouvo tags yo!`,
    contentFr: `## 🧩 Exercices Pratiques - Semaine 2

Maintenant pratiquons les nouveaux tags!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute yon navigation bar nan tèt paj ou a ak links pou "Akèy", "Sou Mwen", "Pwojè yo", ak "Kontak".',
        instructionFr: 'Ajouter une barre de navigation en haut de votre page avec des liens pour "Accueil", "À Propos", "Projets" et "Contact".',
        starterCode: `<!-- Ajoute sa a nan kòmanseman <body> ou a -->
<body>
  <!-- Ajoute navigation isit la -->
  
  <h1>Non ou</h1>
  <p>Biyografi ou a nan Semèn 1...</p>
</body>`,
        solution: `<body>
  <nav>
    <a href="index.html">Akèy</a> |
    <a href="about.html">Sou Mwen</a> |
    <a href="projects.html">Pwojè yo</a> |
    <a href="contact.html">Kontak</a>
  </nav>
  
  <h1>Non ou</h1>
  <p>Biyografi ou a nan Semèn 1...</p>
</body>`,
        hint: 'Itilize <nav> pou wrappé links yo ak href="#" pou placeholder links.'
      },
      {
        id: 2,
        instructionHt: 'Kreye yon seksyon "Entèrè Mwen yo" ak yon lis ki gen omwen 3 bagay ou renmen.',
        instructionFr: 'Créer une section "Mes Intérêts" avec une liste d\'au moins 3 choses que vous aimez.',
        starterCode: `<!-- Ajoute apre navigation ak biyografi a -->
<hr>
<!-- Ajoute seksyon entèrè yo isit la -->`,
        solution: `<hr>
<section>
  <h2>Entèrè Mwen yo</h2>
  <ul>
    <li>Web Design</li>
    <li>Mizik</li>
    <li>Fotografi</li>
    <li>Lekti</li>
  </ul>
</section>`,
        hint: 'Itilize <section> pou wrappé kòntni an ak <ul> ak <li> pou lis la.'
      },
      {
        id: 3,
        instructionHt: 'Ajoute yon imaj pwofil ak alt text ki apwopriye. Itilize "https://via.placeholder.com/200" si ou pa gen yon foto.',
        instructionFr: 'Ajouter une image de profil avec alt text approprié. Utiliser "https://via.placeholder.com/200" si vous n\'avez pas de photo.',
        starterCode: `<section>
  <h2>Foto Mwen</h2>
  <!-- Ajoute imaj isit la -->
</section>`,
        solution: `<section>
  <h2>Foto Mwen</h2>
  <img src="https://via.placeholder.com/200" alt="Foto pwofil Ralph Ulysse" width="200">
</section>`,
        hint: 'Sonje ajoute width="200" ak yon alt text ki dekri imaj la.'
      },
      {
        id: 4,
        instructionHt: 'Kreye yon lis ordered (ak nimewo) ki gen 3 objektif ou genyen pou kous sa a.',
        instructionFr: 'Créer une liste ordonnée (avec numéros) de 3 objectifs que vous avez pour ce cours.',
        starterCode: `<section>
  <h2>Objektif Mwen yo</h2>
  <!-- Ajoute lis ordered isit la -->
</section>`,
        solution: `<section>
  <h2>Objektif Mwen yo</h2>
  <ol>
    <li>Aprann HTML ak CSS byen</li>
    <li>Bati yon pòtrè pwofesyonèl</li>
    <li>Vin yon devlopè web ekspè</li>
  </ol>
</section>`,
        hint: 'Itilize <ol> olye de <ul> pou yon lis ak nimewo.'
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    titleHt: 'Quiz Semèn 2',
    titleFr: 'Quiz Semaine 2',
    contentHt: `## 🧪 Quiz Semèn 2

Test konesans ou sou links, imaj ak lis yo!`,
    contentFr: `## 🧪 Quiz Semaine 2

Testez vos connaissances sur les liens, images et listes!`,
    quiz: [
      {
        id: 1,
        questionHt: 'Ki tag ki kreye yon hyperlink?',
        questionFr: 'Quel tag crée un hyperlien?',
        options: [
          { ht: '<link>', fr: '<link>' },
          { ht: '<a>', fr: '<a>' },
          { ht: '<href>', fr: '<href>' },
          { ht: '<url>', fr: '<url>' }
        ],
        correctAnswer: 1,
        explanationHt: '<a> tag la ak href attribute la kreye yon hyperlink. Egzanp: <a href="page.html">Link Text</a>',
        explanationFr: 'Le tag <a> avec l\'attribut href crée un hyperlien. Exemple: <a href="page.html">Texte du Lien</a>'
      },
      {
        id: 2,
        questionHt: 'Ki attribute ki bay alternative text pou yon imaj?',
        questionFr: 'Quel attribut fournit le texte alternatif pour une image?',
        options: [
          { ht: 'src', fr: 'src' },
          { ht: 'alt', fr: 'alt' },
          { ht: 'title', fr: 'title' },
          { ht: 'description', fr: 'description' }
        ],
        correctAnswer: 1,
        explanationHt: 'Attribute "alt" la bay yon deskripsyon teks pou imaj la, ki enpòtan pou aksèsibilite.',
        explanationFr: 'L\'attribut "alt" fournit une description textuelle pour l\'image, important pour l\'accessibilité.'
      },
      {
        id: 3,
        questionHt: 'Ki tip lis ki itilize nimewo?',
        questionFr: 'Quel type de liste utilise des numéros?',
        options: [
          { ht: '<ul>', fr: '<ul>' },
          { ht: '<ol>', fr: '<ol>' },
          { ht: '<dl>', fr: '<dl>' },
          { ht: '<li>', fr: '<li>' }
        ],
        correctAnswer: 1,
        explanationHt: '<ol> (ordered list) kreye yon lis ak nimewo otomatik (1, 2, 3...).',
        explanationFr: '<ol> (ordered list) crée une liste avec numérotation automatique (1, 2, 3...).'
      },
      {
        id: 4,
        questionHt: 'Kisa <nav> tag la itilize pou li?',
        questionFr: 'À quoi sert le tag <nav>?',
        options: [
          { ht: 'Pou kreye imaj yo', fr: 'Pour créer des images' },
          { ht: 'Pou wrappé navigation links', fr: 'Pour envelopper les liens de navigation' },
          { ht: 'Pou fè lis yo', fr: 'Pour faire des listes' },
          { ht: 'Pou ajoute koulè', fr: 'Pour ajouter des couleurs' }
        ],
        correctAnswer: 1,
        explanationHt: '<nav> tag la semantically wrappé links navigasyon yo, ede screen readers yo ak SEO.',
        explanationFr: 'Le tag <nav> enveloppe sémantiquement les liens de navigation, aidant les lecteurs d\'écran et le SEO.'
      },
      {
        id: 5,
        questionHt: 'Vrè oswa Fo: Imaj yo dwe toujou gen alt text.',
        questionFr: 'Vrai ou Faux: Les images doivent toujours avoir alt text.',
        options: [
          { ht: 'Vrè', fr: 'Vrai' },
          { ht: 'Fo', fr: 'Faux' }
        ],
        correctAnswer: 0,
        explanationHt: 'VRÈ. Chak imaj dwe gen yon alt attribute pou aksèsibilite. Si imaj la jis dekoratif, itilize alt="".',
        explanationFr: 'VRAI. Chaque image doit avoir un attribut alt pour l\'accessibilité. Si l\'image est purement décorative, utiliser alt="".'
      }
    ]
  },
  {
    id: 7,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè - "Bati Navigation ak About Sections yo"',
    titleFr: 'Mini-Projet - "Construire Navigation et Sections About"',
    contentHt: `## 💬 Mini-Pwojè — "Bati Navigation ak About Sections yo"

### 🎯 Objektif:
Kontinye ak sit ou a nan Semèn 1 ak ajoute nouvo eleman yo pou fè li pi fonksyonèl ak òganize.

### ✅ Kondisyon yo:
• **Navigation Bar:** Ajoute nav ak links pou "About," "Projects," ak "Contact"
• **Interests Section:** Kreye yon nouvo seksyon ak yon lis entèrè yo
• **Profile Image:** Ajoute yon imaj pwofil ak alt text ki apwopriye
• **CSS Styling:** Ajoute style janti (backgrounds, spacing, image rounding)
• **Semantic HTML:** Itilize <nav>, <section> ak lòt semantic tags

### 📋 Etap pa Etap:

**1. Ajoute Navigation:**
\`\`\`html
<nav>
  <a href="index.html">Akèy</a> |
  <a href="about.html">Sou Mwen</a> |
  <a href="projects.html">Pwojè yo</a> |
  <a href="contact.html">Kontak</a>
</nav>
\`\`\`

**2. Ajoute Interests Section:**
\`\`\`html
<section>
  <h2>Entèrè Mwen yo</h2>
  <ul>
    <li>Web Design</li>
    <li>Cabinet Building</li>
    <li>Ekriti ak Poezi</li>
  </ul>
</section>
\`\`\`

**3. Ajoute Profile Image:**
\`\`\`html
<section>
  <h2>Foto Mwen</h2>
  <img src="images/profile.jpg" alt="Foto pwofil Ralph Ulysse" width="200">
</section>
\`\`\`

**4. Basic CSS Styling:**
\`\`\`css
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

img {
  border-radius: 8px;
  margin-top: 0.5rem;
}

ul {
  list-style-type: circle;
  padding-left: 1.5rem;
}
\`\`\`

### 🎯 Rezilta ki Atann:
Yon paj ki kounye a santi li kòm yon vrè homepage pòtrè — ak tit, biyografi, navigation, imaj, ak seksyon ki byen estrikti yo.

### 💾 Sove Progression:
Sove travay ou a kòm "Semèn 2" nan playground la ak preview li pou asire tout bagay ap parèt kòrèkteman.`,
    contentFr: `## 💬 Mini-Projet — "Construire Navigation et Sections About"

### 🎯 Objectif:
Continuer avec votre site de la Semaine 1 en ajoutant de nouveaux éléments pour le rendre plus fonctionnel et organisé.

### ✅ Exigences:
• **Barre de Navigation:** Ajouter nav avec liens pour "About," "Projects," et "Contact"
• **Section Intérêts:** Créer une nouvelle section avec une liste d'intérêts
• **Image de Profil:** Ajouter une image de profil avec alt text approprié
• **Style CSS:** Ajouter un style subtil (arrière-plans, espacement, arrondissement d'image)
• **HTML Sémantique:** Utiliser <nav>, <section> et autres tags sémantiques

### 📋 Étapes:

**1. Ajouter Navigation:**
\`\`\`html
<nav>
  <a href="index.html">Accueil</a> |
  <a href="about.html">À Propos</a> |
  <a href="projects.html">Projets</a> |
  <a href="contact.html">Contact</a>
</nav>
\`\`\`

**2. Ajouter Section Intérêts:**
\`\`\`html
<section>
  <h2>Mes Intérêts</h2>
  <ul>
    <li>Design Web</li>
    <li>Menuiserie</li>
    <li>Écriture et Poésie</li>
  </ul>
</section>
\`\`\`

**3. Ajouter Image de Profil:**
\`\`\`html
<section>
  <h2>Ma Photo</h2>
  <img src="images/profile.jpg" alt="Photo de profil de Ralph Ulysse" width="200">
</section>
\`\`\`

**4. Style CSS de Base:**
\`\`\`css
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

img {
  border-radius: 8px;
  margin-top: 0.5rem;
}

ul {
  list-style-type: circle;
  padding-left: 1.5rem;
}
\`\`\`

### 🎯 Résultat Attendu:
Une page qui ressemble maintenant à une vraie homepage de portfolio — avec titre, bio, navigation, image, et sections bien structurées.

### 💾 Sauvegarder Progression:
Sauvegarder votre travail comme "Semaine 2" dans le playground et le prévisualiser pour s'assurer que tout apparaît correctement.`,
  },
  {
    id: 8,
    type: 'lesson',
    titleHt: 'Kisa ki Vini Apre a',
    titleFr: 'Ce qui Vient Ensuite',
    contentHt: `## 🧱 Kisa ki Vini Apre a

### Semèn 3: CSS Fundamentals

Nan semèn pwochen an, nou ap kòmanse ak CSS ak nou ap aprann:

**🎨 CSS Basics:**
- **Selectors** ak comment yo fonksyone
- **Properties** ak **values**
- **Colors** ak color systems yo (hex, rgb, named colors)
- **External linking** ak \`<link>\` tag

**📁 File Organization:**
- Kreye yon \`css/\` dosye
- Link external stylesheet yo
- Best practices pou CSS organization

**🎯 Pwojè Kontinye:**
Nou ap pran sit HTML nou an ak nou ap:
- Ajoute premye external CSS file nou an
- Style navigation ak colors ak fonts
- Améliore aparans jeneral la
- Prepare pou semèn ki ap vini yo

### 🎉 Bravo pou Semèn 2!

Kounye a ou konnen:
✅ Comment pou kreye links ak \`<a>\`
✅ Comment pou ajoute imaj ak alt text
✅ Comment pou òganize kòntni ak lis
✅ Comment pou itilize semantic HTML ak \`<nav>\` ak \`<section>\`
✅ Best practices pou aksèsibilite

**Sit ou a ap vin pi bon chak semèn! Kontinye ak bon travay la! 🚀**`,
    contentFr: `## 🧱 Ce qui Vient Ensuite

### Semaine 3: Fondamentaux CSS

La semaine prochaine, nous commencerons avec CSS et apprendrons:

**🎨 Bases CSS:**
- **Sélecteurs** et comment ils fonctionnent
- **Propriétés** et **valeurs**
- **Couleurs** et systèmes de couleur (hex, rgb, couleurs nommées)
- **Liaison externe** avec le tag \`<link>\`

**📁 Organisation des Fichiers:**
- Créer un dossier \`css/\`
- Lier des feuilles de style externes
- Bonnes pratiques pour l'organisation CSS

**🎯 Projet Continu:**
Nous prendrons notre site HTML et nous:
- Ajouterons notre premier fichier CSS externe
- Styliserons la navigation avec couleurs et polices
- Améliorerons l'apparence générale
- Préparerons pour les semaines à venir

### 🎉 Félicitations pour la Semaine 2!

Maintenant vous savez:
✅ Comment créer des liens avec \`<a>\`
✅ Comment ajouter des images avec alt text
✅ Comment organiser le contenu avec des listes
✅ Comment utiliser HTML sémantique avec \`<nav>\` et \`<section>\`
✅ Bonnes pratiques pour l'accessibilité

**Votre site s'améliore chaque semaine! Continuez le bon travail! 🚀**`,
  }
];

export default htmlCssWeek2Cards;