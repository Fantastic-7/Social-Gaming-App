// root reducer codes
import { combineReducers } from 'redux';
import auth from './authReducer';
import question from './questionReducer';
import player from './playerReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ auth, usersReducer, question, player });

export default rootReducer;
