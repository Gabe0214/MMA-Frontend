import React from 'react';
import './DesktopFiltering.scss';
export const DesktopFiltering = ({ brands, filter }) => {
	return (
		<div className='filter-main-container'>
			<div className='filter-option-container'>
				<h4>Brand</h4>
				<ul>
					{brands &&
						brands.map((brand, i) => {
							return (
								<li key={i} onClick={() => filter(brand)}>
									{brand.toUpperCase()}
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
