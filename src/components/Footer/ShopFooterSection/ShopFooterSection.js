import React from 'react'
import { NavLink } from 'react-router-dom'
import './ShopFooterSection.scss'
export const ShopFooter = () => {

    return (
        <div className='shop-footer-container'>
            <h3 className='subtitle'>Shop</h3>
            <ul>
                <li><NavLink to='/'>United States</NavLink></li>
                <li><NavLink to='/'>International</NavLink></li>     
            </ul>
        </div>
    )
}
