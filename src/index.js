import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { VideoProvider,VideoContext } from './contexts/videoContext';
import { LikeProvider,LikeContext } from './contexts/likeContext';

export {VideoContext,LikeContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <LikeProvider>
        <App />
        </LikeProvider>
      
      </VideoProvider>
    
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
