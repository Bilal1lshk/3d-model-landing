import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import backgroundimage from "../src/assets/gradient.png"
import Herosection from './components/Herosection'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
   useEffect(()=>{
      AOS.init({
        duration:1500,
        once:true,
      });

    })
  return (
   
    <>
      <main className='h-screen relative w-screen z-10'>
        <img className='h-screen w-screen absolute -z-10 top-0' src={backgroundimage} alt="" />
        <div className='absolute w-180 top-[20%] -z-10 right-[-10%] shadow-[0px_0px_900px_20px_#e99b63] -rotate-30 -z-10'></div>
        <Navbar />
        <Herosection/>
      </main>

    </>
  )
}
