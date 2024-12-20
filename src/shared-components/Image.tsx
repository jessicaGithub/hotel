import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  asBackgroundImage?: boolean;
  className?: string;
}

function Image({ src, alt, asBackgroundImage, className }: ImageProps) {
  return asBackgroundImage ? (
    <div
      style={{
        backgroundImage: `url(${src})`
      }}
      className={className}
    />
  ) : (
    <img src={src} alt={alt} className={className} role='presentation' />
  );
}

export default Image;
