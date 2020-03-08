import { CREATE_PLAYER, UPDATE_SCORE, RESTART_GAME } from '../../constants/actionTypes';
import { resetQuestion } from './questionActions';

export const createNewPlayer = ({ id, name }) => {
  return {
    type: CREATE_PLAYER,
    id: id,
    name: name,
    score: 0,
    questionCount: 0
  };
};

export const updateScore = ({id, name, score, questionCount}) => {
  return {
    type: UPDATE_SCORE,
    id: id,
    name: name,
    score: score,
    questionCount: questionCount
  };
};

const resetPlayers = () => {
  return {
    type: RESTART_GAME
  };
};

export const restartGame = () => dispatch => {
         dispatch(resetPlayers());
         dispatch(resetQuestion());
       };
