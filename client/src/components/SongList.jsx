import React, { Component } from "react";
import SongPreview from "./SongPreview";


export default class SongList extends Component {
  render() {
    return (
      <div>
        {
          this.props.songs?.map((element) => {
          return (
            <SongPreview
              key={element.id}
              song={element}
              goToSongPage={(id) => {
                console.log("hello");
              }}
            ></SongPreview>
          );
        })}
      </div>
    );
  }
}
