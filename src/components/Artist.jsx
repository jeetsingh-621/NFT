import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaArrowRightLong } from "react-icons/fa6";
import art1 from '../../public/images/png/art1.png';
import art2 from '../../public/images/png/art2.png';
import art3 from '../../public/images/png/art3.png';
import art4 from '../../public/images/png/art4.png';


function Artist() {

    const initialartist = [{
        img:art1,
        name:"Ferhat Deniz"
    },
    {
        img:art2,
        name:"Sebastian"
    },
    {
        img:art3,
        name:"Javier Miranda"
    },
    {
        img:art4,
        name:"Erick Butler"

    },
    {
        img:art1,
        name:"Ferhat Deniz"
    },
    {
        img:art2,
        name:"Sebastian"
    },
    {
        img:art3,
        name:"Javier Miranda"
    },
    {
        img:art4,
        name:"Erick Butler"

    },
    {
        img:art1,
        name:"Ferhat Deniz"
    },
    {
        img:art2,
        name:"Sebastian"
    },
    {
        img:art3,
        name:"Javier Miranda"
    },
    {
        img:art4,
        name:"Erick Butler"

    }
]


  return (
    <div className='w-full px-4  md:px-10 py-4 md:py-10'>
        <div className='flex pt-10 md:pt-0 justify-between '>
            <h1 className=' text-xl md:text-5xl font-semibold'>Popular Artists</h1>
            <div className="btn  flex  bg-white px-2 md:px-6 rounded-md py-2 hover:bg-light-purple hover:text-white text-xs md:text-md duration-300 text-black font-semibold  items-center gap-0 w-fit">
                        <button className=''>View all Artists</button>
                        <FaArrowRightLong className='-rotate-45'/>

                    </div>
        </div>
        <div className='w-full artist-scroll flex flex-shrink-0 overflow-x-auto items-center gap-6 md:gap-20 py-14 md:py-24'>
            {initialartist.map((item,index)=>{
                return    <div key={index} className='w-full  flex flex-col items-center justify-center'>
                <div className= 'w-24 md:w-36 md:h-36 h-24 rounded-full overflow-hidden'>
                <img className='w-full object-cover' src={item.img} alt="" />
                </div>
                <h1 className=' capitalize text-sm md:text-lg py-5'>{item.name}</h1>

            </div>
            })}
         
          

        </div>


    </div>
  )
}

export default Artist