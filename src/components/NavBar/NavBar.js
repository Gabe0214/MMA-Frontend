import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavCart } from './NavShoppingCart'
import './Navbar.scss'
const NavBar = ({cart}) => {


   const test = () => {
       console.log("It's Working!!!")
   } 
    return (
        <nav id ="nav-bar">
            <FontAwesomeIcon icon={faBars} size="lg" onClick={test}/>
            <img src ="/alliance-logo.png" class="logo" />
            <NavCart cart ={cart}/>
        </nav>
    )
}

export default NavBar