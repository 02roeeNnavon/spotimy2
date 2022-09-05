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

      <div className=' home-page bg-spotimy'>
        <img className="music-svg music-svg-1" src='Assets/images/music1.svg' alt="" />
        <img className='music-svg music-svg-2' src='Assets/images/music2.svg' alt="" />
        <SongList songs={this.state?.songs}/>
      </div>
    )
  }
}
