import React, { Component } from 'react';
import CaseTable from './CaseTable';
import Sidebar from '../../Routes/SideBar/Sidebar';
import CaseDetails from './CaseDetails';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../Store/ActionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect, withRouter } from 'react-router-dom';

import './Cases.scss';
class Cases extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		const { getAllReportedCases } = this.props;
		getAllReportedCases(() => console.log(this.props));
	}

	toggleModal = (data) => {
		// console.log('logged data', data);
		return this.props.history.push('/case-details', { data });
	};

	humburgerHandler = () => {
		const profileDOM = document.querySelector('.sidebar-main');
		profileDOM.classList.add('sidebar-main-slide');
	};

	render() {
		const { allCases, loading } = this.props;
		const caseHeader = [
			{ label: 'Reporter ' },
			{ label: 'District' },
			{ label: 'Violations' },
			{ label: 'Phone Number' },
			{ label: 'Date' }
		];
		return (
			<div>
				<Sidebar />
				<div className="cases-main">
					<div className="humburger_menu">
						<i className="material-icons" onClick={this.humburgerHandler}>
							dehaze
						</i>
					</div>
					<div className="search-container">
						<i className="material-icons">search</i>
						<input placeholder="Search Violations" />
					</div>
					{loading && <CircularProgress />}
					<CaseTable caseHeaders={caseHeader} data={allCases} toggleModal={(row) => this.toggleModal(row)} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.adminReducer.loading,
	allCases: state.adminReducer.allCases
});

const mapDispatchToProps = (dispatch) => ({
	getAllReportedCases: (userId, callback) => dispatch(ActionCreators.allReportedCases(userId, callback)),
	toggleModal: () => dispatch(ActionCreators.toggleModalAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cases));
