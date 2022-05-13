import Comment from "../Comment/Comment"

const CommentList = (props) =>{
    return(
        <div className="container">
      <h1>Comments</h1>
      {props.comments.map((el) => {              
                return(
                <div key={el}>
                    <Comment user={el.user} videoId={video_id} comment={el.text} likes={el.likes} dislikes={el.dislikes} />
                </div>
                )
              })}
    </div>
    )
}
export default CommentList