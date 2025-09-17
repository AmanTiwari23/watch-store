import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

const Checkout = () => {
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const cartdata = useSelector((store) => store.mycart.cart);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  let products = [];
  let totalAmount = 0;

  cartdata.forEach((item) => {
    products.push({ 
      id: item.id, 
      name: item.name, 
      price: item.price, 
      quantity: item.qnty,
      image: item.image 
    });
    totalAmount += item.price * item.qnty;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let api = "http://localhost:3000/checkout";
      let response = await axios.post(api, { ...input, products, totalAmount });
      console.log(response);
      navigate("/paydone");
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const subtotal = totalAmount;
  const shipping = 0;
  const tax = Math.round(totalAmount * 0.18); // 18% GST
  const finalTotal = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="w-20 h-1 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">
              3
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Review your order and complete your purchase</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Order Summary - Takes 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Items */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
                    1
                  </span>
                  Order Items ({products.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartdata.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-gray-600 text-sm">Quantity: {item.qnty}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{(item.price * item.qnty).toLocaleString()}</p>
                        <p className="text-gray-500 text-sm">₹{item.price} each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Form */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
                    2
                  </span>
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input 
                        type="text" 
                        name="name" 
                        onChange={handleInput} 
                        required 
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-sm font-semibold text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        type="tel"
                        name="contact"
                        onChange={handleInput}
                        required
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shipadd" className="text-sm font-semibold text-gray-700">
                      Street Address *
                    </Label>
                    <Input
                      type="text"
                      name="shipadd"
                      onChange={handleInput}
                      required
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="House no, Street, Area"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-semibold text-gray-700">
                        City *
                      </Label>
                      <Input 
                        type="text" 
                        name="city" 
                        onChange={handleInput} 
                        required 
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipcode" className="text-sm font-semibold text-gray-700">
                        PIN Code *
                      </Label>
                      <Input
                        type="text"
                        name="zipcode"
                        onChange={handleInput}
                        required
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="6 digit PIN code"
                        maxLength="6"
                      />
                    </div>
                  </div>

                  {/* Submit Button for Mobile */}
                  <div className="lg:hidden">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <>Complete Order • ₹{finalTotal.toLocaleString()}</>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({products.length} items)</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (GST 18%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Secure Checkout
                    </div>
                    <p className="text-green-600 text-sm">Your payment information is protected with SSL encryption</p>
                  </div>

                  {/* Desktop Submit Button */}
                  <div className="hidden lg:block pt-4">
                    <Button
                      type="submit"
                      form="checkout-form"
                      disabled={isLoading}
                      onClick={handleSubmit}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Complete Order • ₹{finalTotal.toLocaleString()}
                        </div>
                      )}
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex justify-center gap-4 pt-4 opacity-75">
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                      </svg>
                      Cards
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 1-1-4 .257-.257A6 6 0 1118 8zm-6-2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      UPI
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Wallet
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;