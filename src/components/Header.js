import {LOGO} from "../utils/constant"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        {/* <div className="logo-container"> */}
        <img
          className="logo"
          src={LOGO}
        />
        {/* </div> */}
        {/* <div className="header-location"> */}
        <input type="search"></input>
        {/* </div> */}
      </div>
      <div className="header-center">
        <input type="search"></input>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a>Sortings</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
          <li>
            <a>Add to cart</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
