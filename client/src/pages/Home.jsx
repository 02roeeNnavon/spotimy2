import React, { Component } from 'react'
import SongList from '../components/SongList'
import { getAllSongs } from "../Services/songService.js";

export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {songs:[]}
  }
  async componentDidMount(){
    this.setState({songs:await getAllSongs()})
  }
  render() {
    return (
      <div>
        <h1 className='text-center title bg-dark text-light m-0'>Spotimy</h1>\
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}
