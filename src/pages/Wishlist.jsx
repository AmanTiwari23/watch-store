import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../wishlistSlice";
import { addTocart } from "../cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (!wishlist.length) 
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 text-6xl">💝</div>
          <h2 className="text-3xl font-bold text-gray-700 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-500">Start adding items you love to see them here!</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in your wishlist</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((p) => (
            <div 
              key={p.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative bg-gray-100 h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => dispatch(removeFromWishlist(p.id))}
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors duration-200"
                    title="Remove from wishlist"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
                  {p.name}
                </h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">₹{p.price.toLocaleString()}</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => dispatch(addTocart({ ...p, qnty: 1 }))}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 6M7 13l2.5 6m10-6v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;