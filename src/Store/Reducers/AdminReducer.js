import { AdminActions } from '../Actions';

const initialState = {
	userId: '',
	token: '',
	loading: false,
	allCases: [],
	authenticated: localStorage.getItem('adminToken'),
	mediaAttachments: false,
	modalShowing: false
};

export default function(state = initialState, { type, payload, error }) {
	switch (type) {
		case AdminActions.TOGGLE_MODAL_ACTION:
			return { ...state, modalShowing: !state.modalShowing };
		//USER REGISTRATION
		case AdminActions.USER_REGISTRATION_ACTION:
			return { ...state, loading: true };
		case AdminActions.USER_REGISTRATION_SUCCESS:
			return { ...state, loading: false };
		case AdminActions.USER_REGISTRATION_FAIL:
			return { ...state, loading: false };

		//UESR LOGIN
		case AdminActions.USER_LOGIN_ACTION:
			return { ...state, loading: true, token: '' };
		case AdminActions.USER_LOGIN_SUCCESS:
			return { ...state, loading: true, token: payload.token };
		case AdminActions.USER_LOGIN_FAIL:
			return { ...state, loading: true };

		//GET ALL REPORTED CASES
		case AdminActions.ALL_REPORTED_CASES_ACTION:
			return { ...state, loading: true };
		case AdminActions.ALL_REPORTED_CASES_SUCCESS:
			return { ...state, loading: false, allCases: payload.data.violations };
		case AdminActions.ALL_REPORTED_CASES_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
}
