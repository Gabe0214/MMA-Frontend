import { useState, useEffect } from 'react';

export const useForm = (cb, validateForm) => {
	const [ state, setState ] = useState({});
	const [ errors, setErrors ] = useState({});
	const [ submitted, setSubmitted ] = useState(false);
	const resetFields = () => {
		setState({});
	};
	const handleChanges = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(state));
		setSubmitted(true);
	};

	useEffect(
		() => {
			if (Object.keys(errors).length == 0 && submitted) {
				cb();
			}
		},
		[ errors ]
	);

	return [ state, handleChanges, resetFields, errors, handleSubmit ];
};
