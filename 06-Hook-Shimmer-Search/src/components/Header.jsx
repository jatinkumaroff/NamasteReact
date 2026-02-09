//Header
import { LOGO_URL } from "../utils/constants";
import NEW_LOGO from "../utils/constants";
import { useState } from "react";
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
          <li>
            home
            {console.log(
              "to check if the whole component reloads on state change",
            )}
          </li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
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
