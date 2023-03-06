import React from 'react'
import { ANavBar } from './ANavbar'

const Layout = ({children}) => {
  return (
    <>
    <ANavBar />
    {children}
    </>
  )
}

export default Layout