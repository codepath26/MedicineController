import Input from "./Components/Input/Input";

import DisplayMedicines from "./Components/DisplayMedicine/DisplayMedicines";
import { useState } from "react";
import CartButton from "./Components/CartButton/CartButton";
import Cart from "./Components/Cart/Cart";
import MedicinesProvider from "./Context/DisplayMedicineContext";
import CartMedicinesProvider from "./Context/CartMedicinesContext";

function App() {
  const [showCart , setShowCart] = useState(false);

  const onShowCart = ()=>{
    setShowCart(true);
  }
  const onHideCart = ()=>{
    setShowCart(false);
  }

  return (
    <CartMedicinesProvider>
      <MedicinesProvider>
      <CartButton onShowCart={onShowCart} />
      {showCart && <Cart onClose={onHideCart} />}
      <Input />
      <DisplayMedicines />
      </MedicinesProvider>
    </CartMedicinesProvider>
  );
}

export default App;
