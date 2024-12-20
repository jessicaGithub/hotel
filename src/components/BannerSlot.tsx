import React from 'react';

interface BannerSlotProps {
  targetUrl?: string;
  bannerDescription: string;
  mediaSrc: string;
  mediaAlt?: string;
  mediaType?: 'image' | 'video'; // later on we can handle multiple types of media
  width: number;
  height: number; // or we can also get banner size from a selection of standard banner sizes
}

const BannerSlot = ({
  targetUrl,
  bannerDescription,
  mediaSrc,
  mediaAlt,
  mediaType = 'image',
  width,
  height
}: BannerSlotProps) => {
  return (
    <a
      type='button'
      href={targetUrl}
      target='_blank'
      rel='noreferrer, noopener'
      aria-label={bannerDescription}
      className={`w-[${width}px] h-[${height}px] block`}>
      {mediaType === 'image' ? (
        <img
          src={mediaSrc}
          alt={mediaAlt}
          className='w-full h-full object-cover'
        />
      ) : (
        <>video not supported yet</>
      )}
    </a>
  );
};

export default BannerSlot;
