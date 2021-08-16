import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNOUT
} from '../constants/signInConstant';
import axios from 'axios';

export const signIn = (email, password) => async (dispatch) => {
	dispatch({
		type: USER_SIGNIN_REQUEST,
		payload: { email, password }
	});

	try {
		const { data } = await axios.post('/api/users/signin', { email, password });

		dispatch({
			type: USER_SIGNIN_SUCCESS,
			payload: data
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (err) {
		dispatch({
			type: USER_SIGNIN_FAILURE,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message
		});
	}
};

/************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

export const signOut = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('cartItems');
	dispatch({
		type: USER_SIGNOUT
	});
};
