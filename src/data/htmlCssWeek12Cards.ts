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

const htmlCssWeek12Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Prezantasyon CSS Positioning',
    titleFr: 'Introduction au Positionnement CSS',
    contentHt: `**CSS Positioning** bay nou kontwòl egzak sou ki jan elements yo pozisyone sou paj la.

**5 Positioning Values yo:**
- **static** - Default flow, elements yo nan lòd normal yo
- **relative** - Offset element la san retire li nan flow la
- **absolute** - Retire element la nan flow, pozisyone selon container li an
- **fixed** - Fix sou viewport la, pa move lè scroll
- **sticky** - Scroll normalman jiskaske li rive nan yon threshold

**Z-Index:** Kontwòle ki element ki vin devan lè yo overlap.`,
    contentFr: `**CSS Positioning** nous donne contrôle exact sur comment éléments sont positionnés sur page.

**5 Valeurs Positionnement:**
- **static** - Flux par défaut, éléments dans ordre normal
- **relative** - Décale élément sans le retirer du flux
- **absolute** - Retire élément du flux, positionné selon conteneur
- **fixed** - Fixé au viewport, ne bouge pas au scroll
- **sticky** - Scroll normalement jusqu'à atteindre seuil

**Z-Index:** Contrôle quel élément vient devant lors de superposition.`,
    codeExample: `/* Static (default) */
.normal-element {
  position: static; /* default */
}

/* Relative positioning */
.shifted-element {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute positioning */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

/* Fixed positioning */
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}`
  },
  
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Relative ak Absolute Positioning',
    titleFr: 'Positionnement Relative et Absolute',
    contentHt: `**Position: Relative**
- Element la rete nan document flow la
- Ou ka offset li ak top, right, bottom, left
- Lòt elements yo pa move pou ranpli espas li an
- Vin yon reference point pou absolute children yo

**Position: Absolute**
- Retire element la nan document flow la
- Pozisyone selon li nearest positioned ancestor li an
- Si pa gen positioned ancestor, use viewport
- Perfect pou overlays ak floating elements`,
    contentFr: `**Position: Relative**
- Élément reste dans flux document
- Peut être décalé avec top, right, bottom, left
- Autres éléments ne bougent pas pour combler espace
- Devient point référence pour enfants absolus

**Position: Absolute**
- Retire élément du flux document
- Positionné selon ancêtre positionné le plus proche
- Si pas d'ancêtre positionné, utilise viewport
- Parfait pour overlays et éléments flottants`,
    codeExample: `/* Container ak relative positioning */
.hero-section {
  position: relative;
  width: 100%;
  height: 400px;
  background: url('hero.jpg') center/cover;
}

/* Absolute child positioned selon parent */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
}

/* Relative positioning pou subtle offsets */
.card-shifted {
  position: relative;
  top: -20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}`
  },

  {
    id: 3,
    type: 'lesson',
    titleHt: 'Fixed ak Sticky Positioning',
    titleFr: 'Positionnement Fixed et Sticky',
    contentHt: `**Position: Fixed**
- Element la fix sou viewport la
- Pa move lè itilizatè a scroll
- Perfect pou headers, navigation, ak floating buttons
- Use z-index pou ensure li visible

**Position: Sticky**
- Konbine relative ak fixed behavior
- Element la scroll normalman jiskaske li rive nan threshold la
- Apre sa li "stick" nan pozisyon an
- Modern approach pou sticky headers`,
    contentFr: `**Position: Fixed**
- Élément fixé au viewport
- Ne bouge pas quand utilisateur scroll
- Parfait pour headers, navigation, et boutons flottants
- Utiliser z-index pour assurer visibilité

**Position: Sticky**
- Combine comportement relative et fixed
- Élément scroll normalement jusqu'à atteindre seuil
- Après ça il "colle" en position
- Approche moderne pour headers collants`,
    codeExample: `/* Fixed header ki rete visible */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 1rem 0;
}

/* Sticky navigation */
.sticky-nav {
  position: sticky;
  top: 0;
  background: #111;
  color: white;
  padding: 1rem;
  z-index: 100;
}

/* Fixed call-to-action button */
.floating-cta {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ffd43b;
  color: #111;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  z-index: 500;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

/* Account for fixed header spacing */
body {
  padding-top: 80px; /* Height of fixed header */
}`
  },

  {
    id: 4,
    type: 'lesson',
    titleHt: 'Z-Index ak Stacking Context',
    titleFr: 'Z-Index et Contexte d\'Empilement',
    contentHt: `**Z-Index** kontwòle ki element ki parèt devan lè yo overlap.

**Key Concepts:**
- Pi gwo z-index = pi pre ak viewer la
- Z-index sèlman work ak positioned elements yo
- Stacking contexts yo kreye "layers" nan page la
- Elements yo nan menm stacking context compare ak youn ak lòt

**Common Z-Index Values:**
- Headers/Navigation: 1000+
- Modals/Overlays: 9000+  
- Tooltips: 10000+`,
    contentFr: `**Z-Index** contrôle quel élément apparaît devant lors superposition.

**Concepts Clés:**
- Plus grand z-index = plus près du viewer
- Z-index fonctionne seulement avec éléments positionnés
- Contextes empilement créent "couches" dans page
- Éléments dans même contexte se comparent entre eux

**Valeurs Z-Index Communes:**
- Headers/Navigation: 1000+
- Modals/Overlays: 9000+
- Tooltips: 10000+`,
    codeExample: `/* Layered hero section */
.hero-container {
  position: relative;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: white;
  text-align: center;
}

/* Navigation ki always visible */
.main-navigation {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Modal ki cover everything */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}`
  },

  {
    id: 5,
    type: 'lesson',
    titleHt: 'Responsive Positioning ak Best Practices',
    titleFr: 'Positionnement Responsive et Bonnes Pratiques',
    contentHt: `**Responsive Positioning:**
- Test positioning sou mobile ak desktop
- Use percentage values pou flexible positioning
- Consider touch targets pou mobile
- Avoid excessive z-index values

**Accessibility Considerations:**
- Ensure positioned content accessible ak keyboard
- Test ak screen readers
- Maintain logical document flow
- Use skip links pou fixed headers

**Performance Tips:**
- Limit use of position: fixed
- Use transform pou better performance
- Avoid animating top/left properties`,
    contentFr: `**Positionnement Responsive:**
- Tester positionnement sur mobile et desktop
- Utiliser valeurs pourcentage pour positionnement flexible
- Considérer cibles tactiles pour mobile
- Éviter valeurs z-index excessives

**Considérations Accessibilité:**
- Assurer contenu positionné accessible clavier
- Tester avec lecteurs écran
- Maintenir flux document logique
- Utiliser liens skip pour headers fixes

**Conseils Performance:**
- Limiter usage position: fixed
- Utiliser transform pour meilleures performances
- Éviter animer propriétés top/left`,
    codeExample: `/* Responsive positioned elements */
.floating-element {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

@media (max-width: 768px) {
  .floating-element {
    bottom: 10px;
    right: 10px;
    /* Smaller on mobile */
  }
  
  /* Adjust for mobile keyboards */
  .sticky-footer {
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* Accessible skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 10000;
}

.skip-link:focus {
  top: 6px;
}

/* Better performance with transform */
.slide-in {
  position: fixed;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.slide-in.active {
  transform: translateX(0);
}`
  },

  {
    id: 6,
    type: 'lesson',
    titleHt: 'Positioning ak Layout Systems',
    titleFr: 'Positionnement et Systèmes de Layout',
    contentHt: `Ou ka **konbine** positioning ak Flexbox ak Grid pou layouts ki pi pwisan.

**Combining with Flexbox:**
- Use relative positioning pou adjust flex items
- Absolute positioning pou overlays nan flex containers
- Sticky positioning ak flex headers

**Combining with Grid:**
- Grid pou overall layout, positioning pou details
- Absolute positioning nan grid areas
- Z-index pou layered grid content

**Common Patterns:**
- Sticky header ak grid layout
- Overlay cards sou hero images
- Fixed sidebars ak main content`,
    contentFr: `Vous pouvez **combiner** positionnement avec Flexbox et Grid pour layouts plus puissants.

**Combinaison avec Flexbox:**
- Utiliser positionnement relative pour ajuster items flex
- Positionnement absolu pour overlays dans conteneurs flex
- Positionnement sticky avec headers flex

**Combinaison avec Grid:**
- Grid pour layout global, positionnement pour détails
- Positionnement absolu dans zones grid
- Z-index pour contenu grid superposé

**Motifs Communs:**
- Header sticky avec layout grid
- Cartes overlay sur images hero
- Sidebars fixes avec contenu principal`,
    codeExample: `/* Grid layout ak positioned elements */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
}

.sidebar {
  grid-area: sidebar;
  position: relative;
}

/* Floating element nan grid area */
.floating-widget {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

/* Flex container ak positioned overlay */
.card-container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
}

.card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}`
  },

  {
    id: 7,
    type: 'quiz',
    titleHt: 'Quiz - CSS Positioning ak Z-Index',
    titleFr: 'Quiz - CSS Positioning et Z-Index',
    contentHt: 'Test konesans ou sou CSS positioning',
    contentFr: 'Testez vos connaissances sur le positionnement CSS',
    quiz: [
      {
        id: 1,
        questionHt: 'Ki sa position: relative fè?',
        questionFr: 'Que fait position: relative?',
        options: [
          { ht: 'Retire element la nan document flow', fr: 'Retire élément du flux document' },
          { ht: 'Offset element la san retire li nan flow', fr: 'Décale élément sans le retirer du flux' },
          { ht: 'Fix element la sou viewport', fr: 'Fixe élément au viewport' },
          { ht: 'Pa gen efè', fr: 'N\'a aucun effet' }
        ],
        correctAnswer: 1,
        explanationHt: 'position: relative offset element la ak top, right, bottom, left men li rete nan document flow la.',
        explanationFr: 'position: relative décale l\'élément avec top, right, bottom, left mais il reste dans le flux document.'
      },
      {
        id: 2,
        questionHt: 'Ki positioning type ki retire yon element nan flow ak pozisyone li selon container li an?',
        questionFr: 'Quel type de positionnement retire élément du flux et le positionne selon son conteneur?',
        options: [
          { ht: 'relative', fr: 'relative' },
          { ht: 'static', fr: 'static' },
          { ht: 'absolute', fr: 'absolute' },
          { ht: 'sticky', fr: 'sticky' }
        ],
        correctAnswer: 2,
        explanationHt: 'position: absolute retire element la nan flow ak pozisyone li selon li nearest positioned ancestor li an.',
        explanationFr: 'position: absolute retire l\'élément du flux et le positionne selon son ancêtre positionné le plus proche.'
      },
      {
        id: 3,
        questionHt: 'Ki pwopryete ki kontwòle stacking order?',
        questionFr: 'Quelle propriété contrôle l\'ordre d\'empilement?',
        options: [
          { ht: 'order', fr: 'order' },
          { ht: 'z-index', fr: 'z-index' },
          { ht: 'position', fr: 'position' },
          { ht: 'display', fr: 'display' }
        ],
        correctAnswer: 1,
        explanationHt: 'z-index kontwòle ki element ki parèt devan lè yo overlap, ak pi gwo valè yo pi pre ak viewer la.',
        explanationFr: 'z-index contrôle quel élément apparaît devant lors superposition, avec valeurs plus grandes plus proches du viewer.'
      }
    ]
  },

  {
    id: 8,
    type: 'practice',
    titleHt: 'Pratik - Sticky Header ak Hero Overlay',
    titleFr: 'Pratique - Header Collant et Overlay Hero',
    contentHt: 'Kreye yon sticky navigation ak hero section ak positioned overlay text',
    contentFr: 'Créer navigation collante et section hero avec texte overlay positionné',
    exercises: [
      {
        id: 1,
        instructionHt: 'Kreye yon sticky header ki rete visible lè scroll',
        instructionFr: 'Créer header collant qui reste visible au scroll',
        starterCode: `.header {
  background: #111;
  color: white;
  padding: 1rem;
  /* Make this header sticky */
}

.content {
  height: 2000px; /* For testing scroll */
  padding: 2rem;
}`,
        solution: `.header {
  background: #111;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content {
  height: 2000px; /* For testing scroll */
  padding: 2rem;
}`,
        hint: 'Use position: sticky ak top: 0, ak add z-index pou ensure li stay visible'
      },
      {
        id: 2,
        instructionHt: 'Kreye hero section ak background image ak centered overlay text',
        instructionFr: 'Créer section hero avec image arrière-plan et texte overlay centré',
        starterCode: `.hero {
  height: 500px;
  background: url('hero.jpg') center/cover;
  /* Setup for overlay positioning */
}

.hero-text {
  color: white;
  text-align: center;
  /* Position this in center of hero */
}`,
        solution: `.hero {
  height: 500px;
  background: url('hero.jpg') center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-text {
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 0 1rem;
}`,
        hint: 'Use position: relative sou hero ak position overlay ak z-index values'
      }
    ]
  },

  {
    id: 9,
    type: 'lesson',
    titleHt: 'Common Positioning Pitfalls ak Solutions',
    titleFr: 'Pièges Communs Positionnement et Solutions',
    contentHt: `**Common Mistakes:**

1. **Z-Index Wars** - Using random high values
   - Solution: Use consistent scale (10, 20, 30, 100, 1000)

2. **Overflow Issues** - Absolute elements cut off
   - Solution: Ensure containers have proper height/overflow

3. **Mobile Problems** - Fixed elements covering content
   - Solution: Test on mobile, adjust with media queries

4. **Accessibility** - Positioned content not keyboard accessible
   - Solution: Maintain logical focus flow, use proper ARIA

5. **Performance** - Too many positioned elements
   - Solution: Use positioning sparingly, prefer flexbox/grid`,
    contentFr: `**Erreurs Communes:**

1. **Guerres Z-Index** - Utiliser valeurs élevées aléatoires
   - Solution: Utiliser échelle cohérente (10, 20, 30, 100, 1000)

2. **Problèmes Overflow** - Éléments absolus coupés
   - Solution: Assurer conteneurs ont hauteur/overflow appropriés

3. **Problèmes Mobile** - Éléments fixes couvrant contenu
   - Solution: Tester sur mobile, ajuster avec media queries

4. **Accessibilité** - Contenu positionné pas accessible clavier
   - Solution: Maintenir flux focus logique, utiliser ARIA approprié

5. **Performance** - Trop d'éléments positionnés
   - Solution: Utiliser positionnement avec parcimonie, préférer flexbox/grid`,
    codeExample: `/* Good z-index scale */
.z-index-scale {
  /* Background elements: 1-10 */
  background-element: { z-index: 1; }
  
  /* Content elements: 10-100 */
  content-overlay: { z-index: 10; }
  floating-element: { z-index: 20; }
  
  /* Navigation: 100-1000 */
  sticky-header: { z-index: 100; }
  dropdown-menu: { z-index: 200; }
  
  /* Modals: 1000+ */
  modal-backdrop: { z-index: 1000; }
  modal-content: { z-index: 1001; }
}

/* Prevent overflow issues */
.positioned-container {
  position: relative;
  overflow: hidden; /* or visible, depending on need */
  min-height: 200px; /* Ensure adequate space */
}

/* Mobile-friendly positioning */
.mobile-safe-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

@media (max-width: 768px) {
  .mobile-safe-fixed {
    bottom: 10px;
    right: 10px;
    /* Smaller margin on mobile */
  }
}`
  },

  {
    id: 10,
    type: 'mini-project',
    titleHt: 'Mini Pwojè - Modern Portfolio ak Layered Design',
    titleFr: 'Mini Projet - Portfolio Moderne avec Design Superposé',
    contentHt: `**Objektif:** Kreye yon modern portfolio ak positioned elements ak layered design

**Requirements:**
1. **Sticky Header**: Navigation ki rete visible lè scroll
2. **Hero Section**: Background image ak centered overlay text  
3. **Floating CTA**: Fixed call-to-action button
4. **Layered Cards**: Use relative positioning pou creative layouts
5. **Z-Index Management**: Proper stacking order
6. **Responsive**: Work bien sou mobile ak desktop

**Design Focus:** Professional layered design ak smooth interactions, proper accessibility ak performance optimization.`,
    contentFr: `**Objectif:** Créer portfolio moderne avec éléments positionnés et design superposé

**Requirements:**
1. **Header Collant**: Navigation qui reste visible au scroll
2. **Section Hero**: Image arrière-plan avec texte overlay centré
3. **CTA Flottant**: Bouton call-to-action fixe
4. **Cartes Superposées**: Utiliser positionnement relatif pour layouts créatifs
5. **Gestion Z-Index**: Ordre empilement approprié
6. **Responsive**: Fonctionne bien mobile et desktop

**Focus Design:** Design superposé professionnel avec interactions fluides, accessibilité appropriée et optimisation performance.`
  }
];

export default htmlCssWeek12Cards;