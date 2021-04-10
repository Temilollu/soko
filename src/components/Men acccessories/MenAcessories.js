import React from "react";
import first from "../../assets/30bfeedd-56bb-4af0-95d4-295a9404cb23.jpg";
import third from "../../assets/312f15d0-c789-441f-a2aa-2acab19dc3e8.jpg";
import second from "../../assets/12d0f08c-ba0c-47d7-9eff-5518bab8c1a8.jpg";
import Products from "../products/Products";
const mensData = [
    {
        name: "Brown leather watch",
        img: first,
        price: 500,
        id: 6,
      },
      {
        name: "black wallets",
        img: second,
        price: 100,
        id: 7,
      },
      {
        name: "Sports Watch",
        img: third,
        price: 4200,
        id: 8,
      },
];

const MenAcessories = () => {
  return (
    <div>
      <h2>Mens Accessories (3)</h2>
      <Products products={mensData} />
    </div>
  );
};

export default MenAcessories;
