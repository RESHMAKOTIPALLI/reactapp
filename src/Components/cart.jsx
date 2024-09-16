import React, { useState } from 'react';
import './Cart.css'; // Ensure you create and import this CSS file

function Cart() {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Beach Vacation Package',
      price: 499,
      quantity: 1
    },
    {
      id: 2,
      name: 'Mountain Adventure Tour',
      price: 299,
      quantity: 2
    },
    {
      id: 3,
      name: 'City Exploration Pass',
      price: 99,
      quantity: 1
    }
  ]);

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Travel Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h2>Total: ${totalPrice}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
