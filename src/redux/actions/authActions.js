import { SIGNOUT, SUCCESS_LOGIN } from '../../constants/actionTypes'
import { leave } from './usersActions';

export const successLogin = (data) => {
    return dispatch => {
        dispatch({
			type: SUCCESS_LOGIN,
        	data
		})
    }
}
// export const setCurrentUser(user) {
//     return {

//     }
// }

export const signout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		  dispatch({type: SIGNOUT})
		//   setAuthorizationToken(false);
		//   dispatch(setCurrentUser({}))
		//   dispatch(leave());
	};
};
