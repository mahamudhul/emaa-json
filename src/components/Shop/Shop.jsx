import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect ( ()=> {
        fetch ('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h2>Products coming here: {products.length}</h2> */}
                {
                    products.map(product => <Product
                    product={product}
                    key = {product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;