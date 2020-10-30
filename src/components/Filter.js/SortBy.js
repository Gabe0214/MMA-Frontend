import React, { useEffect, useState } from 'react'

export const SortBy = ({products, setProducts}) => {

 const [options, setOption] = useState('Alphabetically: A-Z')
 
 const settings = ['Alphabetically: A-Z', 'Alphabetically: Z-A']
    

    
 

 const onChange = (e) => {
     setOption(e.target.value)
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
