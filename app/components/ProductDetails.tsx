import React from 'react';
import { IProductCardProps } from './ProductCard';
import Image from 'next/image';
import { getDiscountPercentage } from '../utils/util';
import { FaStar } from 'react-icons/fa';
import { FaThumbsUp } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';

interface IProductDetailsProps {
  product: IProductCardProps
}

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = ({ product}) => {
  const { state, dispatch }= useAppContext();

  const handleAddToCart = ()=> {
    dispatch({
      type: "ADD",
      payload: product
    })
  }

  const isAddToCartDisabled = ()=> {
    const { cartProducts } = state;
    const id = product?._id || "" ;
    if(cartProducts.length && cartProducts.find(product => product._id === id)) {
      return true
    };
    return false;
  }

  console.log({ state })
  return (
    <div className='flex w-full gap-8'>
      <div className="flex flex-col w-1/3 ">
          <div className="flex w-6/7 mx-auto">
            <Image src={product.src} alt={product.title} height={0} sizes='100vw' width={0} className='w-full h-auto'/>
          </div>
          <div className="flex gap-4 my-4">
              <button className='w-1/2 btn-outlined' disabled={isAddToCartDisabled()} onClick={handleAddToCart}>Add to cart</button>
              <button className='w-1/2 btn'>Buy now</button>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-4">
        <div className="card w-full ">
          <div className="w-full flex flex-col text-left gap-3 justify-start ">
            <h3 className='font-bold text-2xl'>{product.title}</h3>
            <p>{product.subTitle}</p>
            <div className="flex items-center gap-2">

              <h2 className='text-3xl font-medium'>${product.price}</h2>
              <h3 className='text-gray-600'>M.R.P: <span className='line-through'>${getDiscountPercentage(product)}</span> </h3>
              <div className="off">({product.discount}% off)</div>
            </div>
            <button className="btn-rating text-xs w-max cursor-auto">Free Delivery</button>

          </div>
          </div>
          <div className="card w-full">
            <div className="w-full flex flex-col gap-2 text-left">
                <h3 className='text-2xl font-bold'>Product Details</h3>
                <p className="text">{product.details}</p>
            </div>
          </div>
          <div className="card w-full">

          <div className="w-full flex flex-col gap-2 text-left">
              <h3 className='text-2xl font-bold'>Product Rating and Reviews</h3>
              <div className="rating flex gap-2 items-center">
                <div className="btn-rating">
                  {product.rating}<FaStar style={{ display: "inline-block" }} />
                </div>
                <span className='text-gray-600'>{product.reviews} Reviews</span>
              </div>

              <div className="reviews mt-4 flex flex-col gap-2 p-4 border border-blue-300 rounded-md">
                  <div className="flex items-center gap-2">
                    <div className="profile">
                      <Image src={product.src} alt={product.title} height={0} width={0} className='w-8 h-8 rounded-full'/>
                    </div>
                    <div className="name font-bold">Sangamesh</div>
                    <div className="text-xs">01/12/2021</div>
                  </div>
                  <p className="">Real Images and videos from customers</p>

                  <div className="help flex gap-2 items-center">
                    <button className="">
                        <FaThumbsUp />
                    </button>
                    <div className="">
                      <span className='text-xs'>Helpful(4)</span> </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  ) ;
};

export default ProductDetails;
