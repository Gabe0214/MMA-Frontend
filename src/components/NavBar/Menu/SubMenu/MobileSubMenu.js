import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { items } from './subMenuLinks'
import './MobileSubMenu.scss'
export const MobileSubMenu = ({mens, women, kids, subMenu, setSubMenu}) => {

    const NavLinks = items.map((item) => {
        return item.links
    })

 

    return (
        <div className="sub-menu-container">
           <ul className="links-container">
        {mens ? NavLinks[0].map((link) => <NavLink onClick={() => setSubMenu(!subMenu)} to = {`men-${link.replace(/Men's /g, "")}`}>{link}</NavLink>): null}
        { women ? NavLinks[1].map((link) => <NavLink  onClick={() => setSubMenu(!subMenu)} to ={`women-${link.replace(/Women's /g, "")}`}>{link}</NavLink>): null}
        {kids ? NavLinks[2].map((link) => <NavLink onClick={() => setSubMenu(!subMenu)} to={`kids-${link.replace(/Kid's /g, "")}`}>{link}</NavLink>): null}
           </ul>
        </div>
    )
}