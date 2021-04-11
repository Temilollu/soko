import React from "react";
import Products from "../products/Products";


const Electronics = ({ allProducts }) => {
  const bagsData = allProducts.filter(
    (products) => products.category === "Bags"
  );

  return (
    <div>
      <h2>Bags (3)</h2>
      <Products products={bagsData} />
    </div>
  );
};

export default Electronics;
