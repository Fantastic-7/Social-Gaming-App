import { SIGNOUT, SUCCESS_LOGIN, SET_CURRENT_USER } from '../../constants/actionTypes';

const initialState = {
	isAuthenticated: false,
	user: {},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SIGNOUT:
			return {
				isAuthenticated: false,
			};

		case SUCCESS_LOGIN:
			return {
				isAuthenticated: true,
				user: payload,
			};

		case SET_CURRENT_USER:
			return {
                ...state,
				isAuthenticated: true,
				user: payload,
			};

		default:
			return state;
	}
};
