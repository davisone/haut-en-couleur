'use client';

import {useTranslations} from 'next-intl';

export default function SeoContentQuiSommesNous() {
  const t = useTranslations('SeoContentQuiSommesNous');

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc 1 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block1Title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph1') }} />
            <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph2') }} />
            <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('block1Paragraph3') }} />
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('block2Title')}
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">{t('commitment1Title')}</strong>
                  <span className="text-sm">{t('commitment1Desc')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">{t('commitment2Title')}</strong>
                  <span className="text-sm">{t('commitment2Desc')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">{t('commitment3Title')}</strong>
                  <span className="text-sm">{t('commitment3Desc')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="block mb-1">{t('commitment4Title')}</strong>
                  <span className="text-sm">{t('commitment4Desc')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}