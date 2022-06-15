import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { countriesName } from '../../Functions/ApiCall'

export default function SearchBar() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(countriesName(name))
        setName('')
        setName(name = event)
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Search a Country' />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
