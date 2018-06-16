//Redux
import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import Navigator from '../navigation/mainStack'

//Reducers
import account from './Account'
import catalog from './Catalog'
import gallery from './Gallery'


//Combine Reducers
export default combineReducers({ 
    nav: createNavigationReducer(Navigator),
    account,
    catalog,
    gallery,
})