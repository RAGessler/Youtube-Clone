import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        let newSearchTem = searchTerm
        console.log(newSearchTem)
        props.submitSearch(newSearchTem)
        navigate('/results')
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default SearchBar