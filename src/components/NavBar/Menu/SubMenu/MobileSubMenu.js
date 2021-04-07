import React from 'react';
import { NavLink } from 'react-router-dom';
import { items } from './subMenuLinks';
import { useDispatch } from 'react-redux';
import './MobileSubMenu.scss';
export const MobileSubMenu = ({ mens, women, kids, mma, subMenu, setSubMenu }) => {
	const dispatch = useDispatch();
	const NavLinks = items.map((item) => {
		return item.links;
	});

	/* lines 14 - 17 is practing string configuration for qry paramaters*/

	const words = "kid's shirt";
	const arrywords = words.split(' ');
	const firstWord = arrywords[0].substring(0, 6).replace("'", '');
	console.log(firstWord);

	const NavClick = (pathName) => {
		// console.log(pathName);
		setSubMenu(!subMenu);

		dispatch({ type: 'ROUTED' });
	};

	return (
		<div className='sub-menu-container'>
			<ul className='links-container'>
				{mens ? (
					NavLinks[0].map((link) => (
						<NavLink
							key={link}
							onClick={NavClick}
							to={`/products?product_for=${link.split(' ')[0].substring(0, 3).toLocaleLowerCase()}&type=${link
								.split(' ')[1]
								.toLowerCase()}`}
						>
							{link}
						</NavLink>
					))
				) : null}
				{women ? (
					NavLinks[1].map((link) => (
						<NavLink
							onClick={NavClick}
							key={link}
							to={`/products?product_for=${link.split(' ')[0].substring(0, 5).toLowerCase()}&type=${link
								.split(' ')[1]
								.toLowerCase()}`}
						>
							{link}
						</NavLink>
					))
				) : null}
				{kids ? (
					NavLinks[2].map((link) => (
						<NavLink
							onClick={NavClick}
							key={link}
							to={`/products?product_for=${link.split(' ')[0].substring(0, 3).toLowerCase()}&type=${link
								.split(' ')[1]
								.toLowerCase()}`}
						>
							{link}
						</NavLink>
					))
				) : null}
				{mma ? (
					NavLinks[3].map((link) => (
						<NavLink onClick={NavClick} key={link} to={`/products?product_for=unisex&type=${link.toLowerCase()}`}>
							{link}
						</NavLink>
					))
				) : null}
			</ul>
		</div>
	);
};
