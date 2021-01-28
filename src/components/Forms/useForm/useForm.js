import { useState } from 'react';

export const useForm = (cb, validateSignUp) => {
	const [ state, setState ] = useState({});
	const [ errors, setErrors ] = useState({});
	const resetFields = () => {
		setState({});
	};
	const handleChanges = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		cb();
		setErrors(validateSignUp(state));
		console.log(errors);
	};

	return [ state, handleChanges, resetFields, errors, handleSubmit ];
};
