import React, { useState } from 'react';
import './pagination.scss';
export const Pagination = ({ totalPosts, postsPerPage, paginate, setCurrentPage }) => {
	const [ sliceStart, setSliceStart ] = useState(1);
	const [ sliceEnd, setSliceEnd ] = useState(5);

	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}

	const onPageClick = (page) => {
		// if (pageNumber[pageNumber.length - 1 - 4] === page) {
		// 	console.log(pageNumber.slice(page, pageNumber[pageNumber.length - 2]));
		// 	setSliceStart(page);
		// 	setSliceEnd(pageNumber[pageNumber.length - 2]);
		// 	return paginate(page);
		// } else if (pageNumber[pageNumber.length - 1 - 4] < page) return paginate(page);
		console.log(pagesStart);
		if (Math.ceil(pageNumber[pageNumber.length - 1] / 2 - 1) === page) {
			setSliceStart(page - 2);
			setSliceEnd(page + 1);
			paginate(page);
		} else {
			paginate(page);
		}
		// setSliceStart((prevState) => prevState + 1);
		// setSliceEnd((preveState) => preveState + 1);
	};

	const backOnePage = () => {
		setCurrentPage((currentPage) => (currentPage <= 1 ? 1 : currentPage - 1));
	};

	const pagesStart = pageNumber.slice(sliceStart, sliceEnd);

	return (
		<div className='pages-container'>
			<ul>
				<li onClick={backOnePage}>B</li>
				<li>{pageNumber[0]}</li>
				{sliceStart >= 3 ? <li>...</li> : ''}
				{pagesStart.map((page) => {
					return (
						<li key={page} onClick={() => onPageClick(page)}>
							{page}
						</li>
					);
				})}
				<li>...</li>
				<li onClick={() => paginate(pageNumber[pageNumber.length - 1])}>{pageNumber[pageNumber.length - 1]}</li>
			</ul>
		</div>
	);
};
