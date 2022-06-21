import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/actions';
import s from './Pagination.module.css'
/* primero... 
Tengo que definir numero de pagina actual
eso se va a hacer con el useState(1), que es lo que se va a reenderizar apenas carga la pagina.

Bien, yo tengo un arreglo con los 250 paises. yo, en mi paginado, voy a pasarle un arreglo
cortado, segun el orden en el que viene el "countries" y va a ser lo que le voy a pasar para reenderizar.
 para determinar los valores de donde hasta donde va a cortar, debido a que tengo una primer pagina con
 solo 9 elementos, y el resto con 10, puedo hacer que cuando el currentPage sea igual a 1,
 la logica que va a hacer es que el calculo del indice de la primer paramatro de slice va a ser desde 0 hasta 9.
 luego, si el valor es mayor a 1, hacer el slice de el calculo matematico de dividir por diez la longitud del
  array. 
  El ultimo valor de indice va a ser el numero de pagina, multiplicado por la cantidad de paginas posibles. 
  el primer valor de indice va a ser el numero anterior menos la cantidad de paginas posibles.
  en ambos casos, restar menos uno para la cantidad debido a que la primera instacia tiene de 0 a 8, y es uno menos al normal. 

  la logica anterior, del current page y etc, debería estar en el cards, y luego, al "pagination" pasarle el arreglo ya cortado 
  y pasarle 

  okay okay okay... este componente es SOLO  para los numeros... como me imaginaba antes, la logica de los arreglos. (toda la logica 
    presentada antes), va en el card.
    por lo tanto, a este componente le voy a presentar solo el caluclo numerico de cantidad de paginas... en realidad.. le voy a pasar
    un array de numeros del 1 hasta el numero de paginas que podría tener.  y la pagina actual, que haría que se ilumine o se marque 
    en base a la pagina que se encuentra.
como dije antes, la cantPagin va a ser un array con todos los numeros desde el 1 hasta la cantidad de paginas posibles
que será el resultado del calculo numéricode hacer la longitud del array menos 9 dividido (la cantidad de cards por pag) mas 1 
                                            ((array.length - 9) / (postPerPage)) + 1
    luego, con un for ir metiendo todos los valores a un array. Que ese array va a ser el que paso a cantPag
 */

export default function Pagination( {totalCountries, cardsPerPage} ) {

    const dispatch = useDispatch()

    const {loading, currentPage} = useSelector(state => state)
    const [pageNumber, setPageNumber] = useState([])
   
    const numberOfPages = Math.ceil(( (totalCountries - 9)/ cardsPerPage ) + 1)
    const totalPageNumbers = []
    
    for (let i = 1; i <= numberOfPages; i++){
        totalPageNumbers.push(i)
    }
    const handleNumber = (e) => {
        dispatch(setCurrentPage(parseInt(e)))
    }


  return (
      <div>
        {totalPageNumbers.map( num => {
            return (
                    <button className={currentPage === num ? s.activado : s.desactivado} key={num} value={num} onClick={(e)=> handleNumber(e.target.value)}>{num}</button>
            )
        })
        }
      </div>
  )
}
