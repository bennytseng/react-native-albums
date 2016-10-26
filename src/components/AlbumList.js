import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  //initializing state (this.state.albums)
  state = {
    albums: []
  };

  //Lifecycle Method for class components
  //componentWillMount is called the instant that this
  //method is about to be placed on screen (great for
  //data loading)
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //map is a array helper method that iterates object/array
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      //expect this to be scrollable
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
