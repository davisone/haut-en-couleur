import Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image> & {
  // Additional custom props if needed
};

/**
 * Optimized image component that wraps next/image with default best practices
 *
 * Advantages:
 * - Automatic lazy loading
 * - Automatic conversion to WebP/AVIF
 * - Responsive images (srcset)
 * - Size optimization
 * - Layout shift prevention (CLS)
 */
export default function OptimizedImage({
  alt,
  loading,
  quality = 85,
  placeholder = 'blur',
  blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=',
  priority,
  ...props
}: ImageProps) {
  // Ne pas forcer loading="lazy" quand priority est actif (LCP)
  const finalLoading = priority ? undefined : (loading ?? 'lazy');

  // Si pas de placeholder spécifié et image externe, pas de blur
  const finalPlaceholder = props.src?.toString().startsWith('http') && placeholder === 'blur'
    ? 'empty'
    : placeholder;

  return (
    <Image
      alt={alt}
      loading={finalLoading}
      quality={quality}
      placeholder={finalPlaceholder}
      blurDataURL={finalPlaceholder === 'blur' ? blurDataURL : undefined}
      priority={priority}
      {...props}
    />
  );
}