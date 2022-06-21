import React, {useEffect, useState } from 'react';
import Cards from "../../Components/Cards/Cards"
import { useSelector, useDispatch } from 'react-redux'
import { getAllActivities, getAllCountries } from '../../Redux/actions';
import NavBar from '../NavBar/NavBar';
import s from './Home.module.css'
import Pagination from '../../Components/Pagination/Pagination';

export default function Home() {
    const dispatch = useDispatch()

    const { allCountries, loading, currentPage } = useSelector(state => state)
    const [cardsPerPage, setCardsPerPage] = useState(9)
    //console.log('cardsPerPage',cardsPerPage,'currentPag',currentPage)
    
    const changePageQ = () => {
        if (currentPage === 1){
        setCardsPerPage(9)
        }
        if (currentPage > 1){
        setCardsPerPage(10)
    }}
    

    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, [dispatch])

    useEffect(() => {
      changePageQ()
    }, [currentPage])
    

    return (
        <>
            <NavBar />
            <Pagination totalCountries={allCountries.length} cardsPerPage={cardsPerPage} />
            {loading ?
                <img src='https://i.stack.imgur.com/hzk6C.gif' alt='cargando'/>
                :
                <div>{
                    allCountries.length ?
                        <Cards allCountries={allCountries} cardsPerPage={cardsPerPage}/>
                        : <div className={s.error}>
                            <img src='https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif ' alt='404 not Found'/>
                        </div>
                }
                </div>
            }
        </>
    )
}