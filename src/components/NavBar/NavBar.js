import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavCart } from './NavShoppingCart'
import { MobileMenu } from './Menu/MoibileMenu'
import './Navbar.scss'
const NavBar = ({cart, menu, setMenu, isClosed, setClosed}) => {


   const test = () => {
     setMenu(!menu)
     setClosed(!isClosed)
     
   } 
   
    return (
        <>
         <nav id ="nav-bar">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={test}/>
            <img src ="/alliance-logo.png" className="logo" />
            <NavCart cart ={cart}/>
        </nav>
        <MobileMenu menu ={menu} isClosed={isClosed}/>
        </>
    )
}

export default NavBar