import React, { Component } from 'react'
import SongList from '../components/SongList'
import { fillter, getAllSongs,search } from "../Services/songService.js";
import SearchBar from '../components/searchBar';
import Fillter from '../components/Fillter';


export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {songs:[]}
  }
  async componentDidMount() {
    this.setState({songs:await getAllSongs()})
  }
  onSearch = async (value,fillter) => {
    if (value === ""){
      this.setState({songs:await getAllSongs()})
    }else{
      this.setState({songs:await search(value,fillter)})
    }
  }
  onFillter = async (value) => {
    if (value === ""){
      this.setState({songs:await getAllSongs()})
    }else{
      this.setState({songs:await fillter(value)})
    }
  }
  render() {
    return (
      <div className=' home-page bg-spotimy'>
        <div className='row justify-content-center'>
        <SearchBar className="col-3" onSearch={this.onSearch} fillter="name"></SearchBar>
        <Fillter className="col-3" onFillter={this.onFillter}></Fillter>
        </div>
        <img className="music-svg music-svg-1" src='Assets/images/music1.svg' alt="" />
        <img className='music-svg music-svg-2' src='Assets/images/music2.svg' alt="" />
        <SongList songs={this.state?.songs}/>
      </div>
    )
  }
}
