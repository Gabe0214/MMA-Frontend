import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './ProductsView.scss'
export const ProductsView = ({products}) => {

    


    return (
        <div className='products-container'>
            {products.map((item, i) => (
                <div className='product-container' key={i}>
                    <div className='image-container'>
                        <img src={item.images[0].image_one} alt='product image' className='image'/>
                    </div>
                    <NavLink className='name' to={`/products/product/${item.product_id}`}>{item.product_name}</NavLink>
                    <span className='item-price'>${item.price}</span>
                </div>
            ))}
        </div>
    )
}
