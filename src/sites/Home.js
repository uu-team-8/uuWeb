import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container-fluid row">
          <h1>Body</h1>
          <iframe
            src="https://grafana.uu.vojtechpetrasek.com/d-solo/FAj4JIxVk/fve-home?orgId=1&from=1682327510818&to=1682331110818&theme=dark&panelId=22"
            width="450"
            height="200"
            frameborder="0"></iframe>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
