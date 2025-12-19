import Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image> & {
  // Props personnalisées supplémentaires si besoin
};

/**
 * Composant d'image optimisé qui encapsule next/image avec des bonnes pratiques par défaut
 *
 * Avantages :
 * - Lazy loading automatique
 * - Conversion automatique en WebP/AVIF
 * - Responsive images (srcset)
 * - Optimisation de la taille
 * - Prévention du layout shift (CLS)
 */
export default function OptimizedImage({
  alt,
  loading = 'lazy',
  quality = 85,
  placeholder = 'blur',
  blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=',
  ...props
}: ImageProps) {
  // Si pas de placeholder spécifié et que c'est une image externe, ne pas utiliser blur
  const finalPlaceholder = props.src?.toString().startsWith('http') && placeholder === 'blur'
    ? 'empty'
    : placeholder;

  return (
    <Image
      alt={alt}
      loading={loading}
      quality={quality}
      placeholder={finalPlaceholder}
      blurDataURL={finalPlaceholder === 'blur' ? blurDataURL : undefined}
      {...props}
    />
  );
}