import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/videoContext";
import { LikeContext } from "../contexts/likeContext";
import { WatchlaterContext } from "../contexts/watchlaterContext";

export function Videos() {
    const {videosData} = useContext(VideoContext);
    const {addToWatchlater,watchlaterData } = useContext(WatchlaterContext);
    const {addToLike,likesData,removeLike} = useContext(LikeContext)
    return (
        <div>
            <h2>All Videos</h2>
            
            <ul className="video-list">
                {
               videosData.map((video) =>  <li key={video.id} className="video-card">
                <img src={video.thumbnail} alt={video.title}/>
                <p>{video.title}</p>
                {!likesData.includes(video) 
                ? <button onClick={()=> addToLike(video.id)}>Like</button>
                : <button onClick={()=> removeLike(video.id)}>Remove Like</button>
                }

                {!watchlaterData.includes(video) 
                ?  <button onClick={()=> addToWatchlater(video.id)}>Add to Watch Later</button>
                : <NavLink to="/watchlater"><button>Go to Watch Later</button></NavLink>
}
                </li>)
                }
            </ul>
        </div>
    )
}