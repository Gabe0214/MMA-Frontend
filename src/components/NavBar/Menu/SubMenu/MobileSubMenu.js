import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { items } from './subMenuLinks'

export const MobileSubMenu = ({mens, women, kids}) => {

    const NavLinks = items.map((item) => {
        return item.links
    })

 

    return (
        <div className="sub-menu-container">
           <ul>
        {mens ? NavLinks[0].map((link) => <li>{link}</li>): null}
        { women ? NavLinks[1].map((link) => <li>{link}</li>): null}
        {kids ? NavLinks[2].map((link) => <li>{link}</li>): null}
           </ul>
        </div>
    )
}