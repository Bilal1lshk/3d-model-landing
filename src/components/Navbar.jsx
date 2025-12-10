import React, { useEffect, useRef, useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import gsap from "gsap"
const listitems = [
    {
        text: "COMPANY"
    },
    {
        text: "FEATURE"
    },
    {
        text: "RESOURCES"
    },
    {
        text: "DOCS"
    },
]

export default function Navbar() {
    const [isnav, setisnav] = useState(false)
    const box=useRef(null)
    const isnavtoggle = () => {
        setisnav((prev) => !prev)
    }
 useEffect(() => {
    if (box.current) {
        if (isnav) {
            gsap.fromTo(
                box.current,
                { x: "100%" },
                { x: "0%", duration: 1.5, ease: "power3.out" }
            );
        }     
    }
}, [isnav]);
    return (
        <>
            <header className='flex w-screen p-7  h-[100px] mb flex-row items-center justify-between   ' >
                <div className="Logo">
                    <h1 className='text-4xl sm:3xl' data-aos="fade-up">MCCODE </h1>
                </div>
                <div onClick={isnavtoggle} className='flex  justify-end md:hidden'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="w-8 h-8"   // optional, you can style it with Tailwind
                        fill="currentColor"   // makes the icon follow text color
                    >
                        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                    </svg>

                </div>
                <div className='hidden md:flex'>
                    <ul className='md:flex  flex-row gap-12  '>
                        {
                            listitems.map((list, key) => (
                                <li key={key} data-aos="fade-up-right" className='text-animation'>{list.text}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className="Button  hidden md:block">
                    <button className='bg-gray-400 rounded-full hover:bg-gray-500 h-10 w-[110px] text-black'>SIGNING</button>
                </div>

            </header>

            <div ref={box} className={`w-[90%]  ${isnav ? "" : "hidden"} flex md:hidden justify-center items-center fixed z-50 top-[30%] mx-auto `}>
                <GiTireIronCross onClick={isnavtoggle} className=' text-[40px] absolute left-[77vw] bottom-23 z-50  ' />
                <div className=' absolute w-full left-5  h-[300px] glass-bg flex  flex-col items-center gap-5 '>
                    <h1 className='text-3xl text-amber-600'>MCCODE</h1>
                    {
                        listitems.map((list, key) => (
                            <li key={key} data-aos="fade-up-right " className='list-none text-2xl  text-white'>{list.text}</li>

                        ))
                    }
                </div>
            </div>
        </>
    )
}
