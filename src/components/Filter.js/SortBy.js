import React, { useEffect, useState } from 'react'

export const SortBy = ({setOption, sortIt}) => {

 
    

    
  const onChange = (e) => {
      setOption(e.target.value)
      sortIt(e.target.value)
  } 

    
    return (
        <div>
            <select onChange={onChange}>
              <option value=''>Select</option>
              <option value='A-Z'>Alphabetically: A-Z</option>
              <option value='Z-A'>Alphabetically: Z-A</option>
            </select>
        </div>
    )
}
