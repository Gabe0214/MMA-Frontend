import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './AddToCart.scss'
export const CartSection = ({product, size}) => {
    const [quantity, setQuanitiy] = useState(1)

    const shoppingCart = useSelector((state) =>state.cart)
    const dispatch = useDispatch()
    const addItem = (item, size) => {
        const { product_id, name, price} = item
        const img = item.images[0].img
        const product = {product_id, name, price, size, img, quantity}
        // console.log(product)
        dispatch({
            type: "ADD_ITEM_TO_CART",
            payload: {
                item: product
            }
        })
    }   
    return (
        <div className='cart-section-container'>
             <div className='quantity-container'>
                <button className={quantity == 1 ? 'btn disabled': 'btn'} disabled={quantity == 1 ? 'disabled': null} onClick={()=>setQuanitiy(prevState => prevState - 1)}>-</button> <input className='quantity-input' value={quantity} name='quantity'/> <button onClick={()=>setQuanitiy(prevState => prevState + 1)} className='btn'>+</button> 
             </div>
             <button className='add-to-cart' onClick={()=>addItem(product, size)}>Add To Cart</button>  
        </div>
    )
}