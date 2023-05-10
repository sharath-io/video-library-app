import { useContext } from "react";
import { VideoContext } from "../contexts/videoContext";

export function Videos() {
    const {videosData} = useContext(VideoContext);
    return (
        <div>
            <h2>All Videos</h2>
            
            <ul className="video-list">
                {
               videosData.map(({title,id,thumbnail}) =>  <li key={id} className="video-card">
                <img src={thumbnail}/>
                <p>{title}</p>
                <button>Liked</button>
                <button>Add to Watch Later</button>
                </li>)
                }
            </ul>
        </div>
    )
}