import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    };
  }
  render() {
    return (
      <div style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <iframe
          title="Swagger UI"
          src="https://api.uu.vojtechpetrasek.com/v3/docs"
          height="100%"
          width="100%"
        />
        <Footer />
      </div>
    );
  }
}

export default Documentation;
