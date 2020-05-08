import React from 'react';
import Dashlink1 from './Dashlink1';
import Dashlink2 from './Dashlink2';

import './Sidebar.scss';
const Sidebar = () => {
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
			<button type="submit" onClick={() => alert('still being worked on')}>
				Logout
			</button>
		</div>
	);
};

export default Sidebar;
