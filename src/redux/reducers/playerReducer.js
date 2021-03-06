import { CREATE_PLAYER, UPDATE_SCORE, SHOW_SCORE, RESTART_GAME } from '../../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SCORE:
			const currentScore = state.find(obj => obj.id === action.id);
			const newScore = {
				id: action.id,
				name: action.name,
				score: action.score === true ? currentScore.score + 1 : currentScore.score,
				questionCount: currentScore.questionCount + 1,
			};

			return (state = state.map(obj => (obj.id === newScore.id ? newScore : obj)));

		case CREATE_PLAYER:
			const newPlayer = [
				{
					id: action.id,
					name: action.name,
					score: action.score,
					questionCount: action.questionCount,
				},
			];
			return [...state, ...newPlayer];

		case SHOW_SCORE:
			return [...state, ...action.payload];

		case RESTART_GAME:
			state.forEach(obj => {
				obj.score = 0;
				obj.questionCount = 0;
			});
			return { ...state };

		default:
			return state;
	}
};
