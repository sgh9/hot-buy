import * as React from 'react';
import { useAppContext } from '../context/AppContext';
import Image from 'next/image';

interface ICartProductsProps {
}

const CartProducts: React.FunctionComponent<ICartProductsProps> = (props) => {
    const { state, dispatch }= useAppContext();
    const { cartProducts } = state;

    return (
        <section className='w-full flex gap-6'>
            <div className="flex flex-col gap-4 w-2/3">
                {
                    cartProducts.length > 0 && cartProducts.map(product => (
                        <div className="flex gap-5 items-center justify-start border-b-2 border-blue-600">
                            <div className="w-12">
                                <Image src={product.src} alt={product.title} height={0} sizes='100vw' width={0} className='w-full h-auto'/>
                            </div>
                            <div className="w-1/3">
                                <h4 className="text-1xl">{product.title}</h4>
                            </div>
                            <p className="w-auto">${product.price}</p>
                            <p className="w-auto">in/d</p>
                        </div>
                    ))
                }
            </div>
            <div className="w-1/3">
                <div className="card">
                    payment method
                </div>
            </div>
        </section>
    ) ;
};

export default CartProducts;
