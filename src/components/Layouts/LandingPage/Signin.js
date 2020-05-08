import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './LandingPage.scss';
const Signin = (props) => {
	const showSignUpModal = () => {
		const profileDOM = document.querySelector('.signUp-main');
		profileDOM.classList.add('show-signUp-main');
	};

	return (
		<div>
			<div className="login-main">
				<h1>PELARD</h1>
				<h2>Login</h2>
				<div className="input-form">
					<input
						type="text"
						placeholder="userName"
						value={props.state.userName}
						onChange={(e) => props.handleChange('userName', e)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={props.state.password}
						onChange={(e) => props.handleChange('password', e)}
					/>
				</div>
				<div className="login-links">
					<a href="#">Forgot password?</a>
				</div>
				<button type="submit" onClick={props.loginHandler}>
					{props.loading ? <CircularProgress style={{ color: '#fff' }} /> : 'Login'}
				</button>
				<div className="signup-btn" onClick={props.close}>
					<button type="Submit" onClick={showSignUpModal}>
						Sign Up here
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signin;
