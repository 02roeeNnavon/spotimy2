import React, { Component } from "react";
import { playSong } from "../Services/utils";
import { Link } from "react-router-dom";
import { loadFromStorage, saveToStorage } from "../Services/LocalService";
import { FaHeart, FaPause, FaPlay } from "react-icons/fa";

export default class SongPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  onAddToStorage = (id) => {
    let likedStorage = loadFromStorage("likedSongs") || [];
    if (likedStorage.includes(id)) {
      const index = likedStorage.indexOf(id);
      likedStorage.splice(index, 1);
      saveToStorage("likedSongs", likedStorage);
    } else {
      likedStorage.push(id);
      saveToStorage("likedSongs", likedStorage);
    }
  };

  isPlaying(props) {
    if (props.isActive === true) {
      return <FaPause size={32} />;
    } else {
      return <FaPlay size={32} />;
    }
  }

  isInLiked(id) {
    let likedStorage = loadFromStorage("likedSongs") || [];
    return likedStorage.includes(id);
  }

  render() {
    const song = this.props.song;
    return (
      <li className="card mb-3 p-2 flex-lg-row flex-sm-column">
        <Link to={`/Song/${song.id}`} className="col-md-4">
          <img src={song.imageurl} className="card-img cover-image" />
        </Link>
        <Link to={`/Song/${song.id}`} className="col-md-4">
          <div className="card-body">
            <h3 className="card-title">{song.name}</h3>
            <p className="card-text">Genre: {song.genre}</p>
            <p className="card-text">Artist: {song.singer}</p>
          </div>
        </Link>

        <div
          className="d-flex align-items-center col-md-4"
          style={{ marginLeft: "81px" }}
        >
          <div className="col-md-1 mx-2">
            <span
              className="btn m-0 p-0"
              onClick={() => {
                playSong(song.songurl);
                this.setState({ isActive: !this.state.isActive });
              }}
            >
            {this.isPlaying(this.props)}
            </span>
          </div>
          <div className="col-md-1 mx-2">
            <span
              className="btn m-0 p-0"
              onClick={() => {
                this.onAddToStorage(song.id);
                this.setState({ ...this.state });
              }}
            >
              <FaHeart
                color={this.isInLiked(song.id) ? "red" : "green"}
                className="m-0 p-0"
                size={32}
              />
            </span>
          </div>
        </div>
      </li>
    );
  }
}
