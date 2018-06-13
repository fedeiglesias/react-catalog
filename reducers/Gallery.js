import * as constants from '../constants';

const initialState = {
    imgs: [],
}

export default function (state = initialState, action) {
  
    console.log('Corre la accion ' + action.type)
    
    switch (action.type) {
        case constants.GALLERY_OPEN: return {
            ...state,
            imgs: action.imgs
        }

        case constants.GALLERY_CLOSE: return {
            ...state,
            imgs: []
        }

        default:
        return state;
  }
}