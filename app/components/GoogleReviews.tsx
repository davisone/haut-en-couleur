'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  placeId?: string;
  apiKey?: string;
}

export default function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  const t = useTranslations('GoogleReviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!placeId) {
      setLoading(false);
      return;
    }

    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(`/api/google-reviews?placeId=${placeId}`);

        if (!response.ok) {
          throw new Error(t('errorFetching'));
        }

        const data = await response.json();
        setReviews(data.reviews || []);
        setAverageRating(data.rating || 0);
        setTotalReviews(data.user_ratings_total || 0);
        setLoading(false);
      } catch (err) {
        console.error('Reviews error:', err);
        setError(t('errorLoading'));
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, [placeId, apiKey, t]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">{t('loading')}</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header avec note globale */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-3xl font-bold text-gray-800 dark:text-white">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {t('basedOn', { count: totalReviews })}
          </p>

          {/* Bouton pour laisser un avis */}
          <a
            href={`https://search.google.com/local/writereview?placeid=${placeId || 'VOTRE_PLACE_ID'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300"
          >
            {t('leaveReview')}
          </a>
        </div>

        {/* Grille d'avis responsive */}
        {reviews.length > 0 && (
          <div className={`grid gap-6 ${
            reviews.length === 1
              ? 'max-w-2xl mx-auto'
              : reviews.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : reviews.length === 3
              ? 'md:grid-cols-2 lg:grid-cols-3'
              : 'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* En-tête de l'avis */}
                <div className="flex items-start gap-4 mb-4">
                  {review.profile_photo_url ? (
                    <picture>
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full flex-shrink-0"
                        width={48}
                        height={48}
                        loading="lazy"
                      />
                    </picture>
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {review.author_name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 dark:text-white truncate">
                      {review.author_name}
                    </h3>
                    <div className="flex gap-1 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>

                {/* Texte de l'avis */}
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Logo Google */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('fetchedFrom')}{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-200">Google</span>
          </p>
        </div>
      </div>
    </section>
  );
}