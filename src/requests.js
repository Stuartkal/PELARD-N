const secret = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';
const userId = '5eaefb2f70c9d700040de258';
const baseUrl = 'https://pelard-n.herokuapp.com';

const dummyUser = {
	firstName: 'firstName',
	lastName: 'lastName',
	userName: 'userName',
	password: 'password'
};

const getToken = async ({ secret, _id }) => {
	const response = await fetch('https://pelard-n.herokuapp.com/token/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ secret })
	});

	const json = await response.json();
	console.log(json);
	return json.data.token;
};

const registerUser = async (data) => {
	const token = await getToken({ secret });
	const response = await fetch('https://pelard-n.herokuapp.com/user/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(data)
	});
	const json = await response.json();
	console.log(json);
};

const loginUser = async ({ userName, password }) => {
	const token = await getToken({ secret });
	const response = await fetch(`${baseUrl}/user/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify({ userName, password })
	});
	const json = await response.json();
	console.log(json);
};

const getViolations = async ({ userId }) => {
	const token = await getToken({ secret, _id: userId });
	const response = await fetch(`${baseUrl}/violations`, {
		method: 'GET',
		headers: {
			Authorization: token
		}
	});
	const json = await response.json();
	console.log(json);
};

const reportViolations = async ({ violationDetails, userId }) => {
	const token = await getToken({ secret, _id: userId });
	const response = await fetch(`${baseUrl}/violations/create`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(violationDetails)
	});
	const json = await response.json();
	console.log(json);
};

reportViolations({ userId: '5eaefb2f70c9d700040de258', violationDetails: {} });
