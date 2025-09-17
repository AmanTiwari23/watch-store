import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import ban1 from "../images/b1.avif";
import ban2 from "../images/b2.avif";
import ban3 from "../images/b3.avif";
import ban4 from "../images/b4.avif";

const Home = () => {
  const [products, setProducts] = useState([]);
  let api=`${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {
    axios.get(api).then((res) => setProducts(res.data));
  }, []);

  // Smooth scroll function
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('top-collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        <Carousel interval={4000} controls={false} indicators={false} fade>
          {[ban1, ban2, ban3, ban4].map((b, i) => (
            <Carousel.Item key={i}>
              <div className="relative h-[70vh] md:h-[80vh]">
                <img
                  src={b}
                  alt="banner"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                      Premium Timepieces
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
                      Discover Watches That Define Your Style
                    </p>
                    <button 
                      onClick={scrollToCollection}
                      className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      Shop Collection
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Top Collection */}
      <section id="top-collection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Top Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group hover:scale-105 transition-transform duration-300">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Watches
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked timepieces that showcase exceptional craftsmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.slice(0, 3).map((p, index) => (
              <div 
                key={p.id} 
                className="group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
              <span className="text-amber-800 font-semibold text-sm tracking-wide uppercase">
                🔥 Trending Now
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Sellers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customer favorites that never go out of style
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.slice(3, 6).map((p, index) => (
              <div 
                key={p.id} 
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative hover:scale-105 transition-transform duration-300">
                  <ProductCard product={p} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20" />
          <div className="absolute top-1/4 right-1/4 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-4">
              <span className="text-emerald-300 font-semibold text-sm tracking-wide uppercase">
                ✨ Just Arrived
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The latest additions to our premium collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.slice(6, 9).map((p, index) => (
              <div 
                key={p.id} 
                className="group hover:scale-105 transition-all duration-500 hover:drop-shadow-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-lg">Based on 1,000+ verified reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Amazing quality watches! The craftsmanship is exceptional and delivery was super fast.", name: "Rahul", rating: 5, location: "Mumbai" },
              { text: "Fast delivery and great packaging. Customer service is outstanding!", name: "Sneha", rating: 5, location: "Delhi" },
              { text: "Best collection of premium watches online! Highly recommended.", name: "Aman", rating: 5, location: "Bangalore" },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-medium">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;