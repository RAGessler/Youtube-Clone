import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    let Navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState();


    function handleClick(query){
        Navigate(`/results/${query}`)
    }

    return(
        <div className="container">
            <form className="form">
                <ul>
                    <li>
                        <input
                            type="text"
                            name="searchQuery"
                            value={searchQuery}
                            placeholder="Search"
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                    </li>
                    <li>
                        <button onClick={() => handleClick(searchQuery)}> </button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default SearchBar