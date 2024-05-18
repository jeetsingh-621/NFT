import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bitcoin from './components/Bitcoin'
import Trending from './components/Trending'
import Artist from './components/Artist'
import Community from './components/Community'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <div className='w-full bg-dark-blue'>
    <div className='w-full overflow-hidden max-w-[1440px] font-["Clash_Display"]   text-white mx-auto bg-dark-blue'>
      <Navbar/>
      <Hero/>
      <Bitcoin/>
      <Trending/>
      <Artist/>
     <Community/>
     <Footer/>
    </div>
    </div>
  )
}

export default App