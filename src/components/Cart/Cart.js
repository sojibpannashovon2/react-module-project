import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart-info'>
            <h2 style={{ textAlign: 'center', border: "2px solid black", backgroundColor: ' rgba(247, 113, 140, 0.615)' }}>
                Order Summary</h2>
            <p>Selected-Items: {cart.length}</p>
        </div>
    );
};

export default Cart;