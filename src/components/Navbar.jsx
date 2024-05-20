import React, { useEffect, useState } from 'react';
import union from '../../public/images/png/Union.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  useGSAP(()=>{
     var tl=gsap.timeline()
    gsap.from(" .nav img,.menu .h1, .btn-div",{
      y:-50,
      opacity:0,
      duration:1,
      stagger:0.2,
      ease:"power3.out"
    })
    
  })
  
  
  const [wallet, setWallet] = useState(false);
  const togglenavbar = ()=>{
    setWallet((prevstate)=>!prevstate);
    // console.log(wallet);

  //   useEffect(() => {
  //     if (wallet) {
  //         document.body.classList.add("overflow-hidden");
  //     } else {
  //         document.body.classList.remove("overflow-hidden");
  //     }
  //     return () => {
  //         document.body.classList.remove("overflow-hidden");
  //     };
  // }, [wallet]);
  };


  return (
    <div className='max-w-[1440px] fixed z-[999]  mx-auto w-full'>
    <div className=' nav w-full  bg-dark-blue px-4 py-6 lg:px-10 lg:py-6 flex justify-between items-center font-semibold '>
        <img className='md:w-10 w-7  object-cover' src={union} alt="" />
        <div className='hidden menu xl:w-[45%]  lg:w-[50%] md:w-[70%]  md:flex justify-between  font-light items-center'>
          {['About us','Store','Games'].map((item,index)=>{
            return <div className='h1  w-[15%] '> <h1 className=' cursor-pointer hover:scale-110 text-center duration-300 hover:font-medium' key={index}>{item}</h1> </div>
          })}
           <div className='btn-div'>
            <button className='hover:bg-light-purple hover:text-white duration-300   font-semibold  px-6 py-2 bg-white text-black'>Connect Wallet</button>
            </div>
        </div>

        <div onClick={togglenavbar} className=" sm:hidden z-[2000] ">
        <div
          className={`flex  flex-col w-full cursor-pointer z-[300] ${wallet
            ? "gap-0   justify-between h-6 w-6 ms-1"
            : "gap-[5px]  h-full"
            }`}
        >
          <span
            className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${wallet ? "w-6 rotate-45 translate-y-[11px]" : "w-5"
              }`}
          ></span>
          <span
            className={`bg-white h-[3px] rounded-xl duration-500 ${wallet ? "w-0" : "w-7"
              }`}
          ></span>
          <span
            className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${wallet ? "w-6 -rotate-45 -translate-y-[10px]" : "w-5"
              }`}
          ></span>
        </div>
      </div>

      <div className={`min-h-[100vh] flex flex-col justify-center gap-4 bg-dark-blue  font-semibold  sm:hidden fixed transition-all duration-300 ${wallet ? "top-0 left-0 w-full h-full z-[100] fixed":"-left-full top-0 w-full h-full"}`}>

        <ul className='w-full flex flex-col items-center justify-center gap-10 text-3xl font-semibold'>
        
        {['Home','About us','Store','Games'].map((item,index)=>{
            return <li className='text-2xl hover:text-purple  hover:scale-125 duration-300' key={index}>{item}</li>
          })}
          <li><button className=' text-xl  font-semibold hover:bg-purple hover:text-white duration-300
          px-8 py-3 bg-white text-black'>Connect Wallet</button></li>
              
        </ul>

      </div>

    </div>
    </div>
  )
}

export default Navbar