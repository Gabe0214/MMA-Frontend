import { useState } from 'react';
import { useSelector } from 'react-redux';
export const usePagination = () => {
	const [ postsPerPage ] = useState(6);
	const [ currentPage, setCurrentPage ] = useState(1);

	const productsReducer = useSelector((state) => state.productsReducer);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentOrders = productsReducer.products.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return [ postsPerPage, setCurrentPage, currentOrders, paginate ];
};
