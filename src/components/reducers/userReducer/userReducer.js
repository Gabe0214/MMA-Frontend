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
	userFormSubmitted: false,
	userOrderError: false
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'REMOVE USER ERROR':
			return { ...state, userError: false };
		case 'USER SUBMITTED FORM':
			return { ...state, userFormSubmitted: payload };
		case 'LOADING USER':
			return { ...state, loadingUser: true };
		case 'REGISTER USER ERROR':
			return { ...state, loadingUser: false, userError: payload };
		case 'REGISTER USER SUCCESS':
			return { ...state, loadingUser: false, userError: false };
		case 'LOGIN USER FAILURE':
			return { ...state, loadingUser: false, userError: payload };
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

		case 'GET_USER_ORDERS_FAILURE':
			return { ...state, loadingUser: false, userOrderError: payload };
		case 'GET_USER_ORDERS_SUCCESS':
			return { ...state, loadingUser: false, user: { ...state.user, orders: payload } };
		default:
			return state;
	}
};

export default userReducer;
