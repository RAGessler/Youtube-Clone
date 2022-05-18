import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const CommentList = (props) =>{
  const [comments, setComments] = useState([])

  async function getVideoComments(videoId){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
    setComments(response.data);}

  useState(()=>{
    getVideoComments(props.videoId)
  })

    return(
        <div className="container">
      <h1>Comments</h1>
      <div>
      {comments.map((el) => {
                return( <Comment videoId={props.videoId} getVideoComments={getVideoComments} comment={el} />)
              })}
      </div>
      <CommentForm videoId={props.videoId}  getVideoComments={getVideoComments}></CommentForm>
    </div>
    )
}
export default CommentList 