import React from 'react'
import './ShippingPolicies.scss'
export const ShippingReturns = () => {

    return (
        <div className='shipping-container'>
            <h3>Shipping/Returns</h3>
            <ul className='shipping-list'>
                  <li>Allow up to 3 to 5 business days for order processing</li>  
                  <li>Sale items can be exchanged for a different size in the same style only</li>
                  <li>No refunds or store credits will be issued for sale or discounted items</li>  
                  <li>Purchaser is responsible for any applicable duty charges</li>  
                  <li>Items may be delivered via seperate shipments</li>  
            </ul>
        </div>
    )
}