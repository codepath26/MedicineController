import React, { useState } from "react";
import "./Input.css";
import { useDisplayMedicines } from "../../Context/DisplayMedicineContext";

function Input(props) {
  const [medicineName, setMedicineName] = useState("");
  const [dsc, setDsc] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const {MedicineToStore} = useDisplayMedicines();

  const addData = (e) => {
    e.preventDefault();
    const medicine = {
      id: Date.now(),
      medicineName: medicineName,
      dsc: dsc,
      price: price,
      quantity : quantity,
    };
    MedicineToStore(medicine);
  };

  // Clear the Defult value of the price and quatity input field
  const clearValue = (e) => {
    if (e.target.value === "0") {
      if (e.target.id === "quantity") {
        setQuantity("");
      }
      if (e.target.id === "price") {
        setPrice("");
      }
    }
  };
  return (
    <div className="main-container">
      <h1 className="title">ADD MEDICINES TO STORE</h1>
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
            onFocus={clearValue}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            id="price"
          />
        </div>
        <div className="input-field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            value={quantity}
            onFocus={clearValue}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            id="quantity"
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
      </div>
    </div>
  );
}

export default Input;
