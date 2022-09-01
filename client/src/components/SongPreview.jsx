import React from "react";
import { playSong } from "../Services/utils";

export default function SongPreview(props) {
  const {song, goToSongPage } = props;
  return (
    <div className="container my-2  bg-secondary p-4 rounded">
      <div className="row">
        <h2 className="text-18pt text-center col-12 bg-dark text-white m-0 my-1 p-1">
          {song.name}
        </h2>
      </div>

      <div className="row">

        <div className="col-4 p-0">
          <img className="card-img col-12   m-0 p-0" src={song.imageUrl} alt={song.name} />
        </div>

        <div className="col-4 ">
           
          <p className="text-center col-12 bg-dark text-white m-0 my-1 p-1">{song.singer}</p>
                
          <p className="text-center col-12 bg-dark text-white m-0 my-1 p-1">{song.genre}</p>
          <button
            className="btn btn-dark w-100pc"
            onClick={() => {
                playSong(song.songUrl);
            }}
            >
            Play
          </button>
             
        </div>

        <div className="col-4 p-0">
          <span
            className="h-100 col-12 btn btn-dark m-0 p-0"
            onClick={() => {
              console.log("liked");
            }}
          >
            Like
          </span>
        </div>
      </div>

      <div className="row">
        <button
          className="col-12 my-1 btn btn-dark"
          onClick={() => {
            goToSongPage(song.id);
          }}
        >
          Song Page
        </button>
      </div>
    </div>
  );
}