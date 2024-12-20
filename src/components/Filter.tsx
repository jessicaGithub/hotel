import { useContext } from 'react';

import { FilterContext } from '../App';

import Accordion from '../shared-components/Accordion';
import Typography from '../shared-components/Typography';
import SearchInput from '../shared-components/SearchInput';
import Ratings from '../shared-components/Ratings';
import CheckboxGroup from '../shared-components/CheckboxGroup';

function Filter() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <nav
      role='filter'
      className='flex flex-none flex-col gap-4 p-3 pb-6 bg-brand-grey-200 w-[276px]'>
      <Typography tag='h4' className='text-brand-grey-800'>
        Filter Results
      </Typography>
      <hr className='text-brand-grey-800' />
      <Accordion title='Hotel Name'>
        <div className='w-full p-2 pl-4'>
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
        <div className='w-full p-2 pl-4'>
          <CheckboxGroup
            options={[
              {
                value: '',
                label: 'All'
              },
              {
                value: '5',
                label: <Ratings defaultValue={5} />
              },
              {
                value: '4',
                label: <Ratings defaultValue={4} />
              },
              {
                value: '3',
                label: <Ratings defaultValue={3} />
              },
              {
                value: '2',
                label: <Ratings defaultValue={2} />
              }
            ]}
            selectedOptions={filter.qualityRating}
            onChange={(newVal) =>
              setFilter({
                ...filter,
                qualityRating: newVal
              })
            }
          />
        </div>
      </Accordion>
    </nav>
  );
}

export default Filter;
