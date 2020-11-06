import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import './ShoppingCart.scss'
const ShoppingCart = () => {
    const shoppingCart = useSelector((state) => state.cart)
  
   




    return(
        <>
        <h1 className='shopping-cart-title' >Shopping Cart</h1>
          { shoppingCart.items.length == 0 ? <div className='no-items-container'>
             <h2 className='no-items'>There are not items in your cart</h2>
             <Link to='products/all'>Shop Here</Link>
           </div> : 
           <div className='items-container'>
              {shoppingCart.items.map((product, i) => (
                <div className='item-container' key={i}>
                  <div className='image-container'>
                      <img src={product.img}/>
                  </div>
                  <div className='item-info'>
                      <h4>{product.name}</h4>
                      <p className='size'>Size: {product.size}</p>
                      <p className='price'>Price: {product.price}</p>
                  </div>
                  <div className='remove'> 
                      <p>x</p>
                  </div>
                </div>
              ))}
           </div>
           }
        </>
    )
}


export default ShoppingCart