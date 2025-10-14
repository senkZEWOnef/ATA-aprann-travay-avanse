'use client';
import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import { useLocale } from "../../../../components/LocaleProvider";

// Mock profile data
const mockProfile = {
  username: "marie-jean",
  fullName: "Marie Jean",
  avatar: "👩🏿‍💼",
  city: "Port-au-Prince",
  rating: 4.9,
  completedJobs: 23,
  joinedDate: "2024-03-15",
  bio: {
    ht: "Mwen se yon entèprèt ekspè ak 5 ane eksperyans nan kesyon travay ak òganizasyon entènasyonal yo.",
    fr: "Je suis une interprète expérimentée avec 5 ans d'expérience de travail avec des organisations internationales."
  },
  badges: [
    { name: "Entèprèt Angle L1 / Interprète Anglais N1", icon: "🇺🇸" },
    { name: "Entèprèt Panyòl L1 / Interprète Espagnol N1", icon: "🇪🇸" },
    { name: "Premye Sèkou / Premiers Secours", icon: "🏥" }
  ],
  services: [
    {
      titleHt: "Entèpretasyon Angle/Franse",
      titleFr: "Interprétation Anglais/Français",
      price: 800,
      currency: "HTG",
      priceType: "hourly"
    },
    {
      titleHt: "Entèpretasyon Panyòl/Franse", 
      titleFr: "Interprétation Espagnol/Français",
      price: 750,
      currency: "HTG", 
      priceType: "hourly"
    }
  ]
};

export default function PublicProfile({
  params,
}: {
  params: { username: string };
}) {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-25 to-accent-25">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="text-6xl">{mockProfile.avatar}</div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {mockProfile.fullName}
              </h1>
              <p className="text-gray-600 mb-4">@{mockProfile.username} • {mockProfile.city}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center text-yellow-500">
                  <span className="text-lg">⭐ {mockProfile.rating}</span>
                  <span className="text-gray-400 ml-1">({mockProfile.completedJobs} {locale === 'ht' ? 'travay fini' : 'jobs terminés'})</span>
                </div>
                <div className="text-gray-500">
                  {locale === 'ht' ? 'Depi' : 'Membre depuis'} {new Date(mockProfile.joinedDate).getFullYear()}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {locale === 'ht' ? mockProfile.bio.ht : mockProfile.bio.fr}
              </p>
            </div>
            
            <div className="flex flex-col space-y-3">
              <button className="btn-primary px-6 py-3">
                💬 {locale === 'ht' ? 'Kontakte' : 'Contacter'}
              </button>
              <button className="btn-secondary px-6 py-3">
                📄 {locale === 'ht' ? 'Wè CV' : 'Voir CV'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Badges & Stats */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'ht' ? 'Konpetans ak Badge yo' : 'Compétences & Badges'}
              </h2>
              <div className="space-y-3">
                {mockProfile.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-sm font-medium text-primary-700">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'ht' ? 'Estatistik yo' : 'Statistiques'}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{locale === 'ht' ? 'Travay fini' : 'Jobs terminés'}</span>
                  <span className="font-semibold">{mockProfile.completedJobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{locale === 'ht' ? 'Nòt mwayen' : 'Note moyenne'}</span>
                  <span className="font-semibold">⭐ {mockProfile.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{locale === 'ht' ? 'Tan reponn' : 'Temps réponse'}</span>
                  <span className="font-semibold">{locale === 'ht' ? '< 2h' : '< 2h'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="lg:col-span-2">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6">
                {locale === 'ht' ? 'Sèvis yo ki disponib' : 'Services disponibles'}
              </h2>
              
              <div className="space-y-4">
                {mockProfile.services.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {locale === 'ht' ? service.titleHt : service.titleFr}
                      </h3>
                      <div className="text-lg font-bold text-primary-600">
                        {service.currency} {service.price}
                        <span className="text-sm font-normal text-gray-500">
                          {service.priceType === 'hourly' ? '/h' : ''}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⏱️ {locale === 'ht' ? 'Disponib kounye a' : 'Disponible maintenant'}</span>
                        <span>📍 {mockProfile.city}</span>
                      </div>
                      
                      <button className="btn-primary text-sm px-4 py-2">
                        {locale === 'ht' ? 'Mande devis' : 'Demander devis'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
