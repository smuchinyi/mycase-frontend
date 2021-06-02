import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from "./reducers/languageReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    language: languageReducer,
    
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;