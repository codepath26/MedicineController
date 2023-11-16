
import { useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import { MedicineProvider } from './Contexts/MedicineContext';
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Medicine from './Components/DisplayMedicine/Medicine';

function App() {
  const [cartIsShown , setCartIsShown] = useState(false);

  
  // const[length , setLength]=useState(1);
  const showCartHandler = ()=>{
    setCartIsShown(true);
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }
  // const handleInput = ({name ,dsc , price})=>{
  //   setMedicineName(name);
  //   setDsc(dsc);
  //   setPrice(price);
  // }

  return (
      <MedicineProvider>
             {cartIsShown && <Cart onClose={hideCartHandler}/>}
             <Header onShowCart = {showCartHandler}/>
      <Input  />
      <Medicine/>
      </MedicineProvider>
  );
}

export default App;
