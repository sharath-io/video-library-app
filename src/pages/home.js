import {NavLink} from 'react-router-dom';
export function Home(){
    return (
        <div>
            <h2>welcome to video library</h2>
            <h2>To browse all videos, click below button or go to videos page</h2>
            <NavLink to="/videos" className="nav-link"><button>Explore videos</button></NavLink>
        </div>
    )
}