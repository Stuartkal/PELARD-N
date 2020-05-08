// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { ActionCreators } from '../../../Store/ActionCreators';
// import { Redirect, withRouter } from 'react-router-dom';

// import './LandingPage.scss';

// class Signin extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	state = {
// 		userName: 'stuwie',
// 		password: 'pass0123',
// 		token: ''
// 	};

// 	loginHandler = async () => {
// 		const { userLogin } = this.props;
// 		const { userName, password } = this.state;
// 		userLogin(userName, password, (response) => {
// 			console.log('response log signin', response, this.props);
// 			if (response.statusCode === 200 && response.data) return this.history.push('/overview');
// 			return alert('Please enter correct details');
// 		});
// 	};

// 	componentDidMount() {
// 		console.log('props in signin', this.props);
// 	}

// 	render() {
// 		const { userName, password } = this.state;
// 		const { loading } = this.props;
// 		return (
// 			<div>
// 				{!this.props.visible && (
// 					<div className="login-main">
// 						<h1>PELARD</h1>
// 						<h2>Login</h2>
// 						<div className="input-form">
// 							<input
// 								type="text"
// 								placeholder="Username"
// 								value={userName}
// 								onChange={(e) => this.setState({ userName: e.target.value })}
// 							/>
// 							<input
// 								type="password"
// 								placeholder="Password"
// 								value={password}
// 								onChange={(e) => this.setState({ password: e.target.value })}
// 							/>
// 						</div>
// 						<div className="login-links">
// 							<a href="#">Forgot password?</a>
// 						</div>
// 						<button type="submit" onClick={this.loginHandler}>
// 							Login
// 						</button>
// 						<div className="signup-btn">
// 							<button type="Submit" onClick={() => !this.props.visible.closeModal}>
// 								Sign Up here
// 							</button>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }

// const matchStateToProps = (state) => ({
// 	loading: state.admin.loading,
// 	token: state.admin.token
// });

// const mapDispatchToProps = (dispatch) => ({
// 	userLogin: (userName, password, callback) => dispatch(ActionCreators.userLoginAction(userName, password, callback))
// });

// export default connect(matchStateToProps, mapDispatchToProps)(Signin);

import React, { useState } from 'react';

import './LandingPage.scss';
const Signin = (props) => {
	// const [ userName, setUserName ] = useState('stuwie');
	// 	const [ password, setPassword ] = useState('pass0123');
	// console.log(userName, password);
	return (
		<div>
			{!props.state.openModal && (
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
						Login
					</button>
					<div className="signup-btn" onClick={props.close}>
						<button type="Submit">Sign Up here</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Signin;
