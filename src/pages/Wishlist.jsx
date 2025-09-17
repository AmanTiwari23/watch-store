import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../wishlistSlice";
import { addTocart } from "../cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (!wishlist.length) return <h2 className="text-center mt-10">Wishlist is Empty</h2>;

  return (
    <div className="w-[90%] m-auto py-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlist.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg shadow-md">
            <img src={p.image} alt={p.name} className="h-40 mx-auto" />
            <h2 className="font-bold mt-2">{p.name}</h2>
            <p>₹{p.price}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => dispatch(addTocart({ ...p, qnty: 1 }))}
                className="px-4 py-1 bg-blue-600 text-white rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => dispatch(removeFromWishlist(p.id))}
                className="px-4 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;