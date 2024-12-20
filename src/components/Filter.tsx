import React, { useContext } from 'react';
import Accordion from '../shared-components/Accordion';
import Typography from '../shared-components/Typography';
import SearchInput from '../shared-components/SearchInput';
import { FilterContext } from '../App';

function Filter() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <nav
      role='filter'
      className='flex flex-col gap-4 p-3 bg-brand-grey-200 w-[276px]'>
      <Typography tag='h4' className='text-brand-grey-800'>
        Filter Results
      </Typography>
      <hr className='text-brand-grey-800' />
      <Accordion title='Hotel Name'>
        <div className='w-full p-2'>
          <SearchInput
            defaultValue={filter.hotelName}
            placeholder='Enter hotel name'
            onChange={() => {}}
            onSubmit={(value) =>
              setFilter({
                ...filter,
                hotelName: value
              })
            }
          />
        </div>
      </Accordion>
      <hr />
      <Accordion title='Quality Rating'>
        test
        {/* <StarRating /> */}
      </Accordion>
    </nav>
  );
}

export default Filter;
