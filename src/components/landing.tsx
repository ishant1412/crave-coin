import { memo } from 'react';
import Navbar from './navbar';
import Hero from './hero';
const Landing = () => {
  return (
     <div className='bg-tangy h-screen max-h-screen  momo-trust-display-regular' >

        <Navbar></Navbar>
        <Hero></Hero>
      </div>
  );
};

export default memo(Landing);