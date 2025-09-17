import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import ban1 from "../images/ban1.webp";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.webp";
import ban4 from "../images/ban4.webp";
import ban5 from "../images/ban5.webp";
import ban6 from "../images/ban6.webp";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      {/* Carousel */}
      <Carousel interval={3000}>
        {[ban1, ban2, ban3, ban4, ban5, ban6].map((b, i) => (
          <Carousel.Item key={i}>
            <img src={b} alt="banner" className="w-full h-[500px] object-cover" />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Top Collection */}
      <h1 className="text-center text-3xl font-bold my-8">Our Top Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] m-auto">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Featured Section */}
      <section className="bg-gray-100 py-10 mt-10">
        <h2 className="text-center text-2xl font-bold mb-6">Featured Watches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] m-auto">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-white py-10">
        <h2 className="text-center text-2xl font-bold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] m-auto">
          {products.slice(3, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-center text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] m-auto">
          {products.slice(6, 9).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-10">
        <h2 className="text-center text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 w-[90%] m-auto">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p>"Amazing quality watches! Totally worth it."</p>
            <p className="mt-2 font-bold">- Rahul</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p>"Fast delivery and great packaging."</p>
            <p className="mt-2 font-bold">- Sneha</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p>"Best collection of premium watches online!"</p>
            <p className="mt-2 font-bold">- Aman</p>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Home;