import React from 'react';
import Modal from '../../UI/Modal';
import ReactDOM from 'react-dom'
import './Cart.css'

const BackDrop = (props)=>{
  return <div className='backDrop' onClick={()=>props.onClose()}/>
}
function Cart(props){
  const portalElement = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose ={props.onClose}/>,portalElement)}
      {ReactDOM.createPortal(<Modal onClose={props.onClose}/>,portalElement)}
    </>
  )
}

export default Cart
