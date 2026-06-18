type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProductImage({ src, alt, className = '', priority = false }: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={(event) => {
        const img = event.currentTarget;
        img.onerror = null;
        img.src = '/images/veraia-brand-board.jpg';
      }}
    />
  );
}
