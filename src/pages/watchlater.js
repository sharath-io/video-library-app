import { useContext } from "react";
import { WatchlaterContext } from "../index";

export function WatchLater(){
    const {watchlaterData,removeWatchlater} = useContext(WatchlaterContext);
    return (
        <div>
            <h1>WatchLater</h1>
            <ul className="video-list">
                {
               watchlaterData.map(({title,id,thumbnail}) =>  <li key={id} className="video-card">
                <img src={thumbnail} alt={title}/>
                <p>{title}</p>
                <button onClick={() => removeWatchlater(id)}>Remove from WatchLater</button>
                </li>)
                }
            </ul>
        </div>
    )
}