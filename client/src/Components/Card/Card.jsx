import React from "react";
import style from './card.module.css'

export default function Card ({id, img, name, continent}){
    return (
        <>
        <div className={style.card} id={id}>
            <img src={img} alt='img'/>
            <h3>{name}</h3>
            <p>{continent}</p>
        </div>
        </>
    )
}