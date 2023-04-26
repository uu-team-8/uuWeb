import React from "react";

import user_photo from "../../images/sonic.png";

class NavBar extends React.Component {
  token = localStorage.getItem("token");
  logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    console.log("logout");

    window.location.reload();
    window.location.href = "/login";
  };
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
                  <a className="nav-link" href="/">
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Team
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
                    </ul>
                  </li>
                )}
              </ul>
            </div>
            {this.token ? (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <img
                    src={user_photo}
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    alt=""
                    width="70"
                    height="70"></img>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/">
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
