import { ReactNode } from 'react';
import classnames from 'classnames';
import checkIcon from '../assets/check.svg';

interface CheckboxGroupProps {
  options: { value: string; label: string | ReactNode }[];
  selectedOptions: string[];
  onChange: (selectedOptions: string[]) => void;
}

function CheckboxGroup({
  options,
  selectedOptions,
  onChange
}: CheckboxGroupProps) {
  return (
    <div className='flex flex-col gap-5'>
      {options.map((option) => {
        const isChecked =
          option.value === ''
            ? selectedOptions.length === 0
            : selectedOptions.includes(option.value);

        const handleOnChange = (e) => {
          if (e.target.value === '') {
            onChange([]);
            return;
          }

          if (e.target.checked) {
            onChange([...selectedOptions, option.value]);
          } else {
            onChange(selectedOptions.filter((val) => val !== option.value));
          }
        };
        return (
          <div className='flex gap-3 items-center' key={option.value}>
            <div className='flex items-center justify-center relative'>
              <input
                type='checkbox'
                id={option.value}
                className={classnames(
                  {
                    'bg-brand-grey-600': isChecked,
                    'bg-white': !isChecked
                  },
                  'peer relative appearance-none w-6 h-6 rounded-sm border border-grey-800 cursor-pointer 1'
                )}
                name={option.value}
                value={option.value}
                checked={isChecked}
                onChange={handleOnChange}
              />
              {isChecked && (
                <button
                  type='button'
                  className='peer h-3 w-3 flex items-center justify-center absolute top-1.5 left-1.5'
                  role='presentation'
                  onClick={handleOnChange}>
                  <img src={checkIcon} alt='check icon' />
                </button>
              )}
            </div>
            <label htmlFor={option.value} className='cursor-pointer'>
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckboxGroup;
