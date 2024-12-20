import React from 'react';

import fullDigitIcon from '../assets/diamond-full.svg';
import halfDigitIcon from '../assets/diamond-half.svg';
interface RatingsProps {
  defaultValue: string | number;
  maxRating?: number;
}

function Ratings({ defaultValue, maxRating = 5 }: RatingsProps) {
  const ratingVal =
    typeof defaultValue === 'string' ? Number(defaultValue) : defaultValue;
  const ratings = Array.from({ length: maxRating }, (_, i) => i + 1);
  const ratingClass = 'w-4 h-4';

  return (
    <div className='flex gap-0'>
      {ratings.map((rating) => {
        if (rating <= ratingVal) {
          return (
            <img
              key={`rating` + ratingVal.toString() + Math.random()}
              src={fullDigitIcon}
              alt='full rating'
              role='presentation'
              className={ratingClass}
            />
          );
        } else if (rating - 1 === ratingVal - 0.5) {
          return (
            <img
              key={`rating` + ratingVal.toString() + Math.random()}
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
