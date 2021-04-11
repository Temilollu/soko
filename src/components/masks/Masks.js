import React from "react";
import Products from "../products/Products";


const Masks = ({allProducts}) => {
  const sneakersData = allProducts.filter(products => products.category === "Sneakers")

  return (
    <div>
      <h2>Sneakers (2)</h2>
      <Products products={sneakersData} />
    </div>
  );
};

export default Masks;
