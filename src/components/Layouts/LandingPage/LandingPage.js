import React, { Component } from 'react';
import { ActionCreators } from '../../../Store/ActionCreators';
import { connect } from 'react-redux';
import SignIn from './Signin';
import SignUp from './SignUp';

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		firstName: '',
		lastName: '',
		userName: 'kanye',
		password: 'pass0123',
		phoneNumber: '',
		email: '',
		token: ''
	};

	componentDidMount() {
		console.log(this.props);
	}

	handleChange = (key, event) => this.setState({ [key]: event.target.value });

	loginHandler = async () => {
		const { userLogin } = this.props;
		const { userName, password } = this.state;
		userLogin(userName, password, (response) => {
			if ((response.token && response.statusCode === 200) || (201 && response.data)) {
				console.log('response log signin', response, this.props);
				return this.props.history.push('/overview');
			} else return alert('User Not Registered');
			// if (response.token) {
			// 	// console.log('we are in here.. can we see');
			// 	return this.props.history.push('/overview');
			// } else return;
		});
	};

	registerHandler = () => {
		const { userRegistration } = this.props;
		let { firstName, lastName, userName, email, password, phoneNumber } = this.state;
		userRegistration({ firstName, lastName, userName, email, password, phoneNumber });
	};

	render() {
		const { loading } = this.props;

		return (
			<div>
				<SignIn
					loginHandler={this.loginHandler}
					onChange={(key, value) => this.handleChange(key, value)}
					{...this.state}
					loading={loading}
				/>

				<SignUp
					registerHandler={this.registerHandler}
					onChange={(key, value) => this.handleChange(key, value)}
					{...this.state}
					loading={loading}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.adminReducer.loading
	// authenticated: state.adminReducer.token,
	// token: state.adminReducer.token
});

const mapDispatchToProps = (dispatch) => ({
	userLogin: (userName, password, callback) => dispatch(ActionCreators.userLoginAction(userName, password, callback)),
	userRegistration: (data) => dispatch(ActionCreators.userRegistrationAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
