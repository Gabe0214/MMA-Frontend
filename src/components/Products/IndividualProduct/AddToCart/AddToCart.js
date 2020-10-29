import React, { useState } from 'react'
import './AddToCart.scss'
export const CartSection = () => {
    const [quantity, setQuanitiy] = useState(1)
    return (
        <div className='cart-section-container'>
             <div className='quantity-container'>
                <button className={quantity == 1 ? 'btn disabled': 'btn'} disabled={quantity == 1 ? 'disabled': null} onClick={()=>setQuanitiy(prevState => prevState - 1)}>-</button> <input className='quantity-input' value={quantity} name='quantity'/> <button onClick={()=>setQuanitiy(prevState => prevState + 1)} className='btn'>+</button> 
             </div>
             <button className='add-to-cart'>Add To Cart</button>  
        </div>
    )
}