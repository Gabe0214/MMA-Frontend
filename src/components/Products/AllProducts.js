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

    }, [allProducts])

    useEffect(() => {
        sortProducts()
    },[sortOption])
    
    
    
    const sortProducts = () => {
         console.log(sortOption)
        if(sortOption == 'A-Z'){
           const sorting = allProducts.sort((a,b) => {
               if(a.product_name > b.product_name){
                   return 1
               } else {
                   return -1
               }
           })

            return setDisplayAllProducts(sorting)
        }

        else if(sortOption == 'Z-A'){
            const sorting = allProducts.sort((a, b) => {
                if(a.product_name > b.product_name) {
                    return -1
                } else {
                    return 1 
                }
            })
          return setDisplayAllProducts(sorting)
        }
        
        else if(sortOption === ''){
            setDisplayAllProducts(allProducts && allProducts)
        }
    
        

    }    

    const handleChange = (e) => {
     e.preventDefault();
     setSortOption(e.target.value)
    
    }








    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
             <SortBy onChange={handleChange}/>
            <ProductsView products={displayAllProducts}/>
        </div>
    )
}

export default AllProducts
