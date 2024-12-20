import React from 'react';

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  onSubmit: (value: string) => void;
  placeholder: string;
}

function SearchInput({
  onChange,
  defaultValue,
  onSubmit,
  placeholder
}: SearchInputProps) {
  const [value, setValue] = React.useState(defaultValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-0 rounded-sm border border-1 -border-offset-1 border-brand-grey-400'>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full rounded-sm p-2 border border-none h-[48px] text-brand-grey-800'
        onChange={handleOnChange}
        value={value}
      />
      <button
        className='w-[60px] bg-brand-grey-200 border-l-1 border-brand-grey-400 flex justify-center items-center text-brand-grey-600'
        type='submit'>
        Go
      </button>
    </form>
  );
}

export default SearchInput;
