//Constants
import * as constants from '../constants'

//Navigation Actions
import { NavigationActions } from 'react-navigation'

//Toast
import { ToastAndroid } from 'react-native'

export function openGallery(imgs){
    return (dispatch, getState) => {

        //No images to show
        if(!imgs.length){
            ToastAndroid.show('Sin imagenes para mostrar',ToastAndroid.LONG);
            return;
        }

        //Load Images
        dispatch({type: constants.GALLERY_OPEN, imgs: imgs})
        
        //Open Gallery
        dispatch(NavigationActions.navigate({ routeName: 'Gallery' }))
    }
}


export function closeGallery(){
    return (dispatch, getState) => {
        //Remove images
        dispatch({type: constants.GALLERY_CLOSE})
        
        //Close Gallery / Go back
        dispatch(NavigationActions.back())
    }
}