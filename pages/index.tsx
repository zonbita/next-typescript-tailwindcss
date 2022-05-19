import type { NextPage } from 'next'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Home from '../private/Home'
import React from 'react';

const Index: NextPage = () => {
  return (
      <>
      <div className='background-color3 overflow-y-auto overflow-x-hidden'>
      <Header/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default Index
