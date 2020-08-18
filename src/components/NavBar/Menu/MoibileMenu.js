import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { MobileSubMenu } from './SubMenu/MobileSubMenu'
import './MobileMenu.scss'


export const MobileMenu = ({menu, setMenu}) => {
  const [rotateIcon, setRotateIcon] = useState(false)
  const [subMenu, setSubmenu] = useState({
    mens: false,
    womens: false,
    kids: false,
    MMAGear: false
  }) 
  
  // get's rid of scroll when menu  pops up
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
                <li className="list-item" >Men  <FontAwesomeIcon icon={faChevronDown} className={rotateIcon ? "rotate" : ""} onClick={() =>  setSubmenu({...subMenu, mens: !subMenu.mens})}/>
                </li>
                 <MobileSubMenu mens={subMenu.mens}/>
                <li className="list-item" >Women <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item" >Kids <FontAwesomeIcon icon={faChevronDown}/></li>
                <li className="list-item" >MMA Gear <FontAwesomeIcon icon={faChevronDown}/></li>
            </ul>
         </div> 
        </div>
    )
}