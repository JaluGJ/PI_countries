import {GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME} from './const.js'

const initState = {
    allCountries: [],
}


export default function reducer (state = initState, action){
    switch (action.type){
        //Get Countries
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: [...action.payload]
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                allCountries: action.payload
            }
        default: {
            return state
        }
    }
}
