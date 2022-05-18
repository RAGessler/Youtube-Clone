import axios from "axios"
import { useEffect, useState } from "react"
import Reply from "../Reply/Reply"
import ReplyForm from "../ReplyForm/ReplyForm"
import "./ReplyList.css"

const ReplyList = (props) => {
    const [replies, setReplies]=useState([])

    async function getCommentReplies(commentId){
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/view`);
        setReplies(response.data);}

    useState(()=>{
        getCommentReplies(props.commentId)
    },[])

    return(
        <div className="reply-container">
                {replies.map((element)=>{
                    return(
                        <div key={element.id} className='individual-reply'>
                            <Reply reply={element} />
                        </div>
                    )
                })}
                <div className="reply-form">
                    <ReplyForm commentId={props.commentId} getCommentReplies={getCommentReplies}/>
                </div>
        </div>
    )
}
export default ReplyList