'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import { useTranslations, useLocale } from '../../../../components/LocaleProvider';

interface Company {
  id: string;
  name: string;
  nameHt?: string;
  nameFr?: string;
  description?: string;
  descriptionHt?: string;
  descriptionFr?: string;
  website?: string;
  logo?: string;
  city?: string;
  industry?: string;
  size?: string;
}

interface JobPosting {
  id: string;
  titleHt: string;
  titleFr?: string;
  descriptionHt: string;
  descriptionFr?: string;
  requirementsHt?: string;
  requirementsFr?: string;
  benefitsHt?: string;
  benefitsFr?: string;
  category: string;
  subcategory?: string;
  employmentType: string;
  experienceLevel: string;
  salaryMin?: number;
  salaryMax?: number;
  currency: string;
  city?: string;
  isRemote: boolean;
  isActive: boolean;
  applicationDeadline?: string;
  postedAt: string;
  company: Company;
}

export default function JobDetailPage() {
  const params = useParams();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`);
      const data = await response.json();
      setJob(data);
    } catch (error) {
      console.error('Error fetching job:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const formatSalary = (min: number | undefined, max: number | undefined, currency: string) => {
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
    return locale === 'ht' ? job.descriptionHt : (job.descriptionFr || job.descriptionHt);
  };

  const getJobRequirements = (job: JobPosting) => {
    return locale === 'ht' ? job.requirementsHt : (job.requirementsFr || job.requirementsHt);
  };

  const getJobBenefits = (job: JobPosting) => {
    return locale === 'ht' ? job.benefitsHt : (job.benefitsFr || job.benefitsHt);
  };

  const getCompanyDescription = (company: Company) => {
    return locale === 'ht' ? (company.descriptionHt || company.description) : (company.descriptionFr || company.description);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              {locale === 'ht' ? 'Ap chèche detay travay la...' : 'Chargement des détails de l\'emploi...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">❌</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'ht' ? 'Travay la pa jwenn' : 'Emploi introuvable'}
            </h1>
            <p className="text-gray-600 mb-8">
              {locale === 'ht' 
                ? 'Travay la ka efase oswa li pa egziste'
                : 'Cet emploi a peut-être été supprimé ou n\'existe pas'
              }
            </p>
            <a href={`/${locale}/jobs`} className="btn-primary">
              {locale === 'ht' ? 'Retounen nan travay yo' : 'Retour aux emplois'}
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1 mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {getJobTitle(job)}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="text-xl font-semibold">{getCompanyName(job.company)}</span>
                {job.city && (
                  <>
                    <span className="mx-3">•</span>
                    <span>{job.city}</span>
                  </>
                )}
                {job.isRemote && (
                  <>
                    <span className="mx-3">•</span>
                    <span className="text-green-600 font-medium">
                      {locale === 'ht' ? 'Aleka' : 'Télétravail'}
                    </span>
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-primary-100 text-primary-800 font-medium rounded-full">
                  {locale === 'ht' ? employmentTypes[job.employmentType as keyof typeof employmentTypes]?.ht : employmentTypes[job.employmentType as keyof typeof employmentTypes]?.fr}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 font-medium rounded-full">
                  {locale === 'ht' ? experienceLevels[job.experienceLevel as keyof typeof experienceLevels]?.ht : experienceLevels[job.experienceLevel as keyof typeof experienceLevels]?.fr}
                </span>
                {formatSalary(job.salaryMin, job.salaryMax, job.currency) && (
                  <span className="px-4 py-2 bg-green-100 text-green-800 font-medium rounded-full">
                    {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">
                {locale === 'ht' ? 'Pibliye nan' : 'Publié le'} {new Date(job.postedAt).toLocaleDateString(locale === 'ht' ? 'fr-HT' : 'fr-FR')}
                {job.applicationDeadline && (
                  <>
                    {' • '}
                    {locale === 'ht' ? 'Dènye dat pou aplike:' : 'Date limite:'} {new Date(job.applicationDeadline).toLocaleDateString(locale === 'ht' ? 'fr-HT' : 'fr-FR')}
                  </>
                )}
              </p>
            </div>
            
            <div className="lg:ml-8 flex flex-col gap-3">
              <button 
                onClick={() => setShowApplyModal(true)}
                className="btn-primary px-8 py-3 text-lg"
              >
                {locale === 'ht' ? 'Aplike kounye a' : 'Postuler maintenant'}
              </button>
              <button className="btn-secondary">
                {locale === 'ht' ? 'Sove travay la' : 'Sauvegarder l\'emploi'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Deskripsyon Travay' : 'Description du Poste'}
              </h2>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {getJobDescription(job)}
                </div>
              </div>
            </div>

            {/* Requirements */}
            {getJobRequirements(job) && (
              <div className="card p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'ht' ? 'Kondisyon yo' : 'Exigences'}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {getJobRequirements(job)}
                  </div>
                </div>
              </div>
            )}

            {/* Benefits */}
            {getJobBenefits(job) && (
              <div className="card p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'ht' ? 'Avantaj yo' : 'Avantages'}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {getJobBenefits(job)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Sou Konpani an' : 'À propos de l\'entreprise'}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{getCompanyName(job.company)}</h4>
                  {getCompanyDescription(job.company) && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {getCompanyDescription(job.company)}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 text-sm">
                  {job.company.industry && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{locale === 'ht' ? 'Endistri:' : 'Industrie:'}</span>
                      <span className="text-gray-900">{job.company.industry}</span>
                    </div>
                  )}
                  {job.company.size && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{locale === 'ht' ? 'Gwosè:' : 'Taille:'}</span>
                      <span className="text-gray-900 capitalize">{job.company.size}</span>
                    </div>
                  )}
                  {job.company.city && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{locale === 'ht' ? 'Kote:' : 'Localisation:'}</span>
                      <span className="text-gray-900">{job.company.city}</span>
                    </div>
                  )}
                </div>

                {job.company.website && (
                  <a 
                    href={job.company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {locale === 'ht' ? 'Wè sit entènet' : 'Voir le site web'}
                  </a>
                )}
              </div>
            </div>

            {/* Quick Apply */}
            <div className="card p-6 border-2 border-primary-200 bg-primary-50">
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                {locale === 'ht' ? 'Aplike rapidman' : 'Candidature rapide'}
              </h3>
              <p className="text-primary-800 mb-4 text-sm">
                {locale === 'ht' 
                  ? 'Aplike ak profil ou deja gen an ak yon sèl klik'
                  : 'Postulez avec votre profil existant en un seul clic'
                }
              </p>
              <button 
                onClick={() => setShowApplyModal(true)}
                className="w-full btn-primary"
              >
                {locale === 'ht' ? 'Aplike kounye a' : 'Postuler maintenant'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ht' ? 'Aplike pou travay la' : 'Postuler pour cet emploi'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'ht' 
                  ? 'Sistèm aplike pou travay yo ap vini alavni. Kounye a, ou ka kontakte konpani an dirèkteman.'
                  : 'Le système de candidature en ligne arrivera bientôt. Pour l\'instant, vous pouvez contacter l\'entreprise directement.'
                }
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 btn-secondary"
                >
                  {locale === 'ht' ? 'Fèmen' : 'Fermer'}
                </button>
                <button className="flex-1 btn-primary">
                  {locale === 'ht' ? 'Kontakte' : 'Contacter'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}