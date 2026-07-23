import React from 'react';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {/* Cart items list mapping goes here */}
      </div>
      <button className="get-started-button" onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
