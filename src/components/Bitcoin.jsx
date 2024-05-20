import React from 'react'
import rectangle from '../../public/images/png/Rectangle.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Bitcoin() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger) ,

        gsap.from(".img1",{
            scale:0,
            opacity:0,
            duration:1,
            rotate:50,
            scrollTrigger:{
                trigger:".img1",

                // markers:true,
                start:"top 60%",
                scrub:true,

            }

        })
        gsap.from(".span-ig",{
            scale:0,
            opacity:0,
            duration:1,
            // rotate:-180,
            scrollTrigger:{
                trigger:".span-ig",

                // markers:true,
                start:"top 100%",
                scrub:true,

            }

        })
        gsap.from(".right",{
            border:"none",
            // opacity:0,
            // duration:1,
            // rotate:50,
        })
        gsap.from(".bitcoin-txt h2 , .btnn",{
            // scale:0,
            opacity:0,
            duration:1,
            // rotate:50,
            stagger:0.2,
            ease:"power3.out",
            y:-20,
            scrollTrigger:{
                trigger:".img1",

                // markers:true,
                start:"top 65%",
                // scrub:true,
            }


        })

    })
  return (
    <div className='px-4  flex flex-col md:flex-row w-full py-4 md:px-10 md:py-10'>
        <div className='img-div w-full h-full flex flex-col md:flex-row relative'>
            <span className= 'span-ig md:w-[60%] w-full h-full hidden   md:h-[30rem] xl:ms-5 bg-purple md:inline-block  blur-[80px]'></span>
            <img className= ' img1 lg:max-w-[400px] max-w-[300px] mx-auto lg:mx-0 md:absolute md:top-0  w-full ' src={rectangle} alt="" />
        </div>
        <div className='bitcoin-txt w-full mt-12 md:mt-0 h-full '>
            <h2 className='text-6xl font-semibold md:text-7xl'>Bitcoin </h2>
            <h2 className=' text-6xl font-semibold md:text-7xl pb-2 md:pb-4'>   Art Work </h2>
            <h2 className='text-sm'>created by  <span className='text-light-purple'> Jonathon Borba</span></h2>
            <div className='w-full justify-between  md:justify-start flex mt-10 '>
                <div className="left text-xs md:text-md pr-2 md:w-[30%]  ">
                    <h2 className='text-sm'>Current Bid</h2>
                    <h2 className='md:text-2xl font-[500] py-1'>1.09 ETH</h2>
                    <h2 className='text-xs'>$1,385</h2>
                </div> 
                <div className='right  md:w-[40%] border-l-2 pl-7 md:px-10 border-white'>
                    <h2>Auction Ends in</h2>
                    <div className='flex mt-5 gap-4 text-xs md:gap-8'>
                        <div>
                            <h2 className='text-xl'>18</h2>
                            <h2>Hours</h2>
                        </div>
                        <div>
                            <h2 className='text-xl'>57</h2>
                            <h2>Minutes</h2>
                        </div>
                        <div>
                            <h2 className='text-xl'>14</h2>
                            <h2>Seconds</h2>
                        </div>
                    </div>

                </div>
               
            </div>
            <div className='btnn w-full'>
            <div className="btn mt-10 flex mx-auto md:mx-0 xl:mt-10 bg-white px-3 md:px-4 rounded-md py-2 hover:bg-light-purple hover:text-white text-sm md:text-lg duration-300 text-black font-semibold items-center gap-2 w-fit">
                        <button>View Art Work</button>
                        <FaArrowRightLong className='-rotate-45'/>

                    </div>
                    </div>

        </div>

    </div>
  )
}

export default Bitcoin