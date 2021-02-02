import React from 'react';
import { NavLink } from 'react-router-dom';
import './payment.scss';
export const PaymentModal = () => {
	return (
		<div className='main-container'>
			<div className='modal-container-payment'>
				<h3>Payment is successful</h3>
				<div className='success-checkmark'>
					<div className='check-icon'>
						<span className='icon-line line-tip' />
						<span className='icon-line line-long' />
						<div className='icon-circle' />
						<div className='icon-fix' />
					</div>
				</div>
				<p>Thank You For Shopping</p>
				<p style={{ marginTop: '2%' }}>
					{' '}
					Click{' '}
					<NavLink to='/products/all' style={{ color: 'grey' }}>
						Here
					</NavLink>{' '}
					to continue shopping.
				</p>
			</div>
		</div>
	);
};
