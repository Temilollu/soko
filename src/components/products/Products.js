import React from "react";
import "./product.css";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../../pages/Home/constants";
const Products = ({ products }) => {
  const history = useHistory();
  // console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.img} alt="" />
          <div className="text">
            <h6>{product.name}</h6>
            <p>UGX {formatNumber(product.price)}</p>
          </div>
          <button onClick={() => history.push(`/single-product/${product.id}`)}>
            {" "}
            + Add{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
