import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between w-100">
                    <button className="btn btn-dark">Prev</button>
                    <button className="btn btn-dark">Play</button>
                    <button className="btn btn-dark">Next</button>
                </div>
                <input className="w-100 bg-dark" type="range" min="1" max="100"></input>
            </div>
        );
    }
}
