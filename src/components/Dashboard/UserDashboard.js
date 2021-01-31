import React from 'react';
import { useHistory } from 'react-router-dom';
const UserDashboard = () => {
	const history = useHistory();
	const logout = () => {
		localStorage.clear();
		history.push('/signin');
	};
	return (
		<div>
			<h1>This must be secured</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default UserDashboard;
