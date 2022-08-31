import React, { Component } from "react";
import { FaPlayCircle } from 'react-icons/fa';

export default class extends Component {
    render() {
        return (
            <div className="w-100">
                <h2 className="w-100 d-flex justify-content-center">{this.props.title}</h2>
                <div className="d-flex justify-content-around w-100">
                    <button className="btn btn-dark">Prev</button>
                    <button className="btn btn-dark"><FaPlayCircle/></button>
                    <button className="btn btn-dark">Next</button>
                </div>
                <input className="w-100 bg-dark" type="range" min="1" max="100"></input>
            </div>
        );
    }
}
