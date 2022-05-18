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

    const videoId = useParams();

    useEffect(()=>{
        console.log('whole object:',props.selectedVideo)
    },[])

    useEffect(() => {
        props.getVideoComments(videoId)
        props.getRelatedVideos(videoId)
    },[props.selectedVideo])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [videoId])

    return ( 
        <div>
            <h1>{props.selectedVideo.snippet.title}</h1>
            <div>{props.selectedVideo.snippet.description}</div>
            <VideoPlayer videoId={props.selectedVideo.id.videoId} />
            <CommentList videoId={props.selectedVideo.id.videoId} comments={props.comments} getVideoComments={props.getVideoComments}></CommentList>
            <RelatedVideos relatedVideos={props.searchedVideos} getRelatedVideos={props.getRelatedVideos} pickVideo={props.pickVideo} submitVideoInfo={props.submitVideoInfo} ></RelatedVideos>

        </div>
     );
}
 
export default VideoPage;