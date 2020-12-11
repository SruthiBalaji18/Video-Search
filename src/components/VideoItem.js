import React from 'react';
import './VideoList.css';

const VideoItem = ({video, onVideoSelect}) =>{
    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item"> 
        <img className="ui image" alt={video.snippet.title}  src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>

    </div>
    )

}
//instead of creating another function call, 
// arrow function is being used to open the video selected
export default VideoItem;
