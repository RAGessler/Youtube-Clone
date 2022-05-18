import './Reply.css'
const Reply = (props) => {
    return(
        <div className="reply">
            <h5>{props.reply.user.username}</h5>
            <div>{props.reply.text}</div>
        </div>
    )
}
export default Reply