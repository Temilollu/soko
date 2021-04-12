import React, { useState } from "react";
import "./address.css";

const Address = ({ appendAddress, setAppendAddress }) => {
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && address.trim() !== "") {
      setAppendAddress(true);
    }
  };

  const handleAddressChange = () => {
    setAppendAddress(false);
  };



  return (
    <div className="address">
      {appendAddress ? (
        <div className="address-set">
          <p>
            Choose existing address or add a new one{" "}
            <button onClick={handleAddressChange} className="change_address">Change address</button>
          </p>
          <p>{address}</p>
        </div>
      ) : (
        <textarea
          placeholder="Hit enter to add"
          onChange={handleChange}
          onKeyPress={handleSubmit}
          value={address}
        ></textarea>
      )}
    </div>
  );
};

export default Address;
