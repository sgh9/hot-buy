import Image from 'next/image';
import React from 'react';
import src from '../assets/logo.png';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export interface IProductCardProps {
    _id?: number | string,
    title: string,
    subTitle: string,
    src: string,
    rating: number,
    reviews: number,
    price: number,
    discount: number,
    details?: string
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
    title,
    src,
    subTitle,
    rating,
    reviews,
    price,
    discount
}) => {

    const getDiscountPercentage = ()=> {
        return ~~(discount/ 100 * price)
    }

  return (
    <div className='product-card'>
        <div className="w-full">
            <Image src={src} alt={title} width={0} height={0}  sizes='100vw'
        className='w-full h-auto rounded-t-md' />
        </div>
        <div className="px-4 flex flex-col gap-3 items-center text-center">
            <h3 className='font-bold'>{title}</h3>
            <p>{subTitle}</p>
            <div className="price flex gap-1 justify-between items-center">
                <h2 className='text-3xl font-medium'>${price}</h2>
                <h3 className='text-gray-600'>M.R.P: <span className='line-through'>${getDiscountPercentage()}</span> </h3>
                <div className="off">({discount}% off)</div>
            </div>
            <div className="rating flex gap-2 justify-between items-center">
                <div className="btn-rating">{rating}<FaStar style={{display: "inline-block"}}/></div>
                <span className='text-gray-600'>{reviews} Reviews</span>
            </div>
        </div>
    </div>
  ) ;
};

export default ProductCard;
