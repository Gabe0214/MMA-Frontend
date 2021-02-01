import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './dashboard.scss';

const UserDashboard = () => {
	const history = useHistory();
	const logout = () => {
		localStorage.clear();
		history.push('/signin');
	};

	const customer = useSelector((state) => state.customer);

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
			</div>
			<button onClick={logout} className='form-btn'>
				Logout
			</button>
		</div>
	);
};

export default UserDashboard;
