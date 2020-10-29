import React, { useState } from 'react'
import './Sizes.scss'
export const Sizes = () => {
    const [checkedSize, setCheckedSize] = useState(false)
    const [sizeSelected, setSelectedSize] = useState('')
    const allSizes = [{size: 'S'}, {size: 'M'}, {size: 'L'}, {size: 'XL'}, {size: '2XL'}, {size: '3XL'}]

    const sizeChecked = (sizeId) => {
        setCheckedSize(currState => true)
        setSelectedSize(sizeId)
    }

    return (
        <>
        <h4 className='size-title'>Size</h4>
        <div className='sizes-container'>
            {allSizes.map((size) => (
                <div className={checkedSize && size.size == sizeSelected ? 'size checked-size': 'size'} onClick={() =>sizeChecked(size.size)}>{size.size}</div>
            ))}   
        </div>
        </>
    )
}