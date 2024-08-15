import React from 'react'
import Navbardesign from '../MainLayout/Navbar'
import Footerdesign from '../MainLayout/Footer'
import { Outlet } from 'react-router-dom'


function Rootlayouts() {
  return (
    <>
      <Navbardesign />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footerdesign />
    </>
    
  )
}

export default Rootlayouts