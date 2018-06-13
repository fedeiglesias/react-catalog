import { ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as constants from '../constants'
import api from '../api'


export function sessionStatus(status){
    return {
        type: constants.ACCOUNT_SESSION_STATUS,
        status
    }
}

export function loadProfile(){
    return (dispatch, getState) => {

        //Loading
        dispatch(this.sessionStatus('loading'))

        //Get Store
        let state = getState()

        //API
        api({
            module: 'cuenta',
            action: 'info',
            checkSession: false,
            response: (json) => {

                console.log(json)

                if(json.errors.length){
                    for(var i in json.errors) ToastAndroid.show(json.errors[i],ToastAndroid.LONG);
                    return
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