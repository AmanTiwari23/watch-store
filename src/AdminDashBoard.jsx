import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <>
    <div id='adminheader' className='w-full h-24 bg-black text-white text-center pt-2'>
       <h1>Welcome To Admin DashBoard</h1>
    </div>
    <div id='adminwrapper' className='flex justify-between'>
       <div id='leftmenu' className='w-[25%] bg-gray-900 h-[600px] text-center flex flex-col  '>
         <Link to='addproduct' className='font-bold text-white !no-underline border border-gray-200 w-full p-4 hover:bg-gray-500' >Upload Product</Link>
          <Link to='orders' className='font-bold text-white !no-underline border border-gray-200 w-full p-4 hover:bg-gray-500'>Order List</Link>
          <Link to='/' className='font-bold text-white !no-underline border border-gray-200 w-full p-4 hover:bg-gray-500'>Logout</Link>

       </div>
       <div id='admindata' className='w-[75%] p-8'>
        <Outlet/>
       </div>

    </div>


    </>
  )
}

export default AdminDashBoard