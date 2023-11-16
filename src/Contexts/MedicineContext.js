import { createContext, useContext, useReducer } from "react";


export const MedicineContext = createContext({
  medicines : [],
  totalAmount : 0,
  addMedicine : (medicine)=>{},
});



// useReducer Methods

const intitalState = {
  medicines : [],
  totalAmount : 0,
}
// Reducer

const reducer = (state , action)=>{
if(action.type === "ADD"){
const updatedAmount = state.totalAmount + action.medicine.price *action.medicine.amount;
const existingItemIndex = state.medicines.findIndex(item => item.id === action.medicine.id);
const existingItem = state.medicines[existingItemIndex];
let updatedItems;
if(existingItem){
  const updatedItem = {
    ...existingItem,
    amount : existingItem.amount + action.medicine.amount,
  };
  updatedItems = [state.medicines];
  updatedItems[existingItemIndex] = updatedItem;
}else{
  updatedItems = state.medicines.concat(action.medicine);

}
return {
  medicines : updatedItems,
  totalAmount : updatedAmount,
}
}
return intitalState;
}



export const MedicineProvider = (props)=>{
  const [state , dispatch] = useReducer(reducer , intitalState);
  const addItemHandler = (medicine)=>{
    dispatch({
      type : "ADD",
      medicine : medicine,
    })

  }
  const medicineContext ={
    medicines : state.medicines,
    totalAmount  : state.totalAmount,
    addMedicine : addItemHandler,
  }
  return(
    <MedicineContext.Provider value={medicineContext}>
      {
        props.children
      }
    </MedicineContext.Provider>
  )
}
export default function useMedicine  (){
   return useContext(MedicineContext);
}
