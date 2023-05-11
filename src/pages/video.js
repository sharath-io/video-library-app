import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/videoContext"
import { useParams } from "react-router-dom";
import { LikeContext } from "../contexts/likeContext";
import { WatchlaterContext } from "../contexts/watchlaterContext";

export function Video(){
    const {videoId} = useParams();
    const {addToLike, likesData} = useContext(LikeContext);
    const {videosData} = useContext(VideoContext);
    const {watchlaterData, addToWatchlater} = useContext(WatchlaterContext);

    const videoDetail = videosData.find((video) => video.id === Number(videoId));
    const {title,thumbnail,description,duration} = videoDetail;

    return (
        <div>
          <h1>here </h1>
          <h3>{title}</h3>
          <div style={{border: '1px solid black', width: '60%'}}>
           <img src={thumbnail} alt={title}/>
            <h3>{title}</h3>
            <h4>description: {description}</h4>
            <p>Duration: {duration}</p>
            {!likesData.includes(videoDetail) 
                ? <button onClick={()=> addToLike(videoDetail.id)}>Like</button>
                : <NavLink to="/likedVideos"><button>Liked</button></NavLink>
                }
{!watchlaterData.includes(videoDetail)
                ?  <button onClick={()=> addToWatchlater(videoDetail.id)}>Add to Watch Later</button>
                : <NavLink to="/watchlater"><button>Added to Watch Later</button></NavLink>}

          </div>
        </div>
    )
}

