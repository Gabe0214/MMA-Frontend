import React from 'react';
import './IndividualProduct.scss'
const ProductCard = ({images, name, image, setImageView, price}) => {



   
    const changeMainImageView = (img) => {
         setImageView(img)
    }


    return (
        <div className='product-container'>
            <img src={image} alt='AN IMAGE' className='main-img-view'/>
            <div className ='images-container'>
                {images && images.map((item, i) => {
                    if(item.img !== null){
                    return <img src={item.img} alt='an Image' key={i} onClick={(e) =>e.preventDefault, ()=>changeMainImageView(item.img)}/>
                    }
                })}
            </div>
            <h3 className='product-name'>{name}</h3>
                <span className='price'>{price}</span>
        </div>
    )
}

export default ProductCard