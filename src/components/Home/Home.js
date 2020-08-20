import React from 'react'
import { items } from '../ShoppingCartPage/ShoppingCartDummyData'

import './Home.scss'

const HomePage = ({cart, setCart}) => {


const addItem = () => {
    setCart([...cart, 1])
}

    return (
        <>
         <div className="parent-container-slider">
             <div className="item-one"></div>
             <div className="item-two"></div>            
             <div className="item-three"></div>            
         </div>
        </>
    )
}

export default HomePage