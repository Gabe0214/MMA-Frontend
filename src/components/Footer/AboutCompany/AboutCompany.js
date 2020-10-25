import React from 'react';
import { NavLink } from 'react-router-dom'
import './AboutCompany.scss'
export const AboutCompany = () => {
    const aboutRoutes = [
        {
            name: 'About Us',
            url: '/about-us',

        },
        {
            name: 'Contact',
            url: '/contact'
        },
        {
            name: 'Careers',
            url: '/careers',
        },
        {
            name: 'Community',
            url: '/community'
        }
    ]
    return (
        <div className='about-company-container'>
            <h3 className='subtitle'>Alliance</h3>
            <ul className='list-container'>
                {aboutRoutes.map((item,i) => (
                    <li key={i}><NavLink to={item.url}>{item.name}</NavLink></li>
                ))}
            </ul>
        </div>
    )
}