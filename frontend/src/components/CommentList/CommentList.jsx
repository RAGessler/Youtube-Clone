import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import './CommentList.css'
const CommentList = (props) =>{

  useState(()=>{
    props.getVideoComments(props.videoId)
  })

    return(
        <div className="all-comments">
      <h1>Comments</h1>
      {props.comments &&
        props.comments.map((el) => {
            return(
            <div className='single-comment'>
              <Comment videoId={props.videoId} getVideoComments={props.getVideoComments} comment={el} />
            </div>
            )}
          )}
          <div className='comment-form'>
            <CommentForm videoId={props.videoId}  getVideoComments={props.getVideoComments}></CommentForm>
          </div>
    </div>
    )
}
export default CommentList 