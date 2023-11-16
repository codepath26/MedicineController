import React from "react";
import "./Medicine.css";
import useMedicine from "../../Contexts/MedicineContext";

function Medicine() {
  const cartCtx = useMedicine();
  const addToCart = ()=>{
 console.log('tj');
  }
  return (
    <>
      <ul className="cartItems">
        {cartCtx.medicines.map((item) => (
          <li className="cart-item">
            <span>Medicine Name : {item.medicineName}</span>
            <span className="price">Price : {item.price}</span>
            <span className="amount"> Quantity : {item.amount}</span>
            <button onClick={addToCart} id="addToCart">AddToCart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Medicine;
