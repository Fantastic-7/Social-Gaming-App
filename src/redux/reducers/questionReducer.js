import { LOAD_QUESTION, NEXT_QUESTION, RESET_QUESTION } from '../../constants/actionTypes';

const initialState = {
	gameAnswer: null,
	currentQuestion: 0,
	count: 10,
	options: [],
	done: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOAD_QUESTION:
			return {
				...state,
				question: payload[state.currentQuestion].question,
				options: payload[state.currentQuestion].options,
				answer: payload[state.currentQuestion].answer,
			};
		case NEXT_QUESTION:
			return {
				...state,
				currentQuestion: state.currentQuestion + 1,
			};

		case RESET_QUESTION:
			return {
				...initialState,
			};
		case 'GAME_OVER':
			return {
        ...state,
        done: true
			};
		default:
			return state;
	}
};
