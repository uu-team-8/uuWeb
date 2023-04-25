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
          class="d-flex align-items-center justify-content-center"
          style={{ height: "90vh" }}>
          <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="typename"
                    class="form-control form-control-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeSurname">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="typeSurname"
                    class="form-control form-control-lg"
                    placeholder="Enter your surname"
                  />
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeNickname">
                    Nickname
                  </label>
                  <input
                    type="text"
                    id="typeNickname"
                    class="form-control form-control-lg"
                    placeholder="Enter your nickname"
                  />
                </div>

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
                <div class="form-outline form-white mb-4">
                  <label class="form-label" htmlfor="typePassword2">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="typePassword2"
                    class="form-control form-control-lg"
                    placeholder="Enter your password"
                  />
                </div>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Register
                </button>
              </div>
              <div>
                <p class="mb-0">
                  Already registerd?{" "}
                  <a href="/login" class="text-white-50 fw-bold">
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
