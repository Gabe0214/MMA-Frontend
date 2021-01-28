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
				</div>
				<label>Username</label>
				<div>
					<input name='username' value={values.username || ''} onChange={handleChanges} />
				</div>
				<label>Email</label>
				<div>
					<input name='email' value={values.email || ''} onChange={handleChanges} />
				</div>
				<label>Password</label>
				<div>
					<input name='password' type='password' value={values.password || ''} onChange={handleChanges} />
				</div>
				<label>Zip Code</label>
				<div>
					<input name='zip' value={values.zip || ''} onChange={handleChanges} />
				</div>
				<label>City</label>
				<div>
					<input name='city' value={values.city || ''} onChange={handleChanges} />
				</div>
				<label>State</label>
				<div>
					<select value={values.state || ''} name='state' onChange={handleChanges}>
						<option>Select State</option>
						{states.map((state) => <option value={state}>{state}</option>)}
					</select>
				</div>
				<label>Address</label>
				<div>
					<input name='adress' value={values.adress || ''} onChange={handleChanges} />
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default SignupForm;
