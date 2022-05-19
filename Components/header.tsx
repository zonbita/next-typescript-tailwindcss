import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'
export default function Header(){

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)
  
    return( 
    <>
     <header className='w-full flex justify-center items-center  md:px-10 absolute z-50 background-color box-shadow-1  text-white p-[14px] px-2'>
        <title>ZONBITA | FULLSTACK</title> 
        <link rel="icon" href="/favicon.ico" />

              <div className="flex w-screen ">
                  <div className="flex-1 flex justify-center mr-auto min-w-[100px]">
                    <a className="flex items-center">
                      <img src="https://raw.githubusercontent.com/zonbita/zonbita/main/LOGO.png" className="mr-5 h-6 sm:h-12" alt="zonbita Logo" />
                      <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#fff] to-[#aaaaaa]">ZONBITA</span>
                    </a>
                  </div>

                  <div className="flex-1 flex justify-center items-center ml-auto">
                  <ul className="hidden md:flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium ">
                        <li>
                          <a href="/" className="menu-headerLink">Home</a>
                        </li>
                        <li>
                          <a href="#About" className="menu-headerLink">About</a>
                        </li>
                        <li>
                          <a href="#Services" className="menu-headerLink">Services</a>
                        </li>
                        <li>
                          <a href="#Projects" data-scroll-nav="1" className="menu-headerLink">Projects</a>
                        </li>
                        <li>
                          <a href="#Contact" className="menu-headerLink">Contact</a>
                        </li>
                </ul>
                 
                  {!nav ?  
                    <button onClick={handleClick} data-collapse-toggle="mobile-menu" type="button" className=" text-sm right-10 absolute rounded-lg md:hidden hover:bg-[#000] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                    </button>
                    : 
                    <button onClick={handleClick} data-collapse-toggle="mobile-menu" type="button" className=" text-sm right-10 absolute md:hidden " >
                      <span className="sr-only">Open main menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                      <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                      <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                      </svg>    
                    </button>
                  
                  }

                    <div className={!nav ? 'hidden' : 'absolute text-black left-0 top-20 w-full background-color2 px-4 py-7 flex flex-col'} id="mobile-menu">
                      <ul className="md:hidden flex flex-col mt-4 gap-6 text-sm font-medium font-white cursor-pointer">
                        <li className='hover:bg-slate-600 p-3'>
                          <a href="/" className="menu-headerLink">Home</a>
                        </li>
                        <li className='hover:bg-slate-600 p-3'>
                          <a href="#About" className="menu-headerLink">About</a>
                        </li>
                        <li className='hover:bg-slate-600 p-3'>
                          <a href="#Services" className="menu-headerLink">Services</a>
                        </li>
                        <li className='hover:bg-slate-600 p-3'>
                          <a href="#Projects" data-scroll-nav="1" className="menu-headerLink">Projects</a>
                        </li>
                        <li className='hover:bg-slate-600 p-3'>
                          <a href="#Contact" className="menu-headerLink">Contact</a>
                        </li>
                      </ul>
                    </div>

                  </div>
              </div>
      


      </header>

 

     </>
    )
}