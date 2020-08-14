import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './MobileMenu.scss'


export const MobileMenu = ({menu, men, women, kids, MMAEquipment, setMenu}) => {
  
  const body = document.querySelector('body')

  if(menu) {
      body.style.overflowY = 'hidden'
  } else {
    body.style.overflowY = ''
  }

    return (
        <div>
          <div className={menu ? "menu-container activated": "menu-container"}>
            <ul className="list-container">
                <li className="list-item" >Men  <FontAwesomeIcon icon={faChevronDown}/>
                </li>
                <NavLink to="/mens/gi" className="none" onClick={() => setMenu(!menu)} >Men's Gi</NavLink>
                <li className="list-item" >Women <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item" >Kids <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item" >MMA Gear <FontAwesomeIcon icon={faChevronDown}/></li>
            </ul>
         </div> 
        </div>
    )
}