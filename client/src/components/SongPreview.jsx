import React from 'react'
import { playSong } from '../Services/utils';
export default function SongPreview(props) {
    const {id,name,singer,genre,imageUrl,songUrl,goToSongPage} = props;
  return (
    <div>
        <h2>{name}</h2>
        <p>{singer}</p>
        <p>{genre}</p>
        <img src={imageUrl} alt={name} />
        <button onClick={() => {playSong(songUrl)}}>Play</button>
        <button onClick={() => {goToSongPage(id)}}>Song Page</button>
    </div>
  )
}
