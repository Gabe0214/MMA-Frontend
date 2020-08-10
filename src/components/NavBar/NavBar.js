import React from 'react'
import {NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {


   const test = () => {
       console.log("It's Working!!!")
   } 
    return (
        <nav>
            <FontAwesomeIcon icon={faBars} size="lg" onClick={test}/>
            <img src ="/alliance-logo.png" class="logo" />
        </nav>
    )
}

export default NavBar