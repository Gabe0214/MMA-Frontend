import axios from 'axios';

export const api = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'https://mma-server.herokuapp.com/',
		headers: {
			Authorization: token
		}
	});
};
