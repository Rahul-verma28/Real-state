import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import "./SearchBar.css";


const SearchBar = () => {
    return (
        <div className="flexCenter search-bar text-black">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
        </div>
    )
}

export default SearchBar
