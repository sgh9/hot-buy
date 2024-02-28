"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { CgChevronUp } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";

interface IAccordianProps {
    title?: string,
    details?: string,
    children?: ReactNode,
    open?: boolean
}

interface IAccordianTitleProps {
    children?: ReactNode,
    title: string,
    handleOpen: ()=> void,
    open: boolean
}

interface IAccordianDetailsProps {
    children?: ReactNode,
    details: string,
    open: boolean
}

const AccordianTitle: React.FunctionComponent<IAccordianTitleProps> = ({ children, title="", handleOpen, open }) => {
    if(children) {
        return children;
    }

    return (
      <div className="w-full flex justify-between">
          <h3>{title}</h3>
          <button onClick={handleOpen}>
            {
                !open ? <CgChevronDown /> : <CgChevronUp/>
            }
            
          </button>
          
      </div>
  
  
    ) ;
  };

  const AccordianDetails: React.FunctionComponent<IAccordianDetailsProps> = ({ children, details }) => {

    if(children) {
        return children;
    }

    return (
      <div className="accordian w-full ">
          {details}
      </div>
  
  
    ) ;
  };

const Accordian: React.FunctionComponent<IAccordianProps> = ({ children, title, details, open:defaultOpen =false }) => {
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        if(defaultOpen) {
            setOpen(true);
        }
    },[])

    const handleOpen = ()=> {
        setOpen(!open);
    }

  return (
    <div className="accordian w-full">
        <AccordianTitle title={title ||'Title 1'} handleOpen={handleOpen} open={open}/>
        {
            (open && children) ?
             <AccordianDetails details={details ||'Details 1'}  open={open}>{children}</AccordianDetails>
             :
             open ? <AccordianDetails details={details ||'Details 1'}  open={open}/> 
             :
            null
        }
        
    </div>


  ) ;
};

export default Accordian;
