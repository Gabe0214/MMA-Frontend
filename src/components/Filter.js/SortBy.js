import React, { useEffect, useState } from 'react'

export const SortBy = ({products, setProducts}) => {

 const [options, setOption] = useState('Alphabetically: A-Z')
 
 const settings = ['Alphabetically: A-Z', 'Alphabetically: Z-A']
    

 const sortProducts = () => {
     const sortedProducts = products.sort((a, b) => {
         if (a.product_name > b.product_name){
             return 1
         } else {
             return -1
         }
     })

     setProducts(sortedProducts)
    
 }

 const onChange = (e) => {
     setOption(e.target.value)
     sortProducts()
     console.log(e.target.value)
 }   

    
    return (
        <div>
            <select onChange={onChange}>
                {settings.map((item, i) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}
