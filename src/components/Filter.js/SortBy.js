import React from 'react'

export const SortBy = ({ sortIt, setOptions}) => {

 
    

    
  const onChange = (e) => {
    setOptions(e.target.value)
    // sortIt(e.target.value)
  } 

    
    return (
        <div>
            <select onChange={onChange}>
              <option value=''>Select</option>
              <option value='A-Z' onClick={(e)=>sortIt(e.target.value)}>Alphabetically: A-Z</option>
              <option value='Z-A'>Alphabetically: Z-A</option>
            </select>
        </div>
    )
}
