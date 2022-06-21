import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
/* import { countriesName } from '../../Functions/ApiCall' */
import { getCountriesByName, setCurrentPage } from '../../Redux/actions'

export default function SearchBar() {
    let [nombre, setName] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getCountriesByName(nombre))
        dispatch(setCurrentPage(1))
        setName('')
    }

    
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={nombre} onChange={(e) => setName(e.target.value)} placeholder='Search a Country' />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
