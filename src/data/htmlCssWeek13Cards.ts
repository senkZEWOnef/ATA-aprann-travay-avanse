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

const htmlCssWeek13Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Prezantasyon CSS Variables (Custom Properties)',
    titleFr: 'Introduction aux Variables CSS (Propriétés Personnalisées)',
    contentHt: `**CSS Variables** yo se reusable values ki ou ka stock ak reutilize nan tout stylesheet ou an.

**Syntax:**
- **Declare**: \`--variable-name: value;\` (obligatèman ak double dash)
- **Use**: \`var(--variable-name)\`

**Benefits:**
- **Consistency** - Yon sèl plas pou change values yo
- **Maintainability** - Pi facil pou maintain ak update
- **DRY Code** - Don't Repeat Yourself
- **Dynamic** - Ou ka change yo ak JavaScript

**Global Variables**: Mete yo nan \`:root\` pou ou ka use yo partou.`,
    contentFr: `**Les Variables CSS** sont des valeurs réutilisables que vous pouvez stocker et réutiliser dans toute votre feuille de style.

**Syntaxe:**
- **Déclarer**: \`--nom-variable: valeur;\` (obligatoirement avec double tiret)
- **Utiliser**: \`var(--nom-variable)\`

**Avantages:**
- **Cohérence** - Un seul endroit pour changer valeurs
- **Maintenabilité** - Plus facile à maintenir et mettre à jour
- **Code DRY** - Don't Repeat Yourself
- **Dynamique** - Vous pouvez les changer avec JavaScript

**Variables Globales**: Les mettre dans \`:root\` pour les utiliser partout.`,
    codeExample: `/* Declare global variables nan :root */
:root {
  --primary-color: #ffd43b;
  --secondary-color: #007bff;
  --dark-color: #111;
  --light-color: #f8f8f8;
  --text-color: #222;
  
  --border-radius: 8px;
  --spacing-unit: 1rem;
  --font-main: 'Open Sans', sans-serif;
}

/* Use variables nan properties yo */
body {
  background: var(--light-color);
  color: var(--text-color);
  font-family: var(--font-main);
}

.button {
  background: var(--primary-color);
  color: var(--dark-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
  border: none;
  cursor: pointer;
}

.card {
  background: white;
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 2);
  margin: var(--spacing-unit);
}`
  },
  
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Kreye Color Design Tokens',
    titleFr: 'Créer des Tokens de Couleur Design',
    contentHt: `**Color Tokens** yo se systematic approach pou organize colors nan design system ou an.

**Color Categories:**
- **Primary/Secondary** - Brand colors yo
- **Neutral** - Grays, whites, blacks
- **Semantic** - Success, error, warning colors
- **Text** - Different text color levels

**Naming Convention:**
- Use descriptive names: \`--color-primary\`, \`--color-text-muted\`
- Avoid literal names: \`--blue\`, \`--green\`
- Think about purpose, pa appearance

**Color Palette Strategy:**
- Start ak 2-3 main colors
- Add neutral grays
- Include semantic colors`,
    contentFr: `**Les Tokens de Couleur** sont une approche systématique pour organiser couleurs dans votre système design.

**Catégories Couleurs:**
- **Primaire/Secondaire** - Couleurs de marque
- **Neutres** - Gris, blancs, noirs
- **Sémantiques** - Couleurs succès, erreur, avertissement
- **Texte** - Différents niveaux couleur texte

**Convention Nommage:**
- Utiliser noms descriptifs: \`--color-primary\`, \`--color-text-muted\`
- Éviter noms littéraux: \`--blue\`, \`--green\`
- Penser au but, pas à l'apparence

**Stratégie Palette:**
- Commencer avec 2-3 couleurs principales
- Ajouter gris neutres
- Inclure couleurs sémantiques`,
    codeExample: `/* Color Design Tokens */
:root {
  /* Brand Colors */
  --color-primary: #ffd43b;
  --color-primary-dark: #ffbf00;
  --color-primary-light: #fff3c4;
  
  --color-secondary: #007bff;
  --color-secondary-dark: #0056b3;
  --color-secondary-light: #cce7ff;
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-100: #f8f9fa;
  --color-gray-200: #e9ecef;
  --color-gray-500: #6c757d;
  --color-gray-800: #343a40;
  --color-black: #000000;
  
  /* Text Colors */
  --color-text-primary: #222222;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  --color-text-inverse: #ffffff;
  
  /* Semantic Colors */
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-error: #dc3545;
  --color-info: #17a2b8;
}

/* Apply color tokens */
.header {
  background: var(--color-primary);
  color: var(--color-text-primary);
}

.success-message {
  background: var(--color-success);
  color: var(--color-text-inverse);
}

.muted-text {
  color: var(--color-text-muted);
}`
  },

  {
    id: 3,
    type: 'lesson',
    titleHt: 'Spacing ak Typography Tokens',
    titleFr: 'Tokens d\'Espacement et Typographie',
    contentHt: `**Spacing Tokens** kreye consistent rhythm nan design ou an.

**Spacing Scale:**
- Use multipliers of base unit (8px, 16px)
- Create systematic progression
- Name according to size: xs, sm, md, lg, xl

**Typography Tokens:**
- **Font Families** - Primary, secondary fonts  
- **Font Sizes** - Hierarchical scale
- **Font Weights** - Light, regular, semibold, bold
- **Line Heights** - For good readability

**Consistent Spacing = Professional Look**`,
    contentFr: `**Les Tokens d'Espacement** créent rythme cohérent dans votre design.

**Échelle Espacement:**
- Utiliser multiples d'unité base (8px, 16px)
- Créer progression systématique
- Nommer selon taille: xs, sm, md, lg, xl

**Tokens Typographie:**
- **Familles Police** - Polices primaire, secondaire
- **Tailles Police** - Échelle hiérarchique
- **Poids Police** - Light, regular, semibold, bold
- **Hauteurs Ligne** - Pour bonne lisibilité

**Espacement Cohérent = Aspect Professionnel**`,
    codeExample: `/* Spacing Design Tokens */
:root {
  /* Base spacing unit (8px system) */
  --space-base: 8px;
  
  /* Spacing scale */
  --space-xs: calc(var(--space-base) * 0.5);    /* 4px */
  --space-sm: var(--space-base);                /* 8px */
  --space-md: calc(var(--space-base) * 2);      /* 16px */
  --space-lg: calc(var(--space-base) * 3);      /* 24px */
  --space-xl: calc(var(--space-base) * 4);      /* 32px */
  --space-2xl: calc(var(--space-base) * 6);     /* 48px */
  
  /* Typography tokens */
  --font-family-primary: 'Poppins', sans-serif;
  --font-family-secondary: 'Open Sans', sans-serif;
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 2rem;      /* 32px */
  
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
}

/* Apply tokens */
h1 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-lg);
}

.card {
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
}

.button {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
}`
  },

  {
    id: 4,
    type: 'lesson',
    titleHt: 'Radius, Shadows ak Other Design Tokens',
    titleFr: 'Radius, Ombres et Autres Tokens Design',
    contentHt: `**Visual Design Tokens** yo ajoute polish ak consistency nan UI ou an.

**Border Radius Tokens:**
- Small radius pou subtle rounding
- Medium pou cards ak buttons  
- Large pou images ak special elements
- Full pou circular elements

**Shadow Tokens:**
- Elevation system (sm, md, lg)
- Different shadows pou different layers
- Include focus ak hover shadows

**Other Useful Tokens:**
- **Transitions** - Duration ak easing
- **Z-Index** - Layer management
- **Breakpoints** - Responsive design`,
    contentFr: `**Les Tokens Design Visuel** ajoutent polish et cohérence à votre UI.

**Tokens Border Radius:**
- Petit radius pour arrondis subtils
- Moyen pour cartes et boutons
- Grand pour images et éléments spéciaux
- Complet pour éléments circulaires

**Tokens Ombre:**
- Système élévation (sm, md, lg)
- Différentes ombres pour différentes couches
- Inclure ombres focus et hover

**Autres Tokens Utiles:**
- **Transitions** - Durée et courbes
- **Z-Index** - Gestion couches
- **Breakpoints** - Design responsive`,
    codeExample: `/* Visual Design Tokens */
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-base: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 50%;
  
  /* Shadows (elevation system) */
  --shadow-none: none;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 8px 15px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 15px 25px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.2);
  
  /* Focus shadows */
  --shadow-focus-primary: 0 0 0 3px rgba(255, 212, 59, 0.3);
  --shadow-focus-secondary: 0 0 0 3px rgba(0, 123, 255, 0.25);
  
  /* Transition tokens */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Z-Index scale */
  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-modal: 1000;
  --z-index-tooltip: 1100;
  
  /* Responsive breakpoints */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}

/* Apply visual tokens */
.card {
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-base);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.button {
  border-radius: var(--radius-base);
  transition: all var(--transition-fast);
}

.button:focus {
  box-shadow: var(--shadow-focus-primary);
}

.profile-image {
  border-radius: var(--radius-full);
}

.modal {
  z-index: var(--z-index-modal);
  box-shadow: var(--shadow-xl);
}`
  },

  {
    id: 5,
    type: 'lesson',
    titleHt: 'Variable Scope ak Cascading',
    titleFr: 'Portée Variables et Cascade',
    contentHt: `**CSS Variables yo respect cascading nature of CSS** ak yo gen scope based on where yo defined.

**Global Scope (:root):**
- Available partou nan document
- Best practice pou design tokens
- Override-able nan nested selectors

**Local Scope:**
- Defined nan specific selector
- Only available inside that selector ak children yo li yo
- Override parent variables

**Variable Inheritance:**
- Children inherit parent variables  
- Ou ka override yo locally
- Perfect pou theming ak component variations`,
    contentFr: `**Les Variables CSS respectent nature cascade de CSS** et ont une portée basée sur où elles sont définies.

**Portée Globale (:root):**
- Disponibles partout dans document
- Bonne pratique pour tokens design
- Redéfinissables dans sélecteurs imbriqués

**Portée Locale:**
- Définies dans sélecteur spécifique
- Seulement disponibles dans ce sélecteur et ses enfants
- Redéfinissent variables parent

**Héritage Variables:**
- Enfants héritent variables parent
- Vous pouvez les redéfinir localement
- Parfait pour thèmes et variations composants`,
    codeExample: `/* Global variables nan :root */
:root {
  --primary-color: #007bff;
  --text-color: #333;
  --background: #fff;
  --border-radius: 8px;
}

/* Component ak local variable override */
.card {
  background: var(--background);
  color: var(--text-color);
  border-radius: var(--border-radius);
  
  /* Local variable */
  --card-padding: 1.5rem;
  padding: var(--card-padding);
}

/* Different card variant ak different local values */
.card-highlight {
  /* Override global variables locally */
  --primary-color: #28a745;
  --background: #f8fff9;
  
  background: var(--background);
  border: 2px solid var(--primary-color);
}

/* Dark theme ak scope override */
.dark-theme {
  --primary-color: #ffd43b;
  --text-color: #e0e0e0;
  --background: #1a1a1a;
  --card-background: #2d2d2d;
}

.dark-theme .card {
  background: var(--card-background);
  color: var(--text-color);
}

/* Media query ak variable changes */
@media (max-width: 768px) {
  :root {
    --border-radius: 6px;  /* Smaller radius on mobile */
    --base-spacing: 0.75rem;
  }
}

/* CSS calc ak variables */
.container {
  --container-width: 1200px;
  --container-padding: 2rem;
  
  max-width: var(--container-width);
  padding: 0 var(--container-padding);
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    --container-padding: 1rem;  /* Less padding on mobile */
  }
}`
  },

  {
    id: 6,
    type: 'lesson',
    titleHt: 'Theme Switching ak Dynamic Variables',
    titleFr: 'Changement de Thème et Variables Dynamiques',
    contentHt: `**CSS Variables yo perfect pou theme switching** paske yo ka change dynamically.

**Theme Implementation Strategy:**
1. Define default theme nan :root
2. Create theme variant classes (.dark-theme, .high-contrast)
3. Override variables nan theme classes yo
4. Apply theme class to body/html

**Advanced Theming:**
- Use data attributes: \`[data-theme="dark"]\`
- Combine ak JavaScript pou interactive switching
- Save user preference nan localStorage
- Respect system preferences ak \`prefers-color-scheme\`

**Theme-Agnostic Components:**
- Design components ak variables
- Yo automatically adapt to theme changes`,
    contentFr: `**Les Variables CSS sont parfaites pour changement thème** car elles peuvent changer dynamiquement.

**Stratégie Implémentation Thème:**
1. Définir thème par défaut dans :root
2. Créer classes variantes thème (.dark-theme, .high-contrast)
3. Redéfinir variables dans classes thème
4. Appliquer classe thème à body/html

**Thèmes Avancés:**
- Utiliser attributs data: \`[data-theme="dark"]\`
- Combiner avec JavaScript pour changement interactif
- Sauvegarder préférence utilisateur dans localStorage
- Respecter préférences système avec \`prefers-color-scheme\`

**Composants Agnostiques Thème:**
- Designer composants avec variables
- Ils s'adaptent automatiquement aux changements thème`,
    codeExample: `/* Default light theme */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #333333;
  --color-text-muted: #6c757d;
  --color-border: #dee2e6;
  
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow-base: 0 2px 4px var(--shadow-color);
}

/* Dark theme override */
[data-theme="dark"] {
  --color-primary: #4dabf7;
  --color-secondary: #adb5bd;
  --color-background: #121212;
  --color-surface: #1e1e1e;
  --color-text: #e0e0e0;
  --color-text-muted: #adb5bd;
  --color-border: #333333;
  
  --shadow-color: rgba(0, 0, 0, 0.3);
  --shadow-base: 0 2px 8px var(--shadow-color);
}

/* High contrast theme */
[data-theme="high-contrast"] {
  --color-primary: #0000ff;
  --color-secondary: #666666;
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-text-muted: #000000;
  --color-border: #000000;
}

/* Theme-agnostic components */
.card {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-base);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.button {
  background: var(--color-primary);
  color: var(--color-background);
  border: 2px solid var(--color-primary);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-base);
}

.button:hover {
  background: var(--color-background);
  color: var(--color-primary);
}

/* Respect system preferences */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #121212;
    --color-text: #e0e0e0;
    /* Automatic dark mode si user pa choose manually */
  }
}

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease, 
              color 0.3s ease, 
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}

/* Theme switcher button */
.theme-toggle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-base);
  cursor: pointer;
}`
  },

  {
    id: 7,
    type: 'quiz',
    titleHt: 'Quiz - CSS Variables ak Design Systems',
    titleFr: 'Quiz - Variables CSS et Systèmes Design',
    contentHt: 'Test konesans ou sou CSS variables ak design tokens',
    contentFr: 'Testez vos connaissances sur variables CSS et tokens design',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki kote nou abitwèlman mete global CSS variables yo?',
        questionFr: 'Où place-t-on habituellement les variables CSS globales?',
        options: [
          { ht: 'body', fr: 'body' },
          { ht: ':root', fr: ':root' },
          { ht: 'html', fr: 'html' },
          { ht: '*', fr: '*' }
        ],
        correctAnswer: 1,
        explanationHt: ':root se pseudo-class ki target root element (html) ak se best practice pou global variables.',
        explanationFr: ':root est la pseudo-class qui cible l\'élément racine (html) et c\'est la bonne pratique pour variables globales.'
      },
      {
        id: 2,
        questionHt: 'Ki jan ou itilize yon CSS variable?',
        questionFr: 'Comment utilise-t-on une variable CSS?',
        options: [
          { ht: 'var(--name)', fr: 'var(--name)' },
          { ht: '$(--name)', fr: '$(--name)' },
          { ht: '--name', fr: '--name' },
          { ht: 'use(--name)', fr: 'use(--name)' }
        ],
        correctAnswer: 0,
        explanationHt: 'var() function an se jan pou access CSS variables yo nan properties yo.',
        explanationFr: 'La fonction var() est la façon d\'accéder aux variables CSS dans les propriétés.'
      },
      {
        id: 3,
        questionHt: 'Ki avantaj prensipal CSS variables yo?',
        questionFr: 'Quel est l\'avantage principal des variables CSS?',
        options: [
          { ht: 'Yo rann CSS pi vit', fr: 'Elles rendent CSS plus rapide' },
          { ht: 'Yo kreye consistent, reusable design tokens', fr: 'Elles créent tokens design cohérents et réutilisables' },
          { ht: 'Yo diminye file size', fr: 'Elles diminuent taille fichier' },
          { ht: 'Yo obligatè pou responsive design', fr: 'Elles sont obligatoires pour design responsive' }
        ],
        correctAnswer: 1,
        explanationHt: 'CSS variables yo pèmèt nou kreye design systems ak consistent values ki ou ka reuse ak maintain facilman.',
        explanationFr: 'Les variables CSS permettent de créer systèmes design avec valeurs cohérentes qu\'on peut réutiliser et maintenir facilement.'
      }
    ]
  },

  {
    id: 8,
    type: 'practice',
    titleHt: 'Pratik - Design System ak Theme Switching',
    titleFr: 'Pratique - Système Design et Changement Thème',
    contentHt: 'Kreye yon comprehensive design system ak CSS variables ak implement theme switching',
    contentFr: 'Créer système design complet avec variables CSS et implémenter changement thème',
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon color palette ak 8+ variables ak systematic naming',
        instructionFr: 'Créer palette couleur avec 8+ variables et nommage systématique',
        starterCode: `:root {
  /* Add your color design tokens here */
  --color-primary: ;
  --color-secondary: ;
  /* Add more colors... */
}

.header {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}`,
        solution: `:root {
  /* Brand colors */
  --color-primary: #ffd43b;
  --color-primary-dark: #ffbf00;
  --color-primary-light: #fff3c4;
  
  --color-secondary: #007bff;
  --color-secondary-dark: #0056b3;
  
  /* Neutral colors */
  --color-white: #ffffff;
  --color-gray-100: #f8f9fa;
  --color-gray-500: #6c757d;
  --color-gray-800: #343a40;
  
  /* Text colors */
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-text-inverse: #ffffff;
  
  /* Semantic colors */
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-error: #dc3545;
}

.header {
  background: var(--color-primary);
  color: var(--color-text-primary);
}`,
        hint: 'Think about different categories: brand, neutral, text, semantic colors ak use descriptive names'
      },
      {
        id: 2,
        instructionHt: 'Implement yon dark theme ak smooth transitions',
        instructionFr: 'Implémenter thème sombre avec transitions fluides',
        starterCode: `/* Light theme (default) already defined */

/* Create dark theme override */
[data-theme="dark"] {
  /* Override colors for dark mode */
}

/* Add smooth transitions */
* {
  /* Add transition properties */
}`,
        solution: `/* Dark theme override */
[data-theme="dark"] {
  --color-primary: #ffd43b;
  --color-secondary: #4dabf7;
  --color-white: #121212;
  --color-gray-100: #1e1e1e;
  --color-gray-500: #adb5bd;
  --color-gray-800: #e0e0e0;
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #adb5bd;
  --color-text-inverse: #121212;
}

/* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}

/* Theme toggle button */
.theme-toggle {
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-500);
  color: var(--color-text-primary);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}`,
        hint: 'Override color values pou dark mode ak add transitions pou smooth changes lè theme switch'
      }
    ]
  },

  {
    id: 9,
    type: 'lesson',
    titleHt: 'Organize ak Maintain Design Tokens',
    titleFr: 'Organiser et Maintenir Tokens Design',
    contentHt: `**Organization Strategy pou Design Tokens:**

**1. Grouping by Category:**
- Colors together
- Spacing together  
- Typography together
- Visual effects together

**2. Naming Convention:**
- \`--category-property-modifier\`
- Example: \`--color-text-primary\`, \`--space-margin-lg\`

**3. Documentation:**
- Comment your tokens
- Explain usage examples
- Note relationships between tokens

**4. Maintenance Tips:**
- Regular review of unused tokens
- Update tokens rather than creating new ones
- Test theme changes across whole site**`,
    contentFr: `**Stratégie d'Organisation pour Tokens Design:**

**1. Groupement par Catégorie:**
- Couleurs ensemble
- Espacement ensemble
- Typographie ensemble
- Effets visuels ensemble

**2. Convention Nommage:**
- \`--catégorie-propriété-modificateur\`
- Exemple: \`--color-text-primary\`, \`--space-margin-lg\`

**3. Documentation:**
- Commenter vos tokens
- Expliquer exemples d'usage
- Noter relations entre tokens

**4. Conseils Maintenance:**
- Révision régulière tokens non utilisés
- Mettre à jour tokens plutôt que créer nouveaux
- Tester changements thème sur site entier**`,
    codeExample: `/* ===========================================
   DESIGN SYSTEM TOKENS
   =========================================== */

/* ===== COLOR TOKENS ===== */
:root {
  /* Brand Identity */
  --color-brand-primary: #ffd43b;
  --color-brand-secondary: #007bff;
  
  /* Neutral Palette */
  --color-neutral-50: #f8f9fa;
  --color-neutral-100: #e9ecef;
  --color-neutral-500: #6c757d;
  --color-neutral-900: #212529;
  
  /* Text Hierarchy */
  --color-text-primary: #333333;    /* Main content */
  --color-text-secondary: #666666;  /* Supporting text */
  --color-text-muted: #999999;      /* Less important */
  --color-text-inverse: #ffffff;    /* On dark backgrounds */
  
  /* Interactive States */
  --color-interactive-primary: var(--color-brand-primary);
  --color-interactive-hover: #ffbf00;
  --color-interactive-focus: #ffd43b;
  --color-interactive-disabled: #e9ecef;
  
  /* Semantic Feedback */
  --color-feedback-success: #28a745;
  --color-feedback-warning: #ffc107;
  --color-feedback-error: #dc3545;
  --color-feedback-info: #17a2b8;
}

/* ===== SPACING TOKENS ===== */
:root {
  /* Base unit: 8px system for consistency */
  --space-unit: 8px;
  
  /* Spacing Scale */
  --space-2xs: calc(var(--space-unit) * 0.5);  /* 4px */
  --space-xs: var(--space-unit);               /* 8px */
  --space-sm: calc(var(--space-unit) * 2);     /* 16px */
  --space-md: calc(var(--space-unit) * 3);     /* 24px */
  --space-lg: calc(var(--space-unit) * 4);     /* 32px */
  --space-xl: calc(var(--space-unit) * 6);     /* 48px */
  --space-2xl: calc(var(--space-unit) * 8);    /* 64px */
  
  /* Layout-specific spacing */
  --space-section: var(--space-2xl);
  --space-container: var(--space-lg);
}

/* ===== TYPOGRAPHY TOKENS ===== */
:root {
  /* Font Families */
  --font-family-heading: 'Poppins', system-ui, sans-serif;
  --font-family-body: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'Fira Code', Monaco, monospace;
  
  /* Font Scale */
  --font-size-2xs: 0.625rem;  /* 10px */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 2rem;      /* 32px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;   /* Headlines */
  --line-height-normal: 1.5;  /* Body text */
  --line-height-loose: 1.8;   /* Large text blocks */
}

/* ===== VISUAL EFFECT TOKENS ===== */
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 50%;
  
  /* Shadows (Elevation System) */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-quick: 150ms ease-out;
  --transition-base: 250ms ease-out;
  --transition-slow: 350ms ease-out;
}

/* ===== USAGE EXAMPLES ===== */
.card {
  background: white;
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.heading-primary {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}`
  },

  {
    id: 10,
    type: 'mini-project',
    titleHt: 'Mini Pwojè - Complete Design System Upgrade',
    titleFr: 'Mini Projet - Mise à Niveau Système Design Complet',
    contentHt: `**Objektif:** Transform portfolio ou an ak yon comprehensive design system ak CSS variables

**Requirements:**
1. **Color Tokens**: Brand, neutral, semantic, text colors
2. **Spacing System**: 8px-based spacing scale  
3. **Typography Scale**: Font families, sizes, weights, line-heights
4. **Visual Tokens**: Radius, shadows, transitions
5. **Theme Switching**: Light ak dark theme implementation
6. **Consistent Application**: Replace all hardcoded values
7. **Documentation**: Comment ak organize tokens logically

**Result**: Yon fully themable, consistent portfolio ki maintainable ak scalable.`,
    contentFr: `**Objectif:** Transformer votre portfolio avec système design complet utilisant variables CSS

**Requirements:**
1. **Tokens Couleur**: Couleurs marque, neutres, sémantiques, texte
2. **Système Espacement**: Échelle espacement basée 8px
3. **Échelle Typographie**: Familles, tailles, poids, hauteurs ligne
4. **Tokens Visuels**: Radius, ombres, transitions
5. **Changement Thème**: Implémentation thèmes clair et sombre
6. **Application Cohérente**: Remplacer toutes valeurs codées en dur
7. **Documentation**: Commenter et organiser tokens logiquement

**Résultat**: Portfolio entièrement thématisable, cohérent, maintenable et évolutif.`
  }
];

export default htmlCssWeek13Cards;