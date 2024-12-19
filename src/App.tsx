import 'react';
import Header from './components/Header';

import './App.css';
import Typography from './shared-components/Typography';

const App = () => {
  return (
    <main className='bg-brand min-h-screen'>
      <div className='container mx-auto p-0'>
        <Header />
        <div className='bg-white w-full flex p-3.5 xl:px-3.5 xl:py-5'>
          <div className='flex w-full justify-space-between align-items-start'>
            <Typography tag='h1' className='text-brand'>
              XXX Hotels Available in Melbourne
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
