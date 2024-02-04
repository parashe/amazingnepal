import React from 'react'
import { Navbar } from './UI/Navbar/Navbar'
import { Footer } from './UI/Footer/Footer'


interface Props {
    children: React.ReactNode
}

const Layout = ( {children}: Props) => {
  return (
    
    <>
   
    {/* <Navbar/> */}
    {children}
    {/* <Footer/> */}
    </>
  )
}
export default Layout;