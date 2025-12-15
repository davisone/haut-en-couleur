'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Rennes",
    rating: 5,
    comment: "Excellent travail ! L'équipe est très professionnelle et ponctuelle. Notre appartement a été entièrement repeint en 3 jours. Le résultat est impeccable et les finitions sont soignées.",
    service: "Peinture intérieure",
    avatar: "MD"
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Cesson-Sévigné",
    rating: 5,
    comment: "Prestation de qualité pour le ravalement de notre façade. Devis clair, respect des délais et prix compétitif. L'équipe a été à l'écoute de nos demandes.",
    service: "Ravalement de façade",
    avatar: "PM"
  },
  {
    id: 3,
    name: "Sophie Leroy",
    location: "Chantepie",
    rating: 5,
    comment: "Très satisfaite du service. Les conseils sur le choix des couleurs étaient précieux. Le résultat dépasse nos attentes. Notre cuisine est magnifique avec la finition laquée.",
    service: "Peinture intérieure",
    avatar: "SL"
  },
  {
    id: 4,
    name: "Thomas Bernard",
    location: "Bruz",
    rating: 5,
    comment: "Intervention rapide pour une urgence. Très réactif et tarif raisonnable. Le travail a été fait dans les règles de l'art malgré l'urgence.",
    service: "Dépannage urgent",
    avatar: "TB"
  },
  {
    id: 5,
    name: "Julie Moreau",
    location: "Saint-Jacques-de-la-Lande",
    rating: 5,
    comment: "Application d'enduit décoratif dans notre salon. Le rendu est superbe ! L'artisan a pris le temps de nous expliquer les différentes techniques.",
    service: "Enduits décoratifs",
    avatar: "JM"
  },
  {
    id: 6,
    name: "Alexandre Dubois",
    location: "Rennes",
    rating: 5,
    comment: "Peinture extérieure de notre maison. Excellente préparation des surfaces avant application. Le résultat est durable et esthétique.",
    service: "Peinture extérieure",
    avatar: "AD"
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function AnimatedCounter({
  end,
  suffix = '',
  duration = 2000
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Fonction d'easing pour une animation plus fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Gère les décimales
      const currentCount = easeOutQuart * end;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, end, duration]);

  // Formate le nombre selon qu'il soit entier ou décimal
  const formattedCount = count % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div ref={counterRef} className="text-3xl font-bold text-primary mb-1">
      {formattedCount}{suffix}
    </div>
  );
}

export default function SectionTemoignages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis de nos clients satisfaits
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <AnimatedCounter end={500} suffix="+" />
            <div className="text-sm text-gray-600">Clients satisfaits</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <AnimatedCounter end={95} suffix="%" />
            <div className="text-sm text-gray-600">Recommandent</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <AnimatedCounter end={4.9} suffix="/5" />
            <div className="text-sm text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <AnimatedCounter end={15} suffix=" ans" />
            <div className="text-sm text-gray-600">D&apos;expérience</div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl mb-6">
                {testimonials[currentIndex].avatar}
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonials[currentIndex].rating} />
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl">
                &quot;{testimonials[currentIndex].comment}&quot;
              </p>

              {/* Author Info */}
              <div className="mb-4">
                <h3 className="font-bold text-xl text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].location}
                </p>
              </div>

              {/* Service Badge */}
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {testimonials[currentIndex].service}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}