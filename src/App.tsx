import { createContext, useEffect, useState } from 'react';

import Typography from './shared-components/Typography';
import Header from './components/Header';
import BannerSlot from './components/BannerSlot';
import Filter from './components/Filter';
import HotelCard from './components/HotelCard';

import banner from './assets/banner.jpg';

import { hotelList } from './helper/mockDataGenerator';
import { Hotel } from './model/Hotel';

import './App.css';

export interface HotelFilter {
  hotelName: string;
  qualityRating: string[];
}

export const FilterContext = createContext<{
  filter: HotelFilter;
  setFilter: React.Dispatch<React.SetStateAction<HotelFilter>>;
}>({
  filter: {
    hotelName: '',
    qualityRating: []
  },
  setFilter: () => {}
});

const App = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filter, setFilter] = useState<HotelFilter>({
    hotelName: '',
    qualityRating: []
  });
  const contextValue = { filter, setFilter };

  const sortByPricePerNight = (a: Hotel, b: Hotel) => {
    return a.price_per_night - b.price_per_night;
  };

  useEffect(() => {
    if (hotelList.length) {
      if (filter.hotelName || filter.qualityRating.length) {
        const filteredHotels = hotelList
          .filter((hotel) => {
            const isHotelNameMatched =
              filter.hotelName.length > 0
                ? hotel.hotel_name
                    .toLowerCase()
                    .includes(filter.hotelName.toLowerCase())
                : true;

            const wholeRatingValue = hotel.hotel_rating.split('.');
            const isQualityMatched =
              filter.qualityRating.length > 0
                ? filter.qualityRating.includes(wholeRatingValue[0]) // Match the number and number + 0.5
                : true;

            return isHotelNameMatched && isQualityMatched;
          })
          .sort(sortByPricePerNight);

        setHotels(filteredHotels);
      } else {
        setHotels(hotelList.sort(sortByPricePerNight));
      }
    }
  }, [hotelList, filter]);

  return (
    <main className='bg-brand min-h-screen'>
      <div className='container mx-auto p-0 pb-10'>
        <Header />
        <div className='bg-white w-full flex justify-between p-3.5 xl:px-3.5 xl:py-5 xl:gap-5'>
          <FilterContext.Provider value={contextValue}>
            <div className='flex flex-col w-full justify-start align-items-start gap-3 xl:gap-5'>
              <Typography tag='h1' className='text-brand'>
                {hotels.length} Hotels Available in Melbourne
              </Typography>
              <div className='flex w-full justify-between items-start gap-3 xl:gap-5'>
                <div className='hidden lg:flex'>
                  <Filter />
                </div>
                <div className='flex flex-col gap-3 xl:gap-5 w-full'>
                  {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              </div>
            </div>
          </FilterContext.Provider>
          <div className='flex-none w-auto justify-space-between align-items-start hidden xl:block'>
            <BannerSlot
              targetUrl={'https://www.scandinavia.com/'}
              bannerDescription={'html5 banner for scandinavia tour'}
              mediaSrc={banner}
              width={160}
              height={600}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
