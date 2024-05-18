import React from 'react'
import cta from "../../public/images/png/cta.png"

function Community() {
  return (
    <div className='w-full px-4 py-4 relative md:px-10 md:py-10 pb-10 md:pb-20 lg:pb-28'>
        <span className='xl:w-[30rem] w-[20rem] h-[20rem] xl:h-[30rem] inline-block absolute top-10 md:top-[30%] left-[10%] blur-[100px] bg-light-purple'></span>
        <div className='w-full  flex flex-col md:flex-row items-center '>

            <div className='md:basis-1/2 w-full z-10 xl:px-20 '>
                <img className='xl:w-[30rem] w-[20rem]  mx-auto md:h-[20rem] xl:h-[30rem]' src={cta} alt="" />
            </div>
            <div className='basis-1/2 mt-14 md:mt-0 md:px-10  xl:px-20'>
                <h2 className='text-2xl lg:text-4xl xl:text-5xl tracking-wide font-semibold'>Join the community and get the best NFT collection</h2>
                <div className="svg-div mt-10 ">
          <svg className="w-[150px] md:w-[180px]  cursor-pointer mx-auto md:mx-0"
            width="300"
            height="45"
            viewBox="0 0 218 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0H207.82C215.253 0 220.088 7.82312 216.764 14.4721L197.264 53.4721C195.57 56.86 192.107 59 188.32 59H10C4.47716 59 0 54.5228 0 49V10Z"
              fill="url(#paint0_linear_0_31)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_31"
                x1="0"
                y1="0"
                x2="11.9834"
                y2="87.9031"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DD24E1" />
                <stop offset="1" stop-color="#5117F4" />
              </linearGradient>
            </defs>
            <text
              className="font-semibold font-['Clash_Display']"
              x="45%"
              y="50%"
              fontFamily="Arial"
              fontSize="16"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              JOIN COMMUNITY
            </text>
          </svg>
        </div>

            </div>
        </div>

    </div>
  )
}

export default Community