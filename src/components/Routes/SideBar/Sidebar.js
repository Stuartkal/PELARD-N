import React from 'react';
import Dashlink1 from './Dashlink1';
import Dashlink2 from './Dashlink2';
import { Redirect, withRouter } from 'react-router-dom';

import './Sidebar.scss';
const Sidebar = withRouter((props) => {
	const logout = () => {
		console.log('logged out');
		localStorage.removeItem('adminToken');
		sessionStorage.removeItem('adminId');
		return props.history.push('/');
	};

	return (
		<div className="sidebar-main">
			<h1>PELARD</h1>
			<div className="avatar">
				<i class="material-icons">person</i>
			</div>
			<h2>John Doe</h2>
			<h3>Johndoe@gmail.com</h3>
			<div className="dash-links">
				<Dashlink1 />
				<Dashlink2 />
			</div>
			<button type="submit" onClick={logout}>
				Logout
			</button>
		</div>
	);
});

export default Sidebar;
