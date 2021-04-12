import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../../redux/cart/action";
import { formatNumber } from "../../constants";
import EmptyCartState from "../../components/emptyCartState/EmptyCartState";
import { useHistory } from "react-router";
const Bag = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const history =  useHistory()
  const totalPrice = cartItems.reduce((prevVal, currProduct) => {
    return (prevVal += currProduct.price * currProduct.quantity);
  }, 0);

  const formattedTotalPrice = formatNumber(totalPrice);
  return (
    <div className="cart-overall-container">
      {cartItems && cartItems.length !== 0 ? (
        <div id="cart-container">
          <div className="items">
            {cartItems.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img} alt="" />
                <div className="text">
                  <h6>{product.name}</h6>
                  <p>
                    UGX {formatNumber(product.price)} x {product.quantity}
                  </p>
                </div>
                <div className="add_remove">
                  <div
                    className="minus_button"
                    onClick={() => dispatch(removeFromCartAction(product))}
                  >
                    -
                  </div>
                  <span>{product.quantity}</span>
                  <div
                    className="add_button"
                    onClick={() => dispatch(addToCartAction(product))}
                  >
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="totals">
            <div className="final-total">
              <span>Total</span>
              <span> UGX {formattedTotalPrice}</span>
            </div>
            <div className="checkout-button">
              <button onClick={() => history.push("/checkout")}>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCartState />
      )}
    </div>
  );
};

export default Bag;
