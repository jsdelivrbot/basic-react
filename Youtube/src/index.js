import loadsh from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import youtube  from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2sEBMZUws6eA0AOyFH0CZ3_1lYDCBDxQ';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
            videos: [],
			selectedVideo: null,
        }

        this.videoSearch('Milan');
    }

    videoSearch(term) {
        youtube({key: API_KEY, term: term}, videos => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        })
	}

	render() {
		const videoSearch = loadsh.debounce(term => { this.videoSearch(term) }, 300)
		return (
		<div>
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={ this.state.selectedVideo } />
			<VideoList
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				videos={this.state.videos}
			/>
		</div>
        )
    };
};

ReactDom.render(
<App />, document.querySelector('.container')
);
