import Link from 'next/link';
import * as React from 'react';

interface IPageNotFoundProps {
}

const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = (props) => {
  return (
    <div className='flex h-screen gap-4 flex-col justify-center items-center'>
        <h3 className='text-3xl'>
            Page Not Found 404
        </h3>
        <Link href={"/"} className='btn'>
            Home
        </Link>
    </div>
  );
};

export default PageNotFound;
