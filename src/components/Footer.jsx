import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

function Footer() {
    useGSAP(()=>{
        gsap.from(".footer h2 ,.footer h4,.icon, .footer h3",{
            y:20,
            opacity:0,
            stagger:0.2,
            ease:"power3.out",
            duration:0.8,
            // rotate:-1080,
            scrollTrigger:{
                trigger:".footer",
                start:"top 80%",
                // scrub:true,
            }
        })
    })
  return (
    <div className='w-full px-4 py-4 md:px-10 md:py-10  bg-[#26222B]'>
        <div className='flex footer flex-col md:flex-row justify-between items-center'>
            <h2 className='lg:text-3xl md:text-2xl text-center md:text-left text-2xl font-semibold'>NFTme</h2>
            <div className='flex flex-col md:flex-row  items-center md:items-start my-10 md:my-0 gap-2 md:gap-8 lg:gap-20  text-sm'>
                <h4>Explore</h4>
                <h4>Marketplace</h4>
                <h4>Artists</h4>
                <h4>Contact</h4>
            </div>

            <div className='flex  items-center justify-center md:justify-start  gap-4'>
                <div className='w-8 icon h-8 flex justify-center items-center bg-white rounded-full overflow-hidden'>
                <AiFillInstagram color='black' />
                </div>
                <div className='w-8 icon h-8 bg-white flex items-center justify-center rounded-full overflow-hidden'>
                <RiFacebookFill  color='black'/>
                </div>
                <div className='w-8 icon h-8 bg-white flex items-center justify-center rounded-full overflow-hidden'>
                <FaTwitter color='black' />
                </div>
            </div>
        </div>
        <div className='w-full text-center mt-7 text-gray-200 md:mt-14 text-sm'>
            <h3>Privacy policy | Copyright @ Kartik Bansal 2022. All Rights Reserved. | Terms of service</h3>
        </div>

    </div>
  )
}

export default Footer