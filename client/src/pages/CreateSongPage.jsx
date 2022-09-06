import React, { Component } from "react";

export default class CreateSongPage extends Component {
  handleSubmit() {}

  render() {
    return (
      <form>
        <div className="row mb-3 p-2 flex-lg-row flex-sm-column bg-header">
          <div className="col-md-6">
            <input
              type="text"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="name:"
            />

            <input
              type="text"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="genre:"
            />

            <input
              type="text"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="singer:"
            />

            <div className="w-75 mx-auto">
              <input type="button" value="Submit" onClick={this.handleSubmit} className="mx-auto my-2 "/>
            </div>
          </div>
          <div className="col-md-3">
            <p className="text-defult">select audio file</p>
            <input
              type="file"
              id="soundFile"
              accept="audio/*"
              className="w-100"
            />
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
