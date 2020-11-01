import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Filter.js/SortBy'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])
    const[displayAllProducts, setDisplayAllProducts] = useState([])
    const [sortOption, setSortOption] = useState('')



    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(res.data)
        })
        .catch(err => console.log(err))

    },[])


    
    

    
    const sortProducts = (value) => {
         if(value == '') {return}
             
        if(value == 'A-Z'){
            console.log(value)
            allProducts.sort((a, b) => (a.product_name > b.product_name) ? 1 : -1)
        }

        if(value == 'Z-A'){
            console.log(value)
             allProducts.sort((a,b) => (a.product_name > b.product_name) ? -1 : 1)
         
        }
    }    

//  const sorted = allProducts.sort((a,b) => {
//      const isReversed = (sortOption == 'A-Z') ? 1 : -1
//      return isReversed * a.product_name.localeCompare(b.product_name)
//  })







    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
             <SortBy setOption={setSortOption} sortIt={sortProducts}/>
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
