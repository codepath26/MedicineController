import classes from './Cart.module.css'
import Modal from '../UI/Modal'

import CartItem from './CartItem';
import useMedicine from '../../Contexts/MedicineContext';
export default function Cart(props) {
  const cartCtx = useMedicine();
  // console.log("cartctxf", cartCtx);
  console.log("this is the item ",cartCtx.totalAmount)
  const totalAmount = `${Number(cartCtx.totalAmount).toFixed(2)}`;
  const hasItem = cartCtx.medicines.length > 0;

  const cartItems = (
  <ul className={classes['cart-items']}>
    {cartCtx.medicines.map((item)=>(
      <CartItem 
      key = {item.id} 
      name={item.medicineName} 
      amount={item.amount} 
      price={item.price} 
     />
    ))}
  </ul>)
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>₹{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>Close</button>
    { hasItem &&  <button className={classes["button--alt"]}>Order</button>}</div>
    </Modal>
  )
}
