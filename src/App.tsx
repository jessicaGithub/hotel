import 'react';

import Typography from './shared-components/Typography';
import Header from './components/Header';
import BannerSlot from './components/BannerSlot';

import banner from './assets/banner.jpg';

import './App.css';

const App = () => {
  return (
    <main className='bg-brand min-h-screen'>
      <div className='container mx-auto p-0'>
        <Header />
        <div className='bg-white w-full flex justify-between p-3.5 xl:px-3.5 xl:py-5'>
          <div className='flex flex-col w-full justify-between align-items-start'>
            <Typography tag='h1' className='text-brand'>
              XXX Hotels Available in Melbourne
            </Typography>
            <div className='flex w-full justify-space-between align-items-start'>
              {/* 
              <Filter />
              <CardList /> */}
            </div>
          </div>
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
