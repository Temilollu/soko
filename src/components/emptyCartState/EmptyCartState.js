import React from "react";
import "./EmptyCartState.css";
import EmtyImg from "../../assets/group@3x 3.2d2dde74.jpg";
import { useHistory, useLocation } from "react-router-dom";
const EmptyCartState = () => {
  const history = useHistory();
  const path = useLocation().pathname;

  return (
    <div
      className="empty-cart-container"
      style={{ marginTop: path === "/" ? "2rem" : "0" }}
    >
      <img src={EmtyImg} alt="" />
      <div className="text">
        <h2>It's empty here</h2>
        <p>Start Shopping to add items to your bag</p>
      </div>
      {path === "/bag" && (
        <button onClick={() => history.push("/")}>Back to homepage</button>
      )}
    </div>
  );
};

export default EmptyCartState;
