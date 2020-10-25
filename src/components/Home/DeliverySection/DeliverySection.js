import React from 'react'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faTruck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import './DeliverySection.scss'
export const DeliverySection = () => {

    const deliverySectionIcons = [
        {icon: faClock, text: '30 Day Exchange', class: 'icon'}, 
        {icon: faTruck, text: 'Free US Shipping', class: 'icon'}, 
        {icon :faComments, text: 'Email Support', class: 'icon'}
    
        ]


    return(
        <div className="delivery-section">
           {deliverySectionIcons.map((item, i) => (
               <div className='delivery-sub-item' key={i}>
                   <FontAwesomeIcon icon ={item.icon} className={item.class} key={i}/>
                    <p className='section-text'>{item.text}</p>

               </div>
            ))
           }
        </div>
    )
}