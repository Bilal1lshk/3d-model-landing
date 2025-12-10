import React from 'react'
import Spline from "@splinetool/react-spline"

export default function Herosection() {
    return (
        <>
            <div className='w-screen totalheigth z-40 grid grid-cols-1 md:grid-cols-2' data-aos="fade-up-right" data-aos-duration="1000">

                <div className="Left pl-[4vw] pr-[4vw] w-full flex justify-center mx-auto md:mx-0 flex-col gap-3 md:gap-5 z-20 py-10">
                    <div className="relative overflow-hidden uppercase h-[40px] flex justify-center items-center w-[170px] bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0px_0px_15px_rgba(255,255,255,0.4)] rounded-full">
                        <div className='absolute bg-black mt-0.5 h-[35px] w-[165px] top-0 flex items-center justify-center rounded-full'>Introducing</div>
                    </div>
                    
                    <h2 className='text-5xl leading-tight uppercase'>Email For <br /> Developers</h2>
                    
                    <p className='text-gray-500 leading-relaxed max-w-lg'>
                        The best way to reach humans instead of spam folders, deliver transactional and marketing email at scale
                    </p>
                    
                    <div className="btns flex flex-row gap-4 mt-4">
                        <button className='uppercase bg-black p-3 px-6 rounded-full hover:bg-gray-800 transition-colors'>Documentation</button>
                        <button className='uppercase bg-white p-3 px-7 rounded-full text-black font-bold hover:bg-gray-100 transition-colors'>Get Started</button>
                    </div>
                </div>

                <div className="Right w-full h-[600px] md:h-screen flex justify-center items-center">
                    <Spline scene="https://prod.spline.design/J3dpM2f25EUUh1zs/scene.splinecode" />
                </div>

            </div>
        </>
    )
}