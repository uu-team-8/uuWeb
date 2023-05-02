import React, { Component } from "react";
import { AuthContext } from "../../context/AuthProvider";

class LoginForm extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      email: { value: "", valid: false, touched: false },
      password: { value: "", valid: false, touched: false },
      submitting: false,
      remember: false,
    };
  }

  login = (e) => {
    e.preventDefault();
    if (this.state.email.value === "" || this.state.password.value === "") {
      this.setState({
        email: { ...this.state.email, touched: true },
        password: { ...this.state.password, touched: true },
      });
    } else {
      this.setState({ submitting: true });
      this.postLogin();
    }
  };

  postLogin = () => {
    fetch("https://api.uu.vojtechpetrasek.com/v3/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email.value,
        password: this.state.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("token", data.token);
          this.setState({ submitting: false });
          this.context.setIsAuth(true);
          this.context.setToken(data.token);
          console.log(data);
          setInterval(() => {
            window.location.href = "/";
          }, 500);
        } else if (data.message === "User not exist") {
          this.setState({ submitting: false });
          this.setState({
            email: {
              ...this.state.email,
              valid: false,
              touched: true,
              errMsg: "User not found",
            },
          });
        } else if (data.message === "Wrong password") {
          this.setState({ submitting: false });
          this.setState({
            password: {
              ...this.state.password,
              valid: false,
              touched: true,
              errMsg: "Wrong password",
            },
          });
        }
      });
  };

  handleEmailChange = (e) => {
    e.preventDefault();
    if (
      e.target.value === "" ||
      e.target.value === null ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
    ) {
      this.setState({
        email: { value: e.target.value, valid: false, touched: true },
      });
    } else {
      this.setState({
        email: { value: e.target.value, valid: true, touched: true },
      });
    }
  };

  handlePasswordChange = (e) => {
    e.preventDefault();
    if (e.target.value === "" || e.target.value === null) {
      this.setState({
        password: { value: e.target.value, valid: false, touched: true },
      });
    } else {
      this.setState({
        password: { value: e.target.value, valid: true, touched: true },
      });
    }
  };

  render() {
    return (
      <div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "80vh" }}>
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your email and password!
                </p>

                <div className="form-outline form-white mb-3">
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX"
                    className={
                      "form-control form-control-lg" +
                      (this.state.email.touched
                        ? this.state.email.valid
                          ? " is-valid"
                          : " is-invalid"
                        : "")
                    }
                    placeholder="Enter a valid email address"
                    onChange={this.handleEmailChange}
                    value={this.state.email.value}
                  />
                  <div className="invalid-feedback">
                    {this.state.email.errMsg
                      ? this.state.email.errMsg
                      : "You must provide valid email."}
                  </div>
                  <div className="valid-feedback">Looks good.</div>
                </div>

                <div className="form-outline form-white mb-3">
                  <label className="form-label" htmlFor="typePassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePassword"
                    className={
                      "form-control form-control-lg" +
                      (this.state.password.touched
                        ? this.state.password.valid
                          ? " is-valid"
                          : " is-invalid"
                        : "")
                    }
                    placeholder="Enter your password"
                    onChange={this.handlePasswordChange}
                    value={this.state.password.value}
                  />

                  <div className="invalid-feedback">
                    {this.state.password.errMsg
                      ? this.state.password.errMsg
                      : "You must provide valid password."}
                  </div>

                  <div className="valid-feedback">Looks good.</div>
                </div>

                <p className="small mb-3 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>

                <button
                  className={
                    "btn btn-outline-light btn-lg px-5" +
                    (this.state.submitting ? " disabled" : "")
                  }
                  type="submit"
                  onClick={this.login}>
                  Login
                </button>
              </div>
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="/register" className="text-white-50 fw-bold">
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

export default LoginForm;
