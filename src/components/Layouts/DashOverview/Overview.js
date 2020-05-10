import React from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../../Routes/SideBar/Sidebar';
import Casechart from './Casechart';
import DistrictCases from './DistrictCases';
import './Overview.scss';
// import '../../Routes/SideBar/Sidebar.scss';
const Overview = () => {
	const humburgerHandler = () => {
		const profileDOM = document.querySelector('.sidebar-main');
		profileDOM.classList.add('sidebar-main-slide');
	};

	return (
		<div>
			<Sidebar />
			<div className="overview-main">
				<div className="humburger_menu">
					<i className="material-icons" onClick={humburgerHandler}>
						dehaze
					</i>
				</div>
				<div className="chart-main">
					<div className="chart-container">
						<h3>
							Reported cases in 2020-<strong>784</strong>
						</h3>
						<Casechart />
					</div>
					<div className="chart-main-row">
						<h2>CASE DISTRIBUTION IN DISTRICTS</h2>
						<div className="row">
							<DistrictCases district="GULU" value="40" text="135" />
							<DistrictCases district="LAMWO" value="20" text="78" />
							<DistrictCases district="KITGUM" value="20" text="78" />
							<DistrictCases district="AMURU" value="60" text="358" />
							<DistrictCases district="NWOYA" value="70" text="452" />
							<DistrictCases district="AGOGO" value="55" text="234" />
							<DistrictCases district="PADER" value="89" text="632" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
