import React from "react";
import { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoPlayer from "../../components/VideoPlayer/VIdeoPlayer";
import CommentList from "../../components/CommentList/ComentList";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos"
import axios from "axios";

const VideoPage = (props) => {
    return ( 
        <div>
            <VideoPlayer />
            <CommentForm></CommentForm>
            <CommentList></CommentList>
            <RelatedVideos></RelatedVideos>
        </div>
     );
}
 
export default VideoPage;