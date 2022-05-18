import React, { useState, useEffect } from 'react';
import ReplyList from '../ReplyList/ReplyList';
import ReplyForm from '../ReplyForm/ReplyForm';
import axios from 'axios'
import LikeDislike from '../LikeDislike/LikeDislike';

const Comment = (props) =>{
    const [comment, setComment] = useState(props.comment)

    return(
        <div>
            <h3>{comment.user.username}</h3>
            <p>{comment.text}</p>
            <p>{comment.id}</p>
            <span>Likes:{comment.likes} Dislikes:{comment.dislikes}</span>
            <LikeDislike comment={comment} getVideoComments={props.getVideoComments} videoId={props.videoId}/>
            <ReplyList commentId={comment.id}/>
        </div>
    )

}

export default Comment