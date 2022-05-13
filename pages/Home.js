import React, { Suspense } from 'react'



export default function Home(){
    return( 
        <div className="background-color bg-[url('https://raw.githubusercontent.com/zonbita/zonbita/main/392777.jpg')] w-auto">


        <main className="flex w-full min-h-[500px] lg:min-h-[700px] flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#005ba5] to-[#019aa5] ">
            ZONBITA 
            </h1>
            
            <p className=" mt-3 text-2xl py-6 text-white">
                Ready to Control? Press 
                <code className="rounded-md bg-[#00747c] mx-3 font-mono text-lg button_1">
                A W S D 
                </code> 
                to play this object
            </p>
            <button className='text-30 px-6 py-2 font-bold rounded-md bg-[#189738] hover:bg-[#0e7928] text-white uppercase translate-all duration-300'>Start Now</button>
        </main>

        
        </div>
    )
}