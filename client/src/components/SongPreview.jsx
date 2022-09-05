import React, { Component } from "react";
import { isPlaying, getProgress, playSong, stopSong } from "../Services/utils";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaPause, FaPlay } from "react-icons/fa";

export default class SongPreview extends Component {
  progress = 0;
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  onClickHeart = (id) => {
    let likes = loadFromStorage("likedSongs") || [];
    if (likes.includes(id)) {
      const index = likes.indexOf(id);
      likes.splice(index, 1);
      saveToStorage("likedSongs", likes);
    } else {
      likes.push(id);
      saveToStorage("likedSongs", likes);
    }

  
  render() {
    const song = this.props.song;
    return (
      <li className="card mb-3 p-2 flex-lg-row flex-sm-column bg-header">
        <Link to={`/Song/${song.id}`} className="col-md-4">
          <img
            src={song.imageurl}
            alt={song.songurl}
            className="card-img cover-image"
          />
        </Link>
        <Link to={`/Song/${song.id}`} className="col-md-4">
          <div className="card-body">
            <h3 className="card-title">{song.name}</h3>
            <p className="card-text">Genre: {song.genre}</p>
            <p className="card-text">Artist: {song.singer}</p>
          </div>
        </Link>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-link p-0 mr-3"
            onClick={() => {
              this.props.currentPlayingId === song.id
                ? stopSong()
                : playSong(song.songurl, this.progress);
              this.props.onPausePlay(song.id, isPlaying());
              this.progress = getProgress();
            }}
          >
            {this.props.currentPlayingId === song.id ? (
              <FaPause className="text-green" size={32} />
            ) : (
              <FaPlay className="text-green" size={32} />
            )}
          </button>
          <button
            className="btn btn-link p-0"
            onClick={() => {
              this.onClickHeart(song.id);
              this.setState({ ...this.state });
              if (this.props.onLike) {
                this.props.onLike();
              }
            }}
          >
            {this.isInLiked(song.id) ? (
              <FaHeart size={32} className="text-green" />
            ) : (
              <FaRegHeart size={32} className="text-green" />
            )}
          </button>
        </div>
      </li>
    );
  }
}
