'use client';

import {useTranslations} from 'next-intl';

export default function SocialMedia() {
  const t = useTranslations('SocialMedia');

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Facebook Feed */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-top-cameleon-cyan">
          {/*
            IMPORTANT: To configure the Facebook iframe:
            1. Go to https://developers.facebook.com/docs/plugins/page-plugin
            2. Enter your Facebook page URL (e.g., https://www.facebook.com/YourBusinessPage)
            3. Configure:
               - Show posts: YES
               - Height: 600px
               - Adaptive width: YES
               - Hide cover photo: NO
            4. Copy the generated code and replace the iframe below
          */}

          <div className="flex justify-center p-6">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Bouton vers Facebook */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 text-center border-t dark:border-gray-700">
            <a
              href="https://www.facebook.com/VotrePageEntreprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1877F2] text-white font-semibold rounded-full hover:bg-[#0C63D4] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t('viewFacebookPage')}
            </a>
          </div>
        </div>

        {/* Note de configuration */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>{t('configNote')}</strong> {t('configInstructions')}
          </p>
        </div>
      </div>
    </section>
  );
}