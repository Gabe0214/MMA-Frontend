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
	userError: false
};

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOADING USER':
			return { ...state, loadingUser: true };
		case 'USER ERROR':
			return { ...state, loadingUser: false, userError: true };
		case 'REGISTER USER SUCCESS':
			return { ...state, loadUser: false };
		default:
			return state;
	}
};

export default userReducer;
