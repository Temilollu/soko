import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Address from "../../components/address/Address";
import { clearCart } from "../../redux/cart/action";
import Cart from "../cart/Cart";
import "./checckout.css";
const Checkout = () => {
  const [stage, setStage] = useState("account");
  const [appendAddress, setAppendAddress] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overall-checkout-container">
      <div className="wrapper">
        <div className="tracker">
          <ul className="StepProgress">
            <li
              className={
                stage !== "account"
                  ? "StepProgress-item is-done"
                  : "StepProgress-item current"
              }
            >
              <strong>Account</strong>
              <p>
                {stage === "account"
                  ? "To place an order log in by entering your 10 digit mobile number"
                  : "You are logged in"}
              </p>

              {stage === "account" && (
                <div className="label">
                  <p>Mobile Number</p>
                  <input type="number" placeholder="234 70 6438 4602" />{" "}
                  <button onClick={() => setStage("address")} className="login">
                    Login
                  </button>
                </div>
              )}
            </li>
            <li
              className={
                appendAddress
                  ? "StepProgress-item is-done"
                  : "StepProgress-item current"
              }
            >
              <strong>Delivery address</strong>
              {stage === "address" ? (
                <Address
                  appendAddress={appendAddress}
                  setAppendAddress={setAppendAddress}
                />
              ) : (
                " Select your delivery address from the existing one or add a new one"
              )}
            </li>

            <li
              className={
                appendAddress
                  ? "StepProgress-item current"
                  : "StepProgress-item current"
              }
            >
              <strong>Payment</strong>
            </li>
          </ul>
          <div className="pay">
            <p>Select your paymeny method</p>
            {appendAddress && (
              <div className="payment-method">
                <input type="radio" id="payment-opt" />{" "}
                <label htmlFor="payment-opt">Cash on delivery</label>
                <button className="order">Place order</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cart-checkout">
        <p
          style={{ textAlign: "right", cursor: "pointer" }}
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </p>
        <Cart />
      </div>
    </div>
  );
};

export default Checkout;
