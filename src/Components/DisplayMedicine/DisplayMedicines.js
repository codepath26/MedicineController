import React from "react";
import "./Medicine.css";
import { useDisplayMedicines } from "../../Context/DisplayMedicineContext";


function Medicine() {
  const {medicineList ,addToCart} = useDisplayMedicines();
  console.log("From display data",medicineList)
  return (
    <>
      <ul className="cartItems">
        {medicineList.map((item) => (
          <li key={item.id} className="cart-item">
            <span>Medicine Name : {item.medicineName}</span>
            <span className="price">Price : {item.price}</span>
            <span className="amount"> Quantity : {item.quantity}</span>
            {item.quantity !== 0 ? <button onClick={()=>{addToCart(item)}} id="addToCart">AddToCart</button> : <p>Out Of Stok</p> }
          </li>
        ))}
      </ul>
    </>
  );
}

export default Medicine;
