import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = (props)=>{

    const {videoId} = useParams()

    return(<div>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0"></iframe>
    </div>
    
        )
}
export default VideoPlayer

