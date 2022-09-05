import { loadFromStorage } from "../Services/LocalService";
import React, { Component } from "react";
import { getAllSongs, getSongById } from "../Services/songService";
import SongList from "../components/SongList";

export default class LikesPages extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  updateLikedSongs = async () => {
    const promiseArr =
    loadFromStorage("likedSongs")?.map((songId) => {
      return getSongById(songId);
    }) || [];
    this.setState({ songs: await Promise.all(promiseArr) });
  }

  async componentDidMount() {
    this.updateLikedSongs();
  }

  onLike = async () => {
    this.updateLikedSongs();
  }

  render() {
    return (
      <div>
        <SongList onLike={this.onLike} songs={this.state?.songs} />
      </div>
    );
  }
}
