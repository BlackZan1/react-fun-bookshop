import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books-reducer';
import loaderReducer from './loader-reducer';
import introReducer from './intro-reducer';

const reducers = combineReducers({ 
    dataBooks: booksReducer, 
    loader: loaderReducer,
    dataIntro: introReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;