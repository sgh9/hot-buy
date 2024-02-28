"use client";
import React, { ChangeEvent, useCallback } from 'react';
import Accordian from './Accordian';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryString } from '../hooks/useCreateQueryString';

const filterOptions = [
  {
    title: "price",
    options: [ 
      { id: 1,value:"$100 - $200", min: 100, max: 200},
      { id: 3,value: "$200 - $400", min: 200, max: 400}, 
      {id: 3,value: "$400 and above", min: 400, max: null}
    ],

  },
  {
    title: "rating",
    options: [ 
      {id: 1,value: "9 and Above", min: 9, max: null}, 
      {id: 1,value: "8 and Above", min: 8, max: null}, 
      {id: 1,value: "7 and Above", min: 7, max: null}, 
      {id: 1,value: "6 and Above", min: 6, max: null}
    ],
    
  },
  {
    title: "discount",
    options: [ 
      {id: 1,value: "10% off or more", min: 10, max: null}, 
      {id: 2,value: "16% off or more", min: 16, max: null}, 
      {id: 3,value: "50% off or more", min: 50, max: null}],
    
  },
  {
    title: "brand",
    options: [ 
      {id: 1, value:"Adidas", min: null, max: null}, 
      {id: 2,value: "Puma", min: null, max: null},
      {id: 3,value: "All", min: null, max: null}
  ],
    
  }
]

interface IFilterProductsProps {
}

const FilterProducts: React.FunctionComponent<IFilterProductsProps> = (props) => {

  const router = useRouter();
  const { createQueryString, searchParams } =  useCreateQueryString();


  const handleFilter = (e: ChangeEvent<HTMLInputElement>)=> {
    const val = e.target.value;
    const name = e.target.name;
    console.log({ router, searchParams,val  })
    const q = createQueryString(name, val, true);
    if(val) {
      router.push(`/products/search/?${q}`);
    }

  }

  const isChecked = (key: string, val: string): boolean=>  {
    let checked = false;
    if(searchParams && searchParams.has(key) && val === searchParams.get(key)) {
      checked = true;
    }

    return checked;
  }

  const getQueryValue = (option: any)=> {
    const { min, max, value, id } = option;
    let val = `${min}-${max}`
    if(!min && !max) {
      val = value
    }
    return val;
  }

  return (
    <div className='card p-4 w-full'>
      <div className="flex flex-col w-full">
        {filterOptions.map(acordian=> {
          const { title , options } = acordian;

          return ( 
            <div className="border-b-2 py-2 w-full" key={acordian.title}>
              <Accordian title={title} open={true}>
                <div className="p-4">
                {
                  options.map((option, i) => {
                    const val = getQueryValue(option)
                    return (
                    <div className="flex gap-2 " key={i}>
                      <input type="radio" className='p-3 cursor-pointer' 
                        checked={isChecked(title, val)} value={val} name={title} id={title+i} onChange={handleFilter} />
                      <label className='cursor-pointer' htmlFor={title+i}>{option.value}</label>
                  </div>
                  )})
                }
                </div>

              </Accordian>
            </div>
          )
        })}
      </div>
    </div>
  ) ;
};

export default FilterProducts;
