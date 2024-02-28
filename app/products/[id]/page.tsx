
"use client";
import Loader from '@/app/components/Loader';
import { IProductCardProps } from '@/app/components/ProductCard';
import ProductDetails from '@/app/components/ProductDetails';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface ISingleProductDetailsProps {
  params: any
}

// export const getProduct = async(id: string | string[])=> {
//   const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
//   const data = await res.json();
//   const { product } = data;

//   return {
//     product: product
//   }
// }

const SingleProductDetails: React.FunctionComponent<ISingleProductDetailsProps> = ({ params }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({} as IProductCardProps);
    const [loading, setLoading] = useState(true )

    useEffect(()=> {
      getProduct(id);
    },[]);

    const getProduct = async(id: string | string[])=> {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
        const data = await res.json();
        const { product } = data;
        setProduct(product) ;
        setLoading(false);
      } catch (error) {
        console.log({ error })
      }

    }

    if(loading) return <Loader/>;

    return (
    <section className='flex'>
      <ProductDetails product={product}/>
    </section>
  ) ;
};

export default SingleProductDetails;
