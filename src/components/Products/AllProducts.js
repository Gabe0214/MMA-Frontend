import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Filter.js/SortBy'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])




    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [allProducts])

    

    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
             <SortBy products={allProducts} setProducts={setAllProducts}/>
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
