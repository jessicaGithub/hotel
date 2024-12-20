import { createContext, useState } from 'react';

import Typography from './shared-components/Typography';
import Header from './components/Header';
import BannerSlot from './components/BannerSlot';
import Filter from './components/Filter';

import banner from './assets/banner.jpg';

import './App.css';

export interface HotelFilter {
  hotelName: string;
  qualityRating: number[];
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
  const [filter, setFilter] = useState<HotelFilter>({
    hotelName: '',
    qualityRating: []
  });
  const contextValue = { filter, setFilter };

  return (
    <main className='bg-brand min-h-screen'>
      <div className='container mx-auto p-0'>
        <Header />
        <div className='bg-white w-full flex justify-between p-3.5 xl:px-3.5 xl:py-5 xl:gap-5'>
          <FilterContext.Provider value={contextValue}>
            <div className='flex flex-col w-full justify-start align-items-start gap-5'>
              <Typography tag='h1' className='text-brand'>
                XXX Hotels Available in Melbourne
              </Typography>
              <div className='flex w-full justify-space-between align-items-start'>
                <Filter />
                {/* 
              <CardList /> */}
              </div>
            </div>
          </FilterContext.Provider>
          <div className='flex-none w-auto justify-space-between align-items-start'>
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
