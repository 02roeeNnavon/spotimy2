import React, { Component } from "react";
import SongPreview from "./SongPreview";
import { stopSong } from "../Services/utils";
import { loadFromStorage, saveToStorage } from "../Services/LocalService";

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPlayingId: null, liked: loadFromStorage("likedSongs")};
  }

  componentWillUnmount() {
    stopSong();
  }

  onLike = (id) => {
    let likedStorage = loadFromStorage("likedSongs") || [];
    if (likedStorage.includes(id)) {
      const index = likedStorage.indexOf(id);
      likedStorage.splice(index, 1);
      saveToStorage("likedSongs", likedStorage);
    } else {
      likedStorage.push(id);
      saveToStorage("likedSongs", likedStorage);
    }
    this.setState({liked:loadFromStorage("likedSongs")});
  };

  isInLiked(id) {
    let liked = this.state.liked || [];
    return liked.includes(id);
  }

  onPausePlay = (id, isActive) => {
    this.setState({currentPlayingId: isActive? id : null});
  }
  render() {
    return (
      <ul className="d-flex flex-column align-items-center content-list">
        {this.props.songs.map((element) => {
          return (
            <SongPreview
              key={element.id}
              song={element}
              isLiked={this.isInLiked(element.id)}
              currentPlayingId={this.state.currentPlayingId}
              onPausePlay={this.onPausePlay}
              onLike={this.onLike}
            ></SongPreview>
          );
        })}
      </ul>
    );
  }
}
