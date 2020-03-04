import { JOIN, LEAVE, VIEW_CONNECTED_USERS } from '../../constants/actionTypes';
import blackProfileLogo from '../../assets/images/blackProfileLogo.png';

const initialState = {
	users: [
		{ id: 1, name: 'Elvis Rugamba', profileImg: blackProfileLogo },
		{ id: 2, name: 'Emmy Karangwa', profileImg: blackProfileLogo },
	],
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
