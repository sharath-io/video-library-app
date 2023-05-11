import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { LikeContext } from '../contexts/likeContext';
import { WatchlaterContext } from '../contexts/watchlaterContext';
export function Header(){
    const {likesData} = useContext(LikeContext);
    const {watchlaterData} = useContext(WatchlaterContext);
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/videos" className="nav-link">Videos</NavLink>
                <NavLink to="/likedVideos" className="nav-link">Liked Videos ({likesData.length})</NavLink>
                <NavLink to="/watchlater" className="nav-link">Watch Later ({watchlaterData.length})</NavLink>
            </nav>
        </div>
    )
}