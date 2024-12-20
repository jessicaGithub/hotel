import React from 'react';

import arrow from '../assets/arrow.svg';
import classNames from 'classnames';
import Typography from './Typography';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  openedByDefault?: boolean;
}

function Accordion({
  title,
  children,
  openedByDefault = true
}: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(openedByDefault);

  return (
    <div className='flex flex-col gap-4'>
      <Typography tag='h5' className='text-brand-grey-600'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex justify-start items-center gap-2'>
          <span
            className={classNames(
              {
                'transform rotate-0': isOpen,
                'transform -rotate-90': !isOpen
              },
              'transition-transform duration-100 ease-linear'
            )}>
            <img src={arrow} alt='arrow-down' role='presentation' />
          </span>
          {title}
        </button>
      </Typography>
      {isOpen && children}
    </div>
  );
}

export default Accordion;
