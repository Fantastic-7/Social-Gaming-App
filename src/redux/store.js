// store codes
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import socketMiddleware from './middlewares/socketMiddleware';

const middlewares = [thunkMiddleware, socketMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
