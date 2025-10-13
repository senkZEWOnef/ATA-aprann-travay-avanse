'use client';
import { useTranslations, useLocale } from './LocaleProvider';

const features = [
  {
    icon: '🎓',
    titleHt: 'Kou yo kout ak pratik',
    titleFr: 'Micro-cours pratiques',
    descHt: 'Aprann konpetans yo ki gen anpil demann nan mache a nan ti moso yo.',
    descFr: 'Apprenez des compétences demandées sur le marché en petites sessions.'
  },
  {
    icon: '💼',
    titleHt: 'Jwenn travay fasil',
    titleFr: 'Trouvez du travail facilement',
    descHt: 'Konekte ak klien ak òganizasyon yo ki bezwen sèvis ou yo.',
    descFr: 'Connectez-vous avec des clients et organisations qui ont besoin de vos services.'
  },
  {
    icon: '📜',
    titleHt: 'Pwofil ak CV dijital',
    titleFr: 'Profil et CV numériques',
    descHt: 'Kreye yon pwofil pwofesyonèl ak CV ki ka pataje yo.',
    descFr: 'Créez un profil professionnel et des CVs partageables.'
  },
  {
    icon: '🌟',
    titleHt: 'Badge ak sètifika',
    titleFr: 'Badges et certificats',
    descHt: 'Jwenn rekonèt pou konpetans nou aprann yo.',
    descFr: 'Obtenez une reconnaissance pour les compétences apprises.'
  },
  {
    icon: '📱',
    titleHt: 'Optimizasyon pou mobil',
    titleFr: 'Optimisé mobile',
    descHt: 'Aksè nan platfòm nan nenpòt kote sou telefòn ou.',
    descFr: 'Accédez à la plateforme partout depuis votre téléphone.'
  },
  {
    icon: '🤝',
    titleHt: 'Kominote ak konfyans',
    titleFr: 'Communauté et confiance',
    descHt: 'Sistèm evalyasyon ak kominote ki ka fè nou konfyans.',
    descFr: 'Système d\'évaluations et communauté de confiance.'
  }
];

export default function Features() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ht' ? 'Poukisa chwazi ATA?' : 'Pourquoi choisir ATA ?'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === 'ht' 
              ? 'Nou bay jèn yo nan Ayiti opòtinite yo pou yo aprann, travay ak avanse nan lavi yo.'
              : 'Nous donnons aux jeunes d\'Haïti les opportunités d\'apprendre, travailler et avancer dans leur vie.'
            }
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 text-center group hover:-translate-y-1">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'ht' ? feature.titleHt : feature.titleFr}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'ht' ? feature.descHt : feature.descFr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}