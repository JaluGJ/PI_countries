import React from "react";
import style from './Landing.module.css'
import { Link } from "react-router-dom";
//import fondo from '../../Images/Fondo.jpg'

export default function Landing() {
    return (
        <div className={style.conteiner}>
            <div>
            <span className={style.title}>Viajemos por el mundo</span>
            <Link to={`/home`}>
                <button className={style.btn}>Let's travel</button>
            </Link>
            </div>
        </div>
    )
}