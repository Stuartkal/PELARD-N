import React from 'react';
import Sidebar from '../../Routes/SideBar/Sidebar';
import './CaseDetails.scss';
const CaseDetails = ({ data }) => {
	console.log('violations', data);
	return (
		<div>
			<Sidebar />
			<div className="case-details-main">
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
								<h4>John Doe</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Phone Number: </h3>
							</div>
							<div className="detail">
								<h4>0785645332</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Type of Violation: </h3>
							</div>
							<div className="detail">
								<h4>Lorem ipsum is placeholder text</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Location of Violation: </h3>
							</div>
							<div className="detail">
								<h4>Kampala</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Violance Description: </h3>
							</div>
							<div className="detail">
								<h4>
									Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
									industries for previewing layouts and visual mockups
								</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Persons Involved: </h3>
							</div>
							<div className="detail">
								<h4>Kendrick Lamar, Jermaine Cole</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Witnesses: </h3>
							</div>
							<div className="detail">
								<h4>Jayz, Kanye</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Authority Response: </h3>
							</div>
							<div className="detail">
								<h4>
									Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
									industries for previewing layouts and visual mockups
								</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Other Information: </h3>
							</div>
							<div className="detail">
								<h4>
									Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
									industries for previewing layouts and visual mockups
								</h4>
							</div>
						</div>
						<div className="case-details-row">
							<div className="label">
								<h3>Attachments Videos & responses: </h3>
							</div>
							<div className="gallery">
								<img
									src="https://i2.wp.com/acme-ug.org/wp-content/uploads/elec.jpg?fit=800%2C445&ssl=1"
									alt="image"
								/>
								<img src="https://saltmedia.ug/images/sampledata/Human-Rights.jpg" alt="image" />

								<img
									src="https://www.independent.co.ug/wp-content/uploads/2020/04/domestic-violence.jpg"
									alt="image"
								/>
								<img
									src="https://i1.wp.com/dailyexclusives.co.ug/wp-content/uploads/2020/04/download-2-4.jpg?fit=274%2C184&ssl=1"
									alt="image"
								/>
							</div>
						</div>
					</div>
					<div className="case-date">
						<h3>12:30am | 31 Apr, 2020</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseDetails;
