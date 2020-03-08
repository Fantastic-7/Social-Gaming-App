import { JOIN_GAME, VIEW_CONNECTED_USERS, LOAD_CONNECTED_USERS } from '../../constants/actionTypes';
import blackProfileLogo from '../../assets/images/blackProfileLogo.png';

const initialState = {
	users: [
		{ id: 1, username: 'Elvis Rugamba', photo: blackProfileLogo, iat: 0 },
		{ id: 2, username: 'Emmy Karangwa', photo: blackProfileLogo, iat: 0 },
	],
};

const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case JOIN_GAME:
			return { ...state, users: state.users.concat(payload) };

		case VIEW_CONNECTED_USERS:
			return { ...state, users: payload };

		case LOAD_CONNECTED_USERS:
			return state;

		default:
			return state;
	}
};

export default usersReducer;
