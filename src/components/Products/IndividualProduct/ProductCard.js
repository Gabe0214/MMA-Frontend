import React from 'react';
import './IndividualProduct.scss'
const ProductCard = ({images, name, image, setImageView}) => {



   
    const changeMainImageView = (img) => {
         setImageView(img)
    }


    return (
        <div className='product-container'>
            <img src={image} alt='AN IMAGE' className='main-img-view'/>
            <div className ='images-container'>
                {images && images.map((item, i) => (
                    
                    <img src={item.img} alt='an Image' key={i} onClick={(e) =>e.preventDefault, ()=>changeMainImageView(item.img)}/>
                ))}
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default ProductCard