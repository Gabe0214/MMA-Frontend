import React from 'react'
import './NewArrivals.scss'
export const ArrivalProducts = ({name, img, desc, price}) => {

    return (
        <div className="arrival-product-container">
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7325/29022/muay-thai-boxing-gloves-yokkao-underground-3_1024x1024__12040.1591413418.jpg?c=2"/>
             <h3>Item One</h3>
          </div>
          <div className="arrival-product">
              <img className="product-image" src="https://cdn11.bigcommerce.com/s-eb373/images/stencil/1200x1200/products/7278/28807/c83eab03c1ca905732d002906896452a2fb73a35_bg_giant_3.0_white_gold_1500_02_1__3__47621.1581613909.jpg?c=2"/>
             <h3>Item Two</h3>
          </div>
        </div>
    )
}