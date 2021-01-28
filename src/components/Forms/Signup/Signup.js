import React from 'react';
import { useForm } from '../useForm/useForm';
import { states } from './fiftyStates';
import { signupValidation } from '../FormValidaton/formValidation';
import { NavLink } from 'react-router-dom';
import '../Form.scss';
const SignupForm = () => {
	const cb = (e) => {
		console.log('Fields are clean');
	};
	const [ values, handleChanges, resetFields, errors, handleSubmit ] = useForm(cb, signupValidation);

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit} noValidate>
				<div className='title-container'>
					<h1>Create Account</h1>
					<div className='underline' />
				</div>
				<label>First Name</label>
				<div className='input-container'>
					<input name='firstname' value={values.firstname || ''} onChange={handleChanges} placeholder='First name' />
					{errors.firstname && <p className='errors'>{errors.firstname}</p>}
				</div>
				<label>Last Name</label>
				<div className='input-container'>
					<input name='lastname' value={values.lastname || ''} onChange={handleChanges} placeholder='Last name' />
					{errors.lastname && <p className='errors'>{errors.lastname}</p>}
				</div>
				<label>Username</label>
				<div className='input-container'>
					<input name='username' value={values.username || ''} onChange={handleChanges} placeholder='Username' />
					{errors.username && <p className='errors'>{errors.username}</p>}
				</div>
				<label>Email</label>
				<div className='input-container'>
					<input name='email' value={values.email || ''} onChange={handleChanges} placeholder='Email' />
					{errors.email && <p className='errors'>{errors.email}</p>}
				</div>
				<label>Password</label>
				<div className='input-container'>
					<input
						name='password'
						type='password'
						value={values.password || ''}
						onChange={handleChanges}
						placeholder='Password'
					/>
					{errors.password && <p className='errors'>{errors.password}</p>}
				</div>
				<label>Zip Code</label>
				<div className='input-container'>
					<input name='zip' value={values.zip || ''} onChange={handleChanges} placeholder='Zip Code' />
					{errors.zip && <p className='errors'>{errors.zip}</p>}
				</div>
				<label>City</label>
				<div className='input-container'>
					<input name='city' value={values.city || ''} onChange={handleChanges} placeholder='City' />
					{errors.city && <p className='errors'>{errors.city}</p>}
				</div>
				<label>State</label>
				<div className='input-container'>
					<select value={values.state || ''} name='state' onChange={handleChanges}>
						<option>Select State</option>
						{states.map((state) => (
							<option key={state} value={state}>
								{state}
							</option>
						))}
					</select>
					{errors.state && <p className='errors'>{errors.state}</p>}
				</div>
				<label>Address</label>
				<div className='input-container'>
					<input name='adress' value={values.adress || ''} onChange={handleChanges} placeholder='Address' />
					{errors.adress && <p className='errors'>{errors.adress}</p>}
				</div>
				<button type='submit' className='form-btn'>
					Sign Up
				</button>
				<p className='returning-or-new-customer'>
					Returning customer? <NavLink to='/signin'>Login</NavLink>
				</p>
			</form>
		</div>
	);
};

export default SignupForm;
