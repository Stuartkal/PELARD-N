import Axios from 'axios';

const baseURL = 'https://virtserver.swagggerhub.com/v1b3m/Pelard-N/1.0.0';
const token = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';

export const AxiosClient = Axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
});

export const AxiosAdminTokenized = (token) =>
	Axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	});

export const AxiosAdmin = () => {
	const token = getAdminToken();
	return Axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			Authorization: token ? token : undefined
		}
	});
};

export const getAdminToken = () => localStorage.getItem('adminToken');
