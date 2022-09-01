import React, { Component } from 'react'
import SongPreview from './SongPreview'
import { getAllSongs } from '../Services/songService'

export default class SongList extends Component {
    constructor(props){+
        super(props)
        this.state = {songs:[{id:'012345',name:'test',}]}
    }
    componentDidMount(){
        this.setState({songs:getAllSongs().then()})

    }
  render() {
    return (
      <div>{this.state.songs.map((element) => {
        return <SongPreview song={element} goToSongPage={(id) => {console.log('hello');}} ></SongPreview>
      })}</div>
    )
  }
}
