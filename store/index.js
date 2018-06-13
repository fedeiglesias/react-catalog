//React
import React, { Component } from 'react';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'

//Middlewares
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {createReactNavigationReduxMiddleware,
        createReduxBoundAddListener } from 'react-navigation-redux-helpers';

//Reducers
import reducers from '../reducers'


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMid = createReactNavigationReduxMiddleware("root", state => state.nav)
console.log('createReactNavigationReduxMiddleware')


//Create middlewares
const middlewares = applyMiddleware(thunk, navigationMid )
 
//Create Store
var store = createStore(reducers, middlewares)


//Export
export default store