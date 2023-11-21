import { createContext, useContext, useState } from "react";
import { useMedicine } from "./CartMedicinesContext";


const MedicinesContext = createContext({
  medicineList : [],
  addToCart : (medicine)=>{},
  MedicineToStore:(medicine)=>{}
});

const MedicinesProvider = ({children})=>{
  const {addMedicine} = useMedicine();
  const [medicineList , setMedicinesList] = useState([]);
  const addToCart = (item)=>{
    let index = medicineList.findIndex(medicine => medicine.id === item.id);
    let medicine = medicineList[index];
    if(medicine.quantity > 0){
      medicine = {...medicine , quantity : medicine.quantity -1};
      setMedicinesList((prevMedi)=>{
        let updatedMedicines = [...prevMedi];
        updatedMedicines[index] = medicine;
        return(updatedMedicines);
      });
      addMedicine(item ,1);
    }
  }
  const MedicineToStore = (medicine)=>{
    setMedicinesList((prevMedi)=>{
      return prevMedi.concat(medicine);
    })
  }
  return (
    <MedicinesContext.Provider value={{medicineList , addToCart  ,MedicineToStore}}>
      {
        children
      }
    </MedicinesContext.Provider>
  )
};

export default MedicinesProvider;

export const useDisplayMedicines = ()=>{
  return useContext(MedicinesContext);
}