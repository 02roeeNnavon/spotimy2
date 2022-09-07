import React, { Component } from "react";
import { useRef } from "react";
import {
  clearStorage,
  saveToStorage,
  loadFromStorage,
} from "../Services/LocalService";
import Login from "./Login";
import $ from "jquery";
import { loginUser } from "../Services/userService";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.state = { username: "", password: "" };
  }
  showModal = () => {
    this.modal.current.style.display = "block";
    this.setState({ username: "", password: "" });
  };
  closeModal = () => {
    this.modal.current.style.display = "none";
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onLogout = () => {
    clearStorage("user");
    this.props.update();
  };
  onLogin = async (event) => {
    try {
      const users = await loginUser({
        username: this.state.username,
        password: this.state.password,
      });
      saveToStorage("user", users[0]);
    } catch (err) {
      clearStorage("user");
    }
    this.props.update();
    this.closeModal();
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={() => {
            loadFromStorage("user") ? this.onLogout() : this.showModal();
          }}
        >
          {loadFromStorage("user") ? "log out" : "login"}
        </button>

        <div
          className="modal"
          id="modal"
          ref={this.modal}
          style={{
            display: "none",
            backgroundColor: "rgb(100, 100, 100, 0.5)",
          }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content bg-spotimy">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <Login
                userNameValue={this.state.username}
                userNameOnChange={this.onChange}
                passwordValue={this.state.password}
                passwordOnChange={this.onChange}
                onLogin={this.onLogin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
