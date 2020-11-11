import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../reducers/productsReducer/productsActions'
import { ProductsView } from './ProductsView'
import { SortBy } from '../Sort.js/SortBy'
import { Filter } from '../Filter.js/Filter'
import { sortProductsByDesc, sortProductsByAsc, sortProductsPriceLowHigh, sortProductsPriceHighLow } from '../reducers/productsReducer/productsActions'
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
                 dispatch(sortProductsByDesc())
              }
             else if(sortOption == 'Z-A'){
                 dispatch(sortProductsByAsc())
             }
             else if(sortOption =='High-Low') {
                 dispatch(sortProductsPriceHighLow())
             } else if(sortOption == 'Low-High'){
                 dispatch(sortProductsPriceLowHigh())
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
            <ProductsView products={productReducer.products}/>
        </div>
    )
}

export default AllProducts
