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

const htmlCssWeek10Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Prezantasyon CSS Motion',
    titleFr: 'Introduction au Mouvement CSS',
    contentHt: `CSS ba nou kapasite kreye **motion ak animasyon** san bezwen JavaScript. Sa rann paj yo pi dinamik ak pi entèaktif.

**De kalite motion yo:**
- **Transitions**: Chanjman yo ki dousman lè yo entèaktif (hover, click)
- **Animations**: Motion yo ki otomatik ak yo ka repete

CSS Motion konsèy ak optimize pou perfòmans ak ekspèryans itilizatè yo.`,
    contentFr: `CSS nous donne la capacité de créer **du mouvement et des animations** sans avoir besoin de JavaScript. Cela rend les pages plus dynamiques et interactives.

**Deux types de mouvement:**
- **Transitions**: Changements graduels lors d'interactions (hover, click)
- **Animations**: Mouvements automatiques qui peuvent se répéter

Le mouvement CSS est conçu pour être optimisé pour les performances et l'expérience utilisateur.`,
    codeExample: `/* Egzanp Transition */
.button {
  background: #007bff;
  transition: background 0.3s ease;
}
.button:hover {
  background: #0056b3;
}

/* Egzanp Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.element {
  animation: fadeIn 1s ease;
}`
  },
  
  {
    id: 2,
    type: 'lesson',
    titleHt: 'CSS Transitions - Motion Smooth',
    titleFr: 'CSS Transitions - Mouvement Fluide',
    contentHt: `**Transitions** yo kreye chanjman yo ki smooth ant de eta yo.

**Pwopryete yo:**
- **transition-property**: Ki sa ki ap change (ex: background, transform)
- **transition-duration**: Konbyen tan sa pran (ex: 0.3s, 500ms)  
- **transition-timing-function**: Ki jan motion an ap komporte (ease, linear)
- **transition-delay**: Konbyen tan pou tann avan kòmanse

**Shorthand:**
transition: property duration timing-function delay;`,
    contentFr: `**Les transitions** créent des changements fluides entre deux états.

**Propriétés:**
- **transition-property**: Ce qui change (ex: background, transform)
- **transition-duration**: Combien de temps ça prend (ex: 0.3s, 500ms)
- **transition-timing-function**: Comment le mouvement se comporte (ease, linear)
- **transition-delay**: Combien de temps attendre avant de commencer

**Raccourci:**
transition: property duration timing-function delay;`,
    codeExample: `/* Transitions sou cards */
.card {
  background: white;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.card:hover {
  background: #f8f9fa;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Multiple transitions */
.button {
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}`
  },

  {
    id: 3,
    type: 'lesson',
    titleHt: '@keyframes ak Animations',
    titleFr: '@keyframes et Animations',
    contentHt: `**@keyframes** yo define eta yo nan yon animasyon. Animations yo ka kouri otomatikman ak yo ka repete.

**Keyframes Syntax:**
- **from** / **0%**: Eta kòmanse
- **to** / **100%**: Eta fini  
- **25%, 50%, 75%**: Eta yo nan mitan

**Animation Properties:**
- animation-name, animation-duration
- animation-iteration-count (infinite pou sanzarèt)
- animation-direction (normal, reverse, alternate)`,
    contentFr: `**@keyframes** définissent les états d'une animation. Les animations peuvent se jouer automatiquement et se répéter.

**Syntaxe Keyframes:**
- **from** / **0%**: État de départ
- **to** / **100%**: État final
- **25%, 50%, 75%**: États intermédiaires

**Propriétés Animation:**
- animation-name, animation-duration
- animation-iteration-count (infinite pour sans arrêt)
- animation-direction (normal, reverse, alternate)`,
    codeExample: `/* Kreye animasyon fadeIn */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Itilize animasyon an */
.hero-content {
  animation: fadeIn 1.2s ease-out;
}

/* Animation ki repete */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.button {
  animation: pulse 2s infinite;
}`
  },

  {
    id: 4,
    type: 'lesson',
    titleHt: 'Timing Functions ak Performance',
    titleFr: 'Fonctions de Timing et Performance',
    contentHt: `**Timing Functions** yo kontrole ki jan motion an ap develope:

- **ease**: Kòmanse dousman, pi vit nan mitan, fini dousman
- **ease-in**: Kòmanse dousman  
- **ease-out**: Fini dousman
- **ease-in-out**: Kòmanse ak fini dousman
- **linear**: Menm vitès tout tan an

**Performance yo:** Prefere **transform** ak **opacity** pou animasyon yo paske yo pa move DOM layout.`,
    contentFr: `**Les fonctions de timing** contrôlent comment le mouvement évolue:

- **ease**: Commence doucement, plus rapide au milieu, finit doucement
- **ease-in**: Commence doucement
- **ease-out**: Finit doucement  
- **ease-in-out**: Commence et finit doucement
- **linear**: Même vitesse tout le temps

**Performance:** Préférer **transform** et **opacity** pour les animations car elles ne modifient pas le layout DOM.`,
    codeExample: `/* Bon pou performance */
.element {
  /* Use transform instead of changing top/left */
  transform: translateX(100px);
  opacity: 0.8;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Timing functions compare */
.ease { transition-timing-function: ease; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.linear { transition-timing-function: linear; }

/* Custom cubic-bezier curve */
.custom {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`
  },

  {
    id: 5,
    type: 'lesson',
    titleHt: 'Responsive Animations ak Accessibility',
    titleFr: 'Animations Responsive et Accessibilité',
    contentHt: `**Responsive Animations:** Animations yo dwe adapte selon apparèy la ak koneksyon itilizatè a.

**Accessibility:** Respekte **prefers-reduced-motion** pou itilizatè ki pa vle animations yo.

**Mobile Considerations:**
- Reduce komplèksite animations yo  
- Use shorter durations
- Test sou mobile devices yo`,
    contentFr: `**Animations Responsive:** Les animations doivent s'adapter selon l'appareil et la connexion utilisateur.

**Accessibilité:** Respecter **prefers-reduced-motion** pour les utilisateurs qui ne veulent pas d'animations.

**Considérations Mobile:**
- Réduire la complexité des animations
- Utiliser des durées plus courtes  
- Tester sur appareils mobiles`,
    codeExample: `/* Accessibility - respekte user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Responsive animation timing */
@media (max-width: 768px) {
  .card {
    transition-duration: 0.2s; /* pi vit sou mobile */
  }
  
  .complex-animation {
    animation: none; /* Retire animations komplèks yo sou mobile */
  }
}`
  },

  {
    id: 6,
    type: 'lesson',
    titleHt: 'Best Practices pou CSS Motion',
    titleFr: 'Meilleures Pratiques pour CSS Motion',
    contentHt: `**Motion Guidelines:**
- Keep animations **subtle** - pa distraction
- Use **realistic timing** - 200-500ms pou mikro interactions
- **Test sou mobile** - ensure smooth performance
- **Progressive enhancement** - paj yo dwe fonksyone san animations

**Performance Tips:**
- Animate transform ak opacity sèlman lè posib
- Use will-change pou optimize rendering sèlman si bezwen
- Limit kantite elements ki animate tankou menm tan`,
    contentFr: `**Directives de Mouvement:**
- Garder animations **subtiles** - pas de distraction  
- Utiliser **timing réaliste** - 200-500ms pour micro-interactions
- **Tester sur mobile** - assurer performance fluide
- **Amélioration progressive** - pages doivent fonctionner sans animations

**Conseils Performance:**
- Animer transform et opacity seulement si possible
- Utiliser will-change pour optimiser rendu seulement si nécessaire  
- Limiter nombre d'éléments qui s'animent simultanément`,
    codeExample: `/* Mikro-interaction subtil */
.button {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* Progressive enhancement */
.hero {
  /* Base styles san animation */
  opacity: 1;
  transform: none;
}

/* Animate sèlman si user ak pa disable motion */
@media (prefers-reduced-motion: no-preference) {
  .hero {
    animation: slideIn 1s ease-out;
  }
}`
  },

  {
    id: 7,
    type: 'quiz',
    titleHt: 'Quiz - CSS Transitions ak Animations',
    titleFr: 'Quiz - CSS Transitions et Animations',
    contentHt: 'Test konesans ou sou CSS Motion',
    contentFr: 'Testez vos connaissances sur le mouvement CSS',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki diferans prensipal la ant transitions ak animations?',
        questionFr: 'Quelle est la différence principale entre transitions et animations?',
        options: [
          { ht: 'Transitions pi vit pase animations', fr: 'Les transitions sont plus rapides que les animations' },
          { ht: 'Transitions bezwen intèraksyon, animations otomatik', fr: 'Transitions nécessitent interaction, animations automatiques' },
          { ht: 'Animations sèlman ka repete', fr: 'Seulement les animations peuvent se répéter' },
          { ht: 'Pa gen diferans', fr: 'Il n\'y a pas de différence' }
        ],
        correctAnswer: 1,
        explanationHt: 'Transitions yo bezwen trigger (hover, focus) men animations yo ka kouri otomatikman ak yo ka repete.',
        explanationFr: 'Les transitions ont besoin d\'un déclencheur (hover, focus) mais les animations peuvent s\'exécuter automatiquement et se répéter.'
      },
      {
        id: 2,
        questionHt: 'Ki pwopryete yo ki pi bon pou performance lè w ap animate?',
        questionFr: 'Quelles propriétés sont meilleures pour la performance lors d\'animations?',
        options: [
          { ht: 'width ak height', fr: 'width et height' },
          { ht: 'top ak left', fr: 'top et left' },
          { ht: 'transform ak opacity', fr: 'transform et opacity' },
          { ht: 'margin ak padding', fr: 'margin et padding' }
        ],
        correctAnswer: 2,
        explanationHt: 'Transform ak opacity pa trigger layout recalculations, sa ki fè yo pi vit ak pi smooth.',
        explanationFr: 'Transform et opacity ne déclenchent pas de recalculs de layout, ce qui les rend plus rapides et fluides.'
      }
    ]
  },

  {
    id: 8,
    type: 'practice',
    titleHt: 'Pratik - Kreye Animated Card',
    titleFr: 'Pratique - Créer une Carte Animée',
    contentHt: 'Kreye yon card ak hover animations ak smooth transitions',
    contentFr: 'Créer une carte avec animations de survol et transitions fluides',
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon card ki lift ak scale lè w hover sou li',
        instructionFr: 'Créer une carte qui se soulève et grandit au survol',
        starterCode: `.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  /* Ajoute transition ak hover effects */
}`,
        solution: `.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}`,
        hint: 'Use translateY ak scale nan transform, ak change box-shadow pou pi bon effect'
      },
      {
        id: 2,
        instructionHt: 'Ajoute yon fade-in animation ki kouri lè paj la load',
        instructionFr: 'Ajouter une animation fade-in qui se joue au chargement de page',
        starterCode: `.card-container {
  /* Ajoute animation fade-in */
}

/* Kreye @keyframes fadeIn */`,
        solution: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-container {
  animation: fadeIn 0.8s ease-out;
}`,
        hint: 'Use opacity ak translateY nan keyframes pou smooth fade-in effect'
      }
    ]
  },

  {
    id: 9,
    type: 'lesson',
    titleHt: 'CSS Transform Properties',
    titleFr: 'Propriétés CSS Transform',
    contentHt: `**Transform** se fonksyon yo ki pi pwisan pou CSS motion. Yo pa change layout la, ki fè yo pi rapid.

**Transform Functions:**
- **translateX/Y(value)**: Move element horizontal/vertical
- **scale(ratio)**: Change gwosè element la  
- **rotate(angle)**: Turn element la
- **skew(angle)**: Distort shape la

**Combining transforms:** transform: translateY(-10px) scale(1.1) rotate(5deg);`,
    contentFr: `**Transform** sont les fonctions les plus puissantes pour le mouvement CSS. Elles ne changent pas le layout, ce qui les rend plus rapides.

**Fonctions Transform:**
- **translateX/Y(value)**: Déplacer élément horizontal/vertical
- **scale(ratio)**: Changer taille de l'élément
- **rotate(angle)**: Tourner l'élément  
- **skew(angle)**: Déformer la forme

**Combiner transforms:** transform: translateY(-10px) scale(1.1) rotate(5deg);`,
    codeExample: `/* Transform yo ki pi itile */
.button {
  transition: transform 0.2s ease;
}

/* Lift effect */
.button:hover {
  transform: translateY(-3px);
}

/* Scale effect */
.image:hover {
  transform: scale(1.05);
}

/* Multiple transforms */
.card:hover {
  transform: 
    translateY(-5px) 
    scale(1.02) 
    rotate(1deg);
}

/* 3D transforms */
.element {
  transform: perspective(1000px) rotateY(45deg);
}`
  },

  {
    id: 10,
    type: 'mini-project',
    titleHt: 'Mini Pwojè - Portfolio ak Smooth Animations',
    titleFr: 'Mini Projet - Portfolio avec Animations Fluides',
    contentHt: `**Objektif:** Enhance portfolio ou an ak professional animations

**Requirements:**
1. **Header**: Slide down animation sou page load
2. **Navigation**: Hover effects ak smooth transitions  
3. **Cards**: Lift ak scale effects lè hover
4. **Buttons**: Color ak transform changes
5. **Images**: Gentle scale ak overlay effects
6. **Footer**: Subtle pulse animation (opsyonèl)

**Performance Focus:** Use sèlman transform ak opacity, test sou mobile, respekte user preferences.

**Inspiration:** Modern web design ak subtle micro-interactions ki enhance UX san distraction.`,
    contentFr: `**Objectif:** Améliorer votre portfolio avec animations professionnelles

**Requirements:**
1. **Header**: Animation slide down au chargement
2. **Navigation**: Effets hover avec transitions fluides
3. **Cartes**: Effets lift et scale au survol  
4. **Boutons**: Changements couleur et transform
5. **Images**: Scale doux et effets overlay
6. **Footer**: Animation pulse subtile (optionnel)

**Focus Performance:** Utiliser seulement transform et opacity, tester sur mobile, respecter préférences utilisateur.

**Inspiration:** Design web moderne avec micro-interactions subtiles qui améliorent UX sans distraction.`
  }
];

export default htmlCssWeek10Cards;