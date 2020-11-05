import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import './ShoppingCart.scss'
const ShoppingCart = () => {
    const shoppingCart = useSelector((state) => state.cart)
  
   




    return(
        <>
        <h1 className='shopping-cart-title' >Shopping Cart</h1>
          { shoppingCart.items.length > 0 ? <p>{shoppingCart.items.length && shoppingCart.items.length}</p>:
           <div className='no-items-container'>
             <h2 className='no-items'>There are not items in your cart</h2>
             <Link to='products/all'>Shop Here</Link>
           </div> 
          }
        </>
    )
}


export default ShoppingCart