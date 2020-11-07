import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './SortBy.scss'
export const SortBy = ({ sortIt, setOptions, option}) => {

 
    

    
  const onChange = (e) => {
    setOptions(e.target.value)
     sortIt()
  } 

    
    return (
        <div className='dropdown-container'>
            <select onChange={onChange} value={option} className='dropdown'>
              <option value=''>Select</option>
              <option value='A-Z' >Alphabetically: A-Z</option>
              <option value='Z-A' onClick={()=>console.log('hello')}>Alphabetically: Z-A</option>
              <option value='High-Low'>Price: High-Low</option>
              <option value='Low-High'>Price: Low-High</option>
            </select>
        </div>
    )
}
