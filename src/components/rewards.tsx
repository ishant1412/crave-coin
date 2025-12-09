import { memo } from 'react';
import RewardCard from './rewardCard';
import { rewards } from '../assets/data';
const Rewards = () => {
  return (
    <div className=' p-1 px-2' >
      <div className='flex mt-2  
      bg-tangy/20 py-2 rounded-xs justify-between ' >
        <div className='leading-4 px-1 ' >
      <h1>Rewards</h1>
      <h1 className='comic-relief-regular font-stretch-20% tracking-tighter text-neutral-500 text-[12px]' >redeem your coins amazing offers</h1>
      </div>
      <h1 className='comic-relief-regular  items-center leading-3 rounded-xs  tracking-tighter border-tangy/40 pt-1 border-l-3        text-[12px] text-tangy  px-1 ' > 
  <div className='text-[10px]' >balance</div>  <div className='text-[16px]    rounded-xs py-1' >1200<span className='text-[10px]'>coins</span> </div></h1>
      </div>
      <h1 className='text-[14px] my-2 tracking-tight mx-1' >Available Offers</h1>
   <div className=' max-h-130  overflow-y-auto hide-scrollbar' >
 {rewards.map((r)=><RewardCard
 cafename={r.cafename}
 coins={r.coins}
 offer={r.offer}
 type={r.type}
 subtext={r.subtext}
 speciality={r.speciality}></RewardCard>)}
   </div>
    </div>
  );
};

export default memo(Rewards);