import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavCart } from './NavShoppingCart'
import { MobileMenu } from './Menu/MoibileMenu'
import './Navbar.scss'
import {useHistory } from 'react-router-dom'
const NavBar = ({cart}) => {
  const [menu, setMenu] = useState(false)
  let history = useHistory()

   const test = (e) => {
    
     setMenu(!menu)
     window.scroll(0,0)
     console.log('hello')
   } 
   
    return (
        <>
         <nav id ="nav-bar">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={test}/>
            <img src ="/alliance-logo.png" className="logo" onClick={() => history.push('/')}/>
            <NavCart cart ={cart}/>
        </nav>
        <MobileMenu menu ={menu} setMenu={setMenu}/>
        </>
    )
}

export default NavBar