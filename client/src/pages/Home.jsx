import React, { Component } from 'react'
import SongList from '../components/SongList'
import { stopSong } from '../Services/utils'

export default class home extends Component {
  componentWillUnmount(){
    stopSong();
  }
  render() {
    return (
      <div>
        <h1 className='text-center title bg-dark text-light m-0'>Spotimy</h1>\
        <SongList></SongList>
      </div>
    )
  }
}
