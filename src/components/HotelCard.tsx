import React from 'react';

import Image from '../shared-components/Image';

import { Hotel } from '../model/Hotel';
import Typography from '../shared-components/Typography';
import Ratings from '../shared-components/Ratings';

import arrow from '../assets/arrow.svg';

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article>
      <Image src={hotel.image_url} alt={hotel.hotel_name} />
      <div>
        <div>
          <Typography tag='h4'>{hotel.hotel_name}</Typography>
          <Ratings defaultValue={hotel.hotel_rating} />
          <Typography tag='p'>
            <b>Room type</b>: {hotel.room_type.join(', ')}
          </Typography>
        </div>
        <div>${hotel.price_per_night}</div>
        <button>
          <Image src={arrow} alt='arrow' />
        </button>
      </div>
    </article>
  );
}

export default HotelCard;
