import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';


import './Shop.css'

const Shop = () => {

    const [cart, setCart] = useState([])

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const addToCartButton = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='main-product-container' style={{ border: '2px solid black' }}>
            <div className="products-container" >
                {/* <h2>this is products</h2>
                <h2>products: {products.length}</h2> */}
                {/* {
                    products.map(item => console.log(item))
                } */}
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        addToCartButton={addToCartButton}
                    ></Products>)
                }

            </div>
            <div className="cart-container" style={{ border: '2px solid black' }}>
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;