import React from 'react';
import EmailSubscribe from './EmailSubscribe/EmailSubscribe';
import { Socials } from './Socials/Socials';
import { AboutCompany } from './AboutCompany/AboutCompany';
import { ShopFooter } from './ShopFooterSection/ShopFooterSection';
import { DeliverySection } from './DeliverySection/DeliverySection';
import './Footer.scss';
export const FooterContainer = () => {
	return (
		<React.Fragment>
			<DeliverySection />
			<section id='footer'>
				<div className='footer-inner-container'>
					<EmailSubscribe />
					<Socials />
					<AboutCompany />
					<ShopFooter />
				</div>
			</section>
			<div className='copy-right'>
				<h5>
					<span>&#169;</span> 2020 Gabriel Anguiano
				</h5>
			</div>
		</React.Fragment>
	);
};
