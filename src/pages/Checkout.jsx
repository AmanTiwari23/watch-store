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
    products.push({ id: item.id, name: item.name });
    totalAmount += item.price * item.qnty;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:3000/checkout";
    let response = await axios.post(api, { ...input, products, totalAmount });
    console.log(response);
    navigate("/paydone");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Checkout</h1>
      <p className="text-gray-500 mb-6">Complete your order details below</p>

      <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left: Product Summary */}
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border rounded-lg overflow-hidden">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Product</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border">{item.id}</td>
                      <td className="px-4 py-2 border">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total */}
            <div className="mt-4 flex justify-between font-semibold text-lg">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>
          </CardContent>
        </Card>

        {/* Right: Checkout Form */}
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl">Shipping Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" name="name" onChange={handleInput} required />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input type="text" name="city" onChange={handleInput} required />
              </div>
              <div>
                <Label htmlFor="shipadd">Shipping Address</Label>
                <Input
                  type="text"
                  name="shipadd"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact">Contact No.</Label>
                <Input
                  type="text"
                  name="contact"
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipcode">Pin Code</Label>
                <Input
                  type="text"
                  name="zipcode"
                  onChange={handleInput}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Confirm & Pay ₹{totalAmount}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;