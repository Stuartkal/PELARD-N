import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './LandingPage.scss';
const SignUp = (props) => {
	return (
		<div>
			<div className="signUp-main">
				<h1>PELARD</h1>
				<h2>Login</h2>
				<div className="input-form">
					<input
						type="text"
						placeholder="FirstName"
						value={props.state.firstName}
						onChange={(e) => props.handleChange('lasttName', e)}
					/>
					<input
						type="text"
						placeholder="LastName"
						value={props.state.lastName}
						onChange={(e) => props.handleChange('lasttName', e)}
					/>
					<input
						type="text"
						placeholder="UserName"
						value={props.state.userName}
						onChange={(e) => props.handleChange('userName', e)}
					/>
					<input
						type="email"
						placeholder="Email"
						value={props.state.email}
						onChange={(e) => props.handleChange('email', e)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={props.state.password}
						onChange={(e) => props.handleChange('password', e)}
					/>
					<input
						type="text"
						placeholder="PhoneNumber"
						value={props.state.phoneNumber}
						onChange={(e) => props.handleChange('phoneNumber', e)}
					/>
				</div>
				<div className="login-links">
					<a href="#">Forgot password?</a>
				</div>
				<button type="submit" onClick={props.registerHandler}>
					{props.loading ? <CircularProgress style={{ color: '#fff' }} /> : 'SignUp'}
				</button>
				<div className="success-label">
					{props.loading && <p>Registered Successfully</p>}
					<a href="/">Back to login</a>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
