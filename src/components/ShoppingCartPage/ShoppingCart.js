import React, {useState } from 'react'
import { items } from './ShoppingCartDummyData'

const ShoppingCart = () => {
    const [cart, setCart] = useState(items)


    return(
        <>
          <p>{cart && cart.length}</p>
        </>
    )
}


export default ShoppingCart