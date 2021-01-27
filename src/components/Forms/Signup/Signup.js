import React from 'react';
import { useForm } from '../useForm/useForm';

const SignupForm = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};
	const [ values, handleChanges ] = useForm();

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>First Name</label>
				<div>
					<input
						name='firstname'
						value={values.firstname || ''}
						handleChanges={handleChanges}
						onChange={handleChanges}
					/>
				</div>
				<label>Last Name</label>
				<div>
					<input name='lastname' value={values.lastname || ''} onChange={handleChanges} />
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default SignupForm;
