import * as constants from '../constants';

const initialState = {
    query: "",
    items: [],
    loading: false,
    layout: {
    },
}


export default function (state = initialState, action) {
  switch (action.type) {

    //Change Search Words
    case constants.CATALOG_SEARCH_WORDS: return {
        ...state,
        searchWords: action.words
    }

    //Change Search Words
    case constants.CATALOG_LOADING: return {
        ...state,
        loading: action.status
    }

    //Change Search Words
    case constants.CATALOG_LOAD_ITEMS: return {
        ...state,
        items: action.items,
        query: action.query
    }

    default:
      return state;
  }
}