import axios from "axios"

const {REACT_APP_BACK_API} = process.env
//----pedidos del get----
export async function generalCountries (){
    try {
        const cntr = await  axios.get(`${REACT_APP_BACK_API}/countries`) 
        return cntr.data
    } catch (error) {
        throw error
    } 
}

export async function countriesName (name){
    try {
        const cntr = await axios.get(`${REACT_APP_BACK_API}/countries?name=${name}`)
        return cntr.data
    } catch (error) {
        throw error
    } 
}

export async function countriesById (id){
    try {
        const cntr = await axios.get(`${REACT_APP_BACK_API}/countries/${id}`)
        return cntr.data
    } catch (error) {
        throw error
    }
}
export async function activitiesAll(){
    try {
        const act = await axios.get(`${REACT_APP_BACK_API}/activities/`)
        return act.data
    } catch (error) {
        throw error
    }
}
export async function activitiesId (id) {
    try {
        const act = await axios.get(`${REACT_APP_BACK_API}/activities?id=${id}`)
        return act.data
    } catch (error) {
        throw error
    }
}
//------envio con post----
export async function activitiesCreate (data){
        const act = await axios.post(`${REACT_APP_BACK_API}/activities`, data)
        return act
}

//-----update  (por si queda tiempo)------
//-----deletes (por si queda tiempo)------