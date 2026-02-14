//Header
import { NEW_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
let x = 0;
const Header = () => {
  const name = ["login", "logout"];
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={NEW_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact us</Link></li>
          <li><Link to="/">cart</Link></li>
          
          <button
            className="login"
            onClick={() => {
              x = 1 - x;
              setBtnName(name[x]);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
