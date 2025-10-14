'use client';
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { useTranslations, useLocale } from "../../../components/LocaleProvider";

// Mock data - you'll replace this with real data from your database later
const mockServices = [
  {
    id: 1,
    titleHt: "Entèpretasyon Angle/Franse",
    titleFr: "Interprétation Anglais/Français", 
    descHt: "Disponib pou randevou ak pwojè yo",
    descFr: "Disponible pour rendez-vous et projets",
    category: "interpreting",
    price: 800,
    currency: "HTG",
    priceType: "hourly",
    city: "PAP",
    rating: 4.9,
    completedJobs: 23,
    user: { name: "Marie Jean", avatar: "👩🏿‍💼" }
  },
  {
    id: 2,
    titleHt: "Jesyon Rezo Sosyal yo",
    titleFr: "Gestion Réseaux Sociaux",
    descHt: "Jesyon Instagram, Facebook ak WhatsApp Business",
    descFr: "Gestion Instagram, Facebook et WhatsApp Business",
    category: "marketing",
    price: 1200,
    currency: "HTG", 
    priceType: "fixed",
    city: "Cap",
    rating: 4.8,
    completedJobs: 15,
    user: { name: "Jean Pierre", avatar: "👨🏿‍💻" }
  },
  {
    id: 3,
    titleHt: "Pwogramè Web",
    titleFr: "Développement Web",
    descHt: "Kreye sit entènèt ak aplikasyon yo",
    descFr: "Création de sites web et applications",
    category: "programming",
    price: 2500,
    currency: "HTG",
    priceType: "fixed",
    city: "PAP",
    rating: 5.0,
    completedJobs: 8,
    user: { name: "Sophia Claude", avatar: "👩🏿‍💻" }
  }
];

function ServiceCard({ service, locale }: { service: any, locale: 'ht' | 'fr' }) {
  const title = locale === 'ht' ? service.titleHt : service.titleFr;
  const desc = locale === 'ht' ? service.descHt : service.descFr;
  
  return (
    <div className="card p-6 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{service.user.avatar}</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{service.user.name} • {service.city}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center text-yellow-500 text-sm mb-1">
            <span>⭐ {service.rating}</span>
            <span className="text-gray-400 ml-1">({service.completedJobs})</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{desc}</p>
      
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-primary-600">
          {service.currency} {service.price}
          <span className="text-sm font-normal text-gray-500">
            {service.priceType === 'hourly' ? '/h' : ''}
          </span>
        </div>
        <button className="btn-primary text-sm px-4 py-2">
          {locale === 'ht' ? 'Kontakte' : 'Contacter'}
        </button>
      </div>
    </div>
  );
}

export default function HirePage() {
  const t = useTranslations("hire");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-25 to-purple-25">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ht' ? 'Jwenn Travayè yo' : 'Trouvez des Prestataires'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === 'ht' 
              ? 'Konekte ak pwofesyonèl yo ki gen konpetans nan domèn diferan yo'
              : 'Connectez-vous avec des professionnels qualifiés dans différents domaines'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'ht' ? 'Kategori' : 'Catégorie'}
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>{locale === 'ht' ? 'Tout kategori yo' : 'Toutes catégories'}</option>
                <option>Entèpretasyon / Interprétation</option>
                <option>Marketing Digital</option>
                <option>Pwogramè / Programmation</option>
                <option>Premye Sèkou / Premiers Secours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'ht' ? 'Vil' : 'Ville'}
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>{locale === 'ht' ? 'Tout vil yo' : 'Toutes villes'}</option>
                <option>Port-au-Prince (PAP)</option>
                <option>Cap-Haïtien (Cap)</option>
                <option>Jacmel</option>
                <option>Les Cayes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'ht' ? 'Pri (max)' : 'Prix (max)'}
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>HTG 5,000+</option>
                <option>HTG 2,500</option>
                <option>HTG 1,500</option>
                <option>HTG 1,000</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="btn-primary w-full">
                {locale === 'ht' ? '🔍 Chèche' : '🔍 Rechercher'}
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServices.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            {locale === 'ht' ? 'Chaje pi plis' : 'Charger plus'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
