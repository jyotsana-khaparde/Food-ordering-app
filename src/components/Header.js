import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineState();

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
        </ul>
      </div>
    </div>
  );
};

export default Header;
