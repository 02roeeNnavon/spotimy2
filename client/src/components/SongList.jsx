import React, { Component } from 'react'
import SongPreview from './SongPreview'
import { getAllSongs } from '../Services/songService.js'

export default class SongList extends Component {
    constructor(props){
        super(props)
        this.state = {songs:[{id:'012345',name:'test',}]}
    }
    async componentDidMount(){
        this.setState({
          songs:await getAllSongs()})

    }
  render() {
    return (
      <div>{this.state?.songs?.map((element) => {
        return <SongPreview key={element.id} song={element} goToSongPage={(id) => {console.log('hello');}} ></SongPreview>
      })}</div>
    )
  }
}
