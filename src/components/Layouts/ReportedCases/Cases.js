import React, { Component } from 'react';
import CaseTable from './CaseTable';
import Sidebar from '../../Routes/SideBar/Sidebar';
import CaseDetails from './CaseDetails';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../Store/ActionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Cases.scss';
class Cases extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		CaseDetails: null
	};

	async componentDidMount() {
		const { getAllReportedCases } = this.props;
		getAllReportedCases(() => console.log(this.props));
	}

	// allViolations = async () => {
	// 	const { getAllReportedCases } = this.props;
	// 	getAllReportedCases((response) => {
	// 		// console.log('violations', response, this.props);
	// 		// if (response.statusCode === 200 && response.data) return this.history.push('/overview');
	// 		// return alert('Please enter correct details');
	// 		return this.setState(<CaseDetails data={response} />);
	// 	});
	// };

	toggleModal = (data) => {
		const { toggleModal } = this.props;
		this.setState({ toggleModal });
		toggleModal();
		this.componentModal(data);
	};

	componentModal = (data) => {
		return this.setState({ modalComp: <CaseDetails data={data} /> });
	};

	render() {
		const { allCases, loading } = this.props;
		const { modalComp } = this.state;
		const caseHeader = [
			{ label: 'Reporter Name' },
			{ label: 'District' },
			{ label: 'Violations' },
			{ label: 'Phone Number' },
			{ label: 'Date' }
		];
		return (
			<div>
				{modalComp}
				<Sidebar />
				<div className="cases-main">
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

export default connect(mapStateToProps, mapDispatchToProps)(Cases);
