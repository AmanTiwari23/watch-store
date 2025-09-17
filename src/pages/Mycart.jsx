import React from "react";
import { FaPlusSquare, FaMinusSquare, FaRupeeSign, FaTrash, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartDataRemove, decQnty, incQnty } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const Mycart = () => {
  const cartdata = useSelector((store) => store.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  let TotalAmount = 0;
  cartdata.forEach((item) => {
    TotalAmount += item.price * item.qnty;
  });

  if (!cartdata.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6 text-6xl">🛒</div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Add some items to your cart to get started!</p>
          <button 
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <FaShoppingBag className="text-blue-600" />
            Shopping Cart
          </h1>
          <p className="text-gray-600">{cartdata.length} item{cartdata.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Price</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">Quantity</th>
                      <th className="text-right py-4 px-6 font-semibold text-gray-700">Total</th>
                      <th className="w-16 py-4 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartdata.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-6 px-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
                              <div className="flex gap-4 mt-1 text-sm text-gray-500">
                                <span>Brand: {item.brand}</span>
                                <span>Category: {item.category}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-6">
                          <div className="flex items-center gap-1 font-semibold text-gray-900">
                            <FaRupeeSign className="text-sm" />
                            {item.price.toLocaleString()}
                          </div>
                        </td>
                        <td className="py-6 px-6">
                          <div className="flex items-center justify-center gap-3">
                            <button
                              onClick={() => dispatch(decQnty({ id: item.id }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              disabled={item.qnty <= 1}
                            >
                              <FaMinusSquare />
                            </button>
                            <span className="w-8 text-center font-semibold text-gray-900">{item.qnty}</span>
                            <button
                              onClick={() => dispatch(incQnty({ id: item.id }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                            >
                              <FaPlusSquare />
                            </button>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-right">
                          <div className="flex items-center justify-end gap-1 font-bold text-lg text-gray-900">
                            <FaRupeeSign className="text-sm" />
                            {(item.price * item.qnty).toLocaleString()}
                          </div>
                        </td>
                        <td className="py-6 px-6">
                          <button
                            onClick={() => dispatch(cartDataRemove({ id: item.id }))}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove item"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {cartdata.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <div className="text-sm text-gray-500 mb-2">
                          <div>{item.brand} • {item.category}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 font-semibold text-gray-900">
                            <FaRupeeSign className="text-xs" />
                            {item.price.toLocaleString()}
                          </div>
                          <button
                            onClick={() => dispatch(cartDataRemove({ id: item.id }))}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => dispatch(decQnty({ id: item.id }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                              disabled={item.qnty <= 1}
                            >
                              <FaMinusSquare />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.qnty}</span>
                            <button
                              onClick={() => dispatch(incQnty({ id: item.id }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-green-500 transition-colors"
                            >
                              <FaPlusSquare />
                            </button>
                          </div>
                          <div className="flex items-center gap-1 font-bold text-lg text-gray-900">
                            <FaRupeeSign className="text-sm" />
                            {(item.price * item.qnty).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartdata.length} items)</span>
                  <div className="flex items-center gap-1">
                    <FaRupeeSign className="text-xs" />
                    {TotalAmount.toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <div className="flex items-center gap-1">
                    <FaRupeeSign className="text-lg" />
                    {TotalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              <button
                onClick={checkout}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <button
                  onClick={() => navigate("/")}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;