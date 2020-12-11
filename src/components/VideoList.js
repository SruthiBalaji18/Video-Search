//funnctional component
//props holds the value sent by parent class and can be obtained using . operator
//since we need only videos from props, we can directly mention them in {}, instead of props.videos
import React from 'react';
import VideoItem from './VideoItem';
//function name and key value are same so that there will be no confusion - onVideoSelect

//key in VideoItem is specified so that warning doesnt show up in the browser console
const VideoList = ({videos, onVideoSelect}) =>
{
    const renderedList = videos.map((video) =>{
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
    });
    //sent by parent - App
    return<div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;