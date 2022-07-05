import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import login from './reducers/login';

const rootReducer = combineReducers({
	login
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))