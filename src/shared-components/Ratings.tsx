import React from 'react';

import fullDigitIcon from '../assets/diamond-full.svg';
import halfDigitIcon from '../assets/diamond-half.svg';
interface RatingsProps {
  defaultValue: number;
  maxRating?: number;
}

function Ratings({ defaultValue, maxRating = 5 }: RatingsProps) {
  const ratings = Array.from({ length: maxRating }, (_, i) => i + 1);
  const ratingClass = 'w-4 h-4';

  return (
    <div className='flex gap-0'>
      {ratings.map((rating) => {
        if (rating <= defaultValue) {
          return (
            <img
              key={`rating` + rating}
              src={fullDigitIcon}
              alt='full rating'
              role='presentation'
              className={ratingClass}
            />
          );
        } else if (rating - 1 === defaultValue - 0.5) {
          return (
            <img
              key={`rating` + rating}
              src={halfDigitIcon}
              alt='half rating'
              role='presentation'
              className={ratingClass}
            />
          );
        } else {
          return '';
        }
      })}
    </div>
  );
}

export default Ratings;
