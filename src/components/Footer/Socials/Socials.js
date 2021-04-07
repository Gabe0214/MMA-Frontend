import React from 'react';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Socials.scss';
export const Socials = () => {
	const socialIcons = [
		{ name: faFacebookSquare, url: 'facebook.com', class: 'social' },
		{ name: faTwitterSquare, url: 'twitter.com', class: 'social' },
		{ name: faInstagramSquare, url: 'instagram.com', class: 'social' },
		{ name: faYoutubeSquare, url: 'youtube.com', class: 'social' },
		{ name: faEnvelopeSquare, url: 'GabeWebDev097@gmail.com', class: 'social' }
	];

	return (
		<div className='socials-container'>
			<h3 className='subtitle'>Socials</h3>
			<div className='socials-icon-container'>
				{socialIcons.map((icon, i) => (
					<a
						key={i}
						href={!icon.url.includes('@') ? `https://${icon.url}` : `mailto:${icon.url}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={icon.name} className={icon.class} size='lg' key={i} />
					</a>
				))}
			</div>
		</div>
	);
};
