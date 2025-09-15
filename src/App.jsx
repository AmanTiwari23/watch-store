import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AdminDashBoard from './AdminDashBoard'
import AddProduct from './adminpages/AddProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import Mycart from './pages/Mycart'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='mycart' element={<Mycart/>}/>

      </Route>
    </Routes>

    <Routes>
      <Route path="/admin" element={<AdminDashBoard/>}>
      <Route path='addproduct' element={<AddProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App