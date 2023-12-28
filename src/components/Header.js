import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img
          className="logo"
          src={LOGO}
        />
      </div>
      <div className="header-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
