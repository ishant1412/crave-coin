import { memo } from 'react';
import logo from "../assets/logo.png"
import type { transactionCardprop } from '../assets/types';
const Transactioncard = ({
    cafename,
    day,
    time,
    reward,
    type,
    payment
}:transactionCardprop) => {
  return (
    <div className='pt-1 comic-relief-regular flex justify-between  shadow-gray-300 border-t border-gray-200 shadow-xs px-1 rounded' >
     <div className='flex gap-2 align-middle' >
<img src={logo} className='size-8  opacity-60' alt="" />
<div className='leading-4 ' >
    <p className=' tracking-tighter  '>{cafename}</p>
    <p className='text-[12px]  tracking-tight text-black/70' >{day}{time}</p>
</div>
     </div>
     <div className='leading-4' >
        <div className='text-sm '>
            ${payment}
        </div>
        <div className='text-tangy text-[12px] flex justify-end ' >
            +{reward}
        </div>
     </div>
    </div>
  );
};

export default memo(Transactioncard);