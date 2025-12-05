'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category?: string;
}

interface ImageGalleryLightboxProps {
  images: GalleryImage[];
}

export default function ImageGalleryLightbox({ images }: ImageGalleryLightboxProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
      }
    };

    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex, images.length]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${image.url}')` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {image.category && (
              <div className="absolute bottom-2 left-2 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {image.category}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex].url}
              alt={images[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">
              {images[selectedImageIndex].title}
            </h3>
            <p className="text-sm text-gray-300">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}