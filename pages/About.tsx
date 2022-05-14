import React from 'react'

function About() {

    return (
        <>
                <div className="bg-[url('https://raw.githubusercontent.com/zonbita/zonbita/main/392777.jpg')] w-auto">
                

                    <div className="flex w-full min-h-[500px] lg:min-h-[700px] flex-1 flex-col items-center justify-center px-20 text-center">
                        
                        <div>

                            <div className='flex flex-col'>
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
                                <button className='text-30 px-6 py-2 font-bold rounded-md chu-vang hover:bg-[#0e7928] text-white uppercase translate-all duration-300'>Start Now</button>
                            </div>
                            <div className="justify-between md:justify-normal w-full md:w-auto max-w-[360px] md:max-w-none mt-2 gap-2 md:gap-6 md:mt-0 flex-col md:flex-row items-center flex"></div>
                            <div className='flex flex-col'>
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
                            </div>

                          
                        </div>
                    </div>

            </div>
        </>
    )
}

export default About
