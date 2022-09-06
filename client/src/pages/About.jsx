import React, { Component } from "react";
import * as RM from "../Services/rayMarching";

function AboutPerson(props) {
    return (
        <div className="card col-3 bg-header">
            <img
                style={{ minHeight: "200px" }}
                src={props.img}
                className="card-img-top bg-secondary mt-2 object-fit-cover h-100"
            />
            <div className="card-body">
                <h5 className="card-title text-defult">{props.name}</h5>
                <p className="card-text text-defult">{props.about}</p>
            </div>
        </div>
    );
}

export default class About extends Component {
    rm;
    componentWillUnmount = () => {
        this.rm.destroy();
    };
    componentDidMount = () => {
        let sky = `
            vec3 skyColor(vec2 uv, int reflection, vec3 rayDir) {
            uv.y += 0.25;
            float y = reflection == 0 ? (-uv.y + uRotation.x - length(uv - vec2(0.0, -1.0)) / 4.0) : (-rayDir.y - length(uv) / 4.0);
            return exp2(y / vec3(0.1, 0.3, 0.6)) - vec3(0, 0.4, 0.4);
        }
        `;
        this.rm = new RM.RayMarcher();
        this.rm.shadows = false;
        this.rm.lightFunction = "vec3(uPosition)";
        this.refs.rm.width = window.innerWidth;
        this.refs.rm.height = window.innerHeight;
        this.rm.colorFunction = RM.Fractal.DEFAULT_FRACTAL_COLOR + '* 0.8';
        this.rm.cameraPosition = { x: 12, y: 7, z: 12 };
        this.rm.cameraRotation = { x: 25, y: -135, z: 0 };
        this.rm.extra = sky;
        this.rm.shadows = true;
        this.rm.skyColorFunction = "skyColor(uv, reflection, rayDir)";
        let fractal = new RM.MandelboxFractal();
        fractal.iterations = 10;
        this.rm.compile(this.refs.rm, fractal.getDistanceFunction());
        this.rm.previewScale = 13;
    };

    render() {
        return (
            <div className="pt-5 pb-5">
                <h2 className="text-center text-defult">About the app</h2>
                <p className="text-center text-defult">
                    Spotimy is a website that let you listen to songs online
                </p>
                <div className="row justify-content-around mt-5">
                    <AboutPerson
                        name="Ariel Slavinsky"
                        about="text about me..."
                        img="/Assets/images/ariel.jpg"
                    />
                    <AboutPerson
                        name="Roee Navon"
                        about="text about me..."
                        img="/Assets/images/roee.jpg"
                    />
                    <AboutPerson
                        name="Ron Perelman"
                        about="text about me..."
                        img="/Assets/images/ron.jpg"
                    />
                </div>
                <div className="row justify-content-center mt-5">
                    <canvas className="w-75 h-75" ref="rm"></canvas>
                </div>
            </div>
        );
    }
}
