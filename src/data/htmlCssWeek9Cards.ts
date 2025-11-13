export interface Card {
  id: string;
  type: 'lesson' | 'question' | 'code-challenge' | 'tip';
  titleHt: string;
  titleFr: string;
  contentHt: string;
  contentFr: string;
  codeExample?: string;
  correctAnswer?: string;
  options?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

const htmlCssWeek9Cards: Card[] = [
  {
    id: 'w9-intro-grid',
    type: 'lesson',
    titleHt: 'Prezantasyon CSS Grid',
    titleFr: 'Introduction à CSS Grid',
    contentHt: `CSS Grid se sistèm layout 2-dimansyon ki pi pwisan nan CSS la. Li diferan ak Flexbox paske li ka kontrole **rows ak columns** nan menm tan an.

**Konsèp Debaz la:**
- **Flexbox**: Yon direksyon sèlman (row oswa column)  
- **CSS Grid**: De direksyon ansanm (rows AK columns)

CSS Grid konstwi pou konplète Flexbox - yo fonksyone ansanm pou kreye layout pwofesyonèl yo.`,
    contentFr: `CSS Grid est le système de layout 2D le plus puissant de CSS. Il diffère de Flexbox car il peut contrôler **les lignes et colonnes** simultanément.

**Le Concept de Base:**
- **Flexbox**: Une seule direction (ligne ou colonne)
- **CSS Grid**: Deux directions ensemble (lignes ET colonnes)

CSS Grid est conçu pour compléter Flexbox - ils fonctionnent ensemble pour créer des layouts professionnels.`,
    codeExample: `/* Activer CSS Grid */
.container {
  display: grid;
  /* Maintenant c'est un conteneur Grid! */
}`
  },
  {
    id: 'w9-grid-concept',
    type: 'lesson',
    titleHt: 'Konsèp Grid: Rows + Columns',
    titleFr: 'Concept Grid: Lignes + Colonnes',
    contentHt: `Imajine yon layout konplè ak header, navigation, main content, sidebar ak footer:

\`\`\`
+-------------------------------+
| header header header          |
| nav    main    aside          |
| footer footer footer          |
+-------------------------------+
\`\`\`

Ak Flexbox, ou ta bezwen plizyè containers yo. Ak CSS Grid, ou ka fè tout sa ak yon sèl container!`,
    contentFr: `Imaginez un layout complet avec header, navigation, contenu principal, sidebar et footer:

\`\`\`
+-------------------------------+
| header header header          |
| nav    main    aside          |
| footer footer footer          |
+-------------------------------+
\`\`\`

Avec Flexbox, vous auriez besoin de plusieurs containers. Avec CSS Grid, vous pouvez tout faire avec un seul container!`,
    codeExample: `/* Grid Layout Complet */
.page-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}`
  },
  {
    id: 'w9-core-properties',
    type: 'lesson',
    titleHt: 'Pwopryète Grid Debaz yo',
    titleFr: 'Propriétés Grid de Base',
    contentHt: `Pwopryète prensipal yo pou CSS Grid:

**display: grid** - Aktive Grid layout
**grid-template-columns** - Defini columns yo
**grid-template-rows** - Defini rows yo  
**gap** - Espas ant cells yo
**grid-template-areas** - Bay non ak òganize layout la

Chak pwopryète gen wòl li nan konstwi layout la.`,
    contentFr: `Les propriétés principales pour CSS Grid:

**display: grid** - Active le layout Grid
**grid-template-columns** - Définit les colonnes
**grid-template-rows** - Définit les lignes
**gap** - Espacement entre les cellules
**grid-template-areas** - Nomme et organise le layout

Chaque propriété a son rôle dans la construction du layout.`,
    codeExample: `/* Propriétés Grid Essentielles */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}`
  },
  {
    id: 'w9-columns-rows',
    type: 'lesson',
    titleHt: 'Defini Columns ak Rows',
    titleFr: 'Définir Colonnes et Lignes',
    contentHt: `**grid-template-columns** ak **grid-template-rows** yo defini estrikti Grid la.

**Egzanp Columns:**
- \`1fr 1fr 1fr\` = 3 columns egal
- \`repeat(3, 1fr)\` = menm bagay la, pi kout
- \`200px 1fr 100px\` = gwosè fix ak flexible

**Egzanp Rows:**
- \`auto 1fr auto\` = header otomatik, main ki grandi, footer otomatik`,
    contentFr: `**grid-template-columns** et **grid-template-rows** définissent la structure du Grid.

**Exemples Colonnes:**
- \`1fr 1fr 1fr\` = 3 colonnes égales
- \`repeat(3, 1fr)\` = même chose, plus court
- \`200px 1fr 100px\` = tailles fixes et flexibles

**Exemples Lignes:**
- \`auto 1fr auto\` = header automatique, main qui grandit, footer automatique`,
    codeExample: `/* Exemples Columns & Rows */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  /* 3 columns: nav(1), main(2), aside(1) */
  /* 3 rows: header, content, footer */
}`
  },
  {
    id: 'w9-grid-areas',
    type: 'lesson',
    titleHt: 'Grid Areas ak Template Areas',
    titleFr: 'Grid Areas et Template Areas',
    contentHt: `**grid-template-areas** pèmèt ou bay non ak òganize layout la vizyèlman.

**Kijan sa fonksyone:**
1. Defini areas yo nan CSS ak non yo
2. Asiye chak element ak \`grid-area: nom\`

**Avantaj yo:**
- Layout ki pi klè ak pi fasil konprann
- Responsive pi senp ak media queries`,
    contentFr: `**grid-template-areas** vous permet de nommer et organiser le layout visuellement.

**Comment ça fonctionne:**
1. Définir les zones dans le CSS avec des noms
2. Assigner chaque élément avec \`grid-area: nom\`

**Avantages:**
- Layout plus clair et facile à comprendre
- Responsive plus simple avec les media queries`,
    codeExample: `/* Template Areas */
.grid-layout {
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }`
  },
  {
    id: 'w9-gap-spacing',
    type: 'lesson',
    titleHt: 'Gap ak Espas',
    titleFr: 'Gap et Espacement',
    contentHt: `Pwopryète \`gap\` la kreye espas konsèy ant grid items yo.

**Syntax Gap:**
- \`gap: 1rem\` = 1rem ant tou items yo
- \`gap: 1rem 2rem\` = 1rem vertikal, 2rem horizontal
- \`row-gap: 1rem\` = sèlman ant rows yo
- \`column-gap: 2rem\` = sèlman ant columns yo

Gap pi pratik pase margin paske li otomatik ak responsive.`,
    contentFr: `La propriété \`gap\` crée un espacement cohérent entre les grid items.

**Syntaxe Gap:**
- \`gap: 1rem\` = 1rem entre tous les items
- \`gap: 1rem 2rem\` = 1rem vertical, 2rem horizontal  
- \`row-gap: 1rem\` = seulement entre les lignes
- \`column-gap: 2rem\` = seulement entre les colonnes

Gap est plus pratique que margin car il est automatique et responsive.`,
    codeExample: `/* Exemples Gap */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* 2rem entre tous les items */
}

.layout-grid {
  gap: 1rem 3rem; /* 1rem lignes, 3rem colonnes */
}`
  },
  {
    id: 'w9-question-basic',
    type: 'question',
    titleHt: 'CSS Grid kontrole ki bagay?',
    titleFr: 'CSS Grid contrôle quoi?',
    contentHt: 'Ki diferans prensipal ant Flexbox ak CSS Grid?',
    contentFr: 'Quelle différence principale entre Flexbox et CSS Grid?',
    options: [
      'Rows ak columns ansanm',
      'Sèlman colors yo',
      'Typography sèlman', 
      'Sèlman images yo'
    ],
    correctAnswer: 'Rows ak columns ansanm'
  },
  {
    id: 'w9-responsive-grid',
    type: 'lesson',
    titleHt: 'Grid Responsive',
    titleFr: 'Grid Responsive',
    contentHt: `CSS Grid pi fasil pou fè responsive pase Flexbox paske ou ka chanje layout konplè a ak media queries.

**Strategy Responsive:**
- **Desktop**: Layout ak 3 columns
- **Tablet**: Redwi nan 2 columns  
- **Mobile**: Stack nan 1 column

Ou kapab chanje \`grid-template-areas\` ak \`grid-template-columns\` pou chak breakpoint.`,
    contentFr: `CSS Grid est plus facile à rendre responsive que Flexbox car vous pouvez changer le layout complet avec les media queries.

**Stratégie Responsive:**
- **Desktop**: Layout avec 3 colonnes
- **Tablette**: Réduire à 2 colonnes
- **Mobile**: Empiler en 1 colonne

Vous pouvez changer \`grid-template-areas\` et \`grid-template-columns\` pour chaque breakpoint.`,
    codeExample: `/* Responsive Grid */
.grid-layout {
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-areas:
      "header"
      "nav" 
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`
  },
  {
    id: 'w9-question-activate',
    type: 'question',
    titleHt: 'Kijan ou aktive Grid layout?',
    titleFr: 'Comment activer le layout Grid?',
    contentHt: 'Ki pwopryète CSS ou itilize pou aktive Grid layout?',
    contentFr: 'Quelle propriété CSS utilisez-vous pour activer le layout Grid?',
    options: [
      'display: grid;',
      'layout: grid;',
      'grid: true;',
      'enable: grid;'
    ],
    correctAnswer: 'display: grid;'
  },
  {
    id: 'w9-flexbox-vs-grid',
    type: 'lesson',
    titleHt: 'Kilè pou itilize Grid vs Flexbox',
    titleFr: 'Quand utiliser Grid vs Flexbox',
    contentHt: `**Itilize CSS Grid pou:**
- Page layouts (header, nav, main, footer)
- Card grids ak responsive columns
- 2D layouts ak rows ak columns
- Layouts konplèks ak positioning

**Itilize Flexbox pou:**  
- Navigation bars ak menus
- Button groups ak form elements
- Centering elements
- 1D layouts (yon direksyon sèlman)

**Best Practice:** Grid pou page structure, Flexbox pou components.`,
    contentFr: `**Utiliser CSS Grid pour:**
- Page layouts (header, nav, main, footer)
- Grilles de cartes avec colonnes responsive
- Layouts 2D avec lignes et colonnes
- Layouts complexes avec positionnement

**Utiliser Flexbox pour:**
- Barres de navigation et menus
- Groupes de boutons et éléments de forme
- Centrer des éléments
- Layouts 1D (une seule direction)

**Best Practice:** Grid pour la structure de page, Flexbox pour les composants.`,
    codeExample: `/* Grid pour la page */
.page-layout {
  display: grid;
  grid-template-areas: "header" "main" "footer";
}

/* Flexbox pour navigation */
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
  },
  {
    id: 'w9-code-challenge',
    type: 'code-challenge',
    titleHt: 'Defi: Kreye Grid Layout',
    titleFr: 'Défi: Créer Grid Layout',
    contentHt: `Kreye yon 3-column layout ak CSS Grid ki gen:
- Header ki kouvri tout 3 columns yo
- Nav column nan goch (1fr)
- Main content nan mitan (2fr) 
- Aside nan dwat (1fr)
- Footer ki kouvri tout 3 columns yo

Itilize \`grid-template-areas\` ak bay chak seksyon non li.`,
    contentFr: `Créer un layout 3-colonnes avec CSS Grid qui a:
- Header qui couvre les 3 colonnes
- Colonne Nav à gauche (1fr)
- Contenu principal au milieu (2fr)
- Aside à droite (1fr) 
- Footer qui couvre les 3 colonnes

Utiliser \`grid-template-areas\` et nommer chaque section.`,
    codeExample: `/* Votre solution ici */
.page-layout {
  display: grid;
  /* Ajoutez vos propriétés grid */
}

/* Définissez les grid areas pour chaque section */`,
    difficulty: 'medium'
  },
  {
    id: 'w9-tip-debugging',
    type: 'tip',
    titleHt: 'Tip: Debug Grid ak DevTools',
    titleFr: 'Astuce: Débugger Grid avec DevTools',
    contentHt: `**Browser DevTools pou Grid:**
1. Ouvè DevTools (F12)
2. Chwazi element ak \`display: grid\`
3. Klike sou badge "Grid" 
4. Wè grid lines ak areas yo vizyèlman

**CSS pou debug:**
Ajoute \`outline: 1px solid red;\` sou grid items yo pou wè limit yo klèman.

DevTools Grid inspector se zouti pi pwisan an pou konprann Grid layouts.`,
    contentFr: `**Browser DevTools pour Grid:**
1. Ouvrir DevTools (F12)
2. Sélectionner élément avec \`display: grid\`
3. Cliquer sur le badge "Grid"
4. Voir les lignes de grille et zones visuellement

**CSS pour débugger:**
Ajouter \`outline: 1px solid red;\` sur les grid items pour voir leurs limites clairement.

L'inspecteur Grid des DevTools est l'outil le plus puissant pour comprendre les layouts Grid.`,
    codeExample: `/* Debug CSS temporaire */
.grid-container * {
  outline: 1px solid rgba(255, 0, 0, 0.3);
}

/* Voir les zones de grid */
.grid-container {
  background: rgba(0, 0, 255, 0.1);
}`
  }
];

export default htmlCssWeek9Cards;