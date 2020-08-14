import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './MobileMenu.scss'


export const MobileMenu = ({menu, men, women, kids, MMAEquipment}) => {
  
  

    return (
        <>
          <div className={menu ? "menu-container active": "menu-container"}>
            <ul className="list-container">
                <li className="list-item">Men  <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item">Women <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item">Kids <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item">MMA Gear <FontAwesomeIcon icon={faChevronDown}/></li>
            </ul>
         </div> 
        </>
    )
}