import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios'

let initialValues = {
        user: "2",
        video_id: '2',
        text: "",
        likes: "0",
        dislikes: "0"
};



const CommentForm = (props) =>{
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues, 
        postNewComment
        );

    async function postNewComment(){
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/comments/post/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }

    }
    const [VideoId, setVideoId] = useState('')

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Comment:{" "}
                    <input 
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">POST</button>
            </form>
        </div>
    )
}
export default CommentForm