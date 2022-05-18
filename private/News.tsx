import Image from 'next/image'
import React from 'react'

interface Props {}

function News(props: Props) {
    const {} = props

    return (
        <>
            <div className='relative flex justify-center items-center py-20'>
                <div className='max-w-[1200px] text-white w-full h-full'>
                    <div className=''>
                        <div className='grid md:grid-cols-2 w-full gap-5 p-5 md:p-0'>
                            
                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                                <div className='border-[7px] border-[#5d47d4] shadow-2xl'>
                                    <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs1.jpg`} width={500} height={300} alt="logo" />
                                </div>
                                <div className='mt-10 leading-7 p-5'>
                                    <p className="">Earn crypto in ZON tokens as 
                                    <span className="">in-game rewards</span>
                                    through playing, completing PVE quests, performing special achievements, and 
                                    <span className="">win prizes</span> in tournaments and events.</p>
                                </div>
                            </div>

                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                            <div className='border-[7px] border-[#5d47d4] shadow-2xl'><Image layout='intrinsic' loading='lazy' src={`/Image/nextjs2.jpg`} width={500} height={300} alt="logo" /></div>
                                    <div className='mt-10 leading-7 p-5'>
                                        <p className="">Earn crypto in ZON tokens as 
                                        <span className="">in-game rewards</span>
                                        through playing, completing PVE quests, performing special achievements, and 
                                        <span className="">win prizes</span> in tournaments and events.</p>
                                    </div>
                            </div>


                        </div>
                    </div>


                    <div className='py-10'>

                        <div className='grid md:grid-cols-3 w-full gap-5 p-5 md:p-0'>
                            
                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                                <div className='border-[7px] border-[#5d47d4] shadow-2xl'>
                                    <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs1.jpg`} width={500} height={300} alt="logo" />
                                </div>
                                <div className='mt-10 leading-7 p-5'>
                                    <p className="">Earn crypto in ZON tokens as 
                                    <span className="">in-game rewards</span>
                                    through playing, completing PVE quests, performing special achievements, and 
                                    <span className="">win prizes</span> in tournaments and events.</p>
                                </div>
                            </div>

                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                            <div className='border-[7px] border-[#5d47d4] shadow-2xl'><Image layout='intrinsic' loading='lazy' src={`/Image/nextjs2.jpg`} width={500} height={300} alt="logo" /></div>
                                    <div className='mt-10 leading-7 p-5'>
                                        <p className="">Earn crypto in ZON tokens as 
                                        <span className="">in-game rewards</span>
                                        through playing, completing PVE quests, performing special achievements, and 
                                        <span className="">win prizes</span> in tournaments and events.</p>
                                    </div>
                            </div>

                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                            <div className='border-[7px] border-[#5d47d4] shadow-2xl'><Image layout='intrinsic' loading='lazy' src={`/Image/nextjs2.jpg`} width={500} height={300} alt="logo" /></div>
                                    <div className='mt-10 leading-7 p-5'>
                                        <p className="">Earn crypto in ZON tokens as 
                                        <span className="">in-game rewards</span>
                                        through playing, completing PVE quests, performing special achievements, and 
                                        <span className="">win prizes</span> in tournaments and events.</p>
                                    </div>
                            </div>

                        </div>
                    </div>


                    <div className='py-10'>
                            
                            <div className='filter-1 box-content-1 pt-5 md:p-12 flex justify-center items-center flex-col' data-aos='fade-up'>
                                <div className='border-[7px] border-[#5d47d4] shadow-2xl shadow-[#adff6a]'>
                                    <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs2.jpg`} width={500} height={300} alt="logo" />
                                </div>


                                <div className='grid md:grid-cols-3 w-full gap-5 p-5 md:p-0'>
                                    <div className='pt-10'>
                                        <div className='border-[7px] border-[#5d47d4] shadow-2xl shadow-[#0b83a7]'>
                                            <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs1.jpg`} width={500} height={300} alt="logo" />
                                        </div>
                                    </div>
                                    <div className='pt-10'>
                                        <div className='border-[7px] border-[#5d47d4] shadow-2xl shadow-[#0ba785]'>
                                            <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs1.jpg`} width={500} height={300} alt="logo" />
                                        </div>
                                    </div>
                                    <div className='pt-10'>
                                        <div className='border-[7px] border-[#5d47d4] shadow-2xl shadow-[#0b54a7]'>
                                            <Image layout='intrinsic' loading='lazy' src={`/Image/nextjs1.jpg`} width={500} height={300} alt="logo" />
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-10 leading-7 p-5'>
                                    <p className="">Earn crypto in ZON tokens as 
                                    <span className="">in-game rewards</span>
                                    through playing, completing PVE quests, performing special achievements, and 
                                    <span className="">win prizes</span> in tournaments and events.</p>
                                </div>
                            </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default News
