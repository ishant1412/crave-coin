import logo from "../assets/logowhite.png"
import { memo} from 'react';
import {  ArrowRight } from "lucide-react";
import Button from "./button";
const Hero = () => {
  
    function clickhandler(){
 return 0;
    }
  return (
    <div className="flex  flex-col justify-center">
        <div className="" >
   <img src={logo} className=" mx-auto h-20  my-10 anim-levitate rounded-full " alt="" />
  <div className=" relative" >
    <div className="absolute pointer-events-none  w-full h-[93%] my-auto mx-4  inset-y-0" >
        <div className="w-1 h-full bg-white " ></div>
    </div>
   <p className="text-white/70 leading-15 text-[30px] mx-9  flex flex-col text-left  "> 
     <p className=" text-5xl  ">Be a part of new </p> 
    <p className=" text-2xl mb-4 underline">Food Loyalty Economy</p>
     <p className="mt-5 text-sm text-white/90">unify loyalty points from your favourite  food spots and spend anywhere in our network</p>
     <div className="">
       
                        <Button size='xl' onclick={clickhandler}  > Start earning <ArrowRight className="my-auto font-extrabold size-6" ></ArrowRight></Button>
        
     </div>
    </p>
 
    </div>
      
    </div>

    <div className="scroll-wrapper flex items-end   text-tangy h-45 ">
     <div className=" items-center w-full flex justify-center bg-white/50 ">

    
      

         </div>
      </div>
    </div>
  );
};

export default memo(Hero);