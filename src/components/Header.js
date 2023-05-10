import {NavLink} from 'react-router-dom';
export function Header(){
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/videos" className="nav-link">Videos</NavLink>
                <NavLink to="/likedVideos" className="nav-link">Liked Videos</NavLink>
                <NavLink to="/watchlater" className="nav-link">Watch Later</NavLink>
            </nav>
        </div>
    )
}