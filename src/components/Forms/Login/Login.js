import React, { useEffect } from 'react';
import { useForm } from '../useForm/useForm';
import { loginValidation } from '../FormValidaton/formValidation';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
	const login = async () => {
		const res = await axios.post('https://mma-server.herokuapp.com/auth/login', values);
		console.log(res);
	};
	const [ values, handleChanges, resetFields, errors, handleSubmit ] = useForm(login, loginValidation);

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
					Login
				</button>
				<p className='returning-or-new-customer'>
					New Customer? <NavLink to='/register'>Signup</NavLink>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
