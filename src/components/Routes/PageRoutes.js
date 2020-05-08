import Overview from '../Layouts/DashOverview/Overview';
import Cases from '../Layouts/ReportedCases/Cases';
import CaseDetails from '../Layouts/ReportedCases/CaseDetails';
import LandingPage from '../Layouts/LandingPage/LandingPage';
import SignIn from '../Layouts/LandingPage/Signin';
import SignUp from '../Layouts/LandingPage/SignUp';

export default [
	{
		path: '/',
		component: LandingPage,
		exact: true
	},
	{
		path: '/signin',
		component: SignIn,
		exact: true
	},
	{
		path: '/signup',
		component: SignUp,
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
