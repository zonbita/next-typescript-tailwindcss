import Image from 'next/image'
import React from 'react'
import C_EngineItem from '../Components/C_EngineItem'

function Engine() {
    return (
        <div className="relative justify-center overflow-hidden  flex-col text-white items-center flex w-full h-full ">
        <div className="max-w-[1200px] text-white relative flex flex-col w-full h-full m-20 md:m-15 px-4 md:px-15 lg:p-4">
        <h2 className="text-white text-center up"><span className="text-primary uppercase">Languages</span><span className='uppercase'> and Tool</span></h2>
        <div className='bar-1 w-10'/>
        <div className="gap-10 mt-20 flex-wrap flex justify-center items-center">
            <C_EngineItem picture='javascript'/>
            <C_EngineItem picture='typescript'/>
            <C_EngineItem picture='nodejs'/>
            <C_EngineItem picture='reactjs'/>
            <C_EngineItem picture='php'/>
            <C_EngineItem picture='tailwind'/>
            <C_EngineItem picture='sass'/>
            <C_EngineItem picture='html5'/>
            <C_EngineItem picture='c++'/>
            <C_EngineItem picture='csharp'/>
            <C_EngineItem picture='wordpress'/>
            <C_EngineItem picture='mysql'/>
            <C_EngineItem picture='mongodb'/>
            <C_EngineItem picture='firebase'/>
            <C_EngineItem picture='github'/>
            <C_EngineItem picture='gitlab'/>
        </div>
        </div>
        </div>
    )
}

export default Engine
