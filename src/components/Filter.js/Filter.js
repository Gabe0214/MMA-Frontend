import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Filter.scss'
export const Filter = () => {
    const [brands, setBrands] = useState([])
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const getBrands = async () => {
            try {
                const response =  await axios.get('http://localhost:8000/products')
                const items= response.data.map((products) => products.brand)
                const removeDup = [...new Set(items)]
                setBrands(removeDup.sort())
            }

            catch (err){
                console.log(err)
            }
        }

        getBrands()
    },[])

    return (
        <div>
            <button onClick={()=>setModal(prevState => !prevState)} className={modal ? 'filter-btn is--toggled': 'filter-btn'}><span>Filter</span> <div className='icon-filters'></div></button>
            { modal ?<ul>
                {brands.map((brand, i) => {
                    return <li key={i}>{brand.toUpperCase()}</li>
                })
            }
            </ul>: null }
        </div>
    )
}
