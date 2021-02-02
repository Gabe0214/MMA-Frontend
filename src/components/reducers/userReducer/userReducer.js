const initialState = {
	user: {
		firstname: '',
		lastname: '',
		username: '',
		email: '',
		zip: '',
		state: '',
		city: '',
		orders: []
	},

	loadingUser: false,
	userError: false,
	userSucceed: false,
	userFormSubmitted: false,
	userOrdersLoading: false,
	userOrderError: false
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'USER SUBMITTED FORM':
			return { ...state, userFormSubmitted: payload };
		case 'LOADING USER':
			return { ...state, loadingUser: true };
		case 'USER ERROR':
			return { ...state, loadingUser: false, userError: true };
		case 'REGISTER USER SUCCESS':
			return { ...state, loadingUser: false, userSucceed: true };
		case 'LOGIN USER FALIURE':
			return { ...state, loadingUser: false, userError: true };
		case 'LOGIN USER SUCCESS':
			const { user_id, username, firstname, lastname, email, city, zip, adress, adress_2 } = payload;
			const userData = {
				user_id,
				username,
				firstname,
				lastname,
				email,
				state: payload.state,
				city,
				zip,
				adress,
				adress_2
			};

			return { ...state, loadingUser: false, user: { ...userData, orders: [ ...state.user.orders ] } };
		case 'GET_USER_ORDERS_LOADING':
			return { ...state, loadingOrdersLoading: true };
		case 'GET_USER_ORDERS_FAILURE':
			return { ...state, loadOrdersLoading: false, userOrderError: payload.error };
		case 'GET_USER_ORDERS_SUCCESS':
			return { ...state, user: { ...state.user, orders: payload } };
		default:
			return state;
	}
};

export default userReducer;
