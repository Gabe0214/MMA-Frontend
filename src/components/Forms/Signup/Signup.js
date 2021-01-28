import React from 'react';
import { useForm } from '../useForm/useForm';
import { states } from './fiftyStates';
import { signupValidation } from '../FormValidaton/formValidation';
const SignupForm = () => {
	const cb = (e) => {
		console.log('hi');
		// resetFields();
	};
	const [ values, handleChanges, resetFields, errors, handleSubmit ] = useForm(cb, signupValidation);
	console.log(errors);
	return (
		<div>
			<form onSubmit={handleSubmit} noValidate>
				<label>First Name</label>
				<div>
					<input
						name='firstname'
						value={values.firstname || ''}
						handleChanges={handleChanges}
						onChange={handleChanges}
					/>
					{errors.firstname && <p>{errors.firstname}</p>}
				</div>
				<label>Last Name</label>
				<div>
					<input name='lastname' value={values.lastname || ''} onChange={handleChanges} />
					{errors.lastname && <p>{errors.lastname}</p>}
				</div>
				<label>Username</label>
				<div>
					<input name='username' value={values.username || ''} onChange={handleChanges} />
					{errors.username && <p>{errors.username}</p>}
				</div>
				<label>Email</label>
				<div>
					<input name='email' value={values.email || ''} onChange={handleChanges} />
					{errors.email && <p>{errors.email}</p>}
				</div>
				<label>Password</label>
				<div>
					<input name='password' type='password' value={values.password || ''} onChange={handleChanges} />
					{errors.password && <p>{errors.password}</p>}
				</div>
				<label>Zip Code</label>
				<div>
					<input name='zip' value={values.zip || ''} onChange={handleChanges} />
					{errors.zip && <p>{errors.zip}</p>}
				</div>
				<label>City</label>
				<div>
					<input name='city' value={values.city || ''} onChange={handleChanges} />
					{errors.city && <p>{errors.city}</p>}
				</div>
				<label>State</label>
				<div>
					<select value={values.state || ''} name='state' onChange={handleChanges}>
						<option>Select State</option>
						{states.map((state) => <option value={state}>{state}</option>)}
					</select>
					{errors.state && <p>{errors.state}</p>}
				</div>
				<label>Address</label>
				<div>
					<input name='adress' value={values.adress || ''} onChange={handleChanges} />
					{errors.adress && <p>{errors.adress}</p>}
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default SignupForm;
