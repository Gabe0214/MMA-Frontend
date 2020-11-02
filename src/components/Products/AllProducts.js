import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Sort.js/SortBy'
import { Filter } from '../Filter.js/Filter'

function AllProducts() {

    const [allProducts, setAllProducts] = useState([])
    const [filteredI, setFiltered] = useState([])
    const [sortOption, setSortOption] = useState('')
   


    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then((res) => {
            setAllProducts(res.data)
            setFiltered(res.data)
        })
        
        .catch(err => console.log(err))


    },[])


    
    useEffect(() => {
        sortP('')
    }, [sortOption])

     function selected(e){
        setSortOption(e.target.value)
        sortP('')
    }
    
    function sortP(){
        let result;
             if(sortOption == 'A-Z'){
                 console.log('im here')
                  result = allProducts.sort((a, b) => (a.product_name > b.product_name) ? 1 : -1).map((items) => items)
              }
             else if(sortOption == 'Z-A'){
                 result = allProducts.sort((a,b) => (a.product_name > b.product_name) ? -1 : 1).map((items) => items)
             }
             else if(sortOption =='High-Low') {
                 result = allProducts.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? -1 : 1).map((items) => items)
             } else if(sortOption == 'Low-High'){
                 result = allProducts.sort((a,b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : -1).map((items) => items)
             } else if(sortOption == ''){
                 return 
             }
          setAllProducts(result)
    }

    function filter(filterBy){
        
        const result = filteredI.filter((items) =>{

            if(items.brand.toLowerCase().includes(filterBy.toLowerCase())){
                console.log('hey')
                return items
            }  else if(filterBy == 'All'){
                return items
            }
        })

        setAllProducts(result)
     }

  
  
    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
            {/* <select onChange={selected} value={sortOption}>
                <option value=''>Select</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='High-Low'>High-Low</option>
                <option value='Low-High'>Low-High</option>
            </select> */}
            {/* <button value='Affliction'onClick={(e)=>filter(e.target.value)}>Affliction</button>
            <button value='Venom'onClick={(e)=>filter(e.target.value)}>Venom</button>
            <button value='All'onClick={(e)=>filter(e.target.value)}>All</button>
            <button value='Gracie'onClick={(e)=>filter(e.target.value)}>Gracie</button> */}
             <SortBy sortIt={sortP} setOptions={setSortOption} option={sortOption}/>
             <Filter/>
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
