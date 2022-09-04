import React, { Component } from 'react'
import SongList from '../components/SongList'
import { getAllSongs } from "../Services/songService.js";

export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {songs:[]}
  }
  async componentDidMount() {
    this.setState({songs:await getAllSongs()})
  }
  render() {
    return (
      <div className='bg-spotimy'>
        <SongList songs={this.state?.songs}/>
      </div>
    )
  }
}
