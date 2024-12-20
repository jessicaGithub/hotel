import 'react';

import Image from '../shared-components/Image';

import { Hotel } from '../model/Hotel';
import Typography from '../shared-components/Typography';
import Ratings from '../shared-components/Ratings';

import arrow from '../assets/arrow-white.svg';

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className='flex flex-col md:flex-row gap-0 p-1 border border-brand-grey-200 rounded-sm shadow shadow-brand-grey-400 w-full'>
      <Image
        src={hotel.image_url}
        alt={hotel.hotel_name}
        asBackgroundImage
        className='flex-none aspect-[4/3] w-full h-[122px] md:max-w-[294px] md:h-full xl:aspect-video xl:max-w-[342px]'
      />
      <div className='flex justify-end items-stretch w-full'>
        <div className='flex flex-col gap-0 p-2 w-full md:p-4 md:gap-2'>
          <Typography tag='h4'>{hotel.hotel_name}</Typography>
          <Ratings defaultValue={hotel.hotel_rating} />
          <Typography
            tag='p'
            className='hidden md:inline md:mt-2 text-brand-grey-600'>
            <b>Room type</b>: {hotel.room_type.join(', ')}
          </Typography>
        </div>
        <div className='flex flex-none w-[105px] bg-brand-grey-200 justify-end items-center px-3 md:px-4 md:py-5 md:items-start md:w-[155px] lg:w-[158px]'>
          <Typography tag='h4' style='h1' className='text-brand-grey-800'>
            ${hotel.price_per_night}
          </Typography>
        </div>
        <button className='flex flex-none md:hidden bg-brand-green w-[34px] justify-center items-center'>
          <Image src={arrow} alt='arrow' className='w-3 h-3 -rotate-90' />
        </button>
      </div>
    </article>
  );
}

export default HotelCard;
