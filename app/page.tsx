"use client";
import FeaturedProducts from "./components/FeaturedProducts";
import FilterProducts from "./components/FilterProducts";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { IProductCardProps } from "./components/ProductCard";
import Loader from "./components/Loader";

export default function Home() {
  const [products, setProducts] = useState([] as IProductCardProps[]);
  const[loading, setLoading] = useState(true);


  useEffect(()=> {
    getAllProducts()
  },[]);


  const getAllProducts = async()=> {
    try {
      const res = await fetch("api/products");
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
    
    <div className="container flex flex-col gap-4">
      {/* <FeaturedProducts /> */}
      <section className="flex gap-5">
        <div className="md:w-1/4 w-full">
          <FilterProducts />
        </div>
        <div className="md:w-3/4 w-full flex flex-col gap-5">
          <Products products={products} />
        </div>
        </section>
      
    </div>
  );
}
