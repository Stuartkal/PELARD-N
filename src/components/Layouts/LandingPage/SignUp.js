// import React, { Component } from 'react';
// import { ActionCreators } from '../../../Store/ActionCreators';
// import { connect } from 'react-redux';
// import './LandingPage.scss';

// class SignUp extends Component {
// 	state = {
// 		firstName: '',
// 		lastName: '',
// 		userName: '',
// 		password: '',
// 		phoneNumber: '',
// 		email: ''
// 	};

// 	registerHandler = () => {
// 		const { userRegistration } = this.props;
// 		let { firstName, lastName, userName, email, password, phoneNumber } = this.state;
// 		userRegistration({ firstName, lastName, userName, email, password, phoneNumber });
// 	};

// 	render() {
// 		const { firstName, lastName, userName, phoneNumber, email, password } = this.state;
// 		// console.log(this.props);
// 		// console.log(this.state);
// 		return (
// 			<div>
// 				{!this.props.visible && (
// 					<div className="login-main">
// 						<h1>PELARD</h1>
// 						<h2>Login</h2>
// 						<div className="input-form">
// 							<input
// 								type="text"
// 								placeholder="FirstName"
// 								value={firstName}
// 								onChange={(e) => this.setState({ firstName: e.target.value })}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="LastName"
// 								value={lastName}
// 								onChange={(e) => this.setState({ lastName: e.target.value })}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="UserName"
// 								value={userName}
// 								onChange={(e) => this.setState({ userName: e.target.value })}
// 							/>
// 							<input
// 								type="email"
// 								placeholder="Email"
// 								value={email}
// 								onChange={(e) => this.setState({ email: e.target.value })}
// 							/>
// 							<input
// 								type="password"
// 								placeholder="Password"
// 								value={password}
// 								onChange={(e) => this.setState({ password: e.target.value })}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="PhoneNumber"
// 								value={phoneNumber}
// 								onChange={(e) => this.setState({ phoneNumber: e.target.value })}
// 							/>
// 						</div>
// 						<div className="login-links">
// 							<a href="#">Forgot password?</a>
// 						</div>
// 						<button type="submit" onClick={this.registerHandler}>
// 							SignUp
// 						</button>
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }

// const matchStateToProps = (state) => ({
// 	// loading: state.admin.loading
// });

// const matchDispatchToProps = (dispatch) => ({
// 	userRegistration: (data) => dispatch(ActionCreators.userRegistrationAction(data))
// });

// export default connect(matchStateToProps, matchDispatchToProps)(SignUp);

import React, { useState } from 'react';
import './LandingPage.scss';
const SignUp = (props) => {
	// const [ firstName ] = useState('kanye');
	// const [ lastName ] = useState('nathan');
	// const [ userName ] = useState('kanye');
	// const [ email ] = useState('kanye@gmail.com');
	// const [ password ] = useState('pass0123');
	// const [ phoneNumber ] = useState('7645382947');

	return (
		<div>
			{props.state.openModal && (
				<div className="login-main">
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
						SignUp
					</button>
				</div>
			)}
		</div>
	);
};

export default SignUp;
