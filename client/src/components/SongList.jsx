import React, { Component } from "react";
import SongPreview from "./SongPreview";
import { stopSong } from "../Services/utils";

export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPlayingId: null};
  }
  componentWillUnmount() {
    stopSong();
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
              currentPlayingId={this.state.currentPlayingId}
              onPausePlay={this.onPausePlay}
            ></SongPreview>
          );
        })}
      </ul>
    );
  }
}
