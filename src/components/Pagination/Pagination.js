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
		const fourthFromEnd = pageNumber[pageNumber.length - 1] - 3;
		const OneLessFromHalf = Math.ceil(pageNumber[pageNumber.length - 1] / 2 - 1);
		const pageOne = pageNumber[0];
		const lastPage = pageNumber[pageNumber.length - 1];
		const mutatedArr = pagesStart;
		const firstItemMutatedArr = mutatedArr[0];

		if (pageNumber.length <= 6) {
			return paginate(page);
		}
		if (pagesStart[pagesStart.length - 1] === page && page < fourthFromEnd) {
			setSliceStart(page - 2);
			setSliceEnd(page + 1);
			paginate(page);
		} else if (page === fourthFromEnd) {
			setSliceEnd(pageNumber[pageNumber.length - 2]);
			paginate(page);
		} else if (page === pageOne) {
			setSliceStart(1);
			setSliceEnd(5);
			paginate(page);
		} else if (page === lastPage) {
			setSliceStart(lastPage - 6);
			setSliceEnd(pageNumber[pageNumber.length - 2]);
			paginate(page);
		} else if (firstItemMutatedArr !== pageOne + 3 && firstItemMutatedArr === page && pageNumber[1] !== page) {
			if (pagesStart.length === 5) {
				setSliceStart(page - 2);
				setSliceEnd(page + 1);
			} else {
				console.log(pageNumber.slice(pagesStart[0] - 1, sliceEnd));
				setSliceStart(pagesStart[0] - 2);
				setSliceEnd(pagesStart[pagesStart.length - 2]);
			}
			paginate(page);
		} else if (page === pagesStart[0]) {
			setSliceStart(1);
			setSliceEnd(OneLessFromHalf);
			paginate(page);
		} else {
			paginate(page);
		}

		// switch(page){
		// 	case OneLessFromHalf === page:

		// }
	};

	const backOnePage = () => {
		setCurrentPage((currentPage) => (currentPage <= 1 ? 1 : currentPage - 1));
	};

	console.log(pageRef);
	const pagesStart =
		pageNumber.length >= 10 ? pageNumber.slice(sliceStart, sliceEnd) : pageNumber.slice(sliceStart, sliceEnd);

	useEffect(() => {
		if (pageNumber.length >= 10) {
			setSliceEnd(Math.ceil(pageNumber[pageNumber.length - 1] / 2) - 1);
		} else {
			setSliceEnd(pageNumber[pageNumber.length - 2]);
		}
	}, []);

	console.log(pagesStart);

	return (
		<div className='pages-container'>
			<ul>
				<li onClick={backOnePage}>B</li>
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
