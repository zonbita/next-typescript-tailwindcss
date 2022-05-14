import type { NextPage } from 'next'
import Footer from './Component/footer'
import Header from './Component/header'
import Home from './Home'


const Index: NextPage = () => {
  return (
    <><div className='bg-black overflow-y-auto overflow-x-hidden'>
      <Header/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default Index
