import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Navbar.scss'

export const NavCart = ({cart}) => {
    return (
        <div className="nav-cart-container">
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <span className={cart.length > 9 ? 'double-digit': null}>{cart && cart.length}</span>
        </div>
    )
}