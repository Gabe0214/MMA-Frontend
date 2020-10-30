import React, { useState, useEffect } from 'react';
import { ArrivalProducts } from './NewArrivalsProducts'
import Axios from 'axios'
import './NewArrivals.scss'
const NewArrivals = () => {
    const [items, setItems] = useState([])
    



   useEffect(() => {
        Axios.get('http://localhost:8000/products')
        .then((res) => {
            setItems(res.data.slice(0,7))
        })
        .catch((err) => console.log(err.response))
   }, [])

   console.log(items)
   
    return (
        <div className="arrival-main-view">
        <h2 className="title">New Arrivals</h2>
        <ArrivalProducts products={items}/> 
        </div>
    )
}

export default NewArrivals