import React from 'react'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    
    <div className='container mt-5'>

    <Outlet></Outlet>
    </div>
    </>
  )
}
