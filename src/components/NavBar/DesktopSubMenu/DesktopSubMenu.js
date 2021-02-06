import React from 'react';
import { NavLink } from 'react-router-dom';
import './DesktopSubMenu.scss';
import { items } from '../Menu/SubMenu/subMenuLinks';

export const DesktopSubMenu = ({ mens, menu, setMenu, womens, kid, mma, setOptions, options }) => {
	return (
		<React.Fragment>
			{mens ? (
				<div className='desktop-outer-sub-menu-container' onMouseLeave={() => setOptions({ ...options, men: false })}>
					<div className='desktop-sub-menu-container'>
						<ul>
							{mens ? (
								<React.Fragment>
									<h4>Mens</h4>
									{items[0].links.map((link) => (
										<li>
											<NavLink to='/'>{link}</NavLink>
										</li>
									))}
								</React.Fragment>
							) : null}
						</ul>
					</div>
				</div>
			) : null}
			{womens ? (
				<div className='desktop-outer-sub-menu-container' onMouseLeave={() => setOptions(false)}>
					<div className='desktop-sub-menu-container'>
						<ul>
							{womens ? (
								<React.Fragment>
									<h4>Womens</h4>
									{items[1].links.map((link) => (
										<li>
											<NavLink to='/'>{link}</NavLink>
										</li>
									))}
								</React.Fragment>
							) : null}
						</ul>
					</div>
				</div>
			) : null}
			{kid ? (
				<div className='desktop-outer-sub-menu-container' onMouseLeave={() => setOptions(false)}>
					<div className='desktop-sub-menu-container'>
						<ul>
							{kid ? (
								<React.Fragment>
									<h4>Kid's</h4>
									{items[2].links.map((link) => (
										<li>
											<NavLink to='/'>{link}</NavLink>
										</li>
									))}
								</React.Fragment>
							) : null}
						</ul>
					</div>
				</div>
			) : null}
		</React.Fragment>
	);
};
