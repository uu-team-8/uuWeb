import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "90vh" }}>
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="typename"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeSurname">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="typeSurname"
                    className="form-control form-control-lg"
                    placeholder="Enter your surname"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeNickname">
                    Nickname
                  </label>
                  <input
                    type="text"
                    id="typeNickname"
                    className="form-control form-control-lg"
                    placeholder="Enter your nickname"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlfor="typePassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePassword"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlfor="typePassword2">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="typePassword2"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit">
                  Register
                </button>
              </div>
              <div>
                <p className="mb-0">
                  Already registerd?{" "}
                  <a href="/login" className="text-white-50 fw-bold">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
