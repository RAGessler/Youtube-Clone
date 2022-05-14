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
    
    const {videoId} = useParams()

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