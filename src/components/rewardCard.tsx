import { memo, useRef, useState } from 'react';
import logo from "../assets/logo.png"
import { generateRandomString } from '../assets/essentials';
import { Copy } from 'lucide-react';
import {copy} from "../assets/essentials"
const RewardCard = ({
    cafename,
    speciality,
    type,
    offer,
    subtext,
    coins

}:{
    cafename:string,
    speciality:string,
    type:string,
    offer:string,
    subtext:string,
    coins:number,

}) => {
const [redeemed,setredeemed]=useState(false);
const [code,setcode]=useState("Redeem");
const coderef = useRef<HTMLButtonElement|null>(null)
   async function redeemhandler(){
    if(redeemed!=true){

    
       const code=await generateRandomString(10);
       setcode(code)
       setredeemed(true)
    }
    }
  return (
    <div className={ ` px-2 py-1 pb-1 comic-relief-regular tracking-tighter mx-1 my-1 border rounded border-neutral-200 ${redeemed?"opacity-50":""}  `} >
      <div className='flex justify-between ' >
        <div className='flex gap-2 ' >  <div><img className='size-8 opacity-60 mt-1 ' src={logo} alt="" /> </div>
        <div className='leading-2 mt-1' >
            <h1 className='text-sm  ' >{cafename}</h1>
            <h1 className='text-[10px] text-neutral-600' >{speciality}</h1>
            </div> </div>
        <div  > <h1 className='text-green-600  mt-1 bg-green-100 px-1  font-sans tracking-wide rounded-xs  text-[10px] flex items-center align-middle  ' >{type}</h1></div>
      </div  >
      <div className='leading-4 my-1 mx-1' >
      <h1 className='text-[16px] font-semibold ' >{offer}</h1>
      <h1 className='text-neutral-500 text-[12px] tracking-[-0.2px]' >{subtext}</h1>
      </div>
      <div className='flex justify-between align-middle  text-sm' >  <div className='text-tangy pl-1 ' > {coins} <span className='text-[12px]'>coins</span> </div>
      <div><button  className='flex tracking-wide bg-tangy font-sans rounded-lg px-2 shadow-2xs shadow-gray-200 text-white/90 gap-2'  onClick={redeemhandler} ref={coderef} ><span>{code}</span> {redeemed?<Copy className=' text-white/70 size-4 my-auto rounded bg-none'  onClick={()=>{ copy(code)
         if(coderef.current){
         const range = document.createRange();
      range.selectNodeContents(coderef.current);

      const selection = window.getSelection();
      selection?.removeAllRanges();

      selection?.addRange(range);
      setTimeout(()=>{
        selection?.removeAllRanges();

      },2000)

         }

      }} ></Copy>:null} </button></div></div>
    </div>
  );
};

export default memo(RewardCard);