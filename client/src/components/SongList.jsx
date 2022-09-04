import React, { Component } from 'react'
import SongPreview from './SongPreview'
import { stopSong } from '../Services/utils'

export default class SongList extends Component {
    componentWillUnmount() {
      stopSong();
    }
  render() {
    return (
      <div>{this.props.songs.map((element) => {
        return <SongPreview key={element.id} song={element}></SongPreview>
      })}</div>
    )
  }
}
