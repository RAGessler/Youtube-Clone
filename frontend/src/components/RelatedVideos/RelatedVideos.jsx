import { DATA } from "../../localData"
import React, { useState } from 'react';
import VideoCard from "../VideoCard/VideoCard";




const RelatedVideos = (props) =>{  

  // function handleClick(videoId){
  //   props.pickVideo(videoId)
  // }

  function handleSubmit(videoId){
    let newVideoId = videoId
    props.submitVideoInfo(newVideoId)
  }

    return(
        <div className="container">
      <h1>Related Videos</h1>
      <div className="container">
        <div className="row">
          {props.relatedVideos &&
            props.relatedVideos.map((video) => (
             <div className="col-sm-3 top-buffer" key={video.id.videoId} onClick={()=>{handleSubmit(video.id.videoId)}}>
               <VideoCard video={video} />
                {/* {video.snippet.title}
                <img src={video.snippet.thumbnails.default.url} onClick={() => {handleClick(video.id.videoId)}} /> */}
              </div> 
             ))}
        </div>
      </div>
    </div>
        )
}
export default RelatedVideos