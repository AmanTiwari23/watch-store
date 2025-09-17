import React, { useEffect, useState } from "react";
import axios from "axios";

// shadcn/ui components
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Orders = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/checkout";
    let response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Orders
      </h1>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {mydata.map((order, index) => (
          <Card
            key={order.id}
            className="shadow-md hover:shadow-xl transition rounded-2xl border border-gray-200"
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">
                  Order #{index + 1}
                </CardTitle>
                <Badge className="bg-blue-600 text-white">
                  ₹{order.totalAmount}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* User Info */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Name:</span> {order.name}
                </p>
                <p>
                  <span className="font-semibold">City:</span> {order.city}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> {order.contact}
                </p>
                <p>
                  <span className="font-semibold">Pincode:</span> {order.zipcode}
                </p>
              </div>

              {/* Address */}
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Shipping Address:</span>{" "}
                {order.shipadd}
              </p>

              {/* Products */}
              <div>
                <p className="font-semibold mb-2 text-gray-800">Products:</p>
                <ul className="space-y-1">
                  {order.products.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between text-sm bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      <span>
                        {p.id} - {p.name}
                      </span>
                      <Badge variant="secondary">Item</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Orders;
