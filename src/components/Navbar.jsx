import React from 'react'

export default function Navbar() {
    return (
        <header className='flex w-screen p-7  h-[100px] mb-[0px] flex-row items-center md:justify-between   sm:justify-around' >
            <div className="Logo">
                <h1 className='text-4xl sm:3xl' data-aos="fade-up">MCCODE </h1>
            </div>
            <div className='flex  ml-[45vw] md:hidden'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-8 h-8"   // optional, you can style it with Tailwind
                    fill="currentColor"   // makes the icon follow text color
                >
                    <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                </svg>

            </div>
            <div>
                <ul className='md:"flex" hidden flex flex-row gap-12 md:flex '>
                    <li data-aos="fade-up-right">COMPANY</li>
                    <li data-aos="fade-up-right">FEATURE</li>
                    <li data-aos="fade-up-right">RESOURCES</li>
                    <li data-aos="fade-up-right">DOCS</li>
                </ul>
            </div>
            <div className="Button  hidden md:block">
                <button className='bg-gray-400 rounded-full hover:bg-gray-500 h-10 w-[110px] text-black'>SIGNING</button>
            </div>

        </header>
    )
}
