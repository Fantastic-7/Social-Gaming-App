// root reducer codes
import { combineReducers } from 'redux';
import auth from './authReducer';
import question from './questionReducer';
import player from './playerReducer';

const rootReducer = combineReducers({auth, question, player});

export default rootReducer;
