import React, { useState, useEffect } from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import Reply from '../Reply/Reply';
import ReplyForm from '../ReplyForm/ReplyForm'

const CommentList = (props) =>{

    useEffect(() => {
        props.getVideoComments(props.videoId);
      }, [])

    return(
        <div className="container">
      <h1>Comments</h1>
      {props.comments.map((el) => {              
                return(
                <div key={el.id}>
                  <h2>{el.user.first_name}</h2>
                  <h3>{el.text}</h3>
                  <h4>likes:{el.likes}</h4>
                  <h4>dislikes:{el.dislikes}</h4>
                    <LikeDislike comment={el} videoId={el.video_id}/>
                    <div className='replies'> <Reply comment={el.id} /> </div>
                    <div className='replyForm'> <ReplyForm comment={el.id} /> </div>
                </div>
                )
              })}
    </div>
    )
}
export default CommentList