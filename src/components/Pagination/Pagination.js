import React, { useState, useEffect } from 'react';
import './pagination.scss';
export const Pagination = ({ totalPosts, postsPerPage, paginate, setCurrentPage }) => {
	const [ sliceStart, setSliceStart ] = useState(1);
	const [ sliceEnd, setSliceEnd ] = useState(0);

	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}

	const onPageClick = (page) => {
		const fourthFromEnd = pageNumber[pageNumber.length - 1] - 3;
		const OneLessFromHalf = pageNumber[pageNumber.length - 1] / 2 - 1;
		const pageOne = pageNumber[0];
		const lastPage = pageNumber[pageNumber.length - 1];

		if (pageNumber.length <= 6) {
			return paginate(page);
		}
		if (
			Math.ceil(OneLessFromHalf) === page ||
			(pagesStart[pagesStart.length - 1] === page && page !== fourthFromEnd && page < fourthFromEnd)
		) {
			setSliceStart(page - 2);
			setSliceEnd(page + 1);
			paginate(page);
			console.log('hello');
		} else if (page === fourthFromEnd) {
			setSliceEnd(pageNumber[pageNumber.length - 2]);
			paginate(page);
		} else if (page === pageOne) {
			console.log('its one');
			setSliceStart(1);
			setSliceEnd(5);
			paginate(page);
		} else if (page === lastPage) {
			console.log('hello poop');
			setSliceStart(lastPage - 6);
			setSliceEnd(pageNumber[pageNumber.length - 2]);
			paginate(page);
		} else {
			paginate(page);
		}
	};

	console.log(pageNumber[0]);

	const backOnePage = () => {
		setCurrentPage((currentPage) => (currentPage <= 1 ? 1 : currentPage - 1));
	};

	const pagesStart =
		pageNumber.length >= 10 ? pageNumber.slice(sliceStart, sliceEnd) : pageNumber.slice(sliceStart, sliceEnd);

	useEffect(() => {
		if (pageNumber.length >= 10) {
			setSliceEnd(Math.ceil(pageNumber[pageNumber.length - 1] / 2) - 1);
		} else {
			setSliceEnd(pageNumber[pageNumber.length - 2]);
		}
	}, []);

	return (
		<div className='pages-container'>
			<ul>
				<li onClick={backOnePage}>B</li>
				<li onClick={() => onPageClick(pageNumber[0])}>{pageNumber[0]}</li>
				{sliceStart >= 3 ? <li>...</li> : ''}
				{pagesStart.map((page) => {
					return (
						<li key={page} onClick={() => onPageClick(page)}>
							{page}
						</li>
					);
				})}
				{pageNumber.length <= 6 || pagesStart.length === 5 ? null : <li>...</li>}
				<li onClick={() => onPageClick(pageNumber[pageNumber.length - 1])}>{pageNumber[pageNumber.length - 1]}</li>
			</ul>
		</div>
	);
};
