import { createContext, useState, useEffect } from "react";
import {fakeFetch} from '../api/fakeFetch';

export const VideoContext = createContext();

export const VideoProvider= ({children}) =>{
    const [videosData, setVideosData] = useState([]);

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/videos');
            if(status === 200){
                setVideosData(data.videos);
            }

        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <VideoContext.Provider value={{videosData}}>
            {children}
        </VideoContext.Provider>
    )
}