import { SIGNOUT, SUCCESS_LOGIN } from '../../constants/actionTypes'

export const successLogin = (data) => {
    return dispatch => {
        dispatch({
			type: SUCCESS_LOGIN,
        	data
		})
    }
}

export const signout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		  dispatch({type: SIGNOUT})
	};
};
