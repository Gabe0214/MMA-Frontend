import React from 'react'
import EmailSubscribe from './EmailSubscribe/EmailSubscribe'
import { Socials } from './Socials/Socials'
import './Footer.scss'
export const FooterContainer = () => {

    return (
        <div className='footer-container'>
            <EmailSubscribe/> 
            <Socials/> 
        </div>
    )
}