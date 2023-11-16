import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [medicineName, setMedicineName] = useState("");
  const [dsc, setDsc] = useState("");
  const [price, setPrice] = useState(0);

  const addData = (e) => {
    e.preventDefault();
    const medicine = {
      id: Date.now(),
      medicineName: medicineName,
      dsc: dsc,
      price: price,
      amount: 1,
    };
    props.addMedicine(medicine);
  };
  return (
    <div className="form-container">
      <form onSubmit={addData} className="form">
        <div className="input-field">
          <label htmlFor="name">Medicine</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => {
              setMedicineName(e.target.value);
            }}
            id="name"
          />
        </div>
        <div className="input-field">
          <label htmlFor="dsc">Description</label>
          <input
            type="text"
            value={dsc}
            onChange={(e) => {
              setDsc(e.target.value);
            }}
            id="dsc"
          />
        </div>
        <div className="input-field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            id="price"
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
}

export default Input;
