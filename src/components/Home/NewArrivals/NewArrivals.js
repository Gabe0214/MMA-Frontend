import React, { useState, useEffect } from 'react';
import { ArrivalProducts } from './NewArrivalsProducts'
import './NewArrivals.scss'
const NewArrivals = () => {
    const [items, setItems] = useState([])
    



   useEffect(() => {
        
   }, [])

    return (
        <div>
        <h2 className="title">New Arrivals</h2>
        <ArrivalProducts/> 
        </div>
    )
}

export default NewArrivals