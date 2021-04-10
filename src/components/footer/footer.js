import React from "react";
import delivery from "../../assets/delivery.png";
import protectn from "../../assets/protection.png";
import customerSupport from "../../assets/customer-support.png";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-us">
          <div className="single-about">
            <img src={delivery} alt="" />
            <p>Fast delivery</p>
          </div>
          <div className="single-about">
            <img src={protectn} alt="" />
            <p>Buyer Protection</p>
          </div>
          <div className="single-about">
            <img src={customerSupport} alt="" />
            <p>Customer Support</p>
          </div>
        </div>
      </div>
      <div className="footer-texts">
          <div className="first">STORE DETAILS</div>
          <h5 className="second">Target</h5>
          <div className="address">Kisuule Rise, Kampala, Uganda</div>
      </div>
    </div>
  );
};

export default Footer;
