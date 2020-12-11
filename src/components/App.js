import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

//2 arguements are sent through VideoList,
//one is the video and other is to open the video

//only for fn calls, {this.fnName} is used
//to pass as props to the child component, just the value would be fine {valueName}

class App extends React.Component{

    state ={ videos : [] , selectedVideo: ''};

    onTermSubmit = async (term) => {
        const response =  await youtube.get('/search',{
        params:{
            q: term
        }
    });

    this.setState({videos : response.data.items});
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video});
    };

    render(){
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>   
                         </div>
                     </div>
                </div>         
        </div>
        )
    }
}
//onFormSubmit is defined in the child component
//details are saved into the state variable

export default App;