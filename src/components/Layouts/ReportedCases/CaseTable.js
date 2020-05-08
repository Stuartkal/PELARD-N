import React from 'react';

const handleClick = () => {
	window.location = '/case-details';
};

const CaseTable = ({ caseHeaders, data, toggleModal }) => {
	return (
		<div className="table-container">
			<table>
				<tbody>
					<tr className="table-header-row">{caseHeaders.map((caseHeader) => <td>{caseHeader.label}</td>)}</tr>
					{data.map((row) => {
						// console.log(row);
						return (
							<tr className="table-detail-row" onClick={handleClick}>
								<td>{row.reporter.name}</td>
								<td>{row.location.name}</td>
								<td>{row.type}</td>
								<td>{row.reporter.contact}</td>
								<td>{row.dateTime}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CaseTable;
