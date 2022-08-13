import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import login from './reducers/login';
import seo from './reducers/seo';

const rootReducer = combineReducers({
	login,
	seo
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))