import React,{useState, useEffect} from 'react';
import ProductCard from './ProductCard'
import Axios from 'axios'


const IndividualProduct = (props) => {
    const [product, setProduct] = useState({})
    const id = props.match.params.id
   
    useEffect(() => {
       const cancelToken = Axios.CancelToken // cancel token is used to fully abort asynchronous calls when component is unmounted. If not, memory leakage error occurs. 
       const source = cancelToken.source()
       
       Axios.get(`http://localhost:3000/products/${id}`, {cancelToken: source.token})
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => console.log(err))
        
       return () => {
           source.cancel()
       }
        
    }, [])


  
     console.log(product.images && product.images[0].img_source_1)
    return (
      <>
        <ProductCard image={product.images && product.images[0].img_source_1} /> 
      </>
    )
}

export default IndividualProduct