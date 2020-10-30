import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Filter.js/SortBy'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])




    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(prevState => res.data)
        })
        .catch(err => console.log(err))
    }, [])

    
    const sortedProducts = allProducts.sort((a, b) => {
        if (a.product_name > b.product_name){
            return 1
        } else {
            return -1
        }
    })
  
      console.log(allProducts)


    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
             <SortBy />
            <ProductsView products={sortedProducts}/>
        </div>
    )
}

export default AllProducts
