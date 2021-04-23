import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserOrders } from '../reducers/userReducer/userAction';
import './dashboard.scss';
import { UserOrders } from './UserOrders/UserOrders';
import { Pagination } from '../Pagination/Pagination';
import { usePagination } from '../Pagination/usePagination/usePagination';
const UserDashboard = () => {
	const history = useHistory();

	const customer = useSelector((state) => state.customer);
	const dispatch = useDispatch();
	// eslint-disable-next-line
	const [ postsPerPage, setCurrentPage, currentOrders, paginate ] = usePagination();
	const logout = () => {
		localStorage.clear();
		history.push('/signin');
	};

	const customer_id = customer.user.user_id;

	useEffect(() => {
		dispatch(getUserOrders(customer_id));
		if (customer.user.firstname === '') {
			return logout();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Orders Pagination

	if (customer.user.firstname === '') {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='dashboard-container'>
			<div className='title-container'>
				<h1>Account Details</h1>
				<div className='underline' />
			</div>
			<div className='user-content'>
				<div className='sub-content'>
					<h5>{`${customer.user.firstname[0].toUpperCase() +
						customer.user.firstname.slice(1)} ${customer.user.lastname[0].toUpperCase() +
						customer.user.lastname.slice(1)}`}</h5>

					<p>{customer.user.email}</p>
				</div>
				<div className='sub-content'>
					<h5>Primary Address</h5>
					<p>{customer.user.adress}</p>
					<p>{`${customer.user.city}, ${customer.user.state}, ${customer.user.zip}`}</p>
					<p>United States</p>
				</div>
				<button onClick={logout} className='form-btn'>
					Logout
				</button>
				<div className='orders-container'>
					<h3>Order History</h3>
					{customer.user.orders && customer.user.orders.length < 1 ? (
						<p>You haven't placed any orders yet</p>
					) : (
						<UserOrders orders={currentOrders} />
					)}
				</div>
				<Pagination postsPerPage={postsPerPage} totalPosts={customer.user.orders.length} paginate={paginate} />
			</div>
		</div>
	);
};

export default UserDashboard;
