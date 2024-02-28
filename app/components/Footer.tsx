import React from 'react';
import { CgChevronUp } from "react-icons/cg";

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='card w-full bg-black text-white'>
        <button onClick={()=> window.scrollTo(0, 0)}> <CgChevronUp/></button>
        <p>@All right reserved 2024 </p>
    </div>
  ) ;
};

export default Footer;
