import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <>
    <div id='adminheader' className='w-full h-24 bg-black text-white text-center pt-2'>
       <h1>Welcome To Admin DashBoard</h1>
    </div>
    <div id='adminwrapper' className='flex justify-between'>
       <div id='leftmenu' className='w-[25%] bg-gray-900 h-[600px] p-5'>
         <Link to='addproduct' className='font-bold text-white no-underline' style={{textDecoration:"none"}}>Upload Product</Link>
       </div>
       <div id='admindata' className='w-[85%] p-8'>
        <Outlet/>
       </div>

    </div>


    </>
  )
}

export default AdminDashBoard