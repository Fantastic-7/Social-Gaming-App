// root reducer codes
import { combineReducers } from 'redux';
import auth from './authReducer'

const rootReducer = combineReducers({auth});

export default rootReducer;
