import React from 'react'
import { items } from '../ShoppingCartPage/ShoppingCartDummyData'
import './Home.scss'

const HomePage = ({cart, setCart}) => {


const addItem = () => {
    setCart([...cart, 1])
}

    return (
        <>
        <div id="home-paige-container">
            <h1>Home Page under Construction</h1>
            <button onClick={addItem}>Add to cart</button>
        </div>
        </>
    )
}

export default HomePage