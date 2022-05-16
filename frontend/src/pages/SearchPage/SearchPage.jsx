import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {DATA} from '../../localData'
import SearchBar from '../../components/SearchBar/SearchBar';


const SearchPage = (props) => {
    const [videoId, setVideoId] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newVideoId = videoId
        console.log(newVideoId)
        props.submitVideoInfo(newVideoId)
    }

    console.log('search page vids', props.videos)
    return(
        <div className='container'>
                {props.videos.map((video, element) => {
                    return(
                        <div className='card' key={element}>
                            <h3>{video.snippet.title}</h3>
                            <h4><a href={`/video/${video.id}`} onClick={function(event){
                                setVideoId(video.id); handleSubmit()}}  >Play Video</a></h4>
                        </div>
                    )
                })}

        </div>
    )
}
export default SearchPage