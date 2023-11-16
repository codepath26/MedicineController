import Input from "./Components/Input/Input";

import DisplayMedicines from "./Components/DisplayMedicine/DisplayMedicines";
import MedicineProvider from "./Context/MedicineContext";
import { useState } from "react";
import CartButton from "./Components/CartButton/CartButton";
import Cart from "./Components/Cart/Cart";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [showCart , setShowCart] = useState(false);

  const onShowCart = ()=>{
    setShowCart(true);
  }
  const onHideCart = ()=>{
    setShowCart(false);
  }

  const addMedicine = (medicine) => {
    setMedicines((prevMedicines) => {
      return prevMedicines.concat(medicine);
    });
  };

  return (
    <MedicineProvider>
      <CartButton onShowCart={onShowCart} />
      {showCart && <Cart onClose={onHideCart} />}
      <Input addMedicine={addMedicine} />
      <DisplayMedicines medicines={medicines} />
    </MedicineProvider>
  );
}

export default App;
