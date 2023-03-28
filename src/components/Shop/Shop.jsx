import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);
    const handleAddToCart = (props) =>{
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='grid grid-cols-3 gap-11 m-12'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className=''>
                <h4 className='font-bold'>Order Summary</h4>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};
export default Shop;