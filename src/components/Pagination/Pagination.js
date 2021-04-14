import React from 'react';
import './pagination.scss';
export const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}

	return (
		<div className='pages-container'>
			<ul>
				{pageNumber.map((page) => (
					<li key={page} onClick={() => paginate(page)}>
						{page}
					</li>
				))}
			</ul>
		</div>
	);
};
