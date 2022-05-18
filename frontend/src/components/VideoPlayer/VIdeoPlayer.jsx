import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./VideoPlayer.css"

const VideoPlayer = (props)=>{

    return(
    <div className='video-player'>
        <iframe style={{height:"40em", width:"100%"}} classname="iframe" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0"></iframe>
    </div>
    
        )
}
export default VideoPlayer

