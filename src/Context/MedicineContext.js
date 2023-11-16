import { createContext, useContext, useState } from "react";

const TodoContext = createContext({
  medicines: [],
  totalPrice: 0,
  addMedicine: (medicine) => {},
});

export const useMedicine = () => {
  return useContext(TodoContext);
};

const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addMedicine = (medicine) => {
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
          amount: existingItem.amount + medicine.amount,
        };
        updatedItems = [...prevMedicines];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // console.log("else");
        updatedItems = [...prevMedicines];
        // console.log('updated' , updatedItems);
        updatedItems = updatedItems.concat(medicine);
        // console.log("medci" , medicine)
        // console.log('updated after concate' , updatedItems);
      }
      // console.log("updatedItem",updatedItems)
      return updatedItems;
    });
  };

  return (
    <TodoContext.Provider value={{ medicines, totalPrice, addMedicine }}>
      {children}
    </TodoContext.Provider>
  );
};

export default MedicineProvider;
