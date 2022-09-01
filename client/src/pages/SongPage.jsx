import React, { Component } from "react";
import Controlbar from "../components/Controlbar";

export default class SongPage extends Component {
    progressInterval;
    onPausePlay = () => {
        if (this.state.audio.paused) {
            this.state.audio.play();
            this.setState({ isPlaying: true });
        } else {
            this.state.audio.pause();
            this.setState({ isPlaying: false });
        }
    };

    componentWillUnmount = () => {
        window.clearInterval(this.progressInterval);
    }

    componentDidMount = () => {
        this.setState(
            {
                progress: 0,
                isPlaying: false,
                audio: new Audio(this.props.song.songurl),
            },
            () => {
                this.progressInterval = window.setInterval(() => {
                    this.setState({
                        progress:
                            100 *
                            (this.state.audio.currentTime /
                                this.state.audio.duration),
                    });
                }, 100);
            }
        );
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
                    src={this.props.song.imageurl}
                    className="w-100 img-responsive"
                    style={{ height: "70vh" }}
                ></img>
                <Controlbar
                    title={this.props.song.name}
                    isPlaying={this.state?.isPlaying}
                    progress={this.state?.progress || 0}
                    onPausePlay={this.onPausePlay}
                />
            </div>
        );
    }
}
