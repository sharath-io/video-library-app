import { useContext } from "react";
import { LikeContext } from "../contexts/likeContext"

export function LikedVideos(){
    const {likesData, removeLike} = useContext(LikeContext);
    return (
        <div>
            <h1>Liked Videos</h1>
            <ul className="video-list">
                {
               likesData.map(({title,id,thumbnail}) =>  <li key={id} className="video-card">
                <img src={thumbnail} alt={title}/>
                <p>{title}</p>
                <button onClick={() => removeLike(id)}>Remove Like</button>
                </li>)
                }
            </ul>

        </div>
    )
}