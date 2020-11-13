import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { items } from './subMenuLinks'
import { useDispatch } from 'react-redux'
import './MobileSubMenu.scss'
export const MobileSubMenu = ({mens, women, kids, subMenu, setSubMenu}) => {
    const dispatch = useDispatch()
    const NavLinks = items.map((item) => {
        return item.links
    })

    
   const words = "women's shirt"
   const arrywords = words.split(' ')
   const firstWord = arrywords[0].substring(0,5)
   console.log(firstWord)

   
   const NavClick = () => {
 
    setSubMenu(!subMenu)
    dispatch({type:"ROUTED"})

   }

    return (
        <div className="sub-menu-container">
           <ul className="links-container">
        {mens ? NavLinks[0].map((link, i) => <NavLink key={i} onClick={NavClick} to={`/products?gender=${link.split(' ')[0].substring(0,3).toLocaleLowerCase()}&type=${link.split(' ')[1].toLowerCase()}`}>{link}</NavLink> ): null}
        { women ? NavLinks[1].map((link, i) => <NavLink  onClick={NavClick} key={i} to={`/products?gender=${link.split(' ')[0].substring(0,5).toLowerCase()}&type=${link.split(' ')[1].toLowerCase()}`}>{link}</NavLink>): null}
        {kids ? NavLinks[2].map((link, i) => <NavLink onClick={NavClick} key={i} to={`/products?gender=${link.split(' ')[0].substring(0,3).toLowerCase()}&type=${link.split(' ')[1]}`}>{link}</NavLink>): null}
           </ul>
        </div>
    )
}