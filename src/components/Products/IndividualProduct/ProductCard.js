import React from 'react';
import './IndividualProduct.scss'
const ProductCard = ({images, name, image}) => {

    return (
        <div className='product-container'>
            <img src={image && image} alt='AN IMAGE'/>
            {/* <div className ='images-container'>
                {images && images.map((item) => {
                    return <img src={item} alt='an Image'/>
                })}
            </div> */}
        </div>
    )
}

export default ProductCard