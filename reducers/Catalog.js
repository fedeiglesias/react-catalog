import * as constants from '../constants';

const initialState = {
    query: "",
    items: [{"id":"52665","codigo":"180-3043-0","descripcion":"del.","precio":"263.982","marca":"Corven","rubros":[{"id":9,"nombre":"Discos de Freno","nombre_singular":"Disco de freno","level":1},{"id":1,"nombre":"Rubros","nombre_singular":"","level":2}],"aplicaciones":[{"nombre":"Fiat","id":35,"modelos":[{"modelo":"Duna","modelo_id":310,"version":null,"desde":"86","hasta":"--"},{"modelo":"Fiorino","modelo_id":311,"version":null,"desde":"86","hasta":"--"},{"modelo":"Palio","modelo_id":314,"version":"1.5","desde":"96","hasta":"98"},{"modelo":"Regatta","modelo_id":316,"version":"Weekend","desde":"86","hasta":"--"},{"modelo":"Siena","modelo_id":317,"version":null,"desde":"96","hasta":"--"},{"modelo":"Uno Nuovo","modelo_id":43652,"version":"Way","desde":"11","hasta":"--"},{"modelo":"Uno","modelo_id":323,"version":null,"desde":"86","hasta":"--"}]}],"dimensiones":[{"id":40,"nombre":"Posici\u00f3n","valor":"Del."},{"id":41,"nombre":"Tipo","valor":"Sol."},{"id":39,"nombre":"\u00d8","valor":"240.00"},{"id":42,"nombre":"Alt. Total","valor":"46.50"},{"id":43,"nombre":"\u00d8 Agu. Copa","valor":"59.00"},{"id":44,"nombre":"Esp.","valor":"12.00"},{"id":45,"nombre":"Esp. Min.","valor":"10.80"},{"id":46,"nombre":"Agujeros","valor":"4"}],"equivalencias":[{"codigo":"83-1815-0","id":54824,"marca":"Fremax","marca_id":28,"precio":306.81},{"codigo":"83-1815-0","id":54825,"marca":"Fremax","marca_id":28,"precio":306.81}],"imgs":["180-3043-0-0.jpg"]},{"id":"54824","codigo":"83-1815-0","descripcion":"del.","precio":"306.810","marca":"Fremax","rubros":[{"id":9,"nombre":"Discos de Freno","nombre_singular":"Disco de freno","level":1},{"id":1,"nombre":"Rubros","nombre_singular":"","level":2}],"aplicaciones":[{"nombre":"Fiat","id":35,"modelos":[{"modelo":"Duna","modelo_id":310,"version":null,"desde":"86","hasta":"--"},{"modelo":"Fiorino","modelo_id":311,"version":null,"desde":"86","hasta":"--"},{"modelo":"Palio","modelo_id":314,"version":"1.5","desde":"96","hasta":"98"},{"modelo":"Regatta","modelo_id":316,"version":"Weekend","desde":"86","hasta":"--"},{"modelo":"Siena","modelo_id":317,"version":null,"desde":"96","hasta":"--"},{"modelo":"Uno Nuovo","modelo_id":43652,"version":"Way","desde":"11","hasta":"--"},{"modelo":"Uno","modelo_id":323,"version":null,"desde":"86","hasta":"--"}]}],"dimensiones":[{"id":40,"nombre":"Posici\u00f3n","valor":"Del."},{"id":41,"nombre":"Tipo","valor":"Sol."},{"id":39,"nombre":"\u00d8","valor":"240.00"},{"id":42,"nombre":"Alt. Total","valor":"46.50"},{"id":43,"nombre":"\u00d8 Agu. Copa","valor":"59.00"},{"id":44,"nombre":"Esp.","valor":"12.00"},{"id":45,"nombre":"Esp. Min.","valor":"10.80"},{"id":46,"nombre":"Agujeros","valor":"4"}],"equivalencias":[{"codigo":"180-3043-0","id":52665,"marca":"Corven","marca_id":46,"precio":263.982}],"imgs":["83-1815-0-0.jpg"]},{"id":"68197","codigo":"83-KIT04-0","descripcion":"del. (KIT) (Disco: 1815 - Pastilla: 318)","precio":"841.365","marca":"Fremax","rubros":[{"id":9,"nombre":"Discos de Freno","nombre_singular":"Disco de freno","level":1},{"id":1,"nombre":"Rubros","nombre_singular":"","level":2}],"aplicaciones":[{"nombre":"Fiat","id":35,"modelos":[{"modelo":"Duna","modelo_id":310,"version":null,"desde":"86","hasta":"--"},{"modelo":"Fiorino","modelo_id":311,"version":null,"desde":"86","hasta":"--"},{"modelo":"Palio","modelo_id":314,"version":"1.5","desde":"96","hasta":"98"},{"modelo":"Regatta","modelo_id":316,"version":"Weekend","desde":"86","hasta":"--"},{"modelo":"Siena","modelo_id":317,"version":null,"desde":"96","hasta":"--"},{"modelo":"Uno","modelo_id":323,"version":null,"desde":"86","hasta":"--"},{"modelo":"Uno Nuovo","modelo_id":43652,"version":"1.4 8v Nafta","desde":"11","hasta":"--"}]}],"dimensiones":[{"id":40,"nombre":"Posici\u00f3n","valor":"Del."},{"id":41,"nombre":"Tipo","valor":"Sol."},{"id":39,"nombre":"\u00d8","valor":"240"},{"id":42,"nombre":"Alt. Total","valor":"46,5"},{"id":43,"nombre":"\u00d8 Agu. Copa","valor":"59"},{"id":44,"nombre":"Esp.","valor":"12"},{"id":45,"nombre":"Esp. Min.","valor":"10,8"},{"id":46,"nombre":"Agujeros","valor":"4+2"}],"equivalencias":[],"imgs":[]}],
    layout: {
        login: {
        },
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
    case constants.CATALOG_LOAD_ITEMS: return {
        ...state,
        items: action.items,
        query: action.query
    }

    default:
      return state;
  }
}