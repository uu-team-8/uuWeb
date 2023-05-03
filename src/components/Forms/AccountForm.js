import React, { Component } from "react";

import { AuthContext } from "../../context/AuthProvider";

class AccountForm extends Component {
  static contextType = AuthContext;
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
            <div className="card-body text-center">
              <div className="mb-md-1 mt-md-4 px-2 mx-4">
                <h2 className="fw-bold mb-2 text-uppercase">Account</h2>

                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={"form-control form-control-lg h-50"}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="lastname">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className={"form-control form-control-lg"}
                    placeholder="Enter your surname"
                  />
                </div>

                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="nickname">
                    Nickname
                  </label>
                  <input
                    type="text"
                    id="nickname"
                    className={"form-control form-control-lg"}
                    placeholder="Enter your nickname"
                  />
                </div>

                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={"form-control form-control-lg"}
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={"form-control form-control-lg"}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="password2">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    className={"form-control form-control-lg"}
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  className="btn btn-outline-light btn-lg px-5 mb-2"
                  type="submit">
                  Register
                </button>
                <p className="form-outline">
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

export default AccountForm;
