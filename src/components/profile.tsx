import { memo } from 'react';
import ClaimedCard from './claimedCard';
import logo from "../assets/logo.png"
import { claimeddata } from '../assets/data';
import claimedCard from './claimedCard';
import { Info, Settings } from 'lucide-react';
const Profile = () => {
  return (
    <div className='comic-relief-regular p-2 flex flex-col justify-between' >
      <div className='' >

      
      <div>Profile</div>
<div className='flex gap-2 pl-1 py-1   border border-neutral-200 rounded' > <img src={logo} className='size-10 opacity-80' alt="" /> 
<div className='leading-3 ' > <h1  className='text-sm tracking-wide' >Gaurav Arya  </h1>
<h1 className='text-[12px] tracking-wide text-neutral-700' >Gauravarya@gmail.com</h1></div></div>
<div className='flex justify-around gap-2 py-1 text-xs' > <div className=' w-full  text-tangy bg-tangy/40 border-tangy/70 border rounded flex flex-col items-center ' >total coins <div className='text-sm'>1200</div> </div>
<div className='text-green-600 w-full bg-green-300  border  rounded flex flex-col items-center ' > total spent  <div className='text-sm' >2300</div> </div></div>
<h1>claimed Rewards </h1>
<div className=' h-90 overflow-y-auto hide-scrollbar ' >
{claimeddata.map((data)=><ClaimedCard coinsspent={data.coinsspent} cafename={data.cafename} offer={data.offer} ></ClaimedCard>)}
</div>
</div>

 <div  className='h-full my-3'>
   <h1 className=' py-1 flex text-neutral-800 w-full gap-2 text-[12px] font-semibold border-t border-tangy/70' ><Settings  className='h-4'></Settings> Settings</h1>
  <div className=' text-[12px] border border-neutral-200 py-2 h-full  rounded-xs' >
  <div className=' flex flex-col gap-6' >
    <div >
    <button className='mx-2 border-neutral-300 border-b w-full flex justify-start text-neutral-700 ' ><Settings className='h-4' ></Settings> App settings</button>
   </div>
    <div>
    <button className='mx-2 border-neutral-300 border-b w-full flex justify-start text-neutral-700 '><Info className='h-4' ></Info> Help Support</button>
   </div> 
  </div>

</div>
 </div>
    </div>
  );
};

export default memo(Profile);