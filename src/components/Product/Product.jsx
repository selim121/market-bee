import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, quantity, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img className='w-72 h-72 p-2 rounded-lg' src={img} alt="" />
            <div className='p-4'>
                <h6 className='font-bold text-sm mb-2'>{name}</h6>
                <p className='mb-1'>Price: &{price}</p>
                <p className='mb-1'>Manufacturer: {seller}</p>
                <p className='mb-1'>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;