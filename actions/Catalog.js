import { ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as constants from '../constants'
import api from '../api'

export function searchWords(words){
    return {type: constants.CATALOG_SEARCH_WORDS, words: words}
}

export function searchItems(query){
    return (dispatch, getState) => {

        //Close dialog
        dispatch(NavigationActions.back())

    
        //API
        api({
            module: 'busqueda',
            action: 'app_search',
            data: { q: query },
            response: (json) => {

                //console.log(json)

                dispatch(this.loadItems(json.result.items, query))

                /*if(json.errors.length){
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
                }*/
            }
        })
    }
  }



  export function loadItems(items, query){
    return {type: constants.CATALOG_LOAD_ITEMS, items: items, query: query}
}