import React from 'react';
import logo from '../../images/a.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='h-20 bg-zinc-900 text-zinc-50 flex justify-between items-center px-10'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;