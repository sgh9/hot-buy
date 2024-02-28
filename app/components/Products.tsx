import React from 'react';
import ProductCard, { IProductCardProps } from './ProductCard';
import Link from 'next/link';

interface IProductsProps {
  products: IProductCardProps[]
}

const Products: React.FunctionComponent<IProductsProps> = ({ products =[] }) => {
  return (
    <section className=''>
      <div className="flex gap-4 flex-wrap">
        {
          products.map((product, i)=> (
            <Link href={`/products/${product._id}`} className="w-1/3" key={i}>
              <ProductCard
                title={product.title}
                src ={product.src}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                discount={product.discount}
                subTitle={product.subTitle}
              />
            </Link>

          ))
        }
        
      </div>
    </section>
  ) ;
};

export default Products;
