import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SortButton from "../../Components/SortButton/SortButton";
import FilterButton from "../../Components/FilterButton/FilterButton";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <SearchBar/>
            <FilterButton/>
            <SortButton/>
            <Link to='/create'>
                <button>Create new Tourist Activity</button>
            </Link>
            <Link to= '/'>
                <button>Back</button>
            </Link>
            <h1>Este es el navbar</h1>
        </header>
    )
}

export default NavBar