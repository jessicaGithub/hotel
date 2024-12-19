import React from 'react';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <main className='bg-brand min-h-screen'>
      <div className='container mx-auto p-0'>
        <Header />
        <div className='bg-white w-full flex p-3.5 xl:px-3.5 xl:py-5'>test</div>
      </div>
    </main>
  );
};

export default App;
