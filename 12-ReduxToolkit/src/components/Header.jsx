//Header
import { LOGO_URL } from "../utils/constants";
import NEW_LOGO from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
let x = 0;
const Header = () => {
  const name = ["login", "logout"];
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header flex justify-between drop-shadow bg-orange-200">
      <div className="logo-container ">
        <img className="logo w-32" src={NEW_LOGO} />
      </div>
      <div className="nav-items    flex items-center  ">
        <ul className="flex items-center  m-3 text-lg">
          <Link to={"/"}>
          <li className="m-3 hover:opacity-40 ">home</li>
          </Link>
          <Link to={"/about"}>
          <li className="m-3 hover:opacity-40 ">about</li>
          </Link>
          <li className="m-3 hover:opacity-40 ">contact us</li>
          <li className="m-3 hover:opacity-40 ">cart</li>

          <button
            className="rounded-lg m-5  bg-blue-500 text-white px-4 py-2"
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
