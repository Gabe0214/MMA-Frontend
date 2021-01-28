import { useState } from 'react';

export const useForm = () => {
	const [ state, setState ] = useState({});

	const resetFields = () => {
		setState({});
	};
	const handleChanges = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return [ state, handleChanges, resetFields ];
};
