import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import PageHero from '@/app/components/PageHero';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'RevetementSol' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/prestations/revetement-sol`,
      languages: {
        'fr': '/fr/prestations/revetement-sol',
        'en': '/en/prestations/revetement-sol',
        'x-default': '/fr/prestations/revetement-sol',
      },
    },
  };
}

export default function RevetementSol() {
  const t = useTranslations('RevetementSol');

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          backgroundImage="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057"
        />

        {/* Services détaillés */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
              {t('servicesTitle')}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('service1.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('service1.description')}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service1.items.item1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service1.items.item2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service1.items.item3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service1.items.item4')}
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('service2.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('service2.description')}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service2.items.item1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service2.items.item2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service2.items.item3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service2.items.item4')}
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('service3.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('service3.description')}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service3.items.item1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service3.items.item2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service3.items.item3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service3.items.item4')}
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('service4.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('service4.description')}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service4.items.item1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service4.items.item2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service4.items.item3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {t('service4.items.item4')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 md:p-12 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {t('whyChooseUs.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('whyChooseUs.reason1.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('whyChooseUs.reason1.description')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('whyChooseUs.reason2.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('whyChooseUs.reason2.description')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('whyChooseUs.reason3.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('whyChooseUs.reason3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {t('serviceArea.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('serviceArea.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {t('serviceArea.location.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('serviceArea.location.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {t('serviceArea.coverage.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('serviceArea.coverage.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {t('serviceArea.cities.title')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Rennes', 'Mordelles', 'Saint-Grégoire', 'Betton', 'Cesson-Sévigné', 'Bruz', 'Pacé', 'Vezin-le-Coquet', 'L\'Hermitage', 'Noyal-Châtillon', 'Thorigné-Fouillard', 'Acigné'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
                {t('serviceArea.cities.more')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300"
              >
                {t('cta.button')}
              </Link>
              <a
                href="tel:+33666284458"
                className="inline-block px-10 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:!text-white transition-all duration-300"
              >
                {t('cta.phone')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}