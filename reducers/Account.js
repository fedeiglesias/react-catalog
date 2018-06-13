import * as constants from '../constants';

const initialState = {
    session: 'loading',
    profile: {},
    layout: {
        login: {
            username: '',
            password: '',
            loading: false,
        },
    },
}

export default function account(state = initialState, action) {
  switch (action.type) {
    
    case constants.ACCOUNT_SESSION_STATUS: return {
        ...state,
        session: action.status
    }

    case constants.ACCOUNT_LOAD_PROFILE: return {
        ...state,
        profile: action.profile,
        session: 'logged_in'
    }

    case constants.ACCOUNT_EMPTY_PROFILE: return {
        ...state,
        profile: {},
        session: 'anonymous'
    }

    default:
      return state;
  }
}