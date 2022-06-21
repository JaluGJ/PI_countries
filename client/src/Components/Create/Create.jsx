import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { activitiesCreate } from '../../Functions/ApiCall'
import dataValidator from '../../Functions/Validations'
import { getAllCountries } from '../../Redux/actions'


export default function Create() {

    const { allCountries } = useSelector(state => state)

    const dispatch = useDispatch()
    let history = useHistory()

    const [inputs, setInputs] = useState({})
    const [error, setError] = useState({})

    const [createButton, setCreateButton] = useState(true)

    const [countriesSelected, setCountriesSelected] = useState([])
    const [listCountries, setListCountries] = useState(allCountries)
    const [country, setCountry] = useState('')


    useEffect(() => {
        if (!allCountries.length) {
            dispatch(getAllCountries())
        }
        setListCountries([...allCountries])


    }, [dispatch, allCountries])

    useEffect(() => {
        setError(dataValidator(inputs, countriesSelected))

    }, [countriesSelected])


    const handleSubmit = (e) => {
        e.preventDefault()
        activitiesCreate({
            ...inputs,
            countries: countriesSelected
        })
        setInputs({
            ...inputs,
            name: '',
            difficulty:'',
            season:'',
            duration:'',
        })
        setCountriesSelected([])
        setCreateButton(true)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        const validador =dataValidator({
            ...inputs,
            [e.target.name]: e.target.value
        }, countriesSelected)
        
        setError(validador)
        if (!Object.keys(validador).length) {
            setCreateButton(false)
        }
        else {
            setCreateButton(true)
        }
    }
    
    const addHandler = (ev) => {
        ev.preventDefault()
        let buscador = listCountries.find(r => r.name === country)
        if (buscador) {
            setCountriesSelected([...countriesSelected, country])
            setListCountries(listCountries.filter(r => r.name !== country))

            setError({
                ...error,
                country: false
            })
        }
        else {
            setError({
                ...error,
                country: true
            })
        }
        setCountry('')
    }


    const difficulty = ['Nigthmare', 'Expert', 'Hard', 'Normal', 'Easy']
    const season = ['Spring', 'Summer', 'Winter', 'Autum/Fall']
    return (

        <div>
            <Link to='/home'>
                <button>volver</button>
            </Link>
            <form onSubmit={e => handleSubmit(e)} onChange={e => handleChange(e)}>
                {/*----------------------------------name------------------------------------------- */}
                <div>
                    <label>Name of the activity</label>
                    <input name='name' type='text' placeholder='Activity Name' value={inputs.name}/>
                    {error.name && <p>{error.name}</p>}
                </div>
                {/*----------------------------------difficulty------------------------------------------- */}
                <div>
                    <label>Set a difficulty</label>
                    <select name="difficulty" id="difficulty"  value={inputs.difficulty}>
                        <option hidden>Select difficulty</option>
                        {difficulty?.map(r => {
                            return (
                                <option value={r} name={r} id={r} key={r}>{r}</option>
                            )
                        })}
                    </select>
                    {error.difficulty && <p>{error.difficulty}</p>}
                </div>
                {/*----------------------------------season------------------------------------------- */}
                <div>
                    <label> Set the starting season</label>
                    <select name="season" id="seasons"  value={inputs.season}>
                        <option hidden>Choose a season</option>
                        {season.map(r => {
                            return (
                                <option value={r}>{r}</option>
                            )
                        })}
                    </select>
                </div>
                {error.season && <p>{error.season}</p>}
                {/*-----------------------------------countries------------------------------------------ */}
                <div>
                    <label> Chose your countries</label>
                    <input
                        placeholder='Search a country'
                        type='search' name='countries'
                        list='listaDePaises'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <datalist id='listaDePaises' >
                        {listCountries?.map(c => {
                            return (
                                <option value={c.name}>{c.name}</option>
                            )
                        })}
                    </datalist>
                    <button name='countries' onClick={(ev) => addHandler(ev)}>Add</button>
                    {/* -------------------Display de error----------- */}
                    {error.countries && <p>{error.countries}</p>}
                    {/* -----------Display de countries------------------- */}
                    <div>
                        {countriesSelected.map(r => {
                            return (
                                <p>{r}</p>
                            )
                        })}
                    </div>
                </div>
                {/*----------------------------------------duration------------------------------------- */}
                <div>
                    <label>Set a duration in days</label>
                    <input name='duration' type='number' min="1" step='1' placeholder='A integer number of days'  value={inputs.duration}/>
                </div>
                {error.duration && <p>{error.duration}</p>}
                {/*----------------------------------------------------------------------------- */}

                <button type='submit' name='create' disabled={createButton}>Crear</button>

            </form>
        </div>
    )
}
