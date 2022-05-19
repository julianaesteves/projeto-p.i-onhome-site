import React from 'react'

import './style.css';

const MenuHamburguerAberto = () => {
    return (
        <>
            <input type="checkbox" id="checkbox-menu" />
            <label className='open' for="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}

export default MenuHamburguerAberto