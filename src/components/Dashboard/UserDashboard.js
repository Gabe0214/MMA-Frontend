import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { api } from '../utils/axiosWithAuth';
import { getUserOrders } from '../reducers/userReducer/userAction';
import './dashboard.scss';
import { UserOrders } from './UserOrders/UserOrders';

const UserDashboard = () => {
	const history = useHistory();
	const logout = () => {
		localStorage.clear();
		history.push('/signin');
	};

	const customer = useSelector((state) => state.customer);
	const dispatch = useDispatch();
	console.log(customer.user);
	const customer_id = customer.user.user_id;

	useEffect(() => {
		dispatch(getUserOrders(customer_id));
	}, []);
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
						<UserOrders orders={customer.user.orders} />
					)}
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
