import React from 'react'
import TopHeader from './components/TopHeader'
import TopMenu from './components/TopMenu'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
    <TopHeader/>
    <TopMenu/>
    <hr />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;