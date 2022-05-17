import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LikeDislike = (props) => {
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    async function likeOrDislike(){
        let body={}
        if (like === true){
            body = {
                user: props.comment.user.id,
                video_id: props.comment.video_id,
                text: props.comment.text,
                likes: props.comment.likes +1,
                dislikes: props.comment.dislikes
            }}
            else if (dislike === true){
                body = {
                    user: props.comment.user.id,
                    video_id: props.comment.video_id,
                    text: props.comment.text,
                    likes: props.comment.likes,
                    dislikes: props.comment.dislikes +1
                }}
                let response = await axios.put(`http://127.0.0.1:8000/api/comments/edit/${props.comment.id}/`, body)
        }
        useEffect(() => {
            if (like !== ''){}
            likeOrDislike()
        }, [like, dislike])
        function clickLike(){
            setLike(true)
        }
        function clickDislike(){
            setDislike(true)
        }

    return(<div>
        <button onClick={() => clickLike()}>Like</button>
        <button onClick={() => clickDislike()}>Dislike</button>
    </div>)
}

export default LikeDislike
