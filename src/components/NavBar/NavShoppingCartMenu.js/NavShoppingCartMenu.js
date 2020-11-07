import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './NavShoppingCartMenu.scss'

export const NavShoppingCartMenu = () => {
    const shoppingCart  = useSelector(state => state.cart )
    const dispatch = useDispatch()

    const removeFromCart = (id, price) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {id}
        })
        
        deductPrice(price)
    }

    const deductPrice = (deductPrice) => {
        dispatch({
            type: "DEDUCT_TOTAL",
            payload: {total: deductPrice}
        })
    }

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
                        <div className='remove' onClick={() =>removeFromCart(product.unique_id, product.price)}>
                            <span>x</span>
                        </div>    
                    </div>
                    ))}
        </div>
    )
}
