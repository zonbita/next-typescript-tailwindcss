import React from 'react'
import Footer from './footer'
import Header from './header'


function Layout(component: any) {

    return (
        <>
        <Header/>
        {component}
        <Footer/>
        </>
    )
}

export default Layout
