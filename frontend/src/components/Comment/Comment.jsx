import React, { useState, useEffect } from 'react';
import ReplyList from '../ReplyList/ReplyList';
import ReplyForm from '../ReplyForm/ReplyForm';
import axios from 'axios'
import LikeDislike from '../LikeDislike/LikeDislike';

const Comment = (props) =>{
    const [comment, setComment] = useState(props.comment)

    return(
        <div>
            <h3>{props.comment.user.username}</h3>
            <p>{props.comment.text}</p>
            <p>{props.comment.id}</p>
            <span>Likes:{props.comment.likes} Dislikes:{props.comment.dislikes}</span>
            <LikeDislike comment={comment} getVideoComments={props.getVideoComments} videoId={props.videoId}/>
            <ReplyList commentId={comment.id}/>
        </div>
    )

}

export default Comment