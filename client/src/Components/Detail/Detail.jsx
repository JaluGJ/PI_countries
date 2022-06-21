import React from 'react';
import { useSelector } from 'react-redux';
import DetailAct from '../DetailAct/DetailAct';
import s from './Detail.module.css'
/* import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getCountryDetail } from '../../Redux/actions'; */

export default function Detail({id}) {

    const { flag, name, continent, capital, subregion, area, population, activities } = useSelector(state => state?.country)


    return (
            <div key={id}>
                <div>
                    <img className={s.detFlag} src={flag} alt={`${name}'s flag`} />
                </div>

                <h1 className={s.nameContainer}>{name}</h1>
                <div className={s.detContainer}>
                    <h2>Codigo de país: {id} </h2>
                    <h2>Continente: {continent}</h2>
                    <h2>Capital: {capital}</h2>
                    <h2>Subregion: {subregion}</h2>
                    <h2>Tamaño: {area}</h2>
                    <h2>Poblacion: {population}</h2>
                </div>
                <div>
                    {activities?.map(r => {
                        return (
                            console.log(r),
                            <DetailAct
                                id={r.id}
                                name={r.name}
                                difficulty={r.difficulty}
                                duration={r.duration}
                                season={r.season}
                            />

                        )
                    })
                    }
                </div>
            </div>
    )
}