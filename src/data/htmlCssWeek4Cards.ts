import { HtmlCssCard } from './htmlCssWeek1Cards';

export const htmlCssWeek4Cards: HtmlCssCard[] = [
  {
    id: 1,
    type: 'lesson',
    titleHt: 'Revizyon ak Entwodiksyon Box Model',
    titleFr: 'Révision et Introduction Box Model',
    contentHt: `## 🗓 HTML & CSS pou Kòmansè yo – Semèn 4: Box Model ak Spacing

### 🎯 Objektif yo
Nan fen Semèn 4 an, etidyan yo ap kapab:
• Konprann kijan Box Model la defini espas chak eleman
• Itilize margin, padding, border, ak width/height pou kontwole layout
• Visualize boxes ak spacing ak Developer Tools browser la
• Kreye reusable card-style components (fondasyon pou Semèn 5-6 layouts)
• Develop konfòt ak CSS inspection ak fine-tuning

### 📋 Revizyon Semèn 3:
• External CSS ak link tag
• Koulè ak background colors
• Typography ak font families
• Navigation styling ak hover effects
• Basic selectors ak properties

### 🔄 Transition:
"Kounye a nou ap forme kòntni nou an vizyèlman — spacing ak strukti."

### 🎨 Pwojè Kontinye:
Nou ap pran sit stylis nou an nan Semèn 3 ak nou ap ajoute:
• Card components ak spacing
• Professional layout ak Box Model
• Hover effects ak animations
• Foundation pou layout avanse yo`,
    contentFr: `## 🗓 HTML & CSS pour Débutants – Semaine 4: Box Model et Espacement

### 🎯 Objectifs
À la fin de la Semaine 4, les étudiants seront capables de:
• Comprendre comment le Box Model définit l'espace de chaque élément
• Utiliser margin, padding, border et width/height pour contrôler le layout
• Visualiser boxes et espacement avec les Developer Tools du navigateur
• Créer des composants card-style réutilisables (fondation pour layouts Semaines 5-6)
• Développer le confort avec l'inspection CSS et l'ajustement fin

### 📋 Révision Semaine 3:
• CSS externe avec tag link
• Couleurs et couleurs d'arrière-plan
• Typographie et familles de polices
• Style de navigation avec effets hover
• Sélecteurs de base et propriétés

### 🔄 Transition:
"Maintenant nous allons façonner notre contenu visuellement — espacement et structure."

### 🎨 Projet Continu:
Nous prendrons notre site stylisé de la Semaine 3 et ajouterons:
• Composants card avec espacement
• Layout professionnel avec Box Model
• Effets hover et animations
• Fondation pour layouts avancés`,
  },
  {
    id: 2,
    type: 'lesson',
    titleHt: 'Kisa Box Model la ye?',
    titleFr: 'Qu\'est-ce que le Box Model?',
    contentHt: `## 📦 Kisa Box Model la ye?

**Chak eleman HTML se yon bwat rektangulè ki gen:**

\`\`\`
+-----------------------------+
|         Margin              |   ← Espas nan deyò border la
|  +-----------------------+  |
|  |      Border           |  |   ← Outlined ki vizib la
|  |  +-----------------+  |  |
|  |  |     Padding     |  |  |   ← Espas ant border ak kòntni
|  |  | +-------------+ |  |  |
|  |  | |   Content   | |  |  |   ← Teks, imaj, etc.
|  |  | +-------------+ |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
\`\`\`

### 📋 Box Model Properties yo:

| Property | Deskripsyon | Egzanp |
|----------|-------------|---------|
| **margin** | Espas nan deyò border la | \`margin: 20px;\` |
| **border** | Outlined ki vizib la | \`border: 2px solid #ccc;\` |
| **padding** | Espas nan anndan border la | \`padding: 10px;\` |
| **width/height** | Gwosè content area a | \`width: 300px;\` |
| **box-sizing** | Kijan dimensions yo kalkile | \`box-sizing: border-box;\` |

### 🔍 Konsèp Kle yo:

#### 📏 Content Box (Default):
\`\`\`css
width: 300px;
padding: 20px;
border: 5px;
/* Total width = 300 + 20 + 20 + 5 + 5 = 350px */
\`\`\`

#### 📦 Border Box (Rekòmande):
\`\`\`css
box-sizing: border-box;
width: 300px;
padding: 20px;
border: 5px;
/* Total width = 300px (padding ak border yo konte nan width la) */
\`\`\`

### 💡 Poukisa Box Model Enpòtan?
- **Predictable Layout:** Kontwole ekzakteman kote eleman yo ap pozisyone
- **Spacing Control:** Kreye consistent spacing ant eleman yo
- **Professional Design:** Layout ki santi li pwofesyonèl ak òganize
- **Responsive Foundation:** Prepare pou responsive design yo`,
    contentFr: `## 📦 Qu'est-ce que le Box Model?

**Chaque élément HTML est une boîte rectangulaire composée de:**

\`\`\`
+-----------------------------+
|         Margin              |   ← Espace à l'extérieur de la bordure
|  +-----------------------+  |
|  |      Border           |  |   ← Contour visible
|  |  +-----------------+  |  |
|  |  |     Padding     |  |  |   ← Espace entre bordure et contenu
|  |  | +-------------+ |  |  |
|  |  | |   Content   | |  |  |   ← Texte, image, etc.
|  |  | +-------------+ |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
\`\`\`

### 📋 Propriétés Box Model:

| Propriété | Description | Exemple |
|-----------|-------------|---------|
| **margin** | Espace à l'extérieur de la bordure | \`margin: 20px;\` |
| **border** | Contour visible | \`border: 2px solid #ccc;\` |
| **padding** | Espace à l'intérieur de la bordure | \`padding: 10px;\` |
| **width/height** | Taille de la zone de contenu | \`width: 300px;\` |
| **box-sizing** | Comment les dimensions sont calculées | \`box-sizing: border-box;\` |

### 🔍 Concepts Clés:

#### 📏 Content Box (Par défaut):
\`\`\`css
width: 300px;
padding: 20px;
border: 5px;
/* Largeur totale = 300 + 20 + 20 + 5 + 5 = 350px */
\`\`\`

#### 📦 Border Box (Recommandé):
\`\`\`css
box-sizing: border-box;
width: 300px;
padding: 20px;
border: 5px;
/* Largeur totale = 300px (padding et border inclus dans width) */
\`\`\`

### 💡 Pourquoi le Box Model est Important?
- **Layout Prévisible:** Contrôler exactement où les éléments se positionnent
- **Contrôle Espacement:** Créer un espacement cohérent entre éléments
- **Design Professionnel:** Layout qui semble professionnel et organisé
- **Fondation Responsive:** Préparer pour les designs responsives`,
    codeExample: `/* Egzanp Box Model */
.card {
  /* Content */
  width: 300px;
  height: 200px;
  
  /* Padding - espas nan anndan */
  padding: 20px;
  
  /* Border - outlined */
  border: 2px solid #ddd;
  border-radius: 8px;
  
  /* Margin - espas nan deyò */
  margin: 20px auto;
  
  /* Box Sizing */
  box-sizing: border-box;
  
  /* Background pou wè li klèman */
  background-color: #f9f9f9;
}`
  },
  {
    id: 3,
    type: 'lesson',
    titleHt: 'Demonstrasyon ak Developer Tools',
    titleFr: 'Démonstration et Developer Tools',
    contentHt: `## 🔧 Demonstrasyon ak Developer Tools

### 🎨 Egzanp Pratik:

#### HTML:
\`\`\`html
<div class="card">
  <h3>Featured Project</h3>
  <p>Bwat sa a itilize margin, padding, ak borders pou kreye balans.</p>
</div>
\`\`\`

#### CSS:
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
\`\`\`

### 📊 Kijan Properties yo Fonksyone:

**🔄 Increasing Padding:**
- Deplase kòntni an pi anndan
- Fè pi espas ant teks la ak border la
- Pa afekte pozisyon eleman lòt yo

**🔄 Increasing Margin:**
- Deplase tout bwat la pi lwen lòt yo
- Kreye pi espas ant eleman yo
- Afekte pozisyon eleman ki pi pre yo

**🔄 Border:**
- Ajoute epèsè nan alantou padding la
- Kapab gen koulè ak style diferan
- Border-radius fè kwen yo wonn

**🔄 Box-sizing: border-box:**
- Ede maintenir width ki predictable
- Include padding ak border nan total width

### 🛠️ Developer Tools Exercise:

#### Etap yo:
1. **Ouvri DevTools:** Right-click → Inspect
2. **Hover Elements:** Sèvi ak cursor nan browser la
3. **Gade Koulè yo:**
   - 🟠 **Orange** = Margin
   - 🟢 **Green** = Padding  
   - 🔵 **Blue** = Content
   - 🟡 **Yellow** = Border

#### Live Editing:
- Klike sou yon eleman nan DevTools
- Ale nan "Styles" panel la
- Edit CSS values yo live
- Gade chanjman yo real-time

#### Tips pou Eksplorè:
- Try diferan padding values (5px, 10px, 20px)
- Chanje margin values ak gade kijan eleman yo deplase
- Modifye border ak border-radius
- Experiment ak box-sizing

### 🎯 Benefits Developer Tools:
- **Debug Layout Issues:** Wè kisa k ap kòz problems yo
- **Test Changes Rapid:** Pa bezwen save fichye a chak fwa
- **Learn Properties:** Gade kijan chak property afekte layout
- **Optimize Spacing:** Fine-tune margins ak padding yo perfectement`,
    contentFr: `## 🔧 Démonstration et Developer Tools

### 🎨 Exemple Pratique:

#### HTML:
\`\`\`html
<div class="card">
  <h3>Projet Mis en Vedette</h3>
  <p>Cette boîte utilise margin, padding et borders pour créer l'équilibre.</p>
</div>
\`\`\`

#### CSS:
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
\`\`\`

### 📊 Comment les Propriétés Fonctionnent:

**🔄 Augmenter Padding:**
- Déplace le contenu vers l'intérieur
- Crée plus d'espace entre le texte et la bordure
- N'affecte pas la position des autres éléments

**🔄 Augmenter Margin:**
- Déplace toute la boîte loin des autres
- Crée plus d'espace entre les éléments
- Affecte la position des éléments adjacents

**🔄 Border:**
- Ajoute de l'épaisseur autour du padding
- Peut avoir des couleurs et styles différents
- Border-radius arrondit les coins

**🔄 Box-sizing: border-box:**
- Aide à maintenir une largeur prévisible
- Inclut padding et border dans la largeur totale

### 🛠️ Exercice Developer Tools:

#### Étapes:
1. **Ouvrir DevTools:** Clic droit → Inspecter
2. **Survoler Éléments:** Utiliser le curseur dans le navigateur
3. **Observer les Couleurs:**
   - 🟠 **Orange** = Margin
   - 🟢 **Vert** = Padding
   - 🔵 **Bleu** = Content
   - 🟡 **Jaune** = Border

#### Édition Live:
- Cliquer sur un élément dans DevTools
- Aller au panel "Styles"
- Éditer les valeurs CSS en direct
- Voir les changements en temps réel

#### Conseils d'Exploration:
- Essayer différentes valeurs de padding (5px, 10px, 20px)
- Changer les valeurs de margin et voir comment les éléments bougent
- Modifier border et border-radius
- Expérimenter avec box-sizing

### 🎯 Avantages Developer Tools:
- **Déboguer Problèmes Layout:** Voir ce qui cause les problèmes
- **Tester Changements Rapidement:** Pas besoin de sauvegarder le fichier à chaque fois
- **Apprendre Propriétés:** Voir comment chaque propriété affecte le layout
- **Optimiser Espacement:** Ajuster finement margins et padding parfaitement`,
    codeExample: `/* Developer Tools Exercise */

/* Kòmanse ak sa a ak test nan DevTools */
.demo-card {
  background-color: #fff;
  border: 2px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  max-width: 400px;
}

/* Try chanje values yo nan DevTools:
   - padding: 0.5rem, 1rem, 2rem
   - margin: 0.5rem, 1rem, 2rem
   - border-width: 1px, 3px, 5px
   - border-radius: 0, 8px, 20px
*/`
  },
  {
    id: 4,
    type: 'lesson',
    titleHt: 'Kreye Card Components',
    titleFr: 'Créer des Composants Card',
    contentHt: `## 🎴 Kreye Card Components

### 📋 Featured Work Section:

#### HTML Structure:
\`\`\`html
<section>
  <h2>Featured Work</h2>

  <div class="card">
    <h3>Cabinet Design</h3>
    <p>Custom kitchen cabinetry built for compact spaces — blending PVC ak wood finishes.</p>
  </div>

  <div class="card">
    <h3>Portfolio Website</h3>
    <p>Yon personal website ki montre poetry, engineering projects, ak cabinet work.</p>
  </div>
</section>
\`\`\`

### 🎨 CSS Styling Konplè:

#### Base Reset:
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

#### Section Container:
\`\`\`css
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
\`\`\`

#### Card Component:
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
\`\`\`

### 🧠 Eksplikasyon Properties yo:

**📦 Box Model Properties:**
- \`padding: 1rem 1.5rem\` = Top/Bottom: 1rem, Left/Right: 1.5rem
- \`margin: 1rem 0\` = Top/Bottom: 1rem, Left/Right: 0
- \`border: 2px solid #ddd\` = 2px epè, solid style, gri klè

**✨ Visual Enhancements:**
- \`border-radius: 10px\` = Kwen wonn yo
- \`box-shadow\` = Lonbraj subtil pou depth
- \`transition\` = Animation smooth pou hover

**🎭 Hover Effects:**
- \`transform: translateY(-4px)\` = Leve card la 4px
- \`box-shadow\` pi fòs = Lonbraj pi pwofon

### 💡 Best Practices:

#### Consistent Spacing:
- Itilize menm margin ak padding pou tout cards yo
- Use rem units pou scalability
- Maintenir consistent ratios

#### Accessibility:
- Hover effects ki klè men pa twò dramatic
- Bon kontras koulè yo
- Touch-friendly sizing (minimum 44px height)

#### Performance:
- Itilize transition ak transform (pa left/top)
- Reasonable box-shadow blur values
- Optimize pou mobile devices

### 🎯 Reusable Component System:
Cards yo ka itilize pou:
- Project showcases
- Service offerings  
- Testimonials
- Blog post previews
- Product listings`,
    contentFr: `## 🎴 Créer des Composants Card

### 📋 Section Travaux Mis en Vedette:

#### Structure HTML:
\`\`\`html
<section>
  <h2>Travaux Mis en Vedette</h2>

  <div class="card">
    <h3>Design Armoires</h3>
    <p>Armoires de cuisine sur mesure pour espaces compacts — mélangeant finitions PVC et bois.</p>
  </div>

  <div class="card">
    <h3>Site Portfolio</h3>
    <p>Un site personnel qui présente poésie, projets d'ingénierie et travail d'armoires.</p>
  </div>
</section>
\`\`\`

### 🎨 Style CSS Complet:

#### Reset de Base:
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

#### Conteneur Section:
\`\`\`css
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
\`\`\`

#### Composant Card:
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
\`\`\`

### 🧠 Explication des Propriétés:

**📦 Propriétés Box Model:**
- \`padding: 1rem 1.5rem\` = Haut/Bas: 1rem, Gauche/Droite: 1.5rem
- \`margin: 1rem 0\` = Haut/Bas: 1rem, Gauche/Droite: 0
- \`border: 2px solid #ddd\` = 2px épaisseur, style solide, gris clair

**✨ Améliorations Visuelles:**
- \`border-radius: 10px\` = Coins arrondis
- \`box-shadow\` = Ombre subtile pour la profondeur
- \`transition\` = Animation fluide pour hover

**🎭 Effets Hover:**
- \`transform: translateY(-4px)\` = Soulève la carte de 4px
- \`box-shadow\` plus forte = Ombre plus profonde

### 💡 Bonnes Pratiques:

#### Espacement Cohérent:
- Utiliser les mêmes margin et padding pour toutes les cartes
- Utiliser les unités rem pour la scalabilité
- Maintenir des ratios cohérents

#### Accessibilité:
- Effets hover clairs mais pas trop dramatiques
- Bon contraste des couleurs
- Taille adaptée au toucher (minimum 44px de hauteur)

#### Performance:
- Utiliser transition avec transform (pas left/top)
- Valeurs de flou box-shadow raisonnables
- Optimiser pour appareils mobiles

### 🎯 Système de Composants Réutilisables:
Les cartes peuvent être utilisées pour:
- Vitrines de projets
- Offres de services
- Témoignages
- Aperçus d'articles de blog
- Listes de produits`,
    codeExample: `/* Featured Work Cards */
<section>
  <h2>Featured Work</h2>

  <div class="card">
    <h3>Cabinet Design</h3>
    <p>Custom kitchen cabinetry...</p>
  </div>

  <div class="card">
    <h3>Portfolio Website</h3>
    <p>A personal website...</p>
  </div>
</section>

/* CSS */
* { box-sizing: border-box; }

section {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}`
  },
  {
    id: 5,
    type: 'practice',
    titleHt: 'Egzèsis Pratik yo',
    titleFr: 'Exercices Pratiques',
    contentHt: `## 🧩 Egzèsis Pratik yo - Semèn 4

Ann pratike Box Model ak cards yo!`,
    contentFr: `## 🧩 Exercices Pratiques - Semaine 4

Pratiquons le Box Model avec les cartes!`,
    exercises: [
      {
        id: 1,
        instructionHt: 'Ajoute "* { box-sizing: border-box; }" nan tèt CSS ou a ak kreye de nouvo cards ki montre pwojè diferan yo.',
        instructionFr: 'Ajouter "* { box-sizing: border-box; }" en haut de votre CSS et créer deux nouvelles cards montrant différents projets.',
        starterCode: `/* Ajoute box-sizing reset isit la */

/* Section styling */
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Card styling */
.card {
  /* Ajoute properties isit la */
}`,
        solution: `/* Box sizing reset */
* {
  box-sizing: border-box;
}

section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* HTML Examples:
<div class="card">
  <h3>Web Development</h3>
  <p>Responsive websites ak modern design...</p>
</div>

<div class="card">
  <h3>Graphic Design</h3>
  <p>Logo ak branding materials...</p>
</div>
*/`,
        hint: 'Box-sizing: border-box fè width yo pi predictable ak include padding ak border.'
      },
      {
        id: 2,
        instructionHt: 'Chanje background-color nan cards yo ak test diferan border-radius values (5px, 15px, 20px).',
        instructionFr: 'Changer le background-color des cartes et tester différentes valeurs de border-radius (5px, 15px, 20px).',
        starterCode: `.card {
  background-color: #fff; /* Chanje koulè sa a */
  border: 2px solid #ddd;
  border-radius: 10px; /* Test diferan values */
  padding: 1rem 1.5rem;
  margin: 1rem 0;
}`,
        solution: `.card {
  background-color: #f8f9fa; /* Oswa #fff, #f0f8ff, etc. */
  border: 2px solid #ddd;
  border-radius: 15px; /* Try 5px, 10px, 15px, 20px */
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Lòt opsyon background:
background-color: #f0f8ff; (Blue tint)
background-color: #f9f9f9; (Light gray)
background-color: #fff5f5; (Pink tint)
*/`,
        hint: 'Pi gwo border-radius values yo fè cards yo pi wonn. Experiment ak diferan koulè subtle yo.'
      },
      {
        id: 3,
        instructionHt: 'Ajiste margin ak padding values ak note diferans vizyèl la. Try margin: 2rem 0 ak padding: 2rem.',
        instructionFr: 'Ajuster les valeurs margin et padding et noter la différence visuelle. Essayer margin: 2rem 0 et padding: 2rem.',
        starterCode: `.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem; /* Chanje sa a */
  margin: 1rem 0; /* Chanje sa a tou */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}`,
        solution: `.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 2rem; /* Pi espas nan anndan */
  margin: 2rem 0; /* Pi espas ant cards yo */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Comparison:
Original: padding: 1rem 1.5rem; margin: 1rem 0;
New:      padding: 2rem;        margin: 2rem 0;

Effects:
- Padding 2rem = pi espas nan anndan cards yo
- Margin 2rem 0 = pi espas ant cards yo
*/`,
        hint: 'Padding afekte spacing nan anndan card la. Margin afekte spacing ant cards yo.'
      },
      {
        id: 4,
        instructionHt: 'Ajoute hover animation ak transition. Use transform: translateY(-4px) ak box-shadow pi fòs.',
        instructionFr: 'Ajouter animation hover avec transition. Utiliser transform: translateY(-4px) et box-shadow plus forte.',
        starterCode: `.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  /* Ajoute transition isit la */
}

.card:hover {
  /* Ajoute hover effects isit la */
}`,
        solution: `.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}`,
        hint: 'Transition fè animation yo smooth. Transform: translateY negative leve eleman an.'
      },
      {
        id: 5,
        instructionHt: '⭐ Bonus: Use Developer Tools pou inspect margin ak padding areas yo. Right-click → Inspect ak hover sou cards yo.',
        instructionFr: '⭐ Bonus: Utiliser Developer Tools pour inspecter les zones margin et padding. Clic droit → Inspecter et survoler les cartes.',
        starterCode: `/* DevTools Exercise:
1. Right-click sou yon card → Inspect
2. Hover sou .card eleman nan DevTools
3. Gade koulè yo:
   - Orange = Margin
   - Green = Padding
   - Blue = Content
   - Yellow = Border
4. Edit values yo live ak gade chanjman yo
*/`,
        solution: `/* DevTools Findings:
- Orange highlights margin areas
- Green highlights padding areas
- Blue highlights content areas
- Yellow highlights border

Try changing these live:
- padding: 1rem → 2rem (watch green area grow)
- margin: 1rem 0 → 2rem 0 (watch orange space increase)
- border: 2px → 5px (watch yellow border get thicker)
*/`,
        hint: 'DevTools se yon tool très puissant pou understand ak debug Box Model issues yo!'
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    titleHt: 'Quiz Box Model',
    titleFr: 'Quiz Box Model',
    contentHt: `## 🧪 Quiz Box Model

Test konesans ou sou Box Model ak spacing!`,
    contentFr: `## 🧪 Quiz Box Model

Testez vos connaissances sur le Box Model et l'espacement!`,
    quiz: [
      {
        id: 1,
        questionHt: 'Ki property CSS ki ajoute espas nan anndan yon eleman?',
        questionFr: 'Quelle propriété CSS ajoute de l\'espace à l\'intérieur d\'un élément?',
        options: [
          { ht: 'margin', fr: 'margin' },
          { ht: 'padding', fr: 'padding' },
          { ht: 'border', fr: 'border' },
          { ht: 'spacing', fr: 'spacing' }
        ],
        correctAnswer: 1,
        explanationHt: 'Padding ajoute espas nan anndan border yon eleman, ant border la ak content la.',
        explanationFr: 'Padding ajoute de l\'espace à l\'intérieur de la bordure d\'un élément, entre la bordure et le contenu.'
      },
      {
        id: 2,
        questionHt: 'Kisa ki ajoute espas nan deyò border yon eleman?',
        questionFr: 'Qu\'est-ce qui ajoute de l\'espace à l\'extérieur de la bordure d\'un élément?',
        options: [
          { ht: 'padding', fr: 'padding' },
          { ht: 'margin', fr: 'margin' },
          { ht: 'border-spacing', fr: 'border-spacing' },
          { ht: 'outer-space', fr: 'outer-space' }
        ],
        correctAnswer: 1,
        explanationHt: 'Margin kreye espas nan deyò border yon eleman, ant eleman an ak eleman lòt yo.',
        explanationFr: 'Margin crée de l\'espace à l\'extérieur de la bordure d\'un élément, entre cet élément et les autres.'
      },
      {
        id: 3,
        questionHt: 'Ki property ki kontwole outlined ki vizib la?',
        questionFr: 'Quelle propriété contrôle le contour visible?',
        options: [
          { ht: 'outline', fr: 'outline' },
          { ht: 'border', fr: 'border' },
          { ht: 'frame', fr: 'frame' },
          { ht: 'edge', fr: 'edge' }
        ],
        correctAnswer: 1,
        explanationHt: 'Border property la kreye yon outlined ki vizib nan alantou padding ak content yon eleman.',
        explanationFr: 'La propriété border crée un contour visible autour du padding et du contenu d\'un élément.'
      },
      {
        id: 4,
        questionHt: 'Kisa "box-sizing: border-box;" fè?',
        questionFr: 'Que fait "box-sizing: border-box;"?',
        options: [
          { ht: 'Li retire padding ak border', fr: 'Il enlève padding et border' },
          { ht: 'Li include padding ak border nan total width', fr: 'Il inclut padding et border dans la largeur totale' },
          { ht: 'Li fè border yo pi gwo', fr: 'Il rend les bordures plus grandes' },
          { ht: 'Li cache margin yo', fr: 'Il cache les marges' }
        ],
        correctAnswer: 1,
        explanationHt: 'Border-box include padding ak border nan width ak height yo, fè dimensions yo pi predictable.',
        explanationFr: 'Border-box inclut padding et border dans width et height, rendant les dimensions plus prévisibles.'
      },
      {
        id: 5,
        questionHt: 'Vrè oswa Fo: Margin afekte spacing internal text la.',
        questionFr: 'Vrai ou Faux: Margin affecte l\'espacement interne du texte.',
        options: [
          { ht: 'Vrè', fr: 'Vrai' },
          { ht: 'Fo', fr: 'Faux' }
        ],
        correctAnswer: 1,
        explanationHt: 'FO. Margin afekte spacing ekstèn ant eleman yo. Padding ak line-height yo afekte spacing internal.',
        explanationFr: 'FAUX. Margin affecte l\'espacement externe entre éléments. Padding et line-height affectent l\'espacement interne.'
      }
    ]
  },
  {
    id: 7,
    type: 'mini-project',
    titleHt: 'Mini-Pwojè - "Featured Work Cards"',
    titleFr: 'Mini-Projet - "Cartes Travaux Mis en Vedette"',
    contentHt: `## 💬 Mini-Pwojè — "Featured Work Cards"

### 🎯 Objektif:
Kontinye ak sit stylis Semèn 3 ou a ak ajoute yon seksyon "Featured Work" ak de Project Cards ki style ak Box Model.

### ✅ Kondisyon yo:
• **Box Model Foundation:** Ajoute * { box-sizing: border-box; }
• **Featured Work Section:** Kreye yon seksyon ak 2+ project cards
• **Card Styling:** Use padding pou inner spacing
• **Card Separation:** Use margin pou separation ant cards yo
• **Visual Enhancement:** Aplike border-radius ak box-shadow
• **Hover Animation:** Ajoute subtle elevation ak hover

### 📋 Etap pa Etap:

**1. Add Box Model Reset:**
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

**2. HTML Structure:**
\`\`\`html
<section>
  <h2>Featured Work</h2>

  <div class="card">
    <h3>Cabinet Design</h3>
    <p>Custom kitchen cabinetry built for compact spaces — blending PVC ak wood finishes.</p>
  </div>

  <div class="card">
    <h3>Portfolio Website</h3>
    <p>Yon personal website ki montre poetry, engineering projects, ak cabinet work.</p>
  </div>
</section>
\`\`\`

**3. Section Styling:**
\`\`\`css
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
\`\`\`

**4. Card Component:**
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
\`\`\`

### 🎯 Rezilta ki Atann:
Yon seksyon ki vizyèlman balanced ak cards yo, chak yon framed neatly ak consistent spacing ak hover elevation. Foundation sa a ap vin layout base pou Flexbox nan Semèn 6.

### 🔧 Advanced Features (Opsyonèl):
- Diferan card background colors
- Icon oswa imaj nan chak card
- Diferan hover animations
- Responsive padding ak margins

### 💾 Sove Progression:
Sove travay ou a kòm "Semèn 4" nan playground la. Sa a ap vin layout base ou a pou semèn ki ap vini yo.`,
    contentFr: `## 💬 Mini-Projet — "Cartes Travaux Mis en Vedette"

### 🎯 Objectif:
Continuer avec votre site stylisé Semaine 3 en ajoutant une section "Featured Work" avec deux Project Cards stylisées avec le Box Model.

### ✅ Exigences:
• **Fondation Box Model:** Ajouter * { box-sizing: border-box; }
• **Section Featured Work:** Créer une section avec 2+ cartes de projet
• **Style Carte:** Utiliser padding pour l'espacement interne
• **Séparation Cartes:** Utiliser margin pour la séparation entre cartes
• **Amélioration Visuelle:** Appliquer border-radius et box-shadow
• **Animation Hover:** Ajouter élévation subtile au survol

### 📋 Étapes:

**1. Ajouter Reset Box Model:**
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

**2. Structure HTML:**
\`\`\`html
<section>
  <h2>Travaux Mis en Vedette</h2>

  <div class="card">
    <h3>Design Armoires</h3>
    <p>Armoires de cuisine sur mesure pour espaces compacts — mélangeant finitions PVC et bois.</p>
  </div>

  <div class="card">
    <h3>Site Portfolio</h3>
    <p>Un site personnel qui présente poésie, projets d'ingénierie et travail d'armoires.</p>
  </div>
</section>
\`\`\`

**3. Style Section:**
\`\`\`css
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
\`\`\`

**4. Composant Carte:**
\`\`\`css
.card {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
\`\`\`

### 🎯 Résultat Attendu:
Une section visuellement équilibrée de cartes, chacune encadrée proprement avec espacement cohérent et élévation au survol. Cette fondation deviendra la base de layout pour Flexbox en Semaine 6.

### 🔧 Fonctionnalités Avancées (Optionnel):
- Différentes couleurs de fond de carte
- Icônes ou images dans chaque carte
- Différentes animations de survol
- Padding et margins responsives

### 💾 Sauvegarder Progression:
Sauvegarder votre travail comme "Semaine 4" dans le playground. Ceci deviendra votre base de layout pour les semaines à venir.`,
  },
  {
    id: 8,
    type: 'lesson',
    titleHt: 'Kisa ki Vini Apre a',
    titleFr: 'Ce qui Vient Ensuite',
    contentHt: `## 🧱 Kisa ki Vini Apre a

### Semèn 5: Typography ak Google Fonts

Nan semèn pwochen an, nou ap eksplore type hierarchy ak web fonts yo:

**🔤 Typography Advanced:**
- **Google Fonts** ak kijan pou enpòte yo
- **Type Hierarchy** ak h1, h2, h3 relationships
- **Letter-spacing** ak **line-height** pou readability
- **Font combinations** ak font pairing

**🎨 Professional Typography:**
- Web fonts vs system fonts
- Font loading ak performance
- Responsive typography
- Accessibility considerations

**🎯 Pwojè Kontinye:**
Nou ap pran cards ak layout nou yo ak nou ap:
- Upgrade typography ak Google Fonts
- Kreye clear type hierarchy
- Optimize readability ak spacing
- Prepare pou Flexbox layouts nan Semèn 6

### 🎉 Bravo pou Semèn 4!

Kounye a ou konnen:
✅ Kijan Box Model la fonksyone ak 4 components li yo
✅ Comment pou itilize margin ak padding effectively
✅ Kijan pou kreye professional card components
✅ Comment pou use Developer Tools pou debug spacing
✅ Box-sizing ak modern CSS best practices

**Sit ou a kounye a gen solid foundation ak beautiful cards! 🚀**

### 💡 Tips pou Kontinye:
- Experiment ak diferan spacing values
- Use DevTools pou debug layout issues
- Practice ak diferan card designs
- Think responsive pou mobile devices

**Cards yo ou kreye yo ap vin foundation pou layouts avanse yo nan semèn ki ap vini yo!**`,
    contentFr: `## 🧱 Ce qui Vient Ensuite

### Semaine 5: Typography et Google Fonts

La semaine prochaine, nous explorerons la hiérarchie typographique et les polices web:

**🔤 Typographie Avancée:**
- **Google Fonts** et comment les importer
- **Hiérarchie Typographique** et relations h1, h2, h3
- **Letter-spacing** et **line-height** pour la lisibilité
- **Combinaisons de polices** et appariement

**🎨 Typographie Professionnelle:**
- Polices web vs polices système
- Chargement de polices et performance
- Typographie responsive
- Considérations d'accessibilité

**🎯 Projet Continu:**
Nous prendrons nos cartes et layouts et nous:
- Améliorerons la typographie avec Google Fonts
- Créerons une hiérarchie typographique claire
- Optimiserons la lisibilité avec l'espacement
- Préparerons pour les layouts Flexbox en Semaine 6

### 🎉 Félicitations pour la Semaine 4!

Maintenant vous savez:
✅ Comment fonctionne le Box Model avec ses 4 composants
✅ Comment utiliser margin et padding efficacement
✅ Comment créer des composants card professionnels
✅ Comment utiliser Developer Tools pour déboguer l'espacement
✅ Box-sizing et bonnes pratiques CSS modernes

**Votre site a maintenant une fondation solide avec de belles cartes! 🚀**

### 💡 Conseils pour Continuer:
- Expérimenter avec différentes valeurs d'espacement
- Utiliser DevTools pour déboguer les problèmes de layout
- Pratiquer avec différents designs de carte
- Penser responsive pour les appareils mobiles

**Les cartes que vous avez créées deviendront la fondation pour les layouts avancés dans les semaines à venir!**`,
  }
];

export default htmlCssWeek4Cards;