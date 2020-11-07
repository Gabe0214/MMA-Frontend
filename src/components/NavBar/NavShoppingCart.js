import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Navbar.scss'


export const NavCart = () => {
    const shoppingCart = useSelector(state => state.cart)
    const history = useHistory()
    return (
        <div className="nav-cart-container">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" onClick={()=>history.push('/cart')}/>
            <span className={shoppingCart.items.length > 9 ? 'double-digit': null} style={shoppingCart.items.length < 1 ? {display: 'none'}: null}>{shoppingCart.items.length}</span>
        </div>
    )
}