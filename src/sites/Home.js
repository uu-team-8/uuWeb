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
            title="grafana"
            src="https://grafana.uu.vojtechpetrasek.com/d-solo/FAj4JIxVk/fve-home?orgId=1&theme=light&panelId=22"
            width="100%"
            height="400"
            frameborder="0"></iframe>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
