import { loadFromStorage } from "../Services/LocalService";
import React, { Component } from "react";
import { getAllSongs, getSongById } from "../Services/songService";
import SongList from "../components/SongList";

export default class LikesPages extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  async componentDidMount() {
    const promiseArr =
      loadFromStorage("likedSongs")?.map((songId) => {
        return getSongById(songId);
      }) || [];
    this.setState({ songs: await Promise.all(promiseArr) });
  }
  render() {
    return (
      <div>
        <SongList songs={this.state?.songs} />
      </div>
    );
  }
}
