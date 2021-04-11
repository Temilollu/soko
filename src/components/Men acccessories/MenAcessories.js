import React from "react";
import Products from "../products/Products";

const MenAcessories = ({allProducts}) => {
  const mensData = allProducts.filter(products => products.category === "Mens Accessories")
  return (
    <div>
      <h2>Mens Accessories (3)</h2>
      <Products products={mensData} />
    </div>
  );
};

export default MenAcessories;
