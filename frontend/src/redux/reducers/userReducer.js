import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE
} from '../constants/userConstant';

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				...state,
				loading: true
			};

		case USER_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload
			};

		case USER_REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

/******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

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
