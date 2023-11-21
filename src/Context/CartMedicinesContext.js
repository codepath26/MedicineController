import { createContext, useContext, useState } from "react";

const CartMedicinesContext = createContext({
  medicines: [],
  totalPrice: 0,
  addMedicine: (medicine) => {},
  removeMedicine: (id) => {},
  orderPlaced: () => {},
});

export const useMedicine = () => {
  return useContext(CartMedicinesContext);
};

const CartMedicinesProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addMedicine = (medicine, quantity) => {
    console.log(medicine, quantity, "cart");
    setTotalPrice((prevPrice) => {
      return prevPrice + Number(medicine.price);
    });
    setMedicines((prevMedicines) => {
      const existingItemIndex = prevMedicines.findIndex(
        (item) => item.id === medicine.id
      );
      const existingItem = prevMedicines[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + medicine.quantity,
          cartQuantity: existingItem.cartQuantity + 1,
        };
        updatedItems = [...prevMedicines];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // console.log("else");
        updatedItems = [...prevMedicines];
        // console.log('updated' , updatedItems);
        const newItem = { ...medicine, cartQuantity: quantity };
        updatedItems = updatedItems.concat(newItem);
        // console.log("medci" , medicine)
        console.log("updated after concate", updatedItems);
      }
      // console.log("updatedItem",updatedItems)
      return updatedItems;
    });
  };

  const removeMedicine = (id) => {
    const existingIndex = medicines.findIndex((medicine) => medicine.id === id);
    const existingMedicine = medicines[existingIndex];

    setTotalPrice((prevTotalPrice) => {
      return (
        prevTotalPrice -
        Number(existingMedicine.price) * Number(existingMedicine.cartQuantity)
      );
    });
    // if(existingMedicine.quantity > 1){
    //   setMedicines((prevMedicines)=>{
    //     let updatedMedicines = [...prevMedicines];

    //     let updatedMedicine = updatedMedicines[existingIndex];
    //     updatedMedicine = {...updatedMedicine , quantity : updatedMedicine.quantity - 1};
    //     updatedMedicines[existingIndex] = updatedMedicine;
    //     return updatedMedicines;
    //   });

    // }else{
    setMedicines((prevMedicines) => {
      let updatedMedicines = [...prevMedicines];
      return updatedMedicines.filter((medicine) => {
        return medicine.id !== id;
      });
    });
    // }
  };
  const orderPlaced = () => {
    setMedicines([]);
    setTotalPrice(0);
  };

  return (
    <CartMedicinesContext.Provider
      value={{
        medicines,
        totalPrice,
        addMedicine,
        removeMedicine,
        orderPlaced,
      }}
    >
      {children}
    </CartMedicinesContext.Provider>
  );
};

export default CartMedicinesProvider;
