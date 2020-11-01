import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Filter.js/SortBy'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])
    const [sortOption, setSortOption] = useState('')

    let myRef = useRef(sortOption)


    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            return setAllProducts(res.data)
        })
        
        .catch(err => console.log(err))


    },[])


   useEffect(() => {
       myRef.current = ''
   })
    
    
    
    const sortProducts = () => {
    
        // console.log(myRef.current)
        // if(myRef.current == 'A-Z'){
        //     allProducts.sort((a, b) => (a.product_name > b.product_name) ? 1 : -1)
        // }

        // if(myRef.current == 'Z-A'){
        //     allProducts.sort((a,b) => (a.product_name > b.product_name) ? -1 : 1)
         
        // }

         console.log(allProducts.sort((a,b) => {
            if (a.product_name > b.product_name){
                return 1
            } else {return -1}
        }))
        
    }    

    const sorted = allProducts.sort((a, b) =>{
        console.log(myRef.current)
       if(sortOption == 'A-Z'){
        if(a.product_name > b.product_name){
            return 1
        } else  return -1
    } else if(sortOption == 'High-Low'){
         if(Number(a.price) > Number(b.price)){
             return -1
         } else return 1
    }
    })

   
    const selected = (e) => { 
        e.preventDefault()
        setSortOption(e.target.value)
    }      
    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
            <select onChange={selected}>
                <option value=''>Select</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='High-Low'>High-Low</option>
            </select>
            <button onClick={sortProducts}>Sort</button>
             {/* <SortBy sortIt={sortProducts} setOptions={setSortOption}/> */}
            <ProductsView products={sorted}/>
        </div>
    )
}

export default AllProducts
