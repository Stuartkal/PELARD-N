import React from 'react';

import './Sidebar.scss';
const Dashlink1 = ({ redirect }) => {
	return (
		<div className="dash-link-main" onClick={redirect}>
			<div className="dash-link1">
				<i class="material-icons">view_list</i>
				<a href="/overview/cases">All Reported Cases</a>
			</div>
		</div>
	);
};

export default Dashlink1;
