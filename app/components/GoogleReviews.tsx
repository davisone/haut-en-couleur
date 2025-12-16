'use client';

import { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  placeId?: string; // Votre Place ID Google
  apiKey?: string;  // Votre clé API Google Places
}

export default function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Si pas de Place ID ou API Key, utiliser des avis de démonstration
    if (!placeId || !apiKey) {
      // Avis de démonstration (à remplacer par les vrais avis Google)
      const demoReviews: Review[] = [
        {
          author_name: "Marie Dupont",
          rating: 5,
          text: "Excellent travail ! L'équipe est très professionnelle et soignée. Notre salon a été transformé et le résultat dépasse nos attentes. Je recommande vivement !",
          time: Date.now(),
          profile_photo_url: "",
          relative_time_description: "il y a 2 semaines"
        },
        {
          author_name: "Jean Martin",
          rating: 5,
          text: "Très satisfait du ravalement de façade. Travail minutieux, respect des délais et tarifs compétitifs. Une équipe à l'écoute et de bon conseil.",
          time: Date.now(),
          profile_photo_url: "",
          relative_time_description: "il y a 1 mois"
        },
        {
          author_name: "Sophie Bernard",
          rating: 5,
          text: "Prestation de qualité pour la peinture de notre maison. Finitions impeccables et chantier propre. Nous sommes ravis du résultat !",
          time: Date.now(),
          profile_photo_url: "",
          relative_time_description: "il y a 3 semaines"
        },
        {
          author_name: "Pierre Lefebvre",
          rating: 4,
          text: "Bon travail dans l'ensemble. L'équipe est ponctuelle et efficace. Quelques petits ajustements ont été nécessaires mais le résultat final est satisfaisant.",
          time: Date.now(),
          profile_photo_url: "",
          relative_time_description: "il y a 1 semaine"
        }
      ];

      setReviews(demoReviews);
      setAverageRating(4.8);
      setTotalReviews(127);
      setLoading(false);
      return;
    }

    // Récupération réelle des avis Google (nécessite un backend pour sécuriser la clé API)
    const fetchGoogleReviews = async () => {
      try {
        // IMPORTANT : Ne jamais exposer votre clé API côté client en production
        // Créez plutôt une API route Next.js pour faire l'appel depuis le serveur
        const response = await fetch(
          `/api/google-reviews?placeId=${placeId}`
        );

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des avis');
        }

        const data = await response.json();
        setReviews(data.reviews || []);
        setAverageRating(data.rating || 0);
        setTotalReviews(data.user_ratings_total || 0);
        setLoading(false);
      } catch (err) {
        setError('Impossible de charger les avis Google');
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, [placeId, apiKey]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Chargement des avis...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header avec note globale */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-3xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600">
            Basé sur <strong>{totalReviews} avis</strong> Google
          </p>

          {/* Bouton pour laisser un avis */}
          <a
            href={`https://search.google.com/local/writereview?placeid=${placeId || 'VOTRE_PLACE_ID'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all duration-300"
          >
            Laisser un avis Google
          </a>
        </div>

        {/* Grille des avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 4).map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* En-tête de l'avis */}
              <div className="flex items-start gap-4 mb-4">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{review.author_name}</h3>
                  <div className="flex gap-1 mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                </div>
              </div>

              {/* Texte de l'avis */}
              <p className="text-gray-600 text-sm line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Google */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Avis récupérés depuis{' '}
            <span className="font-semibold text-gray-700">Google</span>
          </p>
        </div>
      </div>
    </section>
  );
}