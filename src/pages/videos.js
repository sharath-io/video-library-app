import { useContext } from "react";
import { VideoContext } from "../contexts/videoContext";
import { LikeContext } from "../contexts/likeContext";

export function Videos() {
    const {videosData} = useContext(VideoContext);
    const {addToLike,likesData} = useContext(LikeContext)
    return (
        <div>
            <h2>All Videos</h2>
            
            <ul className="video-list">
                {
               videosData.map((video) =>  <li key={video.id} className="video-card">
                <img src={video.thumbnail} alt={video.title}/>
                <p>{video.title}</p>
                <button onClick={()=> addToLike(video.id)} disabled={likesData.includes(video) ? true : false}>Like</button>
                <button>Add to Watch Later</button>
                </li>)
                }
            </ul>
        </div>
    )
}