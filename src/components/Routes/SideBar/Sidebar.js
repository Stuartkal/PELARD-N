// import React from 'react';
// import Dashlink1 from './Dashlink1';
// import Dashlink2 from './Dashlink2';

// import './Sidebar.scss';
// const Sidebar = (props) => {

// 	return (
// 		<div className="sidebar-main">
// 			<h1>PELARD</h1>
// 			<div className="avatar">
// 				<i class="material-icons">person</i>
// 			</div>
// 			<h2>John Doe</h2>
// 			<h3>Johndoe@gmail.com</h3>
// 			<div className="dash-links">
// 				<Dashlink1 />
// 				<Dashlink2 />
// 			</div>
// 			<button type="submit" onClick={logout}>
// 				Logout
// 			</button>
// 		</div>
// 	);
// };

// export default Sidebar;

import React, { Component } from 'react';
import Dashlink1 from './Dashlink1';
import Dashlink2 from './Dashlink2';

import './Sidebar.scss';
class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	// logout = () => {
	// 	localStorage.removeItem('adminToken');
	// 	return this.props.history.push('/');
	// };

	render() {
		return (
			<div>
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
					<button type="submit" onClick={() => alert('In the making')}>
						Logout
					</button>
				</div>
			</div>
		);
	}
}

export default Sidebar;
