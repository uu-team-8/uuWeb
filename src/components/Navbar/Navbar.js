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
        <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="/">
              {/*<img height="70" alt="Logo" loading="lazy" />*/}
              IoT uuCloud
            </a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Docs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Team
                  </a>
                </li>
                {this.token && (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Devices
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/gateways">
                          Gateways
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Sensors
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          LoRa
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
            {this.token ? (
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <img
                    src={user_photo}
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    alt=""
                    width="70"
                    height="70"></img>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        Account
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <a class="btn btn-outline-light" href="/login" role="button">
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
