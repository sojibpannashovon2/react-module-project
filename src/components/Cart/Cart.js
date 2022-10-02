import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {
    // console.log(props)
    const { cart } = props;
    let totalPrice = 0;
    let shippingPrice = 0;
    let grandTotal = 0;
    for (const product of cart) {
        console.log(product)
        totalPrice = totalPrice + product.price;
        shippingPrice = shippingPrice + product.shipping;


    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    grandTotal = totalPrice + shippingPrice + tax;
    return (
        <div className='cart-info'>
            <div >
                <h2 className='cart-indi-info' style={{ textAlign: 'center', border: "2px solid black", backgroundColor: ' rgba(247, 113, 140, 0.615)' }}>
                    Order Summary</h2>
                <p className='cart-indi-info'>Selected-Items: {cart.length}</p>
                <p className='cart-indi-info'>Total-price: $ {totalPrice} </p>
                <p className='cart-indi-info'>Total-Shipping Price: $ {shippingPrice} </p>
                <p className='cart-indi-info'>Total-Tax: $ {tax}  </p>

                <h3 className='cart-indi-info'>Grand-Total: $ {grandTotal.toFixed(2)} </h3>

            </div>
            <div className='cart-button'>
                <div>
                    <button className='cart-button-info'>Clear Cart
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>

                </div>
                <div>
                    <button className='cart-button-info'>Review Order
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;