import React from "react";
import "./Medicine.css";
import { useMedicine } from "../../Context/MedicineContext";


function Medicine({medicines}) {
  const {addMedicine} = useMedicine();
  return (
    <>
      <ul className="cartItems">
        {medicines.map((item) => (
          <li key={item.id} className="cart-item">
            <span>Medicine Name : {item.medicineName}</span>
            <span className="price">Price : {item.price}</span>
            <span className="amount"> Quantity : {item.amount}</span>
            <button onClick={()=>{addMedicine(item)}} id="addToCart">AddToCart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Medicine;
