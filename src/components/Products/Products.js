import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './Products.css'

const Products = (props) => {
    // console.log(props);
    // console.log(props.product);
    const { addToCartButton, product } = props;
    const { name, seller, img, ratings, price } = product;

    return (
        <div className='products' style={{ border: '2px solid black' }}>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <p><small>Name: {name}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings:  {ratings} star</small></p>
                <p><small>Price: ${price}</small></p>

            </div>
            <div>
                <button onClick={() => addToCartButton(props.product)} className='product-button'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Products;