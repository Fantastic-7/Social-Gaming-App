import { CREATE_PLAYER, UPDATE_SCORE, RESTART_GAME, DONE, SHOW_SCORE } from '../../constants/actionTypes';
import { resetQuestion } from './questionActions';

export const createNewPlayer = ({ id, name }) => {
	return {
		type: CREATE_PLAYER,
		id: id,
		name: name,
		score: 0,
		questionCount: 0,
	};
};

export const updateScore = ({ id, name, score, questionCount }) => {
	return {
		type: UPDATE_SCORE,
		id: id,
		name: name,
		score: score,
		questionCount: questionCount,
	};
};

export const gameOver = player => {
	return {
		type: DONE,
		payload: player,
	};
};

export const showScore = scores => {
	return {
    type: SHOW_SCORE,
    payload: scores
	};
};

const resetPlayers = () => {
	return {
		type: RESTART_GAME,
	};
};

export const restartGame = () => dispatch => {
	dispatch(resetPlayers());
	dispatch(resetQuestion());
};
