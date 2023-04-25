import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RegisterForm from "../components/Login/RegisterForm";

import "./page.css";

class RegisterPage extends Component {
  render() {
    return (
      <div class="gradient-custom" style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}

export default RegisterPage;
