import React from 'react'
import Spline from "@splinetool/react-spline"
export default function Herosection() {
    return (
        <>
        <div className='w-screen mt-[1px] sm:h-screen md:h-[400px] sm:h-screen mt-[70px] flex flex-col md:flex-row 'data-aos="fade-up-right" data-aos-duration="1000">

            <div className="Left pl-[2vw]  pr-[4vw] w-[100%] md:w-[40%] flex  sm:items-center sm:justify-center   flex-col md:gap-3 gap-2 z-20">
                <div className="  relative overflow-hidden uppercase h-[40px] flex justify-center items-center w-[170px] bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0px_0px_15px_rgba(255,255,255,0.4)] rounded-full"><div className='absolute bg-black   mt-0.5 mb-10 h-[35px] w-[165px] top-0  flex items-center justify-center rounded-full '>Intruducing</div></div>
                <h2 className='text-5xl  sm:leading-[7.3vw] md:leading-[5vw]  uppercase'>Enail For <br /> Developers</h2>
                <div className="h-[200px]">
                <p className='text-gray-500   leading-[5vw] md:leading-[2.5vw] pr-[9vw] sm:w-[50%] md:w-[100%] md:ml-[5vw] mx-auto '>the best way to reachuumans instead of spam folders,deliver Transactional and marketing email at scale</p>
                </div>
                <div className="btns flex flex-row -mt-[100px] gap-4">
                    <button className='uppercase bg-black p-4 rounded-full'>documentation</button>
                    <button className='uppercase bg-white p-4 px-7 rounded-full md:p-2 md:px-8 text-black font-bold'>Get started</button>
                </div>

            </div>
            <div className="Rigth  overflow-scroll md:overflow-hidden md:w-[60%] sm:w-[100%] md:mt-[0px] sm:mt-[60px] flex flex-col justify-center items-center md:h-full sm:h-[700px] lg:pl-28 lg:pb-20">   <Spline
                scene="https://prod.spline.design/J3dpM2f25EUUh1zs/scene.splinecode"
            /></div>
        
        </div>
            
            </>
    )
}
