import React, { useEffect } from 'react';
import { useForm } from '../useForm/useForm';
import { loginValidation } from '../FormValidaton/formValidation';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userFormSubmitted } from '../../reducers/userReducer/userAction';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const LoginForm = () => {
	const dispatch = useDispatch();
	const login = async () => {
		dispatch(loginUser(values));
	};
	const [ values, handleChanges, resetFields, errors, handleSubmit ] = useForm(login, loginValidation);
	const history = useHistory();
	const userReducer = useSelector((state) => state.customer);

	const routeToDashboard = () => {
		history.push('/user/dashboard');
		dispatch(userFormSubmitted(false));
		resetFields();
	};

	useEffect(
		() => {
			const formSubmitted = userReducer.formSubmitted;
			if (formSubmitted) {
				routeToDashboard();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ userReducer.userFormSubmitted ]
	);
	return (
		<div className='form-container'>
			<form noValidate onSubmit={handleSubmit}>
				<div className='title-container'>
					<h1>Customer Login</h1>
					<div className='underline' />
				</div>
				<label>Email</label>
				<div className='input-container'>
					<input name='email' placeholder='Email' value={values.email || ''} onChange={handleChanges} />
					{errors.email && <p className='errors'>{errors.email}</p>}
				</div>
				<label>Password</label>
				<div className='input-container'>
					<input
						name='password'
						placeholder='Password'
						value={values.password || ''}
						onChange={handleChanges}
						type='password'
					/>
					{errors.password && <p className='errors'>{errors.password}</p>}
				</div>
				<button className='form-btn' type='submit'>
					{!userReducer.loadingUser ? (
						'Login'
					) : (
						<Loader
							type='Puff'
							color='black'
							height={20}
							width={20}
							//3 secs
						/>
					)}
				</button>
				<p className='returning-or-new-customer'>
					New Customer? <NavLink to='/register'>Signup</NavLink>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
