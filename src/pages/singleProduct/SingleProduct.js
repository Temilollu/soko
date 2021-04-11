import React from "react";
import { useHistory } from "react-router-dom";
import "./singleProduct.css";
import { addToCartAction } from "../../redux/cart/action";
import { useDispatch } from "react-redux";
import { formatNumber, allProducts } from "../../constants";


const SingleProduct = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = +match.params.id;
  const product = allProducts.find((product) => product.id === id);


  const relatedProducts = allProducts.filter(
    (prod) => prod.category === product.category && prod.id !== product.id
  );

  const addProductHandler = () => {
    dispatch(addToCartAction(product));
    history.push("/bag");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="single-prod-container">
      <div className="categ" onClick={() => history.push("/")}>
        {" "}
        {"<"} {product.category}
      </div>
      <div className="product-container">
        <div className="single-prod">
          <img src={product.img} className="single-prod-img" alt="" />
          <div className="text">
            <h5>{product.name}</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              eius consequatur quas quia nemo reprehenderit voluptatum optio
              minus voluptate hic eos aliquam inventore, debitis eum! Nostrum et
              tempore dicta soluta.
            </p>
            <p className="price">UGX {formatNumber(product.price)}</p>

            <div className="buttons">
              <button onClick={addProductHandler}>Add to bag</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <h5 id="related-title">Releated Products</h5>
      <div className="related-products">
        {relatedProducts.map((product) => (
          <div className="related-prod-container" key={product.id}>
            <img src={product.img} alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
