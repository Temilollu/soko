import React from "react";
import "./header.css";
import bag from "../../assets/download.png";
import order from "../../assets/download (1).png";
const Header = () => {
  return (
    <header className="header-container">
      <p className="blue-header">Store made with soko</p>
      <nav>
        <p>
          <span className="heading">Target</span> <br /> Kisuule Rise, Kampala, Uganda
        </p>
        <ul>
          <li>
            <img src={bag} alt="" /> <span>Bag</span>
          </li>
          <li>
            <img src={order} alt="" /> <span>Orders </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
