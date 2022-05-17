import axios from "axios"
import React, { useEffect, useState } from 'react';

const Reply = (props) => {

        useEffect(() => {
            props.getCommentReplies(props.commentId)
        },[])

    return(
        <div className="reply-container">
            <h2>replies</h2>
            {props.replies.map((element)=>{
                return(
                    <div key={props.commentId}>
                        <h2>{element.user.username}</h2>
                        <p>{element.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Reply


// import axios from "axios"
// import React, { useEffect, useState } from 'react';

// const Reply = (props) => {
//     const [replies, setReplies] = useState([])
//     async function getCommentReplies(commentId){
//         let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/view`)
//         setReplies(response.data)}

//         useEffect(() => {
//             getCommentReplies(props.commentId)
//         },[])
//     return(
//         replies.map((element) => {
//             return(
//                 <div key={element.id}>
//                     <h2>{element.user.username}</h2>
//                     <p>{element.text}</p>
//                 </div>
//             )
//         })
//     )
// }
// export default Reply