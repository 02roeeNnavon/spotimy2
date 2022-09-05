import React, { Component } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export default class extends Component {
    render() {
        return (
            <div className="w-100">
                <h2 className="w-100 d-flex justify-content-center text-defult">
                    {this.props.title}
                </h2>
                <div className="d-flex justify-content-around w-100">
                    <button className="btn btn-dark" onClick={this.props.onPausePlay}>
                        {this.props.isPlaying ? (
                            <FaPauseCircle />
                        ) : (
                            <FaPlayCircle />
                        )}
                    </button>
                </div>
                <input
                    className="w-100 bg-dark"
                    type="range"
                    value={this.props.progress}
                    min="1"
                    max="100"
                    onChange={this.props.onProgress}
                ></input>
            </div>
        );
    }
}
