import React, { Component } from "react";
import Controlbar from "../components/Controlbar";
import * as songService from "../Services/songService.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
};

class SongPage extends Component {
    constructor(props) {
        super(props);
        this.state = { audio: null, isPlaying: false, progress: 0 };
    }
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
        this.state.audio?.pause();
    };

    componentDidMount = () => {
        let songId = this.props.params.id;
        songService.getSongById(songId).then((song) => {
            this.setState(
                {
                    song: song,
                    progress: 0,
                    isPlaying: false,
                    audio: new Audio(song.songurl),
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
        });
    };

    render() {
        if (!this.state.song) {
            return <></>;
        }
        return (
            <div
                style={{
                    margin: "100px",
                    marginRight: "200px",
                    marginLeft: "200px",
                    justifyContent: "center",
                }}
            >
                <img
                    src={this.state.song.imageurl}
                    className="w-100 img-responsive"
                ></img>
                <Controlbar
                    title={this.state?.song.name}
                    isPlaying={this.state?.isPlaying}
                    progress={this.state?.progress || 0}
                    onPausePlay={this.onPausePlay}
                />
            </div>
        );
    }
}

export default withRouter(SongPage);
