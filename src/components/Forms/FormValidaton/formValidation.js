export const signupValidation = (values) => {
	let errors = {};
	if (!values.firstname) {
		errors.firstname = 'Field is required';
	} else if (values.firstname.length < 3) {
		errors.firstname = 'Input must be longer than 2 characters';
	}

	if (!values.lastname) {
		errors.lastname = 'Field is required';
	} else if (values.lastname.length < 3) {
		errors.lastname = 'Input must be longer than 2 characters';
	}

	if (!values.username) {
		errors.username = 'Field is required';
	} else if (values.username.length < 8) {
		errors.username = 'Username must be at least 8 characters';
	}

	if (!values.email) {
		errors.email = 'Field is required';
	} else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
		errors.email = 'Please insert valid email';
	}

	if (!values.password) {
		errors.password = 'Field is required';
	} else if (values.password.length < 10) {
		errors.password = 'Password must be at least 10 characters';
	}

	if (!values.zip) {
		errors.zip = 'Field is required';
	} else if (values.zip.length !== 5) {
		errors.zip = 'Zip codes are 5 digits long';
	}

	if (!values.city) {
		errors.city = 'Field is required';
	} else if (values.city < 3) {
		errors.city = 'City must be at least 3 characters';
	}

	if (!values.state) {
		errors.state = 'Field is required';
	}

	if (!values.adress) {
		errors.adress = 'Field is required';
	}

	return errors;
};

export const loginValidation = (values) => {
	let errors = {};

	if (!values.email) {
		errors.email = 'Field is required';
	} else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
		errors.email = 'Please insert valid email';
	}

	if (!values.password) {
		errors.password = 'Field is required';
	} else if (values.password.length < 10) {
		errors.password = 'Password must be at least 10 characters';
	}

	return errors;
};
