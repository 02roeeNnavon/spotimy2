import React, { Component } from "react";
import Controlbar from "../components/Controlbar";

export default class SongPage extends Component {
    render() {
        this.componentDidMount = () => {
            let audio = new Audio(this.props.song.songUrl);
            audio.play();
            this.setState({ audio: audio });
        };

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
                <Controlbar title="Title" />
            </div>
        );
    }
}
