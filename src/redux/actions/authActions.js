import { SIGNOUT, SUCCESS_LOGIN, SET_CURRENT_USER } from '../../constants/actionTypes';
import { leave } from './usersActions';

export const successLogin = data => {
	return dispatch => {
		dispatch({
			type: SUCCESS_LOGIN,
			data,
		});
	};
};

export const setCurrentUser = user => {
	return dispatch => {
		dispatch({
			type: SET_CURRENT_USER,
			payload: user,
		});
	};
};

export const signout = user => {
	localStorage.removeItem('token');
	return dispatch => {
		dispatch({ type: SIGNOUT });
		dispatch(leave(user));
	};
};
