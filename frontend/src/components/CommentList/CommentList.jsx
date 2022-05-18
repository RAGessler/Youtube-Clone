import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const CommentList = (props) =>{

  // useState(()=>{
  //   props.getVideoComments(props.videoId)
  // })

    return(
        <div className="container">
      <h1>Comments</h1>
      <div>
      {props.comments &&
        props.comments.map((el) => {
                return( <Comment videoId={props.videoId} getVideoComments={props.getVideoComments} comment={el} />)
              })}
      </div>
      <CommentForm videoId={props.videoId}  getVideoComments={props.getVideoComments}></CommentForm>
    </div>
    )
}
export default CommentList 