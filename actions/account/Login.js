import { ToastAndroid } from 'react-native'
import * as constants from '../../constants'
import api from '../../api'

import * as LoginActions from './Login'
import { NavigationActions } from 'react-navigation'

export const isLoading = status => ({
    type: constants.ACCOUNT_LOGIN_LOADING,
    status
})

export const login = (username, password) => {
    return (dispatch, getState) => {

        //Loading
        dispatch(LoginActions.isLoading(true))


        //Get Store
        let state = getState();

        //Validate username and password
        if((username == '') || (password == '')){
            ToastAndroid.show('Complete el Usuario y la Contraseña para continuar',ToastAndroid.LONG);
            //dispatch(this.isLoading(false))
            return;
        }

        //API
        api({
            module: 'auth',
            action: 'login',
            checkSession: false,
            data: {
                usuario: username,
                password: password
            },
            response: (json) => {


                console.log(json)
                //Errrors
                if(json.errors.length){
                    for(var i in json.errors) ToastAndroid.show(json.errors[i],ToastAndroid.LONG);
                    dispatch(LoginActions.isLoading(false))
                    return
                }

                //End Loading
                dispatch(LoginActions.isLoading(false))

                //Logged successfull
                if(json.logued) dispatch(NavigationActions.navigate({routeName: 'Catalog'}))
                
            },
            endCall: () => {
                console.log('Termina la lladmada')
            }
        })
    }
}
