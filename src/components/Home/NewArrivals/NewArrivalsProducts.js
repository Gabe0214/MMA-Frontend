import React from 'react'
import { NavLink } from 'react-router-dom'
import './NewArrivals.scss'
export const ArrivalProducts = ({products}) => {

    return (
        <div className="product-arrival-section">
        <div className="arrival-product-container">
            {products.map((item, i) => (
                <div className="arrival-product" key={i}>
                   <NavLink to={`/products/product/${item.product_id}`}> 
                    <img className="product-image" src={item.images[0].image_one}/>
                    <h3>{item.product_name}</h3>
                   </NavLink> 
                   <span className="product-price">${item.price}</span> 
                </div>
            ))}
          {/* <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7325/29022/muay-thai-boxing-gloves-yokkao-underground-3_1024x1024__12040.1591413418.jpg?c=2"/>
              <h3>VENUM GIANT 3.0 BOXING GLOVES - NAPPA LEATHER - WHITE/GOLD </h3>
             <span className="product-price">$68.99</span>
          </div>
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7278/28807/c83eab03c1ca905732d002906896452a2fb73a35_bg_giant_3.0_white_gold_1500_02_1__3__47621.1581613909.jpg?c=2"/>
             <h3>VENUM GIANT 3.0 BOXING GLOVES - NAPPA LEATHER - WHITE/GOLD </h3>
             <span className="product-price">$68.99</span>
          </div>
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7278/28807/c83eab03c1ca905732d002906896452a2fb73a35_bg_giant_3.0_white_gold_1500_02_1__3__47621.1581613909.jpg?c=2"/>
              <h3>VENUM GIANT 3.0 BOXING GLOVES - NAPPA LEATHER - WHITE/GOLD </h3>
             <span className="product-price">$68.99</span>
          </div>
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7278/28807/c83eab03c1ca905732d002906896452a2fb73a35_bg_giant_3.0_white_gold_1500_02_1__3__47621.1581613909.jpg?c=2"/>
              <h3>VENUM GIANT 3.0 BOXING GLOVES - NAPPA LEATHER - WHITE/GOLD </h3>
             <span className="product-price">$68.99</span>
          </div>
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7278/28807/c83eab03c1ca905732d002906896452a2fb73a35_bg_giant_3.0_white_gold_1500_02_1__3__47621.1581613909.jpg?c=2"/>
              <h3>VENUM GIANT 3.0 BOXING GLOVES - NAPPA LEATHER - WHITE/GOLD </h3>
             <span className="product-price">$68.99</span>
          </div> */}
        </div>
        </div>
    )
}