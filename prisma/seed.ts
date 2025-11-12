import { PrismaClient } from '@prisma/client';
import { pythonBeginnersCourse } from '../src/data/pythonBeginnersCourse';

const prisma = new PrismaClient();

async function createPythonCourse() {
  // Create Python for Beginners course
  const pythonCourse = await prisma.course.upsert({
    where: { slug: 'python-pou-komanse-yo' },
    update: {},
    create: {
      slug: 'python-pou-komanse-yo',
      titleHt: 'Python pou Kòmansè yo - 15 Semèn',
      titleFr: 'Python pour Débutants - 15 Semaines',
      descriptionHt: 'Yon kou konplè pou aprann pwogram Python soti nan debaz yo rive nan pwojè avanse yo. Chak semèn gen leson pratik ak pwojè mini yo.',
      descriptionFr: 'Un cours complet pour apprendre la programmation Python des bases aux projets avancés. Chaque semaine comprend des leçons pratiques et des mini-projets.',
      category: 'programming',
      level: 'beginner',
      duration: 1350, // 90 minutes × 15 weeks
      price: 0,
      currency: 'HTG',
      thumbnail: '/python.jpg',
      isPublished: true,
    }
  });

  // Delete existing lessons for this course if any
  await prisma.lesson.deleteMany({
    where: { courseId: pythonCourse.id }
  });

  // Create Python course lessons using comprehensive content
  const pythonLessonsData = pythonBeginnersCourse.map((lesson) => {
    // Create comprehensive content by combining all lesson data
    const contentHt = `
## Objektif yo:
${lesson.objectives.ht.map(obj => `• ${obj}`).join('\n')}

## Konsèp Kle yo ak Kòd Egzanp yo:
${lesson.keyConceptsCode.map(concept => `
### ${concept.concept}
\`\`\`python
${concept.codeExample}
\`\`\`
${concept.explanation.ht}
`).join('\n')}

## Egzèsis Pratik yo:
${lesson.practiceExercises.map((exercise, index) => `
### Egzèsis ${index + 1}: ${exercise.title.ht}
${exercise.instruction.ht}

${exercise.starterCode ? `**Kòd Kòmanse:**
\`\`\`python
${exercise.starterCode}
\`\`\`` : ''}

${exercise.expectedOutput ? `**Rezilta Yo Atann:**
\`\`\`
${exercise.expectedOutput}
\`\`\`` : ''}

**Solisyon:**
\`\`\`python
${exercise.solution}
\`\`\`
`).join('\n')}

## Pwojè Mini:
### ${lesson.miniProject.title.ht}
${lesson.miniProject.description.ht}

**Kondisyon yo:**
${lesson.miniProject.requirements.ht.map(req => `• ${req}`).join('\n')}

${lesson.miniProject.starterCode ? `**Kòd Kòmanse:**
\`\`\`python
${lesson.miniProject.starterCode}
\`\`\`` : ''}

**Solisyon Konplè:**
\`\`\`python
${lesson.miniProject.sampleSolution}
\`\`\`

## Quiz:
${lesson.quiz.map((q, index) => `
### Kesyon ${index + 1}: ${q.question.ht}
${q.options.map((opt, i) => `${String.fromCharCode(97 + i)}) ${opt.ht}`).join('\n')}

**Repons:** ${String.fromCharCode(97 + q.correctAnswer)}
**Eksplikasyon:** ${q.explanation.ht}
`).join('\n')}

## Devwa Kay:
${lesson.homework.ht}
`;

    const contentFr = `
## Objectifs:
${lesson.objectives.fr.map(obj => `• ${obj}`).join('\n')}

## Concepts Clés et Exemples de Code:
${lesson.keyConceptsCode.map(concept => `
### ${concept.concept}
\`\`\`python
${concept.codeExample}
\`\`\`
${concept.explanation.fr}
`).join('\n')}

## Exercices Pratiques:
${lesson.practiceExercises.map((exercise, index) => `
### Exercice ${index + 1}: ${exercise.title.fr}
${exercise.instruction.fr}

${exercise.starterCode ? `**Code de Départ:**
\`\`\`python
${exercise.starterCode}
\`\`\`` : ''}

${exercise.expectedOutput ? `**Résultat Attendu:**
\`\`\`
${exercise.expectedOutput}
\`\`\`` : ''}

**Solution:**
\`\`\`python
${exercise.solution}
\`\`\`
`).join('\n')}

## Mini-Projet:
### ${lesson.miniProject.title.fr}
${lesson.miniProject.description.fr}

**Exigences:**
${lesson.miniProject.requirements.fr.map(req => `• ${req}`).join('\n')}

${lesson.miniProject.starterCode ? `**Code de Départ:**
\`\`\`python
${lesson.miniProject.starterCode}
\`\`\`` : ''}

**Solution Complète:**
\`\`\`python
${lesson.miniProject.sampleSolution}
\`\`\`

## Quiz:
${lesson.quiz.map((q, index) => `
### Question ${index + 1}: ${q.question.fr}
${q.options.map((opt, i) => `${String.fromCharCode(97 + i)}) ${opt.fr}`).join('\n')}

**Réponse:** ${String.fromCharCode(97 + q.correctAnswer)}
**Explication:** ${q.explanation.fr}
`).join('\n')}

## Devoir:
${lesson.homework.fr}
`;

    return {
      courseId: pythonCourse.id,
      order: lesson.order,
      titleHt: lesson.titleHt,
      titleFr: lesson.titleFr,
      contentHt: contentHt,
      contentFr: contentFr,
      duration: lesson.duration,
      isPublished: true,
    };
  });

  await prisma.lesson.createMany({
    data: pythonLessonsData
  });

  // Create Python badge
  await prisma.badge.upsert({
    where: { code: 'PYTHON_BEGINNER' },
    update: {},
    create: {
      code: 'PYTHON_BEGINNER',
      nameHt: 'Pwogramè Python Kòmansè',
      nameFr: 'Programmeur Python Débutant',
      descriptionHt: 'Fini kou Python pou kòmansè yo ak 15 semèn',
      descriptionFr: 'Terminé le cours Python pour débutants de 15 semaines',
      icon: '🐍',
      courseId: pythonCourse.id,
    }
  });

  console.log('✅ Python course created successfully');
}

async function createHtmlCssCourse() {
  // Create HTML/CSS for Beginners course
  const htmlCssCourse = await prisma.course.upsert({
    where: { slug: 'html-css-pou-komanse-yo' },
    update: {},
    create: {
      slug: 'html-css-pou-komanse-yo',
      titleHt: 'HTML ak CSS pou Kòmansè yo - 15 Semèn',
      titleFr: 'HTML et CSS pour Débutants - 15 Semaines',
      descriptionHt: 'Yon kou konplè pou aprann HTML ak CSS soti nan debaz yo rive nan depo avanse yo. Chak semèn gen leson pratik ak pwojè mini yo.',
      descriptionFr: 'Un cours complet pour apprendre HTML et CSS des bases aux projets avancés. Chaque semaine comprend des leçons pratiques et des mini-projets.',
      category: 'programming',
      level: 'beginner',
      duration: 1350, // 90 minutes × 15 weeks
      price: 0,
      currency: 'HTG',
      thumbnail: '/html-css.jpg',
      isPublished: true,
    }
  });

  // Delete existing lessons for this course if any
  await prisma.lesson.deleteMany({
    where: { courseId: htmlCssCourse.id }
  });

  // Create HTML/CSS course lessons based on 15-week curriculum
  const htmlCssLessonsData = [
    {
      courseId: htmlCssCourse.id,
      order: 1,
      titleHt: 'Web ak HTML Debaz yo',
      titleFr: 'Bases Web et HTML',
      contentHt: '## Objektif yo:\n• Konprann kijan entènèt la fonksyone\n• Aprann itilize VS Code ak Live Server\n• Kreye premye HTML boilerplate ou a\n• Itilize headings ak paragraphs\n\n## Mini-Pwojè:\n"Hello, Web" profil paj',
      contentFr: '## Objectifs:\n• Comprendre le fonctionnement du web\n• Apprendre VS Code et Live Server\n• Créer votre premier HTML boilerplate\n• Utiliser headings et paragraphes\n\n## Mini-Projet:\nPage de profil "Hello, Web"',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 2,
      titleHt: 'Links, Imaj ak Lis yo',
      titleFr: 'Liens, Images et Listes',
      contentHt: '## Objektif yo:\n• Aprann itilize <a>, <img>, <ul>/<ol>\n• Konprann captions/alt text\n• Entwodiksyon nan semantic HTML\n\n## Mini-Pwojè:\nPaj biyografi ak links, galri imaj, lis entèrè',
      contentFr: '## Objectifs:\n• Apprendre <a>, <img>, <ul>/<ol>\n• Comprendre captions/alt text\n• Introduction au HTML sémantique\n\n## Mini-Projet:\nPage bio avec liens, galerie d\'images, liste d\'intérêts',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 3,
      titleHt: 'CSS Fondamental yo',
      titleFr: 'Fondamentaux CSS',
      contentHt: '## Objektif yo:\n• Konprann selectors, properties, units (px, %, rem)\n• Aprann koulè yo\n\n## Mini-Pwojè:\nStylesheet kòmanse pou tipografi ak koulè',
      contentFr: '## Objectifs:\n• Comprendre selectors, propriétés, unités (px, %, rem)\n• Apprendre les couleurs\n\n## Mini-Projet:\nStylesheet de départ pour typographie et couleurs',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 4,
      titleHt: 'Box Model',
      titleFr: 'Modèle de Boîte',
      contentHt: '## Objektif yo:\n• Konprann width/height, padding, border, margin\n• Aprann box-sizing\n\n## Mini-Pwojè:\nCard component (kòntni nan bwat)',
      contentFr: '## Objectifs:\n• Comprendre width/height, padding, border, margin\n• Apprendre box-sizing\n\n## Mini-Projet:\nComposant carte (contenu en boîte)',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 5,
      titleHt: 'Tipografi',
      titleFr: 'Typographie',
      contentHt: '## Objektif yo:\n• Aprann web-safe fonts, Google Fonts\n• Konprann line-height, letter-spacing\n\n## Mini-Pwojè:\nPaj blog senp',
      contentFr: '## Objectifs:\n• Apprendre web-safe fonts, Google Fonts\n• Comprendre line-height, letter-spacing\n\n## Mini-Projet:\nPage de blog simple',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 6,
      titleHt: 'Flexbox',
      titleFr: 'Flexbox',
      contentHt: '## Objektif yo:\n• Konprann main axis, cross axis, alignment\n• Aprann gap, wrapping\n\n## Mini-Pwojè:\nResponsive navbar ak feature strip',
      contentFr: '## Objectifs:\n• Comprendre main axis, cross axis, alignement\n• Apprendre gap, wrapping\n\n## Mini-Projet:\nNavbar responsive + bande de fonctionnalités',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 7,
      titleHt: 'Responsive Design',
      titleFr: 'Design Réactif',
      contentHt: '## Objektif yo:\n• Konprann mobile-first, media queries\n• Aprann fluid images, viewport\n\n## Mini-Pwojè:\nDe-kolòn → sengle-kolòn layout',
      contentFr: '## Objectifs:\n• Comprendre mobile-first, media queries\n• Apprendre images fluides, viewport\n\n## Mini-Projet:\nLayout deux-colonnes → une-colonne',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 8,
      titleHt: 'Pwojè nan Mitan an ak Revizyon',
      titleFr: 'Projet Midterm et Révision',
      contentHt: '## Objektif yo:\n• Konsolidation: semantic HTML ak base CSS\n\n## Mini-Pwojè:\nYon-paj landing site (hero, features, footer)',
      contentFr: '## Objectifs:\n• Consolidation: HTML sémantique + CSS de base\n\n## Mini-Projet:\nSite landing une-page (hero, fonctionnalités, footer)',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 9,
      titleHt: 'Positioning ak Backgrounds',
      titleFr: 'Positionnement et Arrière-plans',
      contentHt: '## Objektif yo:\n• Aprann position, z-index\n• Konprann backgrounds, gradients\n\n## Mini-Pwojè:\nHero header ak overlay text',
      contentFr: '## Objectifs:\n• Apprendre position, z-index\n• Comprendre backgrounds, dégradés\n\n## Mini-Projet:\nEn-tête hero avec texte en superposition',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 10,
      titleHt: 'Forms yo',
      titleFr: 'Formulaires',
      contentHt: '## Objektif yo:\n• Aprann inputs, labels, accessibility\n• Konprann basic validation styles\n\n## Mini-Pwojè:\nContact/sign-up form',
      contentFr: '## Objectifs:\n• Apprendre inputs, labels, accessibilité\n• Comprendre styles de validation de base\n\n## Mini-Projet:\nFormulaire contact/inscription',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 11,
      titleHt: 'CSS Grid',
      titleFr: 'CSS Grid',
      contentHt: '## Objektif yo:\n• Konprann grid tracks, areas\n• Aprann auto-fit, minmax\n\n## Mini-Pwojè:\nMagazine/grid gallery layout',
      contentFr: '## Objectifs:\n• Comprendre pistes de grille, zones\n• Apprendre auto-fit, minmax\n\n## Mini-Projet:\nLayout magazine/galerie en grille',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 12,
      titleHt: 'Components yo',
      titleFr: 'Composants',
      contentHt: '## Objektif yo:\n• Kreye buttons, badges, cards\n• Aprann variables (:root), utility classes\n\n## Mini-Pwojè:\nReusable components sheet',
      contentFr: '## Objectifs:\n• Créer boutons, badges, cartes\n• Apprendre variables (:root), classes utilitaires\n\n## Mini-Projet:\nFeuille de composants réutilisables',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 13,
      titleHt: 'Accessibility (a11y)',
      titleFr: 'Accessibilité (a11y)',
      contentHt: '## Objektif yo:\n• Konprann semantic landmarks, alt text\n• Aprann focus states, contrast\n\n## Mini-Pwojè:\nAccessibility pass sou paj yo ki te fèt yo',
      contentFr: '## Objectifs:\n• Comprendre repères sémantiques, alt text\n• Apprendre états focus, contraste\n\n## Mini-Projet:\nPassage accessibilité sur pages précédentes',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 14,
      titleHt: 'Transitions ak Animations yo',
      titleFr: 'Transitions et Animations',
      contentHt: '## Objektif yo:\n• Aprann transition, transform, keyframes\n\n## Mini-Pwojè:\nInteractive cards/CTA hover states',
      contentFr: '## Objectifs:\n• Apprendre transition, transform, keyframes\n\n## Mini-Projet:\nCartes interactives/états hover CTA',
      duration: 90,
      isPublished: true,
    },
    {
      courseId: htmlCssCourse.id,
      order: 15,
      titleHt: 'Pwojè Final ak Egzamen',
      titleFr: 'Projet Final et Examen',
      contentHt: '## Objektif yo:\n• Multi-page site ak 30-Q egzamen\n\n## Mini-Pwojè:\nTi mak site (Home/About/Contact)',
      contentFr: '## Objectifs:\n• Site multi-pages + examen 30 questions\n\n## Mini-Projet:\nPetit site de marque (Accueil/À propos/Contact)',
      duration: 90,
      isPublished: true,
    }
  ];

  await prisma.lesson.createMany({
    data: htmlCssLessonsData
  });

  // Create HTML/CSS badge
  await prisma.badge.upsert({
    where: { code: 'HTML_CSS_BEGINNER' },
    update: {},
    create: {
      code: 'HTML_CSS_BEGINNER',
      nameHt: 'Devlopè Web HTML/CSS Kòmansè',
      nameFr: 'Développeur Web HTML/CSS Débutant',
      descriptionHt: 'Fini kou HTML ak CSS pou kòmansè yo ak 15 semèn',
      descriptionFr: 'Terminé le cours HTML et CSS pour débutants de 15 semaines',
      icon: '🌐',
      courseId: htmlCssCourse.id,
    }
  });

  console.log('✅ HTML/CSS course created successfully');
}

async function main() {
  console.log('🌱 Seeding database...');
  
  // Check if data already exists
  const existingCompanies = await prisma.company.count();
  if (existingCompanies > 0) {
    console.log('ℹ️  Companies already exist, skipping company and job seeding');
    
    // Check if Python course exists and create it if it doesn't
    const pythonCourseExists = await prisma.course.findUnique({
      where: { slug: 'python-pou-komanse-yo' }
    });
    
    console.log('🐍 Updating Python course with comprehensive content...');
    await createPythonCourse();
    await createHtmlCssCourse();
    
    return;
  }

  // Create demo user
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@ata.ht' },
    update: {},
    create: {
      email: 'demo@ata.ht',
      name: 'Demo User',
      profile: {
        create: {
          username: 'demo-user',
          fullName: 'Marie Jean Baptiste',
          bio: 'Entèprèt ak ekspètiz nan anglè ak panyòl. Gen eksperyans nan travay ak òganizasyon entènasyonal yo.',
          phone: '+509 1234-5678',
          whatsapp: '+509 1234-5678',
          city: 'Port-au-Prince',
          country: 'Haiti',
          preferredLang: 'ht',
          isVerified: true,
          rating: 4.8,
          ratingCount: 23,
        }
      }
    },
    include: { profile: true }
  });

  // Create demo services
  await prisma.service.createMany({
    data: [
      {
        userId: demoUser.id,
        titleHt: 'Entèpretasyon Angle/Franse',
        titleFr: 'Interprétation Anglais/Français',
        descHt: 'Sèvis entèpretasyon pwofesyonèl pou reyinyon ak evènman yo',
        descFr: 'Service d\'interprétation professionnel pour réunions et événements',
        category: 'interpreting',
        subcategory: 'conference',
        priceType: 'hourly',
        price: 800,
        currency: 'HTG',
        city: 'Port-au-Prince',
        isAvailable: true,
        isActive: true,
      },
      {
        userId: demoUser.id,
        titleHt: 'Jesyon Rezo Sosyal',
        titleFr: 'Gestion Réseaux Sociaux',
        descHt: 'Jesyon kont Instagram ak Facebook pou biznis yo',
        descFr: 'Gestion des comptes Instagram et Facebook pour entreprises',
        category: 'marketing',
        subcategory: 'social-media',
        priceType: 'fixed',
        price: 2500,
        currency: 'HTG',
        city: 'Port-au-Prince',
        isAvailable: true,
        isActive: true,
      }
    ]
  });

  // Create demo courses
  const course1 = await prisma.course.upsert({
    where: { slug: 'angle-pou-entepretasyon-1' },
    update: {},
    create: {
      slug: 'angle-pou-entepretasyon-1',
      titleHt: 'Angle pou Entèpretasyon - Nivo 1',
      titleFr: 'Anglais pour Interprétation - Niveau 1',
      descriptionHt: 'Aprann baz angle yo pou kòmanse nan entèpretasyon',
      descriptionFr: 'Apprenez les bases de l\'anglais pour débuter en interprétation',
      category: 'languages',
      level: 'beginner',
      duration: 365, // 6+ hours total (35+35+40+45+45+50+45+60)
      price: 500,
      currency: 'HTG',
      isPublished: true,
    }
  });

  // Create Python for Beginners course
  const pythonCourse = await prisma.course.upsert({
    where: { slug: 'python-pou-komanse-yo' },
    update: {},
    create: {
      slug: 'python-pou-komanse-yo',
      titleHt: 'Python pou Kòmansè yo - 15 Semèn',
      titleFr: 'Python pour Débutants - 15 Semaines',
      descriptionHt: 'Yon kou konplè pou aprann pwogram Python soti nan debaz yo rive nan pwojè avanse yo. Chak semèn gen leson pratik ak pwojè mini yo.',
      descriptionFr: 'Un cours complet pour apprendre la programmation Python des bases aux projets avancés. Chaque semaine comprend des leçons pratiques et des mini-projets.',
      category: 'programming',
      level: 'beginner',
      duration: 1350, // 90 minutes × 15 weeks
      price: 0,
      currency: 'HTG',
      thumbnail: '/python.jpg',
      isPublished: true,
    }
  });

  // Create lessons for the interpretation course
  await prisma.lesson.createMany({
    data: [
      {
        courseId: course1.id,
        order: 1,
        titleHt: 'Entwodiksyon ak Salitasyon',
        titleFr: 'Introduction et Salutations',
        contentHt: 'Nan leson sa a, nou va aprann kijan pou nou salue moun yo nan angle ak kijan pou nou prezante tèt nou.',
        contentFr: 'Dans cette leçon, nous apprendrons comment saluer les gens en anglais et comment nous présenter.',
        duration: 35,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 2,
        titleHt: 'Small Talk ak Kliyan',
        titleFr: 'Small Talk avec un Client',
        contentHt: 'Aprann kijan pou w fè konvèsasyon ak kliyan yo ak etabli yon bon relasyon.',
        contentFr: 'Apprenez comment faire la conversation avec les clients et établir une bonne relation.',
        duration: 35,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 3,
        titleHt: 'Ekspresyon Politès ak Kominikasyon Pwofesyonèl',
        titleFr: 'Expressions de Politesse et Communication Professionnelle',
        contentHt: 'Aprann ekspresyon politès yo ak kijan pou w kominik ak pwofesyonalis.',
        contentFr: 'Apprenez les expressions de politesse et comment communiquer professionnellement.',
        duration: 40,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 4,
        titleHt: 'Kominikasyon Telefòn ak Randevou yo',
        titleFr: 'Communication Téléphonique et Rendez-vous',
        contentHt: 'Aprann kijan pou w jere telefòn ak randevou yo ak pwofesyonalis.',
        contentFr: 'Apprenez comment gérer les appels téléphoniques et les rendez-vous professionnellement.',
        duration: 45,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 5,
        titleHt: 'Vokabilè Pwofesyonèl 1',
        titleFr: 'Vocabulaire Professionnel 1',
        contentHt: 'Aprann mo yo ki pi enpòtan nan mond travay la ak randevou yo.',
        contentFr: 'Apprenez les mots les plus importants du monde du travail et des rendez-vous.',
        duration: 45,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 6,
        titleHt: 'Vokabilè Pwofesyonèl 2 - Sèvis ak Kliyen',
        titleFr: 'Vocabulaire Professionnel 2 - Services et Clients',
        contentHt: 'Aprann mo ak ekspresyon nan diferan sèvis yo ak kijan pou w ede kliyan yo.',
        contentFr: 'Apprenez les mots et expressions des différents services et comment aider les clients.',
        duration: 50,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 7,
        titleHt: 'Jere Konfli ak Rezoud Pwoblèm yo',
        titleFr: 'Gestion des Conflits et Résolution de Problèmes',
        contentHt: 'Aprann kijan pou w jere konfli ak rezoud pwoblèm yo ak kliyan yo.',
        contentFr: 'Apprenez comment gérer les conflits et résoudre les problèmes avec les clients.',
        duration: 45,
        isPublished: true,
      },
      {
        courseId: course1.id,
        order: 8,
        titleHt: 'Revizyon ak Pratik Final',
        titleFr: 'Révision et Pratique Finale',
        contentHt: 'Revize tout sa ou te aprann nan ak pratike nan senaryo reyèl yo.',
        contentFr: 'Révisez tout ce que vous avez appris et pratiquez dans des scénarios réels.',
        duration: 60,
        isPublished: true,
      }
    ]
  });

  // Create Python course lessons
  await prisma.lesson.createMany({
    data: [
      {
        courseId: pythonCourse.id,
        order: 1,
        titleHt: 'Entwodiksyon nan Python',
        titleFr: 'Introduction à Python',
        contentHt: 'Konprann ki sa Python ye ak kijan li fonksyone. Enstale Python ak VS Code sou òdinatè w. Ekri ak egzekite premye script ou. Itilize deklarasyon print ak kòmantè yo.',
        contentFr: 'Comprendre ce qu\'est Python et comment il fonctionne. Installer Python et VS Code sur votre ordinateur. Écrire et exécuter votre premier script. Utiliser les instructions print et les commentaires.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 2,
        titleHt: 'Varyab ak Tip Done yo',
        titleFr: 'Variables et Types de Données',
        contentHt: 'Konprann ki sa varyab yo ye ak kijan pou kreye yo. Aprann tip done debaz yo: int, float, str, bool. Fè konvèsyon ant tip done yo.',
        contentFr: 'Comprendre ce que sont les variables et comment les créer. Apprendre les types de données de base : int, float, str, bool. Faire des conversions entre types de données.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 3,
        titleHt: 'String ak Operasyon sou String yo',
        titleFr: 'Chaînes et Opérations sur les Chaînes',
        contentHt: 'Konprann indexing ak slicing nan string yo. Aprann f-string ak fòmataj tèks. Itilize metòd string yo kòm .upper(), .lower(), .strip().',
        contentFr: 'Comprendre l\'indexation et le découpage dans les chaînes. Apprendre les f-strings et le formatage de texte. Utiliser les méthodes de chaînes comme .upper(), .lower(), .strip().',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 4,
        titleHt: 'Lis ak Tupl yo',
        titleFr: 'Listes et Tuples',
        contentHt: 'Kreye ak manipile lis yo. Itilize metòd lis yo kòm append(), remove(), sort(). Konprann diferans ant lis ak tupl yo.',
        contentFr: 'Créer et manipuler les listes. Utiliser les méthodes de listes comme append(), remove(), sort(). Comprendre la différence entre listes et tuples.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 5,
        titleHt: 'Deklarasyon Kondisyonèl yo',
        titleFr: 'Instructions Conditionnelles',
        contentHt: 'Itilize if, elif, ak else. Konprann operatè konparezon yo. Konbine kondisyon yo ak operatè lojik.',
        contentFr: 'Utiliser if, elif, et else. Comprendre les opérateurs de comparaison. Combiner les conditions avec les opérateurs logiques.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 6,
        titleHt: 'Loop yo (For ak While)',
        titleFr: 'Boucles (For et While)',
        contentHt: 'Itilize for loop yo pou itere sou lis ak strings. Konprann ak itilize while loop yo. Kontrole loop yo ak break ak continue.',
        contentFr: 'Utiliser les boucles for pour itérer sur les listes et chaînes. Comprendre et utiliser les boucles while. Contrôler les boucles avec break et continue.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 7,
        titleHt: 'Fonksyon yo',
        titleFr: 'Fonctions',
        contentHt: 'Defini ak rele fonksyon yo. Itilize paramèt ak agiman yo. Konprann return values ak scope.',
        contentFr: 'Définir et appeler des fonctions. Utiliser les paramètres et arguments. Comprendre les valeurs de retour et la portée.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 8,
        titleHt: 'Pwojè nan Mitan an',
        titleFr: 'Projet de Mi-parcours',
        contentHt: 'Revizyon ak pwojè ti kras ki konbine tout subjè yo. Sistèm jesyon nòt etidyan yo.',
        contentFr: 'Révision et petit projet qui combine tous les sujets. Système de gestion des notes d\'étudiants.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 9,
        titleHt: 'Diksyonè ak Ansanm yo',
        titleFr: 'Dictionnaires et Ensembles',
        contentHt: 'Travay ak pè kle-valè yo. Itere sou diksyonè yo. Operasyon sou ansanm yo.',
        contentFr: 'Travailler avec les paires clé-valeur. Itérer sur les dictionnaires. Opérations sur les ensembles.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 10,
        titleHt: 'Jesyon Fichye yo',
        titleFr: 'Gestion des Fichiers',
        contentHt: 'Li ak ekri fichye tèks yo. Itilize ak open() ak jesyon otomatik resous yo.',
        contentFr: 'Lire et écrire des fichiers texte. Utiliser avec open() et la gestion automatique des ressources.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 11,
        titleHt: 'Jesyon Erè yo',
        titleFr: 'Gestion des Erreurs',
        contentHt: 'Itilize try/except pou jere erè yo. Leve eksepsyon yo ak raise.',
        contentFr: 'Utiliser try/except pour gérer les erreurs. Lever des exceptions avec raise.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 12,
        titleHt: 'Modil ak Pake yo',
        titleFr: 'Modules et Packages',
        contentHt: 'Enpòte modil yo. Itilize math, random, datetime ak lòt modil yo.',
        contentFr: 'Importer des modules. Utiliser math, random, datetime et autres modules.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 13,
        titleHt: 'Debaz Pwogram Oriyante Objè',
        titleFr: 'Bases de la Programmation Orientée Objet',
        contentHt: 'Klas yo ak objè yo. Atribi ak metòd yo. Kreye simulatè kont bank la.',
        contentFr: 'Classes et objets. Attributs et méthodes. Créer un simulateur de compte bancaire.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 14,
        titleHt: 'Travay ak Done Ekstèn yo',
        titleFr: 'Travailler avec des Données Externes',
        contentHt: 'JSON ak API yo. Itilize requests pou rele API yo. Pwojè aplikasyon meteo.',
        contentFr: 'JSON et APIs. Utiliser requests pour appeler les APIs. Projet d\'application météo.',
        duration: 90,
        isPublished: true,
      },
      {
        courseId: pythonCourse.id,
        order: 15,
        titleHt: 'Pwojè Final ak Egzamen',
        titleFr: 'Projet Final et Examen',
        contentHt: 'Konbine tout kapasite yo nan yon pwojè. Aplikasyon CLI Asistan Pèsonèl.',
        contentFr: 'Combiner toutes les compétences dans un projet. Application CLI Assistant Personnel.',
        duration: 90,
        isPublished: true,
      }
    ]
  });

  // Create badges
  const badge1 = await prisma.badge.upsert({
    where: { code: 'ENG_INTERP_L1' },
    update: {},
    create: {
      code: 'ENG_INTERP_L1',
      nameHt: 'Entèprèt Angle - Nivo 1',
      nameFr: 'Interprète Anglais - Niveau 1',
      descriptionHt: 'Fini kou angle pou entèpretasyon nivo 1',
      descriptionFr: 'Terminé le cours d\'anglais pour interprétation niveau 1',
      icon: '🇺🇸',
      courseId: course1.id,
    }
  });

  // Create Python badge
  const pythonBadge = await prisma.badge.upsert({
    where: { code: 'PYTHON_BEGINNER' },
    update: {},
    create: {
      code: 'PYTHON_BEGINNER',
      nameHt: 'Pwogramè Python Kòmansè',
      nameFr: 'Programmeur Python Débutant',
      descriptionHt: 'Fini kou Python pou kòmansè yo ak 15 semèn',
      descriptionFr: 'Terminé le cours Python pour débutants de 15 semaines',
      icon: '🐍',
      courseId: pythonCourse.id,
    }
  });

  // Create demo companies
  const company1 = await prisma.company.create({
    data: {
      name: 'TechKaribe Solutions',
      nameHt: 'TechKaribe Solutions',
      nameFr: 'Solutions TechKaribe',
      description: 'Leading tech company in Haiti focused on digital transformation',
      descriptionHt: 'Konpani teknoloji ki nan tèt la nan Ayiti ki konsantre sou transfòmasyon dijital',
      descriptionFr: 'Entreprise technologique leader en Haïti axée sur la transformation numérique',
      website: 'https://techkaribe.ht',
      industry: 'Technology',
      size: 'medium',
      city: 'Port-au-Prince',
      country: 'Haiti',
      email: 'jobs@techkaribe.ht',
      phone: '+509 2222-3333',
      isVerified: true,
    }
  });

  const company2 = await prisma.company.create({
    data: {
      name: 'Haiti Business Hub',
      nameHt: 'Sant Biznis Ayiti',
      nameFr: 'Hub Business Haïti',
      description: 'Connecting businesses across Haiti with talented professionals',
      descriptionHt: 'Konekte biznis yo nan tout Ayiti ak pwofesyonèl ki gen kapasite',
      descriptionFr: 'Connecter les entreprises à travers Haïti avec des professionnels talentueux',
      website: 'https://haitibusinesshub.com',
      industry: 'Consulting',
      size: 'small',
      city: 'Port-au-Prince',
      country: 'Haiti',
      email: 'careers@hbhub.ht',
      phone: '+509 3333-4444',
      isVerified: true,
    }
  });

  // Create demo job postings
  await prisma.jobPosting.createMany({
    data: [
      {
        companyId: company1.id,
        titleHt: 'Depo Web Developer',
        titleFr: 'Développeur Web Junior',
        descriptionHt: 'Nou ap chèche yon depo web developer ki gen pasyon nan kreye sit entènet modèn yo.',
        descriptionFr: 'Nous recherchons un développeur web junior passionné par la création de sites web modernes.',
        requirementsHt: '• Gen ekspèans nan HTML, CSS, ak JavaScript\n• Konnen React oswa Vue.js\n• Bon kominikasyon nan Kreyòl ak Fransè',
        requirementsFr: '• Expérience en HTML, CSS et JavaScript\n• Connaissance de React ou Vue.js\n• Bonne communication en créole et français',
        benefitsHt: '• Asiwans sante\n• Oportunite fòmasyon\n• Anviwonman travay ki fleksib',
        benefitsFr: '• Assurance santé\n• Opportunités de formation\n• Environnement de travail flexible',
        category: 'programming',
        subcategory: 'web-development',
        employmentType: 'full-time',
        experienceLevel: 'entry',
        salaryMin: 25000,
        salaryMax: 35000,
        currency: 'HTG',
        city: 'Port-au-Prince',
        isRemote: false,
        isActive: true,
      },
      {
        companyId: company2.id,
        titleHt: 'Entèprèt Angle/Kreyòl',
        titleFr: 'Interprète Anglais/Créole',
        descriptionHt: 'Pozisyon entèprèt pou ede kominikasyon ant kliyen etranje yo ak ekip lokal la.',
        descriptionFr: 'Poste d\'interprète pour faciliter la communication entre les clients étrangers et l\'équipe locale.',
        requirementsHt: '• Pale angle ak kreyòl kouramman\n• Ekspèans nan entèpretasyon\n• Diplòm nan literati oswa langaj',
        requirementsFr: '• Parler couramment anglais et créole\n• Expérience en interprétation\n• Diplôme en littérature ou langues',
        benefitsHt: '• Salè konpetitif\n• Pwojè entèresan\n• Fleksibilite orè travay',
        benefitsFr: '• Salaire compétitif\n• Projets intéressants\n• Flexibilité des horaires',
        category: 'interpreting',
        subcategory: 'business',
        employmentType: 'part-time',
        experienceLevel: 'mid',
        salaryMin: 800,
        salaryMax: 1200,
        currency: 'HTG',
        city: 'Port-au-Prince',
        isRemote: true,
        isActive: true,
      },
      {
        companyId: company1.id,
        titleHt: 'Jesyon Rezo Sosyal',
        titleFr: 'Gestionnaire Réseaux Sociaux',
        descriptionHt: 'Responsab jesyon ak devlòpman estrateji rezo sosyal pou kliyen yo.',
        descriptionFr: 'Responsable de la gestion et du développement des stratégies de réseaux sociaux pour les clients.',
        requirementsHt: '• Ekspèans nan Facebook, Instagram, Twitter\n• Konnen Adobe Creative Suite\n• Kapasite analiz ak estrateji',
        requirementsFr: '• Expérience avec Facebook, Instagram, Twitter\n• Connaissance d\'Adobe Creative Suite\n• Capacités d\'analyse et de stratégie',
        benefitsHt: '• Travay nan kay ou\n• Pwojè kreyatè\n• Opòtinite kwasans',
        benefitsFr: '• Travail à domicile\n• Projets créatifs\n• Opportunités de croissance',
        category: 'marketing',
        subcategory: 'social-media',
        employmentType: 'contract',
        experienceLevel: 'mid',
        salaryMin: 2000,
        salaryMax: 4000,
        currency: 'HTG',
        city: 'Port-au-Prince',
        isRemote: true,
        isActive: true,
      }
    ]
  });

  console.log('✅ Database seeded successfully!');
  console.log('📧 Demo user: demo@ata.ht');
  console.log('🔑 Password: password123');
  console.log('🏢 Demo companies: TechKaribe Solutions, Haiti Business Hub');
  console.log('💼 Demo jobs: 3 job postings created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });