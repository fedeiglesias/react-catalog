import * as constants from '../constants';

const initialState = {
    session: 'loading',
    profile: {},
    screens: {
        login: {
            username: '',
            password: '',
            loading: false,
        },
    },
}

export default function account(state = initialState, action) {
  switch (action.type) {
   
    ////////////////////////////////////////////////////
    // GENERAL
    ////////////////////////////////////////////////////
    case constants.ACCOUNT_SESSION_STATUS: return {
        ...state,
        session: action.status
    }

    case constants.ACCOUNT_LOAD_PROFILE: return {
        ...state,
        profile: action.profile,
        session: 'logged_in'
    }




        ////////////////////////////////////////////////////
        // LOGIN SCREEN
        ////////////////////////////////////////////////////
        case constants.ACCOUNT_LOGIN_LOADING: return { 
            ...state,
            screens: { ...state.screens,
                loading: action.status
            }
        }

        case constants.ACCOUNT_LOGIN_USERNAME_CHANGE: return {
            ...state,
            screens: { ...state.screens,
                username: action.text
            }
        }

        case constants.ACCOUNT_LOGIN_PASSWORD_CHANGE: return {
            ...state,
            screens: { ...state.screens,
                password: action.text
            }
        }





    default:
      return state;
  }
}