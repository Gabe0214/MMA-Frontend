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

   
   const NavClick = () => {
 
    setSubMenu(!subMenu)
    dispatch({type:"ROUTED"})

   }

    return (
        <div className="sub-menu-container">
           <ul className="links-container">
    {mens ? NavLinks[0].map((link, i) => <NavLink key={i} onClick={NavClick} to={`products?gender=${link.split(' ')[0].substring(0,3).toLocaleLowerCase()}&type=${link.split(' ')[1]}`}>{link}</NavLink> ): null}
        { women ? NavLinks[1].map((link) => <NavLink  onClick={() => setSubMenu(!subMenu)} to ={`women-${link.replace(/Women's /g, "")}`}>{link}</NavLink>): null}
        {kids ? NavLinks[2].map((link) => <NavLink onClick={() => setSubMenu(!subMenu)} to={`kids-${link.replace(/Kid's /g, "")}`}>{link}</NavLink>): null}
           </ul>
        </div>
    )
}