import { createContext, useContext, useState } from "react";
import { VideoContext } from "./videoContext";

export const LikeContext = createContext();

export const LikeProvider= ({children}) =>{
    const [likesData, setLikesData] = useState([]);
    const {videosData} = useContext(VideoContext);

    const addToLike = (id) =>{
        const selectedVideo = videosData.find(video => video.id===Number(id));
        setLikesData([...likesData, selectedVideo]);
    }

    const removeLike = (id) =>{
        setLikesData(likesData.filter(video => video.id!==Number(id)));
    }

    
    return (
        <LikeContext.Provider value={{likesData, addToLike,removeLike}}>
            {children}
        </LikeContext.Provider>
    )
}