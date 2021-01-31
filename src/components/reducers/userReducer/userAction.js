import { api } from '../../utils/axiosWithAuth';

export const userFormSubmitted = (type) => ({
	type: 'USER SUBMITTED FORM',
	payload: type
});
export const userLoading = () => ({
	type: 'LOADING USER'
});

export const userError = (error) => ({
	type: 'USER ERROR',
	payload: error
});

export const userRegisteredSuccess = () => ({
	type: 'REGISTER USER SUCCESS'
});

export const userLoginSuccess = (data) => ({
	type: 'LOGIN USER SUCCESS',
	payload: data
});

export const userLoginFailure = () => ({
	type: 'LOGIN USER FAILURE'
});

export const registerUser = (userData) => async (dispatch) => {
	dispatch(userLoading());

	try {
		const res = await api().post('/auth/signup', userData);

		console.log(res);
		dispatch(userFormSubmitted(true));
	} catch (err) {
		dispatch(userError(err));
	}
};

export const loginUser = (userData) => async (dispatch) => {
	dispatch(userLoading());

	try {
		const res = await api().post('/auth/login', userData);
		console.log(res);
		localStorage.setItem('token', res.data.token);
		dispatch(userLoginSuccess());
	} catch (err) {
		dispatch(userLoginFailure());
	}
};