import React from "react";
import fourth from "../../assets/897cafda-40fe-48cb-8bad-68004ed1a1f8.jpg";
import fifth from "../../assets/5db7c954-da22-4273-b5c1-31d752e8e5e8.jpg";
import Products from "../products/Products";

const masksData = [
  {
    name: "cream leather bag",
    img: fourth,
    price: 1110,
    id: 4,
  },
  {
    name: "cool sneakers",
    img: fifth,
    price: 1230,
    id: 5,
  },
];

const Masks = () => {
  return (
    <div>
      <h2>Masks (2)</h2>
      <Products products={masksData} />
    </div>
  );
};

export default Masks;
