import {GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME} from './const';
import { countriesName, generalCountries } from '../Functions/ApiCall';
//------------Get actions--------------
//GAC => llamar a la Api (nuestro back) y traer todos los países. Payload serán los países
export function getAllCountries(){
    return async function (dispatch){
        try {
            //console.log('entre al get all')
            const countries = await generalCountries()
            return dispatch({type: GET_ALL_COUNTRIES, payload:countries})
        } catch (error) {
            console.log(error)
        }
    }
}
//GCBY => llamar a la Api (nuestro back) y traer los paises cuyo nombre coincida. Payload será un arreglo de los paises que matchean
export function getCountriesByName (name){
    return async function (dispatch){
        try {
            console.log('entre al get by name')
            const countriesId = await countriesName(name)
            return dispatch({type: GET_COUNTRIES_BY_NAME, payload:countriesId})
        } catch (error) {
            console.log(error)
        }
    }
}