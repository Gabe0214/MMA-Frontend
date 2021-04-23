import React, { useState, useEffect, useRef } from 'react';
import './pagination.scss';
export const Pagination = ({ totalPosts, postsPerPage, paginate, setCurrentPage }) => {
	const [ sliceStart, setSliceStart ] = useState(1);
	const [ sliceEnd, setSliceEnd ] = useState(0);
	const pageRef = useRef();

	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}

	const onPageClick = (page) => {
		const pageToShowLastFour = pageNumber[pageNumber.length - 1] - 3;
		const OneLessFromHalf = Math.ceil(pageNumber[pageNumber.length - 1] / 2 - 1);
		const pageOne = pageNumber[0];
		const lastPage = pageNumber[pageNumber.length - 1];
		const mutatedArr = pagesStart;
		const firstItemMutatedArr = mutatedArr[0];
		const lastItemMutatedArr = mutatedArr[mutatedArr.length - 1];
		const pageToShowFirstFour = pageOne + 3;
		const lastRemaingPages = 5;

		if (pageNumber.length <= 6) {
			return paginate(page);
		}

		switch (true) {
			case lastItemMutatedArr === page && page < pageToShowLastFour:
				setSliceStart(page - 2);
				setSliceEnd(page + 1);
				paginate(page);
				break;
			case page === pageOne:
				setSliceStart(1);
				setSliceEnd(5);
				paginate(page);
				break;
			case page === lastPage:
				setSliceStart(OneLessFromHalf);
				setSliceEnd(pageNumber[pageNumber.length - 2]);
				paginate(page);
				break;
			case page === pageToShowFirstFour:
				setSliceStart(1);
				setSliceEnd(5);
				paginate(page);
				break;
			case page === pageToShowLastFour:
				setSliceEnd(pageNumber[pageNumber.length - 2]);
				paginate(page);
				break;
			case firstItemMutatedArr === page &&
				firstItemMutatedArr !== pageToShowFirstFour &&
				mutatedArr.length === lastRemaingPages:
				setSliceStart(page - 2);
				setSliceEnd(page + 1);
				break;
			case firstItemMutatedArr === page && firstItemMutatedArr !== pageNumber[1]:
				setSliceStart(pagesStart[0] - 2);
				setSliceEnd(pagesStart[pagesStart.length - 2]);
				console.log('hello');
				break;
			default:
				paginate(page);
		}
	};

	const pagesStart =
		pageNumber.length >= 10 ? pageNumber.slice(sliceStart, sliceEnd) : pageNumber.slice(sliceStart, sliceEnd);

	useEffect(() => {
		if (pageNumber.length >= 10) {
			setSliceEnd(Math.ceil(pageNumber[pageNumber.length - 1] / 2) - 1);
		} else {
			setSliceEnd(pageNumber[pageNumber.length - 2]);
		}
		// eslint-disable-next-line
	}, []);

	console.log(pagesStart);

	return (
		<div className='pages-container'>
			<ul>
				<li onClick={() => onPageClick(pageNumber[0])}>{pageNumber[0]}</li>
				{sliceStart >= 3 ? <li>...</li> : ''}
				{pagesStart.map((page) => {
					return (
						<li ref={pageRef} key={page} onClick={() => onPageClick(page)}>
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
