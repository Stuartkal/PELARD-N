import { all } from 'redux-saga/effects';
import { watchUserRegistration, watchUserLogin, watchAllReportedCases, watchAllRequestPassword } from './AdminSaga';

export default function* rootSaga() {
	yield all([ watchUserRegistration(), watchUserLogin(), watchAllReportedCases(), watchAllRequestPassword() ]);
}
