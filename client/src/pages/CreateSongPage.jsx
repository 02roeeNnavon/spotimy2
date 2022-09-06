import React, { Component } from "react";

export default class CreateSongPage extends Component {
  handleSubmit() {}

  render() {
    return (
      <form>
        <div className="row mb-3 p-2 flex-lg-row flex-sm-column bg-header">
          <div className="col-md-6">
            <p className="text-defult">name</p>
            <input type="text" />
            <p className="text-defult">genre</p>
            <input type="text" />
            <p className="text-defult">artist</p>
            <input type="text" />
            <br />
            <input type="button" value="Submit" onClick={this.handleSubmit} />
          </div>
          <div className="col-md-3">
            <p className="text-defult">select audio file</p>
            <input type="file" id="soundFile" accept="audio/*" />
          </div>
          <div className="col-md-3">
            <p className="text-defult">select image</p>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
