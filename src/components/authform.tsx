import  { memo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
type typeprop="signup"|"login"
const Authform = (
    {
        type,
        setshowauth
        
    }:
    {
        type:typeprop,
        setshowauth:Function
        
    }
) => {
    const navigate=useNavigate();// thats typescript for you 
    const mount =useRef(false)
    function submithandeler(){
        setshowauth(false)
    navigate('/dashboard')
      
        
    }
    useEffect(()=>{
        mount.current=true
    })
  return (
    <div className={ `fixed  transition-all transform duration-150 ease-out z-50 h-screen flex justify-center backdrop-blur-sm py-40 bg-white/50 w-full`}>
                <div className='h-fit  flex-col  bg-linear-to-br from-0% from-white to-140% to-tangy flex  w-[80%] mr-4 rounded-lg shadow-lg shadow-gray  ' > 
                  <div className='px-4 text-tangy flex justify-center'> <p> get your coins fast </p></div>
                   <div className='flex flex-col items-center gap-3 my-2'>
                    {type=='signup'?<> <input  type="text" className='border-black font-mono border rounded w-[90%] h-8 text-black/70 px-3 text-[14px]' placeholder='what can we call you?' /> </>:null}
                    <input  type="text" className='border-black font-mono border rounded w-[90%] h-8 text-black/70 px-3 text-[14px]' placeholder='enter your email' />
                    <input type="text" className='border-black font-mono border rounded w-[90%] h-8 text-black/70 px-3 text-[14px]' placeholder='enter your password' />
                    {type=='signup'?<> <input  type="text" className='border-black font-mono border rounded w-[90%] h-8 text-black/70 px-3 text-[14px]' placeholder='re-enter password' /> </>:null}
                 
                  <button onClick={submithandeler} className='flex w-[90%] justify-center  rounded-md px-3 my-4 shadow-2xs gap-1 shadow-tangy text-white hover:bg-white/10 hover:text-white bg-tangy hover:border   border-white/80 ' >signup</button>
                    </div> 
                     </div>
            </div>
  );
};

export default memo(Authform);