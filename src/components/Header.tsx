import 'react';
import Image from '../shared-components/Image';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='flex justify-center items-center px-1 py-2 md:justify-start md:p-3.5'>
      <a href='/' aria-label='Go to homepage'>
        <Image src={logo} alt='logo' className='h-[55px] md:h-[74px] w-auto' />
      </a>
    </header>
  );
};

export default Header;
