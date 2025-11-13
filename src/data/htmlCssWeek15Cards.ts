// HTML & CSS Week 15: Final Project
// Building "My Portfolio — Final Edition"

export const htmlCssWeek15Cards = [
  // Card 1: Welcome & Overview
  {
    id: 1,
    type: 'lesson',
    icon: '🎯',
    titleHt: 'Byenvini nan Semèn 15: Pwojè Final',
    titleFr: 'Bienvenue à la Semaine 15: Projet Final',
    contentHt: `🎉 **Félisitasyon!** Ou rive nan semèn final nan kou HTML & CSS lan!

Nan semèn sa a, ou pral bati yon sit entènèt konplè ki rele:
**⭐ "My Portfolio — Final Edition"**

**Sa ou pral fè:**
• Konbine tout teknik yo nan Semèn 1-14
• Kreye yon sit pòtrè pwofesyonèl ak 5 seksyon
• Montre ou gen mètriz nan HTML ak CSS
• Prepare yon pwojè ou ka prezante bay moun yo

**Pwojè a gen 5 pati prensipal yo:**
1. 🏠 **Header** - Logo ak navigasyon
2. 🎨 **Hero** - Seksyon akèy ak imaj background
3. 👤 **About** - Enfòmasyon sou ou
4. 💼 **Projects** - Pwojè yo ou te fè
5. 📞 **Contact** - Jan yo ka kontakte ou
6. 📄 **Footer** - Enfòmasyon final

**Egzijans yo:**
✅ Semantic HTML (header, nav, main, section, footer)
✅ CSS Variables ak tipografi
✅ Flexbox oswa Grid
✅ Responsive design (mobil + desktop)  
✅ Animasyon ak transisyon yo
✅ Imaj ekstèn ak icon yo
✅ Google Font yo`,
    titleFr: 'Bienvenue à la Semaine 15: Projet Final',
    contentFr: `🎉 **Félicitations!** Vous êtes arrivé à la semaine finale du cours HTML & CSS!

Cette semaine, vous allez construire un site web complet appelé:
**⭐ "My Portfolio — Final Edition"**

**Ce que vous allez faire:**
• Combiner toutes les techniques des Semaines 1-14
• Créer un site portfolio professionnel avec 5 sections
• Démontrer votre maîtrise du HTML et CSS
• Préparer un projet que vous pouvez présenter

**Le projet a 5 parties principales:**
1. 🏠 **Header** - Logo et navigation
2. 🎨 **Hero** - Section d'accueil avec image de fond
3. 👤 **About** - Informations sur vous
4. 💼 **Projects** - Projets que vous avez réalisés
5. 📞 **Contact** - Comment vous contacter
6. 📄 **Footer** - Informations finales

**Exigences:**
✅ HTML sémantique (header, nav, main, section, footer)
✅ Variables CSS et typographie
✅ Flexbox ou Grid
✅ Design responsive (mobile + desktop)
✅ Animations et transitions
✅ Images externes et icônes
✅ Google Fonts`
  },

  // Card 2: Setup & Structure
  {
    id: 2,
    type: 'lesson',
    icon: '🏗️',
    titleHt: 'Setup ak Estrikti HTML',
    titleFr: 'Configuration et Structure HTML',
    contentHt: `📁 **Konfigire Pwojè a**

**1. Kreye fichye yo:**
\`\`\`
portfolio-final/
├── index.html
├── styles/
│   ├── main.css
│   └── responsive.css
├── images/
│   ├── hero-bg.jpg
│   ├── profile.jpg
│   └── projects/
└── assets/
    └── icons/
\`\`\`

**2. Estrikti HTML debaz:**
\`\`\`html
<!DOCTYPE html>
<html lang="ht">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - Final Edition</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header Section -->
    <header id="header">
        <!-- Navigation content -->
    </header>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="hero">
        </section>
        
        <!-- About Section -->
        <section id="about">
        </section>
        
        <!-- Projects Section -->
        <section id="projects">
        </section>
        
        <!-- Contact Section -->  
        <section id="contact">
        </section>
    </main>
    
    <!-- Footer -->
    <footer id="footer">
    </footer>
</body>
</html>
\`\`\``,
    contentFr: `📁 **Configuration du Projet**

**1. Créer les fichiers:**
\`\`\`
portfolio-final/
├── index.html
├── styles/
│   ├── main.css
│   └── responsive.css
├── images/
│   ├── hero-bg.jpg
│   ├── profile.jpg
│   └── projects/
└── assets/
    └── icons/
\`\`\`

**2. Structure HTML de base:**
\`\`\`html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - Final Edition</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header Section -->
    <header id="header">
        <!-- Navigation content -->
    </header>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="hero">
        </section>
        
        <!-- About Section -->
        <section id="about">
        </section>
        
        <!-- Projects Section -->
        <section id="projects">
        </section>
        
        <!-- Contact Section -->  
        <section id="contact">
        </section>
    </main>
    
    <!-- Footer -->
    <footer id="footer">
    </footer>
</body>
</html>
\`\`\``
  },

  // Card 3: CSS Variables & Base Styles
  {
    id: 3,
    type: 'lesson',
    icon: '🎨',
    titleHt: 'CSS Variables ak Style Debaz',
    titleFr: 'Variables CSS et Styles de Base',
    contentHt: `🎨 **Etabli Sistèm Design lan**

**1. CSS Variables (nan main.css):**
\`\`\`css
:root {
  /* Colors */
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --background-light: #f9fafb;
  --white: #ffffff;
  --border-color: #e5e7eb;
  
  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Reset ak Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--spacing-sm);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}
\`\`\``,
    contentFr: `🎨 **Établir le Système de Design**

**1. Variables CSS (dans main.css):**
\`\`\`css
:root {
  /* Couleurs */
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --background-light: #f9fafb;
  --white: #ffffff;
  --border-color: #e5e7eb;
  
  /* Typographie */
  --font-family: 'Inter', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Espacement */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Ombres */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Reset et Styles de Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--spacing-sm);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}
\`\`\``
  },

  // Card 4: Header Section
  {
    id: 4,
    type: 'practice',
    icon: '🏠',
    titleHt: 'Egzèsis 1: Header ak Navigation',
    titleFr: 'Exercice 1: Header et Navigation',
    contentHt: `🏠 **Kreye Header ak Navigation**

Nan egzèsis sa a, ou pral bati yon header ak yon navigation responsive.`,
    contentFr: `🏠 **Créer le Header et Navigation**

Dans cet exercice, vous allez construire un header avec une navigation responsive.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye header HTML ak logo ak nav links yo',
        instructionFr: 'Créer le HTML du header avec logo et liens de navigation',
        starterCode: `<!-- Header Section -->
<header id="header">
  <nav class="navbar">
    <!-- Ajoute logo ak navigation yo isit la -->
  </nav>
</header>`,
        solution: `<!-- Header Section -->
<header id="header">
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <a href="#home">
          <h2>My Portfolio</h2>
        </a>
      </div>
      
      <!-- Navigation Links -->
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#about" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">Contact</a>
        </li>
      </ul>
      
      <!-- Mobile Menu Button -->
      <div class="nav-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</header>`
      },
      {
        id: 2,
        instructionHt: 'Style header la ak Flexbox pou layout responsive',
        instructionFr: 'Styliser le header avec Flexbox pour un layout responsive',
        starterCode: `/* Header Styles */
.navbar {
  /* Ajoute styles yo isit la */
}

.nav-container {
  /* Ajoute Flexbox layout isit la */
}`,
        solution: `/* Header Styles */
.navbar {
  background: var(--white);
  padding: var(--spacing-sm) 0;
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h2 {
  color: var(--primary-color);
  font-size: var(--font-size-2xl);
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: var(--text-dark);
  transition: color 0.3s ease;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 6px;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
}

/* Mobile Menu Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  margin: 3px 0;
  transition: 0.3s;
}`
      }
    ]
  },

  // Card 5: Hero Section
  {
    id: 5,
    type: 'practice',
    icon: '🎨',
    titleHt: 'Egzèsis 2: Hero Section ak Background Image',
    titleFr: 'Exercice 2: Section Hero avec Image de Fond',
    contentHt: `🎨 **Kreye Hero Section ak Background**

Hero section lan se premye bagay moun yo wè. Li dwe gen yon background image ak tèks ki atiran.`,
    contentFr: `🎨 **Créer la Section Hero avec Background**

La section hero est la première chose que les gens voient. Elle doit avoir une image de fond et un texte attrayant.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye HTML pou hero section ak heading ak CTA button',
        instructionFr: 'Créer le HTML pour la section hero avec titre et bouton CTA',
        starterCode: `<!-- Hero Section -->
<section id="hero">
  <div class="hero-content">
    <!-- Ajoute hero content isit la -->
  </div>
</section>`,
        solution: `<!-- Hero Section -->
<section id="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">
        Welcome to My Portfolio
      </h1>
      <p class="hero-subtitle">
        I'm a passionate developer creating amazing web experiences
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-outline">Get In Touch</a>
      </div>
    </div>
  </div>
</section>`
      },
      {
        id: 2,
        instructionHt: 'Style hero section ak background image ak gradient overlay',
        instructionFr: 'Styliser la section hero avec image de fond et gradient overlay',
        starterCode: `/* Hero Section */
#hero {
  /* Ajoute background image ak height */
}

.hero-content {
  /* Ajoute centering ak styling */
}`,
        solution: `/* Hero Section */
#hero {
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.8),
    rgba(30, 64, 175, 0.8)
  ),
  url('images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  margin-top: 80px; /* Account for fixed header */
}

.hero-content {
  max-width: 800px;
  padding: 0 var(--spacing-md);
  animation: heroFadeIn 1s ease-in-out;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary {
  background: var(--accent-color);
  color: var(--white);
}

.btn-primary:hover {
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-outline {
  border: 2px solid var(--white);
  color: var(--white);
}

.btn-outline:hover {
  background: var(--white);
  color: var(--primary-color);
}

/* Animations */
@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
      }
    ]
  },

  // Card 6: About Section
  {
    id: 6,
    type: 'practice',
    icon: '👤',
    titleHt: 'Egzèsis 3: About Section ak Profile Image',
    titleFr: 'Exercice 3: Section À Propos avec Image de Profil',
    contentHt: `👤 **Kreye About Section**

Section sa a ap prezante ou ak espèryen ou yo nan yon fòm atiran ak pwofesyonèl.`,
    contentFr: `👤 **Créer la Section À Propos**

Cette section va vous présenter ainsi que vos expériences d'une manière attrayante et professionnelle.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye HTML pou about section ak profile image ak bio text',
        instructionFr: 'Créer le HTML pour la section about avec image de profil et texte bio',
        starterCode: `<!-- About Section -->
<section id="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <!-- Ajoute about content isit la -->
  </div>
</section>`,
        solution: `<!-- About Section -->
<section id="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <div class="about-image">
        <img src="images/profile.jpg" alt="Profile Picture" class="profile-img">
      </div>
      <div class="about-text">
        <h3>Hello, I'm John Doe</h3>
        <p class="about-description">
          I'm a passionate web developer with over 3 years of experience creating 
          beautiful and functional websites. I specialize in HTML, CSS, JavaScript, 
          and modern frameworks.
        </p>
        <p class="about-description">
          When I'm not coding, I enjoy reading tech blogs, learning new technologies, 
          and contributing to open-source projects. I believe in writing clean, 
          maintainable code that solves real-world problems.
        </p>
        <div class="skills-icons">
          <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div class="skill-item">
            <i class="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div class="skill-item">
            <i class="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div class="skill-item">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
      },
      {
        id: 2,
        instructionHt: 'Style about section ak Grid layout ak responsive design',
        instructionFr: 'Styliser la section about avec layout Grid et design responsive',
        starterCode: `/* About Section */
#about {
  /* Ajoute section styling */
}

.about-content {
  /* Ajoute Grid layout */
}`,
        solution: `/* General Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Section Styles */
.section {
  padding: var(--spacing-2xl) 0;
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--text-dark);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  margin: var(--spacing-sm) auto 0;
}

/* About Section */
#about {
  background: var(--background-light);
  padding: var(--spacing-2xl) 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-2xl);
  align-items: center;
  margin-top: var(--spacing-xl);
}

.about-image {
  text-align: center;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--white);
  box-shadow: var(--shadow-lg);
  transition: transform 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.05);
}

.about-text h3 {
  font-size: var(--font-size-2xl);
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

.about-description {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.skills-icons {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  flex-wrap: wrap;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.skill-item i {
  font-size: var(--font-size-2xl);
  color: var(--primary-color);
}

.skill-item span {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-dark);
}`
      }
    ]
  },

  // Card 7: Projects Section
  {
    id: 7,
    type: 'practice',
    icon: '💼',
    titleHt: 'Egzèsis 4: Projects Section ak Cards',
    titleFr: 'Exercice 4: Section Projets avec Cartes',
    contentHt: `💼 **Kreye Projects Section**

Section sa a ap montre pwojè yo ou te fè ak card animation ak hover effects.`,
    contentFr: `💼 **Créer la Section Projets**

Cette section va afficher vos projets réalisés avec des animations de cartes et des effets de survol.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye HTML pou projects grid ak project cards',
        instructionFr: 'Créer le HTML pour la grille de projets avec les cartes de projet',
        starterCode: `<!-- Projects Section -->
<section id="projects" class="section">
  <div class="container">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-grid">
      <!-- Ajoute project cards yo isit la -->
    </div>
  </div>
</section>`,
        solution: `<!-- Projects Section -->
<section id="projects" class="section">
  <div class="container">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-grid">
      <!-- Project Card 1 -->
      <div class="project-card">
        <div class="project-image">
          <img src="images/projects/project1.jpg" alt="E-commerce Website">
          <div class="project-overlay">
            <div class="project-links">
              <a href="#" class="btn-icon" title="View Live">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="#" class="btn-icon" title="View Code">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">E-commerce Website</h3>
          <p class="project-description">
            A modern e-commerce website built with HTML, CSS, and JavaScript featuring 
            responsive design and smooth animations.
          </p>
          <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">JavaScript</span>
          </div>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div class="project-card">
        <div class="project-image">
          <img src="images/projects/project2.jpg" alt="Portfolio Website">
          <div class="project-overlay">
            <div class="project-links">
              <a href="#" class="btn-icon" title="View Live">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="#" class="btn-icon" title="View Code">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">Portfolio Website</h3>
          <p class="project-description">
            A personal portfolio website showcasing my skills and projects with 
            a clean, modern design and interactive elements.
          </p>
          <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">Flexbox</span>
          </div>
        </div>
      </div>

      <!-- Project Card 3 -->
      <div class="project-card">
        <div class="project-image">
          <img src="images/projects/project3.jpg" alt="Landing Page">
          <div class="project-overlay">
            <div class="project-links">
              <a href="#" class="btn-icon" title="View Live">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="#" class="btn-icon" title="View Code">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">Business Landing Page</h3>
          <p class="project-description">
            A responsive landing page for a local business with contact forms, 
            testimonials, and smooth scrolling navigation.
          </p>
          <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">Grid</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
      },
      {
        id: 2,
        instructionHt: 'Style projects grid ak hover animations ak card effects',
        instructionFr: 'Styliser la grille de projets avec animations de survol et effets de cartes',
        starterCode: `/* Projects Section */
.projects-grid {
  /* Ajoute Grid layout */
}

.project-card {
  /* Ajoute card styling ak animation */
}`,
        solution: `/* Projects Section */
#projects {
  background: var(--white);
  padding: var(--spacing-2xl) 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.project-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: var(--spacing-md);
}

.btn-icon {
  width: 45px;
  height: 45px;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--accent-color);
  color: var(--white);
  transform: scale(1.1);
}

.project-content {
  padding: var(--spacing-lg);
}

.project-title {
  font-size: var(--font-size-xl);
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
}

.project-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tech-tag {
  background: var(--background-light);
  color: var(--primary-color);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  font-weight: 500;
}`
      }
    ]
  },

  // Card 8: Contact Section
  {
    id: 8,
    type: 'practice',
    icon: '📞',
    titleHt: 'Egzèsis 5: Contact Section ak Social Links',
    titleFr: 'Exercice 5: Section Contact avec Liens Sociaux',
    contentHt: `📞 **Kreye Contact Section**

Contact section lan ap bay moun yo fòm pou yo ka kominike ak ou ak links sosyal yo.`,
    contentFr: `📞 **Créer la Section Contact**

La section contact va donner aux gens un formulaire pour communiquer avec vous et des liens sociaux.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye HTML pou contact form ak social icons',
        instructionFr: 'Créer le HTML pour le formulaire de contact et les icônes sociales',
        starterCode: `<!-- Contact Section -->
<section id="contact" class="section">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <!-- Ajoute contact content isit la -->
  </div>
</section>`,
        solution: `<!-- Contact Section -->
<section id="contact" class="section">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Let's Connect</h3>
        <p>
          I'm always interested in new opportunities and exciting projects. 
          Feel free to reach out if you'd like to work together!
        </p>
        
        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>john.doe@example.com</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>New York, NY</span>
          </div>
        </div>
        
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <form class="contact-form">
        <div class="form-group">
          <input type="text" id="name" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <input type="text" id="subject" name="subject" placeholder="Subject" required>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </div>
</section>`
      },
      {
        id: 2,
        instructionHt: 'Style contact section ak form styling ak responsive design',
        instructionFr: 'Styliser la section contact avec style de formulaire et design responsive',
        starterCode: `/* Contact Section */
#contact {
  /* Ajoute section styling */
}

.contact-content {
  /* Ajoute layout ak styling */
}`,
        solution: `/* Contact Section */
#contact {
  background: var(--background-light);
  padding: var(--spacing-2xl) 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-xl);
}

.contact-info h3 {
  font-size: var(--font-size-2xl);
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

.contact-info p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.contact-details {
  margin-bottom: var(--spacing-xl);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.contact-item i {
  width: 20px;
  color: var(--primary-color);
  font-size: var(--font-size-lg);
}

.contact-item span {
  color: var(--text-light);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  width: 45px;
  height: 45px;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.social-link:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Contact Form */
.contact-form {
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  transition: border-color 0.3s ease;
  background: var(--white);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form .btn {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
  cursor: pointer;
  border: none;
}`
      }
    ]
  },

  // Card 9: Footer
  {
    id: 9,
    type: 'practice',
    icon: '📄',
    titleHt: 'Egzèsis 6: Footer ak Final Touches',
    titleFr: 'Exercice 6: Footer et Touches Finales',
    contentHt: `📄 **Kreye Footer ak Final Touches**

Footer lan se finisman pwojè a ak enfòmasyon final yo ak smooth scroll animation.`,
    contentFr: `📄 **Créer le Footer et Touches Finales**

Le footer est la finition du projet avec les informations finales et des animations de défilement fluide.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye footer ak back-to-top button',
        instructionFr: 'Créer le footer avec bouton retour en haut',
        starterCode: `<!-- Footer -->
<footer id="footer">
  <!-- Ajoute footer content isit la -->
</footer>`,
        solution: `<!-- Footer -->
<footer id="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-info">
        <h3>John Doe</h3>
        <p>Web Developer & Designer</p>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</footer>

<!-- Back to Top Button -->
<button id="backToTop" class="back-to-top">
  <i class="fas fa-chevron-up"></i>
</button>`
      },
      {
        id: 2,
        instructionHt: 'Style footer ak responsive design ak smooth scroll JavaScript',
        instructionFr: 'Styliser le footer avec design responsive et JavaScript de défilement fluide',
        starterCode: `/* Footer */
#footer {
  /* Ajoute footer styling */
}

/* Back to Top Button */
.back-to-top {
  /* Ajoute button styling */
}`,
        solution: `/* Footer */
#footer {
  background: var(--text-dark);
  color: var(--white);
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer-info h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.footer-info p {
  color: #9ca3af;
  margin: var(--spacing-xs) 0;
}

.footer-links {
  display: flex;
  gap: var(--spacing-lg);
}

.footer-links a {
  color: #9ca3af;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--white);
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top:hover {
  background: var(--secondary-color);
  transform: translateY(-3px);
}

.back-to-top.show {
  display: flex;
}

/* Scroll Animation */
html {
  scroll-behavior: smooth;
}`
      },
      {
        id: 3,
        instructionHt: 'Ajoute JavaScript pou smooth scroll ak back-to-top functionality',
        instructionFr: 'Ajouter le JavaScript pour le défilement fluide et la fonctionnalité retour en haut',
        starterCode: `// JavaScript for smooth scroll and back-to-top
// Ajoute JavaScript code isit la`,
        solution: `// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Form Submission (Basic)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});`
      }
    ]
  },

  // Card 10: Responsive Design
  {
    id: 10,
    type: 'practice',
    icon: '📱',
    titleHt: 'Egzèsis 7: Responsive Design ak Media Queries',
    titleFr: 'Exercice 7: Design Responsive avec Media Queries',
    contentHt: `📱 **Kreye Responsive Design ak Media Queries**

Pwojè a dwe travay sou tout aparèy yo ak media queries pou mobile ak tablet.`,
    contentFr: `📱 **Créer un Design Responsive avec Media Queries**

Le projet doit fonctionner sur tous les appareils avec des media queries pour mobile et tablette.`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute media queries pou mobile devices (responsive.css)',
        instructionFr: 'Ajouter les media queries pour les appareils mobiles (responsive.css)',
        starterCode: `/* Responsive Design - responsive.css */

/* Tablet Styles */
@media (max-width: 1024px) {
  /* Ajoute tablet styles isit la */
}

/* Mobile Styles */
@media (max-width: 768px) {
  /* Ajoute mobile styles isit la */
}`,
        solution: `/* Responsive Design - responsive.css */

/* Tablet Styles */
@media (max-width: 1024px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  /* Navigation */
  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--white);
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--spacing-xl);
    transition: left 0.3s ease;
    box-shadow: var(--shadow-lg);
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .nav-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  /* Hero Section */
  #hero {
    margin-top: 70px;
    padding: var(--spacing-xl) 0;
    min-height: 70vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
  
  /* About Section */
  .profile-img {
    width: 200px;
    height: 200px;
  }
  
  .skills-icons {
    justify-content: center;
  }
  
  /* Projects */
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  /* Contact */
  .contact-content {
    text-align: center;
  }
  
  .contact-details {
    text-align: left;
  }
  
  .social-links {
    justify-content: center;
  }
  
  /* Footer */
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .footer-links {
    justify-content: center;
  }
  
  /* Sections */
  .section {
    padding: var(--spacing-xl) 0;
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .project-card {
    margin: 0 var(--spacing-xs);
  }
  
  .contact-form {
    padding: var(--spacing-md);
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
  }
}

/* Animations for Mobile */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`
      }
    ]
  },

  // Card 11: Final Checklist
  {
    id: 11,
    type: 'quiz',
    icon: '✅',
    titleHt: 'Quiz Final: Checklist ak Validation',
    titleFr: 'Quiz Final: Checklist et Validation',
    contentHt: `✅ **Final Checklist ak Validation**

Verifye si pwojè ou an gen tout egzijans yo ak bon pratik yo.`,
    contentFr: `✅ **Checklist Final et Validation**

Vérifiez si votre projet a toutes les exigences et bonnes pratiques.`,
    quiz: [
      {
        id: 1,
        questionHt: "Èske ou gen semantic HTML ak header, nav, main, section, footer?",
        questionFr: "Avez-vous un HTML sémantique avec header, nav, main, section, footer?",
        options: [
          { ht: "Wi, tout bagay semantic", fr: "Oui, tout est sémantique" },
          { ht: "Non, sèlman div yo", fr: "Non, seulement des divs" }
        ],
        correctAnswer: 0,
        explanationHt: "Semantic HTML yo bon pou SEO ak accessibility.",
        explanationFr: "Le HTML sémantique est bon pour le SEO et l'accessibilité."
      },
      {
        id: 2,
        questionHt: "Èske ou itilize CSS Variables nan :root?",
        questionFr: "Utilisez-vous les variables CSS dans :root?",
        options: [
          { ht: "Wi, pou koulè ak spacing", fr: "Oui, pour les couleurs et l'espacement" },
          { ht: "Non, hardcode tout bagay", fr: "Non, tout est codé en dur" }
        ],
        correctAnswer: 0,
        explanationHt: "CSS Variables yo fè kod la pi maintainable ak konsistan.",
        explanationFr: "Les variables CSS rendent le code plus maintenable et cohérent."
      },
      {
        id: 3,
        questionHt: "Èske ou gen responsive design ak media queries?",
        questionFr: "Avez-vous un design responsive avec des media queries?",
        options: [
          { ht: "Wi, desktop ak mobile", fr: "Oui, desktop et mobile" },
          { ht: "Non, sèlman desktop", fr: "Non, seulement desktop" }
        ],
        correctAnswer: 0,
        explanationHt: "Responsive design yo esansyèl pou eksperyans itilizatè yo.",
        explanationFr: "Le design responsive est essentiel pour l'expérience utilisateur."
      }
    ]
  },

  // Card 12: Project Submission
  {
    id: 12,
    type: 'lesson',
    icon: '🎉',
    titleHt: 'Submission ak Celebration',
    titleFr: 'Soumission et Célébration',
    contentHt: `🎉 **Félisitasyon! Ou fini pwojè final lan!**

**Sa ou reyalize:**
✅ Yon sit entènèt konplè ak 5 seksyon
✅ Semantic HTML ak aksesibilite
✅ CSS Variables ak sistèm design konsistan
✅ Flexbox ak Grid layout yo
✅ Responsive design ak media queries
✅ Animasyon ak transisyon yo
✅ Imaj ak icon ekstèn yo
✅ JavaScript interaktif

**Etap final yo:**

**1. Testing Final**
• Teste sou diferan navigatè yo (Chrome, Firefox, Safari)
• Verifye sou mobile ak tablet
• Valide HTML ak CSS yo ak validator yo

**2. Optimization**
• Konprime imaj yo
• Minimise CSS ak JavaScript (opsyonèl)
• Teste vitès loading

**3. Deployment**
• Upload sou GitHub Pages oswa Netlify
• Konfigire domain custom (opsyonèl)
• Pataje ak moun yo!

**4. Portfolio Enhancement**
• Ajoute nan CV ou
• Kreye case study ak deskripsyon pwosè a
• Prepare pou entèvyou ak prezantasyon

**Pwochen etap yo:**
• Aprann JavaScript pi fon
• Eksplore framework yo tankou React
• Devlope backend skills ak Node.js
• Kontinye bati ak aprann!

**👏 Ou se yon web developer kounye a!**`,
    contentFr: `🎉 **Félicitations! Vous avez terminé le projet final!**

**Ce que vous avez accompli:**
✅ Un site web complet avec 5 sections
✅ HTML sémantique et accessibilité
✅ Variables CSS et système de design cohérent
✅ Layouts Flexbox et Grid
✅ Design responsive avec media queries
✅ Animations et transitions
✅ Images et icônes externes
✅ JavaScript interactif

**Étapes finales:**

**1. Test Final**
• Tester sur différents navigateurs (Chrome, Firefox, Safari)
• Vérifier sur mobile et tablette
• Valider HTML et CSS avec les validateurs

**2. Optimisation**
• Compresser les images
• Minifier CSS et JavaScript (optionnel)
• Tester la vitesse de chargement

**3. Déploiement**
• Upload sur GitHub Pages ou Netlify
• Configurer un domaine personnalisé (optionnel)
• Partager avec le monde!

**4. Amélioration du Portfolio**
• Ajouter à votre CV
• Créer une étude de cas avec description du processus
• Préparer pour les entretiens et présentations

**Prochaines étapes:**
• Apprendre JavaScript plus en profondeur
• Explorer les frameworks comme React
• Développer des compétences backend avec Node.js
• Continuer à construire et apprendre!

**👏 Vous êtes maintenant un développeur web!**`
  }
];

// Export the cards
export default htmlCssWeek15Cards;