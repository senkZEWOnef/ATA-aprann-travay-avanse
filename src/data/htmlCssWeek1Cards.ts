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

export const htmlCssWeek1Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Kijan Web la Fonksyone',
    titleFr: 'Comment Fonctionne le Web',
    contentHt: `## Kijan Web la Fonksyone

**Browser la voye yon demann bay yon server, epi server la retounen fichye HTML, CSS, ak JS yo.**

🔄 **Pwosesis la:**
1. **Browser** la voye yon HTTP request
2. **Server** la resevwa demann lan ak retounen fichye yo
3. **Browser** la rann HTML (estrikti) an premye, lè sa a li aplike CSS (style)

💡 **Konsèp Enpòtan:**
- Websites se jis dosye yo ki òganize (HTML → estrikti, CSS → style, JS → interaction)
- Browser la li HTML kòm yon "blueprint" pou paj la
- CSS ajoute koulè, espacement ak aparans

**Egzanp:** Lè w tape "google.com" nan browser ou a:
1. Browser la mande Google server la pou paj la
2. Google voye HTML ak CSS fichye yo
3. Browser ou a montre paj la ak tout style yo`,
    contentFr: `## Comment Fonctionne le Web

**Le navigateur envoie une requête à un serveur, qui retourne les fichiers HTML, CSS et JS.**

🔄 **Le Processus:**
1. **Navigateur** envoie une requête HTTP
2. **Serveur** reçoit la demande et retourne les fichiers
3. **Navigateur** rend le HTML (structure) d'abord, puis applique le CSS (style)

💡 **Concepts Importants:**
- Les sites web sont juste des dossiers organisés (HTML → structure, CSS → style, JS → interaction)
- Le navigateur lit le HTML comme un "blueprint" pour la page
- CSS ajoute couleurs, espacement et apparence

**Exemple:** Quand vous tapez "google.com" dans votre navigateur:
1. Le navigateur demande au serveur Google la page
2. Google envoie les fichiers HTML et CSS
3. Votre navigateur affiche la page avec tous les styles`,
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Konfigirasyon VS Code ak Live Server',
    titleFr: 'Configuration VS Code et Live Server',
    contentHt: `## Konfigirasyon Depo Travay la

### Etap yo:

**1. Enstale VS Code:**
- Télécharger nan https://code.visualstudio.com
- Suiv enstalasyon an

**2. Ajoute Live Server Extension:**
- Ouvri VS Code
- Ale nan Extensions (Ctrl+Shift+X)
- Chèche "Live Server"
- Klike "Install"

**3. Kreye Pwojè Folder ou a:**
\`\`\`
week1_html_basics/
├── index.html
\`\`\`

**4. Lanse Live Server:**
- Louvri dosye a nan VS Code
- Right-click sou index.html
- Chwazi "Open with Live Server"

✅ **Avantaj Live Server:**
- Preview otomatik nan browser la
- Rechaje otomatik lè w fè chanjman
- Adres lokal pou test yo`,
    contentFr: `## Configuration de l'Environnement de Travail

### Étapes:

**1. Installer VS Code:**
- Télécharger depuis https://code.visualstudio.com
- Suivre l'installation

**2. Ajouter l'Extension Live Server:**
- Ouvrir VS Code
- Aller aux Extensions (Ctrl+Shift+X)
- Rechercher "Live Server"
- Cliquer "Install"

**3. Créer Votre Dossier de Projet:**
\`\`\`
week1_html_basics/
├── index.html
\`\`\`

**4. Lancer Live Server:**
- Ouvrir le dossier dans VS Code
- Clic droit sur index.html
- Choisir "Open with Live Server"

✅ **Avantages Live Server:**
- Aperçu automatique dans le navigateur
- Rechargement automatique lors des changements
- Adresse locale pour les tests`,
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'HTML5 Boilerplate',
    titleFr: 'HTML5 Boilerplate',
    contentHt: `## HTML5 Boilerplate

**Chak paj HTML5 kòmanse ak yon boilerplate konsa:**

### Estrikti Debaz la:
\`\`\`html
<!DOCTYPE html>
<html lang="ht">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Premye Paj Web Mwen</title>
</head>
<body>
  <h1>Bonjou, Web!</h1>
  <p>Sa a se premye paj web mwen an.</p>
</body>
</html>
\`\`\`

### ✅ Pati Enpòtan yo:

**\`<!DOCTYPE html>\`** → Di browser la ou ap itilize HTML5

**\`<head>\`** → Enfòmasyon sou paj la (metadata, title)
- \`<meta charset="UTF-8">\` → Asire karaktè yo parèt kòrèkteman
- \`<meta name="viewport">\` → Pou responsive design
- \`<title>\` → Tit nan tab browser la

**\`<body>\`** → Kòntni ki vizib sou ekran an

💡 **Sonje:** Tout tag yo dwe gen fermeture (except self-closing tags)`,
    contentFr: `## HTML5 Boilerplate

**Chaque page HTML5 commence avec un boilerplate comme ceci:**

### Structure de Base:
\`\`\`html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ma Première Page Web</title>
</head>
<body>
  <h1>Bonjour, Web!</h1>
  <p>Ceci est ma première page web.</p>
</body>
</html>
\`\`\`

### ✅ Parties Importantes:

**\`<!DOCTYPE html>\`** → Indique au navigateur que vous utilisez HTML5

**\`<head>\`** → Informations sur la page (métadonnées, titre)
- \`<meta charset="UTF-8">\` → Assure l'affichage correct des caractères
- \`<meta name="viewport">\` → Pour le design responsive
- \`<title>\` → Titre dans l'onglet du navigateur

**\`<body>\`** → Contenu visible à l'écran

💡 **Rappel:** Tous les tags doivent être fermés (sauf self-closing tags)`,
    codeExample: `<!DOCTYPE html>
<html lang="ht">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Premye Paj Mwen</title>
</head>
<body>
  <h1>Bonjou Mondèl!</h1>
  <p>Sa a se kòmanseman yon aventure!</p>
</body>
</html>`
  },
  {
    id: 4,
    type: 'lesson',
    titleHt: 'Tags HTML Debaz yo',
    titleFr: 'Tags HTML de Base',
    contentHt: `## Tags HTML Debaz yo

### 📋 Tablo Tags yo:

| Tag | Objektif | Egzanp |
|-----|----------|---------|
| \`<h1>\`–\`<h6>\` | Headings (H1 = tit prensipal) | \`<h2>Sou Mwen</h2>\` |
| \`<p>\` | Paragraf | \`<p>Mwen renmen koding!</p>\` |
| \`<br>\` | Line break (yon liy) | \`Premye Liy<br>Dezyèm Liy\` |
| \`<hr>\` | Liy horizontal (divider) | \`<hr>\` |

### 🏗️ Ijèrachi Headings yo:
- **H1** = Tit pi gwo a (1 pa paj sèlman)
- **H2** = Seksyon prensipal yo
- **H3-H6** = Sub-sections ak detay yo

### 📝 Bon Pratik yo:
- Toujou itilize headings nan òd (H1, lè sa a H2, lè sa a H3...)
- Pa sote nivo yo (pa ale dirèkteman depi H1 nan H3)
- Itilize \`<p>\` pou teks ki pi long pase yon liy

### Egzanp Konplè:
\`\`\`html
<h1>Pòtrè Mwen</h1>
<p>Mwen se yon etidyan k ap aprann devlopman web.</p>
<hr>
<h2>Objektif Mwen yo</h2>
<p>Aprann HTML ak CSS<br>Kreye sit pwofesyonèl yo<br>Vin yon devlopè ekspè</p>
\`\`\``,
    contentFr: `## Tags HTML de Base

### 📋 Tableau des Tags:

| Tag | Objectif | Exemple |
|-----|----------|---------|
| \`<h1>\`–\`<h6>\` | Titres (H1 = titre principal) | \`<h2>À Propos</h2>\` |
| \`<p>\` | Paragraphe | \`<p>J'aime coder!</p>\` |
| \`<br>\` | Saut de ligne (une ligne) | \`Première Ligne<br>Seconde Ligne\` |
| \`<hr>\` | Ligne horizontale (séparateur) | \`<hr>\` |

### 🏗️ Hiérarchie des Titres:
- **H1** = Titre principal (1 par page seulement)
- **H2** = Sections principales
- **H3-H6** = Sous-sections et détails

### 📝 Bonnes Pratiques:
- Toujours utiliser les titres dans l'ordre (H1, puis H2, puis H3...)
- Ne pas sauter de niveaux (ne pas aller directement de H1 à H3)
- Utiliser \`<p>\` pour le texte de plus d'une ligne

### Exemple Complet:
\`\`\`html
<h1>Mon Profil</h1>
<p>Je suis un étudiant apprenant le développement web.</p>
<hr>
<h2>Mes Objectifs</h2>
<p>Apprendre HTML et CSS<br>Créer des sites professionnels<br>Devenir un développeur expert</p>
\`\`\``,
    codeExample: `<h1>Ralph Ulysse</h1>
<p>Salut! Mwen ap aprann HTML ak CSS pou bati sit modèn yo.</p>
<hr>
<h2>Objektif pou Kou sa a</h2>
<p>• Aprann estrikti HTML<br>• Ajoute style ak CSS<br>• Pibliye premye pòtrè mwen</p>`
  },
  {
    id: 5,
    type: 'practice',
    titleHt: 'Egzèsis Pratik yo',
    titleFr: 'Exercices Pratiques',
    contentHt: `## 🧩 Egzèsis Pratik yo

Kounye a, ann pratike sa nou aprann yo!`,
    contentFr: `## 🧩 Exercices Pratiques

Maintenant, pratiquons ce que nous avons appris!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon dosye nouvo ki rele "my_first_site" ak index.html. Ajoute boilerplate ak non ou kòm <h1>.',
        instructionFr: 'Créer un nouveau dossier appelé "my_first_site" avec index.html. Ajouter le boilerplate avec votre nom comme <h1>.',
        starterCode: `<!DOCTYPE html>
<html lang="ht">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><!-- Ajoute tit ou a isit la --></title>
</head>
<body>
  <!-- Ajoute non ou ak H1 isit la -->
  
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="ht">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pòtrè Mwen</title>
</head>
<body>
  <h1>Non ou</h1>
</body>
</html>`,
        hint: 'Sonje remplace "Non ou" ak non reyèl ou a!'
      },
      {
        id: 2,
        instructionHt: 'Ekri yon ti biyografi nan yon tag <p>. Ajoute yon <hr> anba li.',
        instructionFr: 'Écrire une courte biographie dans un tag <p>. Ajouter un <hr> en dessous.',
        starterCode: `<!-- Kontinye ak kòd anvan an -->
<body>
  <h1>Non ou</h1>
  <!-- Ajoute biyografi ak hr isit la -->
  
</body>`,
        solution: `<body>
  <h1>Non ou</h1>
  <p>Mwen se yon etidyan k ap aprann devlopman web. Mwen renmen teknoloji ak kreyativite.</p>
  <hr>
</body>`,
        hint: 'Pale sou kisa ou renmen ak poukisa w ap aprann koding!'
      },
      {
        id: 3,
        instructionHt: 'Ajoute yon heading <h2> ki rele "Hobbies" ak yon paragraf ki gen 3 hobbies separe ak <br>.',
        instructionFr: 'Ajouter un titre <h2> appelé "Hobbies" avec un paragraphe listant 3 hobbies séparés par <br>.',
        starterCode: `<body>
  <h1>Non ou</h1>
  <p>Biyografi ou a...</p>
  <hr>
  <!-- Ajoute hobbies section isit la -->
  
</body>`,
        solution: `<body>
  <h1>Non ou</h1>
  <p>Biyografi ou a...</p>
  <hr>
  <h2>Hobbies</h2>
  <p>Jwè mizik<br>Li liv yo<br>Koding ak teknoloji</p>
</body>`,
        hint: 'Chwazi 3 bagay ou renmen fè nan tan lib ou!'
      },
      {
        id: 4,
        instructionHt: '⭐ Bonus: Ajoute yon <meta name="description"> nan <head> ki dekri paj ou a.',
        instructionFr: '⭐ Bonus: Ajouter un <meta name="description"> dans <head> qui décrit votre page.',
        starterCode: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pòtrè Mwen</title>
  <!-- Ajoute meta description isit la -->
</head>`,
        solution: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pòtrè Mwen</title>
  <meta name="description" content="Pòtrè pèsonèl mwen ak enfòmasyon sou baze ak entèrè mwen yo.">
</head>`,
        hint: 'Meta description yo ede ak SEO ak parèt nan rezilta rechèch yo!'
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    titleHt: 'Quiz - Test Konesans ou',
    titleFr: 'Quiz - Testez Vos Connaissances',
    contentHt: `## 🧪 Quiz - Test Konesans ou

Ann gade si nou konprann bon bagay yo!`,
    contentFr: `## 🧪 Quiz - Testez Vos Connaissances

Voyons si nous avons bien compris les concepts!`,
    quiz: [
      {
        id: 1,
        questionHt: 'Ki lang ki defini estrikti paj la?',
        questionFr: 'Quel langage définit la structure de la page?',
        options: [
          { ht: 'CSS', fr: 'CSS' },
          { ht: 'HTML', fr: 'HTML' },
          { ht: 'JavaScript', fr: 'JavaScript' },
          { ht: 'Python', fr: 'Python' }
        ],
        correctAnswer: 1,
        explanationHt: 'HTML (HyperText Markup Language) se lang ki itilize pou estrikti ak òganize kòntni paj web yo.',
        explanationFr: 'HTML (HyperText Markup Language) est le langage utilisé pour structurer et organiser le contenu des pages web.'
      },
      {
        id: 2,
        questionHt: 'Kisa <!DOCTYPE html> fè?',
        questionFr: 'Que fait <!DOCTYPE html>?',
        options: [
          { ht: 'Li kreye yon tit', fr: 'Il crée un titre' },
          { ht: 'Li deklare dokiman HTML5', fr: 'Il déclare un document HTML5' },
          { ht: 'Li ajoute style', fr: 'Il ajoute du style' },
          { ht: 'Li kreye yon link', fr: 'Il crée un lien' }
        ],
        correctAnswer: 1,
        explanationHt: '<!DOCTYPE html> di browser la dokiman an ap itilize HTML5 vèsyon an.',
        explanationFr: '<!DOCTYPE html> indique au navigateur que le document utilise la version HTML5.'
      },
      {
        id: 3,
        questionHt: 'Ki kote kòntni ki vizib yo ye?',
        questionFr: 'Où se trouve le contenu visible?',
        options: [
          { ht: 'Nan <head>', fr: 'Dans <head>' },
          { ht: 'Nan <title>', fr: 'Dans <title>' },
          { ht: 'Nan <body>', fr: 'Dans <body>' },
          { ht: 'Nan <meta>', fr: 'Dans <meta>' }
        ],
        correctAnswer: 2,
        explanationHt: 'Tout kòntni ki parèt sou paj la (teks, imaj, etc.) dwe nan <body> tag la.',
        explanationFr: 'Tout le contenu qui apparaît sur la page (texte, images, etc.) doit être dans le tag <body>.'
      },
      {
        id: 4,
        questionHt: 'Ki tag ki itilize pou tit prensipal la?',
        questionFr: 'Quel tag est utilisé pour le titre principal?',
        options: [
          { ht: '<h6>', fr: '<h6>' },
          { ht: '<h3>', fr: '<h3>' },
          { ht: '<h1>', fr: '<h1>' },
          { ht: '<title>', fr: '<title>' }
        ],
        correctAnswer: 2,
        explanationHt: '<h1> se heading ki pi gwo ak pi enpòtan an. Li dwe gen yon sèl <h1> nan chak paj.',
        explanationFr: '<h1> est le titre le plus grand et le plus important. Il ne devrait y avoir qu\'un seul <h1> par page.'
      },
      {
        id: 5,
        questionHt: 'Kisa objektif <meta charset="UTF-8"> ye?',
        questionFr: 'Quel est le but de <meta charset="UTF-8">?',
        options: [
          { ht: 'Li kreye yon link', fr: 'Il crée un lien' },
          { ht: 'Li ajoute koulè', fr: 'Il ajoute des couleurs' },
          { ht: 'Li asire karaktè yo parèt kòrèkteman', fr: 'Il assure l\'affichage correct des caractères' },
          { ht: 'Li fè paj la pi vit', fr: 'Il rend la page plus rapide' }
        ],
        correctAnswer: 2,
        explanationHt: 'UTF-8 asire karaktè espesyal yo (ak aksan yo, emoji yo, etc.) parèt kòrèkteman nan browser la.',
        explanationFr: 'UTF-8 assure que les caractères spéciaux (avec accents, emoji, etc.) s\'affichent correctement dans le navigateur.'
      }
    ]
  },
  {
    id: 7,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè - "Hello, Web" Profil Page',
    titleFr: 'Mini-Projet - Page de Profil "Hello, Web"',
    contentHt: `## 💬 Mini-Pwojè — "Hello, Web" Profil Page

### Kondisyon yo:
✅ Kòmanse ak HTML5 boilerplate konplè
✅ <h1> = Non ou, <p> = ti biyografi
✅ <hr> separator + <h2> seksyon entèrè yo
✅ Paragraf ki gen omwen 3 entèrè
✅ Opsyonèl: ajoute favicon ak <meta description> nan <head>

### Rezilta ki Atann:
Yon paj pwòp ak yon heading prensipal, 1–2 paragraf, ak yon subheading, k ap chaje kòrèkteman nan browser la.

### Konsèy yo:
- Validate HTML ou a ak W3C Markup Validator
- Test nan diferan browser yo
- Asire tit la dekri paj la byen
- Itilize semantic HTML debaz

### Template pou Kòmanse:
\`\`\`html
<!DOCTYPE html>
<html lang="ht">
<head>
  <!-- Ajoute metadata yo isit la -->
</head>
<body>
  <!-- Ajoute kòntni ou a isit la -->
</body>
</html>
\`\`\``,
    contentFr: `## 💬 Mini-Projet — Page de Profil "Hello, Web"

### Exigences:
✅ Commencer avec un boilerplate HTML5 complet
✅ <h1> = Votre nom, <p> = courte bio
✅ Séparateur <hr> + section <h2> des intérêts
✅ Paragraphe listant au moins 3 intérêts
✅ Optionnel: ajouter favicon et <meta description> dans <head>

### Résultat Attendu:
Une page propre avec un titre principal, 1–2 paragraphes, et un sous-titre, se chargeant correctement dans le navigateur.

### Conseils:
- Valider votre HTML avec le W3C Markup Validator
- Tester dans différents navigateurs
- Assurer que le titre décrit bien la page
- Utiliser du HTML sémantique de base

### Template pour Commencer:
\`\`\`html
<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Ajouter vos métadonnées ici -->
</head>
<body>
  <!-- Ajouter votre contenu ici -->
</body>
</html>
\`\`\``,
  },
  {
    id: 8,
    type: 'lesson',
    titleHt: 'Kisa ki Vini Apre a',
    titleFr: 'Ce qui Vient Ensuite',
    contentHt: `## 🧱 Kisa ki Vini Apre a

### Semèn Pwochen → Links, Imaj ak Lis yo

Etidyan yo ap aprann:
- **\`<a>\`** pou konekte paj yo
- **\`<img>\`** pou ajoute imaj yo  
- **\`<ul>\` ak \`<ol>\`** pou òganize enfòmasyon yo
- **Semantic HTML** pi bon

### Pwojè Kontinye:
Nou ap kontinye ak sit nou an ak nou ap ajoute:
- Navigasyon ak links
- Imaj pwofil
- Lis entèrè ak kapasite yo
- Link nan rezo sosyal yo

### Preparasyon:
- Pwatike HTML debaz yo
- Chèche kèk imaj pou sit ou a
- Reflechi sou navigasyon ou vle a

**Bon travay nan semèn sa a! Nou prèt pou lòt aventure yo! 🚀**`,
    contentFr: `## 🧱 Ce qui Vient Ensuite

### Semaine Prochaine → Liens, Images et Listes

Les étudiants apprendront:
- **\`<a>\`** pour connecter les pages
- **\`<img>\`** pour ajouter des images
- **\`<ul>\` et \`<ol>\`** pour organiser l'information
- **HTML Sémantique** amélioré

### Projet Continu:
Nous continuerons avec notre site en ajoutant:
- Navigation avec liens
- Image de profil
- Listes d'intérêts et compétences
- Liens vers réseaux sociaux

### Préparation:
- Pratiquer les bases HTML
- Trouver quelques images pour votre site
- Réfléchir à la navigation que vous voulez

**Bon travail cette semaine! Nous sommes prêts pour d'autres aventures! 🚀**`,
  }
];

export default htmlCssWeek1Cards;