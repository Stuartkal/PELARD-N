import React, { useEffect, useState } from 'react';
import Sidebar from '../../Routes/SideBar/Sidebar';
import './CaseDetails.scss';
const CaseDetails = (props) => {
	// console.log('violations', props);
	const [ caseDetails, setcaseDetails ] = useState({});

	useEffect(() => {
		const { data } = props.location.state;
		setcaseDetails(data);
	}, []);
	console.log('CaseDetails violations', caseDetails.reporter);

	// const data = props.location.state.data;
	const convertDate = (date) => new Date(date).toDateString();

	const humburgerHandler = () => {
		const profileDOM = document.querySelector('.sidebar-main');
		profileDOM.classList.add('sidebar-main-slide');
	};

	return (
		<div>
			<Sidebar />

			<div className="case-details-main">
				<div className="humburger_menu">
					<i className="material-icons" onClick={humburgerHandler}>
						dehaze
					</i>
				</div>
				<div className="case-header">
					<h2>Case Details</h2>
					<div className="case-icons">
						<i className="material-icons" onClick={() => alert('still being worked on')}>
							file_download
						</i>
						<i className="material-icons" onClick={() => alert('still being worked on')}>
							print
						</i>
					</div>
				</div>
				<div className="separator" />
				<div className="case-row">
					<div className="case-details">
						<div className="case-details-row">
							<div className="label">
								<h3>Case: </h3>
							</div>
							<div className="detail">
								<h4>8759 </h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Reporter's Name: </h3>
							</div>
							<div className="detail">
								<h4>{caseDetails && caseDetails.type}</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Phone Number: </h3>
							</div>
							<div className="detail">{/* <h4>{caseDetails && caseDetails.reporter.contact}</h4> */}</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Type of Violation: </h3>
							</div>
							<div className="detail">{/* <h4>{caseDetails && caseDetails.type}</h4> */}</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Location of Violation: </h3>
							</div>
							<div className="detail">{/* <h4>{caseDetails && caseDetails.location.name}</h4> */}</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Violance Description: </h3>
							</div>
							<div className="detail">
								<h4>{caseDetails && caseDetails.description}</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Persons Involved: </h3>
							</div>
							<div className="detail">{/* <h4>{caseDetails && caseDetails.involved.name}</h4> */}</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Witnesses: </h3>
							</div>
							<div className="detail">{/* <h4>{caseDetails && caseDetails.involved.name}</h4> */}</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Authority Response: </h3>
							</div>
							<div className="detail">
								<h4>
									{/* {caseDetails && caseDetails.authorityResponse.name} ; "{caseDetails && caseDetails.authorityResponse.response}" */}
								</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Other Information: </h3>
							</div>
							<div className="detail">
								{/* <h4>{caseDetails && caseDetails.otherInfo.description}</h4> */}
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Attachments Videos & responses: </h3>
							</div>
							<div className="gallery">
								<img
									src="https://secureservercdn.net/198.71.233.129/v7p.b95.myftpupload.com/wp-content/uploads/2016/01/BLURREDsmall_Some-of-the-34-girls-prevented-being-trafficked-1-1080x675.jpg"
									alt="image"
								/>
								<img
									src="https://www.newvision.co.ug/w-images/8413f8db-1bd8-4514-ba72-a3ded2d2e291/2/HumanTrafficking-703x422.jpg"
									alt="image"
								/>

								<img
									src="https://businessfocus.co.ug/wp-content/uploads/2017/07/Journalists-advised-to.png"
									alt="image"
								/>
								<img
									src="https://www.africamission.org/images/pages/thumb/Risposta-coordinata-alla-tratta-di-esseri-umani-in-uganda-60.jpg"
									alt="image"
								/>
							</div>
						</div>
					</div>
					<div className="case-date">
						<h3>{convertDate(caseDetails && caseDetails.dateTime)}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseDetails;
