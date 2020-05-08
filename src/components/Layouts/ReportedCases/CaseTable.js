import React from 'react';
import { createBrowserHistory } from 'history';

const handleClick = () => {
	const history = createBrowserHistory();
	history.push('/case-details');
};

const CaseTable = ({ caseHeaders, cases, data, toggleModal }) => {
	return (
		<div className="table-container">
			<table>
				<tbody>
					<tr className="table-header-row">{caseHeaders.map((caseHeader) => <td>{caseHeader.label}</td>)}</tr>
					{cases.map((data) => {
						// console.log(row);
						return (
							<tr className="table-detail-row" onClick={handleClick}>
								<td>{data.reporter}</td>
								<td>{data.phone}</td>
								<td>{data.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CaseTable;
