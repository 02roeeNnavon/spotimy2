import React, { Component } from "react";
import * as RM from "../Services/rayMarching";

function AboutPerson(props) {
  return (
    <div className="card col-3">
      <img
        style={{ minHeight: "200px" }}
        src="..."
        className="card-img-top bg-secondary"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.about}</p>
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
    this.rm.colorFunction = RM.Fractal.DEFAULT_FRACTAL_COLOR;
    this.rm.cameraPosition = { x: 12, y: 7, z: 12 };
    this.rm.cameraRotation = { x: 25, y: -135, z: 0 };
    this.rm.extra = sky;
    this.rm.skyColorFunction = "skyColor(uv, reflection, rayDir)";
    this.rm.compile(
      this.refs.rm,
      new RM.MandelboxFractal().getDistanceFunction()
    );
    this.rm.previewScale = 8;
  };

  render() {
    return (
      <div>
        <h2 className="text-center">About the app</h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          incidunt magnam provident reiciendis repellat soluta at cum fugiat
          veritatis quasi, aspernatur, alias porro, quod quidem qui saepe
          voluptatum dicta culpa.
        </p>
        <div className="row justify-content-around mt-5">
          <AboutPerson name="Ariel Slavinsky" about="text about me..." />
          <AboutPerson name="Roee Navon" about="text about me..." />
          <AboutPerson name="Ron Perelman" about="text about me..." />
        </div>
        <div className="row justify-content-center mt-5">
          <canvas className="w-75 h-75" ref="rm"></canvas>
        </div>
      </div>
    );
  }
}
