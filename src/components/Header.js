import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/context/UserContext";
import { useContext } from "react";
import useOnlineState from "../utils/customHooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineState();
  const { loggedInUser } = useContext(UserContext);
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between border-solid bg-gray-200 border-2 border-gray-400">
      <div className="w-14">
        <img className="" src={LOGO} />
      </div>
      <div>
        <ul className="flex">
          <li className="p-2 m-1">
            <h4>{`Online Status: ${onlineStatus ? "✅" : "🔴"}`}</h4>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <a>Login</a>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <a>Sign up</a>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <Link to="/cart">Cart: {`${cartItems.length} items`}</Link>
          </li>
          <li className="p-2 m-1 hover:bg-slate-400">
            <a>Loggedin User: {loggedInUser}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
