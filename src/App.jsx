import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AdminDashBoard from './AdminDashBoard';
import AddProduct from './adminpages/AddProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Mycart from './pages/Mycart';
import Checkout from './pages/Checkout';
import PaymentDone from './pages/PaymentDone';
import Orders from './adminpages/Orders';

// NEW IMPORTS
import ProductDetails from './pages/ProductDetails';   // Single product page
import Wishlist from './pages/Wishlist';               // Wishlist page

// Loader Component
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="w-12 h-12 border-4 border-gray-800 border-dashed rounded-full animate-spin"></div>
  </div>
);

// AppWrapper to use useLocation inside BrowserRouter
const AppWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="mycart" element={<Mycart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="paydone" element={<PaymentDone />} />
          
          {/* NEW ROUTES */}
          <Route path="product/:id" element={<ProductDetails />} /> 
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;