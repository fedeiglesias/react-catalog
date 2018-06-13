import {LOGIN_LOADING, LOGIN_PASSWORD_CHANGE, LOGIN_USERNAME_CHANGE, LOGIN_LOGIN} from '../constants';

const initialState = {
    username: '',
    password: '',
    loading: false 
}

export default function login(state = initialState, action) {
  switch (action.type) {
    
    case LOGIN_LOADING:
      return { 
        ...state,
        loading: action.state
      }
    
    case LOGIN_USERNAME_CHANGE:
      return {
        ...state,
        username: action.text
      }
    
    case LOGIN_PASSWORD_CHANGE:
      return {
        ...state,
        password: action.text
      }

    default:
      return state;
  }
}