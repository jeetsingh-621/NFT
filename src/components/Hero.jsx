import React from "react";
import img from "../../public/images/png/img.png";
import img1 from "../../public/images/png/img1.png";
import ellipse4 from '../../public/images/png/Ellipse4.png';
import eth from '../../public/images/png/ethereum.png';
import ellipse from '../../public/images/png/Ellipse.png';

function Hero() {
  return (
    <div className="flex mt-20 flex-col lg:flex-row  w-full px-4 py-6 md:px-10 md:py-20">
      <div className="basis-1/2 ">
        {["Discover Rare", "Collections", "Art $ NFT's"].map((item, index) => {
          return (
            <h1 key={index} className="text-[2.5rem] md:text-[5rem] lg:text-[3.8rem] leading-none font-semibold">
              {item}
            </h1>
          );
        })}
        <p className='font-["poppins"] text-sm md:text-md my-5 md:my-10'>
          Create, Explore, & Collect Digital Art NFTs
        </p>

        <div className="svg-div">
          <svg className="w-[150px] md:w-[180px] cursor-pointer mx-auto md:mx-0"
            width="180"
            height="55"
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
              fontSize="20"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              EXPLORE
            </text>
          </svg>
        </div>

        <div className="flex justify-between w-full px-2 md:px-32 lg:px-0 lg:w-[50%] my-4 md:my-10">
          <div>
            <h2 className="text-2xl font-semibold">32k+</h2>
            <h2 className="text-sm">Artwork</h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">20k+</h2>
            <h2 className="text-sm">Auctions</h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">10k+</h2>
            <h2 className="text-sm">Artists</h2>
          </div>
        </div>
      </div>



      <div className=" basis-1/2 md:mt-20 lg:mt-0 relative px-4 py-0 ">
        <span className="main-blur w-[90%] md:w-full lg:w-[70%] xl:ml-32 hidden  mx-auto h-[30rem] bg-purple md:inline-block rounded-full blur-[100px]"></span>
        <div className="w-full  top-0 left-0 md:-left-10 ">
          <div className="first-card  mb-10  md:mb-0 border-[0.5px] border-gray-400  bg-gray-400  md:absolute  md:top-0 md:right-20 z-[2] backdrop-blur-[40px] w-full max-w-[300px] mx-auto h-full lg:max-w-[300px] ">
            <img className="w-full object-cover" src={img} alt="" />

            <div className="upper-text card flex pl-3 md:pr-16  pr-8 justify-between items-center py-2">
              <div className="part-1 ">
                <div className=" flex gap-2">
                  <div className="img-div w-8 h-8 md:w-10 md:h-10 rounded-full bg-white">
                    <img className="object-cover" src={ellipse4} alt="" />
                  </div>
                  <div className="img-text text-xs  md:text-sm">
                    <h2>Laura</h2>
                    <h5>0.21 weth</h5>
                  </div>
                </div>
              </div>
              <div className="part-2 text-xs  md:text-sm">
                <h6>Remaining Time</h6>
                <span>18h : 57m : 14s</span>
              </div>
            </div>

            <div className="lower-text pb-5 text-xs md:text-md pl-5 md:pl-3 pr-4 md:pr-5 flex justify-between items-center">
              <div>
                <h3>current Bid</h3>
                <div className="flex gap-2 md:gap-3">
                  <img className="w-3 " src={eth} alt="" />
                  <h3 className="font-semibold">2.8 ETH</h3>
                </div>
              </div>
              <button className=" px-4 md:px-8 hover:bg-purple hover:text-white duration-300 py-2 md:py-2 md:text-sm  bg-white text-black font-semibold">PLACE A BID</button>
            </div>
          </div>
          <div className="second-card overflow-hidden border-[1px] border-gray-100 md:-rotate-[8deg]  xl:-rotate-[10deg] bg-transparent md:absolute top-20 left-0 md:top-5 md:left-44 lg:left-6 xl:left-56 xl:top-5 lg:top-5 backdrop-blur-[20px] w-full md:max-w-[300px] max-w-[300px] mx-auto md:mx-0  ">
            <img className="w-full h-full  md:h-[20rem] md:-translate-x-20 invert-0 md:-translate-y-8 object-cover rotate-[15deg] md:rotate-[13deg] " src={img1} alt="" />

            <div className="upper-text card flex pl-3  pr-10 md:pr-16  justify-between items-center py-2">
              <div className="part-1 ">
                <div className=" flex gap-2">
                  <div className="img-div w-8 h-8 md:w-10 md:h-10 rounded-full bg-white">
                    <img className="object-cover rotate-[25deg]" src={ellipse} alt="" />
                  </div>
                  <div className="img-text text-xs md:text-sm">
                    <h2>Laura</h2>
                    <h5>0.21 weth</h5>
                  </div>
                </div>
              </div>
              <div className="part-2 text-xs md:text-sm">
                <h6>Remaining Time</h6>
                <span>18h : 57m : 14s</span>
              </div>
            </div>

            <div className="lower-text text-xs  pb-3 pl-5 pr-6 flex justify-between items-center">
              <div>
                <h3>current Bid</h3>
                <div className="flex gap-3">
                  <img className="w-4 " src={eth} alt="" />
                  <h3 className="font-semibold">2.8 ETH</h3>
                </div>
              </div>
              <button className="md:px-8 px-4 text-xs hover:bg-purple hover:text-white duration-300 py-2 bg-white text-black font-semibold">PLACE A BID</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
