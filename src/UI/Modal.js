import React from "react";
import "./Modal.css";
import { useMedicine } from "../Context/MedicineContext";
function Modal(props) {

  const { medicines, totalPrice } = useMedicine();
       Number(totalPrice).toFixed(2);
  return (
    <div className="modal">
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {console.log(medicine.id)}
            <div className="top">
              <span className="left">{medicine.medicineName}</span>
              <span className="right">₹{medicine.price}</span>
            </div>
            <div className="bottom">
              {medicine.dsc}
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
        <button className="orderBtn">Order</button>
      </div>
    </div>
  );
}
export default Modal;
