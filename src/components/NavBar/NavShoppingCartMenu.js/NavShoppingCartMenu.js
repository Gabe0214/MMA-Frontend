import React from 'react'
import { useSelector } from 'react-redux'
import './NavShoppingCartMenu.scss'

export const NavShoppingCartMenu = () => {
    const shoppingCart  = useSelector(state => state.cart )
    return (
        <div className='menu-cart-container'>
                    {shoppingCart.items.map((product) => (
                    <div className='item-container'>
                        <div className='image-container'>
                            <img src={product.img} alt='proudt-image'/>
                        </div>
                        <div className='item-info'>
                            <h4>{product.name} - {product.size}</h4>
                            <span>${product.price}</span>
                        </div>
                    </div>
                    ))}
        </div>
    )
}
