import React, { Component } from 'react'
import SongList from '../components/SongList'
import { getAllSongs,search } from "../Services/songService.js";
import SearchBar from '../components/searchBar';


export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {songs:[]}
  }
  async componentDidMount() {
    this.setState({songs:await getAllSongs()})
  }
  onSearch = async (value) => {
    if (value === ""){
      this.setState({songs:await getAllSongs()})
    }else{
      this.setState({songs:await search(value)})
    }
  }
  render() {
    return (
      <div className=' home-page bg-spotimy'>
        <SearchBar onSearch={this.onSearch}></SearchBar>
        <img className="music-svg music-svg-1" src='Assets/images/music1.svg' alt="" />
        <img className='music-svg music-svg-2' src='Assets/images/music2.svg' alt="" />
        <SongList songs={this.state?.songs}/>
      </div>
    )
  }
}
