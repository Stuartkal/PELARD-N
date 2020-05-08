import Overview from '../Layouts/DashOverview/Overview';
import Cases from '../Layouts/ReportedCases/Cases';
import CaseDetails from '../Layouts/ReportedCases/CaseDetails';
import LandingPage from '../Layouts/LandingPage/LandingPage';
import SignIn from '../Layouts/LandingPage/Signin';

export default [
	{
		path: '/',
		component: LandingPage,
		exact: true
	},
	{
		path: '/overview',
		component: Overview,
		exact: true
	},
	{
		path: '/cases',
		component: Cases,
		exact: false
	},
	{
		path: '/case-details',
		component: CaseDetails,
		exact: false
	}
];
