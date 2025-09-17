import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTocart } from "../cartSlice";
import { addToWishlist } from "../wishlistSlice";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-8">
      {/* Image */}
      <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.brand}</h1>
        <p className="text-lg text-gray-700 mb-4">{product.name}</p>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) =>
            i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          )}
        </div>

        <p className="text-xl font-semibold text-red-600">₹{product.price}</p>
        <p className="text-sm text-gray-600 mb-4">Category: {product.category}</p>
        <p className="text-sm text-gray-500 mb-6">{product.description}</p>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(addTocart({ ...product, qnty: 1 }))}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition flex items-center gap-2"
          >
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;