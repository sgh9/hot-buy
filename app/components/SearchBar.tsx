import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { useCreateQueryString } from '../hooks/useCreateQueryString';

interface ISearchBarProps {
    // seachVal: string, 
    // handleSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({}) => {

    const[seachVal, setSearchValue] = useState<string>("");
    const router = useRouter();
    const { createQueryString } =  useCreateQueryString();

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        const val = e.target.value;
        setSearchValue(val);
    }

    const handleSearch = (e: FormEvent<HTMLFormElement> )=> {
        e.preventDefault();
        if(seachVal) {
            const q = createQueryString("q", seachVal, true);
            console.log({ q })
            router.push(`/products/search/?${q}`);
        }
    }

  return (
      <div className="w-full">
          <form className='flex w-full' onSubmit={handleSearch}>
              <input type="text" id="serach" name='Search' className='input bg-white text-black w-full' value={seachVal} onChange={handleChange} />
              <button type='submit' className='ml-2 btn'>Search</button>
          </form>
      </div>
  );
};

export default SearchBar;
