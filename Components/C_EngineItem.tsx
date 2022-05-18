import React from 'react'
import Image from 'next/image'

interface Props {
    picture?: string,
}

function C_EngineItem(props: Props) {
    const {} = props

    return (
        <div className="w-[calc(100%/3)] md:w-[calc(100%/6)] px-2 py-4 h-[80px] flex justify-center items-center flex-col" data-aos='fade-up' data-aos-once='false'>
        <div className="justify-center flex flex-col w-full h-full">
            <span ><Image loading='lazy' src={`/Image/${props.picture}.png`} width={70} height={70} alt="logo" /></span>
        </div>
        </div>
    )
}

export default C_EngineItem
