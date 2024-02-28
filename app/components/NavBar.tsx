"use client";
import React, { ChangeEvent, useState } from 'react';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { Button, Popover, PopoverContent, PopoverHandler, Typography } from '@material-tailwind/react';
import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = ({
}) => {
  const { state, dispatch }= useAppContext();
  const router = useRouter();

  const getCartCount = ()=> {
    const { cartProducts } = state;
    return cartProducts.length
  }
  return (
    <header className='py-4 mt-0 bg-white'>
        <nav className='container mx-auto flex justify-between items-center'>
          <div className='flex flex-auto gap-8 items-center'>
            <Link href={"/"} className="logo flex items-center gap-2 p-2 rounded-md">
              <Image src={Logo} alt='logo' height={30}/> <span className='text-blue-500 font-bold'>Hot Buy</span> 
            </Link>
            <div className="flex gap-5">
            {/* <Link href={"/products"} className="font-medium hover:text-blue-700">
              All
            </Link> */}
            {/* <Link href={"/products/brands"} className="font-medium hover:text-blue-700">
              top brands
            </Link> */}
            </div>

          </div>
          <div className="flex flex-auto justify-end gap-5 items-center">
            <SearchBar/>
            <hr className='h-10 bg-blue-500' style={{ width: "1.5px"}}/>
            <Popover placement="bottom">
              <PopoverHandler> 
                <button>
                    <CgProfile size={20} style={{marginInline: "auto"}}/>
                    <Typography className="w-auto font-medium">Profile</Typography>
                </button>

              </PopoverHandler>
              <PopoverContent placeholder={""} className="w-56">
                <Typography  variant="h4" className='text-left mb-2'>
                  Hi User!
                </Typography>

                <Button disabled={true} className="btn w-auto font-medium">
                  <Link href={"/login"}  >
                    Login
                  </Link>
                </Button>

                  
              </PopoverContent>
            </Popover>
            <Link href={`/products/cart`}>
                <div className="flex ">
                  <CgShoppingCart size={20} style={{marginInline: "auto"}}/> 
                    { getCartCount() ? <span className='ml-2 rounded-full px-1.5 font-xs text-white bg-blue-500'>{getCartCount() }</span> : null} 
                </div>
                <Typography className="w-auto font-medium">cart</Typography>
            </Link>
          </div>
        </nav>
    </header>
  );
};

export default NavBar;
