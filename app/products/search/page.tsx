"use client";
import FilterProducts from '@/app/components/FilterProducts';
import React, { useEffect, useState } from 'react';
import Products from '@/app/components/Products';
import { IProductCardProps } from '@/app/components/ProductCard';
import Loader from '@/app/components/Loader';
import { useSearchParams } from 'next/navigation';

interface ISearchProps {
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [products, setProducts] = useState([] as IProductCardProps[]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(()=> {
    getAllProducts();
    console.log({ searchParams: searchParams.toString()})
  },[searchParams]);


  const getAllProducts = async()=> {
    try {
      const res = await fetch("/api/products/?"+searchParams.toString());
      const data = await res.json();
      const { msg , products } =  data;
      console.log({ products })
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log({ error })
    }
  }

  if(loading) return <Loader/>

  return (
        <section className="flex gap-5">
        <div className="md:w-1/4 w-full">
          <FilterProducts />
        </div>
        <div className="md:w-3/4 w-full flex flex-col gap-5">
          <Products products={products}/>
        </div>
        </section>
  ) ;
};

export default Search;
