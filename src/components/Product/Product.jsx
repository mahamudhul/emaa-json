import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, quantity, price, ratings } = props.product

    // const handleAddToCart = (product) => {
    //     console.log(product)
    // }
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            {/* <h3>this is products</h3> */}
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>Menufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart
            <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;