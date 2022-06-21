import React /* { useEffect } */ from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doFilterByActivity, doFilterByContinet, setCurrentPage } from '../../Redux/actions'
//import { LOADING } from '../../Redux/const'

/*0:
activities: Array(1)
    0:
    difficulty: "Expert"
    duration: 5
    id: "3834f22b-839f-4478-902b-93b6d38b5cb5"
    name: "Simple "
    season: "Summer"
    todos:
        activityId: "3834f22b-839f-4478-902b-93b6d38b5cb5"
        countryId: "COL"
        createdAt: "2022-06-21T02:00:23.940Z"
        updatedAt: "2022-06-21T02:00:23.940Z"
        [[Prototype]]: Object
    [[Prototype]]: Object
length: 1
    [[Prototype]]: Array(0)
area: 1141748
capital: "Bogotá"
continent: "South America"
flag: "https://flagcdn.com/w320/co.png"
id: "COL"
name: "Colombia"
population: 50882884
subregion: "South America"
[[Prototype]]: Object */


export const Any = 'Any'

export default function FilterButton() {


    const { backUpCountries, continentFilter, allActivities, activityFilter } = useSelector(state => state)


    const dispatch = useDispatch()
    const continents = []
    const activitiess = []

    allActivities.forEach(a => {
        if (activitiess.includes(a.name)) {
            return
        } else {
            return activitiess.push(a.name)
        }
    })

    backUpCountries.forEach(r => {
        if (continents.includes(r.continent)) {
            return
        } else {
            return continents.push(r.continent)
        }
    })
    //console.log(backUpCountries)
    const handleFilter = (e) => {
        e.preventDefault()
        if (e.target.name === 'continents') {
            dispatch(doFilterByContinet(backUpCountries, e.target.value))
        }
        if (e.target.name === 'activities') {
            dispatch(doFilterByActivity(backUpCountries, e.target.value))
        }
        dispatch(setCurrentPage(1))
    }

    return (
        <>
            <div>

                <select name='continents' onChange={(e) => handleFilter(e)} value={continentFilter}>
                    <option key='Any' value='Any' name='Any'>Filter by Continent</option>
                    {continents?.map(c => {
                        return (
                            <option key={c} value={c} name={c}>{c}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <select name='activities' onChange={(e) => handleFilter(e)} value={activityFilter}>
                    <option key='Any' value='Any' name='Any'>Filter by Activities</option>
                    {activitiess?.map(ac => {
                        return (
                            <option key={ac} value={ac} name={ac}>{ac}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

