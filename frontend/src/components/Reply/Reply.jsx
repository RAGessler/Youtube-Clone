
const Reply = (props) => {
    return(
        <div className="reply-object">
            <h6>{props.reply.user.username}</h6>
            <p>{props.reply.text}</p>
        </div>
    )
}
export default Reply