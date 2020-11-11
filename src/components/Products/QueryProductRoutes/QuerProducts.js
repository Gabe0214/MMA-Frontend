import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
const QuerProducts = ({location}) => {
    const arry = location.search.split('&')
    const reString = arry[0].replace('?gender=', '')
    const reStringTwo = arry[1].replace('type=', '')
    // console.log(arry)
    const dispatch = useDispatch()
    const qry = location.search

    const routed = useSelector((state) => state.productsReducer)
   
    useEffect(() => {
        const getQueryItems = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/products${qry}`)
                console.log(res)
            }

            catch (err) {
                console.log(err)
            }
        }

        getQueryItems()

    },[routed.routed])
    return (
        <div>
            <h1>{ reString !== 'unisex' ?  `${reString.toUpperCase()} ${reStringTwo.toUpperCase()}` : reStringTwo.toUpperCase()}</h1>
        </div>
    )
}

export default QuerProducts
