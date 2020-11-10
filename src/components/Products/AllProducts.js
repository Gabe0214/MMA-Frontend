import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../reducers/productsReducer/productsActions'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Sort.js/SortBy'
import { Filter } from '../Filter.js/Filter'
import './ProductsView.scss'
function AllProducts() {

    const [allProducts, setAllProducts] = useState([])
    const [filteredI, setFiltered] = useState([])
    const [sortOption, setSortOption] = useState('')
    const productReducer = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(fetchAllProducts())
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


    
    function sortP(){
        let result;
             if(sortOption == 'A-Z'){
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
                 
                 return items
            }  else if(filterBy == 'All'){
                return items
            }
        })
        setAllProducts(result)

     }

  
      if(productReducer.loading){
          return (
              <>
              <h1>Loading Data.....</h1>
              </>
          )
      }


    return (
        <div>
            <h2 style={{textAlign:'center'}} className='title'>All Products</h2>
            <div className='sort-filter-container'>
                <SortBy sortIt={sortP} setOptions={setSortOption} option={sortOption}/>
                <Filter filterBrand={filter}/>
            </div>
            <ProductsView products={allProducts}/>
        </div>
    )
}

export default AllProducts
