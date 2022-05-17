import { DATA } from "../../localData"
import React, { useState } from 'react';




const RelatedVideos = (props) =>{  

  function handleClick(videoId){
    props.pickVideo(videoId)
  }

    return(
        <div className="container">
      <h1>Related Videos</h1>
      {props.relatedVideos &&
        props.relatedVideos.map((video) => {
         return <p key={video.id.videoId}>
            {video.snippet.title}
            <img src={video.snippet.thumbnails.default.url} onClick={() => {handleClick(video.id.videoId)}} />
          </p> }
         )}
    </div>
        )
}
export default RelatedVideos