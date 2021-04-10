import React from "react";
import "./header.css";
import bag from "../../assets/download.png";
import order from "../../assets/download (1).png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  return (
    <header className="header-container">
      <p className="blue-header">Store made with soko</p>
      <nav>
        <p style={{ width: "50%" }}>
          <span className="heading">Target</span> <br /> Kisuule Rise, Kampala,
          Uganda
        </p>
        <ul style={{ width: "26%" }}>
          <Link to="/bag">
            <li className="bag-container">
              <img src={bag} alt="" />{" "}
              <span className="count">{cartItems.length}</span>{" "}
              <span>Bag </span>
            </li>
          </Link>
          <li>
            <img src={order} alt="" /> <span>Orders </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
