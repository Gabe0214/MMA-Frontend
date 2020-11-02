import React from 'react'

export const SortBy = ({ sortIt, setOptions, option}) => {

 
    

    
  const onChange = (e) => {
    setOptions(e.target.value)
     sortIt()
  } 

    
    return (
        <div>
            <select onChange={onChange} value={option}>
              <option value=''>Select</option>
              <option value='A-Z' >Alphabetically: A-Z</option>
              <option value='Z-A'>Alphabetically: Z-A</option>
              <option value='High-Low'>Price: High-Low</option>
              <option value='Low-High'>Price: Low-High</option>
            </select>
        </div>
    )
}
