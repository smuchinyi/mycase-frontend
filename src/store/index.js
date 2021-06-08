import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from "./reducers/languageReducer";
import galleryReducer from "./reducers/galleryReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    language: languageReducer,
    gallery:galleryReducer,
    
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;