import {Routes, Route} from 'react-router-dom';
import {Home,LikedVideos,WatchLater,Videos,Video} from './pages';
import {Header} from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/likedVideos" element={<LikedVideos/>}/>
        <Route path="/video/:videoId" element={<Video/>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
