import React from "react";

import { AuthContext } from "../../context/AuthProvider";

class NavBar extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  token = localStorage.getItem("token");

  getUser = () => {
    fetch("https://api.uu.vojtechpetrasek.com/v3/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          localStorage.removeItem("token");
        } else {
          this.setState({ user: data });
          this.context.setUser(data);
          console.log(this.state);
        }
      });
  };

  logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    console.log("logout");

    window.location.reload();
    window.location.href = "/login";
  };
  componentDidMount() {
    if (this.token) {
      this.getUser();
    } else if (this.context.token) {
      this.token = this.context.token;
      console.log(this.token);
      console.log("token");
      this.getUser();
    }
  }
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              {/*<img height="70" alt="Logo" loading="lazy" />*/}
              IoT uuCloud
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/docs">
                    Docs
                  </a>
                </li>
                {this.token && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Devices
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/gateways">
                          Gateways
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Sensors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          LoRa
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/device">
                          Test device
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
            {Object.keys(this.context.user).length !== 0 ? (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      href="/account"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Logged as: {this.context.user.nickname}
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="/account">
                          Account
                        </a>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={this.logout}>
                          Log out
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ) : (
              <a className="btn btn-outline-light" href="/login" role="button">
                Login
              </a>
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
