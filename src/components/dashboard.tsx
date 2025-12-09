import { memo } from 'react';
import logo from "../assets/logowhite.png"
import { Scan, Sparkles } from 'lucide-react';
import Transactioncard from './transactioncard';
import {transactionData } from '../assets/data';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate= useNavigate();
  return (
    <div className=' px-2 flex flex-col justify-between  momo-trust-display-regular'>
      <div>
  <h1 className='text-xl' >Hello, Gaurav 👋 </h1>
  <p className='comic-relief-regular text-[12px] text-black/80 leading-2 tracking-tighter ' >ready to earn more rewards?</p>
      <div className=' mt-4 mb-2 py-3 px-2 comic-relief-regular text-white rounded-lg bg-linear-to-r from-tangy to-150% to-white ' >
        <p className=' text-[10px] flex justify-between pt-2'>your balance <img src={logo} className=' size-6' alt="logo" /></p>
        <h1 className='text-2xl ' >1250<span className=' text-sm'>coins</span> </h1>
         <p className='text-[10px] flex align-middle'><Sparkles className='size-3' ></Sparkles> +120 coins this week</p>
      </div>
      <div  onClick={()=>{
        navigate('/scan')
      }} className='bg-tangy comic-relief-regular py-1 flex justify-center rounded-md text-white' ><Scan></Scan>&nbsp; Scan to Pay</div>
      <h1 className='text-[12px] my-1' >Recent Transcations</h1>
       <div className=' max-h-100 overflow-y-auto hide-scrollbar flex flex-col gap-3 my-3' >
       {transactionData.map((data)=><Transactioncard 
       day={data.day}
       reward={data.reward}
       time={data.time}
       cafename={data.cafename}
       payment={data.payment}
       type='reward'
       ></Transactioncard>)}
       </div>
      </div>
      
    </div>
  );
};

export default memo(Dashboard);