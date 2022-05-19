import Image from 'next/image';
import React from 'react'

function About() {
    const styles = {
        container: {
            backgroundImage: "url(https://raw.githubusercontent.com/zonbita/zonbita/main/392777.jpg)",
        },
      };

    return (
        <section id='About'>     
            <div className="min-h-[100vh] h-fit relative flex justify-center items-center flex-col">
                <div className="bg-space absolute top-0 left-0 flex flex-col w-full h-full bg-cover bg-no-repeat bg-bottom" style={styles.container} />

                    <div className='relative justify-center overflow-hidden mb-10 md:mb-15 px-4 md:px-12 lg:px-4 portrait:max-h-[calc(100vh-100px)] lg:max-h-[100vh] md:mb-4 flex w-full h-full'>
                        <div className='max-w-[1200px] text-white relative flex flex-col w-full h-full'>
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
 

                            <div className=' hover-1 bg-gradient-to-t from-[#2372b34f] via-[#533a64d0] to-[#015170] p-6 rounded-tl-[20px] rounded-br-[20px] flex-col items-center md:justify-between md:flex-row flex w-full h-full'>
                                <div className='w-full h-full'>
                                    <div className=' border-2 border-[#116688] hover:border-[#1fc0ff] rounded-tl-[20px] rounded-br-[20px] -m-5 p-4 flex1 flex flex-col w-ful items-center'>
                                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00a537] to-[#fcf700] ">
                                         ZONBITA DEVELOPER
                                        </h1>
                                            <div className='flex justify-center items-center p-10'>
                                                <img src={`/Image/dev.png`} className='w-[300px] h-[200px]' />
                                            </div>
                                            <code className="rounded-md bg-[#00747c] mx-3 font-mono text-lg button_1">
                                                Full-Stack 
                                            </code> 
                                            <p className=" mt-3 text-2xl py-6 text-white">
                                            Reactjs, Nextjs, ExpressJS, JavaScript<br/>
                                            Html, CSS, Sass, TailwindCss, Php, Java...
                                            </p>
                                        <div className="mt-6 flex justify-center items-center">
                                            <a className="flex cursor-pointer">
                                                <button className="uppercase w-full">
                                                    <div className="z-10 chu-vang hover:bg-[#ac8c49]  flex justify-center items-center w-full h-full">Watch More </div>
                                                </button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

            </div>
        </section>
    )
}

export default About
