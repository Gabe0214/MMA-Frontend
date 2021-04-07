import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './desktopLinks.scss';
export const DesktopLinks = ({ setOptions, options }) => {
	const mouseOver = (type) => {
		if (type === 'men') {
			return setOptions({ ...options, men: true, women: false, kids: false, mma: false });
		}

		if (type === 'women') {
			return setOptions({ ...options, women: true, men: false, kids: false, mma: false });
		}

		if (type === 'kid') {
			return setOptions({ ...options, women: false, men: false, kids: true, mma: false });
		}

		if (type === 'mma') {
			return setOptions({ ...options, women: false, men: false, kids: false, mma: true });
		}
	};

	const mouseLeave = (type) => {
		if (type !== 'men') {
			return setOptions({ ...options, men: false });
		}

		if (type !== 'women') {
			return setOptions({ ...options, women: false });
		}
	};
	return (
		<div className='desktop-links-outer-container'>
			<ul>
				<li onMouseOver={() => mouseOver('men')} onMouseLeave={() => mouseLeave('men')}>
					Men's <FontAwesomeIcon icon={faChevronDown} className={!options.men ? 'arrow-icon' : 'hovered'} />
				</li>
				<li onMouseOver={() => mouseOver('women')} onMouseLeave={() => mouseLeave('women')}>
					Women's <FontAwesomeIcon icon={faChevronDown} className={!options.women ? 'arrow-icon' : 'hovered'} />
				</li>
				<li onMouseOver={() => mouseOver('kid')} onMouseLeave={() => mouseLeave('kid')}>
					Kid's <FontAwesomeIcon icon={faChevronDown} className={!options.kids ? 'arrow-icon' : 'hovered'} />
				</li>
				<li onMouseOver={() => mouseOver('mma')} onMouseLeave={() => mouseLeave('mma')}>
					MMA Gear<FontAwesomeIcon
						icon={faChevronDown}
						className='arrow-icon'
						className={!options.mma ? 'arrow-icon' : 'hovered'}
					/>{' '}
				</li>
				<li>
					<NavLink to='/products/all'>Shop All</NavLink>
				</li>
			</ul>
		</div>
	);
};
