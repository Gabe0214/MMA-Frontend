import React, {useState, useEffect } from 'react'
import axios from 'axios'
const QuerProducts = ({location}) => {
    const arry = location.search.split('&')
    const reString = arry[0].replace('?gender=', '')
    const reStringTwo = arry[1].replace('type=', '')
    console.log(reString, reStringTwo)
    // console.log(arry)

    const qry = location.search

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

    },[])
    return (
        <div>
            <h1>{ reString !== 'unisex' ?  `${reString.toUpperCase()} ${reStringTwo.toUpperCase()}` : reStringTwo.toUpperCase()}</h1>
        </div>
    )
}

export default QuerProducts
