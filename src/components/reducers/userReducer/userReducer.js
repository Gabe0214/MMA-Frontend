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
	userFormSubmitted: false
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
			return { ...state, loadUser: false };
		default:
			return state;
	}
};

export default userReducer;
