import { ToastAndroid } from 'react-native'
import * as constants from '../constants'
import api from '../api'


export function setUsername(text){
    return {
        type: constants.LOGIN_USERNAME_CHANGE,
        text
    }
}

export function setPassword(text){
    console.log('passsowrd'. text)
    return {
        type: constants.LOGIN_PASSWORD_CHANGE,
        text
    }
}

export function isLoading(state){
  return {
    type: constants.LOGIN_LOADING,
    state
  }
}

export function login(username, password){
    return (dispatch, getState) => {

        //Loading
        dispatch(this.isLoading(true))

        //Get Store
        let state = getState();

        //Validate username and password
        if((state.login.username.trim() == '') || (state.login.password.trim() == '')){
            ToastAndroid.show('Complete el Usuario y la Contraseña para continuar',ToastAndroid.LONG);
            dispatch(this.isLoading(false))
            return;
        }

        //API
        api({
            module: 'auth',
            action: 'login',
            checkSession: false,
            data: {
                usuario: state.login.username,
                password: state.login.password
            },
            response: (json) => {
                if(json.errors.length){
                    for(var i in json.errors) ToastAndroid.show(json.errors[i],ToastAndroid.LONG);
                    return;
                }
                
            },
            endCall: () => {
                dispatch(this.isLoading(false))
            }
        })
    }
  }
