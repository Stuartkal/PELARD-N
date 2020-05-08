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
		firstName: 'Kizza',
		lastName: 'Thierry',
		userName: 'Payne',
		password: 'pass0123',
		phoneNumber: '798756473',
		email: 'payne@gmail.com',
		token: '',
		openModal: false,
		closeModal: false
	};

	componentDidMount() {
		console.log(this.props);
	}

	handleChange = (key, event) => this.setState({ [key]: event.target.value });

	loginHandler = async () => {
		const { userLogin } = this.props;
		const { userName, password } = this.state;
		userLogin(userName, password, (response) => {
			console.log('response log signin', response, this.props);
			if (response.statusCode === 200 && response.data) return this.history.push('/overview');
			return alert('Please enter correct details');
		});
	};

	registerHandler = () => {
		const { userRegistration } = this.props;
		let { firstName, lastName, userName, email, password, phoneNumber } = this.state;
		userRegistration({ firstName, lastName, userName, email, password, phoneNumber });
	};

	render() {
		const state = this.state;
		return (
			<div>
				<SignIn
					loginHandler={this.loginHandler}
					onchange={this.handleChange}
					state={state}
					close={() => !state.closeModal}
				/>

				<SignUp registerHandler={this.registerHandler} onchange={this.handleChange} state={state} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	// loading: state.adminReducer.loading,
	// token: state.adminReducer.token
});

const mapDispatchToProps = (dispatch) => ({
	userLogin: (userName, password, callback) => dispatch(ActionCreators.userLoginAction(userName, password, callback)),
	userRegistration: (data) => dispatch(ActionCreators.userRegistrationAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
