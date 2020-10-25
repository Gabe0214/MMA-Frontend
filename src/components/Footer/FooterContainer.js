import React from 'react'
import EmailSubscribe from './EmailSubscribe/EmailSubscribe'
import { Socials } from './Socials/Socials'
import { AboutCompany } from './AboutCompany/AboutCompany'
import { ShopFooter } from './ShopFooterSection/ShopFooterSection'
import './Footer.scss'
export const FooterContainer = () => {

    return (
        <div className='footer-container'>
            <EmailSubscribe/> 
            <Socials/> 
            <AboutCompany/>
            <ShopFooter/>  
        </div>
    )
}