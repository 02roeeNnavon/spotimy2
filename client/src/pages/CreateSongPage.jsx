import React, { Component } from "react";
import { postSong } from "../Services/songService";
import { useNavigate } from "react-router-dom";
import { FaMenorah } from "react-icons/fa";

class CreateSongPage extends Component {
  handleSubmit = (e) => {
    let song = {};
    e.preventDefault();
    let audioFile = e.target.querySelector("[name=audioFile]").files[0];
    let imageFile = e.target.querySelector("[name=imageFile]").files[0];

    let imageReader = new FileReader();
    imageReader.onload = () => {
      song.imageBuffer = btoa(
        new Uint8Array(imageReader.result).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      );
      submit();
    };

    const submit = () => {
      postSong(song).then(() => {
        this.props.navigate("/");
      });
    };

    let audioReader = new FileReader();
    audioReader.onload = () => {
      song.audioBuffer = btoa(
        new Uint8Array(audioReader.result).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      );
      if (imageFile) imageReader.readAsArrayBuffer(imageFile);
      else submit();
    };

    song.name = e.target.querySelector("[name=name]").value;
    song.genre = e.target.querySelector("[name=genre]").value;
    song.singer = e.target.querySelector("[name=singer]").value;
    audioReader.readAsArrayBuffer(audioFile);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mb-3 p-2 flex-lg-row flex-sm-column bg-header">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="name:"
            />

            <input
              type="text"
              name="genre"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="genre:"
            />

            <input
              type="text"
              name="singer"
              className="w-75 mx-auto mb-5 search-bar py-2 px-1"
              placeholder="singer:"
            />

            <div className="w-75 mx-auto">
              <input type="submit" className="mx-auto my-2 btn bg-success text-white" />
            </div>
          </div>
          <div className="file-upload-wrapper">
            <p>audio file</p>
            <input type="file" name="audioFile" className="file-upload" />
          </div>
          <div className="file-upload-wrapper">
            <p>image file</p>
            <input type="file" name="imageFile" className="file-upload" />
          </div>
        </div>
      </form>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  return <CreateSongPage navigate={navigate} {...props} />;
};
