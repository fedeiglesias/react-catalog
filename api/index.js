import { ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'
import store from '../store'

const URL = "https://distribuidoralibertad.com/api.php"

/*
    Creamos una API para consultar al backend
*/

export default (conf) => {

    //StartEvent
    let startEvent = () => {
        if(typeof conf.startCall != 'undefined') conf.startCall()
    }

    //Trigger StartEvent
    startEvent();

    //EndEvent
    let endEvent = () => {
        if(typeof conf.endCall != 'undefined') conf.endCall()
    }

    //ResponseEvent
    let response = json => {
        if(typeof conf.response != 'undefined')
            conf.response(json)
    }

    //Module and Action
    let params = {
        module: conf.module,
        run: conf.action
    }

    //CheckSession
    let checkSession = true
    if(typeof conf.checkSession != 'undefined')
        checkSession = conf.checkSession

    //Params
    if(typeof conf.data != 'undefined')
        Object.assign(params, conf.data);

    //Error HTTP code
    let http_error_handler = (response) => {
        if (!response.ok) ToastAndroid.show('Error al tratar de conectar al servidor',ToastAndroid.LONG);
        return response.json();
    }

    //Network Error (no internet)
    let network_error_handler = (error) => {
        console.log('Error de coneccion')
        console.log(error)
        ToastAndroid.show('No hay coneccion a internet!',ToastAndroid.LONG);
        //Change Screen
    }

    //Encode the data
    const encodedParams = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    //Create settings
    let settings = {  
        method: 'POST',  
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;'
        },
        checkSession: checkSession,
        cache: 'none',
        mode: 'cors',
        body: encodedParams
    }

    //Assing params settings
    if(typeof conf.settings != 'undefined')
        Object.assign(settings, conf.settings);

    
    return fetch(URL, settings)
        .then(http_error_handler)
        .then(json => {
            //If not logged in ...
            if(!json.logued && checkSession)
                store.dispatch(NavigationActions.navigate({ routeName: 'Login' }))


            response(json);
            endEvent();
        })
        .catch(network_error_handler);
}


//.then(response => Promise.all([response, response.json()]))
/*
api({
    module: 'tal',
    action: 'tal',
    checkSession: true,
    data: {},
    response: (json) => {

    }
})*/