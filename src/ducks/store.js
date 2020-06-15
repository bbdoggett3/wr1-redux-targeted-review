import { createStore, applyMiddleware } from 'redux';
import promisedMiddleware from 'redux-promise-middleware'; 
import authReducer from './authReducer';

export default createStore(authReducer, applyMiddleware(promisedMiddleware));