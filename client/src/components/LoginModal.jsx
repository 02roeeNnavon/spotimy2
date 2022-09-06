import React, { Component } from "react";
import { useRef } from "react";
import { clearStorage, saveToStorage } from "../Services/LocalService";

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
          className="btn btn-primary"
          onClick={this.showModal}
        >
          Login
        </button>

        <div
          className="modal"
          ref={this.modal}
          style={{
            display: "none",
            backgroundColor: "rgb(214, 214, 214, 0.5)",
          }}
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>user name:</p>
                <input type="text" name="userName" value={this.state.userName} onChange={this.onChange}/>
                <p>password</p>
                <input type="text" name="password" value={this.state.password} onChange={this.onChange}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.onLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
