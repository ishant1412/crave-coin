import { memo, useRef, useState } from 'react';
import logo from "../assets/logo.png";

import  Authform from './authform';

const Navbar = () => {
   
    const [showauth,setshowauth]= useState(false);
    const type = useRef<string>(null)
    
    function singuphandler(){
      type.current="signup"
      setshowauth(true);
    }
    function loginhandler(){
   type.current="login"
   setshowauth(true);
    }
    return (
        <div>
           
        <div className='  bg-linear-to-b from-white/10 to-white/40 shadow-2xs shadow-black/20  px-2   w-full h-15 flex justify-between'>
            <div className=' flex h-full place-items-center gap-2'   >
                <img className=' size-11 align-middle shadow-black/50 shadow-xs  bg-clip-content bg-white rounded-full' src={logo} alt="" />
                <div className=' text-white text-shadow-black/50 text-shadow-xs  w-20 leading-tight' >
                    <p>Crave Coins</p>

                </div>
            </div>
            <div className='flex gap-3  pr-3 align-middle' >
                <button onClick={singuphandler} className='text-white underline text-shadow-tangy text-shadow-2xs my-4 hover:bg-white/30 rounded-md py-1 ' >signup</button>
                <button onClick={loginhandler} className='text-white underline text-shadow-tangy text-shadow-2xs my-4 hover:bg-white/30 rounded-md py-1 ' >login</button>

            </div>
        </div>
         {showauth?<> < Authform   type={type.current=='login'?'login':'signup'}  setshowauth={setshowauth} /></>:null}
        </div>
    );
};

export default memo(Navbar);