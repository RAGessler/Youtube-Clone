import React, { useEffect } from "react";
import { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VIdeoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos"
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
    const [videoInfo, setVideoInfo] = useState()

    
    const {videoId} = useParams()
    
    async function getVideoInfo(videoId){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}key=APIKEY
        &part=snippet&fields=items(snippet)`)
        setVideoInfo(response.data)
        console.log(response.data)
    }
    
    return ( 
        <div>
            <VideoPlayer />
            <CommentForm></CommentForm>
            <CommentList comments={props.comments} getVideoComments={props.getVideoComments} videoId={videoId} ></CommentList>
            <RelatedVideos videos={props.videos}></RelatedVideos>
            
        </div>
     );
}
 
export default VideoPage;