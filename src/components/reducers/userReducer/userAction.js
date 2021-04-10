import { api } from '../../utils/axiosWithAuth';

export const removeUserError = () => ({
	type: 'REMOVE USER ERROR'
});

export const userFormSubmitted = (type) => ({
	type: 'USER SUBMITTED FORM',
	payload: type
});

export const userLoading = () => ({
	type: 'LOADING USER'
});

export const registerUserError = (error) => ({
	type: 'REGISTER USER ERROR',
	payload: error
});

export const userRegisteredSuccess = () => ({
	type: 'REGISTER USER SUCCESS'
});

export const userLoginSuccess = (data) => ({
	type: 'LOGIN USER SUCCESS',
	payload: data
});

export const userLoginFailure = (error) => ({
	type: 'LOGIN USER FAILURE',
	payload: error
});

export const orderLoading = () => ({
	type: 'ORDER LOADING'
});

export const getUserOrderErrors = (error) => ({
	type: 'GET_USER_ORDERS_ERROR',
	payload: error
});

export const getUserOrdersSuccess = (orders) => ({
	type: 'GET_USER_ORDERS_SUCCESS',
	payload: orders
});

export const registerUser = (userData) => async (dispatch) => {
	try {
		await api().post('/auth/signup', userData);
		dispatch(userFormSubmitted(true));
	} catch (err) {
		const { Message } = err.response.data;
		dispatch(registerUserError(Message));
	}
};

export const loginUser = (userData) => async (dispatch) => {
	dispatch(userLoading());

	try {
		const res = await api().post('/auth/login', userData);
		localStorage.setItem('token', res.data.token);
		const user = res.data.user;
		dispatch(userLoginSuccess(user));
		dispatch(userFormSubmitted(true));
	} catch (err) {
		dispatch(userLoginFailure(err));
	}
};

export const getUserOrders = (id) => async (dispatch) => {
	dispatch(userLoading());

	try {
		const res = await api().get(`/orders/order/user/${id}`);
		console.log(res);
		const { orders } = res.data;
		dispatch(getUserOrdersSuccess(orders));
	} catch (err) {
		dispatch(getUserOrderErrors(err));
	}
};

// export const placeOrder = () => async (dispatch) => {
// 	dispatch(orderLoading(true));
// };
