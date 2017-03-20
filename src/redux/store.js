'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import length from './reducers/length';

const logger = reduxLogger();

let createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

export default createStoreWithMiddleware(combineReducers({ length }));
