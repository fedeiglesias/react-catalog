import { ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'


import * as constants from '../../constants'
import api from '../../api'

//Actions
import * as AccountActions from './Account'

export function sessionStatus(status){
    return {
        type: constants.ACCOUNT_SESSION_STATUS,
        status
    }
}

export function logout(){
    return(dispatch, getState) => {
        api({
            module: 'auth',
            action: 'logout',
            checkSession: false,
            response: json => {
                dispatch(AccountActions.loadProfile({}))
                dispatch(NavigationActions.navigate({ routeName: 'Login' }))
            }
        })
    }
}

export function loadSession(){
    return (dispatch, getState) => {

        //API
        api({
            module: 'cuenta',
            action: 'info',
            checkSession: false,
            response: (json) => {

                if(json.errors.length){
                    for(var i in json.errors) ToastAndroid.show(json.errors[i],ToastAndroid.LONG);
                }
                
                if(json.logued){
                    dispatch(AccountActions.loadProfile(json.result))
                    dispatch(NavigationActions.navigate({ routeName: 'Drawer' }))
                    return
                }
                
                if(!json.logued) {
                    dispatch(AccountActions.loadProfile({}))
                    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
                }
            }
        })
    }
  }




  export function loadProfile(){
    return (dispatch, getState) => {

        //Loading
        dispatch(AccountActions.sessionStatus('loading'))

        //Get Store
        let state = getState()

        
        //API
        api({
            module: 'cuenta',
            action: 'info',
            checkSession: false,
            response: (json) => {

                if(json.errors.length){
                    for(var i in json.errors) ToastAndroid.show(json.errors[i],ToastAndroid.LONG);
                }
                
                if(json.logued){
                    dispatch({type: constants.ACCOUNT_LOAD_PROFILE, profile: json.result});
                    return
                }
                
                if(!json.logued) {
                    dispatch({type: constants.ACCOUNT_EMPTY_PROFILE})
                    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
                }
            }
        })
    }
  }
