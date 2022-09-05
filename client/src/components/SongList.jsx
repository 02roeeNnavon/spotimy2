import React, { Component } from 'react'
import SongPreview from './SongPreview'
import { stopSong } from '../Services/utils'

export default class SongList extends Component {
    componentWillUnmount() {
      stopSong();
    }
  render() {
    return (
      <ul className='d-flex flex-column align-items-center content-list'>{this.props.songs.map((element) => {
        return <SongPreview key={element.id} song={element}></SongPreview>
      })}</ul>
    )
  }
}
