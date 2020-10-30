import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])




    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(prevState => res.data)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <h1>All Products</h1>
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
