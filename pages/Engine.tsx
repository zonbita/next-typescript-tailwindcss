import Image from 'next/image'
import React from 'react'

interface Props {}

function Engine(props: Props) {
    const {} = props

    return (
        <div className="relative justify-center overflow-hidden mb-10 md:mb-15 px-4 md:px-12 lg:px-4 flex-col text-white jitems-center flex w-full h-full">
    <div className="max-w-[1200px] text-white relative flex flex-col w-full h-full">
        <h2 className="text-white text-center"><span className="text-primary">Engine</span></h2>
        <div className="gap-4 mt-6 flex-wrap flex justify-center items-center">
            <div className="w-[calc(100%/3)] md:w-[calc(100%/6)] px-2 py-4 h-[80px] flex justify-center items-center flex-col">
                <div className="justify-center flex flex-col w-full h-full"><span ><span ></span><Image src="/Image/tailwind.png" width={70} height={70} alt="logo" />
                    </span>
                </div>
            </div>
            <div className="w-[calc(100%/3)] md:w-[calc(100%/6)] px-2 py-4 h-[80px] flex justify-center items-center flex-col">
                <div className="justify-center flex flex-col w-full h-full"><span ><span ></span><img alt="logo" sizes="100vw" />
                    </span>
                </div>
            </div>
            <div className="w-[calc(100%/3)] md:w-[calc(100%/6)] px-2 py-4 h-[80px] flex justify-center items-center flex-col">
                <div className="justify-center flex flex-col w-full h-full"><span ><span ></span><img alt="logo" sizes="100vw" />
                    </span>
                </div>
            </div>
            <div className="w-[calc(100%/3)] md:w-[calc(100%/6)] px-2 py-4 h-[80px] flex justify-center items-center flex-col">
                <div className="justify-center flex flex-col w-full h-full"><span ><span ></span><img alt="logo" sizes="100vw" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Engine
