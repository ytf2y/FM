/**
 * Created by apple on 2019/9/7.
 */

import {createStore,applyMiddleware} from 'redux';

import bookReducer from './reducer.js'

import thunk from 'redux-thunk';

var store = createStore( bookReducer,applyMiddleware( thunk ) );

export default  store;