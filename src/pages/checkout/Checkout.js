import React, { useState } from "react";
import Address from "../../components/address/Address";
import "./checckout.css";
const Checkout = () => {
  const [stage, setStage] = useState("account");
  const [appendAddress, setAppendAddress] = useState(false);

  return (
    <div>
      <div className="wrapper">
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
              appendAddress ? "StepProgress-item current" : "StepProgress-item"
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

      {/* <div id="stepProgressBar">
        <div className="step">
          <div className="bullet completed w-1/6">1</div>
          <p className="story ml-4">
              <h3>To place an order log in by entering your 10 digit mobile number </h3>
         <label>
            <p>Mobile Number</p>
             <input type="number"/> <button>Login</button>
         </label>
         
         
          </p>
        </div>
        <div className="step">
          <div className="bullet completed w-1/6">2</div>
          <p className="story ml-4">
            Your bid has been won and is awaiting balance payment
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Checkout;
