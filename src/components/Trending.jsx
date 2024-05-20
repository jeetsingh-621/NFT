import React from 'react';
import rectangle2 from '../../public/images/png/Rectangle2.png'
import rectangle1 from '../../public/images/png/Rectangle1.png'
import rectangle3 from '../../public/images/png/Rectangle3.png'
import rectangle4 from '../../public/images/png/Rectangle4.png'
import rectangle5 from '../../public/images/png/Rectangle5.png'
import rectangle6 from '../../public/images/png/Rectangle6.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Trending() {
    useGSAP(()=>{
        gsap.from(".trending h2 ,.trending p",{
            // scale:0,
            stagger:0.2,
            ease:"power3.out",
            y:40,
            opacity:0,
            duration:1,
            // rotate:-1080,
            scrollTrigger:{
                trigger:".trending h2 ,.trending p",

                // markers:true,
                start:"top 50%",
                // scrub:true,

            }

        })
        gsap.from(".cards",{
            // x:200,
            scale:0,
            opacity:0,
            duration:1,
            stagger:0.3,
            // rotate:-180,
            ease:"expoScale(0.5,7,none)",
            scrollTrigger:{
                trigger:".cards",
                start:"top 80%",
                // end:"bottom 10%",
                // scrub:true,
                // markers:true,
                // yoyo:true,
            

            }
        })
        gsap.from(".btn-4",{
            y:40,
            opacity:0,
            duration:1,
            // stagger:0.2,
            ease:"power3.out",
            scrollTrigger:{
                trigger:".btn-4",
                start:"top 70%",
                // end:"bottom 10%",
                // scrub:true,
                // markers:true,
                // yoyo:true,
            }
        })
        
    })
    const data  = [{
        name: 'Sebastian',
        name2:'Golden Flower',
        img: rectangle1,
        price: '2.3 ETH'
    },
    {
        name: 'Ferhat Deniz',
        name2:'Golden Flower',
        img: rectangle2,
        price: '2.3 ETH'
    },{
        name: 'Javier Miranda',
        name2:'Golden Flower',
        img: rectangle3,
        price: '2.3 ETH'
    },{
        name: 'Polina Kondrashova',
        name2:'Golden Flower',
        img: rectangle4,
        price: '2.3 ETH'
    },{
        name: 'Ferhat Deniz',
        name2:'Golden Flower',
        img: rectangle5,
        price: '2.3 ETH'
    },{
        name: 'Erick Butler',
        name2:'Golden Flower',
        img: rectangle6,
        price: '2.3 ETH'
    }]
  return (
    <div className='w-full relative px-4 py-4 mt-20 md:mt-0 md:px-10 md:py-10'>
        <div className='w-full trending'>
        <h2 className='text-5xl font-semibold'>Trending This Week</h2>
        <p className='my-4  text-sm w-full md:w-[29%] text-gray-300'>Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <span className='absolute xl:top-[30%] md:top-[20%] top-[15%] left-[5%] md:left-[10%] inline-block w-96 h-[32rem] bg-purple blur-[100px]'></span>
        <span className='absolute xl:top-[70%] xl:right-[10%]  top-[80%] md:top-[59%] md:right-[10%] right-[20%]  inline-block w-96 h-[32rem] bg-purple blur-[100px]'></span>

        <div className='photos flex xl:gap-10 gap-10 md:gap-5 justify-evenly flex-wrap'>
            {data.map((item,index)=>{
                return  <div key={index} className='cards'> <div  className={` z-[2] duration-300 xl:my-10 md:my-5 card max-w-[300px] xl:max-w-[450px] w-full py-4`}>
                <div className='flex w-full justify-between my-2'>
                    <div className=''>
                        <h1 className='text-lg'>{item.name}</h1>
                        <h2 className='text-xs text-gray-200'>{item.name2}</h2>

                    </div>

                    <div>
                    <h6 className='text-sm flex items-end  h-full text-light-purple'>2.3 ETH</h6>
                    </div>
                </div>
                <div className='w-full overflow-hidden max-w-[300px] xl:max-w-[450px] h-full'>
                    <img className='hover:scale-110 w-full object-cover h-full duration-500' src={item.img} alt="" />

                </div>

                </div>
            </div>
            })}

            <div className='w-full mt-10 md:mt-24  flex justify-center'>
                    <div className='px-5 btn-4  rounded-sm py-2 cursor-pointer flex gap-2 items-center justify-center bg-white text-black font-semibold hover:bg-purple hover:text-white duration-300   w-fit'>
                        <button>Explore More</button>
                        <FaArrowRightLong className='-rotate-45'/>

                    </div>
                </div>
           
          

        </div>
        </div>
  )
}

export default Trending