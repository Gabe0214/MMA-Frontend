import React, {useState } from 'react'
import { items } from './ShoppingCartDummyData'

const ShoppingCart = () => {
    const [cart, setCart] = useState(items)

    console.log(cart)
    return(
        <>
          <p>{cart && cart.length}</p>
        </>
    )
}


export default ShoppingCart