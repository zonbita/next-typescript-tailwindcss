import React, { Suspense, useEffect, useState } from 'react'
import About from './About'
import Engine from './Engine'
import Video from './Video'
import Projects from '../private/Projects'
import News from './News'
import Link from 'next/link'
import Pokemon from './Pokemon'


export default function Home(){

    return( 
        <>
        <About/>
        <Pokemon/>
        <Projects/>
        <Video/>
        <News/>
        <Engine/>
        </>
    )
}
