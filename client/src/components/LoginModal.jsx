import React, { Component } from "react";
import { useRef } from "react";
import { clearStorage, saveToStorage } from "../Services/LocalService";
import Login from "./Login";
import $ from 'jquery'; 

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.state = {'userName':'','password':''}
  }
  showModal = () => {
    this.modal.current.style.display = "block";
  };
  closeModal = () => {
    this.modal.current.style.display = "none";
  };
  onChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }
  onLogin = (event) => {
    if (this.state.userName === 'admin' & this.state.password === '1234'){
        saveToStorage('user',{userName:'admin',password:'1234',status:'admin'})
    }
    else{
        console.log('hello')
        clearStorage('user')
    }
    this.props.update();
    this.closeModal();
  } 
  render() {
    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={this.showModal}
        >
          Login
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
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
                userNameValue={this.state.userName} userNameOnChange={this.onChange}
                passwordValue={this.state.password} passwordOnChange={this.onChange}
                onLogin={this.onLogin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
