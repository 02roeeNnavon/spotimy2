import React, { Component } from "react";
import Controlbar from "../components/Controlbar";

export default class SongPage extends Component {
    firstTimePlayed = true;
    onPausePlay = () => {
        let audio;
        if(this.firstTimePlayed) {
            this.firstTimePlayed = false;
            audio = new Audio(this.props.song.songurl);
            audio.play();
        }
        this.setState({ audio: audio, songPlaying: !this.state?.songPlaying });
        this.state.songPlaying ? audio.play() : audio.pause();
    };

    componentDidMount = () => {
        this.setState({ songPlaying: false });
    };

    render() {
        return (
            <div
                style={{
                    margin: "100px",
                    marginRight: "200px",
                    marginLeft: "200px",
                }}
            >
                <img
                    src={this.props.song.imageUrl}
                    className="w-100 img-responsive"
                    style={{ height: "70vh" }}
                ></img>
                <Controlbar
                    title={this.props.song.name}
                    isPlaying={this.state?.isPlaying}
                    onPausePlay={this.onPausePlay}
                />
            </div>
        );
    }
}
