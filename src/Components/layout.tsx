import React from 'react';
import { Navbar } from './UI/Navbar/Navbar';
import { Footer } from './UI/Footer/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <div className='fixed top-0 left-0 w-full z-50 '> */}
      <div>
        <Navbar />
      </div>
      <div className='mt-'></div>
      {/* Adjust the padding-top value based on the height of your Navbar */}
        {children}
     
      <Footer />
    </>
  );
};

export default Layout;
