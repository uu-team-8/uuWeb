import React, { Component } from "react";
import "./login.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          class="d-flex align-items-center justify-content-center gradient-custom"
          style={{ height: "90vh" }}>
          <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeEmailX">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" htmlfor="typePassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePassword"
                    class="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Login
                </button>
              </div>
              <div>
                <p class="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="text-white-50 fw-bold">
                    Sign Up
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
