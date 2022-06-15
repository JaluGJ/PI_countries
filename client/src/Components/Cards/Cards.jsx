import React from "react";
import Card from '../Card/Card'

export default function Cards({ allCountries }) {
    return (
        <>
                {allCountries?.map( r => ( 
                        <Card img={r.flag} name={r.name} continent={r.continent} id={r.id} key={r.id}/>
                        ))}

        </>
    )
}
