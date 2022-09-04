import React from "react";
import { playSong } from "../Services/utils";
import { Link } from "react-router-dom";
import { loadFromStorage, saveToStorage } from "../Services/LocalService";



export default function SongPreview(props) {
  const {song, goToSongPage } = props;
 
  
const onAddToStorage=(id)=>{
  let likedStorage = loadFromStorage('likedSongs') || [];
  if(likedStorage.includes(id)){
    const index = likedStorage.indexOf(id)
    likedStorage.splice(index, 1);
    saveToStorage('likedSongs',likedStorage);
  }
  else{
    likedStorage.push(id);
    saveToStorage('likedSongs',likedStorage);
  }
}
  return (
    <div className="container my-2  bg-secondary p-4 rounded">
      <div className="row">
        <h2 className="text-18pt text-center col-12 bg-dark text-white m-0 my-1 p-1">
          {song.name}
        </h2>
      </div>

      <div className="row">

        <div className="col-4 p-0">
          <img width={300} height={200} className="card-img col-12 m-0 p-0" src={song.imageurl} alt={song.name} />
        </div>

        <div className="col-4 ">
           
          <p className="text-center col-12 bg-dark text-white m-0 my-1 p-1">{song.singer}</p>
                
          <p className="text-center col-12 bg-dark text-white m-0 my-1 p-1">{song.genre}</p>
          <button
            className="btn btn-dark w-100pc"
            onClick={() => {
                playSong(song.songurl);
            }}
            >
            Play
          </button>
             
        </div>

        <div className="col-4 p-0">
          <span
            className="h-100 col-12 btn btn-dark m-0 p-0"
            onClick={() => {
             onAddToStorage(song.id)
            }}
          >
            Like
          </span>
        </div>
      </div>

      <div className="row">
        {/* <Link
          className="col-12 my-1 btn btn-dark"
          onClick={() => {
            console.log("hi");
          }}
        >
          Song Page
        </Link> */}
      </div>
    </div>
  );
}
