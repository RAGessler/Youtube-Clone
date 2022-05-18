import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {DATA} from '../../localData'
import SearchBar from '../../components/SearchBar/SearchBar';
import './SearchPage.css'


const SearchPage = (props) => {
    // const [videoId, setVideoId] = useState('')

    function handleSubmit(videoId){
        // event.preventDefault();
        let newVideoId = videoId
        props.submitVideoInfo(newVideoId)
    }

    console.log('search page vids', props.videos)
    return(
        <div className='container'>
                {props.videos.map((video, element) => {
                    return(
                        <div className='' key={element}>
                            <h3>{video.snippet.title}</h3>
                            <h3>{video.id.videoId}</h3>
                            <h4><a onClick={()=>{handleSubmit(video.id.videoId)}}>Play Video</a></h4>
                        </div>
                    )
                })}

        </div>
    )
}
export default SearchPage