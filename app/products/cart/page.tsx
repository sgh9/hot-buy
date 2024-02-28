"use client";
import CartProducts from '@/app/components/CartProducts';
import { useAppContext } from '@/app/context/AppContext';
import { Typography } from '@material-tailwind/react';
import React from 'react';

interface ICartProps {
}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  const { state, dispatch }= useAppContext();

  const getCartCount = ()=> {
    const { cartProducts } = state;
    return cartProducts.length
  }

  return (
    <section className= 'min-h-80 p-4'>
      {  
      getCartCount() ?
      <CartProducts/>
      :
      <Typography>Cart is Empty</Typography>
      }
    </section>
  );
};

export default Cart;
