import { createContext, useContext, useState } from "react";
import { VideoContext } from "./videoContext";

export const WatchlaterContext = createContext();

export const WatchlaterProvider= ({children}) =>{
    const [watchlaterData, setWatchlaterData] = useState([]);
    const {videosData} = useContext(VideoContext);

    const addToWatchlater = (id) =>{
        const selectedVideo = videosData.find(video => video.id===Number(id));
        setWatchlaterData([...watchlaterData, selectedVideo]);
    }

    const removeWatchlater = (id) =>{
        setWatchlaterData(watchlaterData.filter(video => video.id!==Number(id)));
    }

    
    return (
        <WatchlaterContext.Provider value={{watchlaterData, addToWatchlater,removeWatchlater}}>
            {children}
        </WatchlaterContext.Provider>
    )
}