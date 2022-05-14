import React, { Suspense } from 'react'
import About from './About'
import Engine from './Engine'
import Video from './Video'



export default function Home(){
    return( 
        <>
        <About/>
        <Video/>
        <Engine/>
        </>
    )
}