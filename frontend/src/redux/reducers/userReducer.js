import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNOUT
} from '../constants/signInConstant';

export const userSignInReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			return {
				...state,
				loading: true
			};

		case USER_SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload
			};

		case USER_SIGNIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		case USER_SIGNOUT:
			return {};

		default:
			return state;
	}
};

export default userSignInReducer;
