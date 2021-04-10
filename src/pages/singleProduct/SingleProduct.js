import React from "react";
import { useHistory } from "react-router-dom";
import first from "../../assets/d7f85a1b-46e5-4d7f-8dd8-8f0522213178.jpg";
import second from "../../assets/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg";
import third from "../../assets/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg";
import fourth from "../../assets/897cafda-40fe-48cb-8bad-68004ed1a1f8.jpg";
import fifth from "../../assets/5db7c954-da22-4273-b5c1-31d752e8e5e8.jpg";
import sixth from "../../assets/30bfeedd-56bb-4af0-95d4-295a9404cb23.jpg";
import seventh from "../../assets/312f15d0-c789-441f-a2aa-2acab19dc3e8.jpg";
import eight from "../../assets/12d0f08c-ba0c-47d7-9eff-5518bab8c1a8.jpg";
import "./singleProduct.css";
import { addToCartAction } from "../../redux/cart/action";
import { useDispatch } from "react-redux";
import { formatNumber } from "../Home/constants";

const allProducts = [
  {
    name: "leather bag",
    img: first,
    price: 10,
    id: 1,
    category: "Electronics",
  },
  {
    name: "black sneakers",
    img: second,
    price: 10000,
    id: 2,
    category: "Electronics",
  },
  {
    name: "flashy bag",
    img: third,
    price: 400,
    id: 3,
    category: "Electronics",
  },
  {
    name: "cream leather bag",
    img: fourth,
    price: 1110,
    id: 4,
    category: "Face Masks",
  },
  {
    name: "cool sneakers",
    img: fifth,
    price: 1230,
    id: 5,
    category: "Face Masks",
  },
  {
    name: "Brown leather watch",
    img: sixth,
    price: 500,
    id: 6,
    category: "Mens Accessories",
  },
  {
    name: "black wallets",
    img: eight,
    price: 100,
    id: 7,
    category: "Mens Accessories",
  },
  {
    name: "Sports Watch",
    img: seventh,
    price: 4200,
    id: 8,
    category: "Mens Accessories",
  },
];

const SingleProduct = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = +match.params.id;
  const product = allProducts.find((product) => product.id === id);

  const addProductHandler = () => {
    dispatch(addToCartAction(product));
    history.push("/bag");
  };

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
    </div>
  );
};

export default SingleProduct;
