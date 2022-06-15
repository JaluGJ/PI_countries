import React, { Component, useEffect } from 'react';
import Cards from "../../Components/Cards/Cards"
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries } from '../../Redux/actions';
import NavBar from '../../Components/NavBar/NavBar';

export default function Home() {
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state?.allCountries)
    /* console.log('este es mi allcountries', allCountries) */
    
    useEffect(() => {
        dispatch(getAllCountries())
    },[])

    return (
        <>
            <div>
                <NavBar/>
                <Cards allCountries={allCountries} />
            </div>
        </>
    )
}