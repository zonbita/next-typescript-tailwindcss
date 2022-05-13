import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'
export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);
    const _openMenu = () => {
      setOpenMenu(!setOpenMenu);
    }

    return( 
    <>
     <header className='z-50 bg-[#0c485e] shadow-md md:px-10 text-white p-3 px-2'>
        <title>ZONBITA PAGE</title> 
        <link rel="icon" href="/favicon.ico" />

              <nav className="flex w-screen">

                  <div className="flex-1 flex justify-center mr-auto">
                    <a className="flex items-center">
                    <img src="https://raw.githubusercontent.com/zonbita/zonbita/main/LOGO.png" className="mr-5 h-6 sm:h-12" alt="zonbita Logo" />
                    <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#fff] to-[#aaaaaa]">ZONBITA</span>
                    </a>

                  </div>

                  
              
                  <div className="flex-1 flex justify-center items-center ml-auto">
                  {openMenu }
                  <button onClick={_openMenu} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                  </button>

                    <div className="hidden absolute w-full md:block md:w-auto" id="mobile-menu">
                      <ul className="flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                        <li>
                          <a href="#" className="menu-headerLink">Home</a>
                        </li>
                        <li>
                          <a href="#" className="menu-headerLink">About</a>
                        </li>
                        <li>
                          <a href="#" className="menu-headerLink">Services</a>
                        </li>
                        <li>
                          <a href="#" className="menu-headerLink">Projects</a>
                        </li>
                        <li>
                          <a href="#" className="menu-headerLink">Contact</a>
                        </li>
                      </ul>
                    </div>

                  </div>
              </nav>
      


      </header>

 

     </>
    )
}