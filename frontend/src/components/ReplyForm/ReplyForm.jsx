import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios'
import { useParams } from "react-router-dom";

let initialValues = 

const ReplyForm = (props) => {
    const [user, token] = useAuth();
    const [commentId, setCommentId] = useState(props.comment.id)
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        postNewReply
    );
    return(
    <h1>this is the reply form</h1>

    )
}
export default ReplyForm