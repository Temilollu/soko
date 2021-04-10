import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { sidebarItems, Items } from "./constants";
import Cart from "../cart/Cart";

const Home = () => {
  const [currItem, setCurrItem] = useState("Bags");
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView();
  }, [currItem]);

  return (
    <div className="home">
      <div className="search">
        <input type="text" name="" id="" placeholder="Search for products" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="home-container">
        <div className="sidebar">
          {sidebarItems.map((item) => {
            return (
              <div
                key={item.name}
                onClick={() => setCurrItem(item.name)}
                className={currItem === item.name ? "active" : "inactive"}
              >
                {item.name} <span>({item.available})</span>
              </div>
            );
          })}
        </div>
        <div className="content" ref={myRef}>
          {Items[currItem]}
        </div>
        <div className="bag">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
