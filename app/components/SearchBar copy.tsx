import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

interface ISearchBarProps {
    // seachVal: string, 
    // handleSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({}) => {

    const[seachVal, setSearchValue] = useState<string>("");
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        const val = e.target.value;
        setSearchValue(val);
    }

    const handleSearch = (e: FormEvent<HTMLFormElement> )=> {
        e.preventDefault();
        if(seachVal) {
            const q = `/?q=${seachVal}`;
            console.log({ q })
            router.push(`/products/search/${q}`);
        }
    }

  return (
      <div className="w-full pt-8 pb-14 bg-blue-100 border border-blue-900">
        <div className="mx-auto w-1/2 flex items-center flex-col justify-center">
          <h3 className='text-4xl text-black'>Search on Hot Buy </h3>
          <form className='flex mt-3 w-full' onSubmit={handleSearch}>
              <input type="text" id="serach" className='input-search bg-white text-black w-full' value={seachVal} onChange={handleChange} />
              <button type='submit' className='ml-2 btn'>Search</button>
          </form>
        </div>
      </div>
  );
};

export default SearchBar;
