import React, { Component } from "react";
import SongPreview from "./SongPreview";


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
      <div>
        {
          this.props.songs?.map((element) => {
          return (
            <SongPreview
              key={element.id}
              song={element}
            ></SongPreview>
          );
        })}
      </div>
    );
  }
}
