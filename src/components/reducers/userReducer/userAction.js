import axios from 'axios';

export const userFormSubmitted = (type) => ({
	type: 'USER SUBMITTED FORM',
	payload: type
});
export const registerSend = () => ({
	type: 'LOADING USER'
});

export const userError = (error) => ({
	type: 'USER ERROR',
	payload: error
});

export const userRegisteredSuccess = () => ({
	type: 'REGISTER USER SUCCESS'
});

export const registerUser = (userData) => async (dispatch) => {
	dispatch(registerSend());

	try {
		const res = await axios.post('https://mma-server.herokuapp.com/auth/signup', userData);

		console.log(res);
		dispatch(userFormSubmitted(true));
	} catch (err) {
		dispatch(userError(err));
	}
};
