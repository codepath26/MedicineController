import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

import useMedicine from '../../Contexts/MedicineContext';
import { useEffect, useState } from 'react';
 const HeaderCartButton = (props)=> {
 const cartCtx =  useMedicine();
 const [btnIsHighlighted , setBtnIsHighlited] =useState(false); 
 const {medicines} = cartCtx;
//  const numberOfCartmedicines = cartCtx.medicines.length;
 const numberOfCartmedicines = medicines.reduce((curNumber , item)=>{
        // console.log(curNumber)
        // console.log("medicines",item)
        return curNumber + item.amount;
 } ,0);
//  console.log("numberofmedicines" , numberOfCartmedicines)

 const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ""}`
 useEffect(()=>{
 if(medicines.length === 0){
  return;
 }
 setBtnIsHighlited(true);
 const timer = setTimeout(() => { 
  setBtnIsHighlited(false);
  },300);

  return ()=>{
    clearTimeout(timer);
  }
 },[medicines]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartmedicines}
      </span>
    </button>
  );
}

export default HeaderCartButton;