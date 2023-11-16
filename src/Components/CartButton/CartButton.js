import React from 'react';
import './CartBtn.css'

function CartButton({onShowCart}) {
  return (
    <header>
      <div className='left-div'>
        <button className='carBtn' onClick={()=>onShowCart()}>
          Cart
        </button>
      </div>
    </header>
  )
}

export default CartButton;