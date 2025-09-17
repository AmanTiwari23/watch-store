import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTocart } from "../cartSlice";
import { addToWishlist } from "../wishlistSlice";
import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card className="shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-xl relative">
      {/* Wishlist Heart */}
      <button
        className="absolute top-3 right-3 text-red-500 hover:scale-125 transition"
        onClick={() => dispatch(addToWishlist(product))}
      >
        <FaHeart size={22} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.image}
          className="h-56 object-cover rounded-t-xl"
        />
      </Link>

      <Card.Body>
        <Card.Title className="font-bold">{product.brand}</Card.Title>
        <Card.Text className="text-sm text-gray-700 line-clamp-1">
          {product.name}
        </Card.Text>

        {/* Rating */}
        <div className="flex text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) =>
            i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          )}
        </div>

        <p className="font-bold text-blue-900">₹{product.price}</p>
        <Button
          className="w-full mt-2"
          onClick={() => dispatch(addTocart({ ...product, qnty: 1 }))}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;