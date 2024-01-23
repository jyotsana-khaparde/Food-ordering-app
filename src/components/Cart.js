import { useDispatch, useSelector } from "react-redux";

import { CDN_IMAGE } from "../utils/constant";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <button
        onClick={handleClearCart}
        className="bg-black text-white rounded-md p-2 m-2"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Cart is empty, please add items to the cart</h1>
      )}
      {cartItems.map((cartItem) => (
        <div className="border-t-2 p-4 m-2 flex justify-between">
          <div className="w-7/12 text-left">
            <h2 className="font-medium">{cartItem.name}</h2>
            <h6 className="text-xs">{cartItem.description}</h6>
            <h5 className="font-thin">₹ {cartItem.price / 100}</h5>
          </div>
          <div className="w-3/12">
            <img
              className="rounded-lg"
              src={`${CDN_IMAGE}${cartItem.imageId}`}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
