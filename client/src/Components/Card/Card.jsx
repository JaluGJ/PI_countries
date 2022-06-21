import React from "react";
import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card ({id, img, name, continent}){
    return (
            <div className={style.card} id={id}>
                <img className={style.cardImg} src={img} alt={`${name}'s flag`}/>
                <h3>{name}</h3>
                <p>{continent}</p>
                <Link to= {`/country/${id}`}>
                    <span>Detalle</span>
                </Link>
            </div>
    )
}