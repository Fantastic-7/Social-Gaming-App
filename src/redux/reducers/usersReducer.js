import { JOIN, LEAVE, VIEW_CONNECTED_USERS } from '../../constants/actionTypes';

const initialState = {
	users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case JOIN:
			return { ...state, users: [...state.users, state.users.concat(payload)] };

		case LEAVE:
			return { ...state };

		case VIEW_CONNECTED_USERS:
			return state;

		default:
			return state;
	}
};

export default usersReducer;
