import React, { Component } from 'react';
import CaseTable from './CaseTable';
import Sidebar from '../../Routes/SideBar/Sidebar';
import CaseDetails from './CaseDetails';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../Store/ActionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';

import './Cases.scss';
class Cases extends Component {
	state = {
		searchResult: '',
		filteredCases: [],
		searchFilter: []
	};

	async componentDidMount() {
		const { getAllReportedCases } = this.props;
		getAllReportedCases((response) => {
			// console.log(response);
			this.setState({ filteredCases: this.props.allCases, searchFilter: this.props.allCases });
		});
	}

	toggleModal = (data) => {
		// console.log('logged data', data);
		return this.props.history.push('/case-details', { data });
	};

	humburgerHandler = () => {
		const profileDOM = document.querySelector('.sidebar-main');
		profileDOM.classList.add('sidebar-main-slide');
	};

	searchHandler = (e) => {
		const search = e.target.value;
		this.setState({
			searchResult: search
		});
		if (search.length === 0) {
			this.setState({
				filteredCases: this.state.searchFilter
			});
		} else {
			const filter = this.state.searchFilter;

			const options = {
				threshold: 0.5,
				distance: 10,
				// useExtendedSearch: false,
				keys: [ 'location.name', 'reporter.name', 'type' ]
			};

			const fuse = new Fuse(filter, options);

			const Result = fuse.search(search);
			// console.log(Result);
			this.setState({ filteredCases: Result });
		}
	};

	render() {
		const { searchResult } = this.state;
		// console.log(searchResult);
		const { allCases, loading } = this.props;
		// console.log(this.props);
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
						<i className="material-icons" onClick={this.searchHandler}>
							search
						</i>
						<input
							placeholder="Search Reporter, Violation, District"
							type="text"
							value={this.state.searchResult}
							onChange={(e) => this.searchHandler(e)}
						/>
					</div>
					{loading && <CircularProgress />}
					<CaseTable
						caseHeaders={caseHeader}
						data={this.state.filteredCases}
						toggleModal={(row) => this.toggleModal(row)}
					/>
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
	getAllReportedCases: (callback) => dispatch(ActionCreators.allReportedCases(callback)),
	toggleModal: () => dispatch(ActionCreators.toggleModalAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cases));
