import { memo } from 'react';
import {  NavLink } from 'react-router-dom';
import { bottombarlinks } from '../assets/data';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='h-screen  flex flex-col justify-between  momo-trust-display-regular'  >
      <div> <Outlet></Outlet></div>
      <div className=' border-t border-gray-300 text-neutral-500 font-mono tracking-wider text-[10px]  flex justify-around pt-1'>
        {bottombarlinks.map((link) => <NavLink className={({ isActive }) =>
          isActive ? "text-tangy" : ""} to={link.href} ><div className='flex flex-col items-center' >{link.logo}{link.name}</div></NavLink>)}
      </div>
    </div>
  );
};

export default memo(Layout);