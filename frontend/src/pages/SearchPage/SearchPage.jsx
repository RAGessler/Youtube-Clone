import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {DATA} from '../../localData'
import SearchBar from '../../components/SearchBar/SearchBar';


const SearchPage = (props) => {
    console.log('search page vids', props.videos)
    return(
        <div className='container'>
                {props.videos.map((element) => {
                    return(
                        <div >
                            <h3>{element.snippit.title}</h3>
                        </div>
                    )
                })}

        </div>
    )
}
export default SearchPage