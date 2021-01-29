import axios from 'axios';

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
		dispatch();
	} catch (err) {
		dispatch(userError(err));
	}
};
