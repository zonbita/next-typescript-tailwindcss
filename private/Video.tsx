import Link from 'next/link'
import React from 'react'
Link
function Video() {
    return (
        <>
<div id="VideoSection">
    <div className="md:bg-repeat-x md:bg-cover">
        <div className="relative justify-center overflow-hidden mb-10 md:mb-15 px-4 md:px-12 lg:px-4 items-center md:mb-0 text-center flex w-full h-full">
            <div className="max-w-[1200px] text-white relative flex flex-col w-full h-full">
                <h2 className="text-white text-shadow-md mt-10">NFT COIN</h2>
            </div>
        </div>
        <div className="relative justify-center overflow-hidden mb-10 md:mb-15 px-4 md:px-12 lg:px-4  flex w-full h-full">
            <div className="max-w-[1200px] text-white relative flex flex-col w-full h-full">
              
                <div className='grid md:grid-cols-2 items-center'>
                    <div className='flex flex-col justify-start items-center p-5' data-aos='fade-up'>
                        <h3 className="text-white mb-4 text-h4 md:text-h3 text-center md:text-left mt-2 md:mt-0">About the game</h3>
                        <p className="text-white text-table opacity-80 mb-8 text-center md:text-left">Backed by the blockchain, gives you complete ownership over your in-game assets. Every successful capture, farmed material, or crafted item is a non-fungible token (NFT) minted and stored in your crypto wallet. Each NFT is verifiable on the Ethereum blockchain, proving your ownership of that digital asset. By having true custody of your assets—versus them belonging to the game—you have the power to collect and trade NFTs in the marketplace at your discretion..</p>
                        <p className="text-white text-table opacity-80 mb-[42px] text-center md:text-left"> Play2Earn economy and addictive gameplay mechanics.</p>
                        <div className="md:max-w-[80%] md:flex-row justify-center items-center md:justify-start md:items-start gap-8 flex flex-col">
                            <Link  target="_blank" className="hover:text-primary " href="https://">
                                <button className="button_button button_primary button_md__gRK3_ uppercase flex-1 w-[220px] md:w-auto text-[14px] rounded">
                                    <div className="button_volume"></div>
                                    <div className="button_overlay"></div>
                                    <div className="z-10  flex justify-center items-center w-full h-full">Play Demo</div>
                                </button>
                            </Link >
                            <Link target="_blank" className="hover:text-primary " href="https://">
                                <button className="button_button button_secondarybutton_md__gRK3_ uppercase flex-1 w-[220px] md:w-auto text-[14px] rounded">
                                    <div className="button_volume"></div>
                                    <div className="button_overlay"></div>
                                    <div className="z-10  flex justify-center items-center w-full h-full">Read Whitepaper</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    

                    <div className='flex flex-col justify-start items-center p-0 md:p-5 w-[400px] mx-6 md:w-full h-full' data-aos='fade-up'>
       
                   
                                 
                          
                    </div>

   



  
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Video
