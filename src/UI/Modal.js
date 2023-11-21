import React from "react";
import "./Modal.css";
import { useMedicine } from "../Context/CartMedicinesContext";
function Modal(props) {

  const {medicines, totalPrice ,removeMedicine ,orderPlaced} = useMedicine();
       Number(totalPrice).toFixed(2);
  return (
    <div className="modal">
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {console.log(medicine.id)}
            <div className="top">
              <div className="left">
              <div>{medicine.medicineName}</div>
              <span>₹{medicine.price}</span>
              <span>Q :{medicine.cartQuantity}</span>
              </div>
              <div className="right">
               <button className="btn" onClick={()=>removeMedicine(medicine.id)}>Remove</button>
            </div>
            </div>
         
          </li>
        ))}
      </ul>
      <div className="totalPrice">
        <span>Total Price</span>
        <span>₹{totalPrice}</span>
      </div>
      <div className="buttons">
        <button className="closeBtn" onClick={()=>props.onClose()}>Colse</button>
        <button className="orderBtn" onClick={()=>orderPlaced()}>Order</button>
      </div>
    </div>
  );
}
export default Modal;
