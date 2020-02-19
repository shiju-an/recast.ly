import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }


  componentDidMount(value = '') {
    console.log(value);
    let options = {
      key: YOUTUBE_API_KEY,
      query: value,
      max: 5
    };
    this.props.searchYouTube(options, (videoArray) => {
      this.setState({allVideos: videoArray});
    });
    this.render();
  }

  onMouseClick(e, video) {
    e.preventDefault();
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search update={this.componentDidMount.bind(this)}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickFunc={this.onMouseClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
