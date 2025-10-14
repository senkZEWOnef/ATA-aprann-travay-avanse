import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');
  
  // Check if data already exists
  const existingCompanies = await prisma.company.count();
  if (existingCompanies > 0) {
    console.log('ℹ️  Companies already exist, skipping company and job seeding');
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

  // Create lessons for the course
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