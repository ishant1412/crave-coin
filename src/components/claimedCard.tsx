import { MapPin } from 'lucide-react';
import { memo } from 'react';
import type { ClaimCardtype } from '../assets/types';
const ClaimedCard = ({
    cafename,
    coinsspent,
    offer
}:ClaimCardtype) => {
  return (
    <div className=' from-white via-30% via-tangy/40 to-white  border border-tangy/40 py-1 mx-1 my-1 rounded leading-5 px-2 flex comic-relief-regular justify-between  ' >
      <div><div className='tracking-tight' >{offer}</div>
      <div className='text-neutral-600 text-[10px] flex align-middle tracking-wider' ><span className='text-start' ><MapPin className=' my-auto h-3.5 w-fit'></MapPin></span>{cafename}</div></div>
      <div className=' flex flex-col  text-[14px] text-tangy gap-0.5 items-end' > <div className='bg-neutral-200 tracking-wide text-neutral-500  w-fit rounded-xs text-[10px] px-1 font-sans font-semibold' > CLAIMED </div> <div className='flex' >{coinsspent}  <span className='text-[12px] flex place-items-end' > coins</span></div> </div>
    </div>
  );
};

export default memo(ClaimedCard);