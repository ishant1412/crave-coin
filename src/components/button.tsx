import React, { memo, useState } from 'react';
type butprop=React.PropsWithChildren<{
     onclick:()=>{};
    size:ButtonSize;
    
}>
 type ButtonSize = "sm" | "md" | "lg"|'xl'|'xl2';
const Button = ({
    onclick,
    size,
    children
}:butprop) => {
    const [clicked,setclick]=useState(false);
      
    function clickhandler(){
    setclick(true);
    onclick();
    setTimeout(() => {
        setclick(false)
    }, 1000);
    }
   
 const sizes:Record<ButtonSize, string>={

  

    sm:`text-sm`,


    md:`text-md`,
    lg:`text-lg`,
    xl:`text-xl`,
    xl2:`text-2xl`,

}
     
    const classname=`${sizes[size]} flex rounded-md px-3 my-4 shadow-2xs gap-1 shadow-tangy text-tangy hover:bg-white/10 hover:text-white bg-white/80 hover:border   border-white/80 
                 ${clicked ? "scale-95 bg-tangy ease-in border text-white border-white/70 " : ""} `
 
              
                 return (
    
      <button onClick={clickhandler} className={classname}  >{children}</button>
    
  );
};

export default memo(Button);