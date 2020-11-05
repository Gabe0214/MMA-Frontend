import React,{useState, useEffect} from 'react';
import ProductCard, { ProductDescription } from './ProductCard'
import Axios from 'axios'
import { Sizes } from './SizesSection/Sizes';
import { CartSection } from './AddToCart/AddToCart'
import './IndividualProduct.scss'
import { ShippingReturns } from './ShippingReturn/ShippingPolicies';

const IndividualProduct = (props) => {
    const [product, setProduct] = useState({})
    const [currentImgView, setCurrentImgView] = useState('')
    const [sizeSelected, setSelectedSize] = useState('')
    const allSizes = [{size: 'S'}, {size: 'M'}, {size: 'L'}, {size: 'XL'}, {size: '2XL'}, {size: '3XL'}]
    const id = props.match.params.id
   
    useEffect(() => {
       const cancelToken = Axios.CancelToken // cancel token is used to fully abort asynchronous calls when component is unmounted. If not, memory leakage error occurs. 
       const source = cancelToken.source()
       
       Axios.get(`http://localhost:8000/products/${id}`, {cancelToken: source.token})
        .then(res => {
            setProduct(res.data)
            setCurrentImgView(res.data.images[0].img) /* current image view will change dynamically via user actions*/
        })
        .catch(err => console.log(err))
        
       return () => {
           source.cancel()
       }
        
    }, [])
   
   

    return (
      <>
        <ProductCard price={product.price} image={currentImgView && currentImgView} images={product.images} setImageView={setCurrentImgView} name={product.name}/> 
        <Sizes setSelectedSize={setSelectedSize} sizeSelected={sizeSelected} allSizes={allSizes}/>
        <CartSection product={product} size={sizeSelected}/>
        <ProductDescription desc={product.description}/>
        <ShippingReturns/>
      </>
    )
}

export default IndividualProduct