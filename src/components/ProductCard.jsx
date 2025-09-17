import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../cartSlice";
import { addToWishlist } from "../wishlistSlice";
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-amber-400" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 backdrop-blur-sm">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 z-10 pointer-events-none" />
      
      {/* Wishlist Button */}
      <button
        onClick={() => {
          setIsWishlisted(!isWishlisted);
          dispatch(addToWishlist(product));
        }}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/20"
      >
        {isWishlisted ? (
          <FaHeart className="text-red-500 w-5 h-5 animate-pulse" />
        ) : (
          <FaRegHeart className="text-gray-500 hover:text-red-500 w-5 h-5 transition-colors duration-300" />
        )}
      </button>

      {/* Sale Badge */}
      {product.originalPrice && (
        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="px-6 py-2 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-full hover:bg-white transition-all duration-300 transform scale-90 group-hover:scale-100">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="relative p-6 z-10">
        {/* Brand */}
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            {product.brand}
          </span>
          {product.isNew && (
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
              New
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {renderStars(product.rating || 4)}
          </div>
          <span className="text-gray-500 text-sm font-medium">
            ({product.rating || 4})
          </span>
          <span className="text-gray-400 text-sm">
            • {product.reviewCount || '124'} reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price?.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ₹{product.originalPrice?.toLocaleString()}
            </span>
          )}
        </div>

        {/* Features/Tags */}
        {product.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addTocart({ ...product, qnty: 1 }))}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group/btn"
        >
          <FaShoppingCart className="w-5 h-5 group-hover/btn:animate-bounce" />
          <span>Add to Cart</span>
        </button>

        {/* Additional Actions */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button className="py-2 px-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-sm">
            Compare
          </button>
          <button className="py-2 px-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 text-sm">
            Share
          </button>
        </div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -inset-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none" />
    </div>
  );
};

export default ProductCard;