import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Login/LoginForm";

import "./page.css";

class LoginPage extends Component {
  render() {
    return (
      <div class="gradient-custom" style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
