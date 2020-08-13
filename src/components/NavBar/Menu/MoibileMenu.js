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
                <li>Men  <FontAwesomeIcon icon={faChevronDown}/></li>
                <li>Women <FontAwesomeIcon icon={faChevronDown}/></li>
                <li>Kids <FontAwesomeIcon icon={faChevronDown}/></li>
                <li>MMA Gear <FontAwesomeIcon icon={faChevronDown}/></li>
            </ul>
         </div> 
        </>
    )
}