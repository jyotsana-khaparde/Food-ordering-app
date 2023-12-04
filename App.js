import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - left
 *    - Logo component
 *    - Location component
 *  - center
 *    - Search component
 *  - right
 *    - Sortings component
 *    - Login
 *    - Sign up
 *    - Add to cart
 *    - Contact Us
 * Body
 * - Resturant card component
 * Footer
 * - Help component
 * - Addresses component
 * - Contact component
 */

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        {/* <div className="logo-container"> */}
        <img className="logo" src="data:image/jpeg;base64,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" />
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
            <li><a>Sortings</a></li>
            <li><a>Login</a></li>
            <li><a>Sign up</a></li>
            <li><a>Add to cart</a></li>
            <li><a>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
    
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <body />
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
