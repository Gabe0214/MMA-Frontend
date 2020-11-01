import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Filter.js/SortBy'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])
    const [filteredI, setFiltered] = useState([])
    const [sortOption, setSortOption] = useState('')
    const [filterOption, setFilter] = useState('')
    let myRef = useRef(sortOption)


    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(res.data)
            setFiltered(res.data)
        })
        
        .catch(err => console.log(err))


    },[])


   useEffect(() => {
       myRef.current = ''
   },[filterOption])
    
    
    
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
   
    // const sorted = allProducts.sort((a, b) =>{
    //     console.log(myRef.current)
    //    if(sortOption == 'A-Z'){
    //     if(a.product_name > b.product_name){
    //         return 1
    //     } else  return -1
    // } else if(sortOption == 'High-Low'){
    //      if(Number(a.price) > Number(b.price)){
    //          return -1
    //      } else return 1
    // }
    // })

     function selected(e){
         setSortOption(e.target.value)
        sortP(e.target.value)
    }
    
    function sortP(sortBy){
             if(sortBy == 'A-Z'){
                 allProducts.sort((a, b) => (a.product_name > b.product_name) ? 1 : -1)
             }
             else if(sortBy == 'Z-A'){
                 allProducts.sort((a,b) => (a.product_name > b.product_name) ? -1 : 1)
             }
             else if(sortBy =='High-Low') {
                 allProducts.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? -1 : 1)
             } else if(sortBy == 'Low-High'){
                 allProducts.sort((a,b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : -1)
             }

             return allProducts
    }

    function filter(filterBy){
        
        const itISA = filteredI.filter((items) =>{
            // console.log(allProducts)
            if(items.brand.toLowerCase().includes(filterBy.toLowerCase())){
                console.log('hey')
                return items
            }  else if(filterBy == 'All'){
                return items
            }
        })
        // console.log(allProducts)
        setAllProducts(itISA)
     }

    function callFilter(e){
        filter(e.target.value)
    }
  
    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
            <select onChange={selected} value={sortOption}>
                <option value=''>Select</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='High-Low'>High-Low</option>
                <option value='Low-High'>Low-High</option>
            </select>
            <button value='Affliction'onClick={callFilter}>Affliction</button>
            <button value='Venom'onClick={callFilter}>Venom</button>
            <button value='All'onClick={callFilter}>All</button>
             {/* <SortBy sortIt={sortProducts} setOptions={setSortOption}/> */}
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
