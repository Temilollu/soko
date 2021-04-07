import React, { useState } from "react";
import "./Home.css";
import { sidebarItems, Items } from "./constants";

const Home = () => {
  const [currItem, setCurrItem] = useState("Electronics");

  return (
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
      <div className="content">{Items[currItem]}</div>
      <div className="bag">asdas</div>
    </div>
  );
};

export default Home;
