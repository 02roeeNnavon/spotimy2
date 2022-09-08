import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <section className="vh-100 vw-75 text-defult">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="form-outline mb-4 pt-5">
                                    <input
                                        type="text"
                                        name="username"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a user name"
                                        value={this.props.userNameValue}
                                        onChange={this.props.userNameOnChange}
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example3"
                                    >
                                        User name
                                    </label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        name="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={this.props.passwordValue}
                                        onChange={this.props.passwordOnChange}
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example4"
                                    >
                                        Password
                                    </label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="button"
                                        style={{
                                            paddingLeft: "2.5rem",
                                            paddingRight: "2.5rem",
                                        }}
                                        onClick={this.props.onLogin}
                                    >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <a onClick={() => {window.alert('Error 418: i\'m a teapot.')}}>Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Roim rachok © 2022. All rights reserved.
                    </div>
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
