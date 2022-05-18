import './VideoCard.css'


const VideoCard = (props) => {

    return ( 
     
            <div className='card'>
                <img className="" src={props.video.snippet.thumbnails.default.url} />
                <div>
                    <h6>{props.video.snippet.title}</h6>
                </div>
            </div>

     );
}
 
export default VideoCard;