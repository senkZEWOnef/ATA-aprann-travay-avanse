'use client';
import { useState, useEffect } from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import { useTranslations, useLocale } from '../../../components/LocaleProvider';

interface Company {
  id: string;
  name: string;
  nameHt?: string;
  nameFr?: string;
  logo?: string;
  city?: string;
}

interface JobPosting {
  id: string;
  titleHt: string;
  titleFr?: string;
  descriptionHt: string;
  descriptionFr?: string;
  category: string;
  employmentType: string;
  experienceLevel: string;
  salaryMin?: number;
  salaryMax?: number;
  currency: string;
  city?: string;
  isRemote: boolean;
  postedAt: string;
  company: Company;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { key: 'all', labelHt: 'Tout', labelFr: 'Tous' },
    { key: 'programming', labelHt: 'Pwogramasyon', labelFr: 'Programmation' },
    { key: 'interpreting', labelHt: 'Entèpretasyon', labelFr: 'Interprétation' },
    { key: 'marketing', labelHt: 'Maketing', labelFr: 'Marketing' },
    { key: 'administration', labelHt: 'Administrasyon', labelFr: 'Administration' },
  ];

  const employmentTypes = {
    'full-time': { ht: 'Tan konplè', fr: 'Temps plein' },
    'part-time': { ht: 'Mwatye tan', fr: 'Temps partiel' },
    'contract': { ht: 'Kontra', fr: 'Contrat' },
    'freelance': { ht: 'Travay lib', fr: 'Freelance' },
    'internship': { ht: 'Estaj', fr: 'Stage' },
  };

  const experienceLevels = {
    'entry': { ht: 'Kòmanse', fr: 'Débutant' },
    'mid': { ht: 'Entèmedyè', fr: 'Intermédiaire' },
    'senior': { ht: 'Ekspè', fr: 'Senior' },
    'executive': { ht: 'Egzekitif', fr: 'Exécutif' },
  };

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      job.titleHt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.titleFr && job.titleFr.toLowerCase().includes(searchTerm.toLowerCase())) ||
      job.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const formatSalary = (min?: number, max?: number, currency: string) => {
    if (!min && !max) return null;
    const formatter = new Intl.NumberFormat('en-US');
    if (min && max) {
      return `${formatter.format(min)} - ${formatter.format(max)} ${currency}`;
    }
    return `${formatter.format(min || max || 0)} ${currency}`;
  };

  const getJobTitle = (job: JobPosting) => {
    return locale === 'ht' ? job.titleHt : (job.titleFr || job.titleHt);
  };

  const getCompanyName = (company: Company) => {
    return locale === 'ht' ? (company.nameHt || company.name) : (company.nameFr || company.name);
  };

  const getJobDescription = (job: JobPosting) => {
    const desc = locale === 'ht' ? job.descriptionHt : (job.descriptionFr || job.descriptionHt);
    return desc.length > 150 ? desc.substring(0, 150) + '...' : desc;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              {locale === 'ht' ? 'Ap chèche travay yo...' : 'Chargement des emplois...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {locale === 'ht' ? 'Jwenn Travay ou' : 'Trouvez votre Emploi'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {locale === 'ht' 
              ? 'Dekouvri opòtinite travay ki nan men an nan konpani yo ki nan Ayiti ak lèt bò'
              : 'Découvrez les opportunités d\'emploi disponibles dans les entreprises en Haïti et à l\'étranger'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder={locale === 'ht' ? 'Chèche travay, konpani...' : 'Rechercher emploi, entreprise...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                    selectedCategory === category.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {locale === 'ht' ? category.labelHt : category.labelFr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {locale === 'ht' 
              ? `${filteredJobs.length} travay yo jwenn`
              : `${filteredJobs.length} emplois trouvés`
            }
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        <a href={`/${locale}/jobs/${job.id}`} className="hover:text-primary-600 transition-colors">
                          {getJobTitle(job)}
                        </a>
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <span className="font-medium">{getCompanyName(job.company)}</span>
                        {job.city && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{job.city}</span>
                          </>
                        )}
                        {job.isRemote && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="text-green-600 font-medium">
                              {locale === 'ht' ? 'Aleka' : 'Télétravail'}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                          {locale === 'ht' ? employmentTypes[job.employmentType as keyof typeof employmentTypes]?.ht : employmentTypes[job.employmentType as keyof typeof employmentTypes]?.fr}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {locale === 'ht' ? experienceLevels[job.experienceLevel as keyof typeof experienceLevels]?.ht : experienceLevels[job.experienceLevel as keyof typeof experienceLevels]?.fr}
                        </span>
                        {formatSalary(job.salaryMin, job.salaryMax, job.currency) && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">
                        {getJobDescription(job)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {locale === 'ht' ? 'Pibliye nan' : 'Publié le'} {new Date(job.postedAt).toLocaleDateString(locale === 'ht' ? 'fr-HT' : 'fr-FR')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:ml-6 flex flex-col gap-2">
                  <button className="btn-primary">
                    {locale === 'ht' ? 'Aplike' : 'Postuler'}
                  </button>
                  <a href={`/${locale}/jobs/${job.id}`} className="btn-secondary">
                    {locale === 'ht' ? 'Wè detay' : 'Voir détails'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'ht' ? 'Pa gen travay ki jwenn' : 'Aucun emploi trouvé'}
            </h3>
            <p className="text-gray-600">
              {locale === 'ht' 
                ? 'Eseye chanje filtre ou yo oswa rechèche ak mo kle diferan'
                : 'Essayez de modifier vos filtres ou de rechercher avec des mots-clés différents'
              }
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}